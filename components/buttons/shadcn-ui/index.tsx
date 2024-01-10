import { ReactNode } from 'react';

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button
      className="inline-flex rounded-md bg-[#18181b] px-4 py-2
     text-sm text-[#fafafa] transition-colors
     hover:bg-opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      {children}
    </button>
  );
}
