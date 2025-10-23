import React from "react";
import "../styles/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* ===== Top Section ===== */}
      <div className="footer-top">
        <div className="footer-container">
          {/* Column 1 */}
          <div className="footer-column footer-col1">
            <h2 className="footer-heading">
              Making Dreams Come True of Millions of <br />
              Low & Mid-Income Groups
            </h2>
          </div>

          {/* Column 2 */}
          <div className="footer-column footer-col2">
            <h4 className="footer-title">Address</h4>
            <p>
              <FaMapMarkerAlt className="icon" />
              #23, First Floor, Next to Sultan Travels, Sathgalli Circle,
              Satellite Bus Stand, Ring Road, Mysuru – 570019,
              <br />
              Karnataka, India
            </p>

            <div className="social-links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Column 3 */}
          <div className="footer-column footer-col3">
            <h4 className="footer-title">Contact Us</h4>

            <p>
              <FaEnvelope className="icon" />
              <a href="mailto:india@gmail.com">johndoe@gmail.com</a>
            </p>
            <p>
              <FaPhoneAlt className="icon" />
              <a href="tel:+919341235607">+91 93412 35607</a>
            </p>
            <p>
              <FaPhoneAlt className="icon" />
              <a href="tel:+919845777955">+91 98457 77955</a>
            </p>
            <p>
              <FaPhoneAlt className="icon" />
              <a href="tel:+917022616043">+91 70226 16043</a>
            </p>
          </div>
        </div>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-container">
          <ul className="footer-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/properties">Properties</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>

          <p className="copyright">KCDF © 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
