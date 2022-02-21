import React, { useContext, useEffect, useState } from 'react';
import GameContext from '../context/game/game-context';
import ScoreLabel from './score-label';

export default function PlayerScore() {
  const { currentBoard } = useContext(GameContext);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    function updateScore() {
      setCurrentScore([...currentBoard].flat(2).sort((a, b) => b - a)[0]);
    }
    updateScore();
  }, [currentBoard]);

  return (
    <div className="w-auto h-1/2 flex flex-row flex-nowrap items-center justify-center">
      <ScoreLabel />
      <span
        className="font-bold text-2xl text-center tracking-wider"
        style={{ fontFamily: "'Cabin Sketch', sans-serif" }}
      >
        {currentScore}
      </span>
    </div>
  );
}
