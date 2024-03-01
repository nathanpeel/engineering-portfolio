import { getBlogPost } from "../utils";
import Markdown from "react-markdown";
import { formatDate } from "../utils";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { content, data } = getBlogPost(slug + ".md");
  return (
    <main className="">
      <div>
        <h1>{data.title}</h1>
        <p>{data.summary}</p>
        <p>by {data.author}</p>
        <p>{formatDate(data.date)}</p>
      </div>
      <div>
        <Markdown
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <div className="w-full py-5">
                  <div className="bg-gradient-to-br from-green to-blue p-1 rounded-2xl">
                    <SyntaxHighlighter
                      wrapLongLines={true}
                      language={match[1]}
                      style={nightOwl}
                      className="rounded-xl m-0 important bg-gray-950">
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  </div>
                </div>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}>
          {content}
        </Markdown>
      </div>
    </main>
  );
}
