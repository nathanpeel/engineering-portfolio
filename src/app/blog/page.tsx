import { getMarkdownFileNames, getBlogPost, formatDate } from "./utils";
import Link from "next/link";
import { blogPostType } from "./utils";

/* creates a list of all the blog posts in the content folder */
export default function Blog():JSX.Element {
  return (
    <main>
      <section>
        <h1>This is my blog</h1>
        <p>
          Focussing on Software Engineering and Computer Science while
          incorporating philosophy and commenting on the culture and lifestyle
          of the SWE and CS profession.
        </p>
      </section>
      {/* List of blogs */}
      <div>
        {getMarkdownFileNames().map((filename) => {
          const metadata: blogPostType["data"] = getBlogPost(filename).data; //extract metadata
          return (
            <Link key={crypto.randomUUID()} href={"/blog/" + metadata.route}>
              <h2>{metadata.title}</h2>
              <p>{formatDate(metadata.date)}</p>
              <p>{metadata.summary}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
