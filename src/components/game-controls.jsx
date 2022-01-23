import React from 'react';
import GameControlButton from './game-control-button';

export default function GameControls() {
  return (
    <div className="w-full h-20 flex flex-nowrap items-center justify-evenly">
      <GameControlButton direction="left" />
      <GameControlButton direction="right" />
      <GameControlButton direction="up" />
      <GameControlButton direction="down" />
    </div>
  );
}
