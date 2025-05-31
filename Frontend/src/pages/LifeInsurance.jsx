import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const LifeInsurance = () => {
  const navigate = useNavigate();
  const benefits = [
    "Financial security for your family's future",
    "Tax benefits under Section 80C and 10(10D)",
    "Loan facility against policy",
    "Multiple payout options",
    "Critical illness coverage options"
  ];

  const handleGetQuote = () => {
   navigate("/contact")
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
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Secure Your Family's <span className="text-blue-600">Future</span>
            </motion.h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our life insurance plans provide comprehensive protection for your loved ones. 
              With flexible premium options and guaranteed returns, ensure your family's 
              financial stability no matter what life brings.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.button
              onClick={handleGetQuote}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-all"
            >
              Get a Free Quote
            </motion.button>
          </div>
          
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="hidden lg:block"
          >
            <img 
              src="/images/life-insurance.png" 
              alt="Family protected by life insurance" 
              className="rounded-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Term Insurance",
            desc: "Affordable pure protection plan with high coverage",
            icon: "⏳"
          },
          {
            title: "Whole Life Plan",
            desc: "Lifetime coverage with savings component",
            icon: "💎"
          },
          {
            title: "ULIPs",
            desc: "Combine insurance with investment opportunities",
            icon: "📈"
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
    </motion.div>
    </>
    
  );
};

export default LifeInsurance;