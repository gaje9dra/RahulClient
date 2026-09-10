import React from 'react';
import { Users, ShieldCheck, PhoneCall, MessageCircle, Heart, Star } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-5 h-5 text-pink-400" />,
      value: '100% ID Verified',
      label: 'Verified Local Hosts',
      desc: 'Aadhaar & Police Checked',
    },
    {
      icon: <PhoneCall className="w-5 h-5 text-pink-400" />,
      value: 'Instant Connect',
      label: 'Online Voice Calls',
      desc: 'Talk Online 24/7 Any Time',
    },
    {
      icon: <Heart className="w-5 h-5 text-pink-400" />,
      value: 'In-Person Meetups',
      label: 'Cafes, Tours & Dining',
      desc: 'C-Scheme, JLN & Amer Fort',
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-emerald-400" />,
      value: 'WhatsApp Direct',
      label: 'Fast Chat Connection',
      desc: '< 5 Min Response Time',
    },
  ];

  return (
    <section className="bg-slate-950/40 backdrop-blur-sm border-b border-pink-500/20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-pink-500/40 transition-all flex items-center space-x-3.5 group"
          >
            <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-400 group-hover:scale-110 transition-transform flex-shrink-0">
              {stat.icon}
            </div>
            <div>
              <div className="text-lg sm:text-xl font-serif font-extrabold text-white group-hover:text-pink-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-pink-300">{stat.label}</div>
              <div className="text-[10px] text-slate-400">{stat.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

