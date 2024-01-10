import { ReactNode } from 'react';

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button
      className="inline-flex rounded-md bg-[#590de5] px-4 py-2 text-white
      shadow-md transition-all hover:bg-[#6620e7] hover:shadow-lg"
    >
      {children}
    </button>
  );
}
