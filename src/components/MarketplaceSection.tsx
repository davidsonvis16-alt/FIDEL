import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Sparkles, MapPin, CheckCircle2, X, Send } from 'lucide-react';
import { marketplaceItems } from '../data/siteData';
import { MarketplaceItem } from '../types';

export const MarketplaceSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [inquiryModalItem, setInquiryModalItem] = useState<MarketplaceItem | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const categories = [
    'All',
    'Luxury Cars',
    'Real Estate',
    'Motorcycles',
    'Technology Services',
    'Entrepreneur Books',
    'Referral Programs',
  ];

  const filteredItems = marketplaceItems.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setInquiryModalItem(null);
    }, 2500);
  };

  return (
    <section id="marketplace" className="py-24 bg-[#F7F7F5] border-y border-gray-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-[#111111] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A44D]" />
            <span>Enclave Luxury Marketplace</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-editorial text-[#111111] tracking-tight">
            Curated Assets & Executive Offerings
          </h2>
          <p className="text-base text-gray-600 font-sans leading-relaxed">
            Exclusive mobility fleets, real estate estates, technology services, and syndicate partnership opportunities.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 justify-start sm:justify-center scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              id={`marketplace-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#111111] text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:text-black border border-gray-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Marketplace Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {item.badge && (
                    <div className="absolute top-4 left-4 bg-[#111111] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {item.badge}
                    </div>
                  )}
                  {item.location && (
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-gray-800 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C8A44D]" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-400 font-semibold uppercase tracking-wider">
                    <span>{item.category}</span>
                    <span className="text-[#C8A44D] font-bold">{item.priceOrValue}</span>
                  </div>

                  <h3 className="text-xl font-bold font-editorial text-[#111111] leading-snug group-hover:text-[#C8A44D] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed font-sans line-clamp-3">
                    {item.description}
                  </p>

                  <div className="pt-2 space-y-1.5 border-t border-gray-100 text-xs text-gray-700">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A44D] shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => setInquiryModalItem(item)}
                  id={`marketplace-inquire-btn-${item.id}`}
                  className="flex-1 py-3 bg-[#111111] hover:bg-black text-white font-semibold text-xs rounded-xl transition-all shadow-sm"
                >
                  Contact Concierge
                </button>

                {item.externalUrl && (
                  <a
                    href={item.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 hover:bg-gray-200 text-[#111111] rounded-xl transition-colors"
                    title="View external listing"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {inquiryModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
            >
              <button
                onClick={() => setInquiryModalItem(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-black p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>

              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-editorial text-[#111111]">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-gray-600 font-sans">
                    Thank you. Our executive concierge team will review your inquiry for{' '}
                    <strong>{inquiryModalItem.title}</strong> and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-[#C8A44D] text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
                    {inquiryModalItem.category}
                  </div>

                  <h3 className="text-2xl font-bold font-editorial text-[#111111]">
                    Inquire: {inquiryModalItem.title}
                  </h3>

                  <p className="text-xs text-gray-500 font-sans">
                    Direct confidential access through Global Mogul Entrepreneurs Lab Concierge.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-[#F7F7F5] border border-gray-200 rounded-xl text-xs font-medium focus:outline-hidden focus:border-[#C8A44D] text-[#111111]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                        Corporate / Private Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@firm.com"
                        className="w-full px-4 py-2.5 bg-[#F7F7F5] border border-gray-200 rounded-xl text-xs font-medium focus:outline-hidden focus:border-[#C8A44D] text-[#111111]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                        Message / Timeline
                      </label>
                      <textarea
                        rows={3}
                        defaultValue={`I am interested in ${inquiryModalItem.title}. Please send full specifications.`}
                        className="w-full px-4 py-2.5 bg-[#F7F7F5] border border-gray-200 rounded-xl text-xs font-medium focus:outline-hidden focus:border-[#C8A44D] text-[#111111]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#111111] hover:bg-black text-white font-semibold text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#C8A44D]" />
                    <span>Submit Private Inquiry</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
