import React from 'react';
import { Link } from 'react-router-dom';

const games = [
  { id: 1, name: 'Counter-Strike 2', desc: 'For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2.', image: '/src/imgs/header.jpg' },
  { id: 2, name: 'S.T.A.L.K.E.R. 2: Heart of Chornobyl', desc: 'Discover the vast Chornobyl Exclusion Zone full of dangerous enemies, deadly anomalies and powerful artifacts. Unveil your own epic story as you make your way to the Heart of Chornobyl. Make your choices wisely, as they will determine your fate in the end.', image: '/src/imgs/stalker.jpg' },
  { id: 3, name: 'PUBG: BATTLEGROUNDS', desc: 'Play PUBG: BATTLEGROUNDS for free. Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds. Squad up and join the Battlegrounds for the original Battle Royale experience that only PUBG: BATTLEGROUNDS can offer.', image: '/src/imgs/PUBG.jpg' },
  { id: 4, name: 'Path of Exile 2', desc: 'Path of Exile 2 is a next generation free-to-play Action RPG from Grinding Gear Games, featuring co-op for up to six players. Set years after the original Path of Exile, you will return to the dark world of Wraeclast and seek to end the corruption that is spreading.', image: '/src/imgs/Exile.jpg' },
  { id: 5, name: 'Call of Duty®: Black Ops 6', desc: 'Call of Duty®: Black Ops 6 is signature Black Ops across a cinematic single-player Campaign, a best-in-class Multiplayer experience and with the epic return of Round-Based Zombies.', image: '/src/imgs/cod6.jpg' },
];

export default function Games() {
  return (
    <div className="games-list">
      <h1>Games List</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id} className="game-item">
            <Link to={`/games/${game.id}`} state={{ game }}>
              <div className="game-card">
                <img src={game.image} alt={game.name} className="game-image" />
                <h2>{game.name}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
