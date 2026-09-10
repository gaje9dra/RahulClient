import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Users,
  SlidersHorizontal,
  Bookmark,
  CheckCircle2,
  PhoneCall,
  MapPin,
  ShieldCheck,
  Star,
  MessageCircle,
} from 'lucide-react';
import { CallCenterFacility, AgentCategory } from '../types';
import { JAIPUR_CALL_CENTERS, JAIPUR_MEETUP_ZONES } from '../data/callCenters';
import { SITE_PHONE_RAW, SITE_WHATSAPP_RAW, BRAND_NAME } from '../config/siteConfig';

interface CallCenterExplorerProps {
  onSelectVenue: (facility: CallCenterFacility) => void;
  onOpenRfpForVenue: (facility: CallCenterFacility) => void;
  compareList: CallCenterFacility[];
  onToggleCompare: (facility: CallCenterFacility) => void;
  wishlistIds: string[];
  onToggleWishlist: (facilityId: string) => void;
  externalFilter?: { serviceType: string; seats: number; zone: string } | null;
}

export const CallCenterExplorer: React.FC<CallCenterExplorerProps> = ({
  onSelectVenue,
  compareList,
  onToggleCompare,
  wishlistIds,
  onToggleWishlist,
  externalFilter,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<AgentCategory>('all');
  const [selectedZone, setSelectedZone] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recommended' | 'rating-desc'>('recommended');
  const [visibleCount, setVisibleCount] = useState<number>(15);

  useEffect(() => {
    if (externalFilter) {
      if (externalFilter.serviceType && externalFilter.serviceType !== 'all') {
        setSelectedCategory(externalFilter.serviceType as AgentCategory);
      }
      if (externalFilter.zone) {
        setSelectedZone(externalFilter.zone);
      }
    }
  }, [externalFilter]);

  useEffect(() => {
    setVisibleCount(15);
  }, [selectedCategory, selectedZone, searchQuery, sortBy]);

  const categories = [
    { id: 'all', label: 'All Hosts & Companions' },
    { id: 'online-call', label: '📞 Talk Online (Voice Call)' },
    { id: 'in-person-meetup', label: '🤝 Meet In-Person (Cafe/Meetup)' },
    { id: 'city-guide', label: '🏛️ Heritage & Tour Guide' },
    { id: 'conversation-companion', label: '💬 Conversation Companion' },
    { id: 'business-host', label: '👔 Business & Executive Escort' },
  ];

  const filteredFacilities = useMemo(() => {
    return JAIPUR_CALL_CENTERS.filter((f) => {
      // Category Match
      if (selectedCategory !== 'all' && f.category !== selectedCategory) return false;

      // Zone Match
      if (selectedZone !== 'all') {
        if (selectedZone === 'cscheme' && !f.locationZone.toLowerCase().includes('c-scheme')) return false;
        if (selectedZone === 'jlnmarg' && !f.locationZone.toLowerCase().includes('jln')) return false;
        if (selectedZone === 'amer' && !f.locationZone.toLowerCase().includes('amer')) return false;
        if (selectedZone === 'vaishali' && !f.locationZone.toLowerCase().includes('vaishali') && !f.locationZone.toLowerCase().includes('ajmer')) return false;
        if (selectedZone === 'mansarovar' && !f.locationZone.toLowerCase().includes('mansarovar')) return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = f.name.toLowerCase().includes(q);
        const matchZone = f.locationZone.toLowerCase().includes(q);
        const matchTag = f.tagline.toLowerCase().includes(q);
        const matchLangs = f.languages.some((l) => l.toLowerCase().includes(q));
        const matchHighlights = f.highlights.some((h) => h.toLowerCase().includes(q));
        if (!matchName && !matchZone && !matchTag && !matchLangs && !matchHighlights) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating-desc') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, selectedZone, searchQuery, sortBy]);

  const displayedFacilities = useMemo(() => {
    return filteredFacilities.slice(0, visibleCount);
  }, [filteredFacilities, visibleCount]);

  return (
    <section id="centers" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950/40 backdrop-blur-sm text-slate-100 border-b border-pink-500/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5 text-pink-400" />
              <span>Verified Host Directory</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Connect With Verified Local Hosts & Companions
            </h2>
          </div>

          <div className="text-xs text-slate-400">
            Showing <strong className="text-pink-300 font-mono text-sm">{displayedFacilities.length} of {filteredFacilities.length}</strong> verified hosts
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-slate-900/80 backdrop-blur-md border border-pink-500/30 rounded-2xl p-5 mb-10 space-y-5">
          {/* Top Search & Sort Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-7 relative">
              <Search className="w-4 h-4 text-pink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, English/Hindi speaker, C-Scheme, Heritage tour..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none"
              />
            </div>

            {/* Zone Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-pink-500"
              >
                {JAIPUR_MEETUP_ZONES.map((z) => (
                  <option key={z.id} value={z.id}>
                    {z.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-pink-500 font-medium"
              >
                <option value="recommended">Featured First</option>
                <option value="rating-desc">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Category Tabs Row */}
          <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-none border-t border-slate-800/80 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as AgentCategory)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center space-x-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md shadow-pink-500/20'
                    : 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-pink-500/40 hover:text-pink-300'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Facilities Grid - Responsive Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedFacilities.map((facility) => {
            const isWishlisted = wishlistIds.includes(facility.id);
            const isCompared = compareList.some((v) => v.id === facility.id);
            const rawPhone = facility.phoneNumber ? facility.phoneNumber.replace(/[^0-9]/g, '') : SITE_PHONE_RAW;
            const rawWhatsapp = facility.whatsappNumber ? facility.whatsappNumber.replace(/[^0-9]/g, '') : SITE_WHATSAPP_RAW;

            return (
              <div
                key={facility.id}
                className="bg-slate-900 border border-pink-500/30 hover:border-pink-500/70 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-pink-500/15"
              >
                {/* Image & Top Badges */}
                <div className="relative h-72 overflow-hidden cursor-pointer" onClick={() => onSelectVenue(facility)}>
                  <img
                    src={facility.image}
                    alt={facility.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <div className="flex items-center space-x-1.5 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-pink-500/30 text-xs text-white font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{facility.rating}</span>
                      <span className="text-slate-400 font-normal">({facility.reviewCount})</span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(facility.id);
                      }}
                      className={`p-2 rounded-full backdrop-blur-md border transition-all pointer-events-auto ${
                        isWishlisted
                          ? 'bg-pink-500 border-pink-400 text-slate-950'
                          : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:text-white'
                      }`}
                      title="Save Host"
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>
                  </div>

                  {/* Verified & Location Badge Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="bg-emerald-500/20 border border-emerald-500/50 backdrop-blur-md text-emerald-300 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>ID Verified</span>
                    </div>

                    <div className="bg-slate-950/80 border border-pink-500/30 text-pink-300 text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-pink-400" />
                      <span className="truncate max-w-[120px]">{facility.locationZone}</span>
                    </div>
                  </div>
                </div>

                {/* Profile Details Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        onClick={() => onSelectVenue(facility)}
                        className="text-xl font-serif font-bold text-white group-hover:text-pink-300 transition-colors cursor-pointer"
                      >
                        {facility.name}
                      </h3>
                      {facility.featured && (
                        <span className="bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-md flex-shrink-0">
                          VIP
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-pink-400/90 font-medium">
                      {facility.tagline}
                    </p>

                    {/* Key Highlights Checkmarks */}
                    <div className="space-y-1.5 pt-2">
                      {facility.highlights.slice(0, 3).map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-center space-x-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2.5 pt-3 border-t border-slate-800">
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`tel:+${rawPhone}`}
                        className="py-2.5 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 hover:brightness-110 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-md shadow-pink-500/20 transition-all"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Call Host</span>
                      </a>

                      <a
                        href={`https://wa.me/${rawWhatsapp}?text=Hello%20${encodeURIComponent(facility.name)},%20I%20am%20interested%20in%20booking.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-md shadow-emerald-500/20 transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onSelectVenue(facility)}
                        className="flex-1 py-2 bg-slate-950 border border-pink-500/30 hover:border-pink-500 text-pink-300 hover:text-white font-bold rounded-xl text-xs transition-all text-center"
                      >
                        View Full Details
                      </button>

                      <button
                        onClick={() => onToggleCompare(facility)}
                        className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all ${
                          isCompared
                            ? 'bg-pink-500 border-pink-400 text-slate-950'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                        title="Compare Host"
                      >
                        {isCompared ? 'Comparing' : 'Compare'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More Pagination Button */}
        {visibleCount < filteredFacilities.length && (
          <div className="mt-12 flex flex-col items-center justify-center space-y-3">
            <button
              onClick={() => setVisibleCount((prev) => prev + 15)}
              className="px-8 py-3.5 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 hover:from-rose-400 hover:to-pink-500 text-white font-bold rounded-2xl text-sm shadow-xl shadow-pink-500/25 transition-all flex items-center space-x-2 border border-pink-400/30 group hover:scale-105 cursor-pointer"
            >
              <span>Show More Verified Hosts</span>
              <span className="bg-slate-950/40 text-pink-200 text-xs px-2.5 py-0.5 rounded-full border border-pink-400/20 font-mono">
                +{Math.min(15, filteredFacilities.length - visibleCount)}
              </span>
            </button>
            <p className="text-xs text-slate-400 font-medium">
              Showing <strong className="text-pink-300">{displayedFacilities.length}</strong> of <strong className="text-pink-300">{filteredFacilities.length}</strong> available hosts
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export const VenueExplorer = CallCenterExplorer;
