import { useState } from 'react';
import { motion } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Focus } from './components/Focus';
import { Skills } from './components/Skills';
import { LearningTimeline } from './components/LearningTimeline';
import { Projects } from './components/Projects';
import { Vision } from './components/Vision';
import { Networking } from './components/Networking';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export function App() {
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3500);
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#F4F4F6] selection:bg-[#D4AF37]/30 selection:text-[#FBF7EE] font-sans antialiased overflow-x-hidden">
      {/* Cinematic Entrance Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Desktop Custom Luxury Gold Cursor */}
      <CustomCursor />

      {/* Atmospheric Subtle Mathematical Particle Grid Canvas */}
      <ParticleCanvas />

      {/* Main Content (fades/slides into view as requested) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col min-h-screen"
      >
        {/* Navigation */}
        <Navbar />

        {/* Main Sections */}
        <main className="flex-grow flex flex-col">
          <Hero />
          <About />
          <Focus />
          <Skills />
          <LearningTimeline />
          <Projects />
          <Vision />
          <Networking onShowToast={showToast} />
          <Contact onShowToast={showToast} />
        </main>

        {/* Footer */}
        <Footer />
      </motion.div>

      {/* Global Luxury Toast System */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

export default App;
