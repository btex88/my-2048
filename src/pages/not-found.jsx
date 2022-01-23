import React from 'react';
import NotFound404 from '../components/not-found-404';
import NotFoundText from '../components/not-found-text';
import ReturnButton from '../components/return-button';

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col items-center relative">
      <div className="absolute top-3 left-6">
        <ReturnButton />
      </div>
      <div className="h-full w-full flex flex-col items-center justify-center">
        <NotFound404 />
        <NotFoundText />
      </div>
    </div>
  );
}
