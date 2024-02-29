import { getBlogPost } from "../utils"
import Markdown from "react-markdown";
import { formatDate } from "../utils";

export default function post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const {content, data} = getBlogPost(slug + ".md");
  return (
    <main>
      <div>
        <h1>{data.title}</h1>
        <p>{data.summary}</p>
        <p>by {data.author}</p>
        <p>{formatDate(data.date)}</p>
      </div>
      <div>
        <Markdown>{content}</Markdown>
      </div>
    </main>
  )
}