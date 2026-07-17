import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useSectionTheme } from "../context/ThemeContext";

const PARTICLE_COUNT = 1600;

export default function ThreeBackground() {
  const mountRef = useRef(null);
  const targetColor = useRef(new THREE.Color("#7c6cff"));
  const { theme } = useSectionTheme();

  useEffect(() => {
    targetColor.current.set(theme.primary);
  }, [theme]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const positions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: targetColor.current,
      size: 0.045,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const glowGeo = new THREE.SphereGeometry(1, 16, 16);
    const glowMat = new THREE.MeshBasicMaterial({
      color: targetColor.current,
      transparent: true,
      opacity: 0.08,
    });
    const glow1 = new THREE.Mesh(glowGeo, glowMat.clone());
    glow1.scale.setScalar(6);
    glow1.position.set(-6, 3, -5);
    scene.add(glow1);

    const glow2 = new THREE.Mesh(glowGeo, glowMat.clone());
    glow2.scale.setScalar(5);
    glow2.position.set(7, -4, -8);
    scene.add(glow2);

    let frameId;
    const clock = new THREE.Clock();

    function animate() {
      const t = clock.getElapsedTime();

      material.color.lerp(targetColor.current, 0.02);
      glow1.material.color.lerp(targetColor.current, 0.02);
      glow2.material.color.lerp(targetColor.current, 0.02);

      points.rotation.y = t * 0.02;
      points.rotation.x = Math.sin(t * 0.05) * 0.1;

      glow1.position.y = 3 + Math.sin(t * 0.3) * 0.6;
      glow2.position.y = -4 + Math.cos(t * 0.25) * 0.6;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
