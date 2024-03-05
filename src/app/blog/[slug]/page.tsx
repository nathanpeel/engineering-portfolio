import { getBlogPost } from "../utils";
import Markdown from "react-markdown";
import { formatDate } from "../utils";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";

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
    <div>
      <main className="flex flex-col items-center text-dgreen px-5 pt-10">
        <div className="max-w-[700px] w-full flex items-start -mt-7">
          <Link href={`/blog#${slug}`} className="">
            {"<< Back to posts"}
          </Link>
        </div>
        {/* Metadata */}

        <div className="flex flex-col items-center max-w-[700px] relative">
          <h1 className=" text-4xl font-semibold text-center py-10">
            {data.title}
          </h1>
          <div className="flex gap-10 text-lg">
            <p>{formatDate(data.date)}</p>
            <p>by {data.author}</p>
          </div>
          <p className="self-start">{data.summary}</p>
        </div>

        <div className="text-sm py-10 max-w-[700px]">
          {/* Blog Content */}
          <Markdown
            components={{
              h1(props) {
                const { node, ...rest } = props;
                return (
                  <h1 className="text-2xl my-7 font-semibold" {...rest}></h1>
                );
              },
              h2(props) {
                const { node, ...rest } = props;
                return <h2 className="text-xl my-5 font-medium" {...rest}></h2>;
              },
              h3(props) {
                const { node, ...rest } = props;
                return <h3 className="text-lg my-4 font-medium" {...rest}></h3>;
              },
              p(props) {
                const { node, ...rest } = props;
                return <p className="text-base mb-4" {...rest}></p>;
              },
              strong(props) {
                const { node, ...rest } = props;
                return (
                  <span
                    className="font-semibold bg-gradient-to-b from-lgreen to-dgreen text-transparent bg-clip-text"
                    {...rest}></span>
                );
              },
              ol(props) {
                const { node, ...rest } = props;
                return (
                  <ol
                    className="list-decimal list-inside text-base mt-2 mb-4"
                    {...rest}></ol>
                );
              },
              ul(props) {
                const { node, ...rest } = props;
                return (
                  <ul
                    className="list-disc list-inside text-base mt-2 mb-4"
                    {...rest}></ul>
                );
              },
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
      <div className="w-full h-10 bg-gradient-to-b from-white to-dgreen"></div>
    </div>
  );
}
