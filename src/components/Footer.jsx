import React from "react";
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#B87333]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-sm font-semibold text-[#FFF3E0] tracking-wider uppercase">GingerSlice Pro</h3>
            <p className="mt-4 text-base text-white">
              Revolutionizing kitchen efficiency with innovative ginger slicing solutions. 
              Made in Ghana, designed for the world.
            </p>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-[#FFF3E0] hover:text-white">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#FFF3E0] hover:text-white">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#FFF3E0] hover:text-white">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#FFF3E0] tracking-wider uppercase">Contact</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <FiPhone className="h-5 w-5 text-[#FFF3E0] mr-2" />
                <span className="text-white">+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center">
                <FiMail className="h-5 w-5 text-[#FFF3E0] mr-2" />
                <span className="text-white">contact@gingerslicepro.com</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="h-5 w-5 text-[#FFF3E0] mr-2" />
                <span className="text-white">Sankor, Central Region, Ghana</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#FFF3E0] tracking-wider uppercase">Quick Links</h3>
            <div className="mt-4 space-y-4">
              <a href="#product" className="block text-base text-white hover:text-[#FFF3E0]">Products</a>
              <a href="#innovator" className="block text-base text-white hover:text-[#FFF3E0]">About Innovator</a>
              <a href="#showcase" className="block text-base text-white hover:text-[#FFF3E0]">Showcase</a>
              <a href="#contact" className="block text-base text-white hover:text-[#FFF3E0]">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-[#FFF3E0] pt-8">
          <p className="text-base text-[#FFF3E0] text-center">
            © 2024 GingerSlice Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;