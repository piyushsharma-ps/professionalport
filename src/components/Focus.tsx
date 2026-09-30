import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, TrendingUp, Building2 } from 'lucide-react';
import { FOCUS_AREAS } from '../data/portfolioData';

export const Focus: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    ai: Brain,
    ml: Cpu,
    finance: TrendingUp,
    realestate: Building2,
  };

  return (
    <section id="focus" className="relative py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-20">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">02 // CORE DOMAINS</span>
          <div className="h-[1px] w-12 bg-[#D4AF37]/30" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F4F6] uppercase">
          AREAS OF <span className="gold-gradient-text">STRATEGIC FOCUS</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#8E8E93] max-w-2xl font-light">
          A disciplined convergence of cutting-edge computational intelligence and real-world asset economics.
        </p>
      </div>

      {/* Four Premium Focus Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FOCUS_AREAS.map((item, index) => {
          const Icon = iconMap[item.id] || Brain;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#111114] to-[#0A0A0C] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.12)] flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top gold highlight line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Header row: Number and Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {item.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl border border-white/[0.08] bg-[#16161A] flex items-center justify-center group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#C5A059] group-hover:text-[#E5C158] transition-colors duration-300" />
                  </div>
                </div>

                {/* Title and Tagline */}
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-wider text-[#F4F4F6] uppercase mb-2 group-hover:text-[#FBF7EE] transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#D4AF37] block mb-4">
                  {item.tagline}
                </span>

                {/* Description */}
                <p className="text-sm sm:text-base leading-relaxed text-[#A1A1AA] font-light mb-6">
                  {item.description}
                </p>
              </div>

              {/* Sub-points */}
              <div className="pt-6 border-t border-white/[0.06] flex flex-col space-y-2.5">
                {item.subPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2.5 text-xs text-[#8E8E93] group-hover:text-[#D1D1D6] transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
