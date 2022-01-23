import React from 'react';
import HeaderPlayerInfo from './header-player-info';
import HeaderPlayerScore from './header-player-score';

export default function GameHeader() {
  return (
    <div
      className="w-full h-20 flex flex-col items-start justify-around border
      bg-blue-200 px-2"
    >
      <HeaderPlayerInfo />
      <HeaderPlayerScore />
    </div>
  );
}
