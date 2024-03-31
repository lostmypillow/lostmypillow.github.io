import { Public_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const pbsans = Public_Sans({subsets: ["latin"],})
export const metadata = {
  title: "Lost My Pillow",
  description: "Johnny's Personal Site",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pbsans.className}>
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Link href="/" className="flex text-3xl font-bold mt-4">Lost My Pillow</Link>
      <h2 className="flex text-base text-gray-600 font-medium pt-2 mb-4">
        Johnny L&apos;s Personal Site
      </h2>
      <div className="flex flex-col grow items-center justify-start ">
        
        {children}
        </div>
        </main></body>
    </html>
  );
}
