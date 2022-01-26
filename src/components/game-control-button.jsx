import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ARROW from '../assets/images/symbols/round-arrow.png';
import GameContext from '../context/game/game-context';
import swipe from '../assets/helpers/swipe';
import { sumRight, sumLeft } from '../assets/helpers/sum-values';

export default function GameControlButton({ direction }) {
  const { currentBoard, setCurrentBoard } = useContext(GameContext);

  function handleArrowDirection() {
    if (direction === 'right') return { transform: 'rotate(180deg)' };
    if (direction === 'left') return { transform: 'rotate(0deg)' };
    if (direction === 'up') return { transform: 'rotate(90deg)' };
    if (direction === 'down') return { transform: 'rotate(270deg)' };
    return {};
  }

  function handleClick(value) {
    if (value === 'right') setCurrentBoard(sumRight(swipe(currentBoard, 'right')));
    if (value === 'left') setCurrentBoard(sumLeft(swipe(currentBoard, 'left')));
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
