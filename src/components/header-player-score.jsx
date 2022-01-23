import React from 'react';
import HeaderScoreLabel from './header-score-label';

export default function HeaderPlayerScore() {
  return (
    <div className="w-auto h-1/2 flex flex-row flex-nowrap items-center justify-center">
      <HeaderScoreLabel />
      <span
        className="font-bold text-2xl text-center tracking-wider"
        style={{ fontFamily: '\'Cabin Sketch\', sans-serif' }}
      >
        2048
      </span>
    </div>
  );
}
