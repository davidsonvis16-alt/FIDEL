import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, MapPin, Send, CheckCircle2, Globe, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Keynote & Advisory Inquiry',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Apple Style Massive Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F7F5] border border-gray-200 text-xs font-semibold text-[#111111] uppercase tracking-widest">
            <Globe className="w-3.5 h-3.5 text-[#C8A44D]" />
            <span>Global Contact</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold font-editorial text-[#111111] tracking-tight">
            Let's Build Something Great.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-sans leading-relaxed">
            Whether for keynote engagements, advisory, venture studio partnerships, or media inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Social Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#F7F7F5] rounded-3xl p-8 border border-gray-200/80 space-y-6">
              <h3 className="text-2xl font-bold font-editorial text-[#111111]">
                Direct Channels
              </h3>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${siteConfig.author.whatsappPhone}?text=Hello%20Fidel%20Castrol%2C%20I%20am%20interested%20in%20connecting.`}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 hover:border-[#C8A44D] transition-all group shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C8A44D] flex items-center justify-center font-bold">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-[#111111]">WhatsApp Direct</div>
                    <div className="text-xs text-gray-500 font-sans">{siteConfig.author.whatsappPhone}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.author.email}`}
                id="contact-email-btn"
                className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 hover:border-[#C8A44D] transition-all group shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C8A44D] flex items-center justify-center font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-[#111111]">Official Email</div>
                    <div className="text-xs text-gray-500 font-sans">{siteConfig.author.email}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Location Badge */}
              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C8A44D] flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#111111]">Primary Headquarters</div>
                  <div className="text-xs text-gray-500 font-sans">{siteConfig.author.location}</div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Official Media Platforms
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {siteConfig.author.socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#F7F7F5] hover:bg-gray-100 rounded-xl border border-gray-200 text-xs font-semibold text-[#111111] flex items-center justify-between transition-colors"
                  >
                    <span>{s.platform}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Booking Form */}
          <div className="lg:col-span-7 bg-[#F7F7F5] rounded-3xl p-8 sm:p-10 border border-gray-200/80">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold font-editorial text-[#111111]">
                  Message Dispatched
                </h3>
                <p className="text-sm text-gray-600 font-sans max-w-md mx-auto">
                  Thank you for connecting with Fidel Castrol and the Global Mogul Entrepreneurs Lab team. We will respond promptly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 bg-[#111111] text-white text-xs font-semibold rounded-xl"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold font-editorial text-[#111111]">
                    Submit Strategy / Speaking Request
                  </h3>
                  <p className="text-xs text-gray-500 font-sans">
                    Please provide brief details about your inquiry.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Fidel Castrol"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs font-medium focus:outline-hidden focus:border-[#C8A44D] text-[#111111]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                      Your Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="founder@company.com"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs font-medium focus:outline-hidden focus:border-[#C8A44D] text-[#111111]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs font-medium focus:outline-hidden focus:border-[#C8A44D] text-[#111111]"
                    >
                      <option>Keynote & Speaking Engagement</option>
                      <option>Venture Capital & Advisory</option>
                      <option>The Entrepreneurial Tale Book Bulk Order</option>
                      <option>Media & Press Interview</option>
                      <option>Enclave Marketplace Concierge</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Global Mogul Entrepreneurs Lab"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs font-medium focus:outline-hidden focus:border-[#C8A44D] text-[#111111]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your venture, event date, or strategic goals..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs font-medium focus:outline-hidden focus:border-[#C8A44D] text-[#111111]"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-form-submit-btn"
                  className="w-full py-4 bg-[#111111] hover:bg-black text-white font-semibold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 text-[#C8A44D]" />
                  <span>Send Message to Fidel Castrol</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
