import React, { useState } from 'react';
import { PageId } from '../../types';
import { DEALER_BENEFITS, CONTACT_DETAILS } from '../../data/siteData';
import { useLeads } from '../../context/LeadContext';
import { 
  Building2, 
  TrendingUp, 
  Award, 
  Users, 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  MessageSquare,
  ShieldCheck,
  Layers,
  Megaphone,
  Box
} from 'lucide-react';

interface DealershipPageProps {
  onNavigate: (page: PageId, modelSlug?: string) => void;
}

export const DealershipPage: React.FC<DealershipPageProps> = ({ onNavigate }) => {
  const { addLead, getWhatsAppUrl } = useLeads();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    state: 'Uttar Pradesh',
    businessName: '',
    investmentCapacity: '₹15 Lakhs – ₹25 Lakhs',
    showroomSpace: '1,000 – 2,000 Sq. Ft.',
    experience: 'Existing Automobile / 2-Wheeler Dealer',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.city) return;

    addLead({
      type: 'dealer',
      fullName: formData.name,
      mobile: formData.phone,
      whatsapp: formData.phone,
      email: formData.email,
      city: `${formData.city}, ${formData.state}`,
      businessName: formData.businessName,
      existingBusiness: formData.experience,
      message: `Investment: ${formData.investmentCapacity}, Space: ${formData.showroomSpace}, Notes: ${formData.message}`
    });

    setSubmitted(true);
  };

  const getDealerIcon = (icon: string) => {
    switch (icon) {
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Megaphone': return <Megaphone className="w-6 h-6" />;
      case 'Box': return <Box className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'Award': return <Award className="w-6 h-6" />;
      default: return <Building2 className="w-6 h-6" />;
    }
  };

  return (
    <div className="font-['Montserrat',sans-serif] text-white pt-28 pb-20 bg-[#070907]">
      
      {/* 1. HERO HEADER */}
      <section className="py-14 bg-gradient-to-b from-[#0a140c] to-[#070907] border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#126B20]/40 border border-[#58C91A]/50 text-[#58C91A] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            Dealership & Franchise Opportunity
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            BECOME AN AUTHORIZED VOLTERA DEALER
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-devanagari max-w-2xl mx-auto">
            उत्तर प्रदेश और पूर्वांचल के हर शहर में VoltEra E-Bike डीलरशिप नेटवर्क से जुड़ें।
          </p>
        </div>
      </section>

      {/* 2. WHY PARTNER WITH VOLTERA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Why Partner With VoltEra E-Bike?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              High margin business model, rapid vehicle supply, and end-to-end dealer enablement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEALER_BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-[#0e1610] hover:bg-[#122214] border border-white/10 hover:border-[#58C91A]/50 rounded-2xl p-6 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#126B20]/30 border border-[#58C91A]/40 flex items-center justify-center text-[#58C91A] mb-4 group-hover:scale-110 transition-transform">
                  {getDealerIcon(benefit.icon)}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* 3. APPLICATION FORM & DIRECT PHONE DESK */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
            
            {/* Form */}
            <div className="lg:col-span-8 bg-[#0d140e] border border-[#58C91A]/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 bg-[#126B20] text-[#58C91A] rounded-full flex items-center justify-center mx-auto border border-[#58C91A] shadow-lg">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Application Submitted!</h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Thank you <strong>{formData.name}</strong>! Our Head of Dealer Development will review your proposal for <strong>{formData.city}</strong> and call you on <strong>{formData.phone}</strong> within 24 hours.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <a
                      href={getWhatsAppUrl(`Hello VoltEra Business Team, I submitted a dealership application for ${formData.city}. Name: ${formData.name}, Contact: ${formData.phone}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-[#25D366] text-black font-black text-xs rounded-full inline-flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 fill-black" />
                      <span>Connect with Dealer Manager on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-4">
                    <h2 className="text-xl font-black text-white">Dealership Application Form</h2>
                    <p className="text-xs text-gray-400">Join our rapidly expanding EV dealer network.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Applicant / Owner Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
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
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Firm / Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Agarwal Motors"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Proposed City / Town *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Varanasi, Mirzapur, Jaunpur, Prayagraj"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Investment Capacity
                      </label>
                      <select
                        value={formData.investmentCapacity}
                        onChange={(e) => setFormData({ ...formData, investmentCapacity: e.target.value })}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      >
                        <option value="₹10 Lakhs – ₹15 Lakhs">₹10 Lakhs – ₹15 Lakhs</option>
                        <option value="₹15 Lakhs – ₹25 Lakhs">₹15 Lakhs – ₹25 Lakhs</option>
                        <option value="₹25 Lakhs – ₹50 Lakhs">₹25 Lakhs – ₹50 Lakhs</option>
                        <option value="₹50 Lakhs+">₹50 Lakhs+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Showroom / Workshop Space
                      </label>
                      <select
                        value={formData.showroomSpace}
                        onChange={(e) => setFormData({ ...formData, showroomSpace: e.target.value })}
                        className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                      >
                        <option value="500 – 1,000 Sq. Ft.">500 – 1,000 Sq. Ft.</option>
                        <option value="1,000 – 2,000 Sq. Ft.">1,000 – 2,000 Sq. Ft.</option>
                        <option value="2,000+ Sq. Ft.">2,000+ Sq. Ft.</option>
                        <option value="Planning to Rent / Lease">Planning to Rent / Lease</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                      Business Background & Prior Experience
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us briefly about your business background, existing dealerships, or market reach..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#152217] border border-white/15 focus:border-[#58C91A] rounded-xl p-3 text-xs text-white outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-xs uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(88,201,26,0.4)] transition-all cursor-pointer mt-4"
                  >
                    SUBMIT DEALERSHIP PROPOSAL
                  </button>
                </form>
              )}

            </div>

            {/* Direct Contact Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#0e1610] border border-[#58C91A]/30 rounded-3xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#126B20]/40 flex items-center justify-center text-[#58C91A]">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-white">Dealer Development Cell</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Want to discuss territories, ROI calculations, and inventory allocations directly?
                </p>
                <div className="p-3 bg-white/5 rounded-xl text-xs space-y-1.5 text-gray-300">
                  <p><strong>Direct Helpline:</strong> {CONTACT_DETAILS.phoneFormatted}</p>
                  <p><strong>WhatsApp Support:</strong> {CONTACT_DETAILS.whatsappFormatted}</p>
                  <p><strong>Address:</strong> Pali, Gyanpur, Bhadohi – 221304, Uttar Pradesh</p>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs text-gray-300 space-y-1">
                <div className="flex items-center gap-1.5 text-[#58C91A] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Exclusive Territory Guarantee:</span>
                </div>
                <p>VoltEra awards exclusive town territories to authorized dealers to ensure healthy profit margins.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
