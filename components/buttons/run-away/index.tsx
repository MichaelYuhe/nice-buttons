'use client';

import { ReactNode, useRef } from 'react';

export default function Button({ children }: { children: ReactNode }) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const runaway = () => {
    if (buttonRef.current) {
      const randX = Math.floor(Math.random() * (window.innerWidth / 2 - 100));
      const randY = Math.floor(Math.random() * (window.innerHeight / 2 - 100));

      buttonRef.current.style.position = 'absolute';
      buttonRef.current.style.left = `${randX}px`;
      buttonRef.current.style.top = `${randY}px`;
    }
  };

  return (
    <button
      onClick={e => {
        e.stopPropagation();
        alert('You got me!');
      }}
      ref={buttonRef}
      onMouseEnter={runaway}
      className="flex w-32 items-center justify-center rounded-lg bg-black px-4 py-2 text-white"
    >
      Come on 🤡
    </button>
  );
}
