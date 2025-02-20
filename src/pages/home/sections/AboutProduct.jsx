import React from "react";
import { FaUser, FaProductHunt, FaPhone, FaBook, FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaLeaf, FaClock, FaCog, FaTools, FaHome, FaIndustry } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/AnimatedSection';

const AboutProduct = () => {
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    // <div className="p-6 flex justify-center items-center align-middle h-[60vh] border-b-2">
    //   <h4 className="text-4xl font-bold text-blue-600">
    //     About the Products and / or Services
    //   </h4>

    //   <div className="p-10 border-b-2">
    //   <h2 className="text-3xl font-bold text-blue-600">About the Product</h2>
    //   <p className="mt-2 text-gray-700">Our product is designed to solve real-world problems with cutting-edge technology.</p>
    // </div>

    <div id="product" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Vegetable Slicer Machine
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A versatile solution for efficient and uniform vegetable slicing
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {[
              {
                name: 'Adjustable Blades',
                description: 'Multiple thickness settings for various slicing styles and preferences.',
                icon: <FaCog className="h-8 w-8 text-green-500" />
              },
              {
                name: 'Time-Saving',
                description: 'Significantly reduces food preparation time compared to manual slicing.',
                icon: <FaClock className="h-8 w-8 text-green-500" />
              },
              {
                name: 'Consistent Results',
                description: 'Uniform slices every time, ensuring professional presentation.',
                icon: <FaLeaf className="h-8 w-8 text-green-500" />
              },
              {
                name: 'Easy Maintenance',
                description: 'Quick and simple cleaning process for maximum efficiency.',
                icon: <FaTools className="h-8 w-8 text-green-500" />
              },
              {
                name: 'Home Kitchen Use',
                description: 'Perfect for domestic kitchens and family meal preparation.',
                icon: <FaHome className="h-8 w-8 text-green-500" />
              },
              {
                name: 'Commercial Grade',
                description: 'Durable design suitable for restaurant and industrial use.',
                icon: <FaIndustry className="h-8 w-8 text-green-500" />
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {feature.icon}
                </motion.div>
                <div className="ml-4">
                  <motion.h3 
                    className="text-lg leading-6 font-medium text-gray-900"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {feature.name}
                  </motion.h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;