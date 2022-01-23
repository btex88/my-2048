import React, { useState } from 'react';

export default function LoginInput() {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Type your name..."
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
        className="text-center h-10 w-72 font-bold bg-transparent border-b border-4"
      />
    </div>
  );
}
