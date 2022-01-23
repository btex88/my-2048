/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GameContext from './game-context';

export default function GameProvider({ children }) {
  const [currentBoard, setCurrentBoard] = useState([]);

  return (
    <GameContext.Provider
      value={{
        currentBoard, setCurrentBoard,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
