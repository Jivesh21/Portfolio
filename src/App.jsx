import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Preloader from "./components/Preloader";
import ThreeBackground from "./components/ThreeBackground";
import HangingMascot from "./components/HangingMascot";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import WeatherEffect from "./components/WeatherEffect";
export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <ThemeProvider>
          <CustomCursor />
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-base-950 min-h-screen overflow-x-hidden"
          >
            <ThreeBackground />
<WeatherEffect />
            <HangingMascot />
            <div className="relative z-10">
              <Navbar />
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Certificates />
                <Achievements />
                <Contact />
              </main>
              <Footer />
              <BackToTop />
            </div>
          </motion.div>
        </ThemeProvider>
      )}
    </>
  );
}
