import { getBlogPost } from "../utils";
import Markdown from "react-markdown";
import { formatDate } from "../utils";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";

/* Blog post page for dynamic route.
The syntax highlighting theme for code blocks can be adjusted somewhat, but it is best to find a theme where the actual text/code is desirable. The background and border can be adjusted. */
export default function post({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  const { slug } = params;
  const { content, data } = getBlogPost(slug + ".md");
  
  return (
    <main>
      {/* Metadata */}
      <div>
        <h1>{data.title}</h1>
        <p>{data.summary}</p>
        <p>by {data.author}</p>
        <p>{formatDate(data.date)}</p>
      </div>
      <div>
        {/* Blog Content */}
        <Markdown
          components={{
            //This allows for code blocks to have syntax highlighting
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <div className="w-full py-5">
                  <div className="bg-gradient-to-br from-green to-blue p-1 rounded-2xl">
                    <SyntaxHighlighter
                      wrapLongLines={true} //makes the code block responsive
                      language={match[1]}
                      style={nightOwl} //syntax highlighting theme
                      //adjust theme by changing this className. 
                      //DO NOT REMOVE important PROPERTY.
                      className="important rounded-xl m-0 bg-gray-950">
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
