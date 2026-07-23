import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { videosData } from '../data/siteData';
import { Video } from '../types';

export const VideosSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const featuredVideo = videosData.find((v) => v.featured) || videosData[0];
  const secondaryVideos = videosData.filter((v) => v.id !== featuredVideo.id);

  return (
    <section id="videos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F7F5] border border-gray-200 text-xs font-semibold text-[#111111] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A44D]" />
            <span>Media Library</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-editorial text-[#111111] tracking-tight">
            Keynote Speeches & Masterclasses
          </h2>
          <p className="text-base text-gray-600 font-sans leading-relaxed">
            High-impact visual broadcasts, keynotes, and founder breakdowns recorded globally.
          </p>
        </div>

        {/* Featured Video Player Banner */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden bg-[#111111] border border-gray-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left: Thumbnail & Play Overlay */}
            <div
              onClick={() => setActiveVideo(featuredVideo)}
              className="lg:col-span-7 relative aspect-[16/9] cursor-pointer group overflow-hidden"
            >
              <video
                src="/videos/keynote.mp4"
                poster={featuredVideo.thumbnail}
                controls
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Featured Video Details */}
            <div className="lg:col-span-5 p-8 sm:p-12 text-white space-y-6">
              <div className="inline-block px-3 py-1 bg-amber-500/20 text-[#C8A44D] text-xs font-semibold rounded-full uppercase tracking-wider border border-amber-500/30">
                Featured Broadcast
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-editorial leading-snug">
                {featuredVideo.title}
              </h3>

              <p className="text-sm text-gray-300 font-sans leading-relaxed">
                {featuredVideo.description}
              </p>

              {/* Key Takeaways */}
              <div className="space-y-2 pt-2 border-t border-gray-800">
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Key Takeaways</span>
                {featuredVideo.keyTakeaways.map((takeaway, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A44D] shrink-0" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setActiveVideo(featuredVideo)}
                id="video-featured-watch-btn"
                className="w-full py-3.5 bg-white text-[#111111] hover:bg-gray-100 font-semibold text-xs rounded-xl uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 text-[#C8A44D] fill-current" />
                <span>Watch Keynote</span>
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Video Grid (only if secondary videos exist) */}
        {secondaryVideos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {secondaryVideos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#F7F7F5] rounded-2xl overflow-hidden border border-gray-200/80 shadow-2xs hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Thumbnail Container */}
                  <div
                    onClick={() => setActiveVideo(video)}
                    className="relative aspect-[16/10] overflow-hidden cursor-pointer"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 text-[#111111] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-black/80 px-2.5 py-1 rounded-md text-[10px] font-semibold text-white">
                      {video.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-0 space-y-2">
                    <span className="text-[10px] font-bold text-[#C8A44D] uppercase tracking-wider">
                      {video.category}
                    </span>
                    <h4 className="text-lg font-bold font-editorial text-[#111111] leading-snug group-hover:text-[#C8A44D] transition-colors">
                      {video.title}
                    </h4>
                    <p className="text-xs text-gray-600 font-sans leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </div>

                {/* Watch Button */}
                <div className="px-6 pb-6">
                  <button
                    onClick={() => setActiveVideo(video)}
                    id={`video-watch-btn-${video.id}`}
                    className="w-full py-2.5 bg-white hover:bg-[#111111] hover:text-white border border-gray-200 text-[#111111] text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5 text-[#C8A44D] fill-current" />
                    <span>Watch Video</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-20 p-2 text-white bg-black/50 hover:bg-black rounded-full"
              >
                <X className="w-6 h-6" />
              </button>

              <video
                src="/videos/keynote.mp4"
                controls
                autoPlay
                className="w-full h-full"
              />

              <div className="p-6 bg-[#111111] text-white flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold font-editorial">{activeVideo.title}</h3>
                  <p className="text-xs text-gray-400 font-sans mt-0.5">{activeVideo.description}</p>
                </div>
                <span className="text-xs text-[#C8A44D] font-semibold">{activeVideo.duration}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};