import React, { useState } from 'react';
import './Header.css'; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
         <img src="https://placeholder.pics/svg/150x150" alt="person-logo" className="person-picture" />
          <button className="nav-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i> {/* Hamburger icon */}
          </button>
        </div>
        <div className={`links ${isMenuOpen ? 'show-links' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
