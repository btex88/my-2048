import React from 'react';
import N from '../images/letters/n.png';
import O from '../images/letters/o.png';
import T from '../images/letters/t.png';
import F from '../images/letters/f.png';
import U from '../images/letters/u.png';
import D from '../images/letters/d.png';

export default function NotFundText() {
  return (
    <div className="w-full h-40 flex flex-col items-center justify-evenly">
      <div className="w-full h-auto flex items-center justify-center">
        <img className="h-14 object-contain hover:animate-ping" src={N} alt="n" />
        <img className="h-14 object-contain hover:animate-ping" src={O} alt="o" />
        <img className="h-14 object-contain hover:animate-ping" src={T} alt="t" />
      </div>
      <div className="w-full h-auto flex items-center justify-center">
        <img className="h-14 object-contain hover:animate-ping" src={F} alt="f" />
        <img className="h-14 object-contain hover:animate-ping" src={O} alt="o" />
        <img className="h-14 object-contain hover:animate-ping" src={U} alt="u" />
        <img className="h-14 object-contain hover:animate-ping" src={N} alt="n" />
        <img className="h-14 object-contain hover:animate-ping" src={D} alt="d" />
      </div>
    </div>
  );
}
