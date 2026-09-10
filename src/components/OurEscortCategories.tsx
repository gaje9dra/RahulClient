import React from 'react';
import { CLIENT_HOST_IMAGES } from '../config/siteConfig';

interface EscortCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

interface OurEscortCategoriesProps {
  onSelectCategory?: (categoryId: string) => void;
}

export const OurEscortCategories: React.FC<OurEscortCategoriesProps> = ({ onSelectCategory }) => {
  const categories: EscortCategory[] = [
    {
      id: 'high-profile',
      title: 'High Profile Escorts',
      subtitle: 'Premium & Elite',
      image: CLIENT_HOST_IMAGES.image1 || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'model',
      title: 'Model Escorts',
      subtitle: 'Fashion & Glamour',
      image: CLIENT_HOST_IMAGES.image2 || 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'college',
      title: 'College Girls',
      subtitle: 'Young & Fresh',
      image: CLIENT_HOST_IMAGES.image3 || 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'housewife',
      title: 'Housewife Escorts',
      subtitle: 'Mature & Experienced',
      image: CLIENT_HOST_IMAGES.image4 || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'vip',
      title: 'VIP Escorts',
      subtitle: 'Ultra Luxury',
      image: CLIENT_HOST_IMAGES.image5 || 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'russian',
      title: 'Russian Escorts',
      subtitle: 'International',
      image: CLIENT_HOST_IMAGES.image6 || 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'air-hostess',
      title: 'Air Hostess',
      subtitle: 'Sophisticated & Elegant',
      image: CLIENT_HOST_IMAGES.image7 || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'celebrity',
      title: 'Celebrity Look',
      subtitle: 'Star Appeal',
      image: CLIENT_HOST_IMAGES.image8 || 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const handleClick = (categoryId: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
    const element = document.getElementById('centers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-16 sm:py-20 bg-slate-950/80 relative z-10 border-t border-b border-pink-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-white tracking-tight">
            Our Escort Categories
          </h2>
          <p className="mt-3 text-sm sm:text-base text-pink-300/80 font-medium max-w-2xl mx-auto">
            Choose from our premium categories of high-class Jaipur escorts
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid (4 columns on desktop, 2 on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleClick(category.id)}
              className="bg-slate-900/90 border border-slate-800/80 hover:border-pink-500/60 rounded-2xl p-5 sm:p-6 text-center shadow-2xl hover:shadow-pink-500/15 transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center relative overflow-hidden"
            >
              {/* Circular Avatar Container with Glowing Pink Border */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-fuchsia-600 shadow-xl group-hover:scale-105 transition-transform duration-300 overflow-hidden flex-shrink-0">
                <img
                  src={category.image}
                  alt={category.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
                {/* Watermark Tag at bottom of circle */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-slate-950/90 border border-pink-500/40 text-[8px] text-pink-300 font-bold px-1.5 py-0.5 rounded uppercase tracking-tighter whitespace-nowrap">
                  VERIFIED
                </div>
              </div>

              {/* Category Title */}
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-pink-300 transition-colors font-serif mt-4 line-clamp-1">
                {category.title}
              </h3>

              {/* Subtitle */}
              <p className="text-xs text-pink-400/90 font-medium mt-1">
                {category.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
