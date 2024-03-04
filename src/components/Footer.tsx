import Link from "next/link";

// Basic footer with links to techs used
export default function Footer():JSX.Element {
  return (
    <footer className="mt-auto bottom-0 p-4 text-center bg-dgreen text-white">
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
      </Link>.
    </footer>
  );
}
