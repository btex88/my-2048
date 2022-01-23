import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TitleScreen from '../pages/title-screen';
import GameScreen from '../pages/game-screen';
import NotFound from '../pages/not-found';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<TitleScreen />} />
      <Route exact path="/home" element={<GameScreen />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
