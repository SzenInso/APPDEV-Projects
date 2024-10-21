import { useState } from 'react';
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

const INITIAL_DISPLAY_LIMIT = 20; // Limit the number of Pokémon displayed initially

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [searchedPokemon, setSearchedPokemon] = useState('');
  const [error, setError] = useState(null);
  const [similarPokemons, setSimilarPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPokemonDetails = async (name) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return response.data;
    } catch (err) {
      console.error(err);
      setError('Error fetching Pokémon details!');
      return null; 
    }
  };

  const handleFetchPokemon = async (e) => {
    e.preventDefault();
    if (!searchedPokemon.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
      const matches = data.results.filter(pokemon =>
        pokemon.name.includes(searchedPokemon.toLowerCase())
      );

      const detailedPokemons = await Promise.all(
        matches.map(pokemon => fetchPokemonDetails(pokemon.name))
      );

      setSimilarPokemons(detailedPokemons.filter(Boolean));
      setError(matches.length === 0 ? 'No matching Pokémon found!' : null);
    } catch (err) {
      console.error(err);
      setError('Error fetching Pokémon!');
    } finally {
      setLoading(false);
    }
  };

  const handlePokemonClick = async (name) => {
    setLoading(true);
    const pokemonDetails = await fetchPokemonDetails(name);
    setPokemonData(pokemonDetails);
    setSimilarPokemons([]); 
    setLoading(false);
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

      <div className="region-pokemons">
        {Object.entries(REGION_POKEMONS).map(([region, range]) => (
          <div key={region}>
            <h2>{region} Region</h2>
            <div className="pokemon-group">
              {Array.from({ length: Math.min(INITIAL_DISPLAY_LIMIT, range[1] - range[0] + 1) }, (_, index) => index + range[0]).map(number => (
                <div
                  key={number}
                  className="pokemon-box"
                  onClick={() => handlePokemonClick(number)}
                >
                  <img 
                    src={`https://pokeapi.co/media/sprites/pokemon/${number}.png`} 
                    alt={`Pokemon ${number}`} 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'path/to/placeholder.png'; // Replace with actual placeholder image path
                    }} 
                  />
                  <p><strong>#{number}</strong></p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="similar-pokemons">
            {similarPokemons.map((pokemon) => (
              <div
                key={pokemon.name}
                className="pokemon-box"
                onClick={() => handlePokemonClick(pokemon.name)}
              >
                <img 
                  src={pokemon.sprites.front_default} 
                  alt={pokemon.name} 
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'path/to/placeholder.png'; // Replace with actual placeholder image path
                  }} 
                />
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
