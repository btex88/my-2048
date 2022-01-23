import React from 'react';
import GameBoard from '../components/game-board';
import GameControls from '../components/game-controls';
import GameHeader from '../components/game-header';

export default function Game() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <GameHeader />
      <GameBoard />
      <GameControls />
    </div>
  );
}
