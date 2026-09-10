import React, { useState } from 'react';
import { MapPin, PhoneCall, MessageCircle, Building2, CheckCircle2, ShieldCheck, ChevronDown } from 'lucide-react';
import { SITE_PHONE_RAW, SITE_PHONE_DISPLAY, SITE_WHATSAPP_RAW } from '../config/siteConfig';

interface CityData {
  id: string;
  name: string;
  tagline: string;
  hostsCount: number;
  popularZones: string[];
  description: string;
  status: string;
}

export const RAJASTHAN_CITIES: CityData[] = [
  {
    id: 'jaipur',
    name: 'Jaipur (Pink City)',
    tagline: 'Capital Hub • 100+ Verified Hosts 24/7',
    hostsCount: 120,
    popularZones: ['C-Scheme', 'Malviya Nagar', 'Vaishali Nagar', 'Mansarovar', 'Tonk Road', 'JLN Marg'],
    description: 'Premier companion and escort service across all 5-star hotels, luxury resorts, private villas, and home deliveries in Jaipur.',
    status: 'High Demand • Instant 15 Min Delivery',
  },
  {
    id: 'udaipur',
    name: 'Udaipur (City of Lakes)',
    tagline: 'Lake View Resorts • Luxury Companions',
    hostsCount: 45,
    popularZones: ['Lake Pichola', 'Fateh Sagar', 'Sukhadia Circle', 'Hiran Magri', 'Goverdhan Vilas'],
    description: 'Top-class high profile companions for luxury lake resorts, royal heritage hotels, and romantic dinner dates in Udaipur.',
    status: 'Active 24/7 • Cash on Delivery',
  },
  {
    id: 'jodhpur',
    name: 'Jodhpur (Sun City)',
    tagline: 'Heritage Escorts • Royal Service',
    hostsCount: 38,
    popularZones: ['Ratanada', 'Shastri Nagar', 'Paota', 'Circuit House Road', 'Pal Road'],
    description: 'Discreet and elegant companions for hotel stays, desert resorts, and executive visits in Jodhpur.',
    status: 'Active 24/7 • Cash on Delivery',
  },
  {
    id: 'kota',
    name: 'Kota (Educational Hub)',
    tagline: 'Young & College Models Available',
    hostsCount: 30,
    popularZones: ['Talwandi', 'Vigyan Nagar', 'Chawani', 'Rajeev Gandhi Nagar', 'Dadabari'],
    description: 'Fresh, energetic college girls and young independent hosts available for private incall and outcall in Kota.',
    status: 'Active 24/7 • Cash on Delivery',
  },
  {
    id: 'ajmer',
    name: 'Ajmer & Pushkar',
    tagline: 'Resort Companions • Heritage Escorts',
    hostsCount: 28,
    popularZones: ['Pushkar Road', 'Ana Sagar', 'Vaishali Nagar', 'Civil Lines', 'Makhupura'],
    description: 'Verified female companions available for resort stays, sightseeing tours, and luxury hotel dates in Ajmer & Pushkar.',
    status: 'Active 24/7 • Cash on Delivery',
  },
  {
    id: 'bikaner',
    name: 'Bikaner',
    tagline: 'Desert City VIP Companion Service',
    hostsCount: 22,
    popularZones: ['Jayanagar', 'Rani Bazar', 'Karni Nagar', 'Pawan Puri'],
    description: 'Premium outcall service available across top hotels and private accommodations in Bikaner.',
    status: 'Active 24/7 • Cash on Delivery',
  },
  {
    id: 'bhilwara',
    name: 'Bhilwara',
    tagline: 'Textile City Independent Hosts',
    hostsCount: 18,
    popularZones: ['Subhash Nagar', 'RCS Colony', 'Pur Road', 'Azad Nagar'],
    description: 'Independent, well-behaved local companions for business travelers and private staymates in Bhilwara.',
    status: 'Active 24/7 • Cash on Delivery',
  },
  {
    id: 'alwar',
    name: 'Alwar & Bhiwadi',
    tagline: 'Industrial & Hotel Corridor Service',
    hostsCount: 25,
    popularZones: ['Bhiwadi Hub', 'NEB Housing Board', 'Matsya Industrial Zone', 'Vijay Nagar'],
    description: 'Immediate 24/7 escort service available for corporate executives and visitors in Alwar & Bhiwadi.',
    status: 'Active 24/7 • Cash on Delivery',
  },
  {
    id: 'sikar',
    name: 'Sikar & Khatu Shyamji',
    tagline: 'Local Independent Hosts',
    hostsCount: 16,
    popularZones: ['Piprali Road', 'Bajaj Gram', 'Silver Jubliee Road'],
    description: 'Discreet companion service with 100% cash on delivery and full privacy guaranteed.',
    status: 'Active 24/7 • Cash on Delivery',
  },
  {
    id: 'jaisalmer',
    name: 'Jaisalmer (Golden City)',
    tagline: 'Desert Safari & Luxury Camp Companions',
    hostsCount: 20,
    popularZones: ['Sam Sand Dunes', 'Fort Area', 'Hanuman Circle', 'Gadisar Road'],
    description: 'VIP models and resort companions for desert safari camps and luxury hotel staycations in Jaisalmer.',
    status: 'Active 24/7 • Cash on Delivery',
  },
  {
    id: 'mount-abu',
    name: 'Mount Abu (Hill Station)',
    tagline: 'Hill Resort VIP Escort Service',
    hostsCount: 15,
    popularZones: ['Nakki Lake', 'Sunset Point Road', 'Delwara', 'Oriya'],
    description: 'Charming outstation companions for hill resort stays and weekend getaways in Mount Abu.',
    status: 'Active 24/7 • Cash on Delivery',
  },
  {
    id: 'chittorgarh',
    name: 'Chittorgarh',
    tagline: 'Heritage Companion Desk',
    hostsCount: 14,
    popularZones: ['Fort Road', 'Senthi', 'Collectorate Circle'],
    description: 'Genuine female companions available for hotel meets with zero advance booking required.',
    status: 'Active 24/7 • Cash on Delivery',
  },
  {
    id: 'bharatpur',
    name: 'Bharatpur',
    tagline: 'Bird Sanctuary & Highway Hotels',
    hostsCount: 12,
    popularZones: ['NH-21 Highway', 'Circular Road', 'Surajpole'],
    description: 'Safe and punctual local hosts available for private hotel bookings in Bharatpur.',
    status: 'Active 24/7 • Cash on Delivery',
  },
  {
    id: 'sri-ganganagar',
    name: 'Sri Ganganagar',
    tagline: 'North Rajasthan Companion Service',
    hostsCount: 16,
    popularZones: ['Jawahar Nagar', 'Model Town', 'Ridhi Sidhi'],
    description: 'Verified independent hosts offering friendly phone calls and in-person meetups.',
    status: 'Active 24/7 • Cash on Delivery',
  },
];

export const RajasthanCities: React.FC = () => {
  const [selectedCityId, setSelectedCityId] = useState<string>('jaipur');

  const activeCity = RAJASTHAN_CITIES.find((c) => c.id === selectedCityId) || RAJASTHAN_CITIES[0];

  return (
    <section id="raj-cities" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950/60 backdrop-blur-sm text-slate-100 border-b border-pink-500/20">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-pink-400" />
            <span>All Rajasthan Service Network</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight">
            Service Availability Across{' '}
            <span className="bg-gradient-to-r from-pink-300 via-rose-400 to-amber-300 bg-clip-text text-transparent">
              Cities in Rajasthan
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-medium">
            Select any city in Rajasthan below to view available verified hosts, active zones, and cash-on-delivery booking options.
          </p>
        </div>

        {/* Dropdown Selector Box */}
        <div className="max-w-xl mx-auto bg-slate-900/90 border-2 border-pink-500/40 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-4">
          <label className="block text-xs font-bold uppercase text-pink-300 tracking-wider">
            Select Your City in Rajasthan:
          </label>

          <div className="relative">
            <select
              value={selectedCityId}
              onChange={(e) => setSelectedCityId(e.target.value)}
              className="w-full bg-slate-950 border border-pink-500/30 text-white font-bold text-base sm:text-lg rounded-2xl px-5 py-4 appearance-none focus:outline-none focus:border-pink-400 shadow-inner cursor-pointer transition-all"
            >
              {RAJASTHAN_CITIES.map((city) => (
                <option key={city.id} value={city.id} className="bg-slate-950 text-white py-2">
                  📍 {city.name} ({city.hostsCount}+ Hosts Available)
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-pink-400">
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>

          {/* Quick City Chips/Pills Bar */}
          <div className="pt-2 flex flex-wrap gap-2 justify-center">
            {RAJASTHAN_CITIES.slice(0, 8).map((city) => (
              <button
                key={city.id}
                onClick={() => setSelectedCityId(city.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCityId === city.id
                    ? 'bg-pink-500 text-slate-950 shadow-md shadow-pink-500/30 scale-105'
                    : 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-pink-500/40 hover:text-white'
                }`}
              >
                {city.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active City Details Showcase Card */}
        <div className="bg-slate-900 border border-pink-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold uppercase text-emerald-400 tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>{activeCity.status}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-white mt-1">
                {activeCity.name} Escort & Call Girl Service
              </h3>
              <p className="text-xs sm:text-sm text-pink-300 font-semibold mt-1">
                {activeCity.tagline}
              </p>
            </div>

            <div className="bg-pink-500/10 border border-pink-500/30 text-pink-300 px-4 py-2 rounded-2xl text-xs font-mono font-bold">
              {activeCity.hostsCount}+ Verified Profiles
            </div>
          </div>

          {/* Description & Popular Zones */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {activeCity.description}
              </p>

              <div>
                <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block mb-2">
                  Popular Service Areas in {activeCity.name}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCity.popularZones.map((zone, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-pink-200 text-xs font-medium flex items-center space-x-1"
                    >
                      <Building2 className="w-3 h-3 text-pink-400" />
                      <span>{zone}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Booking CTA */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3 text-center">
              <span className="text-xs font-bold uppercase text-pink-400 tracking-wider block">
                Instant Booking in {activeCity.name}
              </span>
              <p className="text-xs text-slate-400">
                100% Cash on Delivery • Zero Advance • 24/7 Direct Support Desk
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:+${SITE_PHONE_RAW}`}
                  className="py-3 px-4 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 hover:brightness-110 text-white font-bold rounded-xl text-xs shadow-lg shadow-pink-500/20 flex items-center justify-center space-x-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call {activeCity.name.split(' ')[0]} Desk</span>
                </a>

                <a
                  href={`https://wa.me/${SITE_WHATSAPP_RAW}?text=Hello!%20I%20am%20looking%20for%20call%20girl%20service%20in%20${encodeURIComponent(activeCity.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp {activeCity.name.split(' ')[0]}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
