import React, { useEffect, useState } from 'react';
import { PageId } from '../../types';
import { VOLTERA_MODELS } from '../../data/modelsData';
import { CONTACT_DETAILS } from '../../data/siteData';
import { useLeads } from '../../context/LeadContext';
import { 
  Zap, 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Database
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, modelSlug?: string) => void;
  selectedModelSlug?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, selectedModelSlug }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modelsDropdownOpen, setModelsDropdownOpen] = useState(false);
  const { openModal, getWhatsAppUrl, leads } = useLeads();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home' as PageId, label: 'Home' },
    { id: 'about' as PageId, label: 'About Us' },
    { 
      id: 'models' as PageId, 
      label: 'Our Models',
      hasDropdown: true 
    },
    { id: 'features' as PageId, label: 'Features' },
    { id: 'battery' as PageId, label: 'Battery & Charging' },
    { id: 'compare' as PageId, label: 'Compare' },
    { id: 'dealership' as PageId, label: 'Dealership' },
    { id: 'service' as PageId, label: 'Service' },
    { id: 'gallery' as PageId, label: 'Gallery' },
    { id: 'faq' as PageId, label: 'FAQ' },
    { id: 'contact' as PageId, label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-['Montserrat',sans-serif]">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-[#0d160e] via-[#126B20] to-[#0a120b] border-b border-[#58C91A]/30 text-[#F4F6F5] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="inline-flex items-center justify-center bg-[#58C91A] text-black w-4 h-4 rounded-full text-[10px] font-black">
              ⚡
            </span>
            <span className="font-semibold text-[#58C91A]">VoltEra E-BIKE:</span>
            <span>Ride the Future, Ride Safe</span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline font-devanagari text-white/90">भदोही का अपना EV Brand</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a 
              href={`tel:${CONTACT_DETAILS.phone}`} 
              className="flex items-center gap-1 text-white/90 hover:text-[#58C91A] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#58C91A]" />
              <span className="font-semibold">{CONTACT_DETAILS.phone}</span>
            </a>
            <span className="text-white/30">•</span>
            <button
              onClick={() => openModal('test-ride')}
              className="text-[#58C91A] hover:underline font-bold flex items-center gap-1 cursor-pointer"
            >
              Book Test Ride Today <ArrowRight className="w-3 h-3" />
            </button>
            <span className="text-white/30 hidden lg:inline">•</span>
            <button
              onClick={() => onNavigate('crm')}
              className="hidden lg:flex items-center gap-1 bg-white/10 hover:bg-[#58C91A]/20 px-2 py-0.5 rounded text-[10px] text-white/80 transition-colors border border-white/10"
              title="Dealer Lead Portal"
            >
              <Database className="w-2.5 h-2.5 text-[#58C91A]" />
              <span>Leads ({leads.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#070907]/95 backdrop-blur-md py-2.5 shadow-2xl border-b border-[#58C91A]/20' 
            : 'bg-[#070907]/80 backdrop-blur-sm py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* LOGO */}
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
            id="brand-logo-btn"
          >
            {/* Logo Icon */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#126B20] to-[#070907] border border-[#58C91A]/60 shadow-[0_0_15px_rgba(88,201,26,0.3)] group-hover:shadow-[0_0_25px_rgba(88,201,26,0.6)] transition-all">
              <Zap className="w-6 h-6 text-[#58C91A] fill-[#58C91A] transform group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#E00000] rounded-full border border-black animate-ping" />
            </div>

            {/* Logo Typography */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-white">
                  VOLT<span className="text-[#58C91A]">ERA</span>
                </span>
                <span className="text-[11px] font-extrabold bg-[#126B20] text-white px-1.5 py-0.5 rounded tracking-wider uppercase">
                  E-BIKE
                </span>
              </div>
              <span className="text-[10px] font-medium text-gray-400 tracking-wider flex items-center gap-1">
                <span className="text-[#58C91A]">●</span> भदोही का अपना EV Brand
              </span>
            </div>
          </div>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id && (!link.hasDropdown || !selectedModelSlug);

              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.id}
                    className="relative group"
                    onMouseEnter={() => setModelsDropdownOpen(true)}
                    onMouseLeave={() => setModelsDropdownOpen(false)}
                  >
                    <button
                      onClick={() => onNavigate('models')}
                      className={`flex items-center gap-1 px-3 py-2 text-[13px] font-semibold tracking-wide transition-all rounded-lg cursor-pointer ${
                        currentPage === 'models' || currentPage === 'model-detail'
                          ? 'text-[#58C91A] bg-[#58C91A]/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    {modelsDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-[#0c100d] border border-[#58C91A]/30 rounded-xl shadow-2xl p-3 grid gap-2 backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2 py-1 border-b border-white/5 flex items-center justify-between">
                          <span>5 VoltEra Models</span>
                          <span className="text-[#58C91A]">60 to 90 KM* Range</span>
                        </div>
                        {VOLTERA_MODELS.map((model) => (
                          <button
                            key={model.id}
                            onClick={() => {
                              onNavigate('model-detail', model.slug);
                              setModelsDropdownOpen(false);
                            }}
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 text-left transition-colors group/item cursor-pointer"
                          >
                            <div>
                              <div className="text-xs font-bold text-white group-hover/item:text-[#58C91A]">
                                {model.name}
                              </div>
                              <div className="text-[11px] text-gray-400 font-devanagari line-clamp-1">
                                {model.hindiTagline}
                              </div>
                            </div>
                            <span className="text-[11px] font-black text-[#58C91A] bg-[#126B20]/40 px-2 py-0.5 rounded border border-[#58C91A]/30">
                              {model.range}
                            </span>
                          </button>
                        ))}
                        <div className="pt-1 border-t border-white/10 flex justify-between items-center px-1">
                          <button
                            onClick={() => {
                              onNavigate('compare');
                              setModelsDropdownOpen(false);
                            }}
                            className="text-[11px] text-gray-300 hover:text-[#58C91A] font-semibold"
                          >
                            Compare All 5 Models →
                          </button>
                          <button
                            onClick={() => {
                              onNavigate('models');
                              setModelsDropdownOpen(false);
                            }}
                            className="text-[11px] text-[#58C91A] hover:underline font-bold"
                          >
                            View All →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`px-3 py-2 text-[13px] font-semibold tracking-wide transition-all rounded-lg cursor-pointer ${
                    isActive 
                      ? 'text-[#58C91A] bg-[#58C91A]/10' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* DESKTOP CTA BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => openModal('test-ride')}
              className="px-4 py-2 text-xs font-bold text-white hover:text-[#58C91A] bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#58C91A]/40 rounded-full transition-all cursor-pointer"
              id="header-test-ride-btn"
            >
              BOOK TEST RIDE
            </button>

            <button
              onClick={() => openModal('book-now')}
              className="relative group px-5 py-2 text-xs font-black tracking-wider text-black bg-[#58C91A] hover:bg-[#68e025] rounded-full shadow-[0_0_20px_rgba(88,201,26,0.4)] hover:shadow-[0_0_30px_rgba(88,201,26,0.7)] transition-all cursor-pointer flex items-center gap-1.5"
              id="header-book-now-btn"
            >
              <Zap className="w-3.5 h-3.5 fill-black text-black" />
              <span>BOOK NOW</span>
            </button>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => openModal('book-now')}
              className="px-3 py-1.5 text-xs font-black text-black bg-[#58C91A] rounded-full flex items-center gap-1"
            >
              <Zap className="w-3 h-3 fill-black text-black" />
              <span>BOOK</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-200 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0d0a] border-b border-[#58C91A]/30 max-h-[80vh] overflow-y-auto p-4 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#58C91A] fill-[#58C91A]" />
              <span className="font-bold text-white text-sm">VoltEra Menu</span>
            </div>
            <span className="text-[11px] text-[#58C91A] font-bold bg-[#126B20]/30 px-2 py-0.5 rounded">
              भदोही का अपना EV Brand
            </span>
          </div>

          {/* Mobile Links */}
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2.5 rounded-lg text-xs font-semibold ${
                  currentPage === link.id
                    ? 'bg-[#58C91A] text-black font-bold'
                    : 'bg-white/5 text-gray-200 hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* 5 Models Quick Selector */}
          <div className="pt-2 border-t border-white/10">
            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
              Explore 5 Models
            </div>
            <div className="space-y-1.5">
              {VOLTERA_MODELS.map((model) => (
                <button
                  key={model.id}
                  onClick={() => {
                    onNavigate('model-detail', model.slug);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-left"
                >
                  <span className="text-xs font-bold text-white">{model.name}</span>
                  <span className="text-[11px] font-extrabold text-[#58C91A]">{model.range}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile CTAs & Contacts */}
          <div className="pt-3 border-t border-white/10 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  openModal('book-now');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 bg-[#58C91A] text-black font-black text-xs rounded-lg text-center"
              >
                BOOK NOW
              </button>
              <button
                onClick={() => {
                  openModal('test-ride');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 bg-white/10 border border-[#58C91A]/40 text-white font-bold text-xs rounded-lg text-center"
              >
                BOOK TEST RIDE
              </button>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 bg-[#25D366] text-white font-bold text-xs rounded-lg flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`tel:${CONTACT_DETAILS.phone}`}
                className="flex-1 py-2 bg-white/10 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#58C91A]" />
                <span>Call: {CONTACT_DETAILS.phone}</span>
              </a>
            </div>

            <button
              onClick={() => {
                onNavigate('crm');
                setMobileMenuOpen(false);
              }}
              className="w-full py-1.5 text-center text-[11px] text-gray-400 hover:text-white flex items-center justify-center gap-1"
            >
              <Database className="w-3 h-3 text-[#58C91A]" />
              <span>Dealer Lead Management Portal ({leads.length})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
