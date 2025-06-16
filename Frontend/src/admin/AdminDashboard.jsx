import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const AdminDashboard = () => {
  const [activityData, setActivityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    contacts: 0,
    healthLeads: 0,
    businessQuotes: 0
  });

  useEffect(() => {
    const fetchRecentActivity = async () => {
    try {
          setLoading(true);
          
          // Fetch data from all endpoints
          const [contactsRes, businessRes, healthRes] = await Promise.all([
            axios.get('https://vault-insurance.onrender.com/api/contact'),
            axios.get('https://vault-insurance.onrender.com/api/business-quotes'),
            axios.get('https://vault-insurance.onrender.com/api/health-insurance-leads')
          ]);

          // Set stats
          setStats({
            contacts: contactsRes.data.length,
            healthLeads: healthRes.data.length,
            businessQuotes: businessRes.data.length
          });

          // Helper function to format date properly
          const formatDate = (dateString) => {
            try {
              const date = new Date(dateString);
              return isNaN(date.getTime()) 
                ? 'Recently' 
                : date.toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  });
            } catch {
              return 'Recently';
            }
          };

          // Process data for recent activity feed
          const contactsActivity = contactsRes.data.slice(0, 3).map(item => ({
            id: item._id,
            action: "New contact form submission",
            time: formatDate(item.createdAt || item.created_at || new Date()),
            user: `${item.firstName || ''} ${item.lastName || ''}`.trim() || 'Anonymous',
            type: 'contact'
          }));

          const businessActivity = businessRes.data.slice(0, 3).map(item => ({
            id: item._id,
            action: "New business quote submitted",
            time: formatDate(item.createdAt || item.created_at || new Date()),
            user: item.business_name || item.name || 'Anonymous Business',
            type: 'business'
          }));

          const healthActivity = healthRes.data.slice(0, 3).map(item => ({
            id: item._id,
            action: "New health insurance lead",
            time: formatDate(item.createdAt || item.created_at || new Date()),
            user: item.fullName || 'Anonymous',
            type: 'health'
          }));

          // Combine and sort by time
          const allActivity = [...contactsActivity, ...businessActivity, ...healthActivity]
            .sort((a, b) => {
              const dateA = new Date(a.time);
              const dateB = new Date(b.time);
              return isNaN(dateB.getTime()) ? -1 : isNaN(dateA.getTime()) ? 1 : dateB - dateA;
            })
            .slice(0, 5);

          setActivityData(allActivity);
        } catch (error) {
          console.error('Error fetching activity data:', error);
        } finally {
          setLoading(false);
        }
  };


    fetchRecentActivity();
    
    // Refresh data every 30 seconds
    const interval = setInterval(fetchRecentActivity, 30000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      title: "Contacts Dashboard",
      description: "Manage all customer inquiries and messages",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: "/admin/contacts",
      color: "bg-blue-100 text-blue-600",
      count: stats.contacts
    },
    {
      title: "Health Leads",
      description: "View and manage health insurance inquiries",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      link: "/admin/health-leads",
      color: "bg-green-100 text-green-600",
      count: stats.healthLeads
    },
    {
      title: "Business Quotes",
      description: "Manage business insurance quotes and applications",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      link: "/admin/business-quotes",
      color: "bg-purple-100 text-purple-600",
      count: stats.businessQuotes
    }
  ];

  const getActivityIcon = (type) => {
    switch(type) {
      case 'contact':
        return (
          <div className="bg-blue-100 p-2 rounded-lg mr-3">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        );
      case 'health':
        return (
          <div className="bg-green-100 p-2 rounded-lg mr-3">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        );
      case 'business':
        return (
          <div className="bg-purple-100 p-2 rounded-lg mr-3">
            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="bg-gray-100 p-2 rounded-lg mr-3">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Vault Insurance Admin</h1>
            <p className="text-gray-500 mt-1">Secure management dashboard</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
            <div className="h-3 w-3 bg-green-400 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600">Live Data</span>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 flex items-center"
            >
              <div className={`${card.color.replace('text', 'bg')} p-3 rounded-lg mr-4`}>
                {card.icon}
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">{card.title}</h3>
                <p className="text-2xl font-bold text-gray-800">
                  {loading ? '...' : card.count.toLocaleString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <Link to={card.link}>
                <div className="p-6">
                  <div className={`${card.color} p-3 rounded-lg inline-block mb-4`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-gray-500 mb-4">{card.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>View Dashboard</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                  <div className="text-xs text-gray-500">
                    {loading ? 'Loading...' : `${card.count} records`}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-800">Recent Activity</h3>
              {loading && (
                <div className="text-sm text-gray-500">Updating...</div>
              )}
            </div>
          </div>
          {loading ? (
            <div className="p-8 flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {activityData.length > 0 ? (
                activityData.map((activity) => (
                  <div key={activity.id} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start">
                      {getActivityIcon(activity.type)}
                      <div>
                        <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          <span className="font-medium">{activity.user}</span> • {activity.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500">
                  No recent activity found
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;