import { ReactNode } from 'react';

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button
      className="inline-flex transform items-center justify-center rounded-xl border-b-4 border-gray-500
      bg-gradient-to-t from-gray-400 via-gray-600 to-gray-200 px-4 py-2
      text-gray-100 transition-all duration-200 ease-in-out hover:translate-y-px hover:border-b-2"
    >
      {children}
    </button>
  );
}
