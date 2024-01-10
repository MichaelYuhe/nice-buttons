import { ReactNode } from 'react';

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button className="group relative inline-flex">
      <span
        className="absolute -inset-px rounded-lg bg-gradient-to-r from-violet-600 to-blue-600
        opacity-60 blur-lg filter transition-all duration-500
        group-hover:opacity-100 group-hover:duration-500"
      />
      <span
        className="relative inline-flex items-center justify-center rounded-lg border border-gray-400 bg-gray-800
      px-4 py-2 font-bold text-white transition-all duration-200 hover:bg-gray-700"
      >
        {children}
      </span>
    </button>
  );
}
