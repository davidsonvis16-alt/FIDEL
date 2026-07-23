import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Clock, Search, Sparkles, Filter } from 'lucide-react';
import { articlesData } from '../data/siteData';
import { Article } from '../types';
import { ArticleReaderModal } from './ArticleReaderModal';

export const ArticlesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [readingArticle, setReadingArticle] = useState<Article | null>(null);

  const categories = [
    'All',
    'Business Ideas',
    'Leadership',
    'Mindset',
    'Innovation',
    'Risk Management',
    'Growth',
    'Startup Guides',
  ];

  const filteredArticles = articlesData.filter((art) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const featuredArticle = articlesData.find((art) => art.featured) || articlesData[0];

  return (
    <section id="articles" className="py-24 bg-[#F7F7F5] border-y border-gray-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-[#C8A44D] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apple Newsroom & Stripe Press Style</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-editorial text-[#111111] tracking-tight">
              Entrepreneurial Essays & Dispatches
            </h2>
            <p className="text-base text-gray-600 font-sans leading-relaxed">
              Pragmatic knowledge, market breakdown, and execution strategies curated by Fidel Castro.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search essays or tags..."
              id="articles-search-input"
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl text-xs font-medium border border-gray-200 focus:outline-hidden focus:border-[#C8A44D] transition-colors shadow-2xs text-[#111111]"
            />
          </div>
        </div>

        {/* Featured Editorial Spotlight Article */}
        {selectedCategory === 'All' && !searchQuery && featuredArticle && (
          <div className="mb-16">
            <div
              onClick={() => setReadingArticle(featuredArticle)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 items-center"
            >
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto h-full overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#111111] text-white text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-gray-800">
                  Featured Essay
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 space-y-4">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="font-semibold text-[#C8A44D] uppercase tracking-wider">
                    {featuredArticle.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-editorial text-[#111111] leading-snug group-hover:text-[#C8A44D] transition-colors">
                  {featuredArticle.title}
                </h3>

                <p className="text-sm text-gray-600 font-sans leading-relaxed line-clamp-3">
                  {featuredArticle.summary}
                </p>

                <div className="pt-4 flex items-center gap-2 text-xs font-bold text-[#111111] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Read Full Essay</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C8A44D]" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          <Filter className="w-4 h-4 text-gray-400 shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              id={`articles-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#111111] text-white shadow-xs'
                  : 'bg-white text-gray-600 hover:text-black border border-gray-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Cards Grid — Minimal Beautiful Editorial Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setReadingArticle(article)}
              className="cursor-pointer group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                {/* Large Clean Image Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-200 border border-gray-200/60 shadow-2xs">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#111111] uppercase tracking-wider border border-white/50">
                    {article.category}
                  </div>
                </div>

                {/* Article Info */}
                <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                  <span>{article.publishedAt}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-editorial text-[#111111] leading-snug group-hover:text-[#C8A44D] transition-colors">
                  {article.title}
                </h3>

                {/* Short Summary */}
                <p className="text-xs text-gray-600 font-sans leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              {/* Minimal Read Action Button */}
              <div className="pt-2 flex items-center justify-between border-t border-gray-200/60 text-xs font-semibold text-[#111111] group-hover:text-[#C8A44D]">
                <span>Read Article</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 space-y-3">
            <p className="text-gray-500 font-medium text-sm">No essays found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#111111] text-white text-xs font-semibold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Reader Modal */}
      <ArticleReaderModal
        article={readingArticle}
        onClose={() => setReadingArticle(null)}
      />
    </section>
  );
};
