import React from 'react';
import { PageId } from '../../types';
import { MODEL_DISCLAIMER, TECH_SPEC_DISCLAIMER } from '../../data/modelsData';
import { CONTACT_DETAILS } from '../../data/siteData';

interface LegalPagesProps {
  type: 'privacy' | 'terms' | 'disclaimer';
  onNavigate: (page: PageId) => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ type, onNavigate }) => {
  return (
    <div className="font-['Montserrat',sans-serif] text-white pt-28 pb-20 bg-[#070907]">
      
      <section className="py-14 bg-gradient-to-b from-[#0a140c] to-[#070907] border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            {type === 'privacy' && 'Privacy Policy'}
            {type === 'terms' && 'Terms & Conditions'}
            {type === 'disclaimer' && 'Legal & Mileage Disclaimer'}
          </h1>
          <p className="text-xs sm:text-sm text-gray-400">
            VOLTera E-BIKE • Pali, Gyanpur, Bhadohi – 221304, Uttar Pradesh
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-xs sm:text-sm text-gray-300 space-y-6 leading-relaxed bg-[#0e1610] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-xl">
          
          {type === 'privacy' && (
            <>
              <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
              <p>
                When you submit an inquiry, book a test ride, or apply for a dealership with VoltEra E-Bike, we collect personal information such as your name, mobile phone number, email address, city, and preferred vehicle model.
              </p>

              <h2 className="text-lg font-bold text-white">2. How We Use Your Data</h2>
              <p>
                We use your contact details solely to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Schedule and confirm your requested test rides.</li>
                <li>Provide price quotes, financing options, and vehicle availability.</li>
                <li>Process dealership and franchise evaluation discussions.</li>
                <li>Send critical maintenance and product updates.</li>
              </ul>

              <h2 className="text-lg font-bold text-white">3. Data Protection & Non-Sharing</h2>
              <p>
                We do not sell, rent, or trade your personal information to third-party telemarketers. Information is stored securely for dealer communication and customer support at our Gyanpur office.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <h2 className="text-lg font-bold text-white">1. Vehicle Bookings & Inquiries</h2>
              <p>
                Submitting a test ride or booking form on this website expresses your intent to purchase or test-ride a VoltEra electric scooter. Final invoices, registration, and warranty terms are completed at authorized dealerships.
              </p>

              <h2 className="text-lg font-bold text-white">2. Test Ride Guidelines</h2>
              <p>
                To undertake a physical test ride of any VoltEra model (MINI 60, CT 80, SMART 100, PRIME 120, SHAKTI 150), the rider must possess a valid driving license, adhere to traffic regulations, and wear a safety helmet.
              </p>

              <h2 className="text-lg font-bold text-white">3. Dealership Agreements</h2>
              <p>
                Submission of a dealership application does not constitute a binding franchise grant until mutual vetting, background checks, and official dealership agreements are executed.
              </p>
            </>
          )}

          {type === 'disclaimer' && (
            <>
              <h2 className="text-lg font-bold text-white">1. Range & Mileage Disclaimer</h2>
              <div className="p-4 bg-[#122214] border border-[#58C91A]/40 rounded-xl text-gray-200">
                <strong>*Certified Range Note:</strong> {MODEL_DISCLAIMER}
              </div>

              <h2 className="text-lg font-bold text-white">2. Technical Specifications</h2>
              <p>
                {TECH_SPEC_DISCLAIMER} Product features, color shades, and visual styling are subject to continuous engineering enhancements.
              </p>

              <h2 className="text-lg font-bold text-white">3. Local Brand Identity</h2>
              <p>
                VoltEra E-Bike operates from Pali, Gyanpur, Bhadohi – 221304 (UP). All claims and brand references reflect our actual registered facility and authorized dealer guidelines.
              </p>
            </>
          )}

          <div className="pt-6 border-t border-white/10 text-center">
            <button
              onClick={() => onNavigate('home')}
              className="px-6 py-2.5 bg-[#58C91A] text-black font-black text-xs rounded-full uppercase cursor-pointer"
            >
              Back To Homepage
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
