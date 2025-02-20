import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaCog, FaEnvelope, FaBook } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">VeggiSlice Pro</h1>
        <ul className="flex flex-wrap justify-center space-x-4">
          <li><Link to="/" className="flex items-center hover:text-green-200"><FaHome className="mr-1"/> Home</Link></li>
          <li><Link to="/about-product" className="flex items-center hover:text-green-200"><FaCog className="mr-1"/> Product</Link></li>
          <li><Link to="/about-innovator" className="flex items-center hover:text-green-200"><FaInfoCircle className="mr-1"/> Innovator</Link></li>
          <li><Link to="/showcase" className="flex items-center hover:text-green-200"><FaCog className="mr-1"/> Showcase</Link></li>
          <li><Link to="/contact" className="flex items-center hover:text-green-200"><FaEnvelope className="mr-1"/> Contact</Link></li>
          <li><Link to="/resources" className="flex items-center hover:text-green-200"><FaBook className="mr-1"/> Resources</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
