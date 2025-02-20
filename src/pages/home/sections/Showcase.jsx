// import React from "react";

// const Showcase = () => {
//   return (
//     <div className="p-6 flex justify-center items-center align-middle h-[60vh] border-b-2">
//       <h4 className="text-4xl font-bold">Product / Service Showcase</h4>
//     </div>
//   );
// };

// export default Showcase;

import { FaLeaf, FaClock, FaCog } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/AnimatedSection';

const Showcase = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div id="showcase" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Product Showcase</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              VeggiSlice Pro in Action
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              See how our innovative vegetable slicer transforms kitchen workflows
            </p>
          </div>
        </AnimatedSection>

        <motion.div 
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              name: 'Professional Kitchen Model',
              description: 'High-capacity slicing for commercial kitchens and restaurants',
              image: '/src/assets/images/fruit.jpg'
            },
            {
              name: 'Home Kitchen Model',
              description: 'Compact and efficient design perfect for home use',
              image: '/src/assets/images/groceries.jpg'
            },
            {
              name: 'Multiple Blade Options',
              description: 'Various blade attachments for different cutting styles',
              image: '/src/assets/images/img2.jpg'
            }
          ].map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  className="h-48 w-full object-cover" 
                  src={product.image} 
                  alt={product.name}
                />
              </motion.div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {product.name}
                  </motion.h3>
                  <p className="mt-3 text-base text-gray-500">{product.description}</p>
                </div>
                <motion.div 
                  className="mt-6"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.a 
                    href="#contact" 
                    className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Learn more →
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Showcase;
  