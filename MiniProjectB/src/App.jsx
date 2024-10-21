import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';
import Header from './Header';
import Footer from './Footer';
import './App.css';

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

// Define regions in an array
const regions = [
    { range: [1, 151], name: 'Kanto' },
    { range: [152, 251], name: 'Johto' },
    { range: [252, 386], name: 'Hoenn' },
    { range: [387, 493], name: 'Sinnoh' },
    { range: [494, 649], name: 'Unova' },
    { range: [650, 721], name: 'Kalos' },
    { range: [722, 809], name: 'Alola' },
    { range: [810, 898], name: 'Galar' },
];

const getRegion = (id) => {
    for (const region of regions) {
        if (id >= region.range[0] && id <= region.range[1]) {
            return region.name;
        }
    }
    return 'Unknown';
};

function Pokedex() {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(20);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=5000');
                const pokemonData = await Promise.all(
                    response.data.results.map(async (pokemon) => {
                        try {
                            const pokemonDetails = await axios.get(pokemon.url);
                            const pokemonId = pokemonDetails.data.id;
                            const region = getRegion(pokemonId);
                            return {
                                id: pokemonId,
                                name: pokemonDetails.data.name,
                                sprite: pokemonDetails.data.sprites.other['official-artwork'].front_default,
                                types: pokemonDetails.data.types.map(type => type.type.name),
                                weight: pokemonDetails.data.weight,
                                height: pokemonDetails.data.height,
                                region: region,
                                abilities: pokemonDetails.data.abilities.map(ability => ability.ability.name),
                                stats: {
                                    hp: pokemonDetails.data.stats[0].base_stat,
                                    attack: pokemonDetails.data.stats[1].base_stat,
                                    defense: pokemonDetails.data.stats[2].base_stat,
                                    special_attack: pokemonDetails.data.stats[3].base_stat,
                                    special_defense: pokemonDetails.data.stats[4].base_stat,
                                    speed: pokemonDetails.data.stats[5].base_stat,
                                }
                            };
                        } catch (err) {
                            console.error(`Error fetching details for ${pokemon.name}`, err);
                            return null;
                        }
                    })
                );
                setPokemonList(pokemonData.filter(Boolean));
            } catch (error) {
                setError('Error fetching Pokémon list');
                console.error('Error fetching Pokémon list', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonList();
    }, []);

    const handleCardClick = (pokemon) => {
        setSelectedPokemon(pokemon);
    };

    const closeModal = () => {
        setSelectedPokemon(null);
    };

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;

    const filteredPokemonList = pokemonList.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const currentPokemons = filteredPokemonList.slice(indexOfFirstPokemon, indexOfLastPokemon);
    const totalPages = Math.ceil(filteredPokemonList.length / pokemonsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="pokedex">
            <Header onSearch={handleSearch} />
            <div className="pokemon-grid">
                {currentPokemons.map((pokemon, index) => (
                    <div
                        key={index}
                        className="pokemon-card"
                        onClick={() => handleCardClick(pokemon)}
                        style={{ backgroundColor: getTypeColor(pokemon.types[0]) }}
                    >
                        <img src={pokemon.sprite} alt={`Sprite of ${pokemon.name}`} />
                        <h3>{pokemon.name.toUpperCase()}</h3>
                        <p>ID: {pokemon.id}</p>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
            <Modal pokemon={selectedPokemon} onClose={closeModal} />
            <Footer />
        </div>
    );
}

export default Pokedex;
