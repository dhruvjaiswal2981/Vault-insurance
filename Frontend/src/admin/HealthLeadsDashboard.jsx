import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getHealthInsuranceLeads } from '../api/healthApi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HealthLeadsPage = () => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLead, setSelectedLead] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const fetchLeads = async () => {
      setIsLoading(true);
      try {
        const data = await getHealthInsuranceLeads();
        setLeads(data);
        setFilteredLeads(data);
      } catch (err) {
        console.error('Error fetching health leads:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchLeads();
  }, []);

  useEffect(() => {
    let results = [...leads];
    
    // Apply search filter
    if (searchTerm) {
      results = results.filter(lead =>
        (lead.policy_type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
         lead.insurer?.toLowerCase().includes(searchTerm.toLowerCase()) ||
         lead.existing_disease?.toLowerCase().includes(searchTerm.toLowerCase()) ||
         lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
         lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
         lead.phone?.includes(searchTerm) ||
         lead.pincode?.includes(searchTerm))
      );
    }
    
    // Apply date filter
    if (startDate && endDate) {
      results = results.filter(lead => {
        const leadDate = new Date(lead.created_at);
        return leadDate >= startDate && leadDate <= endDate;
      });
    }
    
    // Apply status filter
    if (statusFilter !== 'all') {
      results = results.filter(lead => lead.claim_status === statusFilter);
    }

    setFilteredLeads(results);
  }, [leads, searchTerm, startDate, endDate, statusFilter]);

  const openLeadDetails = (lead) => {
    setSelectedLead(lead);
  };

  const closeLeadDetails = () => {
    setSelectedLead(null);
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get status color based on claim status
  const getStatusColor = (status) => {
    return status === 'yes' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setDateRange([null, null]);
    setStatusFilter('all');
    setFilteredLeads(leads);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50 p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Health Insurance Leads
            </h1>
            <p className="text-gray-500 mt-1">Manage and review all health insurance inquiries</p>
          </div>
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600">
              Showing <span className="text-blue-600 font-bold">{filteredLeads.length}</span> of{' '}
              <span className="text-blue-600 font-bold">{leads.length}</span> leads
            </span>
          </div>
        </div>
        
        {/* Filter Controls */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-100"
          whileHover={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, email, phone, insurer..."
                  className="w-full p-3 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            
            {/* Date Range Picker */}
            <div>
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => setDateRange(update)}
                placeholderText="Select date range"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                isClearable={true}
              />
            </div>
            
            {/* Status Filter */}
            <div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white"
              >
                <option value="all">All Statuses</option>
                <option value="yes">Claimed</option>
                <option value="no">No Claim</option>
              </select>
            </div>
          </div>
          
          {/* Filter Actions */}
          <div className="flex justify-end mt-4">
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset Filters
            </button>
          </div>
        </motion.div>
        
        {/* Leads Table */}
        <motion.div 
          className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {isLoading ? (
            <div className="p-8 flex justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {['Name', 'Contact', 'Policy Type', 'Family', 'Tenure', 'Status', 'Date', 'Actions'].map((header) => (
                        <th 
                          key={header}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    <AnimatePresence>
                      {filteredLeads.length > 0 ? (
                        filteredLeads.map((lead) => (
                          <motion.tr
                            key={lead._id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">
                                {lead.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {lead.email}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {lead.phone}
                              </div>
                              {lead.pincode && (
                                <div className="text-xs text-gray-500">
                                  Pincode: {lead.pincode}
                                </div>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900 capitalize">
                                {lead.policy_type}
                              </div>
                              {lead.insurer && (
                                <div className="text-xs text-gray-500">
                                  {lead.insurer}
                                </div>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex space-x-1 overflow-hidden mr-3">
                                  {[...Array(lead.adults || 0)].map((_, i) => (
                                    <div key={`adult-${i}`} className="inline-block h-6 w-6 rounded-full bg-blue-500 text-center pt-1 text-white text-xs">
                                      A
                                    </div>
                                  ))}
                                  {[...Array(lead.children || 0)].map((_, i) => (
                                    <div key={`child-${i}`} className="inline-block h-6 w-6 rounded-full bg-purple-500 text-center pt-1 text-white text-xs">
                                      C
                                    </div>
                                  ))}
                                </div>
                                <div>
                                  <span className="text-sm text-gray-500">
                                    {lead.adults + lead.children} members
                                  </span>
                                  {lead.eldest_age && (
                                    <div className="text-xs text-gray-500">
                                      Eldest: {lead.eldest_age}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {lead.tenure} year{lead.tenure !== 1 ? 's' : ''}
                              </div>
                              {lead.existing_disease && (
                                <div className="text-xs text-gray-500 capitalize">
                                  {lead.existing_disease}
                                </div>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lead.claim_status)}`}>
                                {lead.claim_status === 'yes' ? 'Claimed' : lead.claim_status === 'no' ? 'No Claim' : 'Not Specified'}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {formatDate(lead.created_at)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                onClick={() => openLeadDetails(lead)}
                                className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                              >
                                View
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </button>
                            </td>
                          </motion.tr>
                        ))
                      ) : (
                        <motion.tr
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <td colSpan="8" className="px-6 py-8 text-center">
                            <div className="text-gray-400 flex flex-col items-center">
                              <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <p className="text-lg font-medium">No leads found</p>
                              <p className="text-sm">Try adjusting your filters</p>
                            </div>
                          </td>
                        </motion.tr>
                      )}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>

      {/* Lead Detail Modal */}
      <AnimatePresence>
        {selectedLead && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeLeadDetails}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {selectedLead.name}'s Policy Details
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Submitted on {formatDate(selectedLead.created_at)}
                    </p>
                  </div>
                  <button
                    onClick={closeLeadDetails}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <h3 className="text-sm font-medium text-blue-800 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Contact Information
                      </h3>
                      <div className="mt-2 space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Name:</span>
                          <span className="text-sm font-medium text-gray-900">{selectedLead.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Email:</span>
                          <span className="text-sm font-medium text-gray-900">{selectedLead.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Phone:</span>
                          <span className="text-sm font-medium text-gray-900">{selectedLead.phone}</span>
                        </div>
                        {selectedLead.pincode && (
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Pincode:</span>
                            <span className="text-sm font-medium text-gray-900">{selectedLead.pincode}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                      <h3 className="text-sm font-medium text-purple-800 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Policy Information
                      </h3>
                      <div className="mt-2 space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Type:</span>
                          <span className="text-sm font-medium text-gray-900 capitalize">{selectedLead.policy_type}</span>
                        </div>
                        {selectedLead.insurer && (
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Insurer:</span>
                            <span className="text-sm font-medium text-gray-900 capitalize">{selectedLead.insurer}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Tenure:</span>
                          <span className="text-sm font-medium text-gray-900">{selectedLead.tenure} year{selectedLead.tenure !== 1 ? 's' : ''}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Status:</span>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(selectedLead.claim_status)}`}>
                            {selectedLead.claim_status === 'yes' ? 'Claimed' : selectedLead.claim_status === 'no' ? 'No Claim' : 'Not Specified'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <h3 className="text-sm font-medium text-green-800 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Family Coverage
                      </h3>
                      <div className="mt-2 space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Adults:</span>
                          <span className="text-sm font-medium text-gray-900">{selectedLead.adults || 0}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Children:</span>
                          <span className="text-sm font-medium text-gray-900">{selectedLead.children || 0}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Total Members:</span>
                          <span className="text-sm font-medium text-gray-900">{(selectedLead.adults || 0) + (selectedLead.children || 0)}</span>
                        </div>
                        {selectedLead.eldest_age && (
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Eldest Age:</span>
                            <span className="text-sm font-medium text-gray-900">{selectedLead.eldest_age}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                      <h3 className="text-sm font-medium text-yellow-800 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        Health Information
                      </h3>
                      <div className="mt-2 space-y-3">
                        {selectedLead.existing_disease ? (
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Existing Condition:</span>
                            <span className="text-sm font-medium text-gray-900 capitalize">{selectedLead.existing_disease}</span>
                          </div>
                        ) : (
                          <div className="text-sm text-gray-500">No existing conditions reported</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={closeLeadDetails}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HealthLeadsPage;