import React, { useState } from 'react';
import { PageId } from '../../types';
import { VOLTERA_MODELS } from '../../data/modelsData';
import { CONTACT_DETAILS } from '../../data/siteData';
import { useLeads } from '../../context/LeadContext';
import { ScooterGraphic } from '../common/ScooterGraphic';
import { 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard, 
  MessageSquare, 
  Phone 
} from 'lucide-react';

interface BookingPageProps {
  onNavigate: (page: PageId, modelSlug?: string) => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({ onNavigate }) => {
  const { addLead, getWhatsAppUrl } = useLeads();
  const [submitted, setSubmitted] = useState(false);
  const [selectedModel, setSelectedModel] = useState(VOLTERA_MODELS[3]); // PRIME 120
  const [selectedColor, setSelectedColor] = useState(selectedModel.colors[0]?.name || 'Electric Green');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: 'Bhadohi',
    financeOption: 'Cash / Full Payment',
    exchangeInterest: false
  });

  const handleModelChange = (modelName: string) => {
    const found = VOLTERA_MODELS.find((m) => m.name === modelName) || VOLTERA_MODELS[0];
    setSelectedModel(found);
    setSelectedColor(found.colors[0]?.name || '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    addLead({
      type: 'booking',
      fullName: formData.name,
      mobile: formData.phone,
      whatsapp: formData.phone,
      email: formData.email,
      city: formData.city,
      modelInterest: selectedModel.name,
      preferredColor: selectedColor,
      message: `Finance: ${formData.financeOption}, Address: ${formData.address}, Exchange: ${formData.exchangeInterest ? 'Yes' : 'No'}`
    });

    setSubmitted(true);
  };

  return (
    <div className="font-['Montserrat',sans-serif] text-white pt-28 pb-20 bg-[#070907]">
      
      {/* 1. HERO HEADER */}
      <section className="py-14 bg-gradient-to-b from-[#0a140c] to-[#070907] border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#58C91A]/10 border border-[#58C91A]/30 text-[#58C91A] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 fill-[#58C91A]" />
            Official Booking Desk
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            BOOK YOUR VOLTERA E-BIKE
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-devanagari max-w-2xl mx-auto">
            आज ही बुक करें और पाएं प्राथमिकता डिलीवरी, आकर्षक फाइनेंस और समर्पित स्थानीय सपोर्ट।
          </p>
        </div>
      </section>

      {/* 2. BOOKING FORM & SUMMARY */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Form */}
            <div className="lg:col-span-7 bg-[#0d140e] border border-[#58C91A]/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 bg-[#126B20] text-[#58C91A] rounded-full flex items-center justify-center mx-auto border border-[#58C91A] shadow-lg">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Booking Enquiry Received!</h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Congratulations <strong>{formData.name}</strong>! Your booking preference for <strong>{selectedModel.name} ({selectedColor})</strong> has been registered with priority token ID. Our sales desk in Gyanpur will reach out on <strong>{formData.phone}</strong>.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <a
                      href={getWhatsAppUrl(`Hello VoltEra Sales Desk, I submitted a booking request for ${selectedModel.name} in ${selectedColor}. Name: ${formData.name}, Phone: ${formData.phone}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-[#25D366] text-black font-black text-xs rounded-full inline-flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 fill-black" />
                      <span>Chat with Sales on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-4">
                    <h2 className="text-xl font-black text-white">Select Vehicle & Enter Details</h2>
                    <p className="text-xs text-gray-400">Zero cancellation charges on pre-booking inquiry.</p>
                  </div>

                  {/* Model & Color */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Select Model *
                      </label>
                      <select
                        value={selectedModel.name}
                        onChange={(e) => handleModelChange(e.target.value)}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      >
                        {VOLTERA_MODELS.map((m) => (
                          <option key={m.id} value={m.name}>
                            {m.name} ({m.range})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Select Colour *
                      </label>
                      <select
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      >
                        {selectedModel.colors.map((c, i) => (
                          <option key={i} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      />
                    </div>
                  </div>

                  {/* City & Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        City / District *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Gyanpur, Bhadohi, Mirzapur, Prayagraj, Varanasi"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Payment / Financing Preference
                      </label>
                      <select
                        value={formData.financeOption}
                        onChange={(e) => setFormData({ ...formData, financeOption: e.target.value })}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      >
                        <option value="Cash / Direct Payment">Cash / Direct Full Payment</option>
                        <option value="Low Down Payment EMI">Low Down Payment EMI Assistance</option>
                        <option value="Bank Loan Financing">Bank Loan Financing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                      Delivery Address / Village (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Enter village, post office or landmark"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl p-3 text-xs text-white outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-300 pt-1">
                    <input
                      type="checkbox"
                      id="exchange"
                      checked={formData.exchangeInterest}
                      onChange={(e) => setFormData({ ...formData, exchangeInterest: e.target.checked })}
                      className="accent-[#58C91A] w-4 h-4"
                    />
                    <label htmlFor="exchange" className="cursor-pointer">
                      I am interested in exchanging an old two-wheeler.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-xs uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(88,201,26,0.4)] transition-all cursor-pointer mt-4"
                  >
                    SUBMIT BOOKING ENQUIRY
                  </button>
                </form>
              )}

            </div>

            {/* Right: Selected Model Preview */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#0e1610] border border-[#58C91A]/30 rounded-3xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#58C91A] uppercase tracking-wider">Selected Model Preview</span>
                  <span className="text-xs font-black text-white bg-white/10 px-2.5 py-0.5 rounded-full">{selectedModel.range}</span>
                </div>

                <h3 className="text-2xl font-black text-white">{selectedModel.name}</h3>

                <ScooterGraphic
                  colorHex={selectedModel.colors.find(c => c.name === selectedColor)?.hex || selectedModel.colors[0].hex}
                  modelName={selectedModel.name}
                  className="w-full py-2"
                />

                <div className="space-y-2 border-t border-white/10 pt-3 text-xs text-gray-300">
                  <div className="flex justify-between">
                    <span>Chosen Colour:</span>
                    <span className="font-bold text-white">{selectedColor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Range Estimate:</span>
                    <span className="font-bold text-[#58C91A]">{selectedModel.range}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Location:</span>
                    <span className="font-bold text-white">Gyanpur Hub / Bhadohi</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0e1610] border border-white/10 rounded-2xl p-4 text-xs text-gray-300 flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#58C91A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">VoltEra Booking Guarantee:</strong><br />
                  Our sales advisors will verify battery choices, subsidy guidance, and color availability before any financial transaction is processed.
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
