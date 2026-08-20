import React, { useState } from 'react';
import { PageId } from '../../types';
import { VOLTERA_MODELS } from '../../data/modelsData';
import { ScooterGraphic } from '../common/ScooterGraphic';
import { useLeads } from '../../context/LeadContext';
import { 
  Images, 
  Sparkles, 
  Zap, 
  Eye, 
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId, modelSlug?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const { openModal } = useLeads();
  const [selectedModelId, setSelectedModelId] = useState<string>('all');
  const [activeColorHex, setActiveColorHex] = useState<string>('#58C91A');

  const modelsToShow = selectedModelId === 'all' 
    ? VOLTERA_MODELS 
    : VOLTERA_MODELS.filter(m => m.id === selectedModelId);

  return (
    <div className="font-['Montserrat',sans-serif] text-white pt-28 pb-20 bg-[#070907]">
      
      {/* 1. HERO HEADER */}
      <section className="py-14 bg-gradient-to-b from-[#0a140c] to-[#070907] border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#126B20]/40 border border-[#58C91A]/50 text-[#58C91A] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
            <Images className="w-3.5 h-3.5" />
            Visual Showcase
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            VOLTERA PRODUCT GALLERY
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-devanagari max-w-2xl mx-auto">
            सभी 5 मॉडल्स का आकर्षक डिजाइन, प्रीमियम फिनिश और आधुनिक कलर्स देखें।
          </p>

          {/* Filter Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedModelId('all')}
              className={`text-xs px-4 py-2 rounded-full font-bold transition-all cursor-pointer ${
                selectedModelId === 'all'
                  ? 'bg-[#58C91A] text-black shadow-md'
                  : 'bg-white/5 text-gray-300 hover:bg-white/15'
              }`}
            >
              All 5 Models
            </button>
            {VOLTERA_MODELS.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedModelId(m.id)}
                className={`text-xs px-4 py-2 rounded-full font-bold transition-all cursor-pointer ${
                  selectedModelId === m.id
                    ? 'bg-[#58C91A] text-black shadow-md'
                    : 'bg-white/5 text-gray-300 hover:bg-white/15'
                }`}
              >
                {m.name.replace('VoltEra ', '')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. GALLERY GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modelsToShow.map((model) => (
              <div
                key={model.id}
                className="bg-gradient-to-b from-[#0f1610] to-[#080d09] border border-white/10 hover:border-[#58C91A]/60 rounded-3xl p-6 flex flex-col justify-between group transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#126B20]/60 text-green-300 px-3 py-1 rounded-full">
                      {model.badge}
                    </span>
                    <span className="text-xs font-black text-[#58C91A]">
                      {model.range}
                    </span>
                  </div>

                  <div className="py-4 transform group-hover:scale-105 transition-transform duration-500">
                    <ScooterGraphic
                      colorHex={model.colors[0].hex}
                      modelName={model.name}
                      className="w-full h-44"
                    />
                  </div>

                  <h3 className="text-xl font-black text-white mt-2">
                    {model.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-devanagari mt-1">
                    {model.hindiTagline}
                  </p>

                  {/* Color Palette Display */}
                  <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10">
                    <span className="text-[11px] text-gray-400">Available:</span>
                    <div className="flex gap-1.5">
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
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex gap-2">
                  <button
                    onClick={() => onNavigate('model-detail', model.slug)}
                    className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition-all text-center flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Model Details</span>
                  </button>
                  <button
                    onClick={() => openModal('book-now', model.name)}
                    className="w-full py-2.5 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-xs rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Zap className="w-3.5 h-3.5 fill-black" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
