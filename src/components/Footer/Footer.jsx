import React from "react";
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
    <footer className="bg-gray-900 text-gray-300">
      {/* ===== Top Section ===== */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
              Making Dreams Come True of Millions of <br />
              Low & Mid-Income Groups
            </h2>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Address</h4>
            <p className="flex items-start gap-2 mb-4 text-sm leading-relaxed">
              <FaMapMarkerAlt className="text-blue-500 mt-1" />
              #23, First Floor, Next to Sultan Travels, Sathgalli Circle,
              Satellite Bus Stand, Ring Road, Mysuru – 570019, Karnataka, India
            </p>

            <div className="flex space-x-4 text-lg mt-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>

            <p className="flex items-center gap-2 mb-2 text-sm">
              <FaEnvelope className="text-blue-500" />
              <a href="mailto:johndoe@gmail.com" className="hover:text-blue-400">
                johndoe@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-2 mb-2 text-sm">
              <FaPhoneAlt className="text-blue-500" />
              <a href="tel:+919341235607" className="hover:text-blue-400">
                +91 93412 35607
              </a>
            </p>
            <p className="flex items-center gap-2 mb-2 text-sm">
              <FaPhoneAlt className="text-blue-500" />
              <a href="tel:+919845777955" className="hover:text-blue-400">
                +91 98457 77955
              </a>
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FaPhoneAlt className="text-blue-500" />
              <a href="tel:+917022616043" className="hover:text-blue-400">
                +91 70226 16043
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="py-6 bg-gray-950">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <li>
              <a href="/" className="hover:text-white">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">About Us</a>
            </li>
            <li>
              <a href="/properties" className="hover:text-white">Properties</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">Contact Us</a>
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
