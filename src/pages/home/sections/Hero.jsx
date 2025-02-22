import React from "react";
import { Link } from "react-router-dom"
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="hero" className="relative pt-16 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[#CD7F32] opacity-20 z-10"></div>
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="/videos/gin-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="py-20 md:py-28 flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <motion.div 
            className="text-left md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span className="block">Transform Your</motion.span>
              <motion.span 
                className="block text-[#FFF3E0]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Ginger Processing
              </motion.span>
            </motion.h1>
            <motion.p 
              className="mt-3 max-w-md text-base text-white sm:text-lg md:mt-5 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Experience precision and efficiency with our innovative Ginger Slicer Machine - 
              designed for both home and commercial kitchens.
            </motion.p>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="w-full mb-4 sm:mb-0 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#CD7F32] bg-[#FFF3E0] hover:bg-white md:py-4 md:text-lg md:px-10"
                >
                  Order Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/about-product"
                  className="w-full flex items-center justify-center px-8 py-3 border border-[#FFF3E0] text-base font-medium rounded-md text-white hover:bg-[#B87333] md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div 
            className="hidden md:block md:w-1/2 pl-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img
              src="/images/img1.png"
              alt="Ginger Slicer Machine"
              className="w-full h-auto rounded-lg shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;