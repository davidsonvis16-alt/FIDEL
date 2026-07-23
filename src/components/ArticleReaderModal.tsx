import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Calendar, Bookmark, Share2, ArrowLeft, Check, Sparkles, BookOpen } from 'lucide-react';
import { Article } from '../types';

interface ArticleReaderModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({ article, onClose }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-md flex justify-center p-0 sm:p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white min-h-screen sm:min-h-0 sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto border border-gray-100"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
            <button
              onClick={onClose}
              id="article-back-btn"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setBookmarked(!bookmarked)}
                id="article-bookmark-btn"
                className={`p-2 rounded-full border transition-all ${
                  bookmarked
                    ? 'bg-amber-50 border-amber-200 text-[#C8A44D]'
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
                title={bookmarked ? 'Saved to bookmarks' : 'Bookmark article'}
              >
                <Bookmark className="w-4 h-4 fill-current" />
              </button>

              <button
                onClick={handleShare}
                id="article-share-btn"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span>Link Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share</span>
                  </>
                )}
              </button>

              <button
                onClick={onClose}
                id="article-close-btn"
                className="p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Article Body Container */}
          <div className="p-6 sm:p-10 md:p-14 overflow-y-auto max-h-[85vh] space-y-8">
            {/* Meta Tags & Category */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-amber-50 text-[#C8A44D] text-xs font-semibold rounded-full uppercase tracking-wider border border-amber-200/50">
                  {article.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.publishedAt}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-editorial text-[#111111] leading-[1.15] tracking-tight">
                {article.title}
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 font-sans leading-relaxed border-l-2 border-[#C8A44D] pl-4 italic">
                {article.summary}
              </p>
            </div>

            {/* Featured Hero Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-md border border-gray-100">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Author Note */}
            {article.authorNote && (
              <div className="bg-[#F7F7F5] rounded-xl p-5 border border-gray-200/60 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#C8A44D] shrink-0 mt-0.5" />
                <div className="text-xs text-gray-600 font-medium leading-relaxed">
                  <strong className="text-gray-900 block font-semibold mb-0.5">Author Note</strong>
                  {article.authorNote}
                </div>
              </div>
            )}

            {/* Article Markdown Content */}
            <div className="prose prose-lg max-w-none text-[#111111]/90 font-sans leading-relaxed space-y-6 pt-4">
              {article.body.split('\n\n').map((paragraph, idx) => {
                const trimmed = paragraph.trim();
                if (trimmed.startsWith('# ')) {
                  return (
                    <h1 key={idx} className="text-2xl sm:text-3xl font-editorial font-bold text-[#111111] pt-4">
                      {trimmed.replace('# ', '')}
                    </h1>
                  );
                }
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2 key={idx} className="text-xl sm:text-2xl font-editorial font-bold text-[#111111] pt-4">
                      {trimmed.replace('## ', '')}
                    </h2>
                  );
                }
                if (trimmed.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-lg font-bold text-[#111111] pt-2">
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                }
                if (trimmed.startsWith('> ')) {
                  return (
                    <blockquote
                      key={idx}
                      className="text-lg sm:text-xl font-editorial italic bg-amber-50/50 p-6 rounded-2xl border-l-4 border-[#C8A44D] text-[#111111] my-6"
                    >
                      {trimmed.replace('> ', '')}
                    </blockquote>
                  );
                }
                return (
                  <p key={idx} className="text-base sm:text-lg text-[#111111]/80 leading-relaxed">
                    {trimmed}
                  </p>
                );
              })}
            </div>

            {/* Tags & Footer CTA */}
            <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Tags:</span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] hover:bg-black text-white text-xs font-medium rounded-xl transition-all shadow-sm"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#C8A44D]" />
                  <span>Discuss Strategy with Fidel</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
