import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, ChevronDown, Sparkles, ShieldCheck, Zap, Globe } from 'lucide-react';
import { assets } from '../data/siteData';
import { siteConfig } from '../config/siteConfig';
import fidelPortrait from '../assets/images/fidel-portrait.jpeg';
interface HeroProps {
  onExploreBook: () => void;
  onReadArticles: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreBook, onReadArticles }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-white overflow-hidden">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-amber-100/30 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Top Brand Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F7F5] border border-gray-200/80 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#C8A44D] animate-pulse" />
              <span className="text-xs font-semibold text-[#111111] uppercase tracking-widest font-sans">
                {siteConfig.author.company} • Official Platform
              </span>
            </div>

            {/* Massive Apple-Style Headline */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-editorial text-[#111111] leading-[0.98] tracking-tight">
                {siteConfig.author.heroHeadline}
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-editorial text-[#C8A44D] leading-[0.98] tracking-tight italic">
                {siteConfig.author.heroHeadlineSpan}
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-[#111111]/70 font-sans font-normal leading-relaxed max-w-2xl">
              {siteConfig.author.heroSubheadline}
            </p>

            {/* Hero CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreBook}
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#111111] hover:bg-black text-white text-sm font-semibold rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <BookOpen className="w-4 h-4 text-[#C8A44D]" />
                <span>Explore The Entrepreneurial Tale</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onReadArticles}
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#F7F7F5] hover:bg-gray-100 text-[#111111] text-sm font-semibold rounded-2xl transition-all duration-200 border border-gray-200/80 shadow-2xs"
              >
                <span>Read Articles</span>
              </button>
            </div>

            {/* Trust & Key Features Pill Bar */}
            <div className="pt-8 border-t border-gray-100 grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <Globe className="w-3.5 h-3.5 text-[#C8A44D]" />
                  <span>Ventures</span>
                </div>
                <div className="text-xl font-bold text-[#111111] font-editorial">Global Reach</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 text-[#C8A44D]" />
                  <span>Focus</span>
                </div>
                <div className="text-xl font-bold text-[#111111] font-editorial">100% Execution</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8A44D]" />
                  <span>Author</span>
                </div>
                <div className="text-xl font-bold text-[#111111] font-editorial">The Tale</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Fidel Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Apple-Style Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-[#F7F7F5] border border-gray-200/60 shadow-2xl group">
                <img
                  src={fidelPortrait}
                  alt="Fidel Castro — Founder of Global Ventufires"
                  className="w-full h-auto object-cover aspect-[3/4] filter contrast-[1.02] brightness-[1.01] transition-transform duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Overlay Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                {/* Floating Portrait Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 shadow-lg text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-base font-bold text-[#111111] font-sans">
                        {siteConfig.author.name}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {siteConfig.author.title}
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-[#111111] text-[#C8A44D]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center text-xs font-semibold text-gray-400 hover:text-black transition-colors gap-2"
          >
            <span className="uppercase tracking-widest">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#C8A44D]" />
          </a>
        </div>
      </div>
    </section>
  );
};
