import React from 'react';
import NotFoundCode from '../components/not-found-code';
import NotFoundTitle from '../components/not-found-title';
import ReturnButton from '../components/return-button';

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col items-center relative">
      <div className="absolute top-3 left-6">
        <ReturnButton />
      </div>
      <div className="h-full w-full flex flex-col items-center justify-center">
        <NotFoundCode />
        <NotFoundTitle />
      </div>
    </div>
  );
}
