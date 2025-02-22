import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaCog, FaEnvelope, FaBook } from "react-icons/fa";
import { ImMenu3, ImCross } from "react-icons/im";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <nav className="bg-[#CD7F32] text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold">GingerSlice Pro</h1>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <ImCross size={24} /> : <ImMenu3 size={24} />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <button onClick={() => scrollToSection('hero')} className="flex items-center hover:text-[#FFF3E0]">
                <FaHome className="mr-1"/> Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('product')} className="flex items-center hover:text-[#FFF3E0]">
                <FaCog className="mr-1"/> Product
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('innovator')} className="flex items-center hover:text-[#FFF3E0]">
                <FaInfoCircle className="mr-1"/> Innovator
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('showcase')} className="flex items-center hover:text-[#FFF3E0]">
                <FaCog className="mr-1"/> Showcase
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('resources')} className="flex items-center hover:text-[#FFF3E0]">
                <FaBook className="mr-1"/> Resources
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="flex items-center hover:text-[#FFF3E0]">
                <FaEnvelope className="mr-1"/> Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden"
            >
              <ul className="flex flex-col items-center space-y-4 py-4">
                <li>
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="flex items-center hover:text-[#FFF3E0]"
                  >
                    <FaHome className="mr-1"/> Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('product')}
                    className="flex items-center hover:text-[#FFF3E0]"
                  >
                    <FaCog className="mr-1"/> Product
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('innovator')}
                    className="flex items-center hover:text-[#FFF3E0]"
                  >
                    <FaInfoCircle className="mr-1"/> Innovator
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('showcase')}
                    className="flex items-center hover:text-[#FFF3E0]"
                  >
                    <FaCog className="mr-1"/> Showcase
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('resources')}
                    className="flex items-center hover:text-[#FFF3E0]"
                  >
                    <FaBook className="mr-1"/> Resources
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="flex items-center hover:text-[#FFF3E0]"
                  >
                    <FaEnvelope className="mr-1"/> Contact
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
