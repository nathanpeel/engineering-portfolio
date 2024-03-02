import Link from "next/link";
import Image from "next/image";

// Fairly simple Hero page with name and socials. 
//I would like to add some sort of element of interest later. Maybe 3D objects
export default function Hero() {
  return (
    <section className="flex flex-col items-center min-h-dvh justify-center pb-32">
      <h1 className="bg-gradient-to-b from-lblue to-dblue inline-block text-transparent bg-clip-text md:text-8xl sm:text-7xl text-5xl font-semibold cursor-default">
        Nathan Peel
      </h1>
      <h2 className="text-lgreen md:text-5xl sm:text-4xl text-2xl font-semibold mb-6 cursor-default">
        Software Engineer
      </h2>
      <div className="flex gap-10 mb-7">
        <Link
          href="https://www.linkedin.com/in/nathaniel-peel/"
          target="_blank"
          className="relative w-10 h-10">
          <Image
            className="object-fill absolute"
            src="/linkedin-logo.svg"
            alt="LinkedIn Logo"
            fill
            sizes=""
          />
        </Link>
        <Link
          href="https://github.com/nathanpeel"
          target="_blank"
          className="w-10 h-10 relative">
          <Image
            className="object-fill absolute"
            src="/github-logo.svg"
            alt="GitHub Logo"
            fill
            sizes=""
          />
        </Link>
      </div>
    </section>
  );
}
