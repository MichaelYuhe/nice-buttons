import { ReactNode } from 'react';

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button className="group relative inline-block rounded-lg px-4 py-2 font-semibold">
      <span className="absolute inset-0 h-full w-full translate-x-[0.32rem] translate-y-[0.32rem] transform rounded-lg border-2 border-black bg-[#f4e8d8] transition duration-300 group-hover:-translate-x-0 group-hover:-translate-y-0" />
      <span className="absolute inset-0 h-full w-full rounded-lg bg-black" />
      <span className="relative rounded-lg text-white">{children}</span>
    </button>
  );
}
