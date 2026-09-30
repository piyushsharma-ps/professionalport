import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Send, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Subtle Luxury Radial Gold Gradient Accent behind Hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] rounded-full bg-gradient-to-b from-[#D4AF37]/8 via-[#D4AF37]/3 to-transparent blur-[120px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center text-center my-auto">
        {/* Subtle pill tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#0E0E10]/80 shadow-[0_0_20px_rgba(212,175,55,0.08)] mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-sans font-medium">
            AI &amp; ML Foundation • 2026 Trajectory
          </span>
        </motion.div>

        {/* Cinematic Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.08em] font-bold text-[#F4F4F6] uppercase leading-none max-w-5xl"
        >
          PIYUSH <span className="gold-gradient-text">SHARMA</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-sm sm:text-base md:text-lg tracking-[0.2em] uppercase font-sans text-[#E5E5E7] font-medium"
        >
          AI &amp; ML Student <span className="text-[#D4AF37] px-2 font-normal">|</span> Future AI Professional <span className="text-[#D4AF37] px-2 font-normal">|</span> Aspiring Entrepreneur
        </motion.p>

        {/* Four Fields Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 flex items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#8E8E93] font-sans"
        >
          <span>AI / ML</span>
          <span className="text-[#D4AF37]/50">•</span>
          <span>FINANCE</span>
          <span className="text-[#D4AF37]/50">•</span>
          <span>REAL ESTATE</span>
          <span className="text-[#D4AF37]/50">•</span>
          <span>ENTREPRENEURSHIP</span>
        </motion.div>

        {/* Short introduction paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-[#A1A1AA] font-light"
        >
          "{PERSONAL_INFO.heroIntro}"
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          {/* Primary Button: Explore Journey */}
          <button
            onClick={() => scrollTo('journey')}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded bg-[#D4AF37] text-[#080808] font-sans font-semibold text-xs uppercase tracking-[0.2em] shadow-[0_4px_25px_rgba(212,175,55,0.3)] hover:bg-[#E5C158] hover:shadow-[0_6px_35px_rgba(212,175,55,0.45)] transition-all duration-300"
          >
            <Compass className="w-4 h-4 text-[#080808] transition-transform duration-300 group-hover:rotate-45" />
            <span>Explore My Journey</span>
          </button>

          {/* Secondary Button: Let's Connect */}
          <button
            onClick={() => scrollTo('contact')}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded border border-[#D4AF37]/50 bg-[#0E0E10]/80 text-[#F4F4F6] font-sans font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300"
          >
            <Send className="w-3.5 h-3.5 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span>Let's Connect</span>
          </button>
        </motion.div>
      </div>

      {/* Hero Bottom Strip: Four Architectural Anchor Pillars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 pt-16 sm:pt-20 border-t border-white/[0.07] grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
      >
        <div className="flex flex-col space-y-1">
          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37]">01 / CORE</span>
          <span className="text-xs uppercase tracking-wider text-[#F4F4F6] font-display font-semibold">
            Artificial Intelligence
          </span>
          <span className="text-[11px] text-[#8E8E93] font-light">Deep neural systems &amp; reasoning</span>
        </div>

        <div className="flex flex-col space-y-1">
          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37]">02 / MODELING</span>
          <span className="text-xs uppercase tracking-wider text-[#F4F4F6] font-display font-semibold">
            Machine Learning
          </span>
          <span className="text-[11px] text-[#8E8E93] font-light">Statistical inference &amp; data pipelines</span>
        </div>

        <div className="flex flex-col space-y-1">
          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37]">03 / ALLOCATION</span>
          <span className="text-xs uppercase tracking-wider text-[#F4F4F6] font-display font-semibold">
            Finance &amp; Markets
          </span>
          <span className="text-[11px] text-[#8E8E93] font-light">Capital mechanics &amp; value creation</span>
        </div>

        <div className="flex flex-col space-y-1">
          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37]">04 / HORIZON</span>
          <span className="text-xs uppercase tracking-wider text-[#F4F4F6] font-display font-semibold">
            Real Estate &amp; Ventures
          </span>
          <span className="text-[11px] text-[#8E8E93] font-light">Physical assets &amp; tech synergies</span>
        </div>
      </motion.div>

      {/* Subtle Scroll Down Indicator */}
      <div className="relative z-10 mt-6 flex justify-center">
        <button
          onClick={() => scrollTo('about')}
          aria-label="Scroll to About Section"
          className="group flex flex-col items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-[#8E8E93] hover:text-[#D4AF37] transition-colors"
        >
          <span>Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#D4AF37] animate-bounce" />
        </button>
      </div>
    </section>
  );
};
