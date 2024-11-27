import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="navbar-container">
      <nav>
        <div className="title">
          <NavLink to="/" className="logo">
            GAME<span className="logo"> HUB</span>
          </NavLink>
        </div>
        <div className="menu" onClick={toggleMenu}>
          <div className="bars">☰</div>
        </div>
        <ul className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/games" className={({ isActive }) => (isActive ? 'active' : '')}>
              Games
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
