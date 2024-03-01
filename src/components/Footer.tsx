import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mt-auto bottom-0 p-4 border-t border-darkgray text-center">
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
