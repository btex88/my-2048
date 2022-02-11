import React from 'react';
import FOUR from '../assets/images/numbers/four.png';
import ZERO from '../assets/images/numbers/zero.png';

export default function NotFoundCode() {
  return (
    <div className="w-full h-20 flex items-center justify-center mb-8">
      <img className="h-14 object-contain hover:animate-ping" src={FOUR} alt="four" />
      <img className="h-14 object-contain hover:animate-ping" src={ZERO} alt="zero" />
      <img className="h-14 object-contain hover:animate-ping" src={FOUR} alt="four" />
    </div>
  );
}
