import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Building2, Network } from 'lucide-react';
import { VISION_PILLARS } from '../data/portfolioData';

export const Vision: React.FC = () => {
  const pillarIcons = [Cpu, Building2, Network];

  return (
    <section id="vision" className="relative py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">06 // FUTURE VENTURES</span>
          <div className="h-[1px] w-12 bg-[#D4AF37]/30" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F4F6] uppercase">
          THE <span className="gold-gradient-text">ENTREPRENEURIAL VISION</span>
        </h2>

        {/* Subtle Methodology Label */}
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#121214] border border-[#D4AF37]/30">
          <span className="font-mono text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
            VISION → BUILD → SCALE
          </span>
        </div>

        {/* Manifesto Quote */}
        <div className="mt-8 max-w-3xl p-6 sm:p-8 rounded-2xl bg-[#0E0E10] border border-white/[0.08] text-center shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
          <p className="font-editorial text-lg sm:text-xl md:text-2xl text-[#E5E5E7] italic leading-relaxed">
            "I am exploring the idea of building my own real estate venture in the future, with a focus on combining technology, business, market understanding, and strong professional relationships."
          </p>
          <span className="block mt-4 text-[11px] font-mono tracking-widest text-[#8E8E93] uppercase">
            — Long-Term Venture Blueprint • Piyush Sharma
          </span>
        </div>
      </div>

      {/* Three Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {VISION_PILLARS.map((pillar, idx) => {
          const Icon = pillarIcons[idx] || Cpu;
          return (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-[#121216] to-[#0A0A0C] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between"
            >
              {/* Subtle top gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Pillar Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-2xl font-bold text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors">
                    {pillar.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg border border-white/[0.08] bg-[#16161A] flex items-center justify-center group-hover:border-[#D4AF37]/40 transition-colors">
                    <Icon className="w-5 h-5 text-[#C5A059] group-hover:text-[#E5C158] transition-colors" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-[#F4F4F6] uppercase tracking-wider mb-1">
                  {pillar.title}
                </h3>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono block mb-4">
                  {pillar.subtitle}
                </span>

                <p className="text-xs sm:text-sm leading-relaxed text-[#A1A1AA] font-light mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Focus Elements */}
              <div className="pt-6 border-t border-white/[0.06] space-y-2">
                {pillar.focusElements.map((elem, eIdx) => (
                  <div key={eIdx} className="flex items-start gap-2 text-xs text-[#8E8E93]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60 mt-1 flex-shrink-0" />
                    <span>{elem}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Transparent Disclaimer */}
      <div className="mt-12 text-center">
        <p className="text-[11px] text-[#666670] font-mono max-w-xl mx-auto">
          * Note: This venture roadmap represents a conceptual long-term vision being researched during academic development. No active commercial entity is currently registered.
        </p>
      </div>
    </section>
  );
};
