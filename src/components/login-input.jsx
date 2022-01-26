import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContext from '../context/login/login-context';

export default function LoginInput() {
  const { setButtonDisabled, playerName, setPlayerName } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (playerName.length >= 2) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  });

  const handleKeyDown = (event) => {
    if (event.charCode === 13) navigate('/game', { state: { playerName } });
  };

  const handleInputChange = (event) => setPlayerName(() => event.target.value);

  return (
    <div>
      <input
        type="text"
        placeholder="Type your name..."
        value={playerName}
        onKeyPress={(event) => handleKeyDown(event)}
        onChange={(event) => handleInputChange(event)}
        className="text-center h-10 w-72 bg-transparent border-b tracking-wider
        border-blue-400 text-slate-800 placeholder-slate-400 focus:outline-none"
      />
    </div>
  );
}
