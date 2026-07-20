import { useMemo } from "react";
import useWeather from "../hooks/useWeather";

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Full-page fixed overlay that renders a lightweight CSS-driven weather
 * effect matching the visitor's real current weather: rain, snow, sun
 * glow, drifting clouds, or fog haze. Pure CSS animation (no per-frame
 * JS) so it stays cheap even alongside the Three.js background.
 */
export default function WeatherEffect() {
  const { condition } = useWeather();

  const rainDrops = useMemo(
    () =>
      Array.from({ length: 60 }).map(() => ({
        left: `${randomBetween(0, 100)}%`,
        delay: `${randomBetween(0, 2)}s`,
        duration: `${randomBetween(0.6, 1.2)}s`,
        height: `${randomBetween(14, 28)}px`,
      })),
    []
  );

  const snowFlakes = useMemo(
    () =>
      Array.from({ length: 40 }).map(() => ({
        left: `${randomBetween(0, 100)}%`,
        delay: `${randomBetween(0, 5)}s`,
        duration: `${randomBetween(4, 8)}s`,
        size: `${randomBetween(3, 7)}px`,
      })),
    []
  );

if (!condition) {
  return null;
}
  return (
    <div className="fixed inset-0 z-[5] pointer-events-none overflow-hidden">
      {condition === "rain" && (
        <>
          {rainDrops.map((d, i) => (
            <span
              key={i}
              className="absolute top-0 w-px bg-gradient-to-b from-transparent via-slate-300/60 to-slate-300/10"
              style={{
                left: d.left,
                height: d.height,
                animation: `rain-fall ${d.duration} linear infinite`,
                animationDelay: d.delay,
              }}
            />
          ))}
        </>
      )}

      {condition === "thunderstorm" && (
        <>
          {rainDrops.map((d, i) => (
            <span
              key={i}
              className="absolute top-0 w-px bg-gradient-to-b from-transparent via-slate-300/70 to-slate-300/20"
              style={{
                left: d.left,
                height: d.height,
                animation: `rain-fall ${d.duration} linear infinite`,
                animationDelay: d.delay,
              }}
            />
          ))}
        </>
      )}

      {condition === "snow" && (
        <>
          {snowFlakes.map((f, i) => (
            <span
              key={i}
              className="absolute top-0 rounded-full bg-white/80"
              style={{
                left: f.left,
                width: f.size,
                height: f.size,
                animation: `snow-fall ${f.duration} linear infinite`,
                animationDelay: f.delay,
              }}
            />
          ))}
        </>
      )}

      {condition === "clear" && (
        <div
          className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-amber-300/30 blur-[90px]"
          style={{ animation: "sun-pulse 4s ease-in-out infinite" }}
        />
      )}
      {condition === "cloudy" && (
  <>
    <div
      className="absolute top-16 left-0 h-24 w-64 rounded-full bg-white/[0.05] blur-2xl"
      style={{ animation: "cloud-drift 32s linear infinite" }}
    />
    <div
      className="absolute top-40 left-0 h-32 w-80 rounded-full bg-white/[0.04] blur-2xl"
      style={{ animation: "cloud-drift 48s linear infinite", animationDelay: "-15s" }}
    />
    <div
      className="absolute top-64 left-0 h-20 w-56 rounded-full bg-white/[0.05] blur-2xl"
      style={{ animation: "cloud-drift 40s linear infinite", animationDelay: "-8s" }}
    />
  </>
)}

{condition === "fog" && (
  <>
    <div
      className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-slate-300/10 to-transparent"
      style={{ animation: "fog-drift 10s ease-in-out infinite" }}
    />
    <div
      className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-300/10 to-transparent"
      style={{ animation: "fog-drift 14s ease-in-out infinite", animationDelay: "-4s" }}
    />
  </>
)}
    </div>
  );
}
