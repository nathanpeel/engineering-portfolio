import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/*Hero section*/}
      <section>
        <h1>Hi, I&apos;m Nathan👋</h1>
        <p>
          I am a full-stack software engineer, philosophy enthusiast, optimist,
          and a citizen of the world. I am passionate about contributing to
          determined teams that solve problems to help people and the Earth. I
          am a co-founder and engineer for{" "}
          <Link href="https://www.next-nav.com/" target="_blank">
            Next.Nav
          </Link>
        </p>
        <div>
          <button>Let&apos;s discuss roles</button>
        </div>
      </section>
      {/* Skills secition */}
      <section>
        <h2>Skills</h2>
        <p>
          I specialize in React, JavaScript, TypeScript, Node.js Express.js,
          PostgreSQL, and MongoDB, though I have expereicne with many other
          technologies, tools, and langauges.
        </p>
        <ul>
          <li>Redux/RTK</li>
          <li>Next.js</li>
          <li>React Native</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwindcss</li>
          <li>Python</li>
          <li>Java</li>
          <li>UI/UX</li>
        </ul>
        <p>
          Aside from my technical skills, I am also an adept writer (I wrote a
          book!), communicator, organizer, team player, and a life long learner.
          I enjoy persisting through struggle, putting forth enthusiasm and
          curiosity into whatever I do. I am always excited to learn new skills
          and tools.
        </p>
        <p>Think I might be a good fit for a role? Let&apos;s talk!</p>
      </section>
      {/* Expereince section */}
      <section>
        <h2>Expereince</h2>
        <div>
          {/* Next.Nav */}
          <div>
            {/*Add Logo as Next Image */}
            <div>
              <h3>{`Software Engineer\nNext.Nav (Open Source)`}</h3>
              <p>June 2023 - Present</p>
              <p>
                I am a co-founder and software engineer for this product.
                Next.Nav is an open-source product, supported by OS Labs. It is
                a route navigation and modificaiton VS Code extension for
                Next.js applications using the new App Router.
              </p>
              <div>
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
        </div>
      </section>
      {/* Projects section */}
      <section>
        <h2>Projects</h2>
        {/* Create a grid of projects with previews */}
        {/* Each project should have a preview card a link to the work page */}
        <div></div>
      </section>
      {/* Featured Blog Posts Section*/}
      <section>
        <h2>I also have a blog</h2>
        <div>
          <div>
            <h3>Blog post example</h3>
            <p>This is a description of this blog post. It talks about stuff</p>
          </div>
          <div>
            <h3>Blog post example</h3>
            <p>This is a description of this blog post. It talks about stuff</p>
          </div>
          <div>
            <h3>Blog post example</h3>
            <p>This is a description of this blog post. It talks about stuff</p>
          </div>
        </div>
        <Link href="/blog">Read more</Link>
      </section>
      {/* More about me */}
      <section>
        <h2>More about me</h2>
        <p>
          I have many interests and hobbies such as hiking, reading fiction,
          manga, anime, visiting the San Diego Zoo and Birch Aquarium,
          philosophy, meditation, and learning to better understand the people
          and world around me.
        </p>
        <p>
          I am a huge fan of Avatar: The Last Airbender. Regarding manga, so
          far I have read Monster by Naoki Urasawa, Berserk by Kentaro Miura,
          and I am now reading Vagaond by Takehiko Inoue. I had my own
          expereince with story writing when I wrote my book{" "}
          <em>The Cards That Are Dealt</em>.
        </p>
        <p>
          I am constantly trying to grow and learn, both in my profession and
          outside it. I am currently on a weight-loss and fitness journey. I am
          also learning how to be more present and mindful using meditation. I
          study many subjects such as philosophy, history, psychology, and
          religion to better understand myself and the people around me.
        </p>
        <p>
          I also play violin (though not as much lately). As mentioned, I am a
          author and writer, with plans to write many more books.
        </p>
      </section>
      {/* Add link to substack subscription */}
    </main>
  );
}
