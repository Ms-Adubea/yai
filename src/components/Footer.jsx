import React from "react";
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">VeggiSlice Pro</h3>
            <p className="mt-4 text-base text-gray-300">
              Revolutionizing kitchen efficiency with innovative vegetable slicing solutions. 
              Made in Ghana, designed for the world.
            </p>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <FiPhone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-300">+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center">
                <FiMail className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-300">contact@veggieslicepro.com</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-300">Sankor, Central Region, Ghana</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
            <div className="mt-4 space-y-4">
              <a href="#product" className="block text-base text-gray-300 hover:text-white">Products</a>
              <a href="#innovator" className="block text-base text-gray-300 hover:text-white">About Innovator</a>
              <a href="#showcase" className="block text-base text-gray-300 hover:text-white">Showcase</a>
              <a href="#contact" className="block text-base text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 VeggiSlice Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;