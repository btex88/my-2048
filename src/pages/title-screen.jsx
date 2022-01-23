import React from 'react';
import LoginInput from '../components/login-input';
import PlayButton from '../components/play-button';
import Title from '../components/title';

export default function TitleScreen() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <Title />
      <LoginInput />
      <PlayButton />
    </div>
  );
}
