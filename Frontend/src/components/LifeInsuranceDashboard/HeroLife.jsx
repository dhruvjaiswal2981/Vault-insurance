import React, { useState } from "react";
import { submitLifeInsuranceLead } from "../../api/LifeApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HeroLife = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(""); 

  const handleSelect = (value) => {
    setSelectedPlan(value);
    setOpen(false);
    setSubmenuOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const companies = [
    { label: "HDFC", value: "hdfc" },
    { label: "MAX LIFE", value: "maxlife" },
    { label: "BIRLA SUN LIFE", value: "birla" },
    { label: "LIC", value: "lic" },
  ];

  const toggleOption = (value) => {
    if (selectedCompanies.includes(value)) {
      setSelectedCompanies(selectedCompanies.filter((v) => v !== value));
    } else {
      setSelectedCompanies([...selectedCompanies, value]);
    }
  };

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      dob,
      gender,
      phone,
      email,
      selected_plan: selectedPlan,
      preferred_companies: selectedCompanies
    };

    try {
      const result = await submitLifeInsuranceLead(data);
      console.log('Result:', result);
      toast.success('🎉 Your Quote submitted successfully! Our team will contact you shortly.', {
                      className: 'bg-green-50 text-green-800 rounded-md shadow-md border border-green-200 px-4 py-2 font-medium',
                      icon: '✅'
        });
      setTimeout(() => window.location.reload(), 3000);
    } catch (err) {
      console.error('Quote submission failed:', err);
        toast.error('❌ Oops! Submission failed. Please try again.', {
                  className: 'bg-red-50 text-red-800 rounded-md shadow-md border border-red-200 px-4 py-2 font-medium',
                  icon: '⚠️'
        });
    }
  };

  return (
    <>
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
          className="relative max-w-[780px] h-auto p-8 md:p-12 mx-auto
                  bg-white rounded-[30px] shadow-2xl z-10
                  flex flex-col justify-start items-start
                  lg:absolute lg:w-[700px] lg:h-[540px] lg:top-[50px] lg:left-[60px]"
        >
          <h2 className="text-[28px] md:text-[46px] font-semibold text-[#222] mb-1">Life Insurance</h2>
          <p className="text-[14px] md:text-[16px] text-[#22272BCC] mb-8">Compare & Buy Best Fit Life Insurance</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4">
            {/* Insurance Type Selection */}
            <div className="relative">
              <label className="block text-sm font-semibold text-[#22272B] mb-2">
                I want to buy
              </label>

              {/* Trigger */}
              <div
                onClick={() => setOpen(!open)}
                className="bg-white border border-white font-semibold hover:border-blue-400 shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-3 rounded-md flex justify-between items-center cursor-pointer"
              >
                <span className="text-[13px] text-[#22272BCC]">
                  {selectedPlan || "Select Plan"}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Dropdown Options */}
              {open && (
                <ul className="absolute z-20 bg-white w-full mt-2 border border-blue-300 rounded-md shadow-md">
                  <li
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => handleSelect("Family Protection (Term)")}
                  >
                    Family Protection (Term)
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => handleSelect("Retirement Plan")}
                  >
                    Retirement Plan
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => handleSelect("Children Future")}
                  >
                    Children Future
                  </li>

                  {/* Investment with Submenu */}
                  <li
                    onMouseEnter={() => setSubmenuOpen(true)}
                    onMouseLeave={() => setSubmenuOpen(false)}
                    className="relative px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  >
                    Investment Plan
                    <span className="absolute right-3">▶</span>

                    {/* Submenu */}
                    {submenuOpen && (
                      <ul className="absolute top-0 left-full ml-2 w-56 bg-white border border-blue-300 rounded-md shadow-lg">
                        <li
                          className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                          onClick={() => handleSelect("Guaranteed Returns")}
                        >
                          Guaranteed Returns
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                          onClick={() => handleSelect("Market Linked ULIP")}
                        >
                          Market Linked ULIP
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </div>

            {/* Preferred Companies */}
            <div className="relative">
              <label className="block text-sm font-semibold text-[#22272B] mb-2">
                Preferred Life Insurance Companies
              </label>

              {/* Dropdown Toggle */}
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white p-3 rounded-md cursor-pointer text-[13px] text-[#22272BCC] flex justify-between items-center font-semibold border border-white hover:border-blue-400"
              >
                <span>
                  {selectedCompanies.length > 0
                    ? selectedCompanies.map(val => companies.find(c => c.value === val)?.label || val).join(", ")
                    : "Select Companies"}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Dropdown Content */}
              {isOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-blue-300 rounded-md shadow-md p-3 space-y-2">
                  {companies.map((company) => (
                    <label
                      key={company.value}
                      className="flex items-center space-x-2 cursor-pointer text-sm"
                    >
                      <input
                        type="checkbox"
                        value={company.value}
                        checked={selectedCompanies.includes(company.value)}
                        onChange={() => toggleOption(company.value)}
                        className="accent-[#6290FF] w-4 h-4"
                      />
                      <span className="text-[#22272B] text-[13px]">{company.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-4 w-full">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-2 sm:p-3 text-gray-700 text-[13px] font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              required
            />
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="bg-white shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-2 sm:p-3 text-gray-700 text-[13px] font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              required
            />
            <div className="relative">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full bg-white shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-2 sm:p-3 text-[13px] text-[#22272BCC] appearance-none font-semibold pr-8 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M12.2188 16.2999L6.21875 10.2999L7.61875 8.8999L12.2188 13.4999L16.8188 8.8999L18.2188 10.2999L12.2188 16.2999Z" fill="#4E5B60" />
              </svg>
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-white shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-2 sm:p-3 font-semibold text-gray-700 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              required
            />
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-2 sm:p-3 text-gray-700 text-[13px] font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              required
            />
          </div>
          {/* Submit Button */}
          <button type="submit" className="w-full md:w-[400px] bg-[#46AEE3] hover:bg-[#1DAED9] text-white py-3 rounded-xl text-lg font-semibold transition cursor-pointer">
            Get a Free Quote
          </button>
        </form>
      </section>

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
};

export default HeroLife;