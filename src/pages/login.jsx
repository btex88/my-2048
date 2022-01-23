import React from 'react';
import LoginInput from '../components/login-input';
import LoginPlayButton from '../components/login-play-button';
import LoginTitle from '../components/login-title';
import LoginProvider from '../context/login/login-provider';

export default function Login() {
  return (
    <LoginProvider>
      <div className="w-full h-full flex flex-col items-center justify-evenly">
        <LoginTitle />
        <LoginInput />
        <LoginPlayButton />
      </div>
    </LoginProvider>
  );
}
