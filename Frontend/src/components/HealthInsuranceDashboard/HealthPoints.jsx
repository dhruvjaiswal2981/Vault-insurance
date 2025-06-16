import React from "react";

const HealthPoints = () => {

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

    return (
        <>
        {/* Health Insuarance Point Start */}

        <div className="bg-[#F4F8FB] px-3 py-2 md:py-4 flex justify-center items-center">
            {/* Main section container */}
            <section
                className="w-full max-w-[1880px] h-full flex-shrink-0
                        bg-white rounded-[30px]  p-8 md:p-15 
                        flex flex-col items-center"
            >
                
                <h2
                className="text-center mb-16 md:mb-25
                            text-[28px] md:text-[46px] font-semibold text-[#22272B]" 
                >
                What to look for in Health Insurance?
                </h2>

                {/* Content Grid Desktop */}
                <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-y-8 lg:gap-x-24 max-w-5xl w-full px-4">
                    {points.map((point, index) => (
                    <div key={index} className="flex flex-col">
                    <h3 className="md:text-[18px] text-[14px] font-semibold text-[#222222] mb-2">
                        {point.title}
                    </h3>
                    <p className="text-[#22272BCC] md:text-[14px] text-[12px] leading-relaxed">
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
        {/* Health Insuarance Point End */}

        </>
    )
}

export default HealthPoints;