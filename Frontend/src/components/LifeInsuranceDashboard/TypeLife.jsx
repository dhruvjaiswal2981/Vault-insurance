import React from "react";

const TypeLife = () => {
    return (
        <>
        {/* Type Life Section Start*/}  
        <div className="bg-gray-50 px-4 py-4 flex justify-center items-center"> 
            <section
                className="w-full max-w-[1880px] min-h-[700px] flex-shrink-0
                        rounded-[30px] bg-white p-8 shadow
                        flex flex-col items-center justify-center text-center"
            >
                <div className="mb-16 px-4 max-w-4xl">
                <h2 className="text-[28px] md:text-[46px] font-semibold text-[#202B32] mb-10">
                    Understand the Types of Life Insurance
                </h2>
                <p className="text-[#202B3299] text-[14px] md:text-[15px] leading-relaxed font-semibold">
                    Depending on your specific financial need you need to choose the right type of life 
                    <br/>insurance. Let’s map some of the common financial needs with suitable life insurance:
                </p>
                </div>

                {/* Cards Container1 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] md:gap-[100px] mb-2 md:mb-8">

                <div className="flex flex-col items-center max-w-sm">
                    <h3 className="md:text-[20px] text-[16px] text-[#202B32] font-semibold">
                    Term insurance is for 
                    <br/>financial protection of 
                    <br/>your dependents
                    </h3>
                </div>
                <div className="flex flex-col items-center max-w-sm">
                    <h3 className="md:text-[20px] text-[16px] text-[#202B32] font-semibold">
                    Child Plan gives you the 
                    <br/>opportunity to invest and secure 
                    <br/>your child’s financial future
                    </h3>
                </div>
                <div className="flex flex-col items-center max-w-sm">
                    <h3 className="md:text-[20px] text-[16px] text-[#202B32] font-semibold">
                    Retirement & pension 
                    <br/>plan helps you save 
                    <br/>for your retirement
                    </h3>
                </div>
                </div>

                {/* Cards Container2 */}
                <div className="hidden md:grid grid-cols-2 md:grid-cols-2 gap-[60px] mt-10">
                <div className="flex flex-col items-center max-w-sm">
                    <h3 className="md:text-[20px] text-[16px] text-[#202B32] font-semibold">
                    ULIP gives you the opportunity to 
                    <br/>grow your wealth by investing in 
                    <br/>the markets along with a life cover
                    </h3>
                </div>
                <div className="flex flex-col items-center max-w-sm">
                    <h3 className="md:text-[20px] text-[16px] text-[#202B32] font-semibold">
                    Endowment plan offers you 100% 
                    <br/>guaranteed15 returns on your 
                    <br/>investment along with a life cover
                    </h3>
                </div>
                </div>
            </section>
        </div>
        
        {/* Type Life Section End*/}
        
        </>
        
    )
}

export default TypeLife