export type PageId = 
  | 'home'
  | 'about'
  | 'models'
  | 'model-detail'
  | 'features'
  | 'battery'
  | 'why-voltera'
  | 'compare'
  | 'test-ride'
  | 'booking'
  | 'dealership'
  | 'service'
  | 'gallery'
  | 'faq'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'disclaimer'
  | 'crm';

export interface ModelColor {
  name: string;
  hex: string;
  borderHex?: string;
  accentHex?: string;
}

export interface ModelSpecification {
  category: string;
  items: {
    label: string;
    value: string;
  }[];
}

export interface EVModel {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  hindiTagline: string;
  range: string;
  badge?: string;
  highlights: string[];
  description: string;
  fullOverview: string;
  colors: ModelColor[];
  topSpeedNote: string;
  bestFor: string;
  specs: ModelSpecification[];
  keyFeatures: {
    title: string;
    desc: string;
    icon: string;
  }[];
}

export type LeadType = 'booking' | 'test-ride' | 'dealer' | 'service' | 'contact';

export type LeadStatus = 
  | 'New'
  | 'Contacted'
  | 'Interested'
  | 'Test Ride Scheduled'
  | 'Booking Pending'
  | 'Booked'
  | 'Converted'
  | 'Not Interested';

export interface Lead {
  id: string;
  type: LeadType;
  fullName: string;
  mobile: string;
  whatsapp?: string;
  email?: string;
  city: string;
  state?: string;
  modelInterest?: string;
  preferredColor?: string;
  preferredDate?: string;
  preferredTime?: string;
  businessName?: string;
  existingBusiness?: string;
  serviceType?: string;
  vehicleNumber?: string;
  message?: string;
  status: LeadStatus;
  createdAt: string;
}

export interface FAQItem {
  id: number;
  questionHindi: string;
  questionEnglish: string;
  answerHindi: string;
  answerEnglish: string;
  category: 'General' | 'Range & Models' | 'Booking & Ride' | 'Service & Battery' | 'Dealership & Finance';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Scooters' | 'Lifestyle' | 'Showroom' | 'Technology' | 'Customer Delivery' | 'Brand';
  image: string;
  caption: string;
}

export interface FeatureBox {
  id: number;
  title: string;
  hindiTitle: string;
  description: string;
  iconName: string;
  benefit: string;
}
