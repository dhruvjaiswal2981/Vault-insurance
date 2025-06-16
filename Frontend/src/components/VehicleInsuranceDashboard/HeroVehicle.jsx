import React, { useState } from "react";

const HeroVehicle = () => {

    
    const [policyType, setPolicyType] = useState("new");
    const [vehicleNumber, setVehicleNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Policy Type:", policyType);
        console.log("Vehicle Number:", vehicleNumber);
        // Add your form submission logic here
    };

    return (
        <>
        {/* Hero Section start*/}

        <section className="relative w-full py-12 px-4 md:px-12 lg:px-24
                        bg-[linear-gradient(250deg,#24BDED_0%,#47B7FF_100%)]
                        overflow-hidden
                        flex flex-col justify-center">
            <div
                className="relative w-full h-auto mb-3 mx-auto z-20
                        absolute  lg:top-[90px] lg:left-[600px]"
            >
                <img
                src="/images/Vehicle Insurance.png"
                alt="vehicle-insurance"
                className="object-contain w-auto lg:w-[600px] lg:h-[550px]"
                
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className="relative  max-w-[780px] h-auto p-8 md:p-12 mx-auto
                        bg-white rounded-[30px] shadow-2xl z-10
                        flex flex-col justify-start items-start
                        lg:absolute lg:w-[700px] lg:h-[540px] lg:top-[50px] lg:left-[60px]"
            >
                <h2 className="text-[28px] md:text-[46px] font-semibold text-[#222] mb-1">Vehicle Insurance</h2>
                <p className="text-[14px] md:text-[16px] text-[#22272BCC] mb-8">Compare & Buy Best Fit Vehicle Insurance</p>

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

    </>
    )
}

export default HeroVehicle;