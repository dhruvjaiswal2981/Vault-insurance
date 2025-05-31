import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with email: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#b641ff66] to-[#46b7ff66] py-20 rounded-[30px] mx-4 md:mx-5 mb-3 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Quick Links */}
          <div className="space-y-6">
            <img 
              src="/images/Vault Insurance-02.png" 
              alt="Vault Insurance Logo" 
              className="h-8 w-auto"
            />
            
            <div>
              <h3 className="text-lg font-bold text-[#2d313d] mb-4">Quick links</h3>
              <ul className="space-y-3">
                <li><a href="/" className="text-[#2d313d] hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="/vehicle-insurance" className="text-[#2d313d] hover:text-blue-600 transition-colors">Vehicle Insurance</a></li>
                <li><a href="/health-insurance" className="text-[#2d313d] hover:text-blue-600 transition-colors">Health Insurance</a></li>
                <li><a href="/life-insurance" className="text-[#2d313d] hover:text-blue-600 transition-colors">Life Insurance</a></li>
                <li><a href="/not-found" className="text-[#2d313d] hover:text-blue-600 transition-colors">Enterprise Solutions</a></li>
                <li><a href="/not-found" className="text-[#2d313d] hover:text-blue-600 transition-colors">Claims</a></li>
                <li><a href="/not-found" className="text-[#2d313d] hover:text-blue-600 transition-colors">Resources</a></li>
              </ul>
            </div>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-lg font-bold text-[#2d313d] mb-4">business</h3>
            <ul className="space-y-3">
              <li><a href="/not-found" className="text-[#2d313d] hover:text-blue-600 transition-colors">educational</a></li>
              <li><a href="/not-found" className="text-[#2d313d] hover:text-blue-600 transition-colors">construction</a></li>
              <li><a href="/vehicle-insurance" className="text-[#2d313d] hover:text-blue-600 transition-colors">vehicle</a></li>
              <li><a href="/business-insurance" className="text-[#2d313d] hover:text-blue-600 transition-colors">other</a></li>
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h3 className="text-lg font-bold text-[#2d313d] mb-4">careers</h3>
            <ul className="space-y-3">
              <li><a href="/not-found" className="text-[#2d313d] hover:text-blue-600 transition-colors">explore careers @vault</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-[#2d313d] mb-4">vault newsletter</h3>
            <p className="text-[#2d313d] mb-6 leading-8">
              Subscribe to our newsletter to get the latest updates on everything on vault
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="mb-8">
              <div className="flex border border-[#2d323d] rounded-lg overflow-hidden">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter email ID"
                  className="flex-1 px-4 py-3 text-[#2d313d] bg-transparent outline-none"
                  required
                />
                <button type="submit" className="p-3 m-1 rounded-[10px] hover:bg-[#B741FF] transition-colors bg-[#13161D]">
                  <img src="/images/gmail.svg" alt="Submit" className="w-6 h-6" />
                </button>
              </div>
            </form>

            <div>
              <h4 className="text-lg font-bold text-[#2d313d] mb-4">Find us at</h4>
              <address className="text-[#2d313d] not-italic leading-6">
                38, 1ST MAIN KAVERI LAYOUT, DODDABETTAHALLI,<br />
                YELAHANKA NEW TOWN, BANGALORE - 560097<br /><br />
                Phone: 9844422992, 9844422177
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src="/images/Copyright.svg" alt="Copyright" className="w-5 h-5" />
            <span className="text-[#6e778a]">2024 All Rights Reserved</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src="/images/insta.svg" alt="Social Media" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src="/images/linkedin.svg" alt="Social Media" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src="/images/twitter.svg" alt="Social Media" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;