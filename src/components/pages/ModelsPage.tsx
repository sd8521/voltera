import React, { useState } from 'react';
import { PageId } from '../../types';
import { VOLTERA_MODELS, MODEL_DISCLAIMER } from '../../data/modelsData';
import { useLeads } from '../../context/LeadContext';
import { ScooterGraphic } from '../common/ScooterGraphic';
import { 
  Zap, 
  Eye, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  SlidersHorizontal,
  Compass
} from 'lucide-react';

interface ModelsPageProps {
  onNavigate: (page: PageId, modelSlug?: string) => void;
}

export const ModelsPage: React.FC<ModelsPageProps> = ({ onNavigate }) => {
  const { openModal } = useLeads();
  const [filterRange, setFilterRange] = useState<'all' | '60-70' | '70-80' | '80-90'>('all');

  const filteredModels = VOLTERA_MODELS.filter((m) => {
    if (filterRange === '60-70') return m.range.includes('60–70');
    if (filterRange === '70-80') return m.range.includes('70–80');
    if (filterRange === '80-90') return m.range.includes('80–90');
    return true;
  });

  return (
    <div className="font-['Montserrat',sans-serif] text-white pt-28 pb-20 bg-[#070907]">
      
      {/* 1. HERO HEADER */}
      <section className="py-14 bg-gradient-to-b from-[#0a140c] to-[#070907] border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#58C91A]/10 border border-[#58C91A]/30 text-[#58C91A] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 fill-[#58C91A]" />
            5 Electric Scooter Models
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            5 MODELS. 1 TRUSTED BRAND.
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-devanagari max-w-2xl mx-auto">
            अपनी जरूरत और सफर के हिसाब से चुनें अपनी पसंदीदा VoltEra E-Bike.
          </p>

          {/* Range Filter Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-gray-400 font-bold flex items-center gap-1 mr-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#58C91A]" /> Filter Range:
            </span>
            {[
              { id: 'all', label: 'All 5 Models' },
              { id: '60-70', label: '60–70 KM* Range' },
              { id: '70-80', label: '70–80 KM* Range' },
              { id: '80-90', label: '80–90 KM* Flagship Range' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilterRange(f.id as any)}
                className={`text-xs px-4 py-2 rounded-full font-bold transition-all cursor-pointer ${
                  filterRange === f.id
                    ? 'bg-[#58C91A] text-black shadow-[0_0_15px_rgba(88,201,26,0.4)]'
                    : 'bg-white/5 text-gray-300 hover:bg-white/15 border border-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. MODELS LISTING */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredModels.map((model) => (
              <div
                key={model.id}
                className="bg-gradient-to-b from-[#0f1610] to-[#080d09] border border-white/10 hover:border-[#58C91A]/60 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 group hover:shadow-[0_0_35px_rgba(88,201,26,0.25)] relative"
              >
                {/* Badge Header */}
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

                {/* Content */}
                <div className="space-y-3 my-4">
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-[#58C91A] transition-colors">
                      {model.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-devanagari line-clamp-1 mt-0.5">
                      {model.hindiTagline}
                    </p>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">
                    {model.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-2 border-t border-white/10">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      Model Highlights:
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

                  {/* Color Palette */}
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

                {/* CTA Buttons */}
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

          <div className="text-center pt-8">
            <button
              onClick={() => onNavigate('compare')}
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-[#58C91A]/40 text-white font-bold text-sm rounded-full transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#58C91A]" />
              <span>Compare All 5 Models Side-by-Side</span>
            </button>
          </div>

          <p className="text-center text-[11px] text-gray-400 mt-6">
            {MODEL_DISCLAIMER}
          </p>

        </div>
      </section>

    </div>
  );
};
