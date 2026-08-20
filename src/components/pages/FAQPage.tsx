import React, { useState } from 'react';
import { PageId, FAQItem } from '../../types';
import { FAQ_DATA, CONTACT_DETAILS } from '../../data/siteData';
import { useLeads } from '../../context/LeadContext';
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  MessageSquare 
} from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: PageId, modelSlug?: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const { openModal, getWhatsAppUrl } = useLeads();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    'General',
    'Range & Models',
    'Booking & Ride',
    'Service & Battery',
    'Dealership & Finance'
  ];

  const filteredFaqs = selectedCategory === 'all'
    ? FAQ_DATA
    : FAQ_DATA.filter((f) => f.category === selectedCategory);

  return (
    <div className="font-['Montserrat',sans-serif] text-white pt-28 pb-20 bg-[#070907]">
      
      {/* 1. HERO HEADER */}
      <section className="py-14 bg-gradient-to-b from-[#0a140c] to-[#070907] border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#126B20]/40 border border-[#58C91A]/50 text-[#58C91A] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Knowledge Base & Answers
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-devanagari max-w-2xl mx-auto">
            VoltEra E-Bike, बैटरी, चार्जिंग और डीलरशिप से जुड़े आपके सभी सवालों के जवाब।
          </p>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-4 py-2 rounded-full font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#58C91A] text-black shadow-md'
                    : 'bg-white/5 text-gray-300 hover:bg-white/15'
                }`}
              >
                {cat === 'all' ? 'All Questions' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ACCORDION FAQ LIST */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.id || idx}
                className="bg-[#0e1610] border border-white/10 hover:border-[#58C91A]/40 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#58C91A] uppercase tracking-wider">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {faq.questionEnglish}
                    </h3>
                    <p className="text-xs text-gray-400 font-devanagari">
                      {faq.questionHindi}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#58C91A] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 border-t border-white/5 space-y-3 leading-relaxed animate-in fade-in">
                    <p className="whitespace-pre-line">{faq.answerEnglish}</p>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 font-devanagari text-gray-200 text-xs whitespace-pre-line">
                      {faq.answerHindi}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Still have questions CTA */}
          <div className="mt-12 bg-gradient-to-r from-[#126B20]/40 to-[#0b1b0e]/80 border border-[#58C91A]/30 rounded-3xl p-8 text-center space-y-4">
            <h3 className="text-xl font-bold text-white">Have More Questions?</h3>
            <p className="text-xs text-gray-300 max-w-md mx-auto">
              Our support team in Pali, Gyanpur is available to assist you with specs, on-road prices, and loan options.
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <a
                href={getWhatsAppUrl('Hello VoltEra, I have a few questions regarding your electric scooters.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-[#25D366] text-black font-black text-xs rounded-full inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-2.5 bg-white/10 text-white font-bold text-xs rounded-full"
              >
                Visit Contact Page
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
