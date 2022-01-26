import React from 'react';
import ScoreLabel from './score-label';

export default function PlayerScore() {
  return (
    <div className="w-auto h-1/2 flex flex-row flex-nowrap items-center justify-center">
      <ScoreLabel />
      <span
        className="font-bold text-2xl text-center tracking-wider"
        style={{ fontFamily: '\'Cabin Sketch\', sans-serif' }}
      >
        2048
      </span>
    </div>
  );
}
