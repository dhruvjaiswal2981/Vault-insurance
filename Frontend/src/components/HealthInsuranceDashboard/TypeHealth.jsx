import React from "react";

const TypeHealth = () => {
    return (
        <>
        {/* Health Type Section  Start*/}  
        <div className="bg-[#F4F8FB] px-3 py-4 flex justify-center items-center"> 
            <section
                className="w-full max-w-[1880px] min-h-[793px] flex-shrink-0
                        rounded-[30px] bg-white p-8 md:p-12 lg:p-24
                        flex flex-col items-center justify-center text-center"
            >
                <div className="mb-16 px-4 max-w-4xl">
                <h1 className="text-[28px] md:text-[46px] font-semibold text-[#22272B] mb-10">
                    Health Insurance & its Type
                </h1>
                <p className="text-[#22272BCC] text-[14px] md:text-[15px] leading-relaxed">
                    Health Insurance is also known as Mediclaim. It helps you to cover expenses related to
                    hospitalisation arising out of any accident or medical disease. Once you buy Health Insurance,
                    all or part of your expenses incurred in hospital will be paid by the insurance company.
                </p>
                </div>

                {/* Cards Container */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12 px-4 w-full">

                {/* Card 1: Individual Health Insurance */}
                <div className="flex flex-col items-center max-w-sm h-[">
                    <img
                    src="/svg/individual-icon.svg"
                    alt="Individual Icon"
                    className="w-16 h-16 flex-shrink-0 mb-6 text-blue-500" 
                    />
                    <h3 className="text-[16px] md:text-[20px] font-semibold text-[#222] mb-5">
                    Individual Health Insurance
                    </h3>
                    <p className="text-[#22272BCC] text-[14px] md:text-[15px] leading-relaxed">
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
                    <h3 className="text-[16px] md:text-[20px] font-semibold text-[#222] mb-6">
                    Family Floater Health Insurance
                    </h3>
                    <p className="text-[#22272BCC] text-[14px] md:text-[15px] leading-relaxed">
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
                    <h3 className="text-[16px] md:text-[20px] font-semibold text-[#222] mb-4">
                    Group Health Insurance
                    </h3>
                    <p className="leading-relaxed text-[#22272BCC] text-[14px] md:text-[15px]">
                    Group Policy is mainly designed for corporates where group of employees are working together. This policy is offered to employees at a very low cost premium.
                    </p>
                </div>

                </div>
            </section>
        </div>
        {/* Health Type Section  END*/}  

        </>
    )
}

export default TypeHealth;