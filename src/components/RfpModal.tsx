import React, { useState, useEffect } from 'react';
import { X, Calendar, Send, PhoneCall, MessageCircle } from 'lucide-react';
import { CallCenterFacility, BpoRfpFormData } from '../types';
import { JAIPUR_MEETUP_ZONES } from '../data/callCenters';
import { SITE_PHONE_RAW, SITE_WHATSAPP_RAW } from '../config/siteConfig';

interface RfpModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFacility?: CallCenterFacility | null;
  estimateDetails?: any;
  onSubmitSuccess: (refNum: string) => void;
}

export const RfpModal: React.FC<RfpModalProps> = ({
  isOpen,
  onClose,
  selectedFacility,
  onSubmitSuccess,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<BpoRfpFormData>({
    serviceName: selectedFacility ? selectedFacility.name : 'Jaipur Host Booking',
    serviceType: selectedFacility ? selectedFacility.categoryLabel : 'Host Connect',
    clientName: '',
    email: '',
    phone: '',
    companyName: '',
    targetMarket: 'Online Voice Call',
    seatsRequired: 1,
    shiftPreference: 'Evening Meetup',
    preferredZone: selectedFacility ? selectedFacility.locationZone : 'C-Scheme Heritage Cafes',
    includeAgentRecruitment: true,
    culturalLanguageNeeds: ['English', 'Hindi'],
    specialRequirements: '',
    facilityId: selectedFacility?.id,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedFacility) {
      setFormData((prev) => ({
        ...prev,
        serviceName: selectedFacility.name,
        serviceType: selectedFacility.categoryLabel,
        preferredZone: selectedFacility.locationZone,
        facilityId: selectedFacility.id,
      }));
    }
  }, [selectedFacility]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const refNum = 'CONNECT-JPR-' + Math.floor(100000 + Math.random() * 900000);

      const rawTargetNum = selectedFacility?.whatsappNumber
        ? selectedFacility.whatsappNumber.replace(/[^0-9]/g, '')
        : (selectedFacility?.phoneNumber ? selectedFacility.phoneNumber.replace(/[^0-9]/g, '') : SITE_WHATSAPP_RAW);

      const hostName = selectedFacility ? selectedFacility.name : (formData.serviceName || 'Meet In Jaipur Host Desk');
      const hostCategory = selectedFacility ? selectedFacility.categoryLabel : (formData.serviceType || 'Host Connect');

      const whatsappLines = [
        `👋 *Hello Meet In Jaipur!*`,
        `I would like to connect with a host. Here are my connection details:`,
        ``,
        `📋 *REQUEST SUMMARY*`,
        `• *Ref ID:* ${refNum}`,
        `• *Selected Host:* ${hostName}`,
        `• *Host Category:* ${hostCategory}`,
        selectedFacility?.hourlyRate ? `• *Host Rate:* ${selectedFacility.hourlyRate}` : '',
        ``,
        `👤 *MY CONTACT DETAILS*`,
        `• *Full Name:* ${formData.clientName}`,
        `• *Phone / WhatsApp:* ${formData.phone}`,
        ``,
        `📍 *CONNECTION PREFERENCES*`,
        `• *Connection Mode:* ${formData.targetMarket}`,
        `• *Preferred Meetup Zone:* ${formData.preferredZone}`,
        `• *Notes / Preferred Time / Topics:* ${formData.specialRequirements ? formData.specialRequirements : 'None provided'}`,
        ``,
        `Please confirm host availability and connect us. Thank you!`
      ].filter(Boolean);

      const messageText = whatsappLines.join('\n');
      const whatsappUrl = `https://wa.me/${rawTargetNum}?text=${encodeURIComponent(messageText)}`;

      // Open WhatsApp chat directly with all details pre-filled
      window.open(whatsappUrl, '_blank');

      onSubmitSuccess(refNum);
      onClose();
    } catch (err) {
      console.error('Booking Request Error:', err);
      const refNum = 'CONNECT-JPR-' + Math.floor(100000 + Math.random() * 900000);
      onSubmitSuccess(refNum);
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  const rawPhone = selectedFacility?.phoneNumber ? selectedFacility.phoneNumber.replace(/[^0-9]/g, '') : SITE_PHONE_RAW;
  const rawWhatsapp = selectedFacility?.whatsappNumber ? selectedFacility.whatsappNumber.replace(/[^0-9]/g, '') : SITE_WHATSAPP_RAW;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-pink-500/30 rounded-3xl overflow-hidden shadow-2xl text-slate-100 my-8">
        {/* Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Host Connection Request
              </h2>
              <p className="text-xs text-slate-400">
                {selectedFacility ? `Target Host: ${selectedFacility.name}` : 'Meet In Jaipur Host Desk'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-300 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Instant Call/WhatsApp Options */}
        {selectedFacility && (
          <div className="p-4 bg-slate-950 border-b border-slate-800 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:+${rawPhone}`}
              className="flex-1 py-2.5 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-md shadow-pink-500/20"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call {selectedFacility.name} Now</span>
            </a>

            <a
              href={`https://wa.me/${rawWhatsapp}?text=Hello%20${encodeURIComponent(selectedFacility.name)},%20I%20saw%20your%20profile%20on%20Meet%20In%20Jaipur%20and%20would%20like%20to%20connect.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-md shadow-emerald-500/20"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Message</span>
            </a>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Contact Person Name */}
            <div>
              <label className="block text-xs font-bold uppercase text-pink-300 tracking-wider mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
              />
            </div>

            {/* Phone / WhatsApp */}
            <div>
              <label className="block text-xs font-bold uppercase text-pink-300 tracking-wider mb-1.5">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 93157 51207"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
              />
            </div>

            {/* Connection Mode */}
            <div>
              <label className="block text-xs font-bold uppercase text-pink-300 tracking-wider mb-1.5">
                Connection Mode
              </label>
              <select
                value={formData.targetMarket}
                onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value as any })}
                className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
              >
                <option value="Online Voice Call">📞 Online Audio / Voice Call</option>
                <option value="In-Person Meetup">☕ Cafe & Dining Meetup</option>
                <option value="Heritage Tour">🏛️ Jaipur City Heritage Tour</option>
                <option value="WhatsApp Direct">💬 WhatsApp Direct Connect</option>
              </select>
            </div>

            {/* Preferred Location Zone */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase text-pink-300 tracking-wider mb-1.5">
                Preferred Meetup Zone
              </label>
              <select
                value={formData.preferredZone}
                onChange={(e) => setFormData({ ...formData, preferredZone: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
              >
                {JAIPUR_MEETUP_ZONES.filter((z) => z.id !== 'all').map((z) => (
                  <option key={z.id} value={z.name}>
                    {z.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Special Requirements */}
          <div>
            <label className="block text-xs font-bold uppercase text-pink-300 tracking-wider mb-1.5">
              Special Notes / Preferred Time / Topics
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Would like a coffee session at Tapri Central in C-Scheme around 4 PM..."
              value={formData.specialRequirements}
              onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2 space-y-2">
            <p className="text-[11px] text-emerald-400 font-medium text-center flex items-center justify-center space-x-1">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Submitting opens WhatsApp directly with all your details prefilled</span>
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 hover:from-rose-400 hover:to-pink-500 text-white font-bold rounded-2xl text-xs sm:text-sm shadow-xl shadow-pink-500/25 disabled:opacity-50 transition-all flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Sending Request...' : 'Confirm Host Request & Open WhatsApp'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
