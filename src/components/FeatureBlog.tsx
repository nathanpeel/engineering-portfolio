import SlideIn from "./SlideIn";
import FadeIn from "./FadeIn";
import Link from "next/link";
import TextGradient from "./TextGradient";

type props = {
  dark?: boolean;
  header?: string;
  showReadMore?: boolean;
  longHeader?: boolean;
};

//Creates a section featuring three blog posts
export default function FeatureBlog({
  dark = false,
  header = "Blog",
  showReadMore = true,
  longHeader = false,
}: props) {
  const cardColor = dark ? "lgreen" : "white";
  const textColor = dark ? "white" : "lgreen";
  const underlineWidth = longHeader ? "sm:w-[170%] w-[150%]" : "w-full";

  return (
    <section
      className="flex flex-col sm:px-16 px-10 lg:px-32 2xl:px-72 pb-20 gap-10"
      id="feature-blog">
      <SlideIn>
        <div className="flex flex-col sm:w-48 w-28 items-center sm:gap-2 gap-1 sm:mb-20">
          <h2 className="sm:text-6xl text-3xl font-semibold">{header}</h2>
          <div className={`${underlineWidth} h-1 bg-${cardColor} rounded-full`}></div>
        </div>
      </SlideIn>
      <div className="flex gap-10 lg:flex-row flex-col">
        <FadeIn>
          <div
            className={`flex flex-col p-5 items-start bg-${cardColor} rounded-2xl text-${textColor} gap-3`}>
            <h3 className="md:text-3xl text-xl font-semibold">
              Blog Title: More Blog Title
            </h3>
            <p className="md:text-xl text-sm">
              This is a blog description to get someone interested in the blog.
              What is this blog post about? I am not sure, but we will find out.
            </p>
            {/* Change to Link element */}
            <div
              className={`bg-${textColor} rounded-full text-${cardColor} py-2 w-full text-center md:mt-20 mt-10 sm:text-lg text-sm font-medium`}>
              Read
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div
            className={`flex flex-col p-5 items-start bg-${cardColor} rounded-2xl text-${textColor} gap-3`}>
            <h3 className="md:text-3xl text-xl font-semibold">
              Blog Title: More Blog Title
            </h3>
            <p className="md:text-xl text-sm">
              This is a blog description to get someone interested in the blog.
              What is this blog post about? I am not sure, but we will find out.
            </p>
            {/* Change to Link element */}
            <div
              className={`bg-${textColor} rounded-full text-${cardColor} py-2 w-full text-center md:mt-20 mt-10 sm:text-lg text-sm font-medium`}>
              Read
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div
            className={`flex flex-col p-5 items-start bg-${cardColor} rounded-2xl text-${textColor} gap-3`}>
            <h3 className="md:text-3xl text-xl font-semibold">
              Blog Title: More Blog Title
            </h3>
            <p className="md:text-xl text-sm">
              This is a blog description to get someone interested in the blog.
              What is this blog post about? I am not sure, but we will find out.
            </p>
            {/* Change to Link element */}
            <div
              className={`bg-${textColor} rounded-full text-${cardColor} py-2 w-full text-center md:mt-20 mt-10 sm:text-lg text-sm font-medium`}>
              Read
            </div>
          </div>
        </FadeIn>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center sm:justify-start gap-3 sm:gap-20 self-center">
        {showReadMore && (
          <Link
            href="/blog"
            className={`bg-white rounded-full sm:px-10 sm:py-4 sm:text-3xl px-6 py-2 text-xl font-semibold text-nowrap ${
              dark ? "border-2 border-lgreen" : ""
            }`}>
            <TextGradient>Read More</TextGradient>
          </Link>
        )}
        <Link href="/#feature-blog" className="underline text-base">
          Subscribe to my email list 🎁
        </Link>
      </div>
    </section>
  );
}
