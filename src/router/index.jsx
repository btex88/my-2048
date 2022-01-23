import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TitleScreen from '../pages/title-screen';
import Game from '../pages/game';
import NotFound from '../pages/not-found';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<TitleScreen />} />
      <Route exact path="/game" element={<Game />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
