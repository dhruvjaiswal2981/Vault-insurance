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
      small: 'px-4 py-2 text-sm h-10',
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
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background GIF for desktop */}
      <div className="absolute right-0 top-0 hidden lg:block z-0 max-w-[1000px] xl:max-w-[1000px] 2xl:max-w-[1100px]">
        <img
          src="/gif/Vault1.1.gif"
          alt="Vault Hero GIF"
          className="w-full h-auto opacity-80"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-[#21272b]">
              Safeguarding Smiles,<br />
              Securing Futures.
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed text-[#22272bcc] max-w-lg mx-auto lg:mx-0">
              Your trusted partner in protecting what matters most — families,
              futures, and everything in between 💜
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={handleGetQuote}
                variant="primary"
                size="large"
                className="w-full sm:w-60"
              >
                Get a Free Quote
              </Button>

              <Button
                onClick={handleExploreVault}
                variant="outline"
                size="large"
                className="w-full sm:w-60"
              >
                Let&apos;s Explore Vault
              </Button>
            </div>
          </div>

          {/* GIF for mobile/tablet view */}
          <div className="block lg:hidden w-full mt-10 px-4 sm:px-6">
            <img
              src="/gif/Vault1.1.gif"
              alt="Vault Hero GIF"
              className="w-full h-auto max-h-[500px] sm:max-h-[550px] object-contain"
            />
        </div>

        </div>
      </div>

      {/* "Here is Vault for you" Section */}
      <div className="relative z-20 text-center px-4 sm:px-6 md:px-8 py-12 sm:py-20 md:mt-40 md:mb-20 xl:mt-50">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6">
          <span className="text-[#22272b]">Here is </span>
          <span className="bg-gradient-to-r from-[#5cb6ef] to-[#7aa1ff] bg-clip-text text-transparent">
            Vault
          </span>
          <span className="text-[#22272b]"> for you</span>
        </h2>

        <p className="text-lg sm:text-xl leading-relaxed text-[#22272bcc] max-w-2xl mx-auto">
          Protect what matters most with our reliable insurance coverage. We
          specialize in individual, business, and home insurance.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
