import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Life Insurance", path: "/life-insurance" },
    { name: "Health Insurance", path: "/health-insurance" },
    { name: "Vehicle Insurance", path: "/vehicle-insurance" },
    { name: "Business Insurance", path: "/business-insurance" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white py-4 px-4 shadow-none sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/Vault Insurance-01.png"
            alt="Vault Insurance Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ name, path }) => (
            <a
              key={name}
              href={path}
              className={`text-xl font-medium transition-colors ${
                isActive(path)
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-[#22272b99] hover:text-blue-600"
              } pb-1`}
            >
              {name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
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

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          {navLinks.map(({ name, path }) => (
            <a
              key={name}
              href={path}
              className={`block px-4 py-3 text-lg font-medium transition-colors ${
                isActive(path)
                  ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                  : "text-[#22272b99] hover:text-blue-600 hover:bg-blue-50"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
