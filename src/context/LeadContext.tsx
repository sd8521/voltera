import React, { createContext, useContext, useEffect, useState } from 'react';
import { Lead, LeadStatus, LeadType } from '../types';

interface LeadContextType {
  leads: Lead[];
  addLead: (leadData: Omit<Lead, 'id' | 'createdAt' | 'status'> & { status?: LeadStatus }) => Lead;
  updateLeadStatus: (id: string, status: LeadStatus) => void;
  deleteLead: (id: string) => void;
  clearAllLeads: () => void;
  getWhatsAppUrl: (message?: string) => string;
  generateModelWhatsAppUrl: (modelName: string, action?: string) => string;
  activeModal: 'book-now' | 'test-ride' | 'whatsapp' | 'dealer' | 'crm' | null;
  openModal: (modal: 'book-now' | 'test-ride' | 'whatsapp' | 'dealer' | 'crm', defaultModel?: string) => void;
  closeModal: () => void;
  selectedModelForModal: string;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const STORAGE_KEY = 'voltera_leads_v1';

const INITIAL_DEMO_LEADS: Lead[] = [
  {
    id: 'lead-1',
    type: 'booking',
    fullName: 'Rajesh Kumar Maurya',
    mobile: '9839123456',
    whatsapp: '9839123456',
    email: 'rajesh.maurya@gmail.com',
    city: 'Gyanpur, Bhadohi',
    modelInterest: 'VoltEra PRIME 120',
    preferredColor: 'Royal Onyx Black',
    preferredDate: '2026-08-25',
    preferredTime: '11:00 AM',
    message: 'Interested in financing options and home delivery in Gyanpur.',
    status: 'Test Ride Scheduled',
    createdAt: '2026-08-18T10:15:00Z'
  },
  {
    id: 'lead-2',
    type: 'test-ride',
    fullName: 'Amitabh Singh',
    mobile: '9450876543',
    whatsapp: '9450876543',
    city: 'Suriyawan, Bhadohi',
    modelInterest: 'VoltEra CT 80',
    preferredDate: '2026-08-22',
    preferredTime: '04:30 PM',
    message: 'Want to test the disc brake performance on market road.',
    status: 'Contacted',
    createdAt: '2026-08-19T08:30:00Z'
  },
  {
    id: 'lead-3',
    type: 'dealer',
    fullName: 'Dinesh Chandra Bind',
    businessName: 'Bind Automobile & Energy Solutions',
    mobile: '8874112233',
    whatsapp: '8874112233',
    email: 'dinesh.bind@yahoo.com',
    city: 'Aurai, Bhadohi',
    state: 'Uttar Pradesh',
    existingBusiness: 'Two-Wheeler Sales & Service Showroom',
    message: 'We have 1500 sq ft main road showroom in Aurai highway for exclusive dealership.',
    status: 'Interested',
    createdAt: '2026-08-17T14:45:00Z'
  },
  {
    id: 'lead-4',
    type: 'service',
    fullName: 'Sunil Jaiswal',
    mobile: '7800998877',
    city: 'Bhadohi City',
    modelInterest: 'VoltEra SMART 100',
    serviceType: '1st Free Routine Checkup & Brake Tuning',
    vehicleNumber: 'UP 66 AB 4590',
    preferredDate: '2026-08-21',
    preferredTime: '10:00 AM',
    status: 'New',
    createdAt: '2026-08-19T06:00:00Z'
  }
];

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export const LeadProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [leads, setLeads] = useState<Lead[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_DEMO_LEADS;
  });

  const [activeModal, setActiveModal] = useState<'book-now' | 'test-ride' | 'whatsapp' | 'dealer' | 'crm' | null>(null);
  const [selectedModelForModal, setSelectedModelForModal] = useState<string>('VoltEra PRIME 120');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    } catch {
      // ignore
    }
  }, [leads]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const openModal = (modal: 'book-now' | 'test-ride' | 'whatsapp' | 'dealer' | 'crm', defaultModel?: string) => {
    if (defaultModel) {
      setSelectedModelForModal(defaultModel);
    }
    setActiveModal(modal);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const addLead = (leadData: Omit<Lead, 'id' | 'createdAt' | 'status'> & { status?: LeadStatus }): Lead => {
    const newLead: Lead = {
      ...leadData,
      id: 'lead-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
      status: leadData.status || 'New',
      createdAt: new Date().toISOString()
    };
    setLeads((prev) => [newLead, ...prev]);
    showToast('Enquiry successfully submitted! VoltEra team will contact you shortly.');
    return newLead;
  };

  const updateLeadStatus = (id: string, status: LeadStatus) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, status } : lead))
    );
    showToast(`Lead status updated to "${status}"`);
  };

  const deleteLead = (id: string) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
    showToast('Lead record removed.');
  };

  const clearAllLeads = () => {
    setLeads([]);
    showToast('All leads cleared from local storage.');
  };

  const getWhatsAppUrl = (message = 'Hello VoltEra E-Bike, I want to know more about your electric scooters.') => {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/917905353484?text=${encoded}`;
  };

  const generateModelWhatsAppUrl = (modelName: string, action = 'know more details & pricing for') => {
    const message = `Hello VoltEra E-Bike (Bhadohi), I would like to ${action} ${modelName}. Please share catalogue and test ride info.`;
    return getWhatsAppUrl(message);
  };

  return (
    <LeadContext.Provider
      value={{
        leads,
        addLead,
        updateLeadStatus,
        deleteLead,
        clearAllLeads,
        getWhatsAppUrl,
        generateModelWhatsAppUrl,
        activeModal,
        openModal,
        closeModal,
        selectedModelForModal,
        toastMessage,
        showToast
      }}
    >
      {children}
    </LeadContext.Provider>
  );
};

export const useLeads = (): LeadContextType => {
  const context = useContext(LeadContext);
  if (!context) {
    throw new Error('useLeads must be used within a LeadProvider');
  }
  return context;
};
