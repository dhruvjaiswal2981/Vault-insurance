import React, { useState } from "react";
import { useLocation } from "react-router-dom";




const HeaderLife = () => {

    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
      
       
    
      const navLinks = [
        { name: "home", path: "/" },
        { name: "life insurance", path: "/life-insurance" },
        { name: "health insurance", path: "/health-insurance" },
        { name: "vehicle insurance", path: "/vehicle-insurance" },
        { name: "business insurance", path: "/business-insurance" },
      ];
    
      const isActive = (path) => location.pathname === path;
    

    return (
        <>
        <header className="w-full sticky z-50 bg-[linear-gradient(250deg,#24BDED_0%,#47B7FF_100%)]">
            <div className="flex items-center w-full px-8 justify-between py-5">
                {/* Logo */}
                <div className="flex items-center">
                <img
                    src="/images/Vault Insurance-03.png"
                    alt="Vault Insurance Logo"
                    className="h-8 w-auto flex-shrink-0"
                />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:inline-flex items-center gap-[40px] text-white">
                {navLinks.map(({ name, path }) => (
                    <a
                    key={name}
                    href={path}
                    className={`text-1lg font-medium transition-colors ${
                        isActive(path)
                        ? "border-b-2 border-white"
                        : "hover:text-blue-200"
                    } pb-1`}
                    >
                    {name}
                    </a>
                ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-white hover:text-gray-100 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    )}
                </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="lg:hidden bg-[#24BDED] bg-opacity-90 shadow-lg rounded-lg mt-2 mx-4">
                <nav className="flex flex-col">
                    {navLinks.map(({ name, path }) => (
                    <a
                        key={name}
                        href={path}
                        className={`px-4 py-3 text-lg font-medium text-white transition-colors ${
                        isActive(path)
                            ? "bg-blue-400 bg-opacity-10 border-l-4 border-blue-600"
                            : "hover:bg-blue-400 hover:bg-opacity-10"
                        }`}
                        onClick={() => setMenuOpen(false)}
                    >
                        {name}
                    </a>
                    ))}
                </nav>
                </div>
            )}
        </header>


        </>
    )
}
export default HeaderLife