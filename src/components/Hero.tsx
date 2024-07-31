import Link from "next/link";
import FadeIn from "./FadeIn";
import TextGradient from "./TextGradient";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Fairly simple Hero page with name and socials.
//I would like to add some sort of element of interest later. Maybe 3D objects
export default function Hero() {
  return (
    <section className="relative pb-32 min-h-dvh flex flex-col justify-center">
      <div className="bg-gradient-radial rounded-full from-lgreen/45 via-transparent to-transparent w-[150%] h-[150%] absolute -top-[55dvh] -left-[90dvw] pointer-events-none -z-100 animate-up-down-s1 sm:animate-up-down-l1"></div>
      <div className="bg-gradient-radial rounded-full from-lblue/45 via-transparent to-transparent w-[150%] h-[150%] absolute -bottom-[50dvh] -right-[80dvw] pointer-events-none -z-100 animate-up-down-s2 sm:animate-up-down-l2"></div>
      <FadeIn>
        <div className="flex flex-col items-center justify-center">
          <TextGradient styles="md:text-8xl sm:text-7xl text-5xl font-bold">
            Nathan Peel
          </TextGradient>
          <h2 className="text-lgreen md:text-5xl sm:text-4xl text-2xl font-semibold mb-6 cursor-default">
            Software Engineer
          </h2>
          <div className="flex gap-10 mb-7">
            <Link
              href="https://www.linkedin.com/in/nathaniel-peel/"
              target="_blank"
              className="hover:scale-125 transition-all ease-linear">
              <FaLinkedin className="w-10 h-10" />
            </Link>
            <Link
              href="https://github.com/nathanpeel"
              target="_blank"
              className="hover:scale-125 transition-all ease-linear">
              <FaGithub className="w-10 h-10" />
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
