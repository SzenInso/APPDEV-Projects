import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Game() {
  const location = useLocation();
  const game = location.state.game;

  const reviews = [
    'Amazing game, lots of strategy involved!',
    'Great graphics and gameplay. Highly recommend it.',
    'Fun but can get repetitive after a while.',
  ];

  return (
    <div className="game-detail">
      <h1>{game.name}</h1>
      <div className="game-description">
        <img src={game.image} alt={game.name} className="game-image-detail" />
        <p>{game.desc || 'No description available for this game.'}</p>
      </div>
      
      <h3>Reviews:</h3>
      <ul className="reviews">
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
}
