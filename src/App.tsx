/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { NavSection } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EntrepreneurialTale } from './components/EntrepreneurialTale';
import { ArticlesSection } from './components/ArticlesSection';
import { VideosSection } from './components/VideosSection';
import { QuotesSection } from './components/QuotesSection';
import { MarketplaceSection } from './components/MarketplaceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('home');

  const scrollToSection = (sectionId: NavSection) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll Spy to keep navbar active link synced
  useEffect(() => {
    const handleScroll = () => {
      const sections: NavSection[] = [
        'home',
        'about',
        'tale',
        'articles',
        'videos',
        'marketplace',
        'contact',
      ];

      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans antialiased selection:bg-[#C8A44D] selection:text-white">
      {/* Sticky Apple-Inspired Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={(section) => scrollToSection(section)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreBook={() => scrollToSection('tale')}
          onReadArticles={() => scrollToSection('articles')}
        />

        {/* About Fidel Castrol & Bio */}
        <AboutSection />

        {/* The Entrepreneurial Tale Book Landing */}
        <EntrepreneurialTale />

        {/* Articles & Newsroom */}
        <ArticlesSection />

        {/* Videos Library */}
        <VideosSection />

        {/* Full-screen Quote Moments */}
        <QuotesSection />

        {/* Enclave Luxury Marketplace */}
        <MarketplaceSection />

        {/* Minimal Contact Page */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(section) => scrollToSection(section)}
      />
    </div>
  );
}
