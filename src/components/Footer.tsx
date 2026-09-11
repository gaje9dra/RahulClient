import React, { useState } from "react";
import { Users, PhoneCall, MapPin, Heart, MessageCircle } from "lucide-react";
import {
  BRAND_NAME,
  BRAND_LOGO_PATH,
  SITE_PHONE_RAW,
  SITE_PHONE_DISPLAY,
  SITE_WHATSAPP_RAW,
  SITE_WHATSAPP_SECONDARY_RAW,
  SITE_WHATSAPP_SECONDARY_DISPLAY,
} from "../config/siteConfig";

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenRfp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-slate-950/70 backdrop-blur-md text-slate-100 border-t border-pink-500/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
        {/* Brand & Description */}
        <div className="lg:col-span-2 space-y-4">
          <button
            type="button"
            onClick={() => onNavigateSection("hero")}
            className="flex items-center space-x-3 text-left focus:outline-none group cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 via-pink-500 to-fuchsia-600 p-0.5 shadow-lg shadow-pink-500/20 overflow-hidden group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <span className="font-extrabold text-base bg-gradient-to-br from-pink-300 via-rose-300 to-fuchsia-400 bg-clip-text text-transparent font-serif tracking-tighter">
                  J
                </span>
              </div>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-pink-300 via-rose-400 to-fuchsia-300 bg-clip-text text-transparent font-serif">
                {BRAND_NAME}
              </span>
              <p className="text-[10px] text-pink-400 uppercase tracking-widest font-bold">
                JAIPUR VERIFIED COMPANIONS
              </p>
            </div>
          </button>

          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Jaipur’s premier firm connecting people to people. Talk online, chat
            on WhatsApp, or meet in person with verified local hosts,
            companions, and cultural guides across the Pink City.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            <a
              href={`tel:+${SITE_PHONE_RAW}`}
              className="px-3.5 py-2 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-300 hover:bg-pink-500 hover:text-slate-950 font-bold text-xs transition-all flex items-center space-x-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Host Desk</span>
            </a>

            <a
              href={`https://wa.me/${SITE_WHATSAPP_RAW}?text=Hello%20${encodeURIComponent(BRAND_NAME)},%20I%20want%20to%20connect%20with%20a%20local%20host.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 font-bold text-xs transition-all flex items-center space-x-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href={`https://wa.me/${SITE_WHATSAPP_SECONDARY_RAW}?text=Hello%20${encodeURIComponent(BRAND_NAME)},%20I%20want%20to%20connect%20with%20a%20local%20host.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 font-bold text-xs transition-all flex items-center space-x-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp ({SITE_WHATSAPP_SECONDARY_DISPLAY})</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase text-pink-300 tracking-wider mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            {[
              { id: "centers", label: "Host Directory" },
              { id: "map", label: "Jaipur Locations" },
              { id: "concierge", label: "Find!" },
              { id: "capabilities", label: "Connection Modes" },
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => onNavigateSection(link.id)}
                  className="hover:text-pink-300 transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Jaipur Locations */}
        <div>
          <h4 className="text-xs font-bold uppercase text-pink-300 tracking-wider mb-4">
            Jaipur Locations
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>C-Scheme Heritage Cafes</li>
            <li>JLN Marg Cultural Belt</li>
            <li>Amer Fort & Heritage Corridor</li>
            <li>Vaishali Nagar Promenade</li>
            <li>Mansarovar Social Hub</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase text-pink-300 tracking-wider mb-4">
            Desk Contact
          </h4>
          <div className="flex items-center space-x-2 text-xs text-slate-300">
            <MapPin className="w-4 h-4 text-pink-400 flex-shrink-0" />
            <span>C-Scheme & JLN Marg, Jaipur, Rajasthan 302021</span>
          </div>

          <div className="flex items-center space-x-2 text-xs text-slate-300">
            <PhoneCall className="w-4 h-4 text-pink-400 flex-shrink-0" />
            <span>{7240493868}</span>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>
          © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
        </div>

        <div className="flex items-center space-x-1.5 text-slate-400 font-medium">
          <span>Created by</span>
          <a
            href="https://bunnie.store"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300 font-bold transition-colors underline decoration-pink-500/40 hover:decoration-pink-400"
          >
            "Bunnie Studio"
          </a>
        </div>
      </div>
    </footer>
  );
};
