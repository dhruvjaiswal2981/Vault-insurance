import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-xl transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-gradient-to-r from-[#39b2ff] to-[#c465ea] text-white hover:opacity-90',
    secondary: 'bg-white text-[#3db1ff] hover:bg-gray-100',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-[#3db1ff]',
    ghost: 'bg-transparent text-white hover:bg-white/10'
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-5 py-2.5 text-base',
    large: 'px-6 py-3 text-lg h-16'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const InsuranceSections = () => {

  const handleExploreVault = () => {
    const aboutSection = document.getElementById('about-vault');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+918370052464'; 
    const message = encodeURIComponent("Hi, I'm interested in learning more about your insurance services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };


  return (
    <>
      {/* Individual / Retail Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#24bcede5] to-[#46b7ffe5] rounded-[30px] mx-5  mb-5 overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-2/3 hidden md:block">
            <img 
                src="/images/Clip path-1.png" 
                alt="Individual Insurance" 
                className="h-full w-full object-cover"
            />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 capitalize">
                Individual / Retail
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8">
                Secure your future with our trusted individual insurance plans – Life, Health, and Vehicle.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-6 sm:space-y-0 mb-12">
              <div className="flex items-center space-x-3">
                <img src="/images/Life.svg" alt="Life" className="w-8 h-8" />
                <span className="text-white text-xl">Life</span>
              </div>
              <div className="flex items-center space-x-3">
                <img src="/images/Health.svg" alt="Health" className="w-8 h-8" />
                <span className="text-white text-xl">Health</span>
              </div>
              <div className="flex items-center space-x-3">
                <img src="/images/Vehicle.svg" alt="Vehicle" className="w-8 h-8" />
                <span className="text-white text-xl">Vehicle</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="large" className="w-full sm:w-64" onClick={handleExploreVault}>Know more</Button>
                <Button variant="outline" size="large" className="w-full sm:w-64" onClick={handleWhatsAppClick}>WhatsApp us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#9d6fffe5] to-[#618fffe5] rounded-[30px] mx-5 mt-5 mb-10 overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-2/3 hidden md:block">
            <img 
                src="/images/Clip path-2.png" 
                alt="Individual Insurance" 
                className="h-full w-full object-cover"
            />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
           <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 capitalize">
                Business
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8">
                Empower your enterprise with coverage tailored to your needs – from cargo to construction.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-6 mb-12">
              {[
                "Business Insurance",
                "Education Insurance",
                "Construction Insurance",
                "Hotel Insurance",
                "Marine & Cargo Insurance"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white/30 rounded-lg"></div>
                  <span className="text-white text-xl">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="large" className="w-full sm:w-64 text-[#6793ff]" onClick={handleExploreVault}>Know more</Button>
                <Button variant="outline" size="large" className="w-full sm:w-64" onClick={handleWhatsAppClick}>WhatsApp us</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InsuranceSections;
