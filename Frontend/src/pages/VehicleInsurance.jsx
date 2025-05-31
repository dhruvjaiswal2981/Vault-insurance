import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const VehicleInsurance = () => {
  const navigate = useNavigate()
  const coverages = [
    "Own damage and third party liability coverage",
    "24/7 roadside assistance",
    "Zero depreciation cover available",
    "Engine protection and NCB protection",
    "Personal accident cover for owner-driver"
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
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 md:p-12 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Protect Your <span className="text-orange-600">Vehicle</span>
            </motion.h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Comprehensive and third-party insurance plans for all types of vehicles. 
              Get instant policy issuance, cashless repairs at network garages, and 
              hassle-free claim settlement. Drive with confidence knowing you're protected.
            </p>
            
            <ul className="space-y-4 mb-8">
              {coverages.map((coverage, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <svg className="h-6 w-6 text-orange-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">{coverage}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={handleGetQuote}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-all"
              >
                Get Instant Quote
              </motion.button>
              <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-orange-600 text-orange-600 font-medium py-3 px-8 rounded-lg shadow-lg transition-all"
              >
                Renew Policy
              </motion.button>
            </div>
          </div>
          
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="hidden lg:block"
          >
            <img 
              src="/gif/vehicle-insurance.gif" 
              alt="Car being serviced" 
              className="rounded-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">Vehicle Insurance Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Comprehensive",
              desc: "Complete coverage for your vehicle",
              icon: "🛡️"
            },
            {
              title: "Third Party",
              desc: "Basic liability coverage",
              icon: "📝"
            },
            {
              title: "Zero Depreciation",
              desc: "Full claim without depreciation deduction",
              icon: "💰"
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

export default VehicleInsurance;