import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderPlayerLabel from './header-player-label';

export default function HeaderPlayerInfo() {
  const location = useLocation();
  const { playerName } = location.state;
  return (
    <div className="w-auto h-1/2 flex flex-row flex-nowrap items-center justify-center">
      <HeaderPlayerLabel />
      <span
        className="font-bold text-2xl text-center leading-5 tracking-wide truncate"
        style={{ fontFamily: '\'Cabin Sketch\', sans-serif' }}
      >
        {playerName}
      </span>
    </div>
  );
}
