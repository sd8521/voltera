import React, { useState } from 'react';
import { PageId } from '../../types';
import { CONTACT_DETAILS } from '../../data/siteData';
import { useLeads } from '../../context/LeadContext';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId, modelSlug?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { addLead, getWhatsAppUrl } = useLeads();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Bhadohi',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    addLead({
      type: 'contact',
      fullName: formData.name,
      mobile: formData.phone,
      email: formData.email,
      city: formData.city,
      message: `Subject: ${formData.subject}, Message: ${formData.message}`
    });

    setSubmitted(true);
  };

  return (
    <div className="font-['Montserrat',sans-serif] text-white pt-28 pb-20 bg-[#070907]">
      
      {/* 1. HERO HEADER */}
      <section className="py-14 bg-gradient-to-b from-[#0a140c] to-[#070907] border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#126B20]/40 border border-[#58C91A]/50 text-[#58C91A] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span className="font-devanagari">भदोही का अपना EV Brand</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            CONTACT VOLTERA E-BIKE
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-devanagari max-w-2xl mx-auto">
            हमसे सीधे संपर्क करें या पाली, ज्ञानपुर स्थित हमारे शोरूम में पधारें।
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Info & Map Card */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#0e1610] border border-[#58C91A]/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
                <div>
                  <h3 className="text-xl font-black text-white">Showroom & Corporate Office</h3>
                  <p className="text-xs text-[#58C91A] font-bold font-devanagari mt-0.5">
                    VoltEra E-Bike Experience Center
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#58C91A] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Official Address:</strong>
                      {CONTACT_DETAILS.address}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#58C91A] shrink-0" />
                    <div>
                      <strong className="text-white block">Helpline Phone:</strong>
                      <a href={`tel:${CONTACT_DETAILS.phone}`} className="hover:text-[#58C91A] font-bold">
                        {CONTACT_DETAILS.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-[#25D366] shrink-0" />
                    <div>
                      <strong className="text-white block">WhatsApp Business:</strong>
                      <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] font-bold">
                        {CONTACT_DETAILS.whatsappFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#58C91A] shrink-0" />
                    <div>
                      <strong className="text-white block">Email:</strong>
                      <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-[#58C91A]">
                        {CONTACT_DETAILS.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#58C91A] shrink-0" />
                    <div>
                      <strong className="text-white block">Working Hours:</strong>
                      <span>{CONTACT_DETAILS.workingHours}</span>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Callout Button */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl('Hello VoltEra, I would like to get in touch regarding your electric scooters.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#25D366] text-black font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-black" />
                    <span>START INSTANT WHATSAPP CHAT</span>
                  </a>
                </div>
              </div>

              {/* Map embed / locator visual */}
              <div className="bg-[#0e1610] border border-white/10 rounded-2xl p-4 text-xs text-gray-400 text-center">
                <div className="font-bold text-white mb-1">📍 Located at Pali, Gyanpur, Bhadohi</div>
                <span>Easily accessible from Bhadohi railway station & Gyanpur main road market.</span>
              </div>

            </div>

            {/* Right: Message Form */}
            <div className="lg:col-span-7 bg-[#0d140e] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 bg-[#126B20] text-[#58C91A] rounded-full flex items-center justify-center mx-auto border border-[#58C91A] shadow-lg">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Message Sent Successfully!</h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>! Our support team in Gyanpur will review your note and respond to <strong>{formData.phone}</strong> shortly.
                  </p>
                  <div className="pt-4 flex justify-center">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-white/10 text-white font-bold text-xs rounded-full"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-4">
                    <h2 className="text-xl font-black text-white">Send Us An Inquiry</h2>
                    <p className="text-xs text-gray-400">Have a query about models, dealership, or technical service? Leave a note.</p>
                  </div>

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
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      >
                        <option value="Vehicle Purchase & Price">Vehicle Purchase & Price</option>
                        <option value="Test Ride Booking">Test Ride Booking</option>
                        <option value="Dealership / Franchise">Dealership / Franchise Opportunity</option>
                        <option value="Service & Spare Parts">Service & Spare Parts</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your question or request..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl p-3 text-xs text-white outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-xs uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(88,201,26,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2 mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
