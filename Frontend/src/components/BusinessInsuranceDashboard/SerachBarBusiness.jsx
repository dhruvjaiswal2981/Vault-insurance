import React ,{useState,useMemo} from "react";

const allInsuranceTypes = [
  {
    category: 'liability',
    title: 'Directors & Officers Insurance',
    description: 'Protects executives from personal liability for business decisions and actions',
  },
  {
    category: 'liability',
    title: 'Professional Indemnity Insurance',
    description: 'Protect the company from client disputes efficiently',
  },
  {
    category: 'liability', 
    title: 'Commercial General Liability Insurance',
    description: 'Protects against third-party claims',
  },
  {
    category: 'liability',
    title: 'Product Liability Insurance',
    description: 'Protects against claims of injury or damage from your products',
  },
  {
    category: 'liability', 
    title: 'Cyber Insurance',
    description: 'Actively shields from costs arising from cyber breaches',
  },
  {
    category: 'liability',
    title: 'Workmen Compensation Insurance',
    description: 'Provide a financial safety net for your employees',
  },
  // Property Types
  {
    category: 'property',
    title: 'Fire Insurance',
    description: 'Protect your property and assets from fire',
  },
  {
    category: 'property',
    title: 'Fire Loss of Profit Insurance',
    description: 'Cover your business even after a fire',
  },
  {
    category: 'property',
    title: 'Machinery Breakdown Insurance',
    description: 'Let insurance pay for repairing your machines',
  },
  {
    category: 'property',
    title: 'Machinery Loss of Profit Insurance',
    description: 'Protect your balance sheet from losses from machinery breakdown',
  },
  {
    category: 'property',
    title: 'Office Package Insurance',
    description: 'Secure office premises and infrastructure',
  },
  // Engineering Types
  {
    category: 'engineering', 
    title: 'Contractors All Risk Policy',
    description: 'Protects construction sites against various risks',
  },
  {
    category: 'engineering', 
    title: 'Erection All Risk Insurance',
    description: 'Protects against installation and erection risks',
  },
  {
    category: 'engineering', 
    title: 'Contractors Plant and Machinery Insurance',
    description: 'Protects contractors and their machinery during construction',
  },
  // Employee Types
  {
    category: 'employee', 
    title: 'Group Health Insurance',
    description: 'Protect all your employees from medical emergencies',
  },
  {
    category: 'employee', 
    title: 'Group Personal Accident Insurance',
    description: 'Protect your employees from accidents at the workplace',
  },
];

const allInsuranceTypes1 = [
  {
    category: 'liability',
    title: 'Directors & Officers Insurance',
    description: 'Protects executives from personal liability for business decisions and actions',
  },
  {
    category: 'liability',
    title: 'Professional Indemnity Insurance',
    description: 'Protect the company from client disputes efficiently',
  },
  // Property Types
  {
    category: 'property',
    title: 'Fire Insurance',
    description: 'Protect your property and assets from fire',
  },
  {
    category: 'property',
    title: 'Fire Loss of Profit Insurance',
    description: 'Cover your business even after a fire',
  },
  // Engineering Types
  {
    category: 'engineering', 
    title: 'Contractors All Risk Policy',
    description: 'Protects construction sites against various risks',
  },
  {
    category: 'engineering', 
    title: 'Erection All Risk Insurance',
    description: 'Protects against installation and erection risks',
  },
  // Employee Types
  {
    category: 'employee', 
    title: 'Group Health Insurance',
    description: 'Protect all your employees from medical emergencies',
  },
  {
    category: 'employee', 
    title: 'Group Personal Accident Insurance',
    description: 'Protect your employees from accidents at the workplace',
  },
];


const SerachBarBusiness = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('liability');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredInsuranceTypes = useMemo(() => {
        let filtered = allInsuranceTypes;


        // Filter by category first if an active category is selected
        if (activeCategory) {
        filtered = filtered.filter(type => type.category === activeCategory);
        }

        // Then apply search term filter
        if (searchTerm) {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        filtered = filtered.filter(
            (type) =>
            type.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            type.description.toLowerCase().includes(lowerCaseSearchTerm)
        );
        }
        return filtered;
    }, [searchTerm, activeCategory]);

    const filteredInsuranceTypes1 = useMemo(() => {
        let filtered = allInsuranceTypes1;


        // Filter by category first if an active category is selected
        if (activeCategory) {
        filtered = filtered.filter(type => type.category === activeCategory);
        }

        // Then apply search term filter
        if (searchTerm) {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        filtered = filtered.filter(
            (type) =>
            type.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            type.description.toLowerCase().includes(lowerCaseSearchTerm)
        );
        }
        return filtered;
    }, [searchTerm, activeCategory]);


    const categories = ['liability', 'property', 'engineering', 'employee'];
    
    return (
        <>
        {/* Search Bar Start */}
        <section className="bg-[#F4F8FB] w-full flex justify-center items-start  pt-12 md:pt-15"> 
          <div className="relative mb-8 md:mb-12 flex justify-center">
            
            <input
              type="text"
              placeholder="Search &quot;General Liability Insurance&quot;"
              className="w-auto md:w-[380px] h-[60px] px-6 pl-15 rounded-[10px] bg-white text-gray-700 shadow-[10px_10px_40px_0px_rgba(26,129,255,0.10)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <svg
              
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </section>
        {/* Search Bar End */}
        
      {/* Category Navigation Desktop Start*/}
      <section className="bg-[#F4F8FB] w-full flex flex-col justify-center pb-5">
        <div className="md:bg-[#FFFFFF] p-10 rounded-[30px] md:mx-5">
          <nav className="flex justify-center space-x-6 md:space-x-12 mb-10 text-gray-600 font-medium text-[12px] md:text-[16px]">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pb-1 border-b-2 transition-colors duration-200 cursor-pointer ${ 
                activeCategory === cat
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent hover:border-gray-300 hover:text-gray-800'
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Insurance Type Grid Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInsuranceTypes.length > 0 ? (
            filteredInsuranceTypes.map((type, index) => (
              <div key={index} className="bg-white p-6">
                <h3 className="md:text-[18px] text-[15px] font-semibold text-gray-800 mb-2 text-center">{type.title}</h3>
                <p className="text-gray-600 md:text-[14px] text-[12px] text-center">{type.description}</p>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg">
              No insurance types found for the current selection.
            </div>
          )}
        </div>

        {/* Insurance Type Grid Mobile */}
        <div className="md:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInsuranceTypes1.length > 0 ? (
            filteredInsuranceTypes1.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl shadow">
                <h3 className="md:text-[18px] text-[15px] font-semibold text-gray-800 mb-2 text-center">{type.title}</h3>
                <p className="text-gray-600 md:text-[14px] text-[12px] text-center">{type.description}</p>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg">
              No insurance types found for the current selection.
            </div>
          )}
        </div>

        </div>
      </section>
      {/* Category Navigation End */}
        </>
    )
}

export default SerachBarBusiness;