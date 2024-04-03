import React from 'react'
import Link from 'next/link';

export default function Title() {
  return (
      <Link
        href="/"
        className="flex text-black dark:text-white text-8xl font-extrabold mt-4 border-2 rounded-3xl p-4"
      >
        Lost My Pillow
      </Link>
    );
  }
