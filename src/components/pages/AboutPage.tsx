import React from 'react';
import { PageId } from '../../types';
import { CONTACT_DETAILS, TRUST_STRIP_ITEMS } from '../../data/siteData';
import { useLeads } from '../../context/LeadContext';
import { 
  Zap, 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  MapPin, 
  CheckCircle, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  MessageSquare,
  Building
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId, modelSlug?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { openModal, getWhatsAppUrl } = useLeads();

  return (
    <div className="font-['Montserrat',sans-serif] text-white pt-28 pb-20 bg-[#070907]">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-16 bg-gradient-to-b from-[#0a120b] via-[#080d09] to-[#070907] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#126B20]/40 border border-[#58C91A]/50 text-[#58C91A] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span className="font-devanagari">भदोही का अपना EV Brand</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            MOVING INDIA TOWARDS SMARTER MOBILITY
          </h1>

          <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            VoltEra E-Bike is an electric mobility brand focused on stylish, practical and efficient electric two-wheelers for everyday riders.
          </p>
        </div>
      </section>

      {/* 2. BRAND STORY & ROOTS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-[#58C91A] text-xs font-bold uppercase tracking-wider">
                  Our Identity
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Empowering Bhadohi & Uttar Pradesh with Green Energy
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
                <p>
                  At <strong className="text-white">VoltEra E-Bike</strong>, we believe every commuter deserves a ride that is gentle on the environment and soft on their wallet. With escalating fuel costs and vehicle maintenance overheads, transitioning to electric is no longer a luxury — it is a smart economic decision.
                </p>
                <p>
                  From our central facility at <strong className="text-[#58C91A]">Pali, Gyanpur, Bhadohi</strong>, we deliver dependable electric scooters that combine contemporary aerodynamic styling, robust suspension tuned for diverse terrains, and intelligent smart electronics like reverse mode and remote anti-theft security.
                </p>
              </div>

              {/* Pillars list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  '100% Zero Tailpipe Emission',
                  'Local Service & Spare Parts Center',
                  'Engineered for Indian Roads',
                  'Dedicated Customer Helpdesk'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl text-xs">
                    <CheckCircle className="w-4 h-4 text-[#58C91A] shrink-0" />
                    <span className="text-gray-200 font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => openModal('book-now')}
                  className="px-6 py-3 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-xs uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(88,201,26,0.4)] transition-all cursor-pointer"
                >
                  Book Your VoltEra Today
                </button>
                <button
                  onClick={() => onNavigate('models')}
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-full border border-white/20 transition-all cursor-pointer"
                >
                  Explore 5 Models →
                </button>
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-6">
              <div className="bg-gradient-to-br from-[#0e1610] to-[#080d09] border border-[#58C91A]/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-[#126B20] rounded-2xl flex items-center justify-center border border-[#58C91A]/50 shadow-lg">
                    <Zap className="w-8 h-8 text-[#58C91A] fill-[#58C91A]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white">
                      VOLTera E-BIKE
                    </h3>
                    <p className="text-xs text-[#58C91A] font-bold font-devanagari mt-0.5">
                      भदोही का अपना EV Brand • Ride the Future, Ride Safe
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4 space-y-3 text-xs text-gray-300">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#58C91A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">Registered Address:</strong><br />
                        {CONTACT_DETAILS.address}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#58C91A] shrink-0" />
                      <span>Helpline: <strong>{CONTACT_DETAILS.phone}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                      <span>WhatsApp Desk: <strong>{CONTACT_DETAILS.whatsapp}</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-16 bg-[#0b100c] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-[#0e1610] border border-[#58C91A]/30 rounded-3xl p-8 space-y-4 relative group hover:border-[#58C91A] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#126B20]/40 border border-[#58C91A]/50 flex items-center justify-center text-[#58C91A]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-white">Our Mission</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                To make smart and sustainable electric mobility accessible to everyday riders.
              </p>
              <p className="text-xs text-gray-400 font-devanagari">
                हर आम नागरिक तक किफायती, पर्यावरण-हितैषी और सुरक्षित इलेक्ट्रिक सवारी पहुँचाना हमारा मुख्य लक्ष्य है।
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#0e1610] border border-[#58C91A]/30 rounded-3xl p-8 space-y-4 relative group hover:border-[#58C91A] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#126B20]/40 border border-[#58C91A]/50 flex items-center justify-center text-[#58C91A]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-white">Our Vision</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                To build a trusted EV mobility brand with strong products, customer support and local presence.
              </p>
              <p className="text-xs text-gray-400 font-devanagari">
                मजबूत उत्पाद गुणवत्ता, त्वरित सर्विस सपोर्ट और गहरी स्थानीय विश्वसनीयता के साथ भारत का अग्रणी ईवी ब्रांड बनना।
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. LOCAL COMMITMENT CALLOUT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Rooted in Bhadohi, Ready for India
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm">
              We stand behind every scooter we deliver. Whether you need a test ride at your doorstep, advice on EV financing, or battery health checks, our Gyanpur team is always ready to assist.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openModal('test-ride')}
              className="px-7 py-3 bg-[#58C91A] text-black font-black text-xs rounded-full shadow-lg cursor-pointer"
            >
              BOOK FREE TEST RIDE
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-full border border-white/20 cursor-pointer"
            >
              Visit Gyanpur Showroom →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
