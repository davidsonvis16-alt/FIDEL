import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { NavSection } from '../types';
import { siteConfig } from '../config/siteConfig';
import gvLogo from '../assets/images/gv-logo.png';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [showDonateModal, setShowDonateModal] = useState(false);

  return (
    <footer className="bg-white text-[#111111] border-t border-gray-200/80 pt-20 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <img src={gvLogo} alt="Global Mogul Entrepreneurs Lab" className="w-8 h-8 object-contain" />
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

            <button
              onClick={() => setShowDonateModal(true)}
              className="text-xs font-semibold text-[#C8A44D] hover:underline pt-2"
            >
              Support This Mission
            </button>
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
          <p className="text-xs text-gray-400">
            Created by{' '}
            <a
              href="https://portfolio-e-mu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8A44D] hover:underline"
            >
              Eden
            </a>
          </p>
        </div>
      </div>

      {/* Donate Modal */}
      {showDonateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-sm bg-white rounded-2xl p-8 text-center shadow-2xl">
            <button
              onClick={() => setShowDonateModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold font-editorial text-[#111111] mb-2">
              Support the Mission
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Invest in Kenya's next generation of business leaders by sending your financial support today.
            </p>
            <div className="bg-[#F7F7F5] rounded-xl py-4 px-6">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">M-Pesa Number</p>
              <p className="text-xl font-bold text-[#111111] tracking-wide">0706 577 697</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};