import React from 'react';
import './Header.css';

const Header = ({ onSearch }) => {
    return (
        <header className="header">
            <h1>Kanto Pokédex</h1>
            <input
                type="text"
                placeholder="Search Pokémon..."
                onChange={(e) => onSearch(e.target.value)}
            />
        </header>
    );
};

export default Header;
