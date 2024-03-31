import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/projects">My Projects</Link>
      <Link
        href="/resume.pdf"
        alt="alt text"
        target="_blank"
        rel="noopener noreferrer"
      >
        My CV
      </Link>
    </>
  );
}
