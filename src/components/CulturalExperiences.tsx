import React from 'react';
import { PhoneCall, MessageCircle, Users, Heart, Compass, Globe, ArrowRight, Sparkles } from 'lucide-react';

interface CallCenterCapabilitiesProps {
  onOpenRfp: () => void;
}

export const CallCenterCapabilities: React.FC<CallCenterCapabilitiesProps> = ({ onOpenRfp }) => {
  const capabilities = [
    {
      icon: <PhoneCall className="w-6 h-6 text-pink-400" />,
      title: 'Online Voice & Audio Calls',
      desc: 'Connect online over private audio calls for friendly conversations, language exchange, advice, or late-night chats with local hosts.',
      tags: ['Online 24/7', 'Private & Safe', 'Audio Calls'],
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-pink-400" />,
      title: 'WhatsApp Direct Chat',
      desc: 'Chat directly on WhatsApp with verified local hosts. Instant response for trip planning, casual text chats, or booking meetups.',
      tags: ['Instant Reply', 'WhatsApp Direct', 'Casual Chat'],
    },
    {
      icon: <Users className="w-6 h-6 text-pink-400" />,
      title: 'Cafe & Dining Meetups',
      desc: 'Meet local companions at premium cafes in C-Scheme, Malviya Nagar, or JLN Marg for coffee, dining, and relaxed conversations.',
      tags: ['Public Cafes', 'Dining Out', 'Relaxed Ambiance'],
    },
    {
      icon: <Compass className="w-6 h-6 text-pink-400" />,
      title: 'Heritage City Tours',
      desc: 'Explore the city with friendly local companions who know every hidden gem, local bazaar, landmark spot, and street food lane.',
      tags: ['Local Guides', 'Amer Fort', 'Bazaar Walking'],
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-400" />,
      title: 'Event & Dinner Companion',
      desc: 'Attend social gatherings, weddings, art exhibitions, or corporate dinners with polite, well-spoken, elegant hosts.',
      tags: ['Event Companion', 'Gala Dinners', 'Etiquette & Style'],
    },
    {
      icon: <Globe className="w-6 h-6 text-pink-400" />,
      title: 'Multilingual Hosts',
      desc: 'Connect with hosts fluent in English, Hindi, French, Spanish, or local Rajasthani dialects for culturally immersive experiences.',
      tags: ['Bilingual', 'Cultural Exchange', 'Foreign Languages'],
    },
  ];

  return (
    <section id="capabilities" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950/40 backdrop-blur-sm text-slate-100 border-b border-pink-500/20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Connection Modes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            How You Can Connect with Our Hosts
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Whether you want to talk online, message on WhatsApp, or meet in person in Jaipur, our verified hosts are ready to welcome you.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-pink-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-pink-500/10"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-pink-500/10 border border-pink-500/30 text-pink-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                  {cap.icon}
                </div>

                <h3 className="text-xl font-serif font-bold text-white group-hover:text-pink-300 transition-colors">
                  {cap.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {cap.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {cap.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-pink-300 text-[10px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <button
                  onClick={onOpenRfp}
                  className="w-full py-2.5 bg-slate-950 hover:bg-pink-500/10 text-pink-300 border border-slate-800 hover:border-pink-500/40 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>Connect With Host</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CulturalExperiences = CallCenterCapabilities;
