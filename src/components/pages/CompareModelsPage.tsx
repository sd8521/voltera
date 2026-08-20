import React, { useState } from 'react';
import { PageId } from '../../types';
import { VOLTERA_MODELS, MODEL_DISCLAIMER, TECH_SPEC_DISCLAIMER } from '../../data/modelsData';
import { useLeads } from '../../context/LeadContext';
import { 
  Zap, 
  Check, 
  X, 
  Compass, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Eye 
} from 'lucide-react';

interface CompareModelsPageProps {
  onNavigate: (page: PageId, modelSlug?: string) => void;
}

export const CompareModelsPage: React.FC<CompareModelsPageProps> = ({ onNavigate }) => {
  const { openModal } = useLeads();

  // Comparison criteria requested in prompt
  const comparisonRows = [
    {
      key: 'range',
      label: 'Certified Range',
      desc: 'Estimated per full charge',
      values: {
        'voltera-mini-60': '60–70 KM*',
        'voltera-ct-80': '70–80 KM*',
        'voltera-smart-100': '60–70 KM*',
        'voltera-prime-120': '80–90 KM* (Max)',
        'voltera-shakti-150': '60–70 KM*'
      },
      highlight: true
    },
    {
      key: 'design',
      label: 'Design Archetype',
      desc: 'Styling & Profile',
      values: {
        'voltera-mini-60': 'Compact City Agile',
        'voltera-ct-80': 'Executive Sleek',
        'voltera-smart-100': 'Futuristic Smart',
        'voltera-prime-120': 'Flagship Luxury',
        'voltera-shakti-150': 'Sporty Heavy-Duty'
      }
    },
    {
      key: 'brakes',
      label: 'Braking Setup',
      desc: 'Front & Rear System',
      values: {
        'voltera-mini-60': 'Responsive Drum/Disc',
        'voltera-ct-80': 'Front Precision Disc',
        'voltera-smart-100': 'Front Disc + Drum',
        'voltera-prime-120': 'Front Disc + Regen Assist',
        'voltera-shakti-150': 'Heavy-Duty Disc Safety'
      }
    },
    {
      key: 'reverse',
      label: 'Reverse Assist Mode',
      desc: 'Handlebar Button Toggle',
      values: {
        'voltera-mini-60': 'Standard Assist',
        'voltera-ct-80': 'Integrated Assist',
        'voltera-smart-100': 'Electronic Dedicated Push',
        'voltera-prime-120': 'Smart Torque Assist',
        'voltera-shakti-150': 'Electronic Assist'
      }
    },
    {
      key: 'display',
      label: 'Digital Instrument Console',
      desc: 'Speed & Trip Meter',
      values: {
        'voltera-mini-60': 'Digital Screen',
        'voltera-ct-80': 'Smart Digital Cockpit',
        'voltera-smart-100': 'Anti-Glare High Brightness',
        'voltera-prime-120': 'Large 5.5" HD Cluster',
        'voltera-shakti-150': 'Sport Themed Digital'
      }
    },
    {
      key: 'headlight',
      label: 'Headlight & Lighting',
      desc: 'Illumination Specs',
      values: {
        'voltera-mini-60': 'Bright LED Projector',
        'voltera-ct-80': 'LED Headlight + DRL',
        'voltera-smart-100': 'Optic Matrix LED + DRL',
        'voltera-prime-120': 'Triple Projector + Halo DRL',
        'voltera-shakti-150': 'Twin Sport LED Eagle Eye'
      }
    },
    {
      key: 'security',
      label: 'Security & Anti-Theft',
      desc: 'Theft Guard System',
      values: {
        'voltera-mini-60': 'Remote Alarm Guard',
        'voltera-ct-80': 'Central Remote Lock',
        'voltera-smart-100': 'Smart Keyless Siren & Lock',
        'voltera-prime-120': 'Vibration Remote Immobilizer',
        'voltera-shakti-150': 'Motion Sensing Siren & Lock'
      }
    },
    {
      key: 'comfort',
      label: 'Saddle & Suspension',
      desc: 'Ride Ergonomics',
      values: {
        'voltera-mini-60': 'High-Density Cushion',
        'voltera-ct-80': 'Plush Dual Seating',
        'voltera-smart-100': 'Contoured Wide Board',
        'voltera-prime-120': 'Luxury Leatherette Saddle',
        'voltera-shakti-150': 'Extra Wide Heavy-Duty'
      }
    },
    {
      key: 'bestFor',
      label: 'Recommended For',
      desc: 'Ideal User Profile',
      values: {
        'voltera-mini-60': 'Students & City Commuters',
        'voltera-ct-80': 'Office & Urban Professionals',
        'voltera-smart-100': 'Tech-Minded Families',
        'voltera-prime-120': 'Long Range & Highway Trips',
        'voltera-shakti-150': 'Heavy Duty & Rugged Terrains'
      }
    }
  ];

  return (
    <div className="font-['Montserrat',sans-serif] text-white pt-28 pb-20 bg-[#070907]">
      
      {/* 1. HERO HEADER */}
      <section className="py-14 bg-gradient-to-b from-[#0a140c] to-[#070907] border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#58C91A]/10 border border-[#58C91A]/30 text-[#58C91A] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            Comparison Matrix
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            COMPARE VOLTERA MODELS
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-devanagari max-w-2xl mx-auto">
            सभी 5 मॉडल्स की रेंज, फीचर्स और खूबियों की तुलना करें और अपनी जरूरत का सटीक मॉडल चुनें।
          </p>
        </div>
      </section>

      {/* 2. RESPONSIVE COMPARISON TABLE */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-xs text-gray-400 flex items-center justify-between">
            <span>← Scroll horizontally to view all models →</span>
            <span className="text-[#58C91A] font-bold">5 Available EV Models</span>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl bg-[#0b100c]">
            <table className="w-full text-left border-collapse min-w-[900px]">
              
              {/* Table Header: Models */}
              <thead>
                <tr className="border-b border-white/10 bg-[#0e1710]">
                  <th className="p-5 text-xs font-bold uppercase tracking-wider text-gray-400 w-52 sticky left-0 bg-[#0e1710] z-10 border-r border-white/10">
                    Feature / Model
                  </th>
                  {VOLTERA_MODELS.map((m) => (
                    <th key={m.id} className="p-5 text-center w-56 border-r border-white/5 last:border-r-0">
                      <div className="text-xs font-extrabold uppercase text-[#58C91A] bg-black/40 px-2 py-0.5 rounded-full inline-block mb-1">
                        {m.badge}
                      </div>
                      <div className="text-base font-black text-white">{m.name}</div>
                      <div className="text-xs font-black text-[#58C91A] mt-1">{m.range}</div>
                      
                      <div className="mt-3 flex flex-col gap-1.5">
                        <button
                          onClick={() => openModal('book-now', m.name)}
                          className="w-full py-1.5 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-[11px] rounded-lg transition-all cursor-pointer"
                        >
                          Book Now
                        </button>
                        <button
                          onClick={() => onNavigate('model-detail', m.slug)}
                          className="w-full py-1 bg-white/5 hover:bg-white/15 text-gray-300 text-[11px] rounded-lg border border-white/10 transition-colors"
                        >
                          View Details
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-white/5 text-xs">
                {comparisonRows.map((row) => (
                  <tr 
                    key={row.key} 
                    className={`hover:bg-white/5 transition-colors ${row.highlight ? 'bg-[#126B20]/15' : ''}`}
                  >
                    <td className="p-4 font-bold text-white sticky left-0 bg-[#0b100c] z-10 border-r border-white/10 shadow-md">
                      <div>{row.label}</div>
                      <div className="text-[10px] text-gray-400 font-normal">{row.desc}</div>
                    </td>

                    {VOLTERA_MODELS.map((m) => (
                      <td 
                        key={m.id} 
                        className={`p-4 text-center border-r border-white/5 last:border-r-0 ${
                          row.highlight ? 'font-black text-[#58C91A]' : 'text-gray-200'
                        }`}
                      >
                        {(row.values as any)[m.id]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs text-gray-300 space-y-1">
            <p><strong>Note:</strong> {TECH_SPEC_DISCLAIMER}</p>
            <p className="text-[11px] text-gray-400">{MODEL_DISCLAIMER}</p>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => openModal('test-ride')}
              className="px-8 py-3.5 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-xs uppercase tracking-wider rounded-full shadow-lg transition-all cursor-pointer"
            >
              BOOK FREE TEST RIDE FOR ANY MODEL
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
