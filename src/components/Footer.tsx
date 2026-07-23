import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { NavSection } from '../types';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white text-[#111111] border-t border-gray-200/80 pt-20 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#111111] text-[#C8A44D] flex items-center justify-center font-bold text-xs">
                GV
              </div>
              <span className="text-xl font-bold font-editorial text-[#111111]">
                {siteConfig.author.company}
              </span>
            </div>

            <p className="text-xs text-gray-600 font-sans leading-relaxed max-w-sm">
              The official personal platform of Fidel Castrol — founder, speaker, author of <em>The Entrepreneurial Tale</em>, and builder of high-velocity ventures across technology, media, and real estate.
            </p>

            <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider pt-2">
              {siteConfig.author.location}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C8A44D]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-600">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-black transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-black transition-colors">
                  About Fidel Castrol
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tale')} className="hover:text-black transition-colors">
                  The Entrepreneurial Tale
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('articles')} className="hover:text-black transition-colors">
                  Articles & Essays
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('videos')} className="hover:text-black transition-colors">
                  Video Library
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('marketplace')} className="hover:text-black transition-colors">
                  Enclave Marketplace
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-black transition-colors">
                  Contact & Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C8A44D]">
              Official Channels
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-600">
              {siteConfig.author.socials.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{s.platform}</span>
                    <span className="text-gray-400">({s.handle})</span>
                    <ArrowUpRight className="w-3 h-3 text-gray-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} {siteConfig.author.company}. All rights reserved.
          </div>
          <div>
            Fidel Castrol Personal Platform
          </div>
        </div>
      </div>
    </footer>
  );
};
