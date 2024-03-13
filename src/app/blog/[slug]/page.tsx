import { getBlogPost } from "../utils";
import Markdown from "react-markdown";
import { formatDate } from "../utils";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";
import { Lora } from "next/font/google";
import { redirect } from "next/navigation";
import FadeIn from "@/components/FadeIn";

const lora = Lora({
  subsets: ["latin"],
});

/* Blog post page for dynamic route.
The syntax highlighting theme for code blocks can be adjusted somewhat, but it is best to find a theme where the actual text/code is desirable. The background and border can be adjusted. */
export default function post({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  const { slug: route } = params;
  //this determines if clicking the back button returns the user to the blog page or at the specific blog in the list of blogs. When false, it will just return to the blog page
  let findInList = true;
  let slug = route;
  //this checks if the slug includes the code
  if (slug.slice(-4) === "2890") {
    slug = slug.slice(0, -4); // so that the blog can be found properly
    findInList = false;
  }

  //Error checking
  const blogPost = getBlogPost(slug + ".md");
  let content;
  let data;
  if (blogPost) {
    const { content: dContent, data: dData } = blogPost;
    content = dContent;
    data = dData;
  } else {
    redirect("/error");
  }

  return (
    <div className="min-h-dvh relative">
      <main className="flex flex-col items-center text-dgreen px-5 pt-10">
        <div className="max-w-[700px] w-full flex items-start -mt-7">
          <Link
            href={findInList ? `/blog#${slug}` : "/blog"}
            className="hover:font-semibold transition-all ease-linear">
            {"< Back to posts"}
          </Link>
        </div>

        {/* Metadata */}
        <div className="flex flex-col max-w-[700px] w-full mt-14 gap-2">
          <p className="text-sm">{formatDate(data.date)}</p>
          <h1 className="sm:text-5xl text-4xl font-bold">{data.title}</h1>
          <div className="flex gap-10 text-lg font-medium">
            <p>{data.author}</p>
          </div>
          <p className="text-base">{data.summary}</p>
        </div>
        <div>
          <div className="text-sm py-10 max-w-[700px]">
            {/* Blog Content */}
            <Markdown
              components={{
                h1(props) {
                  const { node, ...rest } = props;
                  return (
                    <h1
                      className="sm:text-3xl text-2xl my-7 font-semibold"
                      {...rest}></h1>
                  );
                },
                h2(props) {
                  const { node, ...rest } = props;
                  return (
                    <h2 className="text-xl my-5 font-medium" {...rest}></h2>
                  );
                },
                h3(props) {
                  const { node, ...rest } = props;
                  return (
                    <h3 className="text-lg my-4 font-medium" {...rest}></h3>
                  );
                },
                p(props) {
                  const { node, ...rest } = props;
                  return (
                    <div className={lora.className}>
                      <p className="text-base mb-4" {...rest}></p>
                    </div>
                  );
                },
                strong(props) {
                  const { node, ...rest } = props;
                  return (
                    <span
                      className="font-bold bg-gradient-to-b from-lgreen to-dgreen text-transparent bg-clip-text"
                      {...rest}></span>
                  );
                },
                ol(props) {
                  const { node, ...rest } = props;
                  return (
                    <ol
                      className="list-decimal list-inside text-base mt-2 mb-4 leading-loose"
                      {...rest}></ol>
                  );
                },
                ul(props) {
                  const { node, ...rest } = props;
                  return (
                    <ul
                      className="list-disc list-inside text-base mt-2 mb-4 leading-loose"
                      {...rest}></ul>
                  );
                },
                a(props) {
                  const { node, ...rest } = props;
                  return (
                    <a
                      className="text-lblue underline"
                      target="_blank"
                      {...rest}></a>
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
        </div>
      </main>
      <div className="w-full h-10 bg-gradient-to-b from-white to-dgreen absolute bottom-0"></div>
    </div>
  );
}
