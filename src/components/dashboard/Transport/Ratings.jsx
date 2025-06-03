import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ initialRating = 4.8, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(null);

  const handleRatingClick = (value) => {
    setRating(value);
    if (onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <div className="flex items-center">
      <span className="text-yellow-400 mr-1">{rating.toFixed(1)}</span>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            key={index}
            className={`text-sm cursor-pointer transition-colors duration-200 ${
              ratingValue <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
            }`}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            onClick={() => handleRatingClick(ratingValue)}
          />
        );
      })}
    </div>
  );
};

export default StarRating; 