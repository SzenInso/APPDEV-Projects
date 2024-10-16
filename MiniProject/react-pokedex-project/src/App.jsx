import { useState, useEffect } from 'react';
import './App.css';
import Pokemon from './Pokemon';
import axios from 'axios';

const REGION_POKEMONS = {
  Kanto: [1, 151],
  Johto: [152, 251],
  Hoenn: [252, 386],
  Sinnoh: [387, 493],
  Unova: [494, 649],
  Kalos: [650, 721],
  Alola: [722, 802],
  Galar: [810, 898],
};

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [searchedPokemon, setSearchedPokemon] = useState('');
  const [error, setError] = useState(null);
  const [similarPokemons, setSimilarPokemons] = useState([]);

  const fetchPokemonDetails = async (name) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return response.data;
    } catch (err) {
      console.error(err);
      setError('Error fetching Pokémon details!');
    }
  };

  const handleFetchPokemon = async (e) => {
    e.preventDefault();
    if (!searchedPokemon.trim()) return;

    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
      const matches = data.results.filter(pokemon =>
        pokemon.name.includes(searchedPokemon.toLowerCase())
      );

      const detailedPokemons = await Promise.all(
        matches.map(pokemon => fetchPokemonDetails(pokemon.name))
      );

      setSimilarPokemons(detailedPokemons);
      setError(matches.length === 0 ? 'No matching Pokémon found!' : null);
    } catch (err) {
      console.error(err);
      setError('Error fetching Pokémon!');
    }
  };

  const handlePokemonClick = async (name) => {
    const pokemonDetails = await fetchPokemonDetails(name);
    setPokemonData(pokemonDetails);
    setSimilarPokemons([]); 
  };

  return (
    <div>
      <h1>Pokedex</h1>
      <form onSubmit={handleFetchPokemon}>
        <input
          type="text"
          value={searchedPokemon}
          onChange={(e) => setSearchedPokemon(e.target.value)}
          placeholder="Enter Pokémon name"
        />
        <input type="submit" value="Search" />
      </form>

      {/* Display Pokémon by region */}
      <div className="region-pokemons">
        {Object.entries(REGION_POKEMONS).map(([region, range]) => (
          <div key={region}>
            <h2>{region} Region</h2>
            <div className="pokemon-group">
              {Array.from({ length: range[1] - range[0] + 1 }, (_, index) => index + range[0]).map(number => (
                <div
                  key={number}
                  className="pokemon-box"
                  onClick={() => handlePokemonClick(number)} // Use the number directly
                >
                  <img src={`https://pokeapi.co/media/sprites/pokemon/${number}.png`} alt={`Pokemon ${number}`} />
                  <p><strong>#{number}</strong></p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        {error ? (
          <div>{error}</div>
        ) : (
          <div className="similar-pokemons">
            {similarPokemons.map((pokemon) => (
              <div
                key={pokemon.name}
                className="pokemon-box"
                onClick={() => handlePokemonClick(pokemon.name)}
              >
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <p><strong>{pokemon.name.toUpperCase()}</strong></p>
                <p><strong>#{pokemon.id}</strong></p>
              </div>
            ))}
          </div>
        )}
        {pokemonData && <Pokemon pokemon={pokemonData} />}
      </div>
    </div>
  );
}

export default App;
