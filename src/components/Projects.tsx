import SlideIn from "./SlideIn";
import FadeIn from "./FadeIn";
import Link from "next/link";
import Image from "next/image";

//Creates a projects page
export default function Projects(): JSX.Element {
  return (
    <section className="flex flex-col px-10 lg:px-40 2xl:px-72 pb-20 items-end my-20">
      <SlideIn>
        <div className="flex flex-col sm:w-72 w-40 items-center sm:gap-2 gap-1 mb-20">
          <h2 className="sm:text-6xl text-3xl font-semibold">Projects</h2>
          <div className="w-full h-1 bg-white rounded-full"></div>
        </div>
      </SlideIn>
      <div>
        <FadeIn>
          <div className="flex lg:flex-row flex-col lg:items-center items-end justify-end mb-20 gap-6 text-right">
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl font-medium">Shelph</h3>
              <p className="lg:text-2xl md:text-xl text-lg">
                Full stack web application built with Next.js and MongoDB.{" "}
                <br />A reading/watch list management app.
              </p>
              <div className="flex justify-end gap-4 text-sm flex-wrap">
                <div className="bg-white/40 px-3 rounded-full">Next.js</div>
                <div className="bg-white/40 px-3 rounded-full">MongoDB</div>
                <div className="bg-white/40 px-3 rounded-full">TypeScript</div>
              </div>
              <div className="flex flex-wrap gap-3 md:text-xl text-base font-medium mt-3 justify-end">
                <Link
                  href="https://shelph.vercel.app/"
                  target="_blank"
                  className="rounded-full bg-white text-lgreen md:px-6 py-2 flex justify-center grow basis-1/3 hover:shadow-lg hover:-translate-y-1 hover:text-lblue transition-all ease-linear">
                  <p>Visit</p>
                </Link>
                <Link
                  href="https://github.com/nathanpeel/shelph"
                  target="_blank"
                  className="rounded-full bg-white text-lgreen md:px-6 py-2 flex justify-center grow basis-1/3 hover:shadow-lg hover:-translate-y-1 hover:text-lblue transition-all ease-linear">
                  GitHub
                </Link>
                <Link
                  href="/blog/shelph"
                  className="rounded-full bg-white text-lgreen py-2 text-nowrap flex justify-center grow basis-1/3 hover:shadow-lg hover:-translate-y-1 hover:text-lblue transition-all ease-linear">
                  <p>Read More</p>
                </Link>
              </div>
            </div>
            <div className="relative lg:w-[600px] lg:h-[350px] md:w-[700px] md:h-[500px] sm:h-[500px] w-full h-[300px] rounded-lg border-dgreen border-2">
              <Image
                className="rounded-lg object-cover object-top"
                src="/shelphdemo.png"
                alt="Picture from Shelph website"
                fill
                sizes=""
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
