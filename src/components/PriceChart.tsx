import React from 'react';
import { MessageCircle, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SITE_WHATSAPP_RAW } from '../config/siteConfig';

export const PriceChart: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto my-6 px-3 sm:px-6 overflow-hidden">
      <div className="bg-slate-950/85 backdrop-blur-md rounded-2xl border-2 border-pink-500/40 p-3 sm:p-6 md:p-8 shadow-2xl shadow-pink-500/20 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -right-20 -top-20 w-60 h-60 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 pb-4 border-b border-pink-500/20 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-pink-400 animate-pulse flex-shrink-0" />
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-fuchsia-300 font-serif">
                Jaipur Call Girl Service Rate & Price Chart
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">Transparent pricing with 100% genuine & verified local hosts</p>
            </div>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>24/7 Verified Booking</span>
          </div>
        </div>

        {/* 2 Rows x 2 Columns Grid / Table Structure */}
        <div className="overflow-x-auto w-full max-w-full rounded-xl border border-pink-500/30 shadow-inner custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[460px]">
            <thead>
              <tr className="bg-gradient-to-r from-slate-900 via-pink-950/80 to-slate-900 border-b border-pink-500/30 text-pink-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
                <th className="py-3.5 px-4 sm:px-6 w-1/2 border-r border-pink-500/20">
                  Service Duration & Package (Column 1)
                </th>
                <th className="py-3.5 px-4 sm:px-6 w-1/2">
                  Pricing & Inclusions (Column 2)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
              {/* Row 1 */}
              <tr className="hover:bg-pink-500/10 transition-colors bg-slate-900/40">
                <td className="py-4 px-4 sm:px-6 font-medium text-white border-r border-pink-500/20 align-top">
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white text-sm sm:text-base">In-Person Short Visit / Hotel & Cafe Meetup</span>
                      <span className="ml-2 px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 text-[10px] font-bold uppercase">1 - 2 Hours</span>
                      <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                        Instant hotel room visit, cafe meetup, or private short-time companion service across all Jaipur localities.
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 sm:px-6 align-top">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 h-full">
                    <div>
                      <span className="text-lg sm:text-xl font-extrabold text-pink-400">₹3,000 - ₹5,000</span>
                      <span className="text-xs text-slate-400 ml-1">/ Session</span>
                      <div className="mt-1 flex flex-wrap gap-1 text-[11px] text-emerald-400 font-semibold">
                        <span>✓ Instant 30-min reach</span>
                        <span className="text-slate-500">•</span>
                        <span>✓ Zero hidden fees</span>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/${SITE_WHATSAPP_RAW}?text=Hello!%20I%20want%20to%20book%20In-Person%20Short%20Visit%20(1-2%20Hours)%20in%20Jaipur.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap self-start sm:self-center"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-pink-500/10 transition-colors bg-slate-900/60">
                <td className="py-4 px-4 sm:px-6 font-medium text-white border-r border-pink-500/20 align-top">
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white text-sm sm:text-base">Full Night / Extended VIP Companion & Outstation</span>
                      <span className="ml-2 px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 text-[10px] font-bold uppercase">Full Night / 8+ Hours</span>
                      <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                        Overnight hotel stay, luxury dinner date accompaniment, model/Russian companions, and full-day heritage tours.
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 sm:px-6 align-top">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 h-full">
                    <div>
                      <span className="text-lg sm:text-xl font-extrabold text-pink-400">₹10,000 - ₹20,000</span>
                      <span className="text-xs text-slate-400 ml-1">/ Night</span>
                      <div className="mt-1 flex flex-wrap gap-1 text-[11px] text-emerald-400 font-semibold">
                        <span>✓ 100% Privacy & Discretion</span>
                        <span className="text-slate-500">•</span>
                        <span>✓ VIP Top Models</span>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/${SITE_WHATSAPP_RAW}?text=Hello!%20I%20want%20to%20book%20Full%20Night%20/%20VIP%20Extended%20Companion%20in%20Jaipur.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap self-start sm:self-center"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book VIP Night</span>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
