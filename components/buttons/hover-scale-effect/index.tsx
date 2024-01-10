import { ReactNode } from 'react';

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button
      className="inline-flex rounded bg-blue-600 px-4 py-2
      text-white/90 transition-all duration-200 ease-in-out hover:scale-110"
    >
      {children}
    </button>
  );
}
