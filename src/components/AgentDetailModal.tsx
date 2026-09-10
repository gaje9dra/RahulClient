import React, { useState } from 'react';
import {
  X,
  MapPin,
  Users,
  ShieldCheck,
  Star,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { CallCenterFacility } from '../types';
import { SITE_PHONE_RAW, SITE_WHATSAPP_RAW, BRAND_NAME } from '../config/siteConfig';

interface CallCenterDetailModalProps {
  facility: CallCenterFacility | null;
  onClose: () => void;
  onOpenRfp: (facility: CallCenterFacility) => void;
}

export const CallCenterDetailModal: React.FC<CallCenterDetailModalProps> = ({
  facility,
  onClose,
}) => {
  if (!facility) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = facility.gallery.length > 0 ? facility.gallery : [facility.image];
  const rawPhone = facility.phoneNumber ? facility.phoneNumber.replace(/[^0-9]/g, '') : SITE_PHONE_RAW;
  const rawWhatsapp = facility.whatsappNumber ? facility.whatsappNumber.replace(/[^0-9]/g, '') : SITE_WHATSAPP_RAW;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-pink-500/30 rounded-3xl overflow-hidden shadow-2xl text-slate-100 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-pink-300 hover:bg-slate-950 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery / Image Header */}
        <div className="relative h-72 sm:h-96 bg-slate-950 overflow-hidden">
          <img
            src={images[activeImageIndex]}
            alt={facility.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Carousel Navigation Controls */}
          {images.length > 1 && (
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10">
              <button
                onClick={() =>
                  setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                }
                className="p-2 rounded-full bg-slate-950/80 border border-slate-800 text-white pointer-events-auto hover:bg-pink-500/20 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
                }
                className="p-2 rounded-full bg-slate-950/80 border border-slate-800 text-white pointer-events-auto hover:bg-pink-500/20 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Header Info Overlay */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="flex items-center space-x-2 text-pink-400 text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>{facility.locationZone}</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Govt ID Verified Host</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              {facility.name}
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm mt-1 line-clamp-2 font-medium">
              {facility.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Key Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-slate-950 border border-slate-800 p-4 rounded-2xl">
            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400 block">Rating & Reviews</span>
              <span className="text-lg font-mono font-bold text-white flex items-center space-x-1">
                <Star className="w-4 h-4 text-pink-400 fill-current" />
                <span>{facility.rating} ({facility.reviewCount})</span>
              </span>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400 block">Languages Spoken</span>
              <span className="text-xs font-bold text-pink-300">{facility.languages.join(', ')}</span>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400 block">Response Time</span>
              <span className="text-lg font-mono font-bold text-emerald-400">&lt; {facility.responseRateMinutes} mins</span>
            </div>
          </div>

          {/* Agent Bio Description */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-2 flex items-center space-x-2">
              <Users className="w-4 h-4 text-pink-400" />
              <span>About {facility.name}</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {facility.description}
            </p>
          </div>

          {/* Connection Modes */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-4 flex items-center space-x-2">
              <PhoneCall className="w-4 h-4 text-pink-400" />
              <span>Available Connection Modes</span>
            </h3>

            <div className="space-y-3">
              {facility.floors.map((mode, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-pink-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-white text-sm">{mode.name}</span>
                      <span className="px-2 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-[10px] font-bold">
                        {mode.type}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 mt-1">{mode.description}</p>
                  </div>

                  <div className="text-right sm:flex-shrink-0">
                    <span className="text-xs text-emerald-400 font-bold block">{mode.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights & Security Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <h4 className="text-sm font-bold text-pink-300 mb-3 flex items-center space-x-2">
                <Zap className="w-4 h-4 text-pink-400" />
                <span>Host Strengths & Highlights</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {facility.highlights.map((h, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <h4 className="text-sm font-bold text-pink-300 mb-3 flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-pink-400" />
                <span>Verification & Safety Guarantee</span>
              </h4>
              <div className="space-y-3 text-xs text-slate-300">
                <div>
                  <strong className="text-white block">Identity Verification:</strong>
                  <p className="text-slate-400">{facility.slaAndCompliance}</p>
                </div>
                <div>
                  <strong className="text-white block">Connection Policy:</strong>
                  <p className="text-slate-400">{facility.hiringAndSupportPolicy}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer CTAs: Call & WhatsApp */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href={`tel:+${rawPhone}`}
              className="w-full sm:w-1/2 py-3.5 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 hover:from-rose-400 hover:to-pink-500 text-white font-bold rounded-2xl text-sm shadow-xl shadow-pink-500/25 transition-all flex items-center justify-center space-x-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call {facility.name.split(' ')[0]} Now</span>
            </a>

            <a
              href={`https://wa.me/${rawWhatsapp}?text=Hello%20${encodeURIComponent(facility.name)},%20I%20saw%20your%20profile%20on%20${encodeURIComponent(BRAND_NAME)}%20and%20would%20like%20to%20connect.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl text-sm shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Message</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const VenueDetailModal = CallCenterDetailModal;
