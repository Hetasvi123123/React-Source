import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#003161] shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link to="/"><h1>HetaraCode</h1></Link>

        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>
            <Link to="/" className="hover:text-[#86B0BD] font-bold transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/technologies" className="hover:text-[#86B0BD] font-bold transition-colors duration-300">
              Technologies
            </Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-[#86B0BD] font-bold transition-colors duration-300">
              Features
            </Link>
          </li>
            <li>
            <Link to="/contact" className="hover:text-[#86B0BD] font-bold transition-colors duration-300">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#003161] px-4 pb-4">
          <ul className="flex flex-col space-y-4 text-white font-medium">
            <li>
              <Link onClick={() => setIsOpen(false)} to="/" className="hover:text-[#86B0BD] font-bold transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsOpen(false)} to="/technologies" className="hover:text-[#86B0BD] font-bold transition-colors duration-300">
                Technologies
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsOpen(false)} to="/features" className="hover:text-[#86B0BD] font-bold transition-colors duration-300">
                Features
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
