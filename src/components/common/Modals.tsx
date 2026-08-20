import React, { useState } from 'react';
import { useLeads } from '../../context/LeadContext';
import { VOLTERA_MODELS } from '../../data/modelsData';
import { CONTACT_DETAILS } from '../../data/siteData';
import { 
  X, 
  Zap, 
  CheckCircle, 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Building2, 
  Sparkles,
  Send
} from 'lucide-react';

export const Modals: React.FC = () => {
  const { 
    activeModal, 
    closeModal, 
    selectedModelForModal, 
    addLead, 
    getWhatsAppUrl 
  } = useLeads();

  // Booking Modal Form State
  const [bookName, setBookName] = useState('');
  const [bookMobile, setBookMobile] = useState('');
  const [bookWhatsapp, setBookWhatsapp] = useState('');
  const [bookEmail, setBookEmail] = useState('');
  const [bookCity, setBookCity] = useState('Bhadohi');
  const [bookModel, setBookModel] = useState(selectedModelForModal || 'VoltEra PRIME 120');
  const [bookColor, setBookColor] = useState('Default Metallic');
  const [bookDate, setBookDate] = useState('');
  const [bookTime, setBookTime] = useState('11:00 AM');
  const [bookMessage, setBookMessage] = useState('');
  const [bookRedirectWhatsapp, setBookRedirectWhatsapp] = useState(true);

  // Test Ride Modal Form State
  const [rideName, setRideName] = useState('');
  const [rideMobile, setRideMobile] = useState('');
  const [rideCity, setRideCity] = useState('Gyanpur, Bhadohi');
  const [rideModel, setRideModel] = useState(selectedModelForModal || 'VoltEra PRIME 120');
  const [rideDate, setRideDate] = useState('');
  const [rideTime, setRideTime] = useState('03:00 PM');

  // Dealer Modal Form State
  const [dealerName, setDealerName] = useState('');
  const [dealerBusiness, setDealerBusiness] = useState('');
  const [dealerMobile, setDealerMobile] = useState('');
  const [dealerEmail, setDealerEmail] = useState('');
  const [dealerCity, setDealerCity] = useState('Bhadohi');
  const [dealerState, setDealerState] = useState('Uttar Pradesh');
  const [dealerExisting, setDealerExisting] = useState('');
  const [dealerMessage, setDealerMessage] = useState('');

  if (!activeModal) return null;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookName || !bookMobile) return;

    addLead({
      type: 'booking',
      fullName: bookName,
      mobile: bookMobile,
      whatsapp: bookWhatsapp || bookMobile,
      email: bookEmail,
      city: bookCity,
      modelInterest: bookModel,
      preferredColor: bookColor,
      preferredDate: bookDate,
      preferredTime: bookTime,
      message: bookMessage,
      status: 'New'
    });

    if (bookRedirectWhatsapp) {
      const waMsg = `Hello VoltEra E-Bike, I have submitted a booking request for *${bookModel}*.\nName: ${bookName}\nPhone: ${bookMobile}\nCity: ${bookCity}\nPreferred Date: ${bookDate || 'Earliest'}`;
      window.open(getWhatsAppUrl(waMsg), '_blank');
    }

    closeModal();
  };

  const handleTestRideSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rideName || !rideMobile) return;

    addLead({
      type: 'test-ride',
      fullName: rideName,
      mobile: rideMobile,
      whatsapp: rideMobile,
      city: rideCity,
      modelInterest: rideModel,
      preferredDate: rideDate,
      preferredTime: rideTime,
      status: 'New'
    });

    const waMsg = `Hello VoltEra E-Bike, I want to book a free test ride for *${rideModel}* at Gyanpur/Bhadohi.\nName: ${rideName}\nMobile: ${rideMobile}\nDate: ${rideDate || 'Tomorrow'} (${rideTime})`;
    window.open(getWhatsAppUrl(waMsg), '_blank');

    closeModal();
  };

  const handleDealerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dealerName || !dealerMobile) return;

    addLead({
      type: 'dealer',
      fullName: dealerName,
      businessName: dealerBusiness,
      mobile: dealerMobile,
      whatsapp: dealerMobile,
      email: dealerEmail,
      city: dealerCity,
      state: dealerState,
      existingBusiness: dealerExisting,
      message: dealerMessage,
      status: 'New'
    });

    const waMsg = `Hello VoltEra E-Bike, I am interested in applying for a *VoltEra Dealership* in ${dealerCity}, ${dealerState}.\nApplicant: ${dealerName}\nBusiness: ${dealerBusiness}\nPhone: ${dealerMobile}`;
    window.open(getWhatsAppUrl(waMsg), '_blank');

    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#0e1410] border border-[#58C91A]/40 rounded-3xl shadow-[0_0_50px_rgba(88,201,26,0.25)] overflow-hidden my-8 text-white font-['Montserrat',sans-serif] animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ----------------- POPUP 1: BOOK NOW ----------------- */}
        {activeModal === 'book-now' && (
          <div>
            <div className="bg-gradient-to-r from-[#126B20] to-[#07240c] p-6 border-b border-[#58C91A]/30">
              <div className="inline-flex items-center gap-1.5 bg-black/40 text-[#58C91A] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                <Zap className="w-3.5 h-3.5 fill-[#58C91A]" />
                Online Booking Request
              </div>
              <h2 className="text-2xl font-black text-white">
                Book Your VoltEra Today
              </h2>
              <p className="text-xs text-gray-200 font-devanagari mt-1">
                अपनी मनपसंद VoltEra बुक करें — हमारी टीम तुरंत आपसे संपर्क करेगी।
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="p-6 space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={bookMobile}
                    onChange={(e) => setBookMobile(e.target.value)}
                    className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">WhatsApp Number</label>
                  <input
                    type="tel"
                    placeholder="WhatsApp contact"
                    value={bookWhatsapp}
                    onChange={(e) => setBookWhatsapp(e.target.value)}
                    className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">City / Town *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gyanpur, Bhadohi"
                    value={bookCity}
                    onChange={(e) => setBookCity(e.target.value)}
                    className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Select Model *</label>
                  <select
                    value={bookModel}
                    onChange={(e) => setBookModel(e.target.value)}
                    className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                  >
                    {VOLTERA_MODELS.map((m) => (
                      <option key={m.id} value={m.name} className="bg-[#0e1410] text-white">
                        {m.name} ({m.range})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Preferred Colour</label>
                  <select
                    value={bookColor}
                    onChange={(e) => setBookColor(e.target.value)}
                    className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                  >
                    <option value="Metallic Crimson Red" className="bg-[#0e1410]">Metallic Crimson Red</option>
                    <option value="Electric Lime Green" className="bg-[#0e1410]">Electric Lime Green</option>
                    <option value="Shadow Obsidian Black" className="bg-[#0e1410]">Shadow Obsidian Black</option>
                    <option value="Pearl Polar White" className="bg-[#0e1410]">Pearl Polar White</option>
                    <option value="Solar Vibrant Orange" className="bg-[#0e1410]">Solar Vibrant Orange</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={bookDate}
                    onChange={(e) => setBookDate(e.target.value)}
                    className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Preferred Time</label>
                  <input
                    type="text"
                    placeholder="e.g. 11:00 AM"
                    value={bookTime}
                    onChange={(e) => setBookTime(e.target.value)}
                    className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Message / Notes</label>
                <textarea
                  rows={2}
                  placeholder="Ask about EMI, accessories, or delivery schedule..."
                  value={bookMessage}
                  onChange={(e) => setBookMessage(e.target.value)}
                  className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="wa-redirect-check"
                  checked={bookRedirectWhatsapp}
                  onChange={(e) => setBookRedirectWhatsapp(e.target.checked)}
                  className="rounded accent-[#58C91A]"
                />
                <label htmlFor="wa-redirect-check" className="text-gray-300 text-[11px] cursor-pointer">
                  Also open WhatsApp to connect directly with VoltEra sales desk
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-sm rounded-xl shadow-[0_0_20px_rgba(88,201,26,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-black" />
                <span>SUBMIT BOOKING REQUEST</span>
              </button>

              <p className="text-[11px] text-gray-400 text-center">
                * No advance payment required for initial enquiry. Our executive will guide you.
              </p>
            </form>
          </div>
        )}

        {/* ----------------- POPUP 2: TEST RIDE ----------------- */}
        {activeModal === 'test-ride' && (
          <div>
            <div className="bg-gradient-to-r from-[#126B20] to-[#07240c] p-6 border-b border-[#58C91A]/30">
              <div className="inline-flex items-center gap-1.5 bg-black/40 text-[#58C91A] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                100% Free Experience
              </div>
              <h2 className="text-2xl font-black text-white">
                Book a Free Test Ride
              </h2>
              <p className="text-xs text-gray-200 mt-1">
                Feel the future of electric mobility firsthand in Bhadohi.
              </p>
            </div>

            <form onSubmit={handleTestRideSubmit} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 font-semibold mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={rideName}
                  onChange={(e) => setRideName(e.target.value)}
                  className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit number"
                    value={rideMobile}
                    onChange={(e) => setRideMobile(e.target.value)}
                    className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">City / Area *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gyanpur, Suriyawan"
                    value={rideCity}
                    onChange={(e) => setRideCity(e.target.value)}
                    className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Select Model for Test Ride *</label>
                <select
                  value={rideModel}
                  onChange={(e) => setRideModel(e.target.value)}
                  className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                >
                  {VOLTERA_MODELS.map((m) => (
                    <option key={m.id} value={m.name} className="bg-[#0e1410] text-white">
                      {m.name} — Range: {m.range}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={rideDate}
                    onChange={(e) => setRideDate(e.target.value)}
                    className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Preferred Time Slot</label>
                  <select
                    value={rideTime}
                    onChange={(e) => setRideTime(e.target.value)}
                    className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                  >
                    <option value="10:00 AM" className="bg-[#0e1410]">10:00 AM – Morning</option>
                    <option value="12:30 PM" className="bg-[#0e1410]">12:30 PM – Noon</option>
                    <option value="03:30 PM" className="bg-[#0e1410]">03:30 PM – Afternoon</option>
                    <option value="05:30 PM" className="bg-[#0e1410]">05:30 PM – Evening</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-sm rounded-xl shadow-[0_0_20px_rgba(88,201,26,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-black" />
                <span>BOOK MY TEST RIDE</span>
              </button>

              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-gray-300 text-[11px] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#58C91A] shrink-0" />
                <span>Test Ride Location: Pali, Gyanpur, Bhadohi showroom or doorstep appointment.</span>
              </div>
            </form>
          </div>
        )}

        {/* ----------------- POPUP 3: WHATSAPP ----------------- */}
        {activeModal === 'whatsapp' && (
          <div className="p-6 space-y-6 text-center">
            <div className="w-16 h-16 bg-[#25D366]/20 border border-[#25D366]/40 rounded-full flex items-center justify-center mx-auto text-[#25D366]">
              <MessageSquare className="w-8 h-8 fill-[#25D366]" />
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">Talk to VoltEra</h2>
              <p className="text-xs text-gray-300 mt-1 max-w-sm mx-auto">
                Connect instantly with our executive on WhatsApp for fast pricing, EMI calculator, and test ride bookings.
              </p>
              <div className="mt-3 text-sm font-bold text-[#25D366]">
                WhatsApp: {CONTACT_DETAILS.whatsapp}
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <a
                href={getWhatsAppUrl(`Hello VoltEra E-Bike, I want to inquire about the ${selectedModelForModal}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-black rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>OPEN IN WHATSAPP NOW</span>
              </a>

              <a
                href={`tel:${CONTACT_DETAILS.phone}`}
                className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-[#58C91A]" />
                <span>Or Call: {CONTACT_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        )}

        {/* ----------------- POPUP 4: DEALERSHIP ----------------- */}
        {activeModal === 'dealer' && (
          <div>
            <div className="bg-gradient-to-r from-[#126B20] to-[#07240c] p-6 border-b border-[#58C91A]/30">
              <div className="inline-flex items-center gap-1.5 bg-black/40 text-[#58C91A] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                <Building2 className="w-3.5 h-3.5" />
                Business Opportunity
              </div>
              <h2 className="text-2xl font-black text-white">
                Become a VoltEra Dealer
              </h2>
              <p className="text-xs text-gray-200 mt-1">
                Join the electric mobility revolution in Uttar Pradesh & Purvanchal.
              </p>
            </div>

            <form onSubmit={handleDealerSubmit} className="p-6 space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={dealerName}
                    onChange={(e) => setDealerName(e.target.value)}
                    className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Business Name</label>
                  <input
                    type="text"
                    placeholder="Firm / Enterprises name"
                    value={dealerBusiness}
                    onChange={(e) => setDealerBusiness(e.target.value)}
                    className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile"
                    value={dealerMobile}
                    onChange={(e) => setDealerMobile(e.target.value)}
                    className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Email ID</label>
                  <input
                    type="email"
                    placeholder="Email address"
                    value={dealerEmail}
                    onChange={(e) => setDealerEmail(e.target.value)}
                    className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">City / District *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bhadohi, Mirzapur, Jaunpur"
                    value={dealerCity}
                    onChange={(e) => setDealerCity(e.target.value)}
                    className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">State *</label>
                  <input
                    type="text"
                    required
                    value={dealerState}
                    onChange={(e) => setDealerState(e.target.value)}
                    className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Existing Business / Showroom Space</label>
                <input
                  type="text"
                  placeholder="e.g. 1000 sq ft showroom on main road"
                  value={dealerExisting}
                  onChange={(e) => setDealerExisting(e.target.value)}
                  className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Message</label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your location and expansion plans..."
                  value={dealerMessage}
                  onChange={(e) => setDealerMessage(e.target.value)}
                  className="w-full bg-[#141d16] border border-white/10 focus:border-[#58C91A] rounded-xl px-3 py-2 text-white outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-sm rounded-xl shadow-[0_0_20px_rgba(88,201,26,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Building2 className="w-4 h-4" />
                <span>APPLY FOR DEALERSHIP</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
