import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'AI & ML Discussion',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate sending and trigger email client fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      onShowToast("Message prepared! Opening your mail client...");

      const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.purpose} - from ${formData.name}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.purpose}\n\nMessage:\n${formData.message}`
      );
      
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      {/* Background Accent */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">08 // INITIATE DIALOGUE</span>
          <div className="h-[1px] w-12 bg-[#D4AF37]/30" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F4F6] uppercase">
          COMMENCE <span className="gold-gradient-text">CONVERSATION</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#8E8E93] max-w-xl font-light">
          Whether discussing technological research, venture paradigms, or shared interests, your communication is welcomed with care.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#0E0E10] border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden"
        >
          {/* Subtle top gold accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          {/* Form */}
          {isSent ? (
            <div className="py-12 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/50 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#F4F4F6]">
                MESSAGE INITIALIZED
              </h3>
              <p className="text-sm text-[#8E8E93] max-w-md">
                Your communication has been drafted for dispatch to <span className="text-[#D4AF37]">{PERSONAL_INFO.email}</span>. Thank you for reaching out.
              </p>
              <button
                onClick={() => setIsSent(false)}
                className="mt-6 px-6 py-2.5 rounded-full border border-white/[0.1] text-xs uppercase tracking-wider text-[#A1A1AA] hover:text-[#F4F4F6] hover:border-[#D4AF37]/40 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider text-[#A1A1AA] font-mono">
                    Your Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Alexander Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#141418] border border-white/[0.08] text-sm text-[#F4F4F6] placeholder-[#55555E] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-wider text-[#A1A1AA] font-mono">
                    Email Address <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. alexander@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#141418] border border-white/[0.08] text-sm text-[#F4F4F6] placeholder-[#55555E] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  />
                </div>
              </div>

              {/* Purpose */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="purpose" className="text-xs uppercase tracking-wider text-[#A1A1AA] font-mono">
                  Topic of Collaboration
                </label>
                <select
                  id="purpose"
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#141418] border border-white/[0.08] text-sm text-[#F4F4F6] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                >
                  <option value="AI & ML Discussion">AI &amp; ML Architecture &amp; Research</option>
                  <option value="Future Real Estate Venture">Real Estate &amp; PropTech Ideas</option>
                  <option value="Finance & Markets">Finance, Markets &amp; Computational Thinking</option>
                  <option value="Student & Peer Networking">Student, Developer &amp; Peer Networking</option>
                  <option value="General Inquiries">Other Inquiries</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-wider text-[#A1A1AA] font-mono">
                  Message <span className="text-[#D4AF37]">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Share your thoughts, opportunity, or perspective..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#141418] border border-white/[0.08] text-sm text-[#F4F4F6] placeholder-[#55555E] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#D4AF37] text-[#080808] font-sans font-semibold text-xs uppercase tracking-[0.2em] shadow-[0_4px_25px_rgba(212,175,55,0.3)] hover:bg-[#E5C158] hover:shadow-[0_6px_35px_rgba(212,175,55,0.45)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-[#080808]" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>

              {/* Explicit Email Display */}
              <div className="pt-4 text-center">
                <span className="text-xs text-[#8E8E93]">
                  Direct inquiries welcome anytime at:{' '}
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-[#D4AF37] hover:underline font-mono"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
