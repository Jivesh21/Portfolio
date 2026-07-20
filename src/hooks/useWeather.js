import { useEffect, useState } from "react";

// Maps WMO weather codes (from Open-Meteo) to a simple condition bucket
// used to decide which visual effect to render.
function codeToCondition(code) {
  if ([0, 1].includes(code)) return "clear";
  if ([2, 3].includes(code)) return "cloudy";
  if ([45, 48].includes(code)) return "fog";
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "rain";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow";
  if ([95, 96, 99].includes(code)) return "thunderstorm";
  return "clear";
}

const FALLBACK_COORDS = { latitude: 28.6139, longitude: 77.209 }; // New Delhi fallback

/**
 * Fetches the visitor's real current weather (via geolocation + the free,
 * key-less Open-Meteo API) and returns a simplified condition bucket plus
 * temperature. Falls back to a default location if geolocation is denied.
 */
export default function useWeather() {
  const [weather, setWeather] = useState({ condition: null, temp: null, loading: true });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const override = params.get("weather");
    if (override) {
      setWeather({ condition: override, temp: 20, loading: false });
      return;
    }
    let cancelled = false;

    async function fetchWeather(lat, lon) {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        const data = await res.json();
        if (cancelled) return;
        const code = data?.current_weather?.weathercode ?? 0;
        setWeather({
          condition: codeToCondition(code),
          temp: data?.current_weather?.temperature ?? null,
          loading: false,
        });
      } catch (err) {
        console.error("Weather fetch failed:", err);
        if (!cancelled) setWeather({ condition: "clear", temp: null, loading: false });
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => fetchWeather(FALLBACK_COORDS.latitude, FALLBACK_COORDS.longitude),
        { timeout: 5000 }
      );
    } else {
      fetchWeather(FALLBACK_COORDS.latitude, FALLBACK_COORDS.longitude);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  return weather;
}
