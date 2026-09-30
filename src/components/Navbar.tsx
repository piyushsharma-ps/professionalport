import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Mail, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Focus', href: '#focus' },
    { label: 'Skills', href: '#skills' },
    { label: 'Journey', href: '#journey' },
    { label: 'Projects', href: '#projects' },
    { label: 'Vision', href: '#vision' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label="Piyush Sharma Home"
          >
            <div className="relative w-10 h-10 rounded-full border border-[#D4AF37]/40 bg-[#0E0E10] flex items-center justify-center transition-all duration-300 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <span className="font-display font-bold text-sm tracking-wider gold-gradient-text pl-0.5">
                PS
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm tracking-[0.2em] font-semibold text-[#F3F4F6] group-hover:text-[#D4AF37] transition-colors">
                PIYUSH SHARMA
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#8E8E93] uppercase font-sans">
                AI & ML • Entrepreneurship
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative text-xs tracking-[0.18em] uppercase font-medium transition-colors duration-200 py-1 ${
                    isActive ? 'text-[#D4AF37]' : 'text-[#A1A1AA] hover:text-[#F3F4F6]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs tracking-[0.15em] uppercase font-medium text-[#F3F4F6] rounded border border-[#D4AF37]/40 bg-[#0E0E10]/80 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Luxury Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-xl lg:hidden flex flex-col justify-between p-8 pt-24"
          >
            <div className="flex flex-col space-y-6">
              <div className="pb-4 border-b border-[#D4AF37]/20 flex items-center justify-between">
                <span className="font-display text-sm tracking-[0.2em] text-[#D4AF37]">
                  NAVIGATION
                </span>
                <span className="text-xs text-[#8E8E93]">Piyush Sharma</span>
              </div>

              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-lg tracking-[0.15em] uppercase font-display text-[#E5E5E7] hover:text-[#D4AF37] transition-colors flex items-center justify-between py-1"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-[#8E8E93] font-mono">0{navLinks.indexOf(link) + 1}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#D4AF37]/20 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded border border-[#D4AF37]/40 bg-[#121214] text-xs uppercase tracking-wider text-[#F3F4F6] hover:border-[#D4AF37]"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span>Email</span>
                </a>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded border border-[#D4AF37]/40 bg-[#121214] text-xs uppercase tracking-wider text-[#F3F4F6] hover:border-[#D4AF37]"
                >
                  <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <p className="text-[11px] text-center text-[#8E8E93]">
                AI & ML • FINANCE • REAL ESTATE • ENTREPRENEURSHIP
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
