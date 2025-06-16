import React from "react";

const TypeVehicle = () => {
    return (
        <>
        {/* Type Vehicle Section start*/} 


        <div className="bg-[#F4F8FB] px-3 py-4 flex justify-center items-center"> 
            <section
                className="w-full max-w-[1880px] min-h-[793px] flex-shrink-0
                        rounded-[30px] bg-white p-8 md:p-12 lg:p-24 shadow
                        flex flex-col items-center justify-center text-center"
            >
                <div className="mb-16 px-4 max-w-4xl">
                <h3 className="text-[28px] md:text-[40px] font-semibold text-[#22272B] mb-10">
                    Vehicle Insurance & its Type
                </h3>
                <p className="text-[#22272BCC] text-[14px] md:text-[15px] leading-relaxed">
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
                    className="w-12 h-12 flex-shrink-0 mb-6 text-blue-500" 
                    />
                    <h3 className="text-[16px] md:text-[20px] font-semibold text-[#222] mb-4">
                    Comprehensive
                    </h3>
                    <p className="text-[#22272BCC] text-[14px] md:text-[15px] leading-relaxed">
                    Comprehensive insurance offers the broadest protection. It covers third-party liabilities (damage to someone else or their property) as well as damages to your own vehicle, regardless of who is at fault. This includes accidents, theft, fire, natural disasters, and vandalism, providing a complete safety net for your vehicle and potential liabilities.
                    </p>
                </div>

                {/* Card 3: own-damage Vehicle Insurance */}

                <div className="flex flex-col items-center max-w-sm">
                    
                    <img
                    src="/svg/family-icon.svg" 
                    alt="Family Icon"
                    className="w-12 h-12 flex-shrink-0 mb-6 text-blue-500"
                    />
                    <h3 className="text-[16px] md:text-[20px] font-semibold text-[#222] mb-4">
                    Own Damage
                    </h3>
                    <p className="text-[#22272BCC] text-[14px] md:text-[15px] leading-relaxed">
                    Own damage insurance specifically focuses on covering damages to your own insured vehicle. This includes losses or damages caused by accidents, theft, fire, natural calamities, and other specified perils. It does not cover any liability towards third parties. This type of policy is often chosen by those who want to protect their own vehicle but may not be legally required or choose not to have third-party coverage.
                    </p>
                </div>

                {/* Card 3: third-party Vehicle Insurance */}
                <div className="flex flex-col items-center max-w-sm">
                    
                    <img
                    src="/images/group-icon.png" 
                    alt="Group Icon"
                    className="w-12 h-12 flex-shrink-0 mb-6 text-blue-500"
                    />
                    <h3 className="text-[16px] md:text-[20px] font-semibold text-[#222] mb-4">
                    Third-Party
                    </h3>
                    <p className="leading-relaxed text-[#22272BCC] text-[14px] md:text-[15px]">
                    Third-party insurance is the most basic and legally mandated form of motor insurance in many places, including India. It provides coverage for the financial losses you might cause to a third party due to an accident involving your vehicle. This includes damages to their property, injury, or even death. It does not, however, cover any damages to your own vehicle.
                    </p>
                </div>

                </div>
        </section>
    </div>
    
    {/* Type Vehicle Section end*/} 

        </>
    )
}

export default TypeVehicle; 