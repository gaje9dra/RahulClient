import React, { useState } from 'react';
import { MapPin, Navigation, Building2 } from 'lucide-react';
import { JAIPUR_MEETUP_ZONES } from '../data/callCenters';

interface JaipurMapGuideProps {
  onSelectZone: (zoneId: string) => void;
}

export const JaipurMapGuide: React.FC<JaipurMapGuideProps> = ({ onSelectZone }) => {
  const [zones] = useState(() => {
    const saved = localStorage.getItem('jaipur_meetup_zones_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved zones', e);
      }
    }
    return JAIPUR_MEETUP_ZONES;
  });

  const [activeZoneId, setActiveZoneId] = useState('cscheme');

  return (
    <section id="map" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950/40 backdrop-blur-sm text-slate-100 border-b border-pink-500/20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-pink-400" />
            <span>Locations & Area Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Locations
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Explore safe, upscale locations across Jaipur — click any location to explore verified hosts.
          </p>
        </div>

        {/* Location Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {zones.filter((z: any) => z.id !== 'all').map((zone: any) => (
            <div
              key={zone.id}
              className={`w-full p-5 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-3 group ${
                activeZoneId === zone.id
                  ? 'bg-slate-900 border-pink-500 shadow-xl shadow-pink-500/10'
                  : 'bg-slate-950 border-slate-800/80 hover:border-pink-500/40 hover:bg-slate-900/50'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-serif font-bold text-lg text-white group-hover:text-pink-300 transition-colors">
                    {zone.name}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/30 text-[10px] font-bold">
                    {zone.distanceAirport}
                  </span>
                </div>

                <div className="flex items-center space-x-1.5 text-xs text-pink-400 font-medium">
                  <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{zone.location || `${zone.name}, Jaipur`}</span>
                </div>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {zone.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setActiveZoneId(zone.id);
                    onSelectZone(zone.id);
                  }}
                  className="text-pink-300 font-bold text-xs hover:underline flex items-center space-x-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Explore Hosts in {zone.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



