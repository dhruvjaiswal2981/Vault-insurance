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
          <div className="w-full lg:w-[686px] h-auto lg:h-[750px] bg-[#F4F8FB] rounded-2xl md:rounded-[30px] p-6 sm:p-8 md:p-12 shadow-sm flex flex-col justify-center">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold text-[#22272b] mb-6 md:mb-8">
              About Vault
            </h2>
            
            <div className="space-y-4 md:space-y-6">
  <p className="text-base sm:text-lg md:text-1xl text-[#22272bcc] leading-relaxed">
    <span className="font-semibold text-[#22272B]">Our Beginning</span> <br />
    We started in 2002 to teach people what insurance is and why it matters. What began as a small agency with a dream of making insurance accessible to everyone has grown into a trusted partner for thousands of families and businesses across India—and we’ve earned over 100 awards for our impact in the industry.
  </p>

  <p className="text-base sm:text-lg md:text-1xl text-[#22272bcc] leading-relaxed">
    <span className="font-semibold text-[#22272B]">How We Work</span> <br />
    We treat you with care—listening to your needs like a mother cares for her child. Then we guide you to the right plan in clear, simple language, with no confusing jargon or pressure.
  </p>

  <p className="text-base sm:text-lg md:text-1xl text-[#22272bcc] leading-relaxed">
    <span className="font-semibold text-[#22272B]">What We Offer</span> <br />
    We protect what matters most to you—yourself, your children, your partner, your parents, your home, and your business. More than an insurance agency, we’re your guardian—keeping you safe and giving you peace of mind.
  </p>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;