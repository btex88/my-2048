import React from 'react';
import { useNavigate } from 'react-router-dom';
import ARROW from '../assets/images/symbols/back-arrow.png';

export default function ReturnButton() {
  const navigate = useNavigate();

  function handleArrowClick() {
    navigate('/');
  }

  function handleKeyDown(e) {
    if (e.keyCode === 8) navigate('/');
  }

  return (
    <div className="w-auto h-auto">
      <button
        type="button"
        onClick={() => handleArrowClick()}
        onKeyDown={(e) => handleKeyDown(e)}
        className="w-auto h-auto"
      >
        <img
          src={ARROW}
          alt="arrow"
          className="h-16 object-contain"
        />
      </button>
    </div>
  );
}
