import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const HealthInsurance = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [policyType, setPolicyType] = useState("new");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [existingDisease, setExistingDisease] = useState("");
  const [insurer, setInsurer] = useState("");
  const [claimStatus, setClaimStatus] = useState("");
  const [tenure, setTenure] = useState("");
  const [eldestAge, setEldestAge] = useState("");
  const [pincode, setPincode] = useState("");

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
    const data = {
      policyType,
      adults,
      children,
      existingDisease,
      insurer,
      claimStatus,
      tenure,
      eldestAge,
      pincode
    };
    console.log("Form Data:", data);
    alert("Quote generated. Check console for details.");
  };

  const coverageItems1 = [
    {
      icon: '/svg/syringe.svg', 
      alt: 'Syringe icon',
      text: 'Expenses Before Hospitalisation',
    },
    {
      icon: '/svg/ambulance.svg', 
      alt: 'Ambulance icon',
      text: 'Ambulance Charges',
    },
    {
      icon: '/svg/hospital-bed-icon.svg', 
      alt: 'Hospital bed icon',
      text: 'Hospitalisation Expenses',
    },
    {
      icon: '/svg/bill-receipt.svg', 
      alt: 'Bill receipt icon',
      text: 'Expenses after Hospitalisation',
    },
  ];

  const coverageItems2 = [
    {
      icon: '/svg/crutches.svg', 
      alt: 'Crutches icon',
      text: 'Accidental Hospitalisation',
    },
    {
      icon: '/svg/exclamation-mark.svg', 
      alt: 'Exclamation mark icon',
      text: 'Critical Illness',
    },
    {
      icon: '/images/scalpel.png', 
      alt: 'Scalpel icon',
      text: 'Operations & Surgeries',
    },
    {
      icon: '/svg/stethoscope.svg', 
      alt: 'Stethoscope icon',
      text: 'Health Check-Ups',
    },
    {
      icon: '/svg/first-aid-kit.svg', 
      alt: 'First aid kit icon',
      text: 'Day Care Treatment',
    },
  ]
  
  const points = [
    {
      title: "Insurance Cover",
      description: "Medical Expenses are increasing day by day therefore you should buy insurance cover which is sufficient at the time of claim. Insurance cover of 10 lakh and above is a good cover to buy Health Insurance."
    },
    {
      title: "Room Rent",
      description: "Room Rent is the most critical feature of any Health Insurance Policy as it has direct effect on Claims. Look for Policy which has minimum of Single Private Room and preferably No Limit."
    },
    {
      title: "Copay",
      description: "You need to be sure that Insurance company is paying the complete bill at the time of claim therefore look for policies with 0% Copay clause."
    },
    {
      title: "Existing Disease Waiting Period",
      description: "Waiting Period for any Existing Disease can lead to claim rejection if any claim arises between that period, therefore look for policies with least waiting period."
    },
    {
      title: "Cashless Hospital",
      description: "You would not want to end up paying from your pocket first and then getting that reimbursed by insurance company after 15-20 days, therefore it is better to look for policy which has tie up with Hospitals in your area."
    },
    {
      title: "Premium",
      description: "Most of the people give highest importance to Premium while buying Health Insurance but in fact you should evaluate your requirement first and then whichever insurer provide best value at the lowest price should be considered for buying health insurance."
    }
  ];

  const points1 = [
    {
      title: "Insurance Cover",
      description: "Medical Expenses are increasing day by day therefore you should buy insurance cover which is sufficient at the time of claim. Insurance cover of 10 lakh and above is a good cover to buy Health Insurance."
    },
    {
      title: "Room Rent",
      description: "Room Rent is the most critical feature of any Health Insurance Policy as it has direct effect on Claims. Look for Policy which has minimum of Single Private Room and preferably No Limit."
    },
  ]

  const benefits = [
    {
      title: "Financial Security",
      description: "Critical Illness or Major accident can wash away your hard earned savings of lifetime. Health Insurance helps you to keep your savings intact by providing financial assistance at the time of emergency"
    },
    {
      title: "Mental Peace",
      description: "With Health Insurance you will not have to worry about financing the hospital bills for emergency situations like accident or any illness. You will have complete peace of mind without worrying about future."
    },
    {
      title: "Covers Both Illness & Accident",
      description: "Health Insurance not only covers treatment for accident but it will also cover critical illness like Cancer, Heart Attack, Paralysis etc."
    },
    {
      title: "Covers Existing Diseases",
      description: "Existing Disease at the time of buying the policy will have waiting period of 1-4 years but you can be rest assured as these will get covered after the waiting period is over."
    },
    {
      title: "Cashless Treatment",
      description: "Health Insurance will provide Cashless Treatment at the Network Hospital which means you do not have to pay hospital bills upfront from your pocket, insurance company will directly settle the hospital bills."
    },
    {
      title: "Tax Benefit",
      description: "Premium paid for Health insurance is eligible for deduction under section 80 D which means you will save tax on it. You will be able to get tax deduction of upto Rs. 75,000 in a financial year."
    }
  ];

  const benefits1 = [
    {
      title: "Financial Security",
      description: "Critical Illness or Major accident can wash away your hard earned savings of lifetime. Health Insurance helps you to keep your savings intact by providing financial assistance at the time of emergency"
    },
    {
      title: "Mental Peace",
      description: "With Health Insurance you will not have to worry about financing the hospital bills for emergency situations like accident or any illness. You will have complete peace of mind without worrying about future."
    }
  ];

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
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg w-auto h-full p-8 lg:p-10 lg:pr-50 relative">
          <h2 className="text-3xl font-bold text-[#222] mb-2 pt-10">Health Insurance</h2>
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
              <span className="text-[#111] font-medium">New Policy</span>
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
              <span className="text-[#111] font-medium">Renew Your Policy</span>
            </label>
          </div>

          <div className="md:flex md:flex-wrap md:items-center gap-2 sm:gap-3 mb-4">
            {/* Adult Counter */}
            <div className="flex justify-between items-center md:w-[240px] md:h-[60px] bg-gray-100 px-3 py-1 md:mb-0 mb-4 gap-2">
              <img src="/svg/adult.svg" className="w-[28px] h-[28px]" alt="Adult Icon" />
              <span className="text-sm sm:text-base">Adult</span>
              <button
                type="button"
                className="text-lg font-bold flex items-center justify-center w-5 h-5"
                onClick={() => setAdults(prev => Math.max(0, prev - 1))}
              >
                <svg width="13" height="2" viewBox="0 0 13 2" fill="none" className="w-3 h-3">
                  <path d="M11.5898 0H0.589844C0.308594 0 0.0898438 0.25 0.0898438 0.5V1.5C0.0898438 1.78125 0.308594 2 0.589844 2H11.5898C11.8398 2 12.0898 1.78125 12.0898 1.5V0.5C12.0898 0.25 11.8398 0 11.5898 0Z" fill="#22272B" fillOpacity="0.6" />
                </svg>
              </button>
              <span className="mx-1 sm:mx-2 text-sm sm:text-base">{adults}</span>
              <button
                type="button"
                className="text-lg font-bold flex items-center justify-center w-5 h-5"
                onClick={() => setAdults(prev => prev + 1)}
              >
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" className="w-3 h-3">
                  <path d="M11.5898 5H7.08984V0.5C7.08984 0.25 6.83984 0 6.58984 0H5.58984C5.30859 0 5.08984 0.25 5.08984 0.5V5H0.589844C0.308594 5 0.0898438 5.25 0.0898438 5.5V6.5C0.0898438 6.78125 0.308594 7 0.589844 7H5.08984V11.5C5.08984 11.7812 5.30859 12 5.58984 12H6.58984C6.83984 12 7.08984 11.7812 7.08984 11.5V7H11.5898C11.8398 7 12.0898 6.78125 12.0898 6.5V5.5C12.0898 5.25 11.8398 5 11.5898 5Z" fill="#22272B" fillOpacity="0.6" />
                </svg>
              </button>
            </div>

            {/* Children Counter */}
            <div className="flex justify-between bg-gray-100 items-center md:w-[240px] md:h-[60px] px-3 py-1 gap-2">
              <img src="/svg/child.svg" alt="Child Icon" />
              <span className="text-sm sm:text-base">Children</span>
              <button
                type="button"
                className="text-lg font-bold flex items-center justify-center w-5 h-5"
                onClick={() => setChildren(prev => Math.max(0, prev - 1))}
              >
                <svg width="13" height="2" viewBox="0 0 13 2" fill="none" className="w-3 h-3">
                  <path d="M11.5898 0H0.589844C0.308594 0 0.0898438 0.25 0.0898438 0.5V1.5C0.0898438 1.78125 0.308594 2 0.589844 2H11.5898C11.8398 2 12.0898 1.78125 12.0898 1.5V0.5C12.0898 0.25 11.8398 0 11.5898 0Z" fill="#22272B" fillOpacity="0.6" />
                </svg>
              </button>
              <span className="mx-1 sm:mx-2 text-sm sm:text-base">{children}</span>
              <button
                type="button"
                className="text-lg font-bold flex items-center justify-center w-5 h-5"
                onClick={() => setChildren(prev => prev + 1)}
              >
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" className="w-3 h-3">
                  <path d="M11.5898 5H7.08984V0.5C7.08984 0.25 6.83984 0 6.58984 0H5.58984C5.30859 0 5.08984 0.25 5.08984 0.5V5H0.589844C0.308594 5 0.0898438 5.25 0.0898438 5.5V6.5C0.0898438 6.78125 0.308594 7 0.589844 7H5.08984V11.5C5.08984 11.7812 5.30859 12 5.58984 12H6.58984C6.83984 12 7.08984 11.7812 7.08984 11.5V7H11.5898C11.8398 7 12.0898 6.78125 12.0898 6.5V5.5C12.0898 5.25 11.8398 5 11.5898 5Z" fill="#22272B" fillOpacity="0.6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Select Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4">
            <div className="relative">
              <select
                className="w-full bg-gray-100 p-2 sm:p-3 text-[#22272BCC]-500 text-sm sm:text-base appearance-none pr-8"
                value={existingDisease}
                onChange={(e) => setExistingDisease(e.target.value)}
              >
                <option value="">Existing Disease</option>
                <option value="none">None</option>
                <option value="diabetes">Diabetes</option>
                <option value="hypertension">Hypertension</option>
                <option value="asthma">Asthma</option>
                {/* Add more options as needed */}
              </select>
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M12.2188 16.2999L6.21875 10.2999L7.61875 8.8999L12.2188 13.4999L16.8188 8.8999L18.2188 10.2999L12.2188 16.2999Z" fill="#4E5B60" />
              </svg>
            </div>

            <div className="relative">
              <select
                className="w-full bg-gray-100 p-2 sm:p-3 text-[#22272BCC]-500 text-sm sm:text-base appearance-none pr-8"
                value={insurer}
                onChange={(e) => setInsurer(e.target.value)}
              >
                <option value="">Insurer</option>
                <option value="insurerA">Insurer A</option>
                <option value="insurerB">Insurer B</option>
                <option value="insurerC">Insurer C</option>
                {/* Add more options as needed */}
              </select>
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M12.2188 16.2999L6.21875 10.2999L7.61875 8.8999L12.2188 13.4999L16.8188 8.8999L18.2188 10.2999L12.2188 16.2999Z" fill="#4E5B60" />
              </svg>
            </div>

            <div className="relative">
              <select
                className="w-full bg-gray-100 p-2 sm:p-3 text-[#22272BCC]-500 text-sm sm:text-base appearance-none pr-8"
                value={claimStatus}
                onChange={(e) => setClaimStatus(e.target.value)}
              >
                <option value="">No Claim Status</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                {/* Add more options as needed */}
              </select>
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M12.2188 16.2999L6.21875 10.2999L7.61875 8.8999L12.2188 13.4999L16.8188 8.8999L18.2188 10.2999L12.2188 16.2999Z" fill="#4E5B60" />
              </svg>
            </div>

            <div className="relative">
              <select
                className="w-full bg-gray-100 p-2 sm:p-3 text-[#22272BCC]-500 text-sm sm:text-base appearance-none pr-8"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
              >
                <option value="">Tenure in Yr.</option>
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
                {/* Add more options as needed */}
              </select>
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M12.2188 16.2999L6.21875 10.2999L7.61875 8.8999L12.2188 13.4999L16.8188 8.8999L18.2188 10.2999L12.2188 16.2999Z" fill="#4E5B60" />
              </svg>
            </div>

            <input
              type="number" 
              placeholder="Eldest Member Age"
              className="bg-gray-100 p-2 sm:p-3 text-gray-700 text-sm sm:text-base"
              value={eldestAge}
              onChange={(e) => setEldestAge(e.target.value)}
            />

            <input
              type="text"
              placeholder="Pincode"
              className="bg-gray-100 p-2 sm:p-3 text-gray-700 text-sm sm:text-base"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
          {/* Submit Button */}
          <button type="submit" className="w-full bg-[#24BDED] hover:bg-[#1DAED9] text-white py-3 rounded-xl text-lg font-semibold transition">
            Get a Free Quote
          </button>
        </form>

        {/* Right - Image */}
        <div className="flex justify-center items-center md:absolute md:z-10 md:pl-170 md:pt-12 p-8">
          <img
            src="/images/hospital-bed.png"
            alt="Hospital Bed"
            className="w-auto h-auto"
          />
        </div>
      </div>
    </section>

    {/* Type Section*/}  
    <div className="bg-gray-50 px-4 py-4 flex justify-center items-center"> 
      <section
        className="w-full max-w-[1880px] min-h-[793px] flex-shrink-0
                   rounded-[30px] bg-white p-8 md:p-12 lg:p-24 shadow
                   flex flex-col items-center justify-center text-center"
      >
        <div className="mb-16 px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222] mb-10">
            Health Insurance & its Type
          </h2>
          <p className="text-gray-600 text-[15px] md:text-[20px] leading-relaxed">
            Health Insurance is also known as Mediclaim. It helps you to cover expenses related to
            hospitalisation arising out of any accident or medical disease. Once you buy Health Insurance,
            all or part of your expenses incurred in hospital will be paid by the insurance company.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12 px-4 w-full">

          {/* Card 1: Individual Health Insurance */}
          <div className="flex flex-col items-center max-w-sm">
            <img
              src="/svg/individual-icon.svg"
              alt="Individual Icon"
              className="w-16 h-16 flex-shrink-0 mb-6 text-blue-500" 
            />
            <h3 className="text-2xl font-semibold text-[#222] mb-4">
              Individual Health Insurance
            </h3>
            <p className="text-gray-600 text-[14px] md:text-[17px] leading-relaxed">
              It covers only a single Individual under the Health Insurance Policy. Insurance policy will cover
              medical expenses related to hospitalisation, Injury, room rent etc.
            </p>
          </div>

          
          <div className="flex flex-col items-center max-w-sm">
            
            <img
              src="/svg/family-icon.svg" 
              alt="Family Icon"
              className="w-16 h-16 flex-shrink-0 mb-6 text-blue-500"
            />
            <h3 className="text-2xl font-semibold text-[#222] mb-4">
              Family Floater Health Insurance
            </h3>
            <p className="text-gray-600 text-[14px] md:text-[17px] leading-relaxed">
              It covers the whole family of 2 or more person under a single Health insurance policy.
              Insurance Cover under this policy can be utilised by 1 person or all the members covered
              under this policy. This is beneficial because the premium is comparatively lower as compared
              to Individual Health Insurance policy for all members
            </p>
          </div>

          {/* Card 3: Group Health Insurance */}
          <div className="flex flex-col items-center max-w-sm">
            
            <img
              src="/images/group-icon.png" 
              alt="Group Icon"
              className="w-16 h-16 flex-shrink-0 mb-6 text-blue-500"
            />
            <h3 className="text-2xl font-semibold text-[#222] mb-4">
              Group Health Insurance
            </h3>
            <p className="text-gray-600 leading-relaxed text-[14px] md:text-[17px]">
              Group Policy is mainly designed for corporates where group of employees are working together. This policy is offered to employees at a very low cost premium.
            </p>
          </div>

        </div>
      </section>
    </div>

    {/*Policy Cover Section */ }
    
    <section
      className="w-full max-w-[1920px] mx-auto bg-[#F4F8FB]
                 py-20 px-4 md:px-8 lg:px-12
                 flex flex-col items-center"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222] mb-12 md:mb-30 text-center">
        What does Health Insurance Policy Cover?
      </h2>

      {/* Grid for Icons and Descriptions - 1 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[60px] mb-8">
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
      {/* Grid for Icons and Descriptions - 2 */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-[60px]">
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
    </section>

    {/* Health Insuarance Point */}

    <div className="bg-[#F4F8FB] py-2 md:py-4 flex justify-center items-center">
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
          What to look for in Health Insurance?
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

{/* Content Grid Mobile */}
<div className="grid lg:hidden grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-16 lg:gap-x-24 max-w-5xl w-full px-4 text-center">
  {points1.map((point, index) => (
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

    {/*BeneFits Seciton*/}

    <div className="mx-4 flex justify-center items-center">
      {/* Main section container */}
      <section
        className="w-full max-w-[1880px] flex-shrink-0
                   rounded-[30px] p-10 opacity-90
                   flex flex-col items-center justify-center"
        style={{
          background: 'linear-gradient(250deg, #24BDED 0%, #47B7FF 100%)',
        }}
      >
        {/* Heading */}
        <h2
          className="text-white text-center mb-16 md:mb-20
                     text-4xl md:text-5xl lg:text-[56px] font-normal"
        >
          Benefits of Health Insurance
        </h2>

        {/* Content Grid Desktop */}
<div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-12 lg:gap-x-20 lg:gap-y-16 max-w-7xl w-full px-4">
  {benefits.map((benefit, index) => (
    <div key={index} className="flex flex-col text-white">
      <h3 className="text-[20px] md:text-[24px] font-semibold mb-2">
        {benefit.title}
      </h3>
      <p className="text-[18px] md:text-[20px] leading-relaxed opacity-90">
        {benefit.description}
      </p>
    </div>
  ))}
</div>

{/* Content Grid Mobile */}
<div className="grid md:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-12 lg:gap-x-20 lg:gap-y-16 max-w-7xl w-full px-4 text-center">
  {benefits1.map((benefit, index) => (
    <div key={index} className="flex flex-col text-white">
      <h3 className="text-[20px] md:text-[24px] font-semibold mb-2">
        {benefit.title}
      </h3>
      <p className="text-[18px] md:text-[20px] leading-relaxed opacity-90">
        {benefit.description}
      </p>
    </div>
  ))}
</div>
      </section>
    </div>

    {/* Footer Section*/}
    <section className="pt-2">
      <Footer/>
    </section>

    </>
  );
};

export default HealthInsurance;
