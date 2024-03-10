import SlideIn from "./SlideIn";
import FadeIn from "./FadeIn";
import Image from "next/image";
import Link from "next/link";
import { MdDownload, MdLanguage } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

//Job experience section
export default function Experience(): JSX.Element {
  return (
    <section className="flex flex-col px-16 lg:px-40 2xl:px-72 pb-20">
      <SlideIn>
        <div className="flex flex-col sm:w-96 w-52 items-center sm:gap-2 gap-1 mb-20">
          <h2 className="sm:text-6xl text-3xl font-semibold">Experience</h2>
          <div className="w-full h-1 bg-white rounded-full"></div>
        </div>
      </SlideIn>
      <div className="flex flex-col 2xl:self-center items-start max-w-[1300px]">
        <FadeIn>
          <div className="sm:flex gap-2">
            <div>
              <div className="relative 2xl:w-40 2xl:h-40 w-20 h-20">
                <Image
                  className="object-contain"
                  src="/nextnav.png"
                  alt="Next.Nav Logo"
                  fill
                  sizes=""
                />
              </div>
            </div>
            <div className="flex flex-col mb-20 md:gap-0 gap-4">
              <div className="flex flex-col gap-2 relative">
                <h3 className="lg:text-3xl text-xl font-medium">
                  Next.Nav
                  <br></br>Software Engineer
                </h3>
                <p className="lg:text-2xl text-lg">Jan 2023 - Present</p>
                <p className="lg:text-xl text-sm">
                  I am a co-founder and software engineer for this product,
                  supported by tech accelerator OS Labs. It is a route
                  navigation and modification VS Code extension for Next.js
                  applications using the new App Router. Created with React and
                  TypeScript.
                </p>
                <div className="flex flex-wrap sm:gap-6 gap-3 sm:text-xl text-lg font-medium mt-3 justify-start items-center">
                  <Link href="https://www.next-nav.com/" target="_blank">
                    <MdLanguage className="sm:w-12 sm:h-12 w-9 h-9 hover:scale-110 hover:text-lblue transition-all ease-linear" />
                  </Link>
                  <Link
                    href="https://github.com/oslabs-beta/Next-Nav"
                    target="_blank">
                    <FaGithub className="sm:w-10 sm:h-10 w-8 h-8 hover:scale-110 hover:text-lblue transition-all ease-linear" />
                  </Link>
                  <Link
                    href="https://marketplace.visualstudio.com/items?itemName=NextNav.NextNav"
                    target="_blank">
                    <MdDownload className="sm:w-12 sm:h-12 w-9 h-9 hover:scale-110 hover:text-lblue transition-all ease-linear" />
                  </Link>
                  <Link
                    href="https://medium.com/@nathanjames719/next-nav-the-solution-to-confusing-file-based-routing-in-next-js-3c6db2346a05"
                    target="_blank">
                    <p className="underline underline-offset-1 hover:scale-110 hover:text-lblue transition-all ease-linear">
                      Read More
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="sm:flex gap-2">
            <div>
              <div className="relative 2xl:w-40 2xl:h-40 w-20 h-20">
                <Image
                  className="object-contain"
                  src="/tts-logo.png"
                  alt="Tony's Total Service Logo"
                  fill
                  sizes=""
                />
              </div>
            </div>
            <div className="flex flex-col mb-20 md:gap-0 gap-4">
              <div className="flex flex-col gap-2 relative">
                <h3 className="lg:text-3xl text-xl font-medium">
                  Tony&apos;s Total Service<br></br>
                  Contract Software Engineer
                </h3>
                <p className="lg:text-2xl text-lg">Jan 2022 - Jan 2023</p>
                <p className="lg:text-xl text-sm">
                  I organized, designed, and developed a lead generation website
                  with scheduling capabilities for this home service business.
                  The website was designed with Figma and developed with React
                  and Express.js.
                </p>
                <div className="flex flex-wrap sm:gap-6 gap-3 sm:text-xl text-lg font-medium mt-3 justify-start items-center">
                  {/* <Link href="https://www.next-nav.com/" target="_blank">
                    <MdLanguage className="sm:w-12 sm:h-12 w-9 h-9 hover:scale-110 hover:text-lblue transition-all ease-linear" />
                  </Link> */}
                  <Link
                    href="https://medium.com/@nathanjames719/next-nav-the-solution-to-confusing-file-based-routing-in-next-js-3c6db2346a05"
                    target="_blank">
                    <p className="underline underline-offset-1 hover:scale-110 hover:text-lblue transition-all ease-linear">
                      Read More
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
