import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ARROW from '../assets/images/symbols/round-arrow.png';
import GameContext from '../context/game/game-context';
import swipeX from '../assets/helpers/swipe-x';
import {
  sumRight, sumLeft, sumDown, sumUp,
} from '../assets/helpers/sum-values';
import swipeY from '../assets/helpers/swipe-y';
import generateNum from '../assets/helpers/generate-num';

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
    if (value === 'right') {
      const firstSwipe = swipeX(currentBoard, 'right');
      const sumValues = sumRight(firstSwipe);
      const secondSwipe = swipeX(sumValues, 'right');
      const newNumber = generateNum(secondSwipe);
      setCurrentBoard(newNumber);
    }
    if (value === 'left') {
      const firstSwipe = swipeX(currentBoard, 'left');
      const sumValues = sumLeft(firstSwipe);
      const secondSwipe = swipeX(sumValues, 'left');
      const newNumber = generateNum(secondSwipe);
      setCurrentBoard(newNumber);
    }
    if (value === 'down') {
      const firstSwipe = swipeY(currentBoard, 'down');
      const sumValues = sumDown(firstSwipe);
      const secondSwipe = swipeY(sumValues, 'down');
      const newNumber = generateNum(secondSwipe);
      setCurrentBoard(newNumber);
    }
    if (value === 'up') {
      const firstSwipe = swipeY(currentBoard, 'up');
      const sumValues = sumUp(firstSwipe);
      const secondSwipe = swipeY(sumValues, 'up');
      const newNumber = generateNum(secondSwipe);
      setCurrentBoard(newNumber);
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
