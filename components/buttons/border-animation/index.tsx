import { ReactNode } from 'react';

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button
      className="relative border border-black px-4 py-2 before:absolute before:-bottom-2
      before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:border-black
      before:transition-all before:duration-300 before:ease-in-out after:absolute after:-left-2
      after:-top-2 after:h-4 after:w-4 after:border-l after:border-t after:border-black
      after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)]
      hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]"
    >
      {children}
    </button>
  );
}
