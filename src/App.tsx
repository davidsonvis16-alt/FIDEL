/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { NavSection } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ArticlesSection } from './components/ArticlesSection';
import { VideosSection } from './components/VideosSection';
import { QuotesSection } from './components/QuotesSection';
import { MarketplaceSection } from './components/MarketplaceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const routeToSection: Record<string, NavSection> = {
  '/': 'home',
  '/about': 'about',
  '/articles': 'articles',
  '/videos': 'videos',
  '/marketplace': 'marketplace',
  '/contact': 'contact',
};

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setActiveSection(routeToSection[location.pathname] ?? 'home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleNavigate = (section: NavSection) => {
    const pathMap: Record<NavSection, string> = {
      home: '/',
      about: '/about',
      tale: '/',
      articles: '/articles',
      videos: '/videos',
      marketplace: '/marketplace',
      contact: '/contact',
    };

    setActiveSection(section);
    navigate(pathMap[section]);
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans antialiased selection:bg-[#C8A44D] selection:text-white">
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero
                  onExploreBook={() => handleNavigate('about')}
                  onReadArticles={() => handleNavigate('articles')}
                />
                <QuotesSection />
              </>
            }
          />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/articles" element={<ArticlesSection />} />
          <Route path="/videos" element={<VideosSection />} />
          <Route path="/marketplace" element={<MarketplaceSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}