import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import Game from '../pages/game';
import NotFound from '../pages/not-found';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route exact path="/game" element={<Game />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
