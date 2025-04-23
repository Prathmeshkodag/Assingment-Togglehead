import React from 'react';
import '../assets/css/Footer.css';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram, FaLinkedin, FaTrain, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import { SiQase } from 'react-icons/si';
import { RiMapPin2Fill } from 'react-icons/ri';
import { LuAlarmClock } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 Address: amet, consetetur sadipscing elitr, sed diam</p>
          <p>✉️ Email: eirmod tempor invidunt ut labore et dolore</p>
          <p>📞 Phone: 123456789</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <CiFacebook  size={40}/>
            <FaInstagram size={40}/>
            <FaLinkedin size={40}/>
            <FaTwitterSquare size={40}/>
            <FaYoutube size={40}/>
            <SiQase size={40}/>
          </div>
        </div>

        <div className="footer-section">
          <h3>Head Office</h3>
          <ul className="office-info">
            <li><RiMapPin2Fill size={25}/> Lorem ipsum dolor sit amet</li>
            <li><LuAlarmClock size={25}/> Mon - Fri: 9:00 AM - 6:00 PM</li>
            <li><LuAlarmClock size={25}/> Sat: 10:00 AM - 4:00 PM</li>
            <li><FaTrain size={25}/> Near Central Station</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 All Rights Reserved. <a href="/privacy">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
