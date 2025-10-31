import React, { useEffect, useState } from 'react'

import "../styles/Navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerHeight * 0.8; // after most of hero
            setIsTransparent(window.scrollY < threshold);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={isTransparent ? 'transparent' : ''}>
            <div className="logo">
                <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span className="logo-text">VYOOM</span>
            </div>

            {/* Desktop Menu */}
            <div className="menu desktop-menu">
                <a href="#home" className="link">Home</a>
                <a href="#about" className="link">About Us</a>
                <a href="#properties" className="link">Properties</a>
                <a href="#contact" className="link">Contact Us</a>
                <button className="button-nav">Become A Member</button>
            </div>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-button" onClick={toggleMenu}>
                <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <a href="#home" className="link" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#about" className="link" onClick={() => setIsMenuOpen(false)}>About Us</a>
                <a href="#properties" className="link" onClick={() => setIsMenuOpen(false)}>Properties</a>
                <a href="#contact" className="link" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
                <button className="button-nav-mobile" onClick={() => setIsMenuOpen(false)}>Become A Member</button>
            </div>
        </nav>
    );
}

export default Navbar


