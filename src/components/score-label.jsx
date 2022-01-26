import React from 'react';
import S from '../images/letters/s.png';
import C from '../images/letters/c.png';
import O from '../images/letters/o.png';
import R from '../images/letters/r.png';
import E from '../images/letters/e.png';
import DOT from '../images/symbols/circle.png';

export default function ScoreLabel() {
  return (
    <div className="w-auto h-full flex flex-row flex-nowrap items-center justify-center">
      <img
        className="h-4 object-contain"
        src={S}
        alt="p"
      />
      <img
        className="h-4 object-contain"
        src={C}
        alt="l"
      />
      <img
        className="h-4 object-contain"
        src={O}
        alt="a"
      />
      <img
        className="h-4 object-contain"
        src={R}
        alt="y"
      />
      <img
        className="h-4 object-contain mr-1"
        src={E}
        alt="e"
      />
      <div className="w-auto h-full flex flex-col items-center justify-center mr-1">
        <img
          className="h-1.5 object-contain my-0.5"
          src={DOT}
          alt="dot"
        />
        <img
          className="h-1.5 object-contain my-0.5"
          src={DOT}
          alt="dot"
        />
      </div>
    </div>
  );
}
