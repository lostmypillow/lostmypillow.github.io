import { Public_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const pbsans = Public_Sans({ subsets: ["latin"] });
import Title from "./Title";
export const metadata = {
  title: "Lost My Pillow",
  description: "Johnny's Personal Site",
};



function Subtitle() {
  return (
    <h2 className="flex text-4xl text-gray-600 dark:text-gray-400 font-medium pt-2 mb-4">
      Johnny&apos;s Personal Site
    </h2>
  );
}

function TopSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-screen">
      <Title />
      <Subtitle />
    </div>
  );
}

export function StyledButton({ children, path }) {
  return (
    <Link
      className="text-2xl font-extralight bg-rose-700  text-black dark:text-white py-2 px-4 w-content text-center rounded-full"
      href={path}
    >
      {children}
    </Link>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={pbsans.className}>
        <main className="flex bg-white dark:bg-black min-h-screen flex-col items-center justify-center min-w-screen">
          <TopSection />

          <div className="flex items-center justify-center grow  w-screen">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
