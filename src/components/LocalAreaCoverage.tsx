import React from 'react';

const JAIPUR_AREAS = [
  { name: 'Durgapura', distance: '6-9 km', description: 'A well-connected Jaipur locality with easy access to hotels, cafes, and the airport corridor.' },
  { name: 'Gujar Ki Thadi', distance: '10-13 km', description: 'A popular residential area with convenient access to local markets, cafes, and nearby neighborhoods.' },
  { name: 'Malviya Nagar', distance: '8-12 km', description: 'A popular residential and commercial area with cafes, malls, and premium locations.' },
  { name: 'Sodala', distance: '8-10 km', description: 'A well-connected area with local cafes, hotels, shopping, and convenient city access.' },
  { name: 'Shyam Nagar', distance: '7-9 km', description: 'An established residential area with convenient access to dining and commercial spots.' },
  { name: 'Vivek Vihar', distance: '8-11 km', description: 'A peaceful locality with cafes, restaurants, and modern stay options.' },
  { name: 'Jagatpura', distance: '12-15 km', description: 'A fast-growing area with hotels, cafes, residential developments, and easy connectivity.' },
  { name: 'Jhotwara', distance: '10-14 km', description: 'A popular area with local markets, residential neighborhoods, and comfortable stay options.' },
  { name: '200 Feet Bypass', distance: '9-12 km', description: 'A major corridor with hotels, residential areas, and quick connectivity across Jaipur.' },
  { name: 'Sirsi Road', distance: '9-12 km', description: 'A developing corridor with residential communities, cafes, and convenient city access.' },
  { name: 'Vidhyadhar Nagar (VDN)', distance: '11-14 km', description: 'A residential hub with shopping, cafes, and modern hotels.' },
  { name: 'Bani Park', distance: '5-8 km', description: 'A central location with hotels, cafes, and close proximity to the railway station.' },
  { name: 'Raja Park', distance: '6-9 km', description: 'A popular residential and commercial area with cafes, shopping, and dining options.' },
  { name: 'Gopalpura', distance: '7-10 km', description: 'A well-connected area with hotels, markets, restaurants, and local amenities.' },
  { name: 'Jaipur Railway Station', distance: '4-6 km', description: 'A central transport hub with hotels, cafes, and easy city-wide access.' },
  { name: 'Pratap Nagar', distance: '10-13 km', description: 'A developing area with modern residential communities, hotels, and local amenities.' },
  { name: 'Haldighati Marg', distance: '8-11 km', description: 'A well-connected residential and commercial corridor with convenient access.' },
  { name: 'Kumbha Marg', distance: '7-10 km', description: 'A growing area with cafes, hotels, residential communities, and modern facilities.' },
];

export const LocalAreaCoverage: React.FC = () => {
  return (
    <section
      id="area-coverage"
      className="w-full h-auto min-h-0 max-h-none overflow-visible py-16 pb-32 px-4 sm:px-6 lg:px-8 bg-slate-950/80 text-slate-100 border-b border-pink-500/20"
    >
      <div className="w-full h-auto min-h-0 max-h-none overflow-visible max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/40 bg-pink-500/10 text-pink-300 text-sm font-bold tracking-wide">
            <span>⌖</span> LOCATIONS &amp; AREA COVERAGE
          </div>
          <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-white tracking-tight">
            Locations
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Explore locations across Jaipur — click any location to explore available options.
          </p>
          <p className="mt-2 text-xs font-bold uppercase tracking-widest text-pink-400">
            All {JAIPUR_AREAS.length} Jaipur areas are listed below
          </p>
        </div>

        <div className="grid w-full h-auto min-h-0 max-h-none overflow-visible grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 auto-rows-auto">
          {JAIPUR_AREAS.map((area, index) => (
            <article
              key={area.name}
              className={`group min-w-0 w-full h-auto max-h-none overflow-visible rounded-2xl border border-slate-700/70 bg-slate-950/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/70 hover:shadow-[0_12px_35px_rgba(236,72,153,0.14)] ${index === 0 ? 'border-pink-500/80' : ''}`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="min-w-0 break-words text-xl font-serif font-bold text-white group-hover:text-pink-200 transition-colors">
                  {area.name}
                </h3>
                <span className="shrink-0 rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1 text-xs font-bold text-pink-300">
                  {area.distance}
                </span>
              </div>

              <div className="mt-3 flex items-start gap-2 text-sm font-medium text-pink-400">
                <span className="shrink-0">▥</span>
                <span className="min-w-0 break-words">{area.name}, Jaipur</span>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-300 break-words">
                {area.description}
              </p>

              <div className="mt-4 border-t border-slate-800 pt-4">
                <button
                  type="button"
                  className="inline-flex max-w-full items-center gap-2 break-words text-left text-sm font-bold text-pink-300 transition-colors hover:text-pink-200"
                  onClick={() => document.getElementById('agent-explorer')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="shrink-0">➤</span>
                  <span>Explore {area.name}</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
