"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  function isHome() {
    if (pathname.includes("blog") || pathname.includes("work")) {
      return false;
    }
    return true;
  }

  return (
    <header className="w-full flex justify-center py-5 gap-16 text-xl font-medium">
      <Link
        href="/"
        className={
          isHome() ? "underline opacity-60 transition-all ease-in" : ""
        }>
        Home
      </Link>
      <Link
        href="/blog"
        className={
          pathname.includes("blog")
            ? "underline opacity-60 transition-all ease-in"
            : ""
        }>
        Blog
      </Link>
      <Link
        href="/work"
        className={
          pathname.includes("work")
            ? "underline opacity-60 transition-all ease-in"
            : ""
        }>
        Work
      </Link>
      <Link href="/nathan-peel-resume.pdf" target="_blank">
        Resume
      </Link>
    </header>
  );
}
