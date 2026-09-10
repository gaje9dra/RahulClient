import React from 'react';
import { ShieldCheck, MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { SITE_WHATSAPP_RAW } from '../config/siteConfig';

export const JaipurRateChart: React.FC = () => {
  return (
    <section id="rates-chart" className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950/80 text-slate-100 border-b border-pink-500/20">
      <div className="max-w-6xl mx-auto">
        {/* Main Card Outer Frame */}
        <div className="bg-slate-900/90 border-2 border-pink-500/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-pink-950/30 relative overflow-hidden space-y-8">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-pink-500/20 pb-6">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-pink-400" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-white tracking-wider uppercase">
                  JAIPUR CALL GIRL SERVICE RATE & PRICE CHART
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-pink-300/80 font-medium pl-7">
                Transparent pricing with 100% genuine & verified local hosts
              </p>
            </div>

            <div className="self-start sm:self-center px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>24/7 Verified Booking</span>
            </div>
          </div>

          {/* Table Container */}
          <div className="border border-pink-500/30 rounded-2xl overflow-hidden bg-slate-950/90">
            {/* Table Header Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-pink-950/40 border-b border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider p-4">
              <div className="md:col-span-6 font-mono">SERVICE DURATION & PACKAGE (COLUMN 1)</div>
              <div className="md:col-span-6 font-mono mt-2 md:mt-0">PRICING & INCLUSIONS (COLUMN 2)</div>
            </div>

            {/* Row 1: Short Visit */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-pink-500/20 p-5 sm:p-6 gap-6 items-center hover:bg-pink-950/10 transition-colors">
              <div className="md:col-span-6 space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                        In-Person Short Visit / Hotel & Cafe Meetup
                      </h3>
                      <span className="bg-pink-500/20 text-pink-300 border border-pink-500/40 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                        1 - 2 HOURS
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1">
                      Instant hotel room visit, cafe meetup, or private short-time companion service across all Jaipur localities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-pink-400 font-mono">
                      ₹3,000 - ₹5,000
                    </span>
                    <span className="text-xs text-slate-400 font-medium">/ Session</span>
                  </div>
                  <div className="text-xs text-emerald-400 font-semibold space-x-3">
                    <span>✓ Instant 30-min reach</span>
                    <span>• ✓ Zero hidden fees</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${SITE_WHATSAPP_RAW}?text=Hello!%20I%20want%20to%20book%20In-Person%20Short%20Visit%20(Rs%203000-5000).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center space-x-2 flex-shrink-0"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Book on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Row 2: Full Night / VIP */}
            <div className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 gap-6 items-center hover:bg-pink-950/10 transition-colors">
              <div className="md:col-span-6 space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                        Full Night / Extended VIP Companion & Outstation
                      </h3>
                      <span className="bg-pink-500/20 text-pink-300 border border-pink-500/40 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                        FULL NIGHT / 8+ HOURS
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1">
                      Overnight hotel stay, luxury dinner date accompaniment, model/Russian companions, and full-day heritage tours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-pink-400 font-mono">
                      ₹10,000 - ₹20,000
                    </span>
                    <span className="text-xs text-slate-400 font-medium">/ Night</span>
                  </div>
                  <div className="text-xs text-emerald-400 font-semibold space-x-3">
                    <span>✓ 100% Privacy & Discretion</span>
                    <span>• ✓ VIP Top Models</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${SITE_WHATSAPP_RAW}?text=Hello!%20I%20want%20to%20book%20Full%20Night%20VIP%20Companion%20(Rs%2010000-20000).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center space-x-2 flex-shrink-0"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Book VIP Night</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

