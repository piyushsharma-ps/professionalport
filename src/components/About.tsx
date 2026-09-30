import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, TrendingUp, Building2, Terminal, Code2, Network, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const technicalPillars = [
    { name: "Programming Foundations", icon: Code2, desc: "Python, C, and rigorous algorithmic thinking" },
    { name: "Artificial Intelligence", icon: Brain, desc: "Search heuristics, neural systems & logic paradigms" },
    { name: "Machine Learning", icon: Cpu, desc: "Statistical modeling, loss functions & empirical testing" },
    { name: "Data Engineering", icon: Terminal, desc: "Data wrangling, feature engineering & clean pipelines" },
    { name: "Problem Solving", icon: ShieldCheck, desc: "Structured decomposition of multifaceted challenges" },
    { name: "AI Engineering", icon: Cpu, desc: "LLM concepts, agentic flows & deployment architectures" }
  ];

  const interdisciplinaryPillars = [
    { name: "Finance & Markets", icon: TrendingUp, desc: "Capital mechanics, market efficiency & risk models" },
    { name: "Real Estate Dynamics", icon: Building2, desc: "Physical property cycles, valuation & PropTech" },
    { name: "Business Strategy", icon: ShieldCheck, desc: "Competitive advantages, unit economics & moats" },
    { name: "High-Trust Networking", icon: Network, desc: "Long-term relationships with builders & visionaries" }
  ];

  return (
    <section id="about" className="relative py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col mb-16">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">01 // INTRODUCTION</span>
          <div className="h-[1px] w-12 bg-[#D4AF37]/30" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F4F6] uppercase">
          DISCIPLINE, INTELLECT &amp; <span className="gold-gradient-text">LONG-TERM VISION</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#8E8E93] max-w-2xl font-light">
          An authentic commitment to deep technical mastery in AI &amp; ML, paired with an entrepreneurial mindset grounded in real-world economics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Narrative & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col space-y-8"
        >
          <div className="p-8 rounded-xl bg-[#0E0E10] border border-[#D4AF37]/25 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h3 className="font-display text-xl font-semibold text-[#F4F4F6] tracking-wide mb-4">
              I am {PERSONAL_INFO.name}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#D1D1D6] font-light">
              I am an undergraduate student currently dedicating my full energy to studying <span className="text-[#F4F4F6] font-medium">Artificial Intelligence &amp; Machine Learning</span>. Rather than chasing short-term hype, my approach is focused on disciplined first-principles learning: mastering the mathematics, code execution, and data architecture that power modern intelligent computing.
            </p>
            <div className="mt-6 pt-6 border-t border-white/[0.07]">
              <p className="text-xs sm:text-sm text-[#A1A1AA] italic font-editorial text-lg leading-relaxed">
                "My long-term vision is to combine technology, business, finance, and real estate to build meaningful ventures that solve complex inefficiencies."
              </p>
            </div>
          </div>

          {/* Primary Focus Grid */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#D4AF37]">
                Primary Technical Focus
              </span>
              <span className="text-[11px] text-[#8E8E93] font-mono">Foundations &amp; Engineering</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {technicalPillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded bg-[#121214]/70 border border-white/[0.05] hover:border-[#D4AF37]/40 transition-colors flex items-start gap-3"
                  >
                    <Icon className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-medium text-[#F4F4F6]">{item.name}</div>
                      <div className="text-[11px] text-[#8E8E93] leading-snug mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Secondary Interdisciplinary Studies */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#C5A059]">
                Strategic Interdisciplinary Interests
              </span>
              <span className="text-[11px] text-[#8E8E93] font-mono">Commercial &amp; Real World</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {interdisciplinaryPillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded bg-[#121214]/70 border border-white/[0.05] hover:border-[#D4AF37]/40 transition-colors flex items-start gap-3"
                  >
                    <Icon className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-medium text-[#F4F4F6]">{item.name}</div>
                      <div className="text-[11px] text-[#8E8E93] leading-snug mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Architectural Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 flex flex-col space-y-6"
        >
          {/* Executive Institutional & Academic Dossier Card (100% Non-Avatar Architecture) */}
          <div className="relative p-8 rounded-xl bg-gradient-to-b from-[#141418] via-[#0E0E10] to-[#0A0A0C] border border-[#D4AF37]/30 shadow-[0_15px_40px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden">
            {/* Ambient luxury glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

            {/* Dossier Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                  ACADEMIC &amp; VENTURE DOSSIER
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#8E8E93] border border-white/[0.08] px-2 py-0.5 rounded">
                REF // 2026-PS
              </span>
            </div>

            {/* Monogram Brand Header Bar */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg border border-[#D4AF37]/50 bg-[#080808] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.15)] flex-shrink-0">
                <span className="font-display font-bold text-lg tracking-wider gold-gradient-text">
                  PS
                </span>
              </div>
              <div>
                <h4 className="font-display text-base font-bold tracking-wider text-[#F4F4F6] uppercase">
                  Piyush Sharma
                </h4>
                <span className="text-[11px] tracking-wider uppercase text-[#D4AF37] font-sans">
                  AI &amp; ML Foundation Candidate
                </span>
              </div>
            </div>

            {/* System Attributes Spec Table */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-2.5 rounded bg-[#0A0A0C] border border-white/[0.05] text-xs">
                <span className="text-[#8E8E93] font-mono text-[11px]">Primary Trajectory</span>
                <span className="text-[#F4F4F6] font-medium">Artificial Intelligence &amp; ML</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded bg-[#0A0A0C] border border-white/[0.05] text-xs">
                <span className="text-[#8E8E93] font-mono text-[11px]">Interdisciplinary Focus</span>
                <span className="text-[#F4F4F6] font-medium">Finance, Real Estate, Ventures</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded bg-[#0A0A0C] border border-white/[0.05] text-xs">
                <span className="text-[#8E8E93] font-mono text-[11px]">Methodological Core</span>
                <span className="text-[#D4AF37] font-medium">First-Principles Rigor</span>
              </div>
            </div>

            {/* Quick Core Metrics */}
            <div className="w-full pt-4 border-t border-white/[0.08] grid grid-cols-3 gap-2 text-center">
              <div className="flex flex-col">
                <span className="font-mono text-xs font-semibold text-[#D4AF37]">100%</span>
                <span className="text-[10px] text-[#8E8E93] uppercase tracking-wider mt-0.5">Dedication</span>
              </div>
              <div className="flex flex-col border-x border-white/[0.08]">
                <span className="font-mono text-xs font-semibold text-[#D4AF37]">4</span>
                <span className="text-[10px] text-[#8E8E93] uppercase tracking-wider mt-0.5">Focus Pillars</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs font-semibold text-[#D4AF37]">Long-Term</span>
                <span className="text-[10px] text-[#8E8E93] uppercase tracking-wider mt-0.5">Horizon</span>
              </div>
            </div>
          </div>

          {/* Authentic Transparency Note Card */}
          <div className="p-6 rounded-xl bg-[#0E0E10]/90 border border-white/[0.08] flex items-start gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] mt-1.5 flex-shrink-0 animate-pulse" />
            <div className="flex flex-col space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#F4F4F6] font-medium font-sans">
                Authentic Student Trajectory
              </span>
              <p className="text-xs text-[#8E8E93] leading-relaxed">
                This portfolio transparently highlights active student development, foundational projects, and prospective ideas without exaggerated corporate titles or artificial claims.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
