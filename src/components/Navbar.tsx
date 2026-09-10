import React, { useState } from 'react';
import { Users, PhoneCall, SlidersHorizontal, MessageCircle, Menu, X } from 'lucide-react';
import { BRAND_NAME, BRAND_LOGO_PATH, SITE_PHONE_RAW, SITE_WHATSAPP_RAW, SITE_WHATSAPP_SECONDARY_RAW, SITE_WHATSAPP_SECONDARY_DISPLAY } from '../config/siteConfig';

interface NavbarProps {
  compareCount: number;
  wishlistCount: number;
  onOpenCompare: () => void;
  onOpenRfp: () => void;
  onNavigateSection: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  compareCount,
  onOpenCompare,
  onNavigateSection,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navLinks = [
    { id: 'centers', label: 'Verified Hosts' },
    { id: 'map', label: 'Locations' },
    { id: 'concierge', label: 'Find!' },
    { id: 'capabilities', label: 'How It Works' },
  ];

  const handleMobileNav = (sectionId: string) => {
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-pink-500/20 text-slate-100 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between w-full">
        {/* Brand Logo & Name */}
        <button
          onClick={() => {
            onNavigateSection('hero');
            setMobileMenuOpen((prev) => !prev);
          }}
          className="flex items-center space-x-2 sm:space-x-3 group text-left focus:outline-none min-w-0 pr-2 cursor-pointer"
        >
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-rose-500 via-pink-500 to-fuchsia-600 p-0.5 shadow-lg shadow-pink-500/30 group-hover:scale-105 transition-transform flex-shrink-0 overflow-hidden">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center relative overflow-hidden">
              <span className="font-extrabold text-base sm:text-xl bg-gradient-to-br from-pink-300 via-rose-300 to-fuchsia-400 bg-clip-text text-transparent font-serif tracking-tighter">
                J
              </span>
              <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <span className="text-base sm:text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-pink-300 via-rose-400 to-fuchsia-300 bg-clip-text text-transparent font-serif whitespace-nowrap">
                {BRAND_NAME}
              </span>
              <span className="hidden lg:inline-block px-2 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-[10px] font-bold uppercase tracking-widest">
                VERIFIED
              </span>
            </div>
            <p className="text-[9px] sm:text-[11px] text-pink-400/80 tracking-wide font-medium line-clamp-1">
              Talk Online • Meet In-Person • Direct WhatsApp
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigateSection(link.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeSection === link.id
                  ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40 shadow-sm'
                  : 'text-slate-300 hover:text-pink-300 hover:bg-slate-900'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions Right */}
        <div className="flex items-center space-x-1.5 sm:space-x-3">
          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-pink-300 hover:border-pink-500/40 transition-all min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-pink-400" /> : <Menu className="w-5 h-5 text-slate-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 border-b border-pink-500/30 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="grid grid-cols-1 gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleMobileNav(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between min-h-[44px] ${
                  activeSection === link.id
                    ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-pink-300'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
                )}
              </button>
            ))}
          </div>

          {/* Quick Action CTAs inside Mobile Drawer */}
          <div className="pt-3 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-2">
            <a
              href={`tel:+${SITE_PHONE_RAW}`}
              className="py-3 px-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs font-bold flex items-center justify-center space-x-1.5 shadow-md shadow-pink-500/20 min-h-[44px]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Host Desk</span>
            </a>

            <a
              href={`https://wa.me/${SITE_WHATSAPP_RAW}?text=Hello!%20I%20would%20like%20to%20connect%20with%20a%20local%20host.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-3 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center justify-center space-x-1.5 shadow-md shadow-emerald-500/20 min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp 1</span>
            </a>

            <a
              href={`https://wa.me/${SITE_WHATSAPP_SECONDARY_RAW}?text=Hello!%20I%20would%20like%20to%20connect%20with%20a%20local%20host.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-3 rounded-xl bg-emerald-500 text-white text-xs font-bold flex items-center justify-center space-x-1.5 shadow-md shadow-emerald-500/30 border border-emerald-300/30 min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp (7240493868)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
