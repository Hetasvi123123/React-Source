import React, { useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-black text-white py-10" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
          {/* Logo / Brand */}
          <div>
            <Link to="/" className="flex items-center">
              <img
                src="/assets/img/logo.jpeg"
                alt="Logo"
                className="h-6 sm:h-7 md:h-8 lg:h-9 object-contain"
              />
            </Link>
            <p className="mt-2 text-gray-300">Building modern web experiences.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul>
                <li className="hover:text-gray-400 cursor-pointer">About Us</li>
                <li className="hover:text-gray-400 cursor-pointer">Careers</li>
                <li className="hover:text-gray-400 cursor-pointer">Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Support</h3>
              <ul>
                <li className="hover:text-gray-400 cursor-pointer">Help Center</li>
                <li className="hover:text-gray-400 cursor-pointer">Contact</li>
                <li className="hover:text-gray-400 cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <FaFacebookF className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
            <FaTwitter className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
            <FaInstagram className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
            <FaLinkedinIn className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} HetaraCode. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
