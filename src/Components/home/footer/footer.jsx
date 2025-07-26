import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter,FaYoutube } from 'react-icons/fa'; // Added Twitter for the example
import './Footer.css';



function Footer() {
  return (
    <footer className="glass-footer">
      <div className="footer-main-content">
        <div className="footer-left">
          <h1 className="footer-com">TS Techy</h1>
          <p className="footer-email">Email: support@tstechy.com</p>
          <p className="footer-description">
  Boost your online visibility and climb the search rankings with TS Techy’s expert SEO services, crafted to deliver measurable results and sustainable growth.
</p>
          <div className="social-media">
            <a href="https://x.com/TS_Techy" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/@TSTechy_com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
  <FaYoutube />
</a>
            <a href="https://www.instagram.com/selva_ts_cube/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/selvendran-s-igreeny/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side: Link Columns */}
        <div className="footer-right">
          <div className="footer-links-column">
            <h4>Company</h4>
            <a href="/about">About Us</a>
            <a href="/services">Service</a>
            
          </div>
          <div className="footer-links-column">
            <h4>Help Center</h4>
            <a href="/faq">FAQ</a>
            <a href="/contact">Contact Us</a>
            
          </div>
          <div className="footer-links-column">
            <h4>Legal</h4>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar: Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 TS Techy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;