import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Shield, Lightbulb, UserCheck, RefreshCw, ArrowRight, CheckCircle2, Download, Sparkles, X } from 'lucide-react';
import { assets, bookPrinciples } from '../data/siteData';
import { siteConfig } from '../config/siteConfig';

export const EntrepreneurialTale: React.FC = () => {
  const [showExcerptModal, setShowExcerptModal] = useState(false);
  const [selectedPrinciple, setSelectedPrinciple] = useState(bookPrinciples[0].id);

  const iconsMap: Record<string, React.ReactNode> = {
    p1: <Shield className="w-6 h-6 text-[#C8A44D]" />,
    p2: <Lightbulb className="w-6 h-6 text-[#C8A44D]" />,
    p3: <UserCheck className="w-6 h-6 text-[#C8A44D]" />,
    p4: <RefreshCw className="w-6 h-6 text-[#C8A44D]" />,
  };

  return (
    <section id="tale" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Apple Product Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F7F5] border border-gray-200 text-xs font-semibold text-[#111111] uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5 text-[#C8A44D]" />
            <span>The Featured Work</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold font-editorial text-[#111111] tracking-tight">
            The Entrepreneurial Tale
          </h2>
          <p className="text-base sm:text-xl text-gray-600 font-sans leading-relaxed">
            A masterclass in navigating risk, driving relentless innovation, and taking absolute personal responsibility.
          </p>
        </div>

        {/* Hero Book Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 bg-[#F7F7F5] rounded-3xl p-8 sm:p-12 md:p-16 border border-gray-200/80 shadow-xs">
          
          {/* Left Column: Book Artwork Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative max-w-sm group">
              {/* Soft Ambient Shadow */}
              <div className="absolute inset-0 bg-[#C8A44D]/20 blur-2xl rounded-3xl scale-95 transition-all group-hover:scale-100" />
              
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-white p-2">
                <img
                  src={assets.bookCover}
                  alt="The Entrepreneurial Tale by Fidel Castrol"
                  className="w-full h-auto object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-4 right-4 bg-[#111111] text-white text-xs px-4 py-2 rounded-xl font-medium shadow-lg border border-gray-800 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C8A44D]" />
                <span>By Fidel Castrol</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Book Overview & Key Selling Points */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C8A44D]">
                Original Manuscript
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold font-editorial text-[#111111]">
                Transform Abstract Ideas Into Scalable Reality
              </h3>
            </div>

            <p className="text-base sm:text-lg text-gray-700 font-sans leading-relaxed">
              {siteConfig.book.description}
            </p>

            {/* Quick Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-gray-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A44D]" />
                <span>Unit Economic Discipline</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A44D]" />
                <span>Asymmetric Risk Pricing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A44D]" />
                <span>Crisis & Change Management</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A44D]" />
                <span>Leadership Accountability</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => setShowExcerptModal(true)}
                id="book-read-excerpt-btn"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#111111] hover:bg-black text-white text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-xl group"
              >
                <span>Read The Entrepreneurial Tale Excerpt</span>
                <ArrowRight className="w-4 h-4 text-[#C8A44D] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#contact"
                id="book-order-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-gray-50 text-[#111111] text-sm font-semibold rounded-xl border border-gray-200 shadow-2xs"
              >
                <Download className="w-4 h-4 text-gray-500" />
                <span>Request Book Details</span>
              </a>
            </div>
          </div>
        </div>

        {/* Core Principles Breakdown Section */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold font-editorial text-[#111111]">
              The Four Core Pillars
            </h3>
            <p className="text-sm text-gray-500 font-sans mt-2">
              Every chapter in the book centers on one of these foundational operational principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookPrinciples.map((principle) => {
              const isSelected = selectedPrinciple === principle.id;
              return (
                <div
                  key={principle.id}
                  onClick={() => setSelectedPrinciple(principle.id)}
                  className={`cursor-pointer rounded-2xl p-8 transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#111111] text-white border-black shadow-xl scale-102'
                      : 'bg-white text-[#111111] border-gray-200/80 hover:border-[#C8A44D]/50 hover:bg-[#F7F7F5]'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold uppercase tracking-widest ${isSelected ? 'text-[#C8A44D]' : 'text-gray-400'}`}>
                        Pillar {principle.number}
                      </span>
                      <div className={`p-2 rounded-xl ${isSelected ? 'bg-gray-800' : 'bg-[#F7F7F5]'}`}>
                        {iconsMap[principle.id]}
                      </div>
                    </div>

                    <h4 className="text-xl font-bold font-editorial">
                      {principle.title}
                    </h4>

                    <p className={`text-xs leading-relaxed font-sans ${isSelected ? 'text-gray-300' : 'text-gray-600'}`}>
                      {principle.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-200/20 italic font-editorial text-xs opacity-90 text-[#C8A44D]">
                    "{principle.quote}"
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Excerpt Modal */}
      <AnimatePresence>
        {showExcerptModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-100 max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowExcerptModal(false)}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-[#C8A44D] text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Exclusive Book Excerpt
              </div>

              <h3 className="text-3xl font-bold font-editorial text-[#111111] mb-2">
                Preface: Execution Over Intention
              </h3>
              <p className="text-xs text-gray-400 font-semibold mb-6">
                By Fidel Castro • The Entrepreneurial Tale (Chapter 1)
              </p>

              <div className="space-y-4 text-gray-700 text-sm font-sans leading-relaxed">
                <p>
                  "The world is full of individuals who have brilliant plans stored in notebook drawers or pitch decks. Intention is cheap. Intention costs nothing to hold and yields nothing to society."
                </p>
                <p>
                  "True enterprise begins when you accept the friction of real execution. It begins when you deploy real capital, pitch real clients who might say no, and modify your product based on cold, objective feedback."
                </p>
                <blockquote className="p-4 bg-amber-50/60 border-l-4 border-[#C8A44D] text-[#111111] font-editorial italic text-base my-4">
                  "Risk cannot be deleted from the universe. But it can be accurately priced, isolated, and converted into market leverage."
                </blockquote>
                <p>
                  "In the pages that follow, we unpack the exact blueprint I used to launch Global Ventufires and partner with resilient founders across five continents."
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">Ready for the full experience?</span>
                <a
                  href="#contact"
                  onClick={() => setShowExcerptModal(false)}
                  className="px-6 py-2.5 bg-[#111111] text-white text-xs font-semibold rounded-xl shadow-sm hover:bg-black"
                >
                  Order Full Book
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
