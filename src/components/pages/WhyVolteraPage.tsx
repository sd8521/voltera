import React from 'react';
import { PageId } from '../../types';
import { WHY_VOLTERA_POINTS, CONTACT_DETAILS } from '../../data/siteData';
import { useLeads } from '../../context/LeadContext';
import { ScooterGraphic } from '../common/ScooterGraphic';
import { 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Check, 
  CheckCircle2, 
  TrendingDown, 
  Wrench, 
  MapPin, 
  Phone,
  Flame,
  Leaf
} from 'lucide-react';

interface WhyVolteraPageProps {
  onNavigate: (page: PageId, modelSlug?: string) => void;
}

export const WhyVolteraPage: React.FC<WhyVolteraPageProps> = ({ onNavigate }) => {
  const { openModal } = useLeads();

  return (
    <div className="font-['Montserrat',sans-serif] text-white pt-28 pb-20 bg-[#070907]">
      
      {/* 1. HERO HEADER */}
      <section className="py-14 bg-gradient-to-b from-[#0a140c] to-[#070907] border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#126B20]/40 border border-[#58C91A]/50 text-[#58C91A] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="font-devanagari">भदोही का अपना EV Brand</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-devanagari">
            क्यों चुनें <span className="text-[#58C91A]">VoltEra?</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            VoltEra E-Bike is designed for modern everyday mobility, combining stylish design, practical features, comfortable riding and electric efficiency.
          </p>
        </div>
      </section>

      {/* 2. 8 PILLARS GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_VOLTERA_POINTS.map((point, idx) => (
              <div
                key={idx}
                className="bg-[#0e1610] hover:bg-[#122214] border border-white/10 hover:border-[#58C91A]/50 rounded-2xl p-6 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#126B20]/30 border border-[#58C91A]/40 flex items-center justify-center text-[#58C91A] font-black text-sm mb-4 group-hover:scale-110 transition-transform">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold text-white font-devanagari mb-1">
                    {point.hindi}
                  </h3>
                  <div className="text-xs font-bold text-[#58C91A] mb-2">
                    {point.english}
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-gray-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#58C91A]" />
                  <span>VoltEra Promise</span>
                </div>
              </div>
            ))}
          </div>

          {/* 3. PETROL SCOOTER VS VOLTERA EV COMPARISON */}
          <div className="bg-gradient-to-b from-[#0e1710] to-[#080d09] border border-[#58C91A]/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                VoltEra EV vs Traditional Petrol Scooter
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 font-devanagari">
                हर दिन की भारी बचत और शून्य रखरखाव का अंतर खुद देखें।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              
              {/* Petrol Column */}
              <div className="bg-[#181010] border border-red-900/40 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-red-400 font-black text-lg">
                  <Flame className="w-5 h-5" />
                  <span>Traditional Petrol Scooter</span>
                </div>
                <ul className="space-y-2.5 text-xs text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>High Running Cost (~₹2.50 to ₹3.00 per KM).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Frequent petrol pump queues and rising fuel rates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Costly periodic engine oil and spark plug replacements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Exhaust smoke, vibrations, and engine heat.</span>
                  </li>
                </ul>
              </div>

              {/* VoltEra EV Column */}
              <div className="bg-[#0f1d12] border border-[#58C91A]/50 rounded-2xl p-6 space-y-4 shadow-[0_0_25px_rgba(88,201,26,0.15)]">
                <div className="flex items-center gap-2 text-[#58C91A] font-black text-lg">
                  <Leaf className="w-5 h-5" />
                  <span>VoltEra Electric Scooter</span>
                </div>
                <ul className="space-y-2.5 text-xs text-gray-200 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-[#58C91A] font-bold">✓</span>
                    <span>Ultra Low Running Cost (~15 to 20 Paise per KM).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#58C91A] font-bold">✓</span>
                    <span>Charge at home overnight with standard 15A socket.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#58C91A] font-bold">✓</span>
                    <span>Zero engine oil, zero transmission belts, minimal maintenance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#58C91A] font-bold">✓</span>
                    <span>100% Silent, smooth instant acceleration, zero emissions.</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="text-center pt-4">
              <button
                onClick={() => openModal('book-now')}
                className="px-8 py-3.5 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-xs uppercase tracking-wider rounded-full shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <Zap className="w-4 h-4 fill-black" />
                <span>SWITCH TO VOLTERA — BOOK NOW</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
