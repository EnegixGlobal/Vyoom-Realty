import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 font-manrope">
      {/* ===== Top Section ===== */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* ===== Column 1 ===== */}
          <div>
            <h2 className="text-2xl md:text-3xl font-martel font-semibold text-white leading-snug tracking-wide">
              Making Dreams Come True of Millions of <br />
              Low & Mid-Income Groups
            </h2>
          </div>

          {/* ===== Column 2 (Address + Social) ===== */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-5 font-martel">
              Address
            </h4>

            {/* Address Row */}
            <div className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
              <FaMapMarkerAlt className="text-[#c1975a] mt-1 flex-shrink-0" />
              <p className="max-w-xs md:max-w-sm">
                #23, First Floor, Next to Sultan Travels, Sathgalli Circle,
                Satellite Bus Stand, Ring Road, Mysuru – 570019, Karnataka, India
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-6 text-lg">
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c1975a] transition-transform transform hover:scale-110"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c1975a] transition-transform transform hover:scale-110"
              >
                <FaInstagram />
              </Link>
              <Link
                to="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c1975a] transition-transform transform hover:scale-110"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>

          {/* ===== Column 3 (Contact Info) ===== */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-5 font-martel">
              Contact Us
            </h4>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#c1975a]" />
                <Link
                  to="mailto:johndoe@gmail.com"
                  className="hover:text-[#c1975a] transition"
                >
                  vyoom@gmail.com
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#c1975a]" />
                <Link
                  to="tel:+919341235607"
                  className="hover:text-[#c1975a] transition"
                >
                  +91 93412 35607
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#c1975a]" />
                <Link
                  to="tel:+919845777955"
                  className="hover:text-[#c1975a] transition"
                >
                  +91 98457 77955
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#c1975a]" />
                <Link
                  to="tel:+917022616043"
                  className="hover:text-[#c1975a] transition"
                >
                  +91 70226 16043
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="py-6 bg-gray-950">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <li>
              <Link to="/" className="hover:text-[#c1975a] transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#c1975a] transition">About Us</Link>
            </li>
            <li>
              <Link to="/properties" className="hover:text-[#c1975a] transition">Properties</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#c1975a] transition">Contact Us</Link>
            </li>
          </ul>

          <p className="text-sm text-gray-500 text-center md:text-right">
            KCDF © 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
