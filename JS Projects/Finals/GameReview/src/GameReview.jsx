import React, { useState } from 'react';

export default function GameReview() {
  const [gameName, setGameName] = useState('');
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);
  const [date, setDate] = useState('');

  const handleGameNameChange = (event) => {
    setGameName(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmitReview = () => {
    const currentDate = new Date().toLocaleDateString();
    setDate(currentDate);

    const newReview = {
      gameName,
      rating,
      review,
      date: currentDate,
    };

    setReviews([...reviews, newReview]);
    setGameName('');
    setRating(5);
    setReview('');
  };

  return (
    <div className="review-container">
      <h2>Submit a Game Review</h2>
      <label>
        Game Name:
        <input
          type="text"
          name="gameName"
          value={gameName}
          onChange={handleGameNameChange}
        />
      </label>
      <br />
      <label>
        Rating (1-5):
        <input
          type="number"
          name="rating"
          value={rating}
          onChange={handleRatingChange}
          min="1"
          max="5"
        />
      </label>
      <br />
      <label>
        Review:
        <textarea
          name="review"
          value={review}
          onChange={handleReviewChange}
        />
      </label>
      <br />
      <button onClick={handleSubmitReview}>Submit Review</button>

      <div className="reviews-list">
        <h3>All Reviews:</h3>
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <h4>{review.gameName} ({review.date})</h4>
            <p>Rating: {review.rating}</p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
