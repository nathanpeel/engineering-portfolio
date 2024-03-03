import Link from "next/link";
import TextGradient from "@/components/TextGradient";
import Hero from "@/components/Hero";
import SubHero from "@/components/SubHero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

/** This component wraps all the other sections of the home page, stored in the components folder **/
/** This component will shrink as other sections are divided into their own components **/
export default function Home(): JSX.Element {
  return (
    <div>
      <Hero />
      <SubHero />
      <Skills />
      <div className="bg-gradient-to-b from-lgreen to-dgreen text-white">
        <Experience />
      </div>
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
          <h2 className="text-xl font-medium mb-2">I also have a blog</h2>
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
            experience with story writing when I wrote my book{" "}
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
