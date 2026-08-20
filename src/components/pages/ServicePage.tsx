import React from 'react';
import { PageId } from '../../types';
import { CONTACT_DETAILS } from '../../data/siteData';
import { useLeads } from '../../context/LeadContext';
import { 
  Wrench, 
  ShieldCheck, 
  BatteryCharging, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Calendar,
  Layers,
  Settings
} from 'lucide-react';

interface ServicePageProps {
  onNavigate: (page: PageId, modelSlug?: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ onNavigate }) => {
  const { openModal, getWhatsAppUrl } = useLeads();

  return (
    <div className="font-['Montserrat',sans-serif] text-white pt-28 pb-20 bg-[#070907]">
      
      {/* 1. HERO HEADER */}
      <section className="py-14 bg-gradient-to-b from-[#0a140c] to-[#070907] border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#126B20]/40 border border-[#58C91A]/50 text-[#58C91A] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            Authorized Care & Maintenance
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            SERVICE & SPARE PARTS SUPPORT
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-devanagari max-w-2xl mx-auto">
            स्थानीय ज्ञानपुर सर्विस सेंटर, ओरिजिनल स्पेयर पार्ट्स और एक्सपर्ट टेक्नीशियन सहायता।
          </p>
        </div>
      </section>

      {/* 2. SERVICES OFFERED */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#0e1610] border border-white/10 hover:border-[#58C91A]/50 rounded-2xl p-6 space-y-3 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#126B20]/30 border border-[#58C91A]/40 flex items-center justify-center text-[#58C91A]">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Periodic Health Checkup</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Full 24-point diagnostic scan including brake pad inspection, tyre pressure balancing, throttle sensor tuning, and electrical wiring checks.
              </p>
            </div>

            <div className="bg-[#0e1610] border border-white/10 hover:border-[#58C91A]/50 rounded-2xl p-6 space-y-3 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#126B20]/30 border border-[#58C91A]/40 flex items-center justify-center text-[#58C91A]">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Battery & BMS Diagnostics</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Advanced cell health analysis, voltage symmetry checks, and charger testing to preserve maximum range and battery longevity.
              </p>
            </div>

            <div className="bg-[#0e1610] border border-white/10 hover:border-[#58C91A]/50 rounded-2xl p-6 space-y-3 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#126B20]/30 border border-[#58C91A]/40 flex items-center justify-center text-[#58C91A]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">100% Genuine Spare Parts</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Direct factory supply of original body panels, LED lights, switches, brake calipers, shock absorbers, and smart key remotes.
              </p>
            </div>

            <div className="bg-[#0e1610] border border-white/10 hover:border-[#58C91A]/50 rounded-2xl p-6 space-y-3 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#126B20]/30 border border-[#58C91A]/40 flex items-center justify-center text-[#58C91A]">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Roadside Assistance Desk</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Immediate helpline support across Bhadohi district for on-road troubleshooting, tyre punctures, or emergency pickup.
              </p>
            </div>

          </div>

          {/* Service Booking CTA Box */}
          <div className="bg-gradient-to-r from-[#0d160f] to-[#070c08] border border-[#58C91A]/30 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <span className="text-xs font-bold text-[#58C91A] uppercase tracking-wider">Book Your Service Slot</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Need Maintenance or Spare Parts?</h2>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
                Call our workshop desk or send a quick WhatsApp message to reserve express service turnaround in Gyanpur.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={getWhatsAppUrl(`Hello VoltEra Service Desk, I need to book a service appointment for my scooter.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] text-black font-black text-xs rounded-full flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>WhatsApp Service Booking</span>
              </a>
              <a
                href={`tel:${CONTACT_DETAILS.phone}`}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-full border border-white/20 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#58C91A]" />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
