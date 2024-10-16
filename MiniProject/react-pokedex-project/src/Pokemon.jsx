import React from 'react';

function Pokemon({ pokemon }) {
  if (!pokemon) return null;

  const { name, sprites, types, height, weight, base_experience, stats } = pokemon;
  const image = sprites?.front_default;
  const typesString = types.map((el) => el.type.name).join(', ');

  const hp = stats.find(stat => stat.stat.name === 'hp')?.base_stat || 0;
  const attack = stats.find(stat => stat.stat.name === 'attack')?.base_stat || 0;
  const defense = stats.find(stat => stat.stat.name === 'defense')?.base_stat || 0;
  const speed = stats.find(stat => stat.stat.name === 'speed')?.base_stat || 0;

  return (
    <div className="pokemon-details">
      <h2>{name.toUpperCase()}</h2>
      <img src={image} alt={name} />
      <div>Types: {typesString}</div>
      <div>Height: {height / 10} m</div>
      <div>Weight: {weight / 10} kg</div>
      <div>Base Experience: {base_experience}</div>
      <div>HP: {hp}</div>
      <div>Attack: {attack}</div>
      <div>Defense: {defense}</div>
      <div>Speed: {speed}</div>
    </div>
  );
}

export default Pokemon;
