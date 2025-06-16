import React, { useState } from "react";
import { submitBusinessQuote } from '../../api/businessApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HeroBusiness = () => {

    const [name, setName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [mobile, setMobileNumber] = useState("");
    const [product, setProduct] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
        name,
        business_name: businessName,
        mobile_number: mobile,
        product_type: product,
        email
    };

    try {
        const response = await submitBusinessQuote(data);
        console.log('Response:', response);
        toast.success('🎉 Business Quote submitted successfully! Our team will contact you shortly.', {
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
        {/*Hero Section Start*/}

        <section className="relative flex flex-col-reverse md:flex-row items-center min-h-screen bg-gradient-to-b from-[#9D6FFF] to-[#6290FF] px-6 md:px-20 py-10">


                  {/* Left Container */}
                  <div
                    className="relative z-10 bg-white opacity-90 rounded-[30px] p-6 sm:p-10 md:p-10 shadow-xl
                              w-full md:w-[1400px] h-full font-sans flex flex-col justify-start md:mr-10 md:pr-60"
                  >
                    <h2 className="text-black font-semibold text-[36px] md:text-[40px] leading-tight mb-3">
                      Business Insurance
                    </h2>
                    <p className="text-gray-600 text-[16px] md:text-[18px] mb-10">
                      Enter details and get a quote for your business
                    </p>

                    <form 
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-5 max-w-full md:max-w-[550px]">
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-[60px] shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-4 rounded-lg  focus:outline-none focus:ring-2 focus:ring-purple-400 text-base text-gray-700 placeholder-gray-400"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Business Name"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full h-[60px] shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-4 rounded-lg  focus:outline-none focus:ring-2 focus:ring-purple-400 text-base text-gray-700 placeholder-gray-400"
                        required
                      />
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-full h-[60px] shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-base text-gray-700 placeholder-gray-400"
                        required
                      />
                      <div className="relative w-full h-[60px] shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)]">
                        <select
                          value={product}
                          onChange={(e) => setProduct(e.target.value)}
                          className="appearance-none w-full h-full p-4 rounded-lg  focus:outline-none focus:ring-2 focus:ring-purple-400 text-base text-gray-700 placeholder-gray-400 pr-10 cursor-pointer"
                          required
                        >
                          <option value="">Product Type</option>
                          <option value="retail">Retail Business</option>
                          <option value="service">Service Business</option>
                          <option value="manufacturing">Manufacturing Business</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email ID"
                        className="md:w-[200px] h-[60px] shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-4 rounded-lg  focus:outline-none focus:ring-2 focus:ring-purple-400 text-base text-gray-700 placeholder-gray-400 sm:col-span-2"
                        required
                      />
                      <div className="sm:col-span-2 mt-4 flex justify-center md:justify-start">
                        <button
                          type="submit"
                          className="w-full sm:w-[501px] py-6 px-12 bg-[#8B6BE7] text-white rounded-xl text-lg font-semibold shadow-md hover:bg-purple-700 transition md:mb-20"
                        >
                          Get a Free Quote
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Right Container - Image Overlapping from Right */}
                  <div
                    className="relative w-full h-auto mb-3 mx-auto z-20
                              absolute  lg:top-[50px] lg:right-[200px]"
                  >
                    <img
                      src="/images/Business home.png"
                      alt="Shop Illustration"
                      className="object-contain w-auto lg:w-full lg:h-[550px]"
                      
                    />
                  </div>
      </section>
      {/*Hero Section End*/}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </>
    )
}

export default HeroBusiness;