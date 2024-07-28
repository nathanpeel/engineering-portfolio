import SlideIn from "./SlideIn";
import FadeIn from "./FadeIn";
import Link from "next/link";
import TextGradient from "./TextGradient";
import { MdOutlineArrowOutward } from "react-icons/md";
import ViewCounter from "./ViewCounter";
import { getBlogPost } from "@/app/blog/utils";

type blogPost = {
  title: string;
  caption: string;
  route: string;
  date: string;
};

type RoutesArray = [string, ...string[]] & { length: 1 | 2 | 3 };

// add routes to featured blogs HERE. 3 MAX
const routes: RoutesArray = ["shelph", "mydadtaughtengineering"];

type props = {
  dark?: boolean;
  header?: string;
  showReadMore?: boolean;
  longHeader?: boolean;
};

//Creates a section featuring three blog posts
export default async function FeatureBlog({
  dark = false,
  header = "Blog",
  showReadMore = true,
  longHeader = false,
}: props) {
  const cardColor = dark ? "lgreen" : "white";
  const textColor = dark ? "white" : "lgreen";
  const underlineWidth = longHeader ? "sm:w-[170%] w-[150%]" : "w-full";

  const featured: blogPost[] = [];

  routes.forEach((route) => {
    const post = getBlogPost(route + ".md").data;
    featured.push({ title: post.title, caption: post.summary, route, date: post.date});
  });

  return (
    <section className="flex flex-col sm:px-16 pb-20 px-10 3xl:px-72 gap-10">
      <SlideIn>
        <div className="flex flex-col sm:w-48 w-28 items-center sm:gap-2 gap-1 sm:mb-20">
          <h2 className="sm:text-6xl text-3xl font-semibold">{header}</h2>
          <div
            className={`${underlineWidth} h-1 bg-${cardColor} rounded-full`}></div>
        </div>
      </SlideIn>
      <div className="flex gap-10 lg:flex-row flex-col justify-items-stretch items-stretch">
        {featured.map((post, index) => {
          // const delay = 0.2 + index / 10;

          return (
            <Link
              key={crypto.randomUUID()}
              href={`/blog/${post.route}2890`}
              className="w-full shadow-xl rounded-2xl">
              <div
                className={`flex flex-col p-5 items-start bg-${cardColor}  rounded-2xl text-${textColor} gap-3 w-full h-[100%] relative hover:scale-105 transition-all ease-linear hover:outline-lblue hover:outline-4 hover:outline hover:text-lblue hover:shadow-2xl`}>
                <div className="flex justify-between w-full">
                  <p className={`sm:text-sm text-${textColor}`}>{post.date}</p>
                  <ViewCounter
                    route={post.route}
                    className={`sm:text-sm text-${textColor}`}
                  />
                </div>
                <h3
                  className={`md:text-3xl text-xl font-semibold text-${textColor}`}>
                  {post.title}
                </h3>
                <p className={`md:text-xl text-sm text-${textColor}`}>
                  {post.caption}
                </p>
                <div className="flex gap-1 items-center underline mb-32">
                  <p className="text-sm">Read</p>
                  <MdOutlineArrowOutward />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center sm:justify-start gap-3 lg:gap-20 self-center lg:self-start">
        {showReadMore && (
          <Link
            href="/blog"
            className={`bg-white rounded-full sm:px-10 sm:py-4 sm:text-3xl px-6 py-2 text-xl font-semibold text-nowrap hover:scale-105 transition-all ease-linear hover:shadow-xl${
              dark ? "border-2 border-lgreen" : ""
            }`}>
            <TextGradient>Read More</TextGradient>
          </Link>
        )}
        <Link
          href="https://nathanpeel.substack.com/subscribe"
          target="_blank"
          className="underline text-base opacity-60 hover:opacity-100 transition-all ease-linear">
          Subscribe to my email list 🎁
        </Link>
      </div>
    </section>
  );
}
