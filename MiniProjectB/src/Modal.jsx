import React from 'react';
import './Modal.css';

const getTypeColor = (type) => {
    const typeColors = {
        fire: '#f08030',
        water: '#6890f0',
        grass: '#78c850',
        electric: '#f8d030',
        ice: '#98d8d8',
        fighting: '#c03028',
        poison: '#a040b0',
        ground: '#e0c068',
        flying: '#a890f0',
        psychic: '#f85888',
        bug: '#a8b820',
        rock: '#b8a038',
        ghost: '#705898',
        dragon: '#7038f8',
        dark: '#705848',
        fairy: '#f0b6bc',
        normal: '#a8a878',
        steel: '#b8b8d0',
    };
    return typeColors[type] || '#ffffff';
};

const Modal = ({ pokemon, onClose }) => {
    if (!pokemon) return null;

    const backgroundColor = getTypeColor(pokemon.types[0]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ background: backgroundColor }}>
                <h2>{pokemon.name.toUpperCase()}</h2>
                <img src={pokemon.sprite} alt={`Sprite of ${pokemon.name}`} />
                <div className="details-container">
                    <p><strong>ID:</strong> {pokemon.id}</p>
                    <p><strong>Type:</strong> {pokemon.types.join(', ')}</p>
                    <p><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
                    <p><strong>Height:</strong> {pokemon.height / 10} m</p>
                    <p><strong>Region:</strong> {pokemon.region}</p>
                    <p><strong>Abilities:</strong> {pokemon.abilities.join(', ')}</p>
                </div>
                <div className="stats-container">
                    <h3>Stats:</h3>
                    {Object.entries(pokemon.stats).map(([statName, value]) => {
                        const width = (value / 255) * 100; 
                        return (
                            <div key={statName} className="stat">
                                <span>{statName.charAt(0).toUpperCase() + statName.slice(1)}: {value}</span>
                                <div className="stat-bar" style={{ width: `${width}%`, backgroundColor: '#007bff' }}></div>
                            </div>
                        );
                    })}
                </div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
