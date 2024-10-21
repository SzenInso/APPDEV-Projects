import React from 'react';
import PropTypes from 'prop-types';

function Pokemon({ pokemon }) {
  if (!pokemon) {
    return <div>No Pokémon data available.</div>;
  }

  const {
    name,
    sprites,
    types,
    height,
    weight,
    base_experience,
    stats,
  } = pokemon;

  const image = sprites?.front_default;
  const typesString = types.map((el) => el.type.name).join(', ');

  const hp = stats?.find((stat) => stat.stat.name === 'hp')?.base_stat || 0;
  const attack = stats?.find((stat) => stat.stat.name === 'attack')?.base_stat || 0;
  const defense = stats?.find((stat) => stat.stat.name === 'defense')?.base_stat || 0;
  const speed = stats?.find((stat) => stat.stat.name === 'speed')?.base_stat || 0;

  return (
    <div className="pokemon-details">
      <h2>{name.toUpperCase()}</h2>
      {image && <img src={image} alt={name} />}
      <div>Types: {typesString}</div>
      <div>Height: {(height / 10).toFixed(2)} m</div>
      <div>Weight: {(weight / 10).toFixed(2)} kg</div>
      <div>Base Experience: {base_experience}</div>
      <div>HP: {hp}</div>
      <div>Attack: {attack}</div>
      <div>Defense: {defense}</div>
      <div>Speed: {speed}</div>
    </div>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sprites: PropTypes.shape({
      front_default: PropTypes.string,
    }),
    types: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    base_experience: PropTypes.number.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        stat: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
        base_stat: PropTypes.number.isRequired,
      })
    ).isRequired,
  }),
};

export default Pokemon;
