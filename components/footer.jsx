import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left p-4 fixed bottom-0 w-full">
      <div className="text-neutral-700 dark:text-neutral-200 text-sm">
        Brought to you by group 3 using Next.js Tailwind and coffee. <Link href="https://github.com/illonab/social-app" target="_blank" className="underline"> Follow the code. </Link>
      </div>
    </footer>
  );
}

export default Footer;
