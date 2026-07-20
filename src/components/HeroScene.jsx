import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useSectionTheme } from "../context/ThemeContext";

/**
 * A rotating 3D icosahedron (wireframe + solid core) that tilts toward
 * the mouse position. Mounted inside the Hero visual slot, sized to its
 * container rather than the full viewport.
 */
export default function HeroScene() {
  const mountRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const targetColor = useRef(new THREE.Color("#7c6cff"));
  const { theme } = useSectionTheme();

  useEffect(() => {
    targetColor.current.set(theme.primary);
  }, [theme]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1.9, 1);

    const material = new THREE.MeshBasicMaterial({
      color: targetColor.current,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    const wireMesh = new THREE.Mesh(geometry, material);
    scene.add(wireMesh);

    const coreMaterial = new THREE.MeshBasicMaterial({
      color: targetColor.current,
      transparent: true,
      opacity: 0.08,
    });
    const coreMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1.7, 1), coreMaterial);
    scene.add(coreMesh);

    function handleMouseMove(e) {
      const rect = mount.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    }
    window.addEventListener("mousemove", handleMouseMove);

    let frameId;
    const clock = new THREE.Clock();

    function animate() {
      const t = clock.getElapsedTime();

      material.color.lerp(targetColor.current, 0.02);
      coreMaterial.color.lerp(targetColor.current, 0.02);

      wireMesh.rotation.y = t * 0.25 + mouse.current.x * 0.6;
      wireMesh.rotation.x = t * 0.15 + mouse.current.y * 0.4;
      coreMesh.rotation.copy(wireMesh.rotation);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      coreMaterial.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
  }
