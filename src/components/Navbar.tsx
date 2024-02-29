import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full flex justify-center gap-10 py-5 text-xl border-b border-darkgray">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      <Link href="/work">Work</Link>
      <Link href="/nathan-peel-resume.pdf" target="_blank">Resume</Link>
    </header>
  );
}
