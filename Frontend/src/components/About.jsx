import React from 'react';

const About = () => {
  return (
    <section id="about-vault" className="py-1 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-5 items-center justify-center">
          {/* GIF Section - Left Side */}
          <div className="w-full lg:w-[1174px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[750px] rounded-2xl md:rounded-[30px] overflow-hidden shadow-xl">
            <img 
              src="/gif/Vault1.2.gif" 
              alt="About Vault Insurance" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              style={{ borderRadius: 'inherit' }}
            />
          </div>
          
          {/* Content Section - Right Side */}
          <div className="w-full lg:w-[686px] h-auto lg:h-[750px] bg-[#f4f8fb] rounded-2xl md:rounded-[30px] p-6 sm:p-8 md:p-12 shadow-sm flex flex-col justify-center">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold text-[#22272b] mb-6 md:mb-8">
              About Vault
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg md:text-1xl text-[#22272bcc] leading-relaxed">
                Welcome to Vault Insurance—where your security is our priority, and your peace of mind is our mission.
              </p>
              
              <p className="text-base sm:text-lg md:text-1xl text-[#22272bcc] leading-relaxed">
                Since 2002, Vault Insurance has been on a simple but powerful journey: protecting what matters most to you. As a family-owned business, we treat our clients like family. What started as a small agency with a dream to make insurance accessible has now grown into a trusted partner to thousands of families and businesses across India.
              </p>
              
              <p className="text-base sm:text-lg md:text-1xl text-[#22272bcc] leading-relaxed">
                We understand that life is unpredictable, which is why we offer insurance that's as personal as your needs. We take the time to listen and provide honest advice, free from jargon and confusion. Whether it's protecting your home, health, or business, Vault Insurance is here to guide you every step of the way.
              </p>
              
              <p className="text-base sm:text-lg md:text-1xl text-[#22272bcc] leading-relaxed font-medium">
                We're more than just an insurance provider—we're your partner in securing the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;