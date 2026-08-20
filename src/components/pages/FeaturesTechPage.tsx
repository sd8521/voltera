import React from 'react';
import { PageId } from '../../types';
import { SMART_FEATURES, CONTACT_DETAILS } from '../../data/siteData';
import { useLeads } from '../../context/LeadContext';
import { 
  Zap, 
  BatteryCharging, 
  Shield, 
  Sun, 
  Tv, 
  RotateCcw, 
  PiggyBank, 
  Leaf, 
  Lock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Cpu 
} from 'lucide-react';

interface FeaturesTechPageProps {
  onNavigate: (page: PageId, modelSlug?: string) => void;
}

export const FeaturesTechPage: React.FC<FeaturesTechPageProps> = ({ onNavigate }) => {
  const { openModal } = useLeads();

  return (
    <div className="font-['Montserrat',sans-serif] text-white pt-28 pb-20 bg-[#070907]">
      
      {/* 1. HERO HEADER */}
      <section className="py-14 bg-gradient-to-b from-[#0a140c] to-[#070907] border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#58C91A]/10 border border-[#58C91A]/30 text-[#58C91A] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            Engineering & Innovation
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            FEATURES & TECHNOLOGY
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-devanagari max-w-2xl mx-auto">
            आधुनिक तकनीक और स्मार्ट सुरक्षा फीचर्स, जो हर सफर को बनाते हैं सुरक्षित और आसान।
          </p>
        </div>
      </section>

      {/* 2. IN-DEPTH TECHNOLOGY SECTIONS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section 1: Powerful Motor */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0d140e] border border-white/10 rounded-3xl p-8">
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="w-24 h-24 rounded-3xl bg-[#126B20]/40 border border-[#58C91A] flex items-center justify-center shadow-[0_0_30px_rgba(88,201,26,0.3)]">
                <Zap className="w-12 h-12 text-[#58C91A] fill-[#58C91A]" />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-3">
              <div className="text-xs font-bold text-[#58C91A] uppercase tracking-wider">Electric Powertrain</div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">1. Powerful & Silent BLDC Motor</h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                VoltEra’s electric motor delivers instant torque from 0 RPM, allowing effortless overtakes, brisk acceleration, and confident uphill hill-climbing without engine noise, exhaust heat, or fuel vibration.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 pt-2">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#58C91A]" /> 100% Silent zero-noise operation</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#58C91A]" /> Instant throttle pickup</span>
              </div>
            </div>
          </div>

          {/* Section 2: Long Lasting Battery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0d140e] border border-white/10 rounded-3xl p-8">
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="w-24 h-24 rounded-3xl bg-[#126B20]/40 border border-[#58C91A] flex items-center justify-center shadow-[0_0_30px_rgba(88,201,26,0.3)]">
                <BatteryCharging className="w-12 h-12 text-[#58C91A]" />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-3">
              <div className="text-xs font-bold text-[#58C91A] uppercase tracking-wider">Energy & Range</div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">2. Long Lasting Smart Battery & BMS</h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Equipped with multi-stage Battery Management System (BMS) for active cell balancing, thermal temperature monitoring, and overvoltage protection. Delivers certified ranges from 60 KM up to 90 KM* on a single charge.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 pt-2">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#58C91A]" /> Convenient 15A home charging socket</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#58C91A]" /> Smart thermal and short-circuit protection</span>
              </div>
            </div>
          </div>

          {/* Section 3: Disc Brake */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0d140e] border border-white/10 rounded-3xl p-8">
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="w-24 h-24 rounded-3xl bg-[#126B20]/40 border border-[#58C91A] flex items-center justify-center shadow-[0_0_30px_rgba(88,201,26,0.3)]">
                <Shield className="w-12 h-12 text-[#58C91A]" />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-3">
              <div className="text-xs font-bold text-[#58C91A] uppercase tracking-wider">Active Safety</div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">3. Precision Disc Brake Safety</h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Hydraulic front disc brakes combined with responsive rear drum braking provide surefooted stopping power on wet, muddy, or sudden braking situations across town roads.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 pt-2">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#58C91A]" /> Shorter stopping distances</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#58C91A]" /> Reduced brake fade on downhills</span>
              </div>
            </div>
          </div>

          {/* Section 4: LED Headlight */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0d140e] border border-white/10 rounded-3xl p-8">
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="w-24 h-24 rounded-3xl bg-[#126B20]/40 border border-[#58C91A] flex items-center justify-center shadow-[0_0_30px_rgba(88,201,26,0.3)]">
                <Sun className="w-12 h-12 text-[#58C91A]" />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-3">
              <div className="text-xs font-bold text-[#58C91A] uppercase tracking-wider">Illumination</div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">4. Ultra-Bright LED Projector & DRL</h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Engineered for nighttime clarity on unlit rural or highway roads. High-lumen LED optics illuminate wide peripheral angles while signature Daytime Running Lights (DRLs) enhance day road presence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 pt-2">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#58C91A]" /> Low power consumption</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#58C91A]" /> Long lifespan LED diodes</span>
              </div>
            </div>
          </div>

          {/* Section 5: Reverse Mode & Anti-Theft */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-[#0d140e] border border-white/10 rounded-3xl p-8 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#126B20]/30 border border-[#58C91A]/40 flex items-center justify-center text-[#58C91A]">
                <RotateCcw className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">5. Convenient Reverse Assist Mode</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Back out of tight parking slots, crowded bazaars, and steep driveways without putting leg strain or pushing weight manually. Just press the reverse toggle on the handlebar.
              </p>
            </div>

            <div className="bg-[#0d140e] border border-white/10 rounded-3xl p-8 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#126B20]/30 border border-[#58C91A]/40 flex items-center justify-center text-[#58C91A]">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">6. Anti-Theft Wheel Lock & Remote Siren</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Smart key fob allows one-touch locking with active motion sensors. If unauthorized tampering occurs, the wheel auto-locks and sounds a loud alarm siren immediately.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-12 bg-[#0b100c] border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white">Experience These Technologies Yourself</h2>
          <p className="text-xs sm:text-sm text-gray-300">Book a free test ride in Bhadohi or Gyanpur today.</p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => openModal('test-ride')}
              className="px-7 py-3 bg-[#58C91A] text-black font-black text-xs rounded-full uppercase cursor-pointer"
            >
              BOOK FREE TEST RIDE
            </button>
            <button
              onClick={() => onNavigate('models')}
              className="px-6 py-3 bg-white/10 text-white font-bold text-xs rounded-full cursor-pointer"
            >
              View 5 Models →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
