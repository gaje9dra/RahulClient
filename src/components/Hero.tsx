import React, { useState } from 'react';
import {
  PhoneCall,
  MessageCircle,
  Sparkles,
  Radio,
} from 'lucide-react';
import { HERO_VIDEO_PATH, SITE_PHONE_RAW, SITE_PHONE_DISPLAY, SITE_WHATSAPP_RAW, SITE_WHATSAPP_SECONDARY_RAW, SITE_WHATSAPP_SECONDARY_DISPLAY } from '../config/siteConfig';

interface HeroProps {
  onSearch: (filters: { serviceType: string; seats: number; zone: string }) => void;
  onOpenRfp: () => void;
  onOpenAi: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAi }) => {
  return (
    <section id="hero" className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center bg-transparent text-slate-100 overflow-hidden border-b border-pink-500/20 py-12 sm:py-16 lg:py-24 w-full max-w-full">
      {/* Pink Glowing Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[600px] h-[280px] sm:h-[600px] bg-pink-600/15 rounded-full blur-[90px] sm:blur-[150px] pointer-events-none z-0" />
      <div className="absolute -bottom-20 left-0 sm:left-10 w-60 sm:w-96 h-60 sm:h-96 bg-rose-600/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-10 right-0 sm:right-10 w-60 sm:w-96 h-60 sm:h-96 bg-fuchsia-600/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 sm:space-x-2.5 px-3 sm:px-4 py-1.5 rounded-full bg-slate-950/80 border border-pink-500/40 text-pink-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest shadow-xl backdrop-blur-md max-w-full flex-wrap justify-center">
            <Radio className="w-3.5 h-3.5 text-pink-400 animate-pulse flex-shrink-0" />
            <span className="truncate max-w-[280px] sm:max-w-none">Premier People-to-People Host Connection Desk</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] break-words">
            <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-fuchsia-300 bg-clip-text text-transparent">
              Call Girl & Escort Service
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white text-base sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Find elite, verified, and high-profile call girls. We offer 100% discreet and genuine escort services 24/7.
          </p>

          {/* Quick Direct Connect CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 text-xs w-full max-w-3xl mx-auto">
            <a
              href={`tel:+${SITE_PHONE_RAW}`}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 text-white font-bold hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-pink-500/20"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Host Desk ({SITE_PHONE_DISPLAY})</span>
            </a>

            <a
              href={`https://wa.me/${SITE_WHATSAPP_RAW}?text=Hello!%20I%20want%20to%20connect%20with%20a%20local%20host.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct Message</span>
            </a>

            <a
              href={`https://wa.me/${SITE_WHATSAPP_SECONDARY_RAW}?text=Hello!%20I%20want%20to%20connect%20with%20a%20local%20host.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/30 border border-emerald-300/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp ({SITE_WHATSAPP_SECONDARY_DISPLAY})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
