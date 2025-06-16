import React from "react";
 
const HealthBenefits = () => {

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
        {/*Benfits Insuarance Section Start*/}

        <div className="bg-[#F4F8FB]  mx-4 flex justify-center items-center mb-2">
            {/* Main section container */}
            <section
                className="w-full max-w-[1880px] flex-shrink-0
                        rounded-[30px] p-5 md:p-20 opacity-90
                        flex flex-col items-center justify-center"
                style={{
                background: 'linear-gradient(250deg, #24BDED 0%, #47B7FF 100%)',
                }}
            >
                {/* Heading */}
                <h2
                className="text-white text-center mb-16 md:mb-20
                            text-[28px] md:text-[46px] font-semibold"
                >
                Benefits of Health Insurance
                </h2>

                {/* Content Grid Desktop */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-12 lg:gap-x-20 lg:gap-y-16 max-w-7xl w-full px-4">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex flex-col text-white">
                    <h3 className="md:text-[18px] text-[14px] font-semibold mb-2">
                        {benefit.title}
                    </h3>
                    <p className="md:text-[15px] text-[14px] leading-relaxed opacity-90">
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
                    <p className="text-[14px] md:text-[20px] leading-relaxed opacity-90">
                        {benefit.description}
                    </p>
                    </div>
                ))}
                </div>
            </section>
        </div>

        {/*Benfits Insuarance Section End*/}

        </>
    )
}

export default HealthBenefits;