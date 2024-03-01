import Link from "next/link";
import Image from "next/image";
import TextGradient from "@/components/TextGradient";
import EmailButton from "@/components/Email";
import Hero from "@/components/Hero";
import SubHero from "@/components/SubHero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <SubHero />
      <Skills />
      {/* Expereince section */}
      <section className="border-b border-darkgray">
        <div className="flex flex-col items-start p-5">
          <h2 className="text-xl font-medium mb-2">Expereince</h2>
          <div className="flex flex-col gap-4">
            {/* Next.Nav */}
            <div>
              {/*Add Logo as Next Image */}
              <div>
                <h3 className="text-lg font-medium mb-1">
                  Software Engineer<br></br>Next.Nav(Open Source)
                </h3>
                <p className="text-sm">June 2023 - Present</p>
                <p>
                  I am a co-founder and software engineer for this product.
                  Next.Nav is an open-source product, supported by OS Labs. It
                  is a route navigation and modificaiton VS Code extension for
                  Next.js applications using the new App Router.
                </p>
                <div className="w-full flex gap-5 underline my-2 text-blue">
                  <Link href="https://www.next-nav.com/" target="_blank">
                    Website
                  </Link>
                  <Link
                    href="https://github.com/oslabs-beta/Next-Nav"
                    target="_blank">
                    GitHub
                  </Link>
                  <Link
                    href="https://github.com/oslabs-beta/Next-Nav"
                    target="_blank">
                    Download
                  </Link>
                  <Link href="/work">Read More</Link>
                </div>
              </div>
            </div>
            {/* DataAnnotation */}
            <div>
              <div>
                <h3 className="text-lg font-medium mb-1">
                  Software Development AI Validator<br></br>DataAnnotation
                </h3>
                <p className="text-sm">January 2024 - Present</p>
                <p>
                  I create software development related prompts for AI models
                  and then rate their responses, requiring deep code
                  understanding and testing. This is a contract role.
                  DataAnnotation has this position listed as &quot;Frontend
                  Developer&quot;. Langauges used: JavaScript, TypeScript,
                  Python, Java.
                </p>
                <div className="w-full flex gap-5 underline my-2 text-blue">
                  <Link href="https://www.dataannotation.tech/" target="_blank">
                    Website
                  </Link>
                  <Link href="/work">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects section */}
      {/* <section className="border-b border-darkgray">
          <div className="flex flex-col items-start p-5"></div>
          <h2>Projects</h2> */}
      {/* Create a grid of projects with previews */}
      {/* Each project should have a preview card a link to the work page */}
      {/* <div></div>
        </section> */}
      {/* Featured Blog Posts Section*/}
      <section className="border-b border-darkgray">
        <div className="flex flex-col items-start p-5">
          <h2 className="text-xl font-medium mb-2">
            I also have a blog
          </h2>
          <div>
            <div>
              <h3>Blog post example</h3>
              <p>
                This is a description of this blog post. It talks about stuff
              </p>
            </div>
            <div>
              <h3>Blog post example</h3>
              <p>
                This is a description of this blog post. It talks about stuff
              </p>
            </div>
            <div>
              <h3>Blog post example</h3>
              <p>
                This is a description of this blog post. It talks about stuff
              </p>
            </div>
          </div>
          <Link
            href="/blog"
            className="text-base font-medium rounded-full border border-darkgray py-2 px-4 my-5">
            <TextGradient>Read More</TextGradient>
          </Link>
          <Link href="" className="underline italic underline-offset-4">
            Subscribe to my email list 🎁
          </Link>
        </div>
      </section>
      {/* More about me */}
      <section>
        <div className="flex flex-col items-start p-5">
          <h2 className="text-xl font-medium mb-2">More about me</h2>
          <p>
            I have many interests and hobbies such as hiking, reading fiction,
            manga, anime, visiting the San Diego Zoo and Birch Aquarium,
            philosophy, meditation, and learning to better understand the people
            and world around me.
          </p>
          <br />
          <p>
            Avatar: The Last Airbender is my favorite show. Regarding manga, so
            far I have read Monster by Naoki Urasawa, Berserk by Kentaro Miura,
            and I am now reading Vagaond by Takehiko Inoue. I had my own
            expereince with story writing when I wrote my book{" "}
            <em>The Cards That Are Dealt</em>.
          </p>
          <br />
          <p>
            I strive for constant growth and learning, both in my profession and
            outside it. I am currently on a weight-loss and fitness journey. I
            am also learning how to be more present and mindful using
            meditation. I study many subjects such as philosophy, history,
            psychology, and religion to better understand myself and the people
            around me.
          </p>
          <br />
          <p>
            I also play violin (though not as much lately). As mentioned, I am a
            author and writer, with plans to write many more books.
          </p>
        </div>
      </section>
      {/* Add link to substack subscription */}
    </div>
  );
}
