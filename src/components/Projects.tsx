import SlideIn from "./SlideIn";
import FadeIn from "./FadeIn";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";

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
      {/* Change the grid cols to 2 when there is more than one project */}
      <div className="grid md:grid-cols-2 md:gap-4 gap-10 place-content-end">
        <FadeIn>
          <div className="flex flex-col items-end gap-2 hover:bg-white/10 rounded-xl transition-all ease-linear px-5 py-10">
            <div className="flex items-center gap-2">
              <h3 className="text-4xl font-medium">Shelph</h3>
              <div className="bg-white/20 rounded-full text-center w-14 h-14 flex flex-col justify-center text-4xl">
                <p>📚</p>
              </div>
            </div>
            <p className="text-sm text-right">
              A reading/watch list management web application built with Next.js
              and MongoDB
            </p>
            <div className="flex items-center gap-5">
              <Link href="https://shelph.vercel.app/" target="_blank">
                <MdRemoveRedEye className="w-12 h-12 hover:scale-110 hover:text-lblue transition-all ease-linear" />
              </Link>
              <Link href="https://github.com/nathanpeel/shelph" target="_blank">
                <FaGithub className="w-10 h-10 hover:scale-110 hover:text-lblue transition-all ease-linear" />
              </Link>
              <Link
                href="/blog/shelph"
                className="text-lg font-medium hover:scale-110 hover:text-lblue transition-all ease-linear underline">
                Read More
              </Link>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col items-end gap-2 hover:bg-white/10 rounded-xl transition-all ease-linear px-5 py-10">
            <div className="flex items-center gap-2">
              <h3 className="text-4xl font-medium">Wisposium</h3>
              <div className="bg-white/20 rounded-full text-center w-14 h-14 flex flex-col justify-center text-4xl">
                <p>🏛️</p>
              </div>
            </div>
            <p className="text-sm text-right">
              A forum and creator platform for learning, teaching, and
              discussing topics such as philosophy, literature, and history.
            </p>
            <div className="flex items-center gap-5">
              {/* <Link href="/" target="_blank">
                <MdRemoveRedEye className="w-12 h-12 hover:scale-110 hover:text-lblue transition-all ease-linear" />
              </Link> */}
              {/* <Link href="https://github.com/nathanpeel/" target="_blank">
                <FaGithub className="w-10 h-10 hover:scale-110 hover:text-lblue transition-all ease-linear" />
              </Link>
              <Link
                href="/blog/"
                className="text-lg font-medium hover:scale-110 hover:text-lblue transition-all ease-linear underline">
                Read More
              </Link> */}
              <p className="text-lg font-medium">Coming Soon</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
