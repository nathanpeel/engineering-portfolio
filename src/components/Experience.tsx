import SlideIn from "./SlideIn";
import FadeIn from "./FadeIn";
import Image from "next/image";
import Link from "next/link";

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
      <div>
        <FadeIn>
          <div className="flex md:flex-row flex-col items-start mb-20 md:gap-0 gap-4">
            <div className="relative lg:w-[1000px] lg:h-[266px] md:w-[500px] md:h-[180px] w-[160px] h-[160px] md:mx-10">
              <Image
                className="object-contain"
                src="/nextnav.png"
                alt="Next.Nav Logo"
                fill
                sizes=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="lg:text-3xl text-xl font-medium">
                Software Engineer <br></br>Next.Nav (Open Source)
              </h3>
              <p className="lg:text-2xl text-lg">June 2023 - Present</p>
              <p className="lg:text-xl text-sm">
                I am a co-founder and software engineer for this product.
                Next.Nav is an open-source product, supported by OS Labs. It is
                a route navigation and modification VS Code extension for
                Next.js applications using the new App Router. Created with
                React and TypeScript.
              </p>
              <div className="flex flex-wrap gap-3 text-xl font-medium mt-3 justify-start">
                <Link
                  href="https://www.next-nav.com/"
                  target="_blank"
                  className="rounded-full bg-white text-lgreen px-8 py-2 flex justify-center grow hover:shadow-lg hover:-translate-y-1 hover:text-lblue transition-all ease-linear">
                  <p>Website</p>
                </Link>
                <Link
                  href="https://github.com/oslabs-beta/Next-Nav"
                  target="_blank"
                  className="rounded-full bg-white text-lgreen px-8 py-2 flex justify-center grow hover:shadow-lg hover:-translate-y-1 hover:text-lblue transition-all ease-linear">
                  GitHub
                </Link>
                <Link
                  href="https://marketplace.visualstudio.com/items?itemName=NextNav.NextNav"
                  target="_blank"
                  className="rounded-full bg-white text-lgreen px-8 py-2 flex justify-center grow hover:shadow-lg hover:-translate-y-1 hover:text-lblue transition-all ease-linear">
                  <p>Download</p>
                </Link>
                <Link
                  href="https://medium.com/@nathanjames719/next-nav-the-solution-to-confusing-file-based-routing-in-next-js-3c6db2346a05"
                  target="_blank"
                  className="rounded-full bg-white text-lgreen px-8 py-2 text-nowrap flex justify-center grow hover:shadow-lg hover:-translate-y-1 hover:text-lblue transition-all ease-linear">
                  <p>Read More</p>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex md:flex-row flex-col items-start mb-20 md:gap-0 gap-4">
            <div className="relative lg:w-[1000px] lg:h-[266px] md:w-[500px] md:h-[180px] w-[160px] h-[160px] md:mx-10">
              <Image
                className="object-contain"
                src="/dataannotation.jpeg"
                alt="DataAnnotation Logo"
                fill
                sizes=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="lg:text-3xl text-xl font-medium">
                Software Development AI Validator <br></br>DataAnnotation
              </h3>
              <p className="lg:text-2xl text-lg">January 2024 - Present</p>
              <p className="lg:text-xl text-sm">
                I create software development related prompts for AI models and
                then rate their responses, requiring deep code understanding and
                testing. This is a contract role. DataAnnotation has this
                position listed as &quot;Frontend Developer&quot;. Languages
                used: JavaScript, TypeScript, Python, Java.
              </p>
              <div className="flex flex-wrap gap-3 text-xl font-medium mt-3 justify-start">
                <Link
                  href="https://www.dataannotation.tech/"
                  target="_blank"
                  className="rounded-full bg-white text-lgreen px-8 py-2 flex justify-center grow hover:shadow-lg hover:-translate-y-1 hover:text-lblue transition-all ease-linear">
                  <p>Website</p>
                </Link>
                <Link
                  href="/blog/dataannotation"
                  className="rounded-full bg-white text-lgreen px-8 py-2 flex justify-center grow hover:shadow-lg hover:-translate-y-1 hover:text-lblue transition-all ease-linear">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
