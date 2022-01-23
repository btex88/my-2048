import React from 'react';
import TWO from '../images/two.png';
import FOUR from '../images/four.png';
import ZERO from '../images/zero.png';
import EIGHT from '../images/eight.png';
import M from '../images/m.png';
import Y from '../images/y.png';

export default function Title() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-evenly">
      <div className="w-full h-auto flex flex-row items-center justify-center my-2">
        <img className="object-contain h-20" src={M} alt="m" />
        <img className="object-contain h-20" src={Y} alt="y" />
      </div>
      <div className="w-full h-20 flex flex-row items-center justify-center my-2">
        <img className="object-contain h-20" src={TWO} alt="two" />
        <img className="object-contain h-20" src={ZERO} alt="zero" />
        <img className="object-contain h-20" src={FOUR} alt="four" />
        <img className="object-contain h-20" src={EIGHT} alt="eight" />
      </div>
    </div>
  );
}
