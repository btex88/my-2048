import React from 'react';
import P from '../images/letters/p.png';
import L from '../images/letters/l.png';
import A from '../images/letters/a.png';
import Y from '../images/letters/y.png';
import E from '../images/letters/e.png';
import R from '../images/letters/r.png';
import DOT from '../images/symbols/circle.png';

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
