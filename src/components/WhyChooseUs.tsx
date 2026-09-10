import React from 'react';
import {
  Shield,
  Clock,
  Star,
  Heart,
  Award,
  Lock,
  PhoneCall,
  MessageCircle,
} from 'lucide-react';
import { SITE_PHONE_RAW, SITE_PHONE_DISPLAY, SITE_WHATSAPP_RAW } from '../config/siteConfig';

interface WhyChooseUsProps {
  onOpenRfp: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = () => {
  const features = [
    {
      icon: Shield,
      title: 'Cash on delivery',
      description:
        'Pay 100% cash directly after your host arrives safely at your location.',
    },
    {
      icon: Clock,
      title: '24/7 Call Girls Available',
      description:
        'Book a call girl anytime, day or night. We are always open.',
    },
    {
      icon: Star,
      title: 'High-Profile Call Girls',
      description:
        'We only provide professional, elite, and high-profile call girls.',
    },
    {
      icon: Heart,
      title: 'Genuine Escort Service',
      description:
        'Safe, genuine, and authentic companions available across all areas.',
    },
    {
      icon: Award,
      title: 'Verified Profiles',
      description:
        'Browse photos of our real and 100% verified call girls.',
    },
    {
      icon: Lock,
      title: 'Safe & Secure Meetings',
      description:
        'Confidential and safe meeting hubs across major central locations.',
    },
  ];

  return (
    <section className="bg-slate-950/40 backdrop-blur-sm text-slate-100 py-16 sm:py-24 border-t border-pink-500/20 relative overflow-hidden">
      {/* Background Neon Accent Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-pink-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* SECTION 1: Why Book Call Girls From Us? */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
              Why Book Call Girls{' '}
              <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 bg-clip-text text-transparent">
                From Us?
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-medium">
              we provide 100% cash on delivery and 24/7 help and support.
            </p>
          </div>

          {/* 6 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 hover:border-pink-500/40 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-xl hover:shadow-2xl hover:shadow-pink-500/10 transition-all group flex flex-col items-center justify-center backdrop-blur-md"
                >
                  {/* Glowing Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-rose-500 via-pink-500 to-fuchsia-600 p-0.5 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                      <IconComp className="w-6 h-6 text-pink-300 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Direct Connect CTA Bar */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:+${SITE_PHONE_RAW}`}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 text-white font-bold text-xs sm:text-sm shadow-xl shadow-pink-500/20 hover:brightness-110 transition-all flex items-center space-x-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Direct Call 24/7 Desk ({SITE_PHONE_DISPLAY})</span>
          </a>

          <a
            href={`https://wa.me/${SITE_WHATSAPP_RAW}?text=Hello!%20I%20want%20to%20book%20a%20host.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/20 hover:bg-emerald-500 transition-all flex items-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Booking Chat</span>
          </a>
        </div>
      </div>
    </section>
  );
};
