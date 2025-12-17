// src/components/RatingSelector.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Recommended for type checking in React

const RATING_OPTIONS = [1, 2, 3, 4, 5]; // The possible rating values

function RatingSelector({ currentRating, onRatingSelect }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">
        On a scale of 1 to 5, how motivated are you for therapy?
      </h3>
      
      {/* The grid container for the rating options */}
      <div className="grid grid-cols-5 gap-4">
        {RATING_OPTIONS.map((rating) => {
          
          // Determine if the current option is the one selected
          const isSelected = rating === currentRating;
          
          // Use a standard Tailwind class for basic grid item styling
          let baseClasses = 'flex items-center justify-center p-4 text-center rounded-lg shadow-sm';
          
          // Apply the custom utility classes conditionally
          let customClasses = isSelected 
            ? 'rating-grid-item-selected' // Applies bg-primary-blue, text-white, etc.
            : 'rating-grid-item';          // Applies bg-white, border-gray-200, etc.

          return (
            <div
              key={rating}
              className={`${baseClasses} ${customClasses}`} // Combine base and custom styles
              onClick={() => onRatingSelect(rating)}
              role="radio" // Good for accessibility
              aria-checked={isSelected}
              tabIndex={0}
            >
              <span className="text-lg font-bold">{rating}</span>
            </div>
          );
        })}
      </div>
      
      {/* Optional: Display a description based on selection */}
      {currentRating && (
        <p className="mt-4 text-sm text-gray-500">
          You selected: <strong>{currentRating}</strong> (Higher numbers mean higher motivation).
        </p>
      )}
    </div>
  );
}

RatingSelector.propTypes = {
  currentRating: PropTypes.number,
  onRatingSelect: PropTypes.func.isRequired,
};

export default RatingSelector;