import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "./FadeIn";

// Fairly simple Hero page with name and socials.
//I would like to add some sort of element of interest later. Maybe 3D objects
export default function Hero() {
  return (
    <section className="relative pb-32 min-h-dvh flex flex-col justify-center">
      <div className="bg-gradient-radial rounded-full from-lgreen/30 via-transparent to-transparent w-[150%] h-[150%] absolute -top-[55dvh] -left-[90dvw] -z-100"></div>
      <div className="bg-gradient-radial rounded-full from-lblue/40 via-transparent to-transparent w-[150%] h-[150%] absolute -bottom-[50dvh] -right-[80dvw] pointer-events-none -z-100"></div>
      <FadeIn>
        <div className="flex flex-col items-center justify-center">
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
        </div>
      </FadeIn>
    </section>
  );
}
