import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ARROW from '../images/symbols/round-arrow.png';
import GameContext from '../context/game/game-context';
import swipe from '../services/swipe';
import sumValues from '../services/sum-values';

export default function GameControlButton({ direction }) {
  const { currentBoard, setCurrentBoard } = useContext(GameContext);

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

  function handleClick(value) {
    if (value === 'left') setCurrentBoard(swipe(currentBoard, 'left'));
    if (value === 'right') {
      setCurrentBoard(sumValues(swipe(currentBoard, 'right'), 'right'));
    }
  }

  return (
    <div className="w-auto h-auto">
      <button
        type="button"
        className="w-auto h-auto"
        onClick={() => handleClick(direction)}
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
