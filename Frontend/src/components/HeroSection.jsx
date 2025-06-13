import React from 'react';

const HeroSection = () => {
  const handleGetQuote = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreVault = () => {
    const aboutSection = document.getElementById('about-vault');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookCall = () => {
    // Implement book a call functionality
    window.open('https://calendly.com/your-link', '_blank');
  };

  const Button = ({
    children,
    onClick,
    variant = 'primary',
    size = 'small',
    disabled = false,
    type = 'button',
    className = '',
    ...props
  }) => {
    const baseClasses =
      'font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center';

    const variants = {
      primary:
        'bg-gradient-to-r from-[#39b2ff] to-[#c465ea] text-white hover:brightness-110 focus:ring-[#c465ea]',
      secondary:
        'bg-white text-[#4fb6f8] border border-white hover:bg-gray-50',
      outline:
        'border-2 border-[#3db1ff] text-transparent bg-clip-text bg-gradient-to-r from-[#3db1ff] to-[#c366eb] hover:bg-white hover:text-[#3db1ff] focus:ring-[#3db1ff]',
      ghost:
        'bg-transparent text-white border-2 border-transparent hover:border-white',
    };

    const sizes = {
      small: 'px-4 py-5 text-sm h-12',
      medium: 'px-6 py-3 text-base h-12',
      large: 'px-8 py-4 text-lg h-16',
    };

    const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${
      disabled ? 'cursor-not-allowed opacity-50' : ''
    } ${className}`;

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={buttonClasses}
        {...props}
      >
        {children}
      </button>
    );
  };

  return (
    <section className="relative bg-white overflow-hidden mx-auto px-4 sm:px-6 md:px-20">
      {/* Background GIF for desktop */}
      <div className="absolute right-0 hidden lg:block z-0 max-w-[1000px] xl:max-w-[1000px] 2xl:max-w-[1100px]">
        <img
          src="/gif/Vault1.1.gif"
          alt="Vault Hero GIF"
          className="w-full h-auto opacity-80"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl  pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#21272b]">
              Safeguarding Smiles,<br />
              Securing Futures.
            </h1>

            <p className="text-[14px] md:text-[16px] leading-relaxed text-[#22272bcc] max-w-lg mx-auto lg:mx-0">
              Your trusted partner in protecting what matters most — 
              <br/>families, futures, and everything in between 💜
            </p>

            {/* Desktop Buttons */}
            <div className="hidden sm:flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                onClick={handleGetQuote}
                variant="primary"
                size='small'
                className="w-[160px]"
              >
                Get a Free Quote
              </Button>

              <Button
                onClick={handleExploreVault}
                variant="outline"
                size='small'
                className="w-[160px]"
              >
                Let&apos;s Explore Vault
              </Button>
            </div>
          </div>

          {/* GIF for mobile/tablet view - Larger size */}
          <div className="block lg:hidden w-full mt-6 px-0">
            <img
              src="/gif/Vault1.1.gif"
              alt="Vault Hero GIF"
              className="w-full h-auto max-h-[100vh] object-contain"
            />
          </div>
        </div>

        {/* Mobile Buttons - Centered below GIF */}
        <div className="block sm:hidden px-4 mt-20">
          <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
            <Button
              onClick={handleBookCall}
              variant="primary"
              size="large"
              className="w-full"
            >
              Book A Free Call
            </Button>
          </div>
        </div>
      </div>

      {/* "Here is Vault for you" Section - Desktop only */}
      <div className="relative z-20 text-center px-4 sm:px-6 md:px-8 md:mt-20 py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-6 flex flex-wrap items-center justify-center text-[#22272b]">
          <span>Here is</span>
          <img
            src="/images/Vault Insurance-01.png"
            alt="Vault"
            className="h-8 w-auto mx-2 inline-block"
          />
          <span>for you</span>
        </h2>

        <p className=" w-[300px] md:w-[450px] text-[14px] md:text-[15px] leading-relaxed text-[#22272bcc] max-w-2xl mx-auto">
          With 23 years of trusted expertise, we safeguard every corner of 
          your world—bringing you true peace of mind through hassle-free 
          offerings backed by our best-price guarantee
        </p>
      </div>
    </section>
  );
};

export default HeroSection;