import React from 'react';
import { PageId } from '../../types';
import { TECH_SPEC_DISCLAIMER, MODEL_DISCLAIMER } from '../../data/modelsData';
import { CONTACT_DETAILS } from '../../data/siteData';
import { useLeads } from '../../context/LeadContext';
import { 
  BatteryCharging, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Home, 
  Thermometer, 
  HelpCircle, 
  AlertCircle, 
  PiggyBank 
} from 'lucide-react';

interface BatteryChargingPageProps {
  onNavigate: (page: PageId, modelSlug?: string) => void;
}

export const BatteryChargingPage: React.FC<BatteryChargingPageProps> = ({ onNavigate }) => {
  const { openModal } = useLeads();

  return (
    <div className="font-['Montserrat',sans-serif] text-white pt-28 pb-20 bg-[#070907]">
      
      {/* 1. HERO HEADER */}
      <section className="py-14 bg-gradient-to-b from-[#0a140c] to-[#070907] border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#58C91A]/10 border border-[#58C91A]/30 text-[#58C91A] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
            <BatteryCharging className="w-3.5 h-3.5" />
            Educational EV Guide
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            BATTERY & CHARGING GUIDE
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-devanagari max-w-2xl mx-auto">
            आसानी से घर पर चार्ज करें और बैटरी की लंबी उम्र के लिए अपनाएं ये आसान टिप्स।
          </p>
        </div>
      </section>

      {/* 2. MAIN EDUCATIONAL SECTIONS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Grid of 6 Educational Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: EV Battery Basics */}
            <div className="bg-[#0e1510] border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#126B20]/40 border border-[#58C91A]/40 flex items-center justify-center text-[#58C91A]">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white">1. EV Battery Basics</h2>
              <p className="text-xs text-gray-300 leading-relaxed">
                VoltEra battery packs utilize dense, high-efficiency energy storage managed by an intelligent Battery Management System (BMS). The system constantly monitors voltage, current, and cell balance to optimize daily range.
              </p>
            </div>

            {/* Card 2: Simple Home Charging */}
            <div className="bg-[#0e1510] border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#126B20]/40 border border-[#58C91A]/40 flex items-center justify-center text-[#58C91A]">
                <Home className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white">2. Standard Home Charging</h2>
              <p className="text-xs text-gray-300 leading-relaxed">
                No expensive charging stations required! Plug your genuine VoltEra charger into any standard 15A three-pin household electrical outlet at home, office, or shop.
              </p>
            </div>

            {/* Card 3: Battery Care Tips */}
            <div className="bg-[#0e1510] border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#126B20]/40 border border-[#58C91A]/40 flex items-center justify-center text-[#58C91A]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white">3. Battery Care Best Practices</h2>
              <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-4">
                <li>Plug in charger before battery drops below 20%.</li>
                <li>Use only original authorized VoltEra chargers.</li>
                <li>Charge in dry, shaded, well-ventilated areas.</li>
                <li>Avoid charging immediately after long heavy rides in direct sunlight.</li>
              </ul>
            </div>

            {/* Card 4: Efficient Riding Habits */}
            <div className="bg-[#0e1510] border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#126B20]/40 border border-[#58C91A]/40 flex items-center justify-center text-[#58C91A]">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white">4. Efficient Riding Habits</h2>
              <p className="text-xs text-gray-300 leading-relaxed">
                Smooth throttle modulation and maintaining recommended tyre pressure significantly improve range. Use Eco mode in busy markets to maximize battery economy.
              </p>
            </div>

            {/* Card 5: Safety & Storage */}
            <div className="bg-[#0e1510] border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#126B20]/40 border border-[#58C91A]/40 flex items-center justify-center text-[#58C91A]">
                <Thermometer className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white">5. Storage & Rainy Season Safety</h2>
              <p className="text-xs text-gray-300 leading-relaxed">
                If not riding for weeks, store the scooter with around 50–70% charge and top up once a month. All electrical enclosures are built water-resistant for monsoon riding.
              </p>
            </div>

            {/* Card 6: Running Cost Benefits */}
            <div className="bg-[#0e1510] border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#126B20]/40 border border-[#58C91A]/40 flex items-center justify-center text-[#58C91A]">
                <PiggyBank className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white">6. Running Cost Economics</h2>
              <p className="text-xs text-gray-300 leading-relaxed">
                A full charge typically consumes less than 2 domestic units of electricity (under ₹12–15), powering your commute for 60 to 90 kilometers.
              </p>
            </div>

          </div>

          {/* Verification & Tech Specifications Notice */}
          <div className="bg-[#121c14] border border-[#58C91A]/40 rounded-2xl p-6 text-xs text-gray-300 space-y-2">
            <div className="flex items-center gap-2 text-[#58C91A] font-bold text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Model Specific Technical Enquiries:</span>
            </div>
            <p>
              Exact battery chemistry, warranty terms, and model-wise charging durations vary by configuration. <strong>{TECH_SPEC_DISCLAIMER}</strong> or visit our showroom at Pali, Gyanpur, Bhadohi.
            </p>
            <p className="text-[11px] text-gray-400">
              {MODEL_DISCLAIMER}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="text-center pt-4">
            <button
              onClick={() => openModal('test-ride')}
              className="px-8 py-3.5 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-xs uppercase tracking-wider rounded-full shadow-lg transition-all cursor-pointer"
            >
              Book Test Ride & Learn More
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
