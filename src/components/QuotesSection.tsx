import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { quotesData } from '../data/siteData';

export const QuotesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotesData.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? quotesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % quotesData.length);
  };

  const activeQuote = quotesData[currentIndex];

  return (
    <section className="py-28 sm:py-36 bg-[#111111] text-white relative overflow-hidden my-12">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-[#C8A44D] mb-10 border border-white/10">
          <Quote className="w-6 h-6" />
        </div>

        {/* Animated Quote Moment */}
        <div className="min-h-[220px] sm:min-h-[260px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <p className="text-3xl sm:text-5xl md:text-6xl font-bold font-editorial text-white leading-[1.18] tracking-tight max-w-4xl mx-auto">
                "{activeQuote.text}"
              </p>

              <div className="space-y-1">
                <div className="text-xl font-bold font-editorial text-[#C8A44D]">
                  — {activeQuote.author}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-sans font-medium">
                  {activeQuote.title}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={handlePrev}
            id="quote-prev-btn"
            className="p-3 rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors border border-white/10"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Indicators */}
          <div className="flex items-center gap-2">
            {quotesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-[#C8A44D]' : 'w-2 bg-white/20'
                }`}
                aria-label={`Go to quote ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            id="quote-next-btn"
            className="p-3 rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors border border-white/10"
            aria-label="Next quote"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
