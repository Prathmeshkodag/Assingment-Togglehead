import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import '../assets/css/Navbar.css';

const navItems = [
  { label: "Qualifications ",icon:<IoIosArrowDown />, href: "#" },
  { label: "Organizations ",icon:<IoIosArrowDown />, href: "#" },
  { label: "Research & Analysis ",icon:<IoIosArrowDown />, href: "#" },
  { label: "Lorem ipsum ", icon:<IoIosArrowDown />,href: "#" },
  { label: "Lorem ipsum ",icon:<IoIosArrowDown />, href: "#" },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}{item.icon}</a>
          </li>
        ))}

        <li><FaSearch className="icon search-icon" /></li>
        <li><button className="enrol-btn">Enrolment</button></li>
      </ul>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
