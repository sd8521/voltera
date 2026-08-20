import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { LeadProvider } from './context/LeadContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { Modals } from './components/common/Modals';

// Pages
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ModelsPage } from './components/pages/ModelsPage';
import { ProductDetailPage } from './components/pages/ProductDetailPage';
import { FeaturesTechPage } from './components/pages/FeaturesTechPage';
import { BatteryChargingPage } from './components/pages/BatteryChargingPage';
import { WhyVolteraPage } from './components/pages/WhyVolteraPage';
import { CompareModelsPage } from './components/pages/CompareModelsPage';
import { TestRidePage } from './components/pages/TestRidePage';
import { BookingPage } from './components/pages/BookingPage';
import { DealershipPage } from './components/pages/DealershipPage';
import { ServicePage } from './components/pages/ServicePage';
import { GalleryPage } from './components/pages/GalleryPage';
import { FAQPage } from './components/pages/FAQPage';
import { ContactPage } from './components/pages/ContactPage';
import { LegalPages } from './components/pages/LegalPages';
import { LeadCRMView } from './components/pages/LeadCRMView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currentModelSlug, setCurrentModelSlug] = useState<string>('voltera-prime-120');

  const handleNavigate = (page: PageId, modelSlug?: string) => {
    if (modelSlug) {
      setCurrentModelSlug(modelSlug);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top on every page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'models':
        return <ModelsPage onNavigate={handleNavigate} />;
      case 'model-detail':
        return <ProductDetailPage modelSlug={currentModelSlug} onNavigate={handleNavigate} />;
      case 'features':
        return <FeaturesTechPage onNavigate={handleNavigate} />;
      case 'battery-charging':
        return <BatteryChargingPage onNavigate={handleNavigate} />;
      case 'why-voltera':
        return <WhyVolteraPage onNavigate={handleNavigate} />;
      case 'compare':
        return <CompareModelsPage onNavigate={handleNavigate} />;
      case 'test-ride':
        return <TestRidePage onNavigate={handleNavigate} />;
      case 'booking':
        return <BookingPage onNavigate={handleNavigate} />;
      case 'dealership':
        return <DealershipPage onNavigate={handleNavigate} />;
      case 'service':
        return <ServicePage onNavigate={handleNavigate} />;
      case 'gallery':
        return <GalleryPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'crm-leads':
        return <LeadCRMView onNavigate={handleNavigate} />;
      case 'privacy':
        return <LegalPages type="privacy" onNavigate={handleNavigate} />;
      case 'terms':
        return <LegalPages type="terms" onNavigate={handleNavigate} />;
      case 'disclaimer':
        return <LegalPages type="disclaimer" onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <LeadProvider>
      <div className="min-h-screen bg-[#070907] text-white flex flex-col selection:bg-[#58C91A] selection:text-black">
        {/* Sticky Header with Navigation and Announcement Bar */}
        <Header currentPage={currentPage} onNavigate={handleNavigate} />

        {/* Dynamic Page Content */}
        <main className="flex-grow">
          {renderCurrentPage()}
        </main>

        {/* Premium 4-Column Footer */}
        <Footer onNavigate={handleNavigate} />

        {/* Interactive Floating WhatsApp Widget */}
        <FloatingWhatsApp />

        {/* Lead Capture Popup Modals (Book Now, Test Ride, Dealership, WhatsApp) */}
        <Modals onNavigate={handleNavigate} />
      </div>
    </LeadProvider>
  );
}
