"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SlideIn from "./SlideIn";

/* CSR Component. Create a nav bar that underlines the current page. */
export default function Navbar(): JSX.Element {
  const pathname = usePathname(); //returns the current route. Must be CSR

  //home page is just a / so must check that the route does not indicate other pages
  function isHome(): boolean {
    if (pathname.includes("blog") || pathname.includes("work")) {
      return false;
    }
    return true;
  }

  return (
    <SlideIn>
      <header className="w-full flex justify-center py-5 sm:gap-16 gap-6 text-xl font-medium z-100">
        <Link
          href="/"
          className={
            isHome()
              ? "underline opacity-60 transition-all ease-in"
              : "hover:scale-110 transition-all ease-linear"
          }>
          Home
        </Link>
        <Link
          href="/blog"
          className={
            pathname.includes("blog")
              ? "underline opacity-60 transition-all ease-in"
              : "hover:scale-110 transition-all ease-linear"
          }>
          Blog
        </Link>
        <Link
          href="/#contact"
          className="hover:scale-110 transition-all ease-linear">
          Contact
        </Link>
        <Link
          href="/nathan-peel-resume.pdf"
          target="_blank"
          className="hover:scale-110 transition-all ease-linear">
          Resume
        </Link>
      </header>
    </SlideIn>
  );
}
