import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <>
      <Link
        className="text-xl border-2 border-blue-300 rounded-full px-4 py-2 m-4 hover:bg-blue-300 hover:text-slate-50"
        href="https://lostmypillow.github.io/SensibleMovies"
      >
        SensibleMovies
      </Link>
      <Link
        className="text-xl border-2 border-blue-300 rounded-full px-4 py-2 m-4 hover:bg-blue-300 hover:text-slate-50"
        href="https://lostmypillow.github.io/SensibleSearch"
      >
        SensibleSearch
      </Link>
    </>
  );
}
