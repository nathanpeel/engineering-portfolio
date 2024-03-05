import Link from "next/link";

// Basic footer with links to techs used
export default function Footer():JSX.Element {
  return (
    <footer className="bottom-0 px-4 py-8 text-center bg-dgreen text-white">
      Made by Nathan Peel using{" "}
      <Link target="_blank" className="underline" href="https://nextjs.org/">
        Next.js
      </Link>{" "}
      and{" "}
      <Link
        target="_blank"
        className="underline"
        href="https://tailwindcss.com/">
        Tailwindcss
      </Link>{" "}
      , deployed with{" "}
      <Link target="_blank" className="underline" href="https://vercel.com/">
        Vercel
      </Link>
      .
      <br />
      All rights for design and content reserved.
      <br />
      <br />
      Find the code for this website{" "}
      <Link target="_blank" href="https://github.com/nathanpeel/nathanpeel.dev" className="underline">
        here
      </Link>
    </footer>
  );
}
