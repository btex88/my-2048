import React from 'react';
import P from '../assets/images/letters/p.png';
import L from '../assets/images/letters/l.png';
import A from '../assets/images/letters/a.png';
import Y from '../assets/images/letters/y.png';
import E from '../assets/images/letters/e.png';
import R from '../assets/images/letters/r.png';
import DOT from '../assets/images/symbols/circle.png';

export default function PlayerLabel() {
  return (
    <div className="w-auto h-full flex flex-row flex-nowrap items-center justify-center">
      <img
        className="h-4 object-contain"
        src={P}
        alt="p"
      />
      <img
        className="h-4 object-contain"
        src={L}
        alt="l"
      />
      <img
        className="h-4 object-contain"
        src={A}
        alt="a"
      />
      <img
        className="h-4 object-contain"
        src={Y}
        alt="y"
      />
      <img
        className="h-4 object-contain"
        src={E}
        alt="e"
      />
      <img
        className="h-4 object-contain mr-1"
        src={R}
        alt="r"
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
