import React, { useState } from "react";
import { submitHealthInsuranceLead } from '../../api/healthApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const HeroHealth = () => {

    const [policyType, setPolicyType] = useState("new");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [existingDisease, setExistingDisease] = useState("");
    const [insurer, setInsurer] = useState("");
    const [claimStatus, setClaimStatus] = useState("");
    const [tenure, setTenure] = useState("");
    const [eldestAge, setEldestAge] = useState("");
    const [pincode, setPincode] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
        policy_type: policyType,
        adults,
        children,
        existing_disease: existingDisease,
        insurer,
        claim_status: claimStatus,
        tenure,
        eldest_age: eldestAge,
        pincode,
        name,
        email,
        phone
        };

        try {
        const response = await submitHealthInsuranceLead(data);
        console.log('Response:', response);
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
        {/* Health Hero Section Start */}

      <section className="w-full py-12 px-4 md:px-12 lg:px-24 bg-[linear-gradient(250deg,#24BDED_0%,#47B7FF_100%)]">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between relative">

            {/* Left - Form Section */}
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg w-full  p-8 lg:p-10 lg:pr-50 relative">
            <h2 className="text-[28px] md:text-[46px] font-semibold text-[#222] mb-2">Health Insurance</h2>
            <p className="text-[14px] md:text[16px] text-[#22272BCC] mb-6">Compare & Buy Best Fit Health Insurance</p>

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
                <span className="text-[#22272B] text-[12px] font-medium">New Policy</span>
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
                <span className="text-[#22272B] text-[12px] font-medium">Renew Your Policy</span>
                </label>
            </div>

            <div className="md:flex md:items-center gap-3 sm:gap-4  mb-4">
                {/* Adult Counter */}
                <div className="flex justify-between items-center md:w-[200px] md:h-[60px] bg-white shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] px-3 py-1 md:mb-0 mb-4 gap-2">
                <img src="/svg/adult.svg" className="w-[24x] h-[24px]" alt="Adult Icon" />
                <span className="text-[13px] text-[#22272BCC] font-semibold">Adult</span>
                <div className="flex">
                    <button
                    type="button"
                    className="text-lg font-bold flex items-center justify-center w-6 h-6 bg-[#EEE]"
                    onClick={() => setAdults(prev => Math.max(0, prev - 1))}
                >
                    <svg width="13" height="2" viewBox="0 0 13 2" fill="none" className="w-3 h-3">
                    <path d="M11.5898 0H0.589844C0.308594 0 0.0898438 0.25 0.0898438 0.5V1.5C0.0898438 1.78125 0.308594 2 0.589844 2H11.5898C11.8398 2 12.0898 1.78125 12.0898 1.5V0.5C12.0898 0.25 11.8398 0 11.5898 0Z" fill="#22272B" fillOpacity="0.6" />
                    </svg>
                </button>
                <span className="mx-2 text-[15px] text-[#22272BCC] font-semibold">{adults}</span>
                <button
                    type="button"
                    className="text-lg font-bold flex items-center justify-center w-6 h-6 bg-[#EEE]"
                    onClick={() => setAdults(prev => prev + 1)}
                >
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" className="w-3 h-3">
                    <path d="M11.5898 5H7.08984V0.5C7.08984 0.25 6.83984 0 6.58984 0H5.58984C5.30859 0 5.08984 0.25 5.08984 0.5V5H0.589844C0.308594 5 0.0898438 5.25 0.0898438 5.5V6.5C0.0898438 6.78125 0.308594 7 0.589844 7H5.08984V11.5C5.08984 11.7812 5.30859 12 5.58984 12H6.58984C6.83984 12 7.08984 11.7812 7.08984 11.5V7H11.5898C11.8398 7 12.0898 6.78125 12.0898 6.5V5.5C12.0898 5.25 11.8398 5 11.5898 5Z" fill="#22272B" fillOpacity="0.6" />
                    </svg>
                </button>
                </div>
                </div>

                {/* Children Counter */}
                <div className="flex justify-between bg-white shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] items-center md:w-[200px] md:h-[60px] px-3 py-1 gap-2">
                <img src="/svg/child.svg" className="w-[24x] h-[24px]" alt="Child Icon" />
                <span className="text-[13px] text-[#22272BCC] font-semibold">Child</span>
                <div className="flex">
                    <button
                    type="button"
                    className="text-lg font-bold flex items-center justify-center w-6 h-6 bg-[#EEE]"
                    onClick={() => setChildren(prev => Math.max(0, prev - 1))}
                >
                    <svg width="13" height="2" viewBox="0 0 13 2" fill="none" className="w-3 h-3">
                    <path d="M11.5898 0H0.589844C0.308594 0 0.0898438 0.25 0.0898438 0.5V1.5C0.0898438 1.78125 0.308594 2 0.589844 2H11.5898C11.8398 2 12.0898 1.78125 12.0898 1.5V0.5C12.0898 0.25 11.8398 0 11.5898 0Z" fill="#22272B" fillOpacity="0.6" />
                    </svg>
                </button>
                <span className="mx-2 text-[15px] text-[#22272BCC] font-semibold">{children}</span>
                <button
                    type="button"
                    className="text-lg font-bold flex items-center justify-center w-6 h-6 bg-[#EEE]"
                    onClick={() => setChildren(prev => prev + 1)}
                >
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" className="w-3 h-3">
                    <path d="M11.5898 5H7.08984V0.5C7.08984 0.25 6.83984 0 6.58984 0H5.58984C5.30859 0 5.08984 0.25 5.08984 0.5V5H0.589844C0.308594 5 0.0898438 5.25 0.0898438 5.5V6.5C0.0898438 6.78125 0.308594 7 0.589844 7H5.08984V11.5C5.08984 11.7812 5.30859 12 5.58984 12H6.58984C6.83984 12 7.08984 11.7812 7.08984 11.5V7H11.5898C11.8398 7 12.0898 6.78125 12.0898 6.5V5.5C12.0898 5.25 11.8398 5 11.5898 5Z" fill="#22272B" fillOpacity="0.6" />
                    </svg>
                </button>
                </div>
                </div>
            </div>

            {/* Select Fields */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-4">
                <div className="relative">
                <select
                    className="w-full bg-white shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-2 sm:p-3 text-[13px] font-semibold text-[#22272BCC] appearance-none pr-8 md:text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={existingDisease}
                    onChange={(e) => setExistingDisease(e.target.value)}
                    required
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
                    className="w-full bg-white shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-2 sm:p-3 text-[13px] font-semibold text-[#22272BCC] appearance-none pr-8 md:text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={insurer}
                    onChange={(e) => setInsurer(e.target.value)}
                    required
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
                    className="w-full bg-white shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-2 sm:p-3 text-[13px] font-semibold text-[#22272BCC] appearance-none pr-8 md:text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={claimStatus}
                    onChange={(e) => setClaimStatus(e.target.value)}
                    required
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
                    className="w-full bg-white shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-2 sm:p-3 text-[13px] font-semibold text-[#22272BCC] appearance-none pr-8 md:text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    required
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
                className="bg-white shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-2 sm:p-3 text-gray-700 text-[13px] font-semibold md:text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={eldestAge}
                onChange={(e) => setEldestAge(e.target.value)}
                required
                />

                <input
                type="text"
                placeholder="Pincode"
                className="bg-white shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-2 sm:p-3 text-gray-700 text-[13px] font-semibold md:text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                required
                />
                <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="bg-white shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-2 sm:p-3 text-gray-700 text-[13px] font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                        required
                />
                <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email ID"
                        className="bg-white shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-2 sm:p-3 text-gray-700 text-[13px] font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                        required
                />
                <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone Number"
                        className="bg-white shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] p-2 sm:p-3 font-semibold text-gray-700 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                        required
                    />
            </div>
            {/* Submit Button */}
            <button type="submit" className="w-full bg-[#24BDED] hover:bg-[#1DAED9] text-white py-3 rounded-xl text-lg font-semibold transition">
                Get a Free Quote
            </button>
            </form>

            {/* Right - Image */}
            <div className="w-full relative h-auto mb-3 mx-0 z-20
                        lg:top-[50px] lg:right-10">
            <img
                src="/images/hospital-bed.png"
                alt="Hospital Bed"
                className="object-contain w-full lg:w-[600px] lg:h-[550px]"
            />
            </div>
        </div>
    </section>

    <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    {/* Health Hero Section End */}

        </>

    )
}

export default HeroHealth