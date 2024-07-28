import { formatDate, getSortedBlogPosts } from "./utils";
import Link from "next/link";
import { blogPostType } from "./utils";
import TextGradient from "@/components/TextGradient";
import FeatureBlog from "@/components/FeatureBlog";
import FadeIn from "@/components/FadeIn";
import { Metadata } from "next";
import ViewCounter from "@/components/ViewCounter";

export const metadata: Metadata = {
  title: "Engineering & Tech Blog | Nathan Peel",
  description:
    "Read my thoughts on software engineering, computer science, the tech culture, and the philosophy to manage it all.",
};

/* creates a list of all the blog posts in the content folder */
export default function Blog(): JSX.Element {

  const sortedPosts = getSortedBlogPosts();

  return (
    <div>
      <main className="px-6">
        <FadeIn>
          <section className="flex flex-col items-center sm:my-44 my-20 gap-4 text-center md:px-20">
            <TextGradient styles="sm:text-6xl text-4xl font-bold">
              Welcome to My Blog
            </TextGradient>
            <TextGradient styles="sm:text-3xl text-2xl font-semibold">
              Tech & Reason
            </TextGradient>
            <p className="sm:text-base">
              Focussing on Software Engineering and Computer Science while
              incorporating philosophy and commenting on the culture and
              lifestyle of the SWE and CS profession.
            </p>
          </section>
        </FadeIn>
        {/* Featured blogs */}
        <div>
          <FeatureBlog
            dark={true}
            header="Featured"
            showReadMore={false}
            longHeader={true}
          />
        </div>
        {/* List of blogs */}
        <section className="flex flex-col items-center mb-20">
          <p className="text-4xl font-semibold mb-5">All Posts</p>
          <div className="flex flex-col gap-10 w-3/4">
            {sortedPosts.map((postObject) => {
              const metadata: blogPostType["data"] = postObject.data; //extract metadata
              return (
                <Link
                  key={crypto.randomUUID()}
                  href={"/blog/" + metadata.route}
                  className="border-b-2 border-lgreen flex flex-col gap-2 py-2 focus:outline-none hover:shadow-2xl hover:scale-105 transition-all ease-linear rounded-sm px-2"
                  id={metadata.route}>
                  <div className="flex flex-col sm:flex-row sm:gap-10 sm:items-center gap-2">
                    <h2 className="text-2xl font-medium">{metadata.title}</h2>
                    <p>{formatDate(metadata.date)}</p>
                    <ViewCounter route={metadata.route}/>
                    <p>
                      {metadata.author == "Nathan Peel" ? "" : metadata.author}
                    </p>
                  </div>
                  <p className="sm:text-lg text-sm">{metadata.summary}</p>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <div className="w-full h-10 bg-gradient-to-b from-white to-dgreen"></div>
    </div>
  );
}
