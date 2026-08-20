import React, { useState } from 'react';
import { PageId } from '../../types';
import { VOLTERA_MODELS, MODEL_DISCLAIMER } from '../../data/modelsData';
import { 
  TRUST_STRIP_ITEMS, 
  SMART_FEATURES, 
  WHY_VOLTERA_POINTS, 
  CONTACT_DETAILS 
} from '../../data/siteData';
import { useLeads } from '../../context/LeadContext';
import { ScooterGraphic } from '../common/ScooterGraphic';
import { 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Calculator, 
  TrendingUp, 
  Phone, 
  MessageSquare, 
  Eye, 
  Cpu, 
  BatteryCharging, 
  Shield, 
  Sun, 
  Tv, 
  RotateCcw, 
  PiggyBank, 
  Leaf, 
  Lock, 
  Award,
  Layers,
  CheckCircle2,
  Compass
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, modelSlug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { openModal, getWhatsAppUrl } = useLeads();
  const [heroColorIndex, setHeroColorIndex] = useState(0);
  const [activeHeroModel, setActiveHeroModel] = useState(VOLTERA_MODELS[3]); // Default PRIME 120

  // Interactive Fuel Savings Calculator State
  const [dailyKm, setDailyKm] = useState<number>(30);
  const petrolPrice = 100; // Rs/liter
  const petrolMileage = 40; // km/liter
  const evCostPerKm = 0.20; // 20 paise per km

  const monthlyPetrolCost = Math.round((dailyKm / petrolMileage) * petrolPrice * 30);
  const monthlyEvCost = Math.round(dailyKm * evCostPerKm * 30);
  const monthlySavings = monthlyPetrolCost - monthlyEvCost;
  const annualSavings = monthlySavings * 12;

  // Icon mapping helper
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-6 h-6 text-[#58C91A]" />;
      case 'BatteryCharging': return <BatteryCharging className="w-6 h-6 text-[#58C91A]" />;
      case 'Shield': return <Shield className="w-6 h-6 text-[#58C91A]" />;
      case 'Sun': return <Sun className="w-6 h-6 text-[#58C91A]" />;
      case 'Tv': return <Tv className="w-6 h-6 text-[#58C91A]" />;
      case 'RotateCcw': return <RotateCcw className="w-6 h-6 text-[#58C91A]" />;
      case 'PiggyBank': return <PiggyBank className="w-6 h-6 text-[#58C91A]" />;
      case 'Leaf': return <Leaf className="w-6 h-6 text-[#58C91A]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#58C91A]" />;
      case 'Lock': return <Lock className="w-6 h-6 text-[#58C91A]" />;
      default: return <Zap className="w-6 h-6 text-[#58C91A]" />;
    }
  };

  return (
    <div className="font-['Montserrat',sans-serif] text-white">
      
      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#060a07] via-[#09120a] to-[#070907]">
        {/* Futuristic Background grid & lighting accents */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#126B20]/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#58C91A]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#126B20]/40 border border-[#58C91A]/50 text-[#58C91A] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(88,201,26,0.3)] animate-pulse">
                <Sparkles className="w-4 h-4 text-[#58C91A]" />
                <span className="font-devanagari tracking-wide">भदोही का अपना EV Brand</span>
              </div>

              {/* Headlines in Hindi & English */}
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-devanagari tracking-tight text-white leading-tight">
                  छोटी आकार, <span className="text-[#58C91A] text-glow-green">बड़ी ताकत</span>
                </h2>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-devanagari text-gray-200">
                  शानदार सफर
                </h3>
                <h1 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-widest text-[#58C91A] pt-1">
                  RIDE THE FUTURE. RIDE SAFE.
                </h1>
              </div>

              {/* Tagline Paragraph */}
              <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Experience next-generation electric mobility crafted for Indian roads. High certified range up to <strong>90 KM*</strong>, zero petrol expense, push-button reverse mode, and dependable local support right here in <strong>Gyanpur, Bhadohi</strong>.
              </p>

              {/* Hero CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => openModal('book-now', activeHeroModel.name)}
                  className="px-7 py-3.5 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-sm uppercase tracking-wider rounded-full shadow-[0_0_25px_rgba(88,201,26,0.5)] hover:shadow-[0_0_35px_rgba(88,201,26,0.8)] transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                  id="hero-book-now"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  <span>BOOK NOW</span>
                </button>

                <button
                  onClick={() => openModal('test-ride', activeHeroModel.name)}
                  className="px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#58C91A] text-white font-bold text-sm uppercase tracking-wider rounded-full transition-all flex items-center gap-2 cursor-pointer"
                  id="hero-test-ride"
                >
                  <Sparkles className="w-4 h-4 text-[#58C91A]" />
                  <span>BOOK TEST RIDE</span>
                </button>

                <a
                  href={getWhatsAppUrl(`Hello VoltEra E-Bike, I want to inquire about the ${activeHeroModel.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/40 font-bold text-sm rounded-full transition-all flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>WHATSAPP US</span>
                </a>
              </div>

              {/* Model Quick Switcher Pills in Hero */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mr-1">
                  Explore Models:
                </span>
                {VOLTERA_MODELS.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => {
                      setActiveHeroModel(model);
                      setHeroColorIndex(0);
                    }}
                    className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                      activeHeroModel.id === model.id
                        ? 'bg-[#58C91A] text-black shadow-md'
                        : 'bg-white/5 text-gray-300 hover:bg-white/15 border border-white/10'
                    }`}
                  >
                    {model.name.replace('VoltEra ', '')} ({model.range})
                  </button>
                ))}
              </div>

            </div>

            {/* Right Graphic Column */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              
              {/* Main Dynamic Scooter Illustration */}
              <div className="relative w-full max-w-lg">
                <ScooterGraphic 
                  colorHex={activeHeroModel.colors[heroColorIndex]?.hex || '#58C91A'}
                  modelName={activeHeroModel.name}
                  badge={activeHeroModel.range}
                  className="w-full"
                />
              </div>

              {/* Color Selection Palette */}
              <div className="mt-4 bg-[#0d140e]/90 border border-[#58C91A]/30 rounded-2xl p-3 backdrop-blur-md flex items-center gap-3 shadow-xl">
                <span className="text-xs text-gray-300 font-semibold">Colour:</span>
                <div className="flex items-center gap-2">
                  {activeHeroModel.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setHeroColorIndex(idx)}
                      style={{ backgroundColor: color.hex }}
                      className={`w-6 h-6 rounded-full border-2 transition-transform cursor-pointer ${
                        heroColorIndex === idx ? 'scale-125 border-white shadow-[0_0_10px_white]' : 'border-gray-600 hover:scale-110'
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-gray-400 border-l border-white/10 pl-2">
                  {activeHeroModel.colors[heroColorIndex]?.name}
                </span>
              </div>

              {/* Key Specs Floating Strip */}
              <div className="grid grid-cols-3 gap-2 w-full max-w-md mt-4 text-center">
                <div className="bg-white/5 border border-white/10 rounded-xl p-2">
                  <div className="text-[10px] text-gray-400 uppercase">Certified Range</div>
                  <div className="text-xs sm:text-sm font-black text-[#58C91A]">{activeHeroModel.range}</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-2">
                  <div className="text-[10px] text-gray-400 uppercase">Braking Setup</div>
                  <div className="text-xs sm:text-sm font-bold text-white">Disc / Drum Safe</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-2">
                  <div className="text-[10px] text-gray-400 uppercase">Home Charging</div>
                  <div className="text-xs sm:text-sm font-bold text-white">15A Standard</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ---------------- 2. TRUST STRIP ---------------- */}
      <section className="bg-[#0b100c] border-y border-[#58C91A]/30 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_STRIP_ITEMS.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/5 hover:bg-[#126B20]/20 border border-white/10 hover:border-[#58C91A]/40 rounded-2xl p-5 text-center transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#126B20]/30 border border-[#58C91A]/40 flex items-center justify-center mx-auto mb-3 text-[#58C91A] group-hover:scale-110 transition-transform">
                  {idx === 0 && <Layers className="w-6 h-6" />}
                  {idx === 1 && <Award className="w-6 h-6" />}
                  {idx === 2 && <TrendingUp className="w-6 h-6" />}
                  {idx === 3 && <Leaf className="w-6 h-6" />}
                </div>
                <h4 className="text-lg sm:text-xl font-black text-white">{item.value}</h4>
                <div className="text-xs font-bold text-[#58C91A] font-devanagari">{item.hindi}</div>
                <p className="text-[11px] text-gray-400 mt-1">{item.label}</p>
                <span className="inline-block mt-1 text-[10px] font-bold text-gray-300 bg-white/5 px-2 py-0.5 rounded">
                  {item.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 3. 5 MODELS SECTION ---------------- */}
      <section className="py-20 bg-[#070907] relative overflow-hidden" id="models-showcase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-[#58C91A]/10 border border-[#58C91A]/30 text-[#58C91A] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 fill-[#58C91A]" />
              5 Models. 1 Trusted Brand.
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              5 MODELS. 1 TRUSTED BRAND.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-devanagari font-semibold">
              अपनी जरूरत के हिसाब से चुनें अपनी VoltEra.
            </p>
          </div>

          {/* 5 Premium Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VOLTERA_MODELS.map((model, idx) => (
              <div
                key={model.id}
                className="bg-gradient-to-b from-[#0f1610] to-[#080d09] border border-white/10 hover:border-[#58C91A]/60 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 group hover:shadow-[0_0_35px_rgba(88,201,26,0.25)] relative"
              >
                {/* Top Pill / Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#126B20]/60 text-green-300 px-3 py-1 rounded-full border border-[#58C91A]/30">
                    {model.badge}
                  </span>
                  <span className="text-xs font-black text-[#58C91A] bg-black/60 px-3 py-1 rounded-full border border-[#58C91A]/40 flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-[#58C91A]" />
                    {model.range}
                  </span>
                </div>

                {/* Scooter Illustration */}
                <div className="py-2 transform group-hover:scale-105 transition-transform duration-500">
                  <ScooterGraphic
                    colorHex={model.colors[0].hex}
                    modelName={model.name}
                    className="w-full h-44"
                    showGlow={false}
                  />
                </div>

                {/* Model Titles & Details */}
                <div className="space-y-3 my-4">
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-[#58C91A] transition-colors">
                      {model.name}
                    </h3>
                    <p className="text-xs text-gray-300 font-devanagari line-clamp-1">
                      {model.hindiTagline}
                    </p>
                  </div>

                  {/* Highlights Bullet List (Exact from Prompt) */}
                  <div className="space-y-1.5 pt-2 border-t border-white/10">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1 text-xs text-gray-300">
                      {model.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#58C91A] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Available Colors Row */}
                  <div className="flex items-center gap-1.5 pt-2">
                    <span className="text-[11px] text-gray-400 mr-1">Colours:</span>
                    {model.colors.map((c, ci) => (
                      <span
                        key={ci}
                        style={{ backgroundColor: c.hex }}
                        className="w-4 h-4 rounded-full border border-gray-600"
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onNavigate('model-detail', model.slug)}
                    className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition-all text-center flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>VIEW DETAILS</span>
                  </button>
                  <button
                    onClick={() => openModal('book-now', model.name)}
                    className="w-full py-2.5 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-xs rounded-xl shadow-[0_0_15px_rgba(88,201,26,0.3)] transition-all text-center flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Zap className="w-3.5 h-3.5 fill-black" />
                    <span>BOOK NOW</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All & Compare CTA Banner */}
          <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('models')}
              className="px-8 py-3.5 bg-[#126B20] hover:bg-[#168327] border border-[#58C91A]/40 text-white font-bold text-sm rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>VIEW ALL 5 MODELS IN DETAIL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('compare')}
              className="px-6 py-3.5 bg-white/5 hover:bg-white/15 border border-white/15 text-gray-200 font-bold text-sm rounded-full transition-all flex items-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#58C91A]" />
              <span>COMPARE SPECIFICATIONS</span>
            </button>
          </div>

          <p className="text-center text-[11px] text-gray-400 mt-6">
            {MODEL_DISCLAIMER}
          </p>

        </div>
      </section>

      {/* ---------------- 4. 10 SMART FEATURES SECTION ---------------- */}
      <section className="py-20 bg-gradient-to-b from-[#070907] via-[#09120a] to-[#070907] border-t border-white/5 relative" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-[#58C91A]/10 border border-[#58C91A]/30 text-[#58C91A] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Advanced EV Technology
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              SMART FEATURES. SAFER RIDES.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Every VoltEra electric scooter is engineered with 10 intelligent features for maximum rider comfort, safety, and daily savings.
            </p>
          </div>

          {/* 10 Feature Icon Boxes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {SMART_FEATURES.map((feature) => (
              <div
                key={feature.id}
                className="bg-[#0e1510] hover:bg-[#121f14] border border-white/10 hover:border-[#58C91A]/50 rounded-2xl p-5 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Number Badge & Green Animated Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#126B20]/30 border border-[#58C91A]/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#58C91A]/20 transition-all shadow-[0_0_15px_rgba(88,201,26,0.2)]">
                      {getFeatureIcon(feature.iconName)}
                    </div>
                    <span className="text-xs font-black text-[#58C91A]/70 bg-white/5 px-2 py-0.5 rounded">
                      #{feature.id}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-white group-hover:text-[#58C91A] transition-colors leading-snug">
                    {feature.title}
                  </h3>
                  <div className="text-[11px] font-bold text-[#58C91A] font-devanagari mt-0.5">
                    {feature.hindiTitle}
                  </div>

                  <p className="text-xs text-gray-400 mt-2.5 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-bold text-gray-300 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#58C91A] shrink-0" />
                  <span>{feature.benefit}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('features')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#58C91A] text-white font-bold text-xs rounded-full transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Explore Complete Technology Guide</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#58C91A]" />
            </button>
          </div>

        </div>
      </section>

      {/* ---------------- 5. WHY VOLTERA (PREMIUM SPLIT SECTION) ---------------- */}
      <section className="py-20 bg-[#070907] relative overflow-hidden" id="why-voltera">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Large Scooter Image & Color Switcher */}
            <div className="lg:col-span-6 relative flex flex-col items-center">
              <div className="w-full bg-gradient-to-br from-[#0e1610] to-[#070c08] border border-[#58C91A]/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
                <div className="absolute top-4 left-4 bg-[#126B20] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  Heritage of Bhadohi
                </div>

                <ScooterGraphic
                  colorHex="#58C91A"
                  modelName="VoltEra PRIME 120"
                  badge="80–90 KM* Range"
                  className="w-full py-4"
                />

                <div className="mt-4 bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                  <div className="text-xs text-gray-300 font-devanagari">
                    <strong>Pali, Gyanpur, Bhadohi</strong> — स्थानीय सेवा, ओरिजिनल स्पेयर पार्ट्स और समर्पित वारंटी सपोर्ट।
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Why Choose VoltEra Content & 8 Bullets */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 bg-[#58C91A]/10 border border-[#58C91A]/30 text-[#58C91A] text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  भदोही का अपना EV Brand
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white font-devanagari">
                  क्यों चुनें <span className="text-[#58C91A]">VoltEra?</span>
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  VoltEra E-Bike is designed for modern everyday mobility, combining stylish design, practical features, comfortable riding and electric efficiency.
                </p>
              </div>

              {/* 8 Feature Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {WHY_VOLTERA_POINTS.map((point, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 hover:bg-[#126B20]/20 border border-white/10 hover:border-[#58C91A]/40 rounded-xl p-3 transition-colors flex items-start gap-2.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#58C91A] text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white font-devanagari">
                        {point.hindi}
                      </h3>
                      <p className="text-[11px] text-gray-400">
                        {point.english}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openModal('book-now')}
                  className="px-6 py-3 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-xs uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(88,201,26,0.4)] transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  <span>BOOK YOUR VOLTERA NOW</span>
                </button>
                <button
                  onClick={() => onNavigate('why-voltera')}
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-full border border-white/20 transition-all cursor-pointer"
                >
                  Read Full Comparison →
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ---------------- 6. INTERACTIVE FUEL SAVINGS CALCULATOR ---------------- */}
      <section className="py-16 bg-gradient-to-r from-[#0c140e] via-[#102413] to-[#0c140e] border-y border-[#58C91A]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#58C91A]/20 text-[#58C91A] text-xs font-bold px-3 py-1 rounded-full uppercase">
                <Calculator className="w-3.5 h-3.5" />
                Real-World EV Savings Calculator
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                See How Much You Save With VoltEra E-Bike
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                With petrol prices topping ₹100/Litre, a traditional petrol scooter costs over <strong>₹2.50 per KM</strong>. VoltEra runs at roughly <strong>20 paise per KM</strong>!
              </p>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>Petrol Running Cost:</span>
                  <span className="font-bold text-red-400">~₹2.50 / KM</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>VoltEra EV Running Cost:</span>
                  <span className="font-bold text-[#58C91A]">~₹0.20 / KM</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#070a07] border border-[#58C91A]/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              {/* Slider Input */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    Your Daily Riding Distance:
                  </label>
                  <span className="text-lg font-black text-[#58C91A] bg-[#126B20]/40 px-3 py-1 rounded-lg border border-[#58C91A]/30">
                    {dailyKm} KM / Day
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={dailyKm}
                  onChange={(e) => setDailyKm(Number(e.target.value))}
                  className="w-full h-2.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#58C91A]"
                />
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>10 KM (Errands)</span>
                  <span>50 KM (City Commute)</span>
                  <span>100 KM (Heavy Travel)</span>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#121e14] border border-[#58C91A]/40 rounded-2xl p-4 text-center">
                  <div className="text-xs text-gray-400 font-semibold uppercase">Monthly Savings</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#58C91A] mt-1">
                    ₹{monthlySavings.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1 font-devanagari">
                    हर महीने की सीधी बचत
                  </div>
                </div>

                <div className="bg-[#18261a] border border-[#58C91A]/60 rounded-2xl p-4 text-center shadow-[0_0_20px_rgba(88,201,26,0.2)]">
                  <div className="text-xs text-green-300 font-semibold uppercase">Annual Savings (1 Year)</div>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                    ₹{annualSavings.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-[#58C91A] mt-1 font-bold">
                    Recovers scooter cost in a few short years!
                  </div>
                </div>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => openModal('test-ride')}
                  className="px-6 py-2.5 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-xs rounded-full uppercase transition-all shadow-md cursor-pointer"
                >
                  Start Saving — Book Test Ride Today
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ---------------- 7. DEALERSHIP TEASER ---------------- */}
      <section className="py-16 bg-[#070907] relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#126B20] via-[#0d3b14] to-[#08200c] border border-[#58C91A]/40 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="bg-black/40 text-[#58C91A] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                Dealership Opportunity in UP & Purvanchal
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Become An Authorized VoltEra EV Dealer
              </h2>
              <p className="text-sm text-gray-200 max-w-xl">
                Join India’s rapidly growing electric revolution. Get comprehensive marketing support, technician training, genuine spare parts, and dedicated dealer backing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={() => onNavigate('dealership')}
                className="px-6 py-3.5 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-xs uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(88,201,26,0.5)] transition-all cursor-pointer text-center"
              >
                APPLY FOR DEALERSHIP
              </button>
              <a
                href={`tel:${CONTACT_DETAILS.phone}`}
                className="px-6 py-3.5 bg-black/40 hover:bg-black/60 border border-white/20 text-white font-bold text-xs rounded-full transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#58C91A]" />
                <span>Call: {CONTACT_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
