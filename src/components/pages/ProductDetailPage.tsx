import React, { useState } from 'react';
import { PageId } from '../../types';
import { VOLTERA_MODELS, MODEL_DISCLAIMER, TECH_SPEC_DISCLAIMER } from '../../data/modelsData';
import { useLeads } from '../../context/LeadContext';
import { ScooterGraphic } from '../common/ScooterGraphic';
import { 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowLeft, 
  MessageSquare, 
  Phone, 
  Compass, 
  Share2, 
  Calendar, 
  Cpu, 
  Shield, 
  TrendingUp, 
  Repeat, 
  Sun, 
  Lock, 
  BatteryCharging, 
  Award, 
  Flame, 
  RefreshCw, 
  Eye, 
  Layers, 
  Disc, 
  Heart,
  ChevronRight
} from 'lucide-react';

interface ProductDetailPageProps {
  modelSlug: string;
  onNavigate: (page: PageId, modelSlug?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ modelSlug, onNavigate }) => {
  const model = VOLTERA_MODELS.find((m) => m.slug === modelSlug) || VOLTERA_MODELS[3]; // Default PRIME 120
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<'specs' | 'features' | 'overview'>('specs');
  const { openModal, getWhatsAppUrl, generateModelWhatsAppUrl } = useLeads();

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-[#58C91A]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#58C91A]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#58C91A]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#58C91A]" />;
      case 'Shield': return <Shield className="w-5 h-5 text-[#58C91A]" />;
      case 'Repeat': return <Repeat className="w-5 h-5 text-[#58C91A]" />;
      case 'Lock': return <Lock className="w-5 h-5 text-[#58C91A]" />;
      case 'Sun': return <Sun className="w-5 h-5 text-[#58C91A]" />;
      case 'BatteryCharging': return <BatteryCharging className="w-5 h-5 text-[#58C91A]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#58C91A]" />;
      case 'Flame': return <Flame className="w-5 h-5 text-[#58C91A]" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-[#58C91A]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#58C91A]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#58C91A]" />;
      case 'Eye': return <Eye className="w-5 h-5 text-[#58C91A]" />;
      case 'Disc': return <Disc className="w-5 h-5 text-[#58C91A]" />;
      case 'Heart': return <Heart className="w-5 h-5 text-[#58C91A]" />;
      default: return <Sparkles className="w-5 h-5 text-[#58C91A]" />;
    }
  };

  const currentColor = model.colors[selectedColorIdx] || model.colors[0];

  return (
    <div className="font-['Montserrat',sans-serif] text-white pt-28 pb-20 bg-[#070907]">
      
      {/* 1. BREADCRUMBS & MODEL SWITCHER BAR */}
      <div className="bg-[#0b100c] border-b border-white/10 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-gray-400">
            <button onClick={() => onNavigate('home')} className="hover:text-[#58C91A]">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button onClick={() => onNavigate('models')} className="hover:text-[#58C91A]">Models</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#58C91A] font-bold">{model.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-400 hidden sm:inline">Switch Model:</span>
            {VOLTERA_MODELS.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  onNavigate('model-detail', m.slug);
                  setSelectedColorIdx(0);
                }}
                className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
                  m.slug === model.slug
                    ? 'bg-[#58C91A] text-black font-black'
                    : 'bg-white/5 text-gray-300 hover:bg-white/15'
                }`}
              >
                {m.name.replace('VoltEra ', '')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. PRODUCT HERO */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-[#0a120b] to-[#070907] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Large Product Image & Dynamic Color Selector */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="w-full bg-gradient-to-b from-[#0f1610] to-[#080c08] border border-[#58C91A]/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
                
                {/* Certified Range Badge */}
                <div className="absolute top-6 left-6 z-10 bg-black/70 backdrop-blur-md border border-[#58C91A] text-[#58C91A] font-black text-sm px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Zap className="w-4 h-4 fill-[#58C91A]" />
                  <span>Range: {model.range}</span>
                </div>

                <ScooterGraphic
                  colorHex={currentColor.hex}
                  modelName={model.name}
                  className="w-full py-4"
                />

                {/* Color Swatch Selector */}
                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-300 font-semibold">Available Colours:</span>
                    <div className="flex items-center gap-2">
                      {model.colors.map((color, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedColorIdx(idx)}
                          style={{ backgroundColor: color.hex }}
                          className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer ${
                            selectedColorIdx === idx 
                              ? 'scale-125 border-white shadow-[0_0_15px_white]' 
                              : 'border-gray-600 hover:scale-110'
                          }`}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>

                  <span className="text-xs font-bold text-[#58C91A] bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    Selected: {currentColor.name}
                  </span>
                </div>
              </div>

              {/* Best For Tag */}
              <div className="mt-4 p-3.5 bg-white/5 border border-white/10 rounded-2xl text-xs text-gray-300 text-center w-full">
                <strong className="text-white">Best Suited For:</strong> {model.bestFor}
              </div>
            </div>

            {/* Right: Product Hero Details & CTAs */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 bg-[#126B20]/40 border border-[#58C91A]/50 text-[#58C91A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  {model.badge}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  {model.name}
                </h1>

                <div className="text-base sm:text-lg font-bold text-[#58C91A] font-devanagari">
                  {model.hindiTagline}
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pt-1">
                  {model.description}
                </p>
              </div>

              {/* Highlights Chips */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Model Highlights:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {model.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white/5 p-2 rounded-xl text-xs font-semibold text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-[#58C91A] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs Block (BOOK NOW, BOOK TEST RIDE, WHATSAPP) */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => openModal('book-now', model.name)}
                    className="w-full py-3.5 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-xs uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(88,201,26,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                    id="product-book-now"
                  >
                    <Zap className="w-4 h-4 fill-black" />
                    <span>BOOK NOW</span>
                  </button>

                  <button
                    onClick={() => openModal('test-ride', model.name)}
                    className="w-full py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#58C91A] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
                    id="product-test-ride"
                  >
                    <Calendar className="w-4 h-4 text-[#58C91A]" />
                    <span>BOOK TEST RIDE</span>
                  </button>
                </div>

                <a
                  href={generateModelWhatsAppUrl(model.name, 'know price, EMI, and test ride details for')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/40 font-bold text-xs rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>INQUIRE ON WHATSAPP (+91 7905353484)</span>
                </a>
              </div>

              <div className="text-[11px] text-gray-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#58C91A]" />
                <span>Authorized Local Support in Pali, Gyanpur, Bhadohi – 221304.</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. PRODUCT OVERVIEW & KEY FEATURES & SPECS TABS */}
      <section className="py-16 bg-[#070907]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Navigation Tabs */}
          <div className="flex items-center justify-center border-b border-white/10 gap-2 sm:gap-6 pb-2">
            {[
              { id: 'specs', label: 'Technical Specifications' },
              { id: 'features', label: 'Key Features' },
              { id: 'overview', label: 'Product Overview' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer relative ${
                  activeTab === tab.id
                    ? 'text-[#58C91A]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#58C91A] shadow-[0_0_10px_#58C91A]" />
                )}
              </button>
            ))}
          </div>

          {/* TAB 1: SPECIFICATIONS TABLE */}
          {activeTab === 'specs' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {model.specs.map((group, gIdx) => (
                  <div key={gIdx} className="bg-[#0e1410] border border-white/10 rounded-2xl p-6 space-y-4">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#58C91A] border-b border-white/10 pb-2">
                      {group.category}
                    </h3>
                    <div className="divide-y divide-white/5 text-xs">
                      {group.items.map((spec, sIdx) => (
                        <div key={sIdx} className="py-2.5 flex justify-between items-center gap-4">
                          <span className="text-gray-400 font-medium">{spec.label}</span>
                          <span className="text-white font-bold text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-gray-300 space-y-1">
                <p><strong>Note:</strong> {TECH_SPEC_DISCLAIMER}</p>
                <p className="text-[11px] text-gray-400">{MODEL_DISCLAIMER}</p>
              </div>
            </div>
          )}

          {/* TAB 2: KEY FEATURES */}
          {activeTab === 'features' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
              {model.keyFeatures.map((kf, idx) => (
                <div key={idx} className="bg-[#0e1410] border border-white/10 hover:border-[#58C91A]/50 rounded-2xl p-6 space-y-3 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#126B20]/30 border border-[#58C91A]/40 flex items-center justify-center text-[#58C91A]">
                    {getFeatureIcon(kf.icon)}
                  </div>
                  <h3 className="text-base font-bold text-white">{kf.title}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">{kf.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="bg-[#0e1410] border border-white/10 rounded-2xl p-8 space-y-4 max-w-4xl mx-auto animate-in fade-in duration-300 text-xs sm:text-sm text-gray-300 leading-relaxed">
              <h3 className="text-xl font-bold text-white mb-2">{model.name} — Detailed Overview</h3>
              <p>{model.fullOverview}</p>
              <div className="p-4 bg-[#121f14] border border-[#58C91A]/30 rounded-xl space-y-2 text-xs">
                <span className="font-bold text-[#58C91A] uppercase">Designed For Practicality & Everyday Riding:</span>
                <p className="text-gray-200">
                  Whether taking your children to school, commuting to your office in Gyanpur or Bhadohi city, or managing district errands, the {model.name} delivers peace of mind, reliable throttle response, and rock-bottom running expenses.
                </p>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. READY TO RIDE BOOKING CTA STRIP */}
      <section className="py-14 bg-gradient-to-r from-[#126B20] via-[#0f4b1a] to-[#07240c] border-y border-[#58C91A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
              Ready to Ride {model.name}?
            </h2>
            <p className="text-green-100 text-xs sm:text-sm max-w-xl mx-auto">
              Book Your Free Test Ride Today at our Gyanpur hub or schedule home appointment.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openModal('book-now', model.name)}
              className="px-8 py-3.5 bg-black hover:bg-black/80 text-[#58C91A] font-black text-xs uppercase tracking-wider rounded-full shadow-2xl transition-all cursor-pointer flex items-center gap-2"
            >
              <Zap className="w-4 h-4 fill-[#58C91A]" />
              <span>BOOK THIS MODEL</span>
            </button>
            <button
              onClick={() => openModal('test-ride', model.name)}
              className="px-8 py-3.5 bg-white/20 hover:bg-white/30 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer"
            >
              SCHEDULE FREE TEST RIDE
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
