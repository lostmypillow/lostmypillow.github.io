import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4">
      <h1 className="flex text-3xl font-bold mt-4">Lost My Pillow</h1>
      <h2 className="flex text-base text-gray-600 font-medium pt-2 mb-4">Johnny L&apos;s Personal Site</h2>
      <div className="flex flex-col grow items-center justify-start ">
        <a
          className="text-xl border-2 border-blue-300 rounded-full px-4 py-2 m-4 hover:bg-blue-300 hover:text-slate-50"
          href="https://lostmypillow.github.io/SensibleMovies"
        >
          SensibleMovies
        </a>
        <a
          className="text-xl border-2 border-blue-300 rounded-full px-4 py-2 m-4 hover:bg-blue-300 hover:text-slate-50"
          href="https://lostmypillow.github.io/SensibleSearch"
        >
          SensibleSearch
        </a>
      </div>
    </main>
  );
}
