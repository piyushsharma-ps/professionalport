import React from 'react';
import { ArrowUp, Mail, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-[#D4AF37]/20 pt-16 pb-12 px-6 sm:px-8 text-[#A1A1AA]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Brand & Monogram */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 rounded-full border border-[#D4AF37]/40 bg-[#0E0E10] flex items-center justify-center">
                <span className="font-display font-bold text-xs gold-gradient-text pl-0.5">
                  PS
                </span>
              </div>
              <span className="font-display text-lg font-bold text-[#F4F4F6] tracking-[0.2em] uppercase">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-sans">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* Direct Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest font-sans">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#E5E5E7] hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Email</span>
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E5E5E7] hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-[#0E0E10] text-xs uppercase tracking-wider text-[#8E8E93] hover:text-[#F4F4F6] hover:border-[#D4AF37]/50 transition-all"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37] transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Middle Tier: Quote */}
        <div className="py-6 border-y border-white/[0.05] text-center">
          <p className="font-editorial text-base sm:text-lg text-[#C5A059] italic tracking-wide">
            "{PERSONAL_INFO.quote}"
          </p>
        </div>

        {/* Bottom Tier: Copyright & Disclaimers */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-[#666670] font-sans">
          <p>© {PERSONAL_INFO.year} Piyush Sharma. All rights reserved.</p>
          <p className="font-mono">Luxury Academic Portfolio • Modern AI &amp; Venture Architecture</p>
        </div>
      </div>
    </footer>
  );
};
