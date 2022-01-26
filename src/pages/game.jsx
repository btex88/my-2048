import React from 'react';
import GameBoard from '../components/game-board';
import GameProvider from '../context/game/game-provider';
import PlayerInfo from '../components/player-info';
import PlayerScore from '../components/player-score';

export default function Game() {
  return (
    <GameProvider>
      <div className="w-full h-full flex flex-col items-center justify-between">
        <header
          className="w-full h-24 flex flex-col items-start justify-around border
      bg-blue-200 px-2"
        >
          <PlayerInfo />
          <PlayerScore />
        </header>
        <GameBoard />
      </div>
    </GameProvider>
  );
}
