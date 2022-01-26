import React, { useContext, useEffect } from 'react';
import randomId from '../assets/helpers/random-id';
import initValues from '../assets/helpers/init-values';
import GameContext from '../context/game/game-context';
import GameControlButton from './game-control-button';

export default function GameBoard() {
  const { currentBoard, setCurrentBoard } = useContext(GameContext);

  useEffect(() => {
    const board = initValues();
    setCurrentBoard(board);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <div className="w-full h-full flex flex-col items-center justify-center">
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
                fontFamily: "'Cabin Sketch', sans-serif",
                fontSize: '1.6rem',
              }}
            >
              {val}
            </div>
          )))}
        </div>
      </div>
      <div className="w-full h-28 flex flex-nowrap items-center justify-evenly">
        <GameControlButton direction="left" />
        <GameControlButton direction="right" />
        <GameControlButton direction="up" />
        <GameControlButton direction="down" />
      </div>
    </div>
  );
}
