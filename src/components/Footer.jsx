import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Import CSS for styling
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2>TechWiz<span>Lalit</span></h2>
          <p>Innovating the Future of Learning 🚀</p>
        </div>

        {/* Quick Links */}
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/subscription">Pricing</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Social Media */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TechWizLalit. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
