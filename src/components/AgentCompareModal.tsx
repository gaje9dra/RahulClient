import React from "react";
import {
  X,
  SlidersHorizontal,
  Trash2,
  PhoneCall,
  MapPin,
  Users,
  Clock,
  ShieldCheck,
  Star,
  MessageCircle,
} from "lucide-react";
import { CallCenterFacility } from "../types";
import {
  SITE_PHONE_RAW,
  SITE_WHATSAPP_RAW,
  BRAND_NAME,
} from "../config/siteConfig";

interface CallCenterCompareModalProps {
  compareList: CallCenterFacility[];
  onClose: () => void;
  onRemove: (facilityId: string) => void;
  onClearAll: () => void;
  onOpenRfp: (facility: CallCenterFacility) => void;
}

export const CallCenterCompareModal: React.FC<CallCenterCompareModalProps> = ({
  compareList,
  onClose,
  onRemove,
  onClearAll,
}) => {
  if (compareList.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-slate-900 border border-pink-500/30 rounded-3xl overflow-hidden shadow-2xl text-slate-100 my-8">
        {/* Header Bar */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-400">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Side-by-Side Host Comparison
              </h2>
              <p className="text-xs text-slate-400">
                Comparing{" "}
                <strong className="text-pink-300 font-mono">
                  {compareList.length}
                </strong>{" "}
                verified hosts & companions
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClearAll}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-rose-400 text-xs font-semibold transition-all flex items-center space-x-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All</span>
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-300 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Matrix Comparison Table */}
        <div className="p-6 overflow-x-auto">
          <div className="min-w-[800px] grid grid-cols-1 divide-y divide-slate-800">
            {/* Facility Header Row */}
            <div className="grid grid-cols-4 gap-4 pb-6">
              <div className="font-bold text-xs uppercase tracking-wider text-pink-300 self-end">
                Host Profile & Action
              </div>

              {compareList.map((facility) => {
                const rawPhone = facility.phoneNumber
                  ? facility.phoneNumber.replace(/[^0-9]/g, "")
                  : SITE_PHONE_RAW;
                const rawWhatsapp = facility.whatsappNumber
                  ? facility.whatsappNumber.replace(/[^0-9]/g, "")
                  : SITE_WHATSAPP_RAW;

                return (
                  <div
                    key={facility.id}
                    className="space-y-2 relative bg-slate-950 p-4 rounded-2xl border border-slate-800"
                  >
                    <button
                      onClick={() => onRemove(facility.id)}
                      className="absolute top-2 right-2 p-1 rounded-lg bg-slate-900 text-slate-400 hover:text-rose-400 z-10"
                      title="Remove"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <div className="relative overflow-hidden rounded-xl h-28 bg-slate-900">
                      <img
                        src={facility.image}
                        alt={facility.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-slate-950/20" />
                    </div>

                    <div className="text-[10px] font-bold text-pink-400 uppercase tracking-wider">
                      {facility.categoryLabel}
                    </div>

                    <h3 className="font-serif font-bold text-white text-sm line-clamp-1">
                      {facility.name}
                    </h3>

                    <a
                      href={`tel:+${rawPhone}`}
                      className="w-full py-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-xl text-xs shadow-md shadow-pink-500/20 flex items-center justify-center space-x-1"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Call Host</span>
                    </a>

                    <a
                      href={`https://wa.me/${rawWhatsapp}?text=Hello%20${encodeURIComponent(facility.name)},%20I%20saw%20your%20profile%20on%20${encodeURIComponent(BRAND_NAME)}%20and%20would%20like%20to%20connect.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-1.5 bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-bold rounded-xl text-[10px] flex items-center justify-center space-x-1"
                    >
                      <MessageCircle className="w-3 h-3 text-emerald-400" />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Metric Row: Zone & Location */}
            <div className="grid grid-cols-4 gap-4 py-4 text-xs">
              <div className="font-bold text-slate-400 flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-pink-400" />
                <span>Jaipur Location</span>
              </div>
              {compareList.map((f) => (
                <div key={f.id} className="text-slate-200 font-medium">
                  {f.locationZone}
                </div>
              ))}
            </div>

            {/* Metric Row: Languages */}
            <div className="grid grid-cols-4 gap-4 py-4 text-xs">
              <div className="font-bold text-slate-400 flex items-center space-x-1">
                <Users className="w-3.5 h-3.5 text-pink-400" />
                <span>Languages</span>
              </div>
              {compareList.map((f) => (
                <div key={f.id} className="font-medium text-pink-300">
                  {f.languages.join(", ")}
                </div>
              ))}
            </div>

            {/* Metric Row: Rating */}
            <div className="grid grid-cols-4 gap-4 py-4 text-xs">
              <div className="font-bold text-slate-400 flex items-center space-x-1">
                <Star className="w-3.5 h-3.5 text-pink-400 fill-current" />
                <span>User Rating</span>
              </div>
              {compareList.map((f) => (
                <div
                  key={f.id}
                  className="font-mono font-bold text-white text-sm flex items-center space-x-1"
                >
                  <span>{f.rating}</span>
                  <span className="text-slate-400 text-[10px]">
                    ({f.reviewCount} reviews)
                  </span>
                </div>
              ))}
            </div>

            {/* Metric Row: Response Time */}
            <div className="grid grid-cols-4 gap-4 py-4 text-xs">
              <div className="font-bold text-slate-400 flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-pink-400" />
                <span>Avg Response Time</span>
              </div>
              {compareList.map((f) => (
                <div
                  key={f.id}
                  className="font-mono font-bold text-emerald-400"
                >
                  &lt; {f.responseRateMinutes} mins
                </div>
              ))}
            </div>

            {/* Metric Row: ID Verification */}
            <div className="grid grid-cols-4 gap-4 py-4 text-xs">
              <div className="font-bold text-slate-400 flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-pink-400" />
                <span>Safety & Verification</span>
              </div>
              {compareList.map((f) => (
                <div
                  key={f.id}
                  className="text-emerald-300 leading-relaxed text-[11px] font-semibold"
                >
                  {f.slaAndCompliance}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const VenueCompareModal = CallCenterCompareModal;
