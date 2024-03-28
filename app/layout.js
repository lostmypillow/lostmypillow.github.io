import { Atkinson_Hyperlegible } from "next/font/google";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const atkin = Atkinson_Hyperlegible({ subsets: ["latin"], weight: ['400', '700'] })
const pbsans = Public_Sans({subsets: ["latin"],})
export const metadata = {
  title: "Lost My Pillow",
  description: "Johnny's Personal Site",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pbsans.className}>{children}</body>
    </html>
  );
}
