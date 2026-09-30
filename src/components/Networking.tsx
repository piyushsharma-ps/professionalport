import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Copy, ArrowUpRight, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NetworkingProps {
  onShowToast: (msg: string) => void;
}

export const Networking: React.FC<NetworkingProps> = ({ onShowToast }) => {
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const [copiedPhone, setCopiedPhone] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    onShowToast("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+917877003567");
    setCopiedPhone(true);
    onShowToast("WhatsApp number copied to clipboard!");
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const audiencePills = [
    "Students & Peers",
    "Developers & Researchers",
    "AI Enthusiasts",
    "Entrepreneurs & Founders",
    "Finance Professionals",
    "Real Estate Operators",
    "Builders & Visionaries"
  ];

  return (
    <section id="network" className="relative py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">07 // NETWORK &amp; ALLIANCE</span>
          <div className="h-[1px] w-12 bg-[#D4AF37]/30" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F4F6] uppercase">
          LET'S BUILD <span className="gold-gradient-text">SOMETHING MEANINGFUL</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#A1A1AA] max-w-2xl font-light leading-relaxed">
          "I am always interested in connecting with students, developers, AI enthusiasts, entrepreneurs, finance professionals, real estate professionals, and people building interesting things."
        </p>

        {/* Network Circles / Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-3xl">
          {audiencePills.map((pill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-[#121214] border border-white/[0.07] text-[11px] font-sans text-[#D1D1D6]"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      {/* Connection Action Channels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Email Direct Channel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl bg-gradient-to-b from-[#141418] to-[#0A0A0C] border border-[#D4AF37]/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#1C1C22] border border-[#D4AF37]/30 flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18181C] border border-white/[0.08] text-xs text-[#A1A1AA] hover:text-[#F4F4F6] hover:border-[#D4AF37]/40 transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#D4AF37]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <span className="text-[11px] font-mono tracking-widest uppercase text-[#8E8E93]">
              Direct Inquiries &amp; Academic Collabs
            </span>
            <h3 className="font-sans text-base sm:text-lg font-semibold text-[#F4F4F6] mt-1 break-all">
              {PERSONAL_INFO.email}
            </h3>
            <p className="mt-3 text-xs text-[#8E8E93] leading-relaxed">
              Open to collaborative research, project discussions, book recommendations, and shared ideas.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.06]">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#D4AF37] text-[#080808] font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#E5C158] transition-all shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
            >
              <span>EMAIL PIYUSH</span>
              <ArrowUpRight className="w-4 h-4 text-[#080808]" />
            </a>
          </div>
        </motion.div>

        {/* WhatsApp Direct Channel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="p-8 rounded-2xl bg-gradient-to-b from-[#141418] to-[#0A0A0C] border border-[#D4AF37]/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#1C1C22] border border-[#D4AF37]/30 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <button
                onClick={copyPhone}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18181C] border border-white/[0.08] text-xs text-[#A1A1AA] hover:text-[#F4F4F6] hover:border-[#D4AF37]/40 transition-colors"
                title="Copy phone number"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#D4AF37]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <span className="text-[11px] font-mono tracking-widest uppercase text-[#8E8E93]">
              Direct Messaging &amp; Quick Reach
            </span>
            <h3 className="font-sans text-base sm:text-lg font-semibold text-[#F4F4F6] mt-1">
              {PERSONAL_INFO.whatsappDisplay}
            </h3>
            <p className="mt-3 text-xs text-[#8E8E93] leading-relaxed">
              Available for real-time exchange with fellow builders, founders, and peers.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.06]">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-[#D4AF37]/60 bg-[#121214] text-[#F4F4F6] font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#D4AF37]/15 hover:border-[#D4AF37] transition-all"
            >
              <span>CONNECT ON WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
