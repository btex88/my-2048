import React from 'react';
import { useLocation } from 'react-router-dom';
import PlayerLabel from './player-label';
import capitalize from '../assets/helpers/capitalize';

export default function PlayerInfo() {
  const location = useLocation();
  const { playerName } = location.state;
  return (
    <div className="w-auto h-1/2 flex flex-row flex-nowrap items-center justify-center">
      <PlayerLabel />
      <span
        className="font-bold text-2xl text-center leading-5 tracking-wide truncate"
        style={{ fontFamily: '\'Cabin Sketch\', sans-serif' }}
      >
        {capitalize(playerName)}
      </span>
    </div>
  );
}
