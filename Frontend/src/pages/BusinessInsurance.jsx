import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const BusinessInsurance = () => {
  const navigate = useNavigate();
  const protections = [
    "Property damage and business interruption coverage",
    "Liability protection for third-party claims",
    "Employee benefits and workers compensation",
    "Cyber liability and data breach coverage",
    "Professional indemnity insurance"
  ];

  const handleGetQuote = () => {
   navigate("/contact")
  };

  const handleClick = () => {
    navigate("/not-found")
  };

  return (
    <>
    <Header/>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Shield Your <span className="text-purple-600">Business</span>
            </motion.h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Customized insurance solutions designed to protect your business from unexpected risks. 
              From small enterprises to large corporations, we provide comprehensive coverage 
              tailored to your specific industry needs.
            </p>
            
            <ul className="space-y-4 mb-8">
              {protections.map((protection, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <svg className="h-6 w-6 text-purple-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">{protection}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={handleGetQuote}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-all"
              >
                Get Business Quote
              </motion.button>
              <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-600 font-medium py-3 px-8 rounded-lg shadow-lg transition-all"
              >
                Speak to Advisor
              </motion.button>
            </div>
          </div>
          
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="hidden lg:block"
          >
            <img 
              src="/images/business-insurance.jpg" 
              alt="Business team meeting" 
              className="rounded-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">Business Insurance Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Property Insurance",
              desc: "Protect your physical assets and inventory",
              icon: "🏢"
            },
            {
              title: "Liability Coverage",
              desc: "Protection against third-party claims",
              icon: "⚖️"
            },
            {
              title: "Professional Indemnity",
              desc: "Coverage for professional service providers",
              icon: "👔"
            }
          ].map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="text-4xl mb-4">{plan.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
              <p className="text-gray-600">{plan.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
    </>
    
  );
};

export default BusinessInsurance;