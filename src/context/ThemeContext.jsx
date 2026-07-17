import { createContext, useContext } from "react";
import useActiveSection from "../hooks/useActiveSection";

// Each section gets its own accent palette. Add more sections/colors later
// as new features are built — this is the single place to control it.
export const SECTION_THEMES = {
  home: { primary: "#7c6cff", secondary: "#5eead4", tertiary: "#f472b6", label: "violet" },
  about: { primary: "#5eead4", secondary: "#7c6cff", tertiary: "#38bdf8", label: "teal" },
  skills: { primary: "#f472b6", secondary: "#7c6cff", tertiary: "#facc15", label: "pink" },
  projects: { primary: "#38bdf8", secondary: "#7c6cff", tertiary: "#5eead4", label: "sky" },
  experience: { primary: "#facc15", secondary: "#f472b6", tertiary: "#7c6cff", label: "amber" },
  certificates: { primary: "#a78bfa", secondary: "#5eead4", tertiary: "#f472b6", label: "purple" },
  contact: { primary: "#7c6cff", secondary: "#f472b6", tertiary: "#5eead4", label: "violet" },
};

const SECTION_IDS = Object.keys(SECTION_THEMES);

const ThemeContext = createContext({
  theme: SECTION_THEMES.home,
  activeSection: "home",
});

export function ThemeProvider({ children }) {
  const activeSection = useActiveSection(SECTION_IDS);
  const theme = SECTION_THEMES[activeSection] || SECTION_THEMES.home;

  return (
    <ThemeContext.Provider value={{ theme, activeSection }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useSectionTheme() {
  return useContext(ThemeContext);
}
