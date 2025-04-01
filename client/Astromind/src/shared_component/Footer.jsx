import React from "react";
import "./Footer.css"; // Include CSS for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Main Footer Section */}
      <div className="footer-content">
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li>About Astromind</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li>Humans in Space</li>
            <li>Earth & Climate</li>
            <li>The Solar System</li>
            <li>The Universe</li>
            <li>Science</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>3D model</li>
            <li>Virtual Simulation</li>
            <li>Courses</li>
            <li>Carrienr Guidance</li>
            <li>Virtual Lab </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow NASA</h4>
          <div className="social-icons">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Twitter</span>
            <span>YouTube</span>
          </div>
          <p>Astrominds Newsletters</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>
          Page Last Updated: Nov 20, 2024 | Page Editor: Dacia Massengill |
          Responsible NASA Official: Abigail Bowman
        </p>
        <ul className="footer-links">
          <li>Sitemap</li>
          <li>For Media</li>
          <li>Privacy Policy</li>
          <li>FOIA</li>
          <li>No FEAR Act</li>
          <li>Contact NASA</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
