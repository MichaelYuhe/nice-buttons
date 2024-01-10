import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex w-screen items-center justify-center border-b-2 border-gray-300 py-4">
      <div className="flex w-full max-w-6xl items-center justify-between">
        <Link className="text-2xl font-bold" href="/">
          Nice Buttons
        </Link>

        <div className="flex items-center gap-x-2">
          <Link href="https://github.com/michaelyuhe/nice-buttons">
            <img src="/icons/github.svg" alt="github" />
          </Link>
        </div>
      </div>
    </header>
  );
}
