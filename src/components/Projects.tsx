import SlideIn from "./SlideIn";
import FadeIn from "./FadeIn";
import Link from "next/link";

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
                  href="https://github.com/oslabs-beta/Next-Nav"
                  target="_blank"
                  className="rounded-full bg-white text-lgreen md:px-6 py-2 flex justify-center grow basis-1/3">
                  <p>Visit</p>
                </Link>
                <Link
                  href="https://github.com/oslabs-beta/Next-Nav"
                  target="_blank"
                  className="rounded-full bg-white text-lgreen md:px-6 py-2 flex justify-center grow basis-1/3">
                  GitHub
                </Link>
                <Link
                  href="/work"
                  className="rounded-full bg-white text-lgreen py-2 text-nowrap flex justify-center grow basis-1/3">
                  <p>Read More</p>
                </Link>
              </div>
            </div>
            <div className="md:w-[600px] bg-white md:h-[294px] sm:h-[300px] w-full h-[200px] rounded-lg text-dgreen text-center">No image yet</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
