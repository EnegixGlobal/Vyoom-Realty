import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const navigation = useNavigate();
  const location = useLocation();

  // 🔹 Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // 🔹 Handle transparency
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.8;
      setIsTransparent(window.scrollY < threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent text-white"
          : "bg-white text-gray-900 shadow-md"
      }`}
    >
      {/* Navbar container */}
      <div className="container mx-auto flex items-center justify-between px-3 py-1 md:px-6 md:py-3">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigation("/")}
        >
          <svg
            className="w-7 h-7 text-[#c1975a]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="text-lg text-black font-bold">VYOOM</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-600 text-black transition">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-600 text-black transition"
          >
            About
          </Link>
          <Link
            to="/service"
            className="hover:text-blue-600 text-black transition"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-600 text-black transition"
          >
            Contact
          </Link>
          <button className="bg-[#c1975a] text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition">
            Join
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center text-black space-y-1 focus:outline-none"
        >
          <span
            className={`block w-6 h-0.5 bg-black transform transition ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transform transition ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center bg-white text-gray-900 space-y-1.5 py-2 transition-all duration-500 ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-blue-600 text-black transition text-sm"
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-blue-600 text-black transition text-sm"
        >
          About
        </Link>
        <Link
          to="/service"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-blue-600 text-black transition text-sm"
        >
          Services
        </Link>
        <Link
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-blue-600 text-black transition text-sm"
        >
          Contact
        </Link>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="bg-[#c1975a] text-white px-5 py-1.5 rounded-lg hover:bg-[#b18646] transition text-sm"
        >
          Join
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
