import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent text-white"
          : "bg-white text-gray-900 shadow-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-[#c1975a]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="text-xl font-bold">VYOOM</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="hover:text-[#c1975a] transition">Home</a>
          <a href="#about" className="hover:text-[#c1975a] transition">About</a>
          <a href="#projects" className="hover:text-[#c1975a] transition">Projects</a>
          <a href="/contact" className="hover:text-[#c1975a] transition">Contact</a>
          <button className="bg-[#c1975a] text-white px-5 py-2 rounded-lg hover:bg-[#b18646] transition">
            Join Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
        >
          <span
            className={`block w-6 h-0.5 bg-current transform transition ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-current transition ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-current transform transition ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center bg-white text-gray-900 space-y-4 py-6 transition-all duration-500 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <a href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-[#c1975a] transition">
          Home
        </a>
        <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#c1975a] transition">
          About
        </a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-[#c1975a] transition">
          Projects
        </a>
        <a href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#c1975a] transition">
          Contact
        </a>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="bg-[#c1975a] text-white px-6 py-2 rounded-lg hover:bg-[#b18646] transition"
        >
          Join Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
