import { FaUser, FaProductHunt, FaPhone, FaBook, FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/AnimatedSection';
// import React from "react";

// const Contact = () => {
//   return (
//     <div className="p-6 flex justify-center items-center align-middle h-[60vh] border-b-2">
//       <h4 className="text-4xl font-bold">
//         Contact information and / or Contact Form
//       </h4>
//     </div>
//   );
// };

// export default Contact;


const Contact = () => {
  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  return (
    <div id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Contact Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get Your VeggiSlice Pro
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Interested in transforming your kitchen workflow? Reach out to us today.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              {[
                { label: 'Name', type: 'text', placeholder: 'Your name' },
                { label: 'Email', type: 'email', placeholder: 'you@example.com' },
                { label: 'Phone Number', type: 'tel', placeholder: 'Your phone number' }
              ].map((field, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <label htmlFor={field.label.toLowerCase()} className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  <div className="mt-1">
                    <motion.input
                      type={field.type}
                      name={field.label.toLowerCase()}
                      id={field.label.toLowerCase()}
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder={field.placeholder}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Tell us about your needs"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div 
            className="mt-10 lg:mt-0"
            variants={infoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="rounded-lg bg-gray-50 shadow-md overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
                <div className="mt-6 space-y-6">
                  {[
                    { 
                      icon: <FiPhone className="h-6 w-6 text-green-500" />,
                      title: "+233 XX XXX XXXX",
                      subtitle: "Mon-Fri, 9AM-5PM GMT"
                    },
                    {
                      icon: <FiMail className="h-6 w-6 text-green-500" />,
                      title: "contact@veggieslicepro.com",
                      subtitle: "We'll respond within 24 hours"
                    },
                    {
                      icon: <FiMapPin className="h-6 w-6 text-green-500" />,
                      title: "Sankor",
                      subtitle: "Central Region, Ghana"
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div 
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div className="ml-3 text-base text-gray-500">
                        <p>{item.title}</p>
                        <p className="mt-1">{item.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
  