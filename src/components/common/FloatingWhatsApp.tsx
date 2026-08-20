import React, { useState } from 'react';
import { CONTACT_DETAILS } from '../../data/siteData';
import { useLeads } from '../../context/LeadContext';
import { MessageSquare, X, Send, Sparkles, PhoneCall } from 'lucide-react';

interface FloatingWhatsAppProps {
  currentModelName?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentModelName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');
  const { getWhatsAppUrl } = useLeads();

  const defaultMsg = currentModelName 
    ? `Hello VoltEra E-Bike, I am interested in the ${currentModelName}. Please share price, features, and test ride availability in Bhadohi.`
    : 'Hello VoltEra E-Bike, I want to know more about your electric scooters and test ride in Bhadohi.';

  const handleSend = () => {
    const msgToSend = customMsg.trim() || defaultMsg;
    window.open(getWhatsAppUrl(msgToSend), '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-['Montserrat',sans-serif]">
      {/* Expanded Quick Chat Box */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-[#0e1410] border border-[#58C91A]/40 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#126B20] to-[#0a3812] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/40">
                  <MessageSquare className="w-5 h-5 fill-white text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#58C91A] border-2 border-black rounded-full" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">VoltEra EV Support</h4>
                <p className="text-[11px] text-green-200">⚡ भदोही का अपना EV Brand (Online)</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#090d0a] space-y-3 text-xs">
            {/* Auto Message Bubble */}
            <div className="bg-white/10 border border-white/10 p-3 rounded-xl rounded-tl-none text-gray-200 space-y-1">
              <p className="font-semibold text-white">
                🙏 Namaste! Welcome to VoltEra E-BIKE.
              </p>
              <p className="text-gray-300">
                Ask anything regarding our 5 EV models, test rides, battery specifications, or dealership opportunities in Uttar Pradesh.
              </p>
              {currentModelName && (
                <div className="mt-1 inline-block bg-[#58C91A]/20 text-[#58C91A] font-bold text-[10px] px-2 py-0.5 rounded border border-[#58C91A]/40">
                  Browsing: {currentModelName}
                </div>
              )}
            </div>

            {/* Quick Prompt Suggestion Buttons */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                Quick Questions:
              </span>
              <div className="flex flex-col gap-1.5">
                {[
                  `Book free test ride for ${currentModelName || 'VoltEra PRIME 120'}`,
                  'What is the price & EMI scheme?',
                  'How to apply for VoltEra Dealership?'
                ].map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      window.open(getWhatsAppUrl(prompt), '_blank');
                      setIsOpen(false);
                    }}
                    className="text-left bg-white/5 hover:bg-[#58C91A]/20 hover:text-[#58C91A] text-gray-300 px-2.5 py-1.5 rounded-lg border border-white/5 text-[11px] transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span className="line-clamp-1">{prompt}</span>
                    <Send className="w-3 h-3 shrink-0 ml-1 text-[#58C91A]" />
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div className="pt-2">
              <div className="flex items-center gap-1.5 bg-[#141d15] border border-[#58C91A]/30 rounded-xl p-1.5">
                <input
                  type="text"
                  placeholder="Type message on WhatsApp..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  className="w-full bg-transparent px-2 py-1 text-xs text-white placeholder-gray-500 focus:outline-none"
                />
                <button
                  onClick={handleSend}
                  className="p-2 bg-[#25D366] hover:bg-[#20ba59] text-black font-bold rounded-lg transition-colors cursor-pointer"
                  title="Send to WhatsApp"
                >
                  <Send className="w-4 h-4 fill-black" />
                </button>
              </div>
            </div>

            {/* Direct Call Link */}
            <div className="pt-1 text-center border-t border-white/5">
              <a
                href={`tel:${CONTACT_DETAILS.phone}`}
                className="text-[11px] text-gray-400 hover:text-[#58C91A] flex items-center justify-center gap-1.5"
              >
                <PhoneCall className="w-3 h-3 text-[#58C91A]" />
                Prefer a phone call? Dial <span className="text-white font-bold">{CONTACT_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] transition-all cursor-pointer transform hover:scale-105"
        id="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        {/* Animated pulse halo */}
        <span className="absolute -inset-1 bg-[#25D366] rounded-full blur opacity-40 group-hover:opacity-75 animate-pulse" />

        <div className="relative flex items-center justify-center">
          <MessageSquare className="w-6 h-6 fill-white text-white" />
        </div>

        <div className="relative hidden sm:flex flex-col text-left">
          <span className="text-xs font-black tracking-wide leading-none text-black">
            WHATSAPP US
          </span>
          <span className="text-[9px] font-semibold text-black/80">
            {CONTACT_DETAILS.whatsapp}
          </span>
        </div>
      </button>
    </div>
  );
};
