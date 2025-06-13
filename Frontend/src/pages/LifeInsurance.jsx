import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const LifeInsurance = () => {
  
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [policyType, setPolicyType] = useState("new");
   const [vehicleNumber, setVehicleNumber] = useState("");

  const navLinks = [
    { name: "home", path: "/" },
    { name: "life insurance", path: "/life-insurance" },
    { name: "health insurance", path: "/health-insurance" },
    { name: "vehicle insurance", path: "/vehicle-insurance" },
    { name: "business insurance", path: "/business-insurance" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Policy Type:", policyType);
    console.log("Vehicle Number:", vehicleNumber);
    // Add your form submission logic here
  };

  return (
    <>
      <header className="w-full sticky z-50 bg-[linear-gradient(250deg,#24BDED_0%,#47B7FF_100%)]">
      <div className="flex items-center w-full px-8 justify-between py-5">
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

    <section className="relative w-full py-12 px-4 md:px-12 lg:px-24
                 bg-[linear-gradient(250deg,#24BDED_0%,#47B7FF_100%)]
                 overflow-hidden
                  flex flex-col justify-center">
      {/*Desktop View Only */}
      <div
        className="hidden md:block relative w-full h-auto mb-3 mx-0 z-20
                     lg:top-[90px] lg:left-[600px]"
      >
        <img
          src="/images/life-insurance-illustration.png"
          alt="life-insurance"
          className="object-contain w-full lg:w-[600px] lg:h-[550px]"
          
        />
      </div>
        <img
          src="/images/life-insurance-illustration.png"
          alt="life-insurance"
          className="object-contain w-full h-full mx-15 my-10 md:hidden"
          
        />
      <form
        onSubmit={handleSubmit}
        className="relative  max-w-[780px] h-auto p-8 md:p-12 mx-auto
                   bg-white rounded-[30px] shadow-2xl z-10
                   flex flex-col justify-start items-start
                   lg:absolute lg:w-[700px] lg:h-[540px] lg:top-[50px] lg:left-[60px]"
      >
        <h2 className="text-[28px] md:text-[46px] font-semibold text-[#222] mb-1">Life Insurance</h2>
        <p className="text-[14px] md:text-[16px] text-[#22272BCC] mb-8">Compare & Buy Best Fit Life Insurance</p>

        {/* Policy Type */}
        <div className="flex flex-row gap-4 sm:gap-8 mb-12">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="policy"
              value="new"
              checked={policyType === "new"}
              onChange={() => setPolicyType("new")}
              className="accent-[#6290FF] w-5 h-5"
            />
            <span className="text-[#22272B] text-[12px] font-medium">New Vehicle</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="policy"
              value="renew"
              checked={policyType === "renew"}
              onChange={() => setPolicyType("renew")}
              className="accent-[#6290FF] w-5 h-5"
            />
            <span className="text-[#22272B] text-[12px] font-medium">Old Vehicle</span>
          </label>
        </div>

        {/* Vehicle Number Input */}
        <div className="flex  flex-row items-center w-full  max-w-[340px] rounded-xl shadow-md overflow-hidden border border-gray-100 mb-8">
          <input
            type="text"
            placeholder="Enter Vehicle Number"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            className="flex-grow py-2 px-4 text-gray-700 text-lg focus:outline-none border-none bg-white w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-[#62B3F0] text-white font-semibold py-2 px-4 m-2 max-w-[80px] text-[15px] rounded-[5px] hover:bg-blue-600 transition-colors duration-200 cursor-pointer w-full sm:w-auto"
          >
            Search
          </button>
        </div>

        {/* "Brand New Vehicle?" link */}
        <p className="text-[#273640] font-semibold text-[14px] mt-4">
          Brand New Vehicle?{' '}
          <a href="#" className="text-[#3099D0] hover:underline cursor-pointer font-medium">
            Click Here
          </a>
        </p>
      </form>
    </section>

    {/* Hero Section end*/}

    {/* Type Life Section*/}  
    <div className="bg-gray-50 px-4 py-4 flex justify-center items-center"> 
      <section
        className="w-full max-w-[1880px] min-h-[700px] flex-shrink-0
                   rounded-[30px] bg-white p-8 shadow
                   flex flex-col items-center justify-center text-center"
      >
        <div className="mb-16 px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202B32] mb-10">
            Understand the Types of Life Insurance
          </h2>
          <p className="text-[#202B3299] text-[14px] md:text-[15px] leading-relaxed font-semibold">
            Depending on your specific financial need you need to choose the right type of life 
            <br/>insurance. Let’s map some of the common financial needs with suitable life insurance:
          </p>
        </div>

        {/* Cards Container1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] md:gap-[100px] mb-2 md:mb-8">

          <div className="flex flex-col items-center max-w-sm">
            <h3 className="md:text-[20px] text-[16px] text-[#202B32] font-semibold">
              Term insurance is for 
              <br/>financial protection of 
              <br/>your dependents
            </h3>
          </div>
          <div className="flex flex-col items-center max-w-sm">
             <h3 className="md:text-[20px] text-[16px] text-[#202B32] font-semibold">
             Child Plan gives you the 
             <br/>opportunity to invest and secure 
             <br/>your child’s financial future
            </h3>
          </div>
          <div className="flex flex-col items-center max-w-sm">
            <h3 className="md:text-[20px] text-[16px] text-[#202B32] font-semibold">
              Retirement & pension 
              <br/>plan helps you save 
              <br/>for your retirement
            </h3>
          </div>
        </div>

        {/* Cards Container2 */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-2 gap-[60px] mt-10">
          <div className="flex flex-col items-center max-w-sm">
            <h3 className="md:text-[20px] text-[16px] text-[#202B32] font-semibold">
              ULIP gives you the opportunity to 
              <br/>grow your wealth by investing in 
              <br/>the markets along with a life cover
            </h3>
          </div>
          <div className="flex flex-col items-center max-w-sm">
            <h3 className="md:text-[20px] text-[16px] text-[#202B32] font-semibold">
              Endowment plan offers you 100% 
              <br/>guaranteed15 returns on your 
              <br/>investment along with a life cover
            </h3>
          </div>
        </div>
      </section>
    </div>
    
    {/* Footer Section*/}
    <section>
      <Footer/>
    </section>

    </>
    
  );
};

export default LifeInsurance;