import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'initial' | 'line' | 'finish'>('initial');

  useEffect(() => {
    // Stage 1: Line expands horizontally after monogram appears
    const timer1 = setTimeout(() => {
      setStage('line');
    }, 450);

    // Stage 2: Begin exit fade
    const timer2 = setTimeout(() => {
      setStage('finish');
    }, 1300);

    // Stage 3: Complete transition to reveal content
    const timer3 = setTimeout(() => {
      onComplete();
    }, 1900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== 'finish' ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808] select-none"
        >
          {/* Subtle ambient gold radial glow */}
          <div className="absolute w-[360px] h-[360px] rounded-full bg-[#D4AF37]/5 blur-[100px] pointer-events-none" />

          {/* Monogram Container */}
          <div className="relative flex flex-col items-center">
            {/* Circular gold framed monogram */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center border border-[#D4AF37]/40 bg-[#0E0E10] shadow-[0_0_35px_rgba(212,175,55,0.12)]"
            >
              <div className="absolute inset-1 rounded-full border border-[#D4AF37]/20 border-dashed animate-[spin_30s_linear_infinite]" />
              <span className="font-display font-bold text-2xl sm:text-3xl tracking-widest gold-gradient-text pl-1">
                PS
              </span>
            </motion.div>

            {/* Expanding thin gold line */}
            <div className="relative mt-8 h-[1px] w-64 sm:w-80 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: stage === 'line' ? '100%' : '0%' }}
                transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
                className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"
              />
            </div>

            {/* Cinematic subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: stage === 'line' ? 1 : 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-4 flex items-center gap-3"
            >
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#C5A059] font-sans font-medium">
                Piyush Sharma
              </span>
              <span className="text-[#D4AF37]/40 text-xs">•</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#8E8E93] font-sans">
                Artificial Intelligence & ML
              </span>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
