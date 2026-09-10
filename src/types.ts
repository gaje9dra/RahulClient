export type AgentCategory = 'all' | 'online-call' | 'in-person-meetup' | 'city-guide' | 'conversation-companion' | 'business-host';

export interface ServiceOption {
  name: string;
  type: 'Online Voice Call' | 'In-Person Meetup' | 'WhatsApp Direct Chat' | 'Full Day Jaipur Escort/Guide';
  duration: string;
  priceINR?: number;
  description: string;
}

export interface CallCenterFacility {
  id: string;
  name: string;
  tagline: string;
  category: AgentCategory;
  categoryLabel: string;
  locationZone: string;
  address: string;
  distanceAirportKm: number;
  responseRateMinutes: number;
  availableToday: boolean;
  supportedShifts: string[];
  rating: number;
  reviewCount: number;
  featured: boolean;
  image: string;
  gallery: string[];
  priceTier?: string;
  estPricePerSeatMonth?: number;
  whatsappNumber: string;
  phoneNumber?: string;
  languages: string[];
  highlights: string[];
  features: string[];
  floors: ServiceOption[];
  description: string;
  slaAndCompliance: string;
  hiringAndSupportPolicy: string;
  verifiedBadge?: boolean;
}

export interface SearchFilterState {
  keyword: string;
  category: AgentCategory;
  zone: string;
  modePreference: 'all' | 'online' | 'in-person' | 'whatsapp';
  sortBy: 'recommended' | 'rating-desc';
}

export interface BookingFormData {
  serviceName: string;
  serviceType?: string;
  clientName: string;
  email: string;
  phone: string;
  companyName?: string;
  targetMarket?: string;
  seatsRequired?: number;
  shiftPreference?: string;
  preferredZone?: string;
  includeAgentRecruitment?: boolean;
  culturalLanguageNeeds?: string[];
  specialRequirements?: string;
  facilityId?: string;
}

export type AgentProfile = CallCenterFacility;
export type BpoRfpFormData = BookingFormData;

export interface AiChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
