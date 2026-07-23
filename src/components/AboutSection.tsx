import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Compass, Sparkles, Award, ArrowRight } from 'lucide-react';
import { assets, timelineEvents } from '../data/siteData';
import { siteConfig } from '../config/siteConfig';
import fidelPortrait from '../assets/images/fidel-portrait.jpeg';
export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'journey' | 'mission' | 'vision'>('journey');

  return (
    <section id="about" className="py-24 bg-[#F7F7F5] border-y border-gray-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#C8A44D] text-xs font-semibold uppercase tracking-widest border border-amber-200/50">
            Editorial Biography
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-editorial text-[#111111] tracking-tight">
            The Philosophy Behind Global Mogul Entrepreneurs Lab
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-sans leading-relaxed">
            Fidel Castrol’s journey from foundational venture builder to global strategist, author, and thought leader.
          </p>
        </div>

        {/* Bio Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-200/80 shadow-xl">
              <img
                src={fidelPortrait}
                alt="Fidel Castrol Portrait"
                className="w-full h-auto object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 bg-white border-t border-gray-100">
                <blockquote className="font-editorial text-lg italic text-[#111111] leading-snug">
                  "Building businesses is not about avoiding uncertainty — it is about engineering clarity in the middle of market noise."
                </blockquote>
                <div className="mt-3 text-xs text-[#C8A44D] font-bold uppercase tracking-wider">
                  — Fidel Castrol
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Editorial Tabs Content Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Tab Nav Buttons */}
            <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-4">
              <button
                onClick={() => setActiveTab('journey')}
                id="about-tab-journey"
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === 'journey'
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-white text-gray-600 hover:text-black border border-gray-200/80'
                }`}
              >
                The Journey
              </button>

              <button
                onClick={() => setActiveTab('mission')}
                id="about-tab-mission"
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === 'mission'
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-white text-gray-600 hover:text-black border border-gray-200/80'
                }`}
              >
                Our Mission
              </button>

              <button
                onClick={() => setActiveTab('vision')}
                id="about-tab-vision"
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === 'vision'
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-white text-gray-600 hover:text-black border border-gray-200/80'
                }`}
              >
                Global Vision
              </button>
            </div>

            {/* Tab Panels */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-xs min-h-[320px]">
              {activeTab === 'journey' && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 text-[#C8A44D]">
                    <Sparkles className="w-5 h-5" />
                    <h3 className="text-2xl font-bold font-editorial text-[#111111]">
                      The Journey
                    </h3>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed font-sans">
                    Fidel Castrol began his career on the frontlines of technology and market operations. Distilling real-world lessons from early corporate and startup environments, he recognized that the single biggest bottleneck in venture success was the gap between strategy and ground-level execution.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed font-sans">
                    Through founding Global Mogul Entrepreneurs Lab, Fidel built an ecosystem designed to eliminate friction for ambitious entrepreneurs — supplying legal, technical, and capital frameworks that convert ideas into enduring enterprises.
                  </p>
                  <div className="pt-4 flex items-center gap-6 border-t border-gray-100">
                    <div>
                      <span className="text-2xl font-bold font-editorial text-[#111111]">5+</span>
                      <span className="block text-xs text-gray-500 uppercase tracking-wider font-semibold">
                        Years Execution
                      </span>
                    </div>
                    <div>
                      <span className="text-2xl font-bold font-editorial text-[#111111]">Global</span>
                      <span className="block text-xs text-gray-500 uppercase tracking-wider font-semibold">
                        Advisory Reach
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'mission' && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 text-[#C8A44D]">
                    <Target className="w-5 h-5" />
                    <h3 className="text-2xl font-bold font-editorial text-[#111111]">
                      Mission: Building Entrepreneurs That Execute
                    </h3>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed font-sans">
                    Our mission is uncompromising: empower modern founders with the practical frameworks, risk-optimization tools, and intellectual clarity needed to navigate complex economic landscapes.
                  </p>
                  <ul className="space-y-3 pt-2 text-sm text-gray-700 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#C8A44D]" />
                      <span>Demystify venture capital & unit economic health</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#C8A44D]" />
                      <span>Inculcate extreme personal responsibility in organizational culture</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#C8A44D]" />
                      <span>Provide high-speed advisory and capital access</span>
                    </li>
                  </ul>
                </motion.div>
              )}

              {activeTab === 'vision' && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 text-[#C8A44D]">
                    <Compass className="w-5 h-5" />
                    <h3 className="text-2xl font-bold font-editorial text-[#111111]">
                      Vision: Global Network of Innovators
                    </h3>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed font-sans">
                    To establish a borderless network of high-performing entrepreneurs, technology builders, and capital partners who build sustainable value for generations to come.
                  </p>
                  <div className="p-4 bg-[#F7F7F5] rounded-2xl border border-gray-100 text-sm text-gray-800">
                    <strong className="text-[#111111] block mb-1 font-semibold">The Global Mogul Entrepreneurs Lab Standard</strong>
                    "We do not invest in hype. We back founders who combine operational discipline with undeniable market necessity."
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Timeline Component */}
        <div className="pt-12 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold font-editorial text-[#111111]">
              Milestones of Execution
            </h3>
            <p className="text-sm text-gray-500 font-sans mt-2">
              A chronology of strategic growth and global platform development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineEvents.map((evt, idx) => (
              <motion.div
                key={evt.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs hover:border-[#C8A44D]/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold font-editorial text-[#C8A44D]">
                    {evt.year}
                  </span>
                  <Award className="w-5 h-5 text-gray-300 group-hover:text-[#C8A44D] transition-colors" />
                </div>
                <h4 className="text-base font-bold text-[#111111] font-sans mb-1">
                  {evt.title}
                </h4>
                <div className="text-xs text-gray-400 font-semibold mb-3">
                  {evt.subtitle}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-sans mb-4">
                  {evt.description}
                </p>
                {evt.highlightStat && (
                  <div className="inline-block px-2.5 py-1 bg-amber-50 text-[#C8A44D] text-[10px] font-bold uppercase rounded-md border border-amber-200/50">
                    {evt.highlightStat}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
