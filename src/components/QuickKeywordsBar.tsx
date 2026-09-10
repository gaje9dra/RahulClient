import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { SITE_WHATSAPP_RAW } from '../config/siteConfig';

const KEYWORDS = [
  'jaipur call girls',
  'call girls in jaipur',
  'jaipur call girl number',
  'call girl in jaipur',
  'call girl service in jaipur',
  'jaipur call girl service',
  'independent call girls in jaipur',
  'malviya nagar call girls',
  'mansarovar call girls jaipur',
  'vaishali nagar call girls',
  'c scheme call girls jaipur',
  'jagatpura call girls jaipur',
  'raja park call girls jaipur',
  'tonk road call girls jaipur',
  'civil lines call girls jaipur',
  'russian call girls in jaipur',
  'cheap call girls in jaipur',
  'college girl call girls in jaipur',
  'housewife call girls in jaipur',
  'model call girls in jaipur',
  'vip call girls in jaipur',
  'high profile call girls jaipur',
  '5 star hotel call girl service jaipur',
  'jaipur airport call girl service',
  'jaipur junction call girls',
  'sakshi bansal jaipur call girl',
  'jaipur call girls locanto',
  'female call girls in jaipur',
  'call girl service near me jaipur',
  'jaipur independent call girls',
  'royal call girls in jaipur',
  'foreign call girls in jaipur',
  '24x7 jaipur call girls',
  'best call girl agency in jaipur',
  'hotel visit call girl in jaipur',
  'in-call out-call call girls jaipur',
];

// Color palette themes for colorful buttons
const COLOR_CLASSES = [
  'bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white border-pink-400/40 shadow-pink-500/20',
  'bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white border-purple-400/40 shadow-purple-500/20',
  'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white border-emerald-400/40 shadow-emerald-500/20',
  'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white border-amber-400/40 shadow-amber-500/20',
  'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-violet-400/40 shadow-violet-500/20',
  'bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white border-rose-400/40 shadow-rose-500/20',
  'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-cyan-400/40 shadow-cyan-500/20',
  'bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white border-fuchsia-400/40 shadow-fuchsia-500/20',
];

export const QuickKeywordsBar: React.FC = () => {
  const whatsappPhone = SITE_WHATSAPP_RAW;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950/80 backdrop-blur-md border-t border-pink-500/20">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Tag & Direct WhatsApp Booking Section */}
        <div>
          <div className="flex items-center justify-center space-x-2 mb-4 text-center">
            <Sparkles className="w-5 h-5 text-pink-400 animate-pulse" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-300 via-rose-300 to-fuchsia-300 bg-clip-text text-transparent uppercase tracking-wider font-serif">
              Popular Jaipur Service Tags & Direct WhatsApp Booking
            </h2>
            <Sparkles className="w-5 h-5 text-pink-400 animate-pulse" />
          </div>

          <p className="text-xs sm:text-sm text-center text-slate-400 mb-8 max-w-2xl mx-auto">
            Click any colorful tag below to open instant WhatsApp chat with pre-filled service inquiry.
          </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {KEYWORDS.map((kw, idx) => {
            const colorClass = COLOR_CLASSES[idx % COLOR_CLASSES.length];
            const waText = encodeURIComponent(`Hello, I am looking for ${kw}. Please provide details and host availability.`);
            const waUrl = `https://wa.me/${whatsappPhone}?text=${waText}`;

            return (
              <a
                key={`${kw}-${idx}`}
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border shadow-md hover:scale-105 transition-all duration-300 group cursor-pointer ${colorClass}`}
              >
                <MessageCircle className="w-3.5 h-3.5 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                <span>{kw}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
};
