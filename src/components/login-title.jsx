import React from 'react';
import TWO from '../images/numbers/two.png';
import FOUR from '../images/numbers/four.png';
import ZERO from '../images/numbers/zero.png';
import EIGHT from '../images/numbers/eight.png';
import M from '../images/letters/m.png';
import Y from '../images/letters/y.png';

export default function LoginTitle() {
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
