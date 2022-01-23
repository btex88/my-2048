import React from 'react';
import P from '../images/letters/p.png';
import L from '../images/letters/l.png';
import A from '../images/letters/a.png';
import Y from '../images/letters/y.png';

export default function PlayButton() {
  return (
    <button
      type="button"
      className="w-auto h-auto flex flex-nowrap items-center justify-center p-2
      border-b-2"
    >
      <img className="h-10 object-contain" src={P} alt="p" />
      <img className="h-10 object-contain" src={L} alt="l" />
      <img className="h-10 object-contain" src={A} alt="a" />
      <img className="h-10 object-contain" src={Y} alt="y" />
    </button>
  );
}
