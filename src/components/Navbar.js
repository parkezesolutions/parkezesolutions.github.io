import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/assets/logo.png" alt="Parkeze" className="navbar-logo" />
      </div>
      
      <button 
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <div className={`navbar-center ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul>
          <li><a href="/#about" onClick={closeMobileMenu}>About</a></li>
          <li><a href="/solutions" onClick={closeMobileMenu}>Solutions</a></li>
          <li><a href="/integration" onClick={closeMobileMenu}>Integration</a></li>
          <li><a href="/case-studies" onClick={closeMobileMenu}>Case Studies</a></li>
          <li><a href="/#contact-form" onClick={closeMobileMenu}>Contact</a></li>
        </ul>
      </div>
      
      <div className="navbar-right">
        <a href="https://map.parkezesolutions.com" target="_blank" rel="noopener noreferrer">View Map</a>
        <a href="https://my.parkezesolutions.com" target="_blank" rel="noopener noreferrer">Operator Dashboard</a>
      </div>
    </nav>
  );
};

export default Navbar;
