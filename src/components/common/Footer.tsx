import React from 'react';
import { PageId } from '../../types';
import { CONTACT_DETAILS } from '../../data/siteData';
import { VOLTERA_MODELS } from '../../data/modelsData';
import { useLeads } from '../../context/LeadContext';
import { 
  Zap, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  ArrowUpRight,
  Database
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, modelSlug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { openModal, getWhatsAppUrl } = useLeads();

  return (
    <footer className="bg-[#050705] border-t border-[#58C91A]/20 pt-16 pb-8 text-[#F4F6F5] font-['Montserrat',sans-serif] relative overflow-hidden">
      {/* Background glowing gradient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#126B20]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#58C91A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pre-Footer Action Banner */}
        <div className="bg-gradient-to-r from-[#0d170e] via-[#122815] to-[#0d170e] border border-[#58C91A]/30 rounded-2xl p-6 sm:p-8 mb-12 shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#58C91A]/15 border border-[#58C91A]/40 text-[#58C91A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              भदोही का अपना EV Brand
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Ready to Experience Clean, Cost-Saving Electric Mobility?
            </h3>
            <p className="text-gray-300 text-sm max-w-xl">
              Book your free test ride today at our Gyanpur hub or apply for an authorized VoltEra dealership in Uttar Pradesh.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => openModal('test-ride')}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#58C91A] text-white text-xs font-bold rounded-full transition-all cursor-pointer"
            >
              BOOK FREE TEST RIDE
            </button>
            <button
              onClick={() => openModal('book-now')}
              className="px-6 py-2.5 bg-[#58C91A] hover:bg-[#68e025] text-black text-xs font-black rounded-full shadow-[0_0_20px_rgba(88,201,26,0.4)] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 fill-black text-black" />
              <span>BOOK NOW</span>
            </button>
          </div>
        </div>

        {/* MAIN 4-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* COLUMN 1: BRAND IDENTITY */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#126B20] to-[#070907] border border-[#58C91A]/60 shadow-[0_0_15px_rgba(88,201,26,0.4)]">
                <Zap className="w-6 h-6 text-[#58C91A] fill-[#58C91A]" />
              </div>
              <div>
                <span className="text-2xl font-black text-white">
                  VOLT<span className="text-[#58C91A]">ERA</span>
                </span>
                <span className="text-[10px] font-extrabold bg-[#126B20] text-white px-1.5 py-0.5 rounded ml-1.5 uppercase">
                  E-BIKE
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-xs leading-relaxed">
              <strong className="text-white">Ride the Future, Ride Safe.</strong><br />
              VoltEra E-Bike is dedicated to empowering everyday riders in Bhadohi and beyond with stylish, zero-emission, and ultra-economical electric two-wheelers.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-1 text-xs">
              <div className="font-bold text-[#58C91A] font-devanagari flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#58C91A]" />
                भदोही का अपना EV Brand
              </div>
              <p className="text-[11px] text-gray-400">
                Pali, Gyanpur, Bhadohi – 221304, Uttar Pradesh
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-black rounded-lg transition-colors"
                title="WhatsApp Us"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`tel:${CONTACT_DETAILS.phone}`}
                className="p-2 bg-[#58C91A]/20 border border-[#58C91A]/40 text-[#58C91A] hover:bg-[#58C91A] hover:text-black rounded-lg transition-colors"
                title="Call Direct"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="p-2 bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black rounded-lg transition-colors"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-l-2 border-[#58C91A] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home' as PageId, label: 'Home Page' },
                { id: 'about' as PageId, label: 'About VoltEra' },
                { id: 'models' as PageId, label: 'All 5 EV Models' },
                { id: 'features' as PageId, label: 'Features & Technology' },
                { id: 'battery' as PageId, label: 'Battery & Charging Guide' },
                { id: 'why-voltera' as PageId, label: 'Why Choose VoltEra (क्यों चुनें)' },
                { id: 'gallery' as PageId, label: 'Showroom & Delivery Gallery' },
                { id: 'contact' as PageId, label: 'Contact Us & Location' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-gray-400 hover:text-[#58C91A] transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <span className="text-[#58C91A]/60">›</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CUSTOMER & DEALERSHIP */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-l-2 border-[#58C91A] pl-2.5">
              Customer & Dealership
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => openModal('book-now')}
                  className="text-gray-400 hover:text-[#58C91A] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#58C91A]/60">›</span>
                  <span className="font-semibold text-white">Online Booking Request</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal('test-ride')}
                  className="text-gray-400 hover:text-[#58C91A] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#58C91A]/60">›</span>
                  <span>Book Free Test Ride</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service')}
                  className="text-gray-400 hover:text-[#58C91A] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#58C91A]/60">›</span>
                  <span>Service & Battery Support</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('dealership')}
                  className="text-gray-400 hover:text-[#58C91A] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#58C91A]/60">›</span>
                  <span className="text-[#58C91A] font-semibold">Become a Dealer (Purvanchal / UP)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('compare')}
                  className="text-gray-400 hover:text-[#58C91A] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#58C91A]/60">›</span>
                  <span>Compare 5 Models Matrix</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="text-gray-400 hover:text-[#58C91A] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#58C91A]/60">›</span>
                  <span>Frequently Asked Questions (FAQ)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('crm')}
                  className="text-gray-400 hover:text-[#58C91A] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Database className="w-3 h-3 text-[#58C91A]" />
                  <span>Dealer Lead Management Portal</span>
                </button>
              </li>
            </ul>

            {/* Models Mini Pill List */}
            <div className="pt-2">
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                Our 5 Models
              </div>
              <div className="flex flex-wrap gap-1">
                {VOLTERA_MODELS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => onNavigate('model-detail', m.slug)}
                    className="text-[10px] bg-white/5 hover:bg-[#58C91A]/20 hover:text-[#58C91A] text-gray-300 px-2 py-1 rounded border border-white/5 transition-colors cursor-pointer"
                  >
                    {m.name.replace('VoltEra ', '')}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 4: VERIFIED CONTACT & LOCATION */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-l-2 border-[#58C91A] pl-2.5">
              Contact Us
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5 text-gray-300">
                <MapPin className="w-4 h-4 text-[#58C91A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">VoltEra E-Bike Head Hub:</strong><br />
                  {CONTACT_DETAILS.address}
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-gray-300">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <div>
                  <span className="text-gray-400 text-[11px]">WhatsApp:</span><br />
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#25D366] font-bold">
                    {CONTACT_DETAILS.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-gray-300">
                <Phone className="w-4 h-4 text-[#58C91A] shrink-0" />
                <div>
                  <span className="text-gray-400 text-[11px]">Phone Helpline:</span><br />
                  <a href={`tel:${CONTACT_DETAILS.phone}`} className="text-white hover:text-[#58C91A] font-bold">
                    {CONTACT_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-gray-300">
                <Mail className="w-4 h-4 text-[#58C91A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 text-[11px]">Official Email:</span><br />
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-white hover:text-[#58C91A] break-all">
                    {CONTACT_DETAILS.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="text-center sm:text-left">
            © 2026 <strong className="text-white">VoltEra E-Bike</strong>. All Rights Reserved. Prime VoltEra EV Pvt Ltd.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button 
              onClick={() => onNavigate('privacy')} 
              className="hover:text-[#58C91A] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-white/20">•</span>
            <button 
              onClick={() => onNavigate('terms')} 
              className="hover:text-[#58C91A] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="text-white/20">•</span>
            <button 
              onClick={() => onNavigate('disclaimer')} 
              className="hover:text-[#58C91A] transition-colors cursor-pointer"
            >
              Disclaimer
            </button>
          </div>
        </div>

        {/* Mandatory Range Disclaimer Note */}
        <div className="mt-4 text-[11px] text-gray-400 text-center border-t border-white/5 pt-3">
          *Actual range may vary depending on riding conditions, rider/load, road conditions, weather and other factors. Specifications are subject to continuous improvement without prior notice.
        </div>

      </div>
    </footer>
  );
};
