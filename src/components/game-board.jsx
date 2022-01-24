import React, { useContext, useEffect } from 'react';
import randomId from '../services/random-id';
import initValues from '../services/init-values';
import GameContext from '../context/game/game-context';
// import { swipeLeft } from '../services/swipes';

export default function GameBoard() {
  const { currentBoard, setCurrentBoard } = useContext(GameContext);

  useEffect(() => {
    const board = initValues();
    setCurrentBoard(board);
  }, []);

  return (
    <div
      className="w-72 h-auto py-1 flex flex-row flex-wrap justify-evenly items-start
      bg-orange-800 rounded"
    >
      {currentBoard.map((value) => value.map((val) => (
        <div
          key={randomId()}
          className="border-black my-0.5 w-16 h-16 flex items-center justify-center
            tracking-tighter bg-orange-200 rounded"
          style={{
            fontFamily: '\'Cabin Sketch\', sans-serif',
            fontSize: '1.6rem',
          }}
        >
          {val}
        </div>
      )))}
    </div>
  );
}
