import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { NavSection } from '../types';
import { siteConfig } from '../config/siteConfig';
import gvLogo from '../assets/images/gv-logo.png';
interface NavbarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavSection; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tale', label: 'The Tale' },
    { id: 'articles', label: 'Articles' },
    { id: 'videos', label: 'Videos' },
    { id: 'marketplace', label: 'Marketplace' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: NavSection) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Left */}
        <button
          onClick={() => handleLinkClick('home')}
          id="nav-logo-btn"
          className="flex items-center gap-2 group text-left focus:outline-hidden"
        >
          <img src={gvLogo} alt="Global Mogul Entrepreneurs Lab" className="w-8 h-8 object-contain" />
          <div>
            <span className="block text-sm sm:text-base font-bold tracking-tight text-[#111111] font-sans">
              {siteConfig.author.company}
            </span>
            <span className="block text-[10px] text-gray-400 font-semibold tracking-wider uppercase -mt-1">
              Fidel Castrol Platform
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#F7F7F5]/80 backdrop-blur-sm p-1.5 rounded-full border border-gray-200/60 shadow-2xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                id={`nav-link-${item.id}`}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                  isActive
                    ? 'text-[#111111] font-semibold'
                    : 'text-gray-600 hover:text-[#111111]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white rounded-full shadow-2xs border border-gray-100"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Button Right */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleLinkClick('tale')}
            id="nav-[#C8A44D]-cta"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#111111] hover:bg-black text-white text-xs font-medium rounded-full transition-all duration-200 shadow-xs hover:shadow-md group"
          >
            <span>The Book</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C8A44D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="nav-mobile-toggle-btn"
          className="md:hidden p-2 text-[#111111] rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white/98 backdrop-blur-xl border-b border-gray-100 px-6 py-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  id={`mobile-nav-${item.id}`}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    activeSection === item.id
                      ? 'bg-[#F7F7F5] text-[#111111] font-semibold border border-gray-200/60'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="w-2 h-2 rounded-full bg-[#C8A44D]" />
                  )}
                </button>
              ))}

              <div className="pt-4 border-t border-gray-100">
                <button
                  onClick={() => handleLinkClick('contact')}
                  id="mobile-nav-cta"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#111111] text-white rounded-xl text-sm font-medium shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-[#C8A44D]" />
                  <span>Connect with Fidel</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
