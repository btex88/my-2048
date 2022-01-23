import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContext from '../context/login/login-context';
import P from '../images/letters/p.png';
import L from '../images/letters/l.png';
import A from '../images/letters/a.png';
import Y from '../images/letters/y.png';

export default function LoginPlayButton() {
  const { buttonDisabled, playerName } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleButtonClick = () => navigate('/game', { state: { playerName } });

  return (
    <button
      type="button"
      disabled={buttonDisabled}
      onClick={() => handleButtonClick()}
      className={buttonDisabled
        ? `w-auto h-auto flex flex-nowrap items-center justify-center py-3 px-2 border
        rounded bg-blue-200 border-blue-500 opacity-50 cursor-not-allowed`
        : `w-auto h-auto flex flex-nowrap items-center justify-center py-3 px-2 border
        rounded bg-blue-200 border-blue-500 hover:bg-blue-400`}
    >
      <img className="h-10 object-contain" src={P} alt="p" />
      <img className="h-10 object-contain" src={L} alt="l" />
      <img className="h-10 object-contain" src={A} alt="a" />
      <img className="h-10 object-contain" src={Y} alt="y" />
    </button>
  );
}
