import React, { useEffect, useRef, useState } from 'react';

const Statistics = () => {

  const statsRef = useRef(null);
  const [animatedStats, setAnimatedStats] = useState({
    years: 0,
    clients: 0,
    claims: 0,
    awards: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate numbers when component comes into view
            animateNumbers();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const animateNumbers = () => {
    const duration = 5000; 
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setAnimatedStats({
        years: Math.floor(progress * 23),
        clients: Math.floor(progress * 2000),
        claims: Math.floor(progress * 10),
        awards: Math.floor(progress * 100)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };


  const testimonials = [
    {
      id: 1,
      quote: "They organized their work and internal management was outstanding!",
      name: "Denise the menace",
      image: "/images/testimonial1.png"
    },
    {
      id: 2,
      quote: "Working with them was a great experience",
      name: "richie rich",
      image: "/images/testimonial2.png"
    },
    {
      id: 3,
      quote: "They tailor their solutions to our specifin needs and goals.",
      name: "noddy",
      image: "/images/testimonial-3.png"
    }
  ];

  return (
    <>
      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#5bb5ee] to-[#7aa1ff] rounded-[30px] mx-4 md:mx-5 my-8 md:my-10 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Statistics Grid */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
      <div className="text-center p-4">
        <div className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
          {animatedStats.years}+
        </div>
        <div className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
          Years of Experience
        </div>
      </div>
      <div className="text-center p-4">
        <div className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl l font-bold text-white mb-2 md:mb-4">
          {animatedStats.clients}+
        </div>
        <div className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
          Clients Served
        </div>
      </div>
      <div className="text-center p-4">
        <div className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
          ₹{animatedStats.claims} Cr+
        </div>
        <div className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
          in Claims Paid
        </div>
      </div>
      <div className="text-center p-4">
        <div className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold text-white mb-2 md:mb-4">
          {animatedStats.awards}+
        </div>
        <div className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
          Industry Awards
        </div>
      </div>
    </div>
          
          {/* Insurance Partners */}
<div className="w-full px-4 md:px-6 lg:px-0 mb-12 md:mb-20 mt-12 md:mt-30">
  <div className="bg-white rounded-[20px] md:rounded-[30px] p-4 sm:p-6 md:p-12 relative max-w-[1400px] mx-auto">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#22272b] mb-6 sm:mb-8 md:mb-12 text-center md:text-left">
      Our Insurance Partners
    </h2>

    <div className="flex flex-wrap justify-center md:justify-between items-center gap-3 sm:gap-4 md:gap-6 overflow-x-auto py-4">
      <img src="/images/hdfc-logo.png" alt="HDFC Life" className="h-10 sm:h-12 md:h-16 w-auto" />
      <img src="/images/birla-logo.png" alt="Birla Sun Life" className="h-10 sm:h-12 md:h-16 w-auto" />
      <img src="/images/sbi-logo.png" alt="SBI Life" className="h-10 sm:h-12 md:h-16 w-auto" />
      <img src="/images/axis-logo.png" alt="AXIS Bank" className="h-10 sm:h-12 md:h-16 w-auto" />
      <img src="/images/lic-logo.png" alt="LIC" className="h-10 sm:h-12 md:h-16 w-auto" />
      <img src="/images/icici-logo.png" alt="ICICI Prudential" className="h-10 sm:h-12 md:h-16 w-auto" />
    </div>

    {/* Gradient mask (desktop only) */}
    <div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-white to-transparent hidden md:block"></div>

    {/* Background Illustration (desktop only) */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block -scale-x-100">
      <img 
        src="/images/search-img.png" 
        alt="Statistics Illustration" 
        className="w-auto h-[250px] sm:h-[300px] lg:h-[450px] md:ml-15" 
      />
    </div>
  </div>
</div>

          
  {/* Testimonials Section */}
    <div className="mt-12 md:mt-30 px-4">
      <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white mb-4 text-left">Stories from Our Vaulters</h2>
      <p className="text-lg md:text-xl text-white/90 mb-10 md:mb-12 text-left">
        Join 1000s of Happy Souls Who Have Trusted Vault — Become a Vaulter Today!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-[24px] p-8">
            <p className="text-xl md:text-2xl font-bold text-[#4788dc] mb-8 leading-relaxed">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center space-x-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="text-lg font-semibold text-[#596069]">{testimonial.name}</span>
            </div>
          </div>
          ))}
        </div>

        {/* Pagination dots - centered with exact spacing */}
        <div className="flex justify-center space-x-3">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-white/30 rounded-full"></div>
          <div className="w-3 h-3 bg-white/30 rounded-full"></div>
        </div>
      </div>
        </div>
      </section>

      {/* Corporate Clients Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#22272b] mb-8 md:mb-12 lg:mb-16">Our Corporate Insurance Clients</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-16">
            <img src="/images/NCC-logo.png" alt="NCC" className="h-16 md:h-20 lg:h-24 w-auto" />
            <img src="/images/NCC-1-logo.png" alt="NCC-1" className="h-16 md:h-20 lg:h-24 w-auto" />
            <img src="/images/trivik.png" alt="Trivik" className="h-12 md:h-16 lg:h-20 w-auto" />
            <img src="/images/ramada.png" alt="Ramada" className="h-12 md:h-16 lg:h-20 w-auto" />
            <img src="/images/sri-gos.png" alt="Sri-Gos" className="h-12 md:h-16 lg:h-20 w-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistics;