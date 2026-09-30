import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Milestone, Clock, Rocket, Flag } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/portfolioData';

export const LearningTimeline: React.FC = () => {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(0);

  const statusIcons: Record<string, React.ElementType> = {
    'In Progress': Clock,
    'Upcoming': Milestone,
    'Future Vision': Rocket,
  };

  return (
    <section id="journey" className="relative py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-20">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">04 // EVOLUTION & HORIZON</span>
          <div className="h-[1px] w-12 bg-[#D4AF37]/30" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F4F6] uppercase">
          LEARNING <span className="gold-gradient-text">JOURNEY &amp; TRAJECTORY</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#8E8E93] max-w-2xl font-light">
          A disciplined multi-year roadmap from undergraduate fundamentals to deep-tech venture creation.
        </p>
      </div>

      {/* Interactive Milestone Selector Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
        {TIMELINE_MILESTONES.map((item, idx) => {
          const isSelected = activeMilestoneIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveMilestoneIndex(idx)}
              className={`p-4 rounded-xl text-left border transition-all duration-300 relative overflow-hidden ${
                isSelected
                  ? 'bg-[#16161A] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.18)]'
                  : 'bg-[#0E0E10] border-white/[0.07] hover:border-white/[0.2]'
              }`}
            >
              {isSelected && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              )}
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[#D4AF37]">{item.year}</span>
                <span className="text-[10px] uppercase tracking-wider text-[#8E8E93]">{item.status}</span>
              </div>
              <div className="text-xs uppercase tracking-wider font-display font-semibold text-[#F4F4F6] truncate">
                {item.tag}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Timeline View */}
      <div className="relative pl-6 sm:pl-10 border-l border-[#D4AF37]/30 ml-4 sm:ml-8 space-y-16">
        {TIMELINE_MILESTONES.map((item, index) => {
          const isSelected = activeMilestoneIndex === index;
          const Icon = statusIcons[item.status] || Flag;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group transition-all duration-300 ${
                isSelected ? 'scale-[1.01]' : 'opacity-85 hover:opacity-100'
              }`}
            >
              {/* Timeline Node Ring */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#D4AF37] text-[#080808] shadow-[0_0_15px_#D4AF37]'
                    : 'bg-[#0E0E10] border-2 border-[#D4AF37]/50 text-[#D4AF37]'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#080808]' : 'bg-[#D4AF37]'}`} />
              </div>

              {/* Milestone Content Box */}
              <div
                onClick={() => setActiveMilestoneIndex(index)}
                className={`cursor-pointer p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#121215] border-[#D4AF37]/50 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
                    : 'bg-[#0E0E10]/80 border-white/[0.06] hover:border-white/[0.15]'
                }`}
              >
                {/* Header Tag and Phase */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-display font-bold text-xl sm:text-2xl gold-gradient-text tracking-wider">
                      {item.year}
                    </span>
                    <span className="text-xs uppercase tracking-[0.25em] text-[#A1A1AA] font-mono border-l border-white/[0.15] pl-3">
                      {item.tag}
                    </span>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase ${
                      item.status === 'In Progress'
                        ? 'bg-[#D4AF37]/15 text-[#FBF7EE] border border-[#D4AF37]/40'
                        : 'bg-white/[0.04] text-[#A1A1AA] border border-white/[0.1]'
                    }`}
                  >
                    <Icon className="w-3 h-3 text-[#D4AF37]" />
                    {item.status}
                  </span>
                </div>

                {/* Milestone Title */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#F4F4F6] tracking-wide mb-3">
                  {item.title}
                </h3>

                {/* Milestone Description */}
                <p className="text-sm sm:text-base leading-relaxed text-[#A1A1AA] font-light mb-6">
                  {item.description}
                </p>

                {/* Milestone Key Goals */}
                <div className="pt-5 border-t border-white/[0.06] flex flex-col space-y-2.5">
                  <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-mono">
                    Key Focus Targets
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                    {item.keyGoals.map((goal, gIdx) => (
                      <div
                        key={gIdx}
                        className="p-3 rounded-lg bg-[#0A0A0C] border border-white/[0.05] flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-[#D1D1D6] leading-relaxed">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
