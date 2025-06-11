import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const VehicleInsurance = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [policyType, setPolicyType] = useState("new");

  const navLinks = [
    { name: "home", path: "/" },
    { name: "life insurance", path: "/life-insurance" },
    { name: "health insurance", path: "/health-insurance" },
    { name: "vehicle insurance", path: "/vehicle-insurance" },
    { name: "business insurance", path: "/business-insurance" },
  ];

  const isActive = (path) => location.pathname === path;

  const coverageItems1 = [
    {
      icon: '/svg/syringe.svg', 
      alt: 'Riot-Damageicon',
      text: 'Terrorism/Riot Damage',
    },
    {
      icon: '/svg/ambulance.svg', 
      alt: 'fire icon',
      text: 'Fire/Self-Ignition Loss',
    },
    {
      icon: '/svg/hospital-bed-icon.svg', 
      alt: 'Calamity-Damage icon',
      text: 'Natural Calamity Damage',
    },
    {
      icon: '/svg/bill-receipt.svg', 
      alt: 'Burglary-Damage icon',
      text: 'Burglary/Theft Damage',
    },
    {
      icon: '/svg/bill-receipt.svg', 
      alt: 'In-Transit-Damage icon',
      text: 'In-Transit Damage',
    }
  ];

  const coverageItems2 = [
    {
      icon: '/svg/syringe.svg', 
      alt: 'Riot-Damageicon',
      text: 'Terrorism/Riot Damage',
    },
    {
      icon: '/svg/ambulance.svg', 
      alt: 'fire icon',
      text: 'Fire/Self-Ignition Loss',
    },
    {
      icon: '/svg/hospital-bed-icon.svg', 
      alt: 'Calamity-Damage icon',
      text: 'Natural Calamity Damage',
    },
    {
      icon: '/svg/bill-receipt.svg', 
      alt: 'Burglary-Damage icon',
      text: 'Burglary/Theft Damage',
    }
  ];


  const coverageItems3 = [
    
    {
      icon: '/svg/bill-receipt.svg', 
      alt: 'In-Transit-Damage icon',
      text: 'In-Transit Damage',
    }
  ];

  const points = [
    {
      title: "Insured Declared Value (IDV)",
      description: "Understand the IDV, which is the maximum sum your insurer will pay if your vehicle is totaled or stolen. A higher IDV means a higher premium, but ensures better coverage."
    },
    {
      title: "Add-ons",
      description: "Consider add-on covers like zero depreciation, roadside assistance, and engine protection to enhance your policy."
    },
    {
      title: "Claim Settlement Ratio",
      description: "Evaluate the insurer's claim settlement ratio, indicating their ability to settle claims smoothly and quickly."
    },
    {
      title: "Coverage Type",
      description: "Decide between third-party liability (mandatory, covers damage to others) and comprehensive coverage (covers your vehicle from damage, theft, etc.)."
    },
    {
      title: "No Claim Bonus (NCB)",
      description: "Check for the NCB benefit, which is a discount on your premium for not making claims in previous years."
    },
    {
      title: "Premium",
      description: "While cost is a factor, balance it with the coverage offered. Don't just go for the cheapest policy; ensure it meets your needs."
    }
  ];

  const benefitsData = [
    {
      heading: "Financial Security",
      paragraph: "A car accident or damage can lead to substantial financial losses. Vehicle insurance helps protect your savings by covering these unexpected costs."
    },
    {
      heading: "Legal Requirement",
      paragraph: "In many places, including India, third-party liability insurance is mandatory. Having a valid policy ensures you are following the law and avoids penalties."
    },
    {
      heading: "Protection from Liabilities",
      paragraph: "If you are at fault in an accident, your insurance can cover the costs of damage or injury to the other party, preventing you from having to pay large sums out-of-pocket."
    },
    {
      heading: "Coverage for Your Vehicle",
      paragraph: "Comprehensive insurance protects your vehicle from a range of risks, including accidents, theft, vandalism, natural disasters, and fire."
    },
    {
      heading: "Peace of Mind",
      paragraph: "Knowing you have insurance coverage can provide peace of mind while driving, reducing stress and worry about potential accidents or damage."
    },
    {
      heading: "Additional Benefits",
      paragraph: "Many insurance policies offer additional benefits such as roadside assistance, towing services, and coverage for personal belongings in the car."
    }
  ]

  const benefitsData1 = [
    {
      heading: "Financial Security",
      paragraph: "A car accident or damage can lead to substantial financial losses. Vehicle insurance helps protect your savings by covering these unexpected costs."
    },
    {
      heading: "Legal Requirement",
      paragraph: "In many places, including India, third-party liability insurance is mandatory. Having a valid policy ensures you are following the law and avoids penalties."
    }
  ]


  return (
    <>
      <header className="w-full sticky z-50 bg-[linear-gradient(250deg,#24BDED_0%,#47B7FF_100%)]">
          <div className="flex items-center w-full px-8 justify-between py-12">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/images/Vault Insurance-03.png"
                alt="Vault Insurance Logo"
                className="h-8 w-auto flex-shrink-0"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:inline-flex items-center gap-[40px] text-white">
              {navLinks.map(({ name, path }) => (
                <a
                  key={name}
                  href={path}
                  className={`text-1lg font-medium transition-colors ${
                    isActive(path)
                      ? "border-b-2 border-white"
                      : "hover:text-blue-200"
                  } pb-1`}
                >
                  {name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white hover:text-gray-100 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {menuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="lg:hidden bg-[#24BDED] bg-opacity-90 shadow-lg rounded-lg mt-2 mx-4">
              <nav className="flex flex-col">
                {navLinks.map(({ name, path }) => (
                  <a
                    key={name}
                    href={path}
                    className={`px-4 py-3 text-lg font-medium text-white transition-colors ${
                      isActive(path)
                        ? "bg-blue-400 bg-opacity-10 border-l-4 border-blue-600"
                        : "hover:bg-blue-400 hover:bg-opacity-10"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {name}
                  </a>
                ))}
              </nav>
            </div>
          )}
      </header>


      {/* Hero Section start*/}

    <section className="w-full py-12 px-4 md:px-12 lg:px-24 bg-[linear-gradient(250deg,#24BDED_0%,#47B7FF_100%)]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">

        {/* Left - Form Section */}
        <form  className="bg-white rounded-3xl shadow-lg w-[780px] h-[550px] p-8 lg:p-10 lg:pr-50 relative">
          <h2 className="text-3xl font-bold text-[#222] mb-2 pt-10">Vehicle Insurance</h2>
          <p className="text-gray-600 mb-6">Compare & Buy Best Fit Health Insurance</p>

          {/* Policy Type */}
          <div className="flex gap-6 mb-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="policy"
                value="new"
                checked={policyType === "new"}
                onChange={() => setPolicyType("new")}
                className="accent-blue-500"
              />
              <span className="text-[#111] font-medium">New Vehicle</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="policy"
                value="renew"
                checked={policyType === "renew"}
                onChange={() => setPolicyType("renew")}
                className="accent-blue-500"
              />
              <span className="text-[#111] font-medium">Old Vehicle</span>
            </label>
          </div>
        </form>

        {/* Right - Image */}
        <div className="flex justify-center items-center absolute md:pl-180 md:pt-45 p-8">
          <img
            src="/images/Vehicle Insurance.png"
            alt="vehicle-insaurance"
            className="w-auto h-auto"
          />
        </div>
      </div>
    </section>

    {/* Hero Section end*/}


    {/* Type Vehicle Section start*/} 


    <div className="bg-gray-50 px-4 py-4 flex justify-center items-center"> 
      <section
        className="w-full max-w-[1880px] min-h-[793px] flex-shrink-0
                   rounded-[30px] bg-white p-8 md:p-12 lg:p-24 shadow
                   flex flex-col items-center justify-center text-center"
      >
        <div className="mb-16 px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222] mb-10">
            Vehicle Insurance & its Type
          </h2>
          <p className="text-gray-600 text-[15px] md:text-[20px] leading-relaxed">
            Cars, two-wheelers, lorries, autorickshaws, and electric vehicles (EVs) are among the many vehicle types covered by motor insurance, also known as vehicle insurance. In the event of an accident involving your covered car, it protects you from third-party responsibilities. Additionally, a motor insurance policy covers the cost of repairs for your own car in the event of an accident, natural disaster, theft, or fire. To drive lawfully in public places in India, you must obtain at least third-party auto insurance.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12 px-4 w-full">

          {/* Card 1: Vehicle Insurance */}
          <div className="flex flex-col items-center max-w-sm">
            <img
              src="/svg/individual-icon.svg"
              alt="Individual Icon"
              className="w-16 h-16 flex-shrink-0 mb-6 text-blue-500" 
            />
            <h3 className="text-2xl font-semibold text-[#222] mb-4">
              Comprehensive
            </h3>
            <p className="text-gray-600 text-[14px] md:text-[17px] leading-relaxed">
              Comprehensive insurance offers the broadest protection. It covers third-party liabilities (damage to someone else or their property) as well as damages to your own vehicle, regardless of who is at fault. This includes accidents, theft, fire, natural disasters, and vandalism, providing a complete safety net for your vehicle and potential liabilities.
            </p>
          </div>

          {/* Card 3: own-damage Vehicle Insurance */}

          <div className="flex flex-col items-center max-w-sm">
            
            <img
              src="/svg/family-icon.svg" 
              alt="Family Icon"
              className="w-16 h-16 flex-shrink-0 mb-6 text-blue-500"
            />
            <h3 className="text-2xl font-semibold text-[#222] mb-4">
              Own Damage
            </h3>
            <p className="text-gray-600 text-[14px] md:text-[17px] leading-relaxed">
              Own damage insurance specifically focuses on covering damages to your own insured vehicle. This includes losses or damages caused by accidents, theft, fire, natural calamities, and other specified perils. It does not cover any liability towards third parties. This type of policy is often chosen by those who want to protect their own vehicle but may not be legally required or choose not to have third-party coverage.
            </p>
          </div>

          {/* Card 3: third-party Vehicle Insurance */}
          <div className="flex flex-col items-center max-w-sm">
            
            <img
              src="/images/group-icon.png" 
              alt="Group Icon"
              className="w-16 h-16 flex-shrink-0 mb-6 text-blue-500"
            />
            <h3 className="text-2xl font-semibold text-[#222] mb-4">
              Third-Party
            </h3>
            <p className="text-gray-600 leading-relaxed text-[14px] md:text-[17px]">
              Third-party insurance is the most basic and legally mandated form of motor insurance in many places, including India. It provides coverage for the financial losses you might cause to a third party due to an accident involving your vehicle. This includes damages to their property, injury, or even death. It does not, however, cover any damages to your own vehicle.
            </p>
          </div>

        </div>
      </section>
    </div>
    
    {/* Type Vehicle Section end*/} 

    {/*Policy Vehicle Cover Section start */ }
    
    <section
      className="w-full max-w-[1920px] mx-auto bg-[#F4F8FB]
                 py-20 px-4 md:px-8 lg:px-12
                 flex flex-col items-center"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222] mb-12 md:mb-30 text-center">
        What does Vehicle Insurance Cover?
      </h2>

      {/* Grid for Icons and Descriptions for Desktop */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-5 gap-[60px] mb-8">
        {coverageItems1.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* SVG Icon */}
            <img
              src={item.icon}
              alt={item.alt}
              className="w-16 h-16 flex-shrink-0 mb-4" 
              
            />
            {/* Description Text */}
            <p className="md:text-[20px] text-[16px] text-[#222] leading-tight max-w-[150px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Grid for Icons and Descriptions For Mobile  */}
      <div className="md:hidden grid grid-cols-2 gap-[60px] mb-8">
        {coverageItems2.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* SVG Icon */}
            <img
              src={item.icon}
              alt={item.alt}
              className="w-16 h-16 flex-shrink-0 mb-4" 
              
            />
            {/* Description Text */}
            <p className="md:text-[20px] text-[16px] text-[#222] leading-tight max-w-[150px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Grid for Icons and Descriptions For Mobile - 2*/}
      <div className="grid grid-cols-1 md:hidden gap-[60px] mb-8">
        {coverageItems3.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* SVG Icon */}
            <img
              src={item.icon}
              alt={item.alt}
              className="w-16 h-16 flex-shrink-0 mb-4" 
              
            />
            {/* Description Text */}
            <p className="md:text-[20px] text-[16px] text-[#222] leading-tight max-w-[150px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>

      {/*Policy Vehicle Cover Section end */ }

    {/* vehicle Insuarance Point Section Start */}

    <div className="hidden md:block bg-[#F4F8FB] py-2 md:py-4 flex justify-center items-center">
      {/* Main section container */}
      <section
        className="w-full max-w-[1880px] h-full flex-shrink-0
                   bg-white  p-8 md:p-15 
                   flex flex-col items-center"
      >
        
        <h2
          className="text-[#22272B] text-center mb-16 md:mb-25
                     text-4xl md:text-5xl lg:text-[56px] font-normal" 
        >
          What to look for in Vehicle Insurance?
        </h2>

        {/* Content Grid Desktop */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-y-8 lg:gap-x-24 max-w-5xl w-full px-4">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="md:text-[20px] text-[16px] font-semibold text-[#222222] mb-2">
                {point.title}
              </h3>
              <p className="text-[#22272BCC] md:text-[15px] text-[14px] leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
    {/* vehicle Insuarance Point Section end */}
    
    {/*Benfits Insuarance Section Start*/}
    <section
      className="
                 md:max-h-[774px] 
                 rounded-[30px] opacity-90
                 bg-gradient-to-b from-[#1F8ACD] to-[#24BDED]
                 overflow-hidden
                  mx-4 my-4" 
    >
      <h1 className="text-white md:text-left text-center font-gilroySemiBold md:text-[40px] text-[28px] font-bold p-10 pt-20">
            Benefits of Vehicle Insurance
      </h1>
      {/* Content Grid DeskTop */}
      <div className="hidden md:block relative flex items-center justify-center flex-shrink-0">
        <div className="flex">
        {/* Left Text Container */}
        <div className="flex-2 p-10 flex flex-col justify-center items-start z-10">
          <div className="grid grid-cols-3 gap-x-10 gap-y-20">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-white font-gilroySemiBold md:text-[24px] text-[20px] font-bold mb-2">
                  {benefit.heading}
                </h3>
                <p className="text-white text-opacity-80 font-gilroyMedium text-[14px] md:text-[16px]">
                  {benefit.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Container */}
        <div className="flex-1 flex justify-end items-center relative">
          <img
            src="/images/Blue Car.png"
            alt="Blue Car"
            className="w-[591px] h-[518px] object-cover object-[0px_-0.062px] z-0
                       absolute right-0 bottom-0.5"
          />
        </div>
      </div>
      </div>
      

      {/* Content Grid Mobile */}
      <div className="md:hidden">
          <div className="flex flex-col justify-center items-center w-full px-6 py-6">
            <div className="grid grid-cols-1 gap-y-10 w-full max-w-sm mb-30"> 
              {benefitsData1.map((benefit, index) => (
                <div key={index} className="flex flex-col text-center">
                  <h3 className="text-white font-gilroySemiBold text-[22px] font-bold mb-3">
                    {benefit.heading}
                  </h3>
                  <p className="text-white text-opacity-80 font-gilroyMedium text-[20px] leading-[25px]">
                    {benefit.paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end  mt-auto relative r-0"> 
            <img
              src="/images/Blue Car.png"
              alt="Blue Car"
              className="w-[270px] h-[242px] object-cover object-[0px_-0.062px] z-0
                          bottom-0.5"
            />
          </div>
      </div>
    </section>

    {/*Benfits Insuarance Section End*/}

    {/* Footer Section Start*/}
    <section>
      <Footer/>
    </section>
    {/* Footer Section Start*/}

    </>
    
  );
};

export default VehicleInsurance;