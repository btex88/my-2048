/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './login-context';

export default function LoginProvider({ children }) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [playerName, setPlayerName] = useState('');

  return (
    <LoginContext.Provider
      value={{
        buttonDisabled, setButtonDisabled, playerName, setPlayerName,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
