// import { FaUser, FaProductHunt, FaPhone, FaBook, FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


// const AboutInnovator = () => {
//     return (
//     //   <div className="p-10 border-b-2">
//     //     <h2 className="text-3xl font-bold text-blue-600">About the Innovator</h2>
//     //     <p className="mt-2 text-gray-700">Meet the visionary behind this project, dedicated to innovation and excellence.</p>
//     //   </div>

//     <div id="innovator" className="py-16 bg-gray-50">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="lg:text-center">
//         <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Our Story</h2>
//         <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//           Meet Our Founder
//         </p>
//       </div>
//       <div className="mt-16 lg:mt-24 lg:grid lg:grid-cols-3 lg:gap-16">
//         <div className="relative pb-10 lg:col-span-1">
//           <div className="h-64 w-64 rounded-full overflow-hidden mx-auto">
//             <img
//               src="/src/assets/images/Img-22.jpg"
//               alt="Founder"
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>
//         <div className="mt-10 sm:mt-0 lg:col-span-2">
//           <h3 className="text-2xl font-bold text-gray-900">Dr. Sarah Johnson</h3>
//           <p className="mt-3 text-lg text-gray-500">
//             With over 20 years of experience in technology and innovation, Dr. Johnson founded InnoTech with a vision to revolutionize how businesses leverage technology. Her groundbreaking research in artificial intelligence and machine learning has earned her numerous accolades in the tech industry.
//           </p>
//           <p className="mt-3 text-lg text-gray-500">
//             Before founding InnoTech, she led research teams at leading tech companies and published over 50 papers on advanced computing technologies. Dr. Johnson holds a PhD in Computer Science from MIT and continues to mentor young entrepreneurs in the tech space.
//           </p>
//           <div className="mt-6 flex space-x-4">
//             <a href="#" className="text-gray-400 hover:text-gray-500">
//               <FaTwitter className="h-5 w-5" />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-gray-500">
//               <FaLinkedin className="h-5 w-5" />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-gray-500">
//               <FaGithub className="h-5 w-5" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//     );
//   };
  
//   export default AboutInnovator;
  

import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/AnimatedSection';

const AboutInnovator = () => {
  return (
    <div id="innovator" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Story</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Innovator
            </p>
          </div>
        </AnimatedSection>
        
        <div className="mt-16 lg:mt-24 lg:grid lg:grid-cols-3 lg:gap-16 flex flex-col lg:flex-row items-start">
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src="/public/images/img1.png"
              alt="Founder"
              className="w-full h-auto object-contain rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2 mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              David Sam
            </motion.h3>
            <motion.p 
              className="mt-3 text-lg text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              David Sam, (18-35) Male innovator from Sankor, Central Region, addresses the challenge of the time-consuming and inconsistent process of manually slicing vegetables. This inefficiency can negatively impact food quality and increase workloads in both domestic and commercial kitchens. 
            </motion.p>
            <motion.p 
              className="mt-3 text-lg text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              David's innovation is a versatile Vegetable Slicer Machine designed for efficiency and uniformity. The machine features adjustable blades for different thicknesses and slicing styles, making it suitable for both home kitchens and commercial use. It is engineered for ease of use and quick cleaning, improving efficiency in food preparation.
            </motion.p>
            <motion.div 
              className="mt-6 flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { icon: <FaTwitter className="h-5 w-5" />, link: "#" },
                { icon: <FaLinkedin className="h-5 w-5" />, link: "#" },
                { icon: <FaGithub className="h-5 w-5" />, link: "#" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.link} 
                  className="text-gray-400 hover:text-green-500"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutInnovator;
