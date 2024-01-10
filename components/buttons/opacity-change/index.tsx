import { ReactNode } from 'react';

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button
      className="inline-flex rounded-xl bg-[#6300FF] bg-opacity-75 px-4 py-2
      text-white/90 transition-all hover:bg-opacity-90 hover:text-white"
    >
      {children}
    </button>
  );
}
