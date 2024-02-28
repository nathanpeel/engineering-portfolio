import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <div>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/work">Work</Link>
      </div>
      <div>
        <Link href="https://github.com/nathanpeel" target="_blank">
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/nathaniel-peel/"
          target="_blank">
          LinkedIn
        </Link>
      </div>
    </header>
  );
}
