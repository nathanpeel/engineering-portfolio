import SlideIn from "./SlideIn";
import FadeIn from "./FadeIn";
import Image from "next/image";

//Creates an about me section with a picture
export default function AboutMe():JSX.Element {
  return (
    <section className="flex flex-col items-center py-20 2xl:px-[10dvw] 3xl:px-[20dvw] sm:px-20 px-10 ">
      <SlideIn>
        <div className="flex flex-col sm:w-[500px] w-[250px] items-center sm:gap-2 gap-1 mb-20">
          <h2 className="sm:text-6xl text-3xl font-semibold">More About Me</h2>
          <div className="w-full h-1 bg-white rounded-full"></div>
        </div>
      </SlideIn>
      <div className="flex md:flex-row flex-col gap-10 md:items-start items-center">
        <FadeIn>
          <div className="relative lg:h-[400px] md:h-[300px] h-[300px] md:basis-[1300px] sm:w-1/2 w-[250px] 3xl:basis-[900px]">
            <Image
              className="rounded-xl object-cover"
              src="/headshot.png"
              alt="Portrait"
              fill
              sizes=""
            />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col lg:text-lg text-base gap-5">
            <p>
              My name is Nathan, and I am a software engineer from San Diego.
            </p>
            <p>
              I believe that technology and software will continue to help push
              humanity forward, and I am passionate about helping humanity in
              this way. I am particularly interested in software that helps
              fight climate change or supports ecosystems. However, I believe
              that many different kinds of software can have a positive impact,
              and I am ready to contribute to where I am called.
            </p>
            <p>
              Outside of engineering, I enjoy hiking, philosophy, meditation,
              manga, reading fiction, visiting the San Diego Zoo and Birch
              Aquarium, and learning to better understand the people and world
              around me.{" "}
            </p>
            <p>
              Some fun facts about me: Avatar: The Last Airbender is my favorite
              show, my favorite food is butter chicken, I play violin, and I
              wrote a novel called The Cards That Are Dealt.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
