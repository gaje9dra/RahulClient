import React, { useState } from 'react';
import { Users, ShieldCheck, PhoneCall, CheckCircle2, MessageCircle, Sparkles, MapPin } from 'lucide-react';
import { BRAND_NAME, SITE_PHONE_RAW, SITE_WHATSAPP_RAW } from '../config/siteConfig';

export const EventCalculator: React.FC = () => {
  const [sessionType, setSessionType] = useState<string>('online-call');
  const [selectedZone, setSelectedZone] = useState<string>('c-scheme');
  const [languagePref, setLanguagePref] = useState<string>('English & Hindi');

  const zoneNames: Record<string, string> = {
    'c-scheme': 'C-Scheme & Civil Lines',
    'jln-marg': 'JLN Marg & Malviya Nagar',
    'amer': 'Amer Fort & Heritage Belt',
    'vaishali': 'Vaishali Nagar & Ajmer Road',
    'mansarovar': 'Mansarovar Belt',
  };

  const sessionTypeNames: Record<string, string> = {
    'online-call': '📞 Online Voice Call',
    'in-person-meetup': '☕ Cafe & Dining Meetup',
    'heritage-tour': '🏛️ City Heritage Tour',
    'business-companion': '👔 Business & Event Escort',
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ${BRAND_NAME}! I am looking to connect with an agent.\nMode: ${sessionTypeNames[sessionType] || sessionType}\nZone: ${zoneNames[selectedZone] || selectedZone}\nLanguage: ${languagePref}`
  );

  return (
    <section id="calculator" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950/40 backdrop-blur-sm text-slate-100 border-b border-pink-500/20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Instant Host Finder</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Host & Companion Finder
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Find the perfect verified local host or online conversation partner. Select your preferred meetup zone and connection mode to reach out instantly via call or WhatsApp.
          </p>
        </div>

        {/* Host Finder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-900 border border-pink-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            {/* Service Mode Selection */}
            <div>
              <label className="block text-xs font-bold uppercase text-pink-300 tracking-wider mb-3">
                1. Connection Mode
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'online-call', label: '📞 Online Voice Call', desc: 'Instant 24/7 private audio chat' },
                  { id: 'in-person-meetup', label: '☕ Cafe & Dining Meetup', desc: 'Meet at verified C-Scheme / JLN cafes' },
                  { id: 'heritage-tour', label: '🏛️ Heritage Tour', desc: 'Fort walks & city escort' },
                  { id: 'business-companion', label: '👔 Business Companion', desc: 'Corporate & gala escort' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSessionType(s.id)}
                    className={`p-3.5 rounded-2xl text-xs font-semibold border text-left transition-all ${
                      sessionType === s.id
                        ? 'bg-pink-500/20 border-pink-500 text-pink-300 shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-white mb-0.5">{s.label}</div>
                    <div className="text-[10px] text-slate-400">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Meetup Zone Selection */}
            <div>
              <label className="block text-xs font-bold uppercase text-pink-300 tracking-wider mb-2">
                2. Preferred Zone / Location
              </label>
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-100 focus:outline-none focus:border-pink-500 font-medium"
              >
                <option value="c-scheme">C-Scheme & Civil Lines (Heritage Cafes)</option>
                <option value="jln-marg">JLN Marg & Malviya Nagar (WTP & Malls)</option>
                <option value="amer">Amer Fort & Heritage Belt (Old City)</option>
                <option value="vaishali">Vaishali Nagar & Ajmer Road (Modern Dining)</option>
                <option value="mansarovar">Mansarovar Belt (VT Road Hubs)</option>
              </select>
            </div>

            {/* Language Preference */}
            <div>
              <label className="block text-xs font-bold uppercase text-pink-300 tracking-wider mb-2">
                3. Preferred Language
              </label>
              <select
                value={languagePref}
                onChange={(e) => setLanguagePref(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-100 focus:outline-none focus:border-pink-500 font-medium"
              >
                <option value="English & Hindi">Fluent English & Hindi (Bilingual)</option>
                <option value="Rajasthani & Hindi">Rajasthani Cultural Accent & Local Dialect</option>
                <option value="French / Spanish & English">Conversational French / Spanish</option>
              </select>
            </div>

            {/* Verification & Safety Guarantee */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-sm font-bold text-white block">Aadhaar & Police Verified Hosts</span>
                <span className="text-xs text-slate-400">All local hosts carry valid government photo identification</span>
              </div>

              <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-slate-900 border border-pink-500/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <span className="text-xs font-bold uppercase text-pink-400 tracking-widest block">
                Selected Preferences
              </span>
              <div className="text-xl sm:text-2xl font-serif font-bold text-white mt-2">
                {sessionTypeNames[sessionType]}
              </div>
              <div className="flex items-center space-x-1 text-xs text-pink-300 mt-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{zoneNames[selectedZone]} • {languagePref}</span>
              </div>
            </div>

            {/* Match Summary Box */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="font-bold text-white flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instant Host Availability Verified</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                We have active, top-rated female hosts available in {zoneNames[selectedZone]} for {sessionTypeNames[sessionType].replace(/^[^\s]+\s*/, '')}. Tap below to call or send a direct WhatsApp message to connect immediately.
              </p>
            </div>

            {/* Direct Connect Action Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={`tel:+${SITE_PHONE_RAW}`}
                className="w-full py-3.5 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 hover:from-rose-400 hover:to-pink-500 text-white font-bold rounded-2xl text-xs sm:text-sm shadow-xl shadow-pink-500/25 transition-all flex items-center justify-center space-x-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Host Desk Now</span>
              </a>

              <a
                href={`https://wa.me/${SITE_WHATSAPP_RAW}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl text-xs sm:text-sm shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat directly on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
