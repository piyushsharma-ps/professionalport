import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl rounded-2xl bg-[#0E0E10] border border-[#D4AF37]/40 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.15)] p-6 sm:p-8 text-left my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Project Modal"
            className="absolute top-6 right-6 p-2 rounded-full border border-white/[0.1] text-[#8E8E93] hover:text-[#F4F4F6] hover:border-[#D4AF37] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
              {project.category}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[10px] font-mono tracking-widest text-[#C5A059] uppercase px-2 py-0.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              {project.status}
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F4F6] tracking-wide mb-4">
            {project.title}
          </h3>

          <p className="text-sm leading-relaxed text-[#A1A1AA] font-light mb-6">
            {project.detailedVision || project.description}
          </p>

          {/* Highlights */}
          <div className="mb-6 p-4 rounded-xl bg-[#141418] border border-white/[0.06]">
            <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-mono block mb-3">
              Engineering &amp; Research Highlights
            </span>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#D1D1D6]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <span className="text-xs uppercase tracking-wider text-[#8E8E93] font-mono block mb-2">
              Target Architecture &amp; Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded bg-[#18181C] border border-[#D4AF37]/30 text-xs font-mono text-[#F4F4F6]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => alert('Code repository is currently undergoing active student development. Source code will be published on GitHub upon completion of initial benchmarks.')}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-[#16161A] border border-[#D4AF37]/40 text-xs uppercase tracking-wider font-medium text-[#F4F4F6] hover:bg-[#D4AF37]/15 hover:border-[#D4AF37] transition-all"
            >
              <svg className="w-4 h-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub (In Dev)</span>
            </button>

            <button
              onClick={() => alert('Interactive demo is in development. Prototype staging will be linked once foundational testing is completed.')}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-[#D4AF37] text-xs uppercase tracking-wider font-semibold text-[#080808] hover:bg-[#E5C158] transition-all"
            >
              <ExternalLink className="w-4 h-4 text-[#080808]" />
              <span>Live Demo (In Dev)</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
