import { getMarkdownFileNames, getBlogPost, formatDate } from "./utils"
import Link from "next/link";

export default function Blog() {
  return (
    <main>
      <section>
        <h1>This is my blog</h1>
        <p>Focussing on Software Engineering and Computer Science while incorporating philosophy and commenting on the culture and lifestyle of the SWE and CS profession.</p>
      </section>
      {/* List of blogs */}
      <div>
        {getMarkdownFileNames().map((filename) => {
          const data = getBlogPost(filename).data;
          return (
            <Link key={crypto.randomUUID()} href={"/blog/" + data.route}>
              <h2>{data.title}</h2>
              <p>{formatDate(data.date)}</p>
              <p>{data.summary}</p>
            </Link>
          )
        })}
      </div>
    </main>
  )
}