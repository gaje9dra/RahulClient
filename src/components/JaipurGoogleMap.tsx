import React from 'react';
import { ExternalLink, MapPin, Navigation, Plane, Train, Map } from 'lucide-react';

export const JaipurGoogleMap: React.FC = () => {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Jaipur%2C%20Rajasthan%2C%20India';

  return (
    <section
      id="jaipur-google-map"
      className="w-full border-t border-pink-500/20 bg-slate-950/70 px-4 py-16 text-slate-100 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-pink-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-pink-300">
            <MapPin className="h-4 w-4" />
            <span>Our Location</span>
          </div>
          <h2 className="mt-5 text-4xl font-serif font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Jaipur on <span className="text-pink-400">Map</span>
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
            Explore Jaipur and its surrounding areas with an interactive Google Map.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.8fr)_minmax(300px,0.7fr)]">
          <div className="overflow-hidden rounded-3xl border border-pink-500/60 bg-slate-900 p-1.5 shadow-[0_20px_60px_rgba(236,72,153,0.12)]">
            <div className="h-[420px] overflow-hidden rounded-[20px] bg-slate-900 sm:h-[520px] lg:h-[560px]">
              <iframe
                title="Google Map of Jaipur, Rajasthan"
                src="https://www.google.com/maps?q=Jaipur%2C%20Rajasthan%2C%20India&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <aside className="flex flex-col rounded-3xl border border-pink-500/30 bg-slate-950/90 p-6 shadow-2xl sm:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-pink-500/30 bg-pink-500/10 text-pink-300">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-white">Jaipur, Rajasthan</h3>
                <p className="mt-1 text-sm text-slate-400">The Pink City · Rajasthan, India</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-300">
              Use the map to explore Jaipur, check surrounding neighborhoods, and get directions to your preferred location.
            </p>

            <div className="my-6 border-t border-slate-800" />

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-pink-300">
                  <Map className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Jaipur City Coverage</p>
                  <p className="text-xs text-slate-500">Major neighborhoods &amp; localities</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-pink-300">
                  <Navigation className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Easy Navigation</p>
                  <p className="text-xs text-slate-500">Get directions with Google Maps</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-pink-300">
                  <Plane className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Jaipur International Airport</p>
                  <p className="text-xs text-slate-500">Convenient airport connectivity</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-pink-300">
                  <Train className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Jaipur Railway Station</p>
                  <p className="text-xs text-slate-500">Central rail connectivity</p>
                </div>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-500/20 transition-all hover:-translate-y-0.5 hover:shadow-pink-500/30 active:translate-y-0"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Open in Google Maps</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};
