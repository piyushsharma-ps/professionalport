import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, AlertCircle, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'AI / ML Projects',
    'Data Projects',
    'AI Agent Projects',
    'Automation Projects',
    'Finance + AI Ideas',
    'Real Estate + Technology Ideas'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const handleActionNotice = (type: string, title: string) => {
    alert(`${type} for "${title}" is currently in development as part of active academic coursework. Prototype will be updated here once verified.`);
  };

  return (
    <section id="projects" className="relative py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">05 // WORK IN PROGRESS</span>
          <div className="h-[1px] w-12 bg-[#D4AF37]/30" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F4F6] uppercase">
          SELECTED <span className="gold-gradient-text">PROJECT BLUEPRINTS</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#8E8E93] max-w-2xl font-light">
          Architectural designs, algorithmic research, and conceptual prototypes currently under active development.
        </p>

        {/* Mandatory Transparency Banner */}
        <div className="mt-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-[#141418] border border-[#D4AF37]/30 shadow-[0_0_20px_rgba(212,175,55,0.08)]">
          <AlertCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
          <span className="text-xs sm:text-sm text-[#F4F4F6] font-medium tracking-wide">
            Projects are currently in development.
          </span>
          <span className="hidden sm:inline text-xs text-[#8E8E93] border-l border-white/[0.1] pl-3">
            Authentic prototypes &amp; engineering sandboxes
          </span>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 max-w-4xl">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-sans transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-[#080808] font-semibold shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                  : 'bg-[#0E0E10] text-[#A1A1AA] border border-white/[0.08] hover:border-[#D4AF37]/40 hover:text-[#F4F4F6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-8 rounded-2xl bg-gradient-to-b from-[#111114] to-[#0A0A0C] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.1)] flex flex-col justify-between"
          >
            <div>
              {/* Category & Status Bar */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                  {project.category}
                </span>
                <span className="text-[10px] font-mono tracking-wider text-[#C5A059] px-2 py-0.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/25">
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-[#F4F4F6] tracking-wide group-hover:text-[#FBF7EE] transition-colors mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm leading-relaxed text-[#A1A1AA] font-light mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded bg-[#16161A] border border-white/[0.06] text-[11px] font-mono text-[#D1D1D6]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalProject(project)}
                className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-[#E5C158] font-sans font-medium uppercase tracking-wider transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Specs &amp; Vision</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleActionNotice('GitHub Repository', project.title)}
                  className="p-2 rounded-lg bg-[#141418] border border-white/[0.08] text-[#8E8E93] hover:text-[#F4F4F6] hover:border-[#D4AF37]/40 transition-colors"
                  title="View GitHub (In Development)"
                  aria-label="GitHub Repository"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </button>

                <button
                  onClick={() => handleActionNotice('Live Demo Prototype', project.title)}
                  className="p-2 rounded-lg bg-[#141418] border border-white/[0.08] text-[#8E8E93] hover:text-[#F4F4F6] hover:border-[#D4AF37]/40 transition-colors"
                  title="Live Demo (In Development)"
                  aria-label="Live Demo Prototype"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Render Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
