import React, { useState } from 'react';
import { PageId } from '../../types';
import { VOLTERA_MODELS } from '../../data/modelsData';
import { CONTACT_DETAILS } from '../../data/siteData';
import { useLeads } from '../../context/LeadContext';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  MessageSquare 
} from 'lucide-react';

interface TestRidePageProps {
  onNavigate: (page: PageId, modelSlug?: string) => void;
}

export const TestRidePage: React.FC<TestRidePageProps> = ({ onNavigate }) => {
  const { addLead, getWhatsAppUrl } = useLeads();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Bhadohi',
    model: VOLTERA_MODELS[3].name, // PRIME 120
    preferredDate: '',
    preferredTime: 'Morning (10 AM - 1 PM)',
    locationType: 'Showroom Visit'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    addLead({
      type: 'test-ride',
      fullName: formData.name,
      mobile: formData.phone,
      whatsapp: formData.phone,
      city: formData.city,
      modelInterest: formData.model,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      message: `Location Preference: ${formData.locationType}`
    });

    setSubmitted(true);
  };

  return (
    <div className="font-['Montserrat',sans-serif] text-white pt-28 pb-20 bg-[#070907]">
      
      {/* 1. HERO HEADER */}
      <section className="py-14 bg-gradient-to-b from-[#0a140c] to-[#070907] border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#126B20]/40 border border-[#58C91A]/50 text-[#58C91A] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-devanagari">भदोही का अपना EV Brand</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            BOOK A FREE TEST RIDE
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-devanagari max-w-2xl mx-auto">
            बिना किसी झिझक के चलाकर देखें अपनी पसंदीदा VoltEra E-Bike।
          </p>
        </div>
      </section>

      {/* 2. FORM & SHOWROOM DETAILS SPLIT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Test Ride Booking Form */}
            <div className="lg:col-span-7 bg-[#0d140e] border border-[#58C91A]/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 bg-[#126B20] text-[#58C91A] rounded-full flex items-center justify-center mx-auto border border-[#58C91A] shadow-lg">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Test Ride Booked Successfully!</h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>! Our Gyanpur representative will call you on <strong>{formData.phone}</strong> to confirm your slot for the <strong>{formData.model}</strong>.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <a
                      href={getWhatsAppUrl(`Hello VoltEra, I just booked a Test Ride for ${formData.model}. Name: ${formData.name}, Phone: ${formData.phone}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-[#25D366] text-black font-black text-xs rounded-full inline-flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 fill-black" />
                      <span>Confirm via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-white/10 text-white font-bold text-xs rounded-full"
                    >
                      Book Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-4">
                    <h2 className="text-xl font-black text-white">Schedule Your Test Ride</h2>
                    <p className="text-xs text-gray-400">Fill in your details below and our team will get in touch.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Select Model *
                      </label>
                      <select
                        value={formData.model}
                        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
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
                        City / Area in UP *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Gyanpur / Bhadohi / Gopiganj"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      >
                        <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                        <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                        <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                      Test Ride Location Preference
                    </label>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <label className="flex items-center gap-2 bg-[#152217] p-2.5 rounded-xl border border-white/10 cursor-pointer">
                        <input
                          type="radio"
                          name="locationType"
                          checked={formData.locationType === 'Showroom Visit'}
                          onChange={() => setFormData({ ...formData, locationType: 'Showroom Visit' })}
                          className="accent-[#58C91A]"
                        />
                        <span>Visit Gyanpur Hub</span>
                      </label>
                      <label className="flex items-center gap-2 bg-[#152217] p-2.5 rounded-xl border border-white/10 cursor-pointer">
                        <input
                          type="radio"
                          name="locationType"
                          checked={formData.locationType === 'Doorstep Request'}
                          onChange={() => setFormData({ ...formData, locationType: 'Doorstep Request' })}
                          className="accent-[#58C91A]"
                        />
                        <span>Doorstep in Bhadohi</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-xs uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(88,201,26,0.4)] transition-all cursor-pointer mt-4"
                  >
                    CONFIRM FREE TEST RIDE BOOKING
                  </button>
                </form>
              )}

            </div>

            {/* Right: Showroom & Experience Highlights */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#0e1610] border border-white/10 rounded-3xl p-6 space-y-4">
                <h3 className="text-lg font-black text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#58C91A]" />
                  <span>Showroom & Experience Hub</span>
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Visit our flagship facility to test-ride all 5 models side-by-side on real road conditions:
                </p>
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs space-y-2 text-gray-300">
                  <p><strong>Address:</strong> {CONTACT_DETAILS.address}</p>
                  <p><strong>Helpline:</strong> {CONTACT_DETAILS.phoneFormatted}</p>
                  <p><strong>Timing:</strong> Monday – Sunday (9:30 AM to 7:30 PM)</p>
                </div>
              </div>

              <div className="bg-[#0e1610] border border-white/10 rounded-3xl p-6 space-y-3">
                <h3 className="text-base font-bold text-white">What To Bring For Test Ride:</h3>
                <ul className="text-xs text-gray-300 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#58C91A] shrink-0" />
                    <span>Valid Two-Wheeler Driving License or Photo ID</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#58C91A] shrink-0" />
                    <span>Safety Helmet (Provided on site if needed)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#58C91A] shrink-0" />
                    <span>15 Minutes of your valuable time!</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
