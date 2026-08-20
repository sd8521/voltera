import React, { useState } from 'react';
import { PageId, Lead, LeadStatus, LeadType } from '../../types';
import { useLeads } from '../../context/LeadContext';
import { 
  Users, 
  Search, 
  Download, 
  MessageSquare, 
  Phone, 
  Trash2, 
  Zap, 
  Building2, 
  Car, 
  Mail,
  Wrench,
  HelpCircle
} from 'lucide-react';

interface LeadCRMViewProps {
  onNavigate: (page: PageId) => void;
}

export const LeadCRMView: React.FC<LeadCRMViewProps> = ({ onNavigate }) => {
  const { leads, updateLeadStatus, deleteLead, getWhatsAppUrl } = useLeads();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = 
      (lead.fullName && lead.fullName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (lead.mobile && lead.mobile.includes(searchTerm)) ||
      (lead.city && lead.city.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (lead.modelInterest && lead.modelInterest.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    const matchesType = typeFilter === 'all' || lead.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const exportToCSV = () => {
    const headers = ['ID', 'Date', 'Type', 'Status', 'FullName', 'Mobile', 'Email', 'City', 'ModelInterest', 'Color', 'Message'];
    const rows = filteredLeads.map((l) => [
      l.id,
      new Date(l.createdAt).toLocaleString('en-IN'),
      l.type,
      l.status,
      `"${l.fullName || ''}"`,
      l.mobile || '',
      l.email || '',
      `"${l.city || ''}"`,
      `"${l.modelInterest || ''}"`,
      `"${l.preferredColor || ''}"`,
      `"${(l.message || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `VoltEra_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status: LeadStatus) => {
    switch (status) {
      case 'New':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/40">New Lead</span>;
      case 'Contacted':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/40">Contacted</span>;
      case 'Interested':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-400 border border-indigo-500/40">Interested</span>;
      case 'Test Ride Scheduled':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-500/20 text-purple-400 border border-purple-500/40">Ride Scheduled</span>;
      case 'Booking Pending':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-yellow-500/20 text-yellow-400 border border-yellow-500/40">Booking Pending</span>;
      case 'Booked':
      case 'Converted':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#126B20] text-[#58C91A] border border-[#58C91A]">Booked / Converted</span>;
      case 'Not Interested':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-gray-700 text-gray-400">Not Interested</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-[10px] bg-gray-700 text-gray-400">{status}</span>;
    }
  };

  const getTypeBadge = (type: LeadType) => {
    switch (type) {
      case 'booking':
        return <span className="flex items-center gap-1 text-[11px] font-bold text-[#58C91A]"><Zap className="w-3 h-3 fill-current" /> Booking</span>;
      case 'test-ride':
        return <span className="flex items-center gap-1 text-[11px] font-bold text-blue-400"><Car className="w-3 h-3" /> Test Ride</span>;
      case 'dealer':
        return <span className="flex items-center gap-1 text-[11px] font-bold text-amber-400"><Building2 className="w-3 h-3" /> Dealership</span>;
      case 'service':
        return <span className="flex items-center gap-1 text-[11px] font-bold text-cyan-400"><Wrench className="w-3 h-3" /> Service</span>;
      case 'contact':
        return <span className="flex items-center gap-1 text-[11px] font-bold text-gray-300"><Mail className="w-3 h-3" /> Inquiry</span>;
      default:
        return <span className="text-[11px] text-gray-300">{type}</span>;
    }
  };

  return (
    <div className="font-['Montserrat',sans-serif] text-white pt-28 pb-20 bg-[#070907]">
      
      {/* 1. HEADER */}
      <section className="py-10 bg-gradient-to-b from-[#0a140c] to-[#070907] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#58C91A]/10 border border-[#58C91A]/30 text-[#58C91A] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5" />
              Lead Management System (CRM)
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              VoltEra Customer & Dealership Enquiries
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Real-time pipeline of Test Rides, Bookings, WhatsApp chats, and Dealership franchise requests.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportToCSV}
              className="px-5 py-2.5 bg-[#58C91A] hover:bg-[#68e025] text-black font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. STATS OVERVIEW */}
      <section className="py-8 border-b border-white/10 bg-[#0a0f0b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-xs text-gray-400 font-semibold uppercase">Total Leads</div>
              <div className="text-2xl font-black text-white mt-1">{leads.length}</div>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 text-center">
              <div className="text-xs text-blue-300 font-semibold uppercase">Test Rides</div>
              <div className="text-2xl font-black text-blue-400 mt-1">
                {leads.filter(l => l.type === 'test-ride').length}
              </div>
            </div>
            <div className="bg-[#126B20]/20 border border-[#58C91A]/30 rounded-2xl p-4 text-center">
              <div className="text-xs text-green-300 font-semibold uppercase">Bookings</div>
              <div className="text-2xl font-black text-[#58C91A] mt-1">
                {leads.filter(l => l.type === 'booking').length}
              </div>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 text-center">
              <div className="text-xs text-amber-300 font-semibold uppercase">Dealerships</div>
              <div className="text-2xl font-black text-amber-400 mt-1">
                {leads.filter(l => l.type === 'dealer').length}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FILTERS & SEARCH */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#0e1610] border border-white/10 p-4 rounded-2xl">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search name, phone, city, model..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#152217] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white outline-none focus:border-[#58C91A]"
              />
            </div>

            {/* Dropdowns */}
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="bg-[#152217] border border-white/10 rounded-xl px-3 py-2 text-xs text-gray-200 outline-none"
              >
                <option value="all">All Inquiry Types</option>
                <option value="booking">Bookings</option>
                <option value="test-ride">Test Rides</option>
                <option value="dealer">Dealerships</option>
                <option value="service">Service</option>
                <option value="contact">Contacts</option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-[#152217] border border-white/10 rounded-xl px-3 py-2 text-xs text-gray-200 outline-none"
              >
                <option value="all">All Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Interested">Interested</option>
                <option value="Test Ride Scheduled">Test Ride Scheduled</option>
                <option value="Booking Pending">Booking Pending</option>
                <option value="Booked">Booked</option>
                <option value="Converted">Converted</option>
                <option value="Not Interested">Not Interested</option>
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* 4. LEADS TABLE */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl bg-[#0b100c]">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              
              <thead>
                <tr className="border-b border-white/10 bg-[#0e1710] text-xs font-bold uppercase tracking-wider text-gray-400">
                  <th className="p-4">Date & Time</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Customer Name & Contact</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Vehicle / Details</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5 text-xs">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-gray-400">
                      No matching leads found. Test the booking or test ride forms on the website to generate new inquiries!
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                      
                      {/* Date */}
                      <td className="p-4 text-gray-400 font-mono text-[11px] whitespace-nowrap">
                        {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })}<br />
                        <span className="text-[10px] text-gray-400">
                          {new Date(lead.createdAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </td>

                      {/* Type */}
                      <td className="p-4 whitespace-nowrap">
                        {getTypeBadge(lead.type)}
                      </td>

                      {/* Customer Info */}
                      <td className="p-4">
                        <div className="font-bold text-white text-sm">{lead.fullName}</div>
                        <div className="text-gray-300 font-mono text-xs mt-0.5">{lead.mobile}</div>
                        {lead.email && <div className="text-gray-400 text-[11px]">{lead.email}</div>}
                      </td>

                      {/* Location */}
                      <td className="p-4 text-gray-300">
                        {lead.city || 'Bhadohi, UP'}
                      </td>

                      {/* Vehicle / Details */}
                      <td className="p-4 max-w-xs">
                        {lead.modelInterest && (
                          <div className="font-bold text-[#58C91A]">
                            {lead.modelInterest} {lead.preferredColor ? `(${lead.preferredColor})` : ''}
                          </div>
                        )}
                        {lead.preferredDate && (
                          <div className="text-gray-300 text-[11px]">
                            📅 {lead.preferredDate} ({lead.preferredTime || 'Any Time'})
                          </div>
                        )}
                        {lead.businessName && (
                          <div className="text-amber-400 text-[11px]">
                            🏢 {lead.businessName} ({lead.existingBusiness})
                          </div>
                        )}
                        {lead.serviceType && (
                          <div className="text-cyan-400 text-[11px]">
                            🔧 {lead.serviceType} (Veh: {lead.vehicleNumber || 'N/A'})
                          </div>
                        )}
                        {lead.message && (
                          <div className="text-gray-400 text-[11px] italic truncate" title={lead.message}>
                            {lead.message}
                          </div>
                        )}
                      </td>

                      {/* Status */}
                      <td className="p-4">
                        <div className="space-y-1.5">
                          {getStatusBadge(lead.status)}
                          <select
                            value={lead.status}
                            onChange={(e) => updateLeadStatus(lead.id, e.target.value as LeadStatus)}
                            className="block w-full bg-[#152217] border border-white/10 rounded-lg p-1 text-[11px] text-gray-200 outline-none"
                          >
                            <option value="New">Mark as New</option>
                            <option value="Contacted">Mark as Contacted</option>
                            <option value="Interested">Mark as Interested</option>
                            <option value="Test Ride Scheduled">Ride Scheduled</option>
                            <option value="Booking Pending">Booking Pending</option>
                            <option value="Booked">Booked</option>
                            <option value="Converted">Converted</option>
                            <option value="Not Interested">Not Interested</option>
                          </select>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          
                          {/* Direct WhatsApp Callout */}
                          <a
                            href={getWhatsAppUrl(`Hello ${lead.fullName}, regarding your ${lead.type} inquiry with VoltEra E-Bike in ${lead.city || 'Bhadohi'}:`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-black rounded-lg transition-colors"
                            title="Open WhatsApp Chat"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </a>

                          {/* Direct Phone Call */}
                          <a
                            href={`tel:${lead.mobile}`}
                            className="p-2 bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white rounded-lg transition-colors"
                            title="Call Lead"
                          >
                            <Phone className="w-4 h-4" />
                          </a>

                          {/* Delete Lead */}
                          <button
                            onClick={() => deleteLead(lead.id)}
                            className="p-2 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>

                        </div>
                      </td>

                    </tr>
                  ))
                )}
              </tbody>

            </table>
          </div>

        </div>
      </section>

    </div>
  );
};
