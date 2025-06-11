import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const LifeInsurance = () => {
  
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

    {/* Hero Section */}

    <section className="w-full py-12 px-4 md:px-12 lg:px-24 bg-[linear-gradient(250deg,#24BDED_0%,#47B7FF_100%)]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">

        {/* Left - Form Section */}
        <form  className="bg-white rounded-3xl shadow-lg w-[780px] h-[550px] p-8 lg:p-10 lg:pr-50 relative">
          <h2 className="text-3xl font-bold text-[#222] mb-2 pt-10">Life Insurance</h2>
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
            src="/images/life-insurance-illustration.png"
            alt="life-insaurance"
            className="w-auto h-auto"
          />
        </div>
      </div>
    </section>

    {/* Type Life Section*/}  
    <div className="bg-gray-50 px-4 py-4 flex justify-center items-center"> 
      <section
        className="w-full max-w-[1880px] min-h-[700px] flex-shrink-0
                   rounded-[30px] bg-white p-8 shadow
                   flex flex-col items-center justify-center text-center"
      >
        <div className="mb-16 px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#202B32] mb-10">
            Understand the Types of Life Insurance
          </h2>
          <p className="text-[#202B3299] text-[14px] md:text-[20px] leading-relaxed">
            Depending on your specific financial need you need to choose the right type of life insurance. Let’s map some of the common financial needs with suitable life insurance:
          </p>
        </div>

        {/* Cards Container1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px] mb-10">

          <div className="flex flex-col items-center max-w-sm">
            <h3 className="md:text-[28px] text-[20px] text-[#202B32] font-semibold">
              Term insurance is for financial protection of your dependents
            </h3>
          </div>
          <div className="flex flex-col items-center max-w-sm">
             <h3 className="md:text-[28px] text-[20px] text-[#202B32] font-semibold">
             Child Plan gives you the opportunity to invest and secure your child’s financial future
            </h3>
          </div>
          <div className="flex flex-col items-center max-w-sm">
            <h3 className="md:text-[28px] text-[20px] text-[#202B32] font-semibold">
              Retirement & pension plan helps you save for your retirement
            </h3>
          </div>
        </div>

        {/* Cards Container2 */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-2 gap-[60px] mb-8">
          <div className="flex flex-col items-center max-w-sm">
            <h3 className="md:text-[28px] text-[20px] text-[#202B32] font-semibold">
              ULIP gives you the opportunity to grow your wealth by investing in the markets along with a life cover
            </h3>
          </div>
          <div className="flex flex-col items-center max-w-sm">
            <h3 className="md:text-[28px] text-[20px] text-[#202B32] font-semibold">
              Endowment plan offers you 100% guaranteed15 returns on your investment along with a life cover
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