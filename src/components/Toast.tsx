import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#121214] border border-[#D4AF37]/40 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.15)] text-[#FBF7EE] backdrop-blur-md"
        >
          <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
          <span className="text-xs sm:text-sm tracking-wide font-sans">{message}</span>
          <button
            onClick={onClose}
            className="ml-2 text-xs text-[#8E8E93] hover:text-[#FBF7EE] transition-colors"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
