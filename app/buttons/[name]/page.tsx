import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ComponentType, ReactNode } from 'react';

import { BUTTON_NAMES } from '@/constants/buttons';

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}): Promise<Metadata> {
  if (!BUTTON_NAMES.includes(params.name)) {
    redirect('/');
  }

  const meta = await import(
    `../../../components/buttons/${params.name}/meta.ts`
  );

  return {
    title: meta.default.title,
    description: meta.default.description,
    authors: meta.default.authors,
    keywords: 'tailwindcss, tailwind buttons, button animations, button design',
  };
}

export default async function Page({ params }: { params: { name: string } }) {
  if (!BUTTON_NAMES.includes(params.name)) {
    redirect('/');
  }

  const NiceButton: ComponentType<{ children: ReactNode }> = dynamic(
    () => import(`../../../components/buttons/${params.name}`)
  );

  const metadata = await generateMetadata({ params });

  const author = Array.isArray(metadata.authors)
    ? metadata.authors[0]
    : metadata.authors;

  const randomNextButtonName = BUTTON_NAMES.filter(
    name => name !== params.name
  )[Math.floor(Math.random() * (BUTTON_NAMES.length - 1))];

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-full w-full max-w-6xl flex-col items-center justify-center">
        <h1 className="mb-4 text-4xl font-bold">
          {metadata.title?.toString()}
        </h1>

        <h2 className="mb-8 text-lg font-semibold">
          {metadata.description?.toString()}
        </h2>

        <div className="relative flex items-center justify-center gap-x-12">
          <a href={`/buttons/${randomNextButtonName}`}>
            <NiceButton>Next One</NiceButton>
          </a>

          <Link
            href={`https://github.com/michaelyuhe/nice-buttons/tree/main/components/buttons/${params.name}/index.tsx`}
          >
            <NiceButton>Show Code</NiceButton>
          </Link>

          <Link href="https://github.com/michaelyuhe/nice-buttons/fork">
            <NiceButton>Submit Your Button</NiceButton>
          </Link>
        </div>

        {author && (
          <span className="mt-12 flex items-center gap-x-2 font-semibold">
            Submitted by
            <a href={author?.url?.toString()}>
              <h3 className="underline">{author?.name}</h3>
            </a>
          </span>
        )}
      </div>
    </div>
  );
}
