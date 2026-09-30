import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import type { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Foundation Built' | 'Actively Learning'>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.title)];

  const getAllSkills = () => {
    const list: { categoryTitle: string; skill: SkillItem }[] = [];
    SKILL_CATEGORIES.forEach(cat => {
      cat.skills.forEach(s => {
        list.push({ categoryTitle: cat.title, skill: s });
      });
    });
    return list;
  };

  const filteredSkills = getAllSkills().filter(item => {
    const matchesCategory = activeCategory === 'All' || item.categoryTitle === activeCategory;
    const isActivelyLearning = item.skill.level.includes('Learning') || item.skill.level.includes('Study');
    const isFoundationBuilt = item.skill.level.includes('Foundation') || item.skill.level.includes('Practice');

    if (statusFilter === 'Foundation Built') {
      return matchesCategory && isFoundationBuilt;
    }
    if (statusFilter === 'Actively Learning') {
      return matchesCategory && isActivelyLearning;
    }
    return matchesCategory;
  });

  return (
    <section id="skills" className="relative py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">03 // CAPABILITIES &amp; STUDY</span>
          <div className="h-[1px] w-12 bg-[#D4AF37]/30" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F4F6] uppercase">
          BUILDING THE <span className="gold-gradient-text">FOUNDATION</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#8E8E93] max-w-2xl font-light">
          A transparent overview of competencies developed to date alongside disciplines currently under active, rigorous study.
        </p>

        {/* Status Indicator Legend with Interactive Filtering */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-[#A1A1AA]">
          <button
            onClick={() => setStatusFilter(statusFilter === 'Foundation Built' ? 'All' : 'Foundation Built')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all ${
              statusFilter === 'Foundation Built'
                ? 'bg-[#D4AF37] text-[#080808] font-semibold border-[#D4AF37]'
                : 'bg-[#D4AF37]/15 border-[#D4AF37]/40 text-[#FBF7EE] hover:bg-[#D4AF37]/25'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Filter: Foundation Built</span>
          </button>

          <button
            onClick={() => setStatusFilter(statusFilter === 'Actively Learning' ? 'All' : 'Actively Learning')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all ${
              statusFilter === 'Actively Learning'
                ? 'bg-[#C5A059] text-[#080808] font-semibold border-[#C5A059]'
                : 'bg-white/[0.04] border-white/[0.15] text-[#D1D1D6] hover:bg-white/[0.08]'
            }`}
          >
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            <span>Filter: Actively Learning</span>
          </button>

          {statusFilter !== 'All' && (
            <button
              onClick={() => setStatusFilter('All')}
              className="text-[11px] text-[#8E8E93] underline hover:text-[#F4F4F6]"
            >
              Reset Status Filter
            </button>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-sans transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-[#080808] font-semibold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'bg-[#121214] text-[#A1A1AA] border border-white/[0.08] hover:border-[#D4AF37]/40 hover:text-[#F4F4F6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSkills.map((item, index) => {
          const isActivelyLearning = item.skill.level.includes('Learning') || item.skill.level.includes('Study');
          return (
            <motion.div
              key={`${item.categoryTitle}-${item.skill.name}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className={`group p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                isActivelyLearning
                  ? 'bg-[#0E0E10]/90 border-white/[0.08] hover:border-[#C5A059]/40'
                  : 'bg-[#121214] border-[#D4AF37]/20 hover:border-[#D4AF37]/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#8E8E93] font-mono">
                    {item.categoryTitle}
                  </span>
                  {isActivelyLearning ? (
                    <span className="inline-flex items-center gap-1 text-[10px] tracking-wider uppercase text-[#C5A059] px-2 py-0.5 rounded bg-white/[0.04] border border-[#C5A059]/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
                      Learning
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] tracking-wider uppercase text-[#D4AF37] px-2 py-0.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                      <CheckCircle2 className="w-2.5 h-2.5 text-[#D4AF37]" />
                      Foundation
                    </span>
                  )}
                </div>

                <h3 className="font-sans text-base font-semibold text-[#F4F4F6] group-hover:text-[#FBF7EE] transition-colors">
                  {item.skill.name}
                </h3>

                {item.skill.description && (
                  <p className="mt-2 text-xs text-[#8E8E93] leading-relaxed font-light">
                    {item.skill.description}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between">
                <span className="text-[10px] text-[#666670] font-mono">
                  {isActivelyLearning ? 'In Progress' : 'Verified Foundation'}
                </span>
                <div className="w-12 h-1 rounded-full bg-white/[0.08] overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      isActivelyLearning ? 'w-1/2 bg-[#C5A059]' : 'w-full bg-[#D4AF37]'
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
