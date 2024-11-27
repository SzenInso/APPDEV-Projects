import React from 'react';
import { useLocation } from 'react-router-dom';
import './Game.css';

const reviewsData = {
  1: [
    { username: 'Gamer123', date: '2024-11-25', text: 'CounterStrike: Where the only thing more reliable than your terrible aim is the endless cheaters spinning around like they’re auditioning for Dancing with the Stars...', rating: 4 },
    { username: 'ProShooter', date: '2024-11-20', text: 'In an era of flagging service games, it is refreshing to see an old favourite so thoroughly rejuvenated. Blizzard, take note: this is how it’s done.', rating: 5 },
    { username: 'CasualPlayer', date: '2024-11-18', text: 'CS2 also proves that despite their reluctance to do so, Valve still has all the chops whenever they choose to put their game developer hat on.', rating: 4 },
    { username: 'OldTimer', date: '2024-11-15', text: 'Counter-Strike’s great and ageless gameplay gets a much-needed tech update, but still lags CS:GO in precision and scope.', rating: 3 },
    { username: 'FanOfValve', date: '2024-11-12', text: 'Counter-Strike 2 is a solid package in many ways. It’s still the best in its sub-genre and I can see myself playing it for thousands of hours, as I did with its predecessors.', rating: 5 },
  ],
  2: [
    { username: 'StalkerFan', date: '2024-11-23', text: 'This game is great! Graphics, quality, design. This game has soul. Thanks to the developers! Glory to Ukraine!', rating: 5 },
    { username: 'AtmosphereLover', date: '2024-11-22', text: 'The game is very cool. The plot and graphics are great. Huge map, interesting quests.', rating: 4 },
    { username: 'StorySeeker', date: '2024-11-21', text: 'This game has an incredible atmosphere, stunning graphics, and audio visuals. Not since The Witcher 3 have I received such crazy emotions as I am now receiving from S.T.A.L.K.E.R. 2', rating: 5 },
    { username: 'GunplayFan', date: '2024-11-20', text: 'It’s a great game that attracts with its atmosphere and gunplay. I am sure the developers will fix all the flaws in the near future.', rating: 4 },
    { username: 'BugsNoMore', date: '2024-11-19', text: 'Very good game, gunfights with biped enemies are fun. Mutant variety is amazing. Game is a little buggy, but in a manageable amount.', rating: 4 },
  ],
  3: [
    { username: 'BRMaster', date: '2024-11-21', text: 'A unique and exciting multiplayer experience in which every run is different from the next.', rating: 5 },
    { username: 'SoloSurvivor', date: '2024-11-20', text: 'PlayerUnknown’s Battlegrounds brings the battle royale genre to a smashing mainstream success, packed with memorable moments and action-packed adventures.', rating: 4 },
    { username: 'BattleRoyaleFan', date: '2024-11-19', text: 'PlayerUnknown’s Battlegrounds is the new standard for the Battle Royale genre. It is not a polished game, but that does not really matter when you consider how much fun you are going to have with it.', rating: 5 },
    { username: 'PUBGFan', date: '2024-11-18', text: 'PUBG is one of the best multiplayer experiences of the generation, and this is the best version of it so far – even if it’s still a work in progress.', rating: 4 },
    { username: 'WinnerWinner', date: '2024-11-17', text: 'One of the most influential multiplayer games of the decade. Addictive and accessible, turns the battle royale concept into a trend.', rating: 5 },
  ],
  4: [
    { username: 'ActionFan', date: '2024-11-15', text: 'Absolute beauty this one. Not even Metacritic can silence me here. Get wrecked.', rating: 5 },
    { username: 'RPGFan', date: '2024-11-14', text: 'Even half-finished, Path of Exile 2 is shaping up to be one of 2024’s best action RPGs.', rating: 4 },
    { username: 'IntenseGamer', date: '2024-11-13', text: 'The bad news is that Path of Exile 2’s early access debut won’t be the full game, as initially hoped. The good news is, even limited, it is still shaping up to be great.', rating: 4 },
    { username: 'SoulslikeFan', date: '2024-11-12', text: 'PoE2 is a little intense for most, geared to make both action RPG fans and soulslike players sweat.', rating: 3 },
    { username: 'MonkMaster', date: '2024-11-11', text: 'The Monk class feels completely different, with combo-heavy combat. Great potential here for build variety.', rating: 5 },
  ],
  5: [
    { username: 'FPSFan', date: '2024-11-10', text: 'This is an excellent first-person shooter with best-in-class multiplayer, a stunning story mode and over-the-top, enjoyable zombie smashing.', rating: 5 },
    { username: 'BlackOpsPlayer', date: '2024-11-09', text: 'Call of Duty: Black Ops 6 refreshes the franchise with a feature-stuffed blockbuster. It’s the most complete Call of Duty experience in more than a decade.', rating: 5 },
    { username: 'OldCoDPlayer', date: '2024-11-08', text: 'Black Ops 6 is the best CoD game in years. Well-balanced multiplayer and the zombies mode is back to its roots.', rating: 4 },
    { username: 'TacticalGamer', date: '2024-11-07', text: 'The most complete CoD package in years. Treyarch are the masters of this franchise.', rating: 5 },
    { username: 'ZombieKiller', date: '2024-11-06', text: 'Call of Duty: Black Ops 6 brings back the best-in-class multiplayer combat with solid campaign and classic zombies.', rating: 4 },
  ]
};

export default function Game() {
  const location = useLocation();
  const game = location.state.game;

  const reviews = reviewsData[game.id] || [{ username: 'Unknown', date: '', text: 'No reviews available for this game.', rating: 0 }];

  return (
    <div className="game-detail">
      <h1>{game.name}</h1>
      <div className="game-description">
        <img src={game.image} alt={game.name} className="game-image-detail" />
        <p>{game.desc || 'No description available for this game.'}</p>
      </div>

      <h3>Reviews:</h3>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-box">
            <div className="review-header">
              <span className="review-username">{review.username}</span>
              <span className="review-date">{review.date}</span>
            </div>
            <p className="review-text">{review.text}</p>
            <div className="review-rating">
              {'⭐'.repeat(review.rating)}
              {'☆'.repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
