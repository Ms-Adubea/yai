import { FaBook, FaVideo, FaFileAlt, FaQuestionCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/AnimatedSection';

const Resources = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id="resources" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Resources</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Learn More About VeggiSlice Pro
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Everything you need to know about using and maintaining your vegetable slicer
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-2">
            {[
              {
                name: 'User Manual',
                description: 'Detailed instructions for assembly, operation, and maintenance of your VeggiSlice Pro.',
                icon: <FaBook className="h-8 w-8 text-green-500" />,
                link: '#'
              },
              {
                name: 'Video Tutorials',
                description: 'Watch step-by-step guides on how to use different blade attachments and cleaning procedures.',
                icon: <FaVideo className="h-8 w-8 text-green-500" />,
                link: '#'
              },
              {
                name: 'Recipe Book',
                description: "Discover creative recipes that make the most of your VeggiSlice Pro's capabilities.",
                icon: <FaFileAlt className="h-8 w-8 text-green-500" />,
                link: '#'
              },
              {
                name: 'FAQs',
                description: 'Find answers to common questions about usage, maintenance, and troubleshooting.',
                icon: <FaQuestionCircle className="h-8 w-8 text-green-500" />,
                link: '#'
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <motion.div 
                  className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0">
                    {resource.icon}
                  </div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {resource.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {resource.description}
                    </p>
                    <motion.a 
                      href={resource.link} 
                      className="mt-3 inline-flex items-center text-green-600 hover:text-green-800"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      Access resource →
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources; 