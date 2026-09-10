import React from 'react';

export const JaipurGoogleMap: React.FC = () => {
  return (
    <section id="jaipur-google-map" className="w-full py-8 sm:py-10">
      <div className="w-full overflow-hidden border-y border-pink-500/20 bg-slate-950/70 shadow-2xl">
        <iframe
          title="Google Map of Jaipur, Rajasthan"
          src="https://www.google.com/maps?q=Jaipur%2C%20Rajasthan%2C%20India&output=embed"
          className="block h-[420px] w-full border-0 sm:h-[520px] lg:h-[600px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
};
