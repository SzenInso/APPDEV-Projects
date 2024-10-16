import axios from 'axios';

const API_BASE = 'https://pokeapi.co/api/v2/pokemon/';

export const fetchPokemons = async (searchedPokemon) => {
  if (!searchedPokemon.trim()) return { matches: [], error: 'Please enter a Pokémon name' };

  try {
    const response = await axios.get(`${API_BASE}?limit=500`);
    const data = response.data;
    const matches = data.results.filter(pokemon =>
      pokemon.name.includes(searchedPokemon.toLowerCase())
    );

    const groupedPokemons = {};
    for (const pokemon of matches) {
      const detailsResponse = await axios.get(pokemon.url);
      const details = detailsResponse.data;

      const types = details.types.map(type => type.type.name);
      for (const type of types) {
        if (!groupedPokemons[type]) {
          groupedPokemons[type] = [];
        }
        if (!groupedPokemons[type].some(p => p.name === pokemon.name)) {
          groupedPokemons[type].push({
            name: pokemon.name,
            number: details.id,
            image: details.sprites.front_default,
            types,
          });
        }
      }
    }

    return { matches, groupedPokemons, error: matches.length === 0 ? 'No matching Pokémon found!' : null };
  } catch (err) {
    console.error(err);
    return { matches: [], error: 'Error fetching Pokémon!' };
  }
};

export const fetchPokemonDetails = async (name) => {
  try {
    const response = await axios.get(`${API_BASE}${name}`);
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error('Error fetching Pokémon details!');
  }
};
