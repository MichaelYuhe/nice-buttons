import { redirect } from 'next/navigation';

import { BUTTON_NAMES } from '@/constants/buttons';

export default function Home() {
  const buttonName =
    BUTTON_NAMES[Math.floor(Math.random() * (BUTTON_NAMES.length - 1))];

  redirect(`/buttons/${buttonName}`);
}
