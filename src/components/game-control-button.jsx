import React from 'react';
import PropTypes from 'prop-types';
import ARROW from '../images/symbols/round-arrow.png';

export default function GameControlButton({ direction }) {
  function handleArrowDirection() {
    switch (direction) {
      case 'left':
        return { transform: 'rotate(0deg)' };
      case 'right':
        return { transform: 'rotate(180deg)' };
      case 'up':
        return { transform: 'rotate(90deg)' };
      case 'down':
        return { transform: 'rotate(270deg)' };
      default:
        return {};
    }
  }
  return (
    <div className="w-auto h-auto">
      <button
        type="button"
        className="w-auto h-auto"
      >
        <img
          src={ARROW}
          alt="arrow"
          className="h-16 object-contain"
          style={handleArrowDirection()}
        />
      </button>
    </div>
  );
}

GameControlButton.propTypes = {
  direction: PropTypes.string.isRequired,
};
