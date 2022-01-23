import React, { useContext, useEffect } from 'react';
import LoginContext from '../context/login/login-context';

export default function LoginInput() {
  const { setButtonDisabled, playerName, setPlayerName } = useContext(LoginContext);

  useEffect(() => {
    if (playerName.length >= 2) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  });

  const handleInputChange = (e) => setPlayerName(() => e.target.value);

  return (
    <div>
      <input
        type="text"
        placeholder="Type your name..."
        value={playerName}
        onChange={(e) => handleInputChange(e)}
        className="text-center h-10 w-72 bg-transparent border-b tracking-wider
        border-blue-400 text-slate-800 placeholder-slate-400 focus:outline-none"
      />
    </div>
  );
}
