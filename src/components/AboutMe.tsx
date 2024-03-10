import SlideIn from "./SlideIn";
import FadeIn from "./FadeIn";
import Image from "next/image";
import EmailButton from "./Email";
import TextGradient from "./TextGradient";
import { MdContentCopy } from "react-icons/md";

//Creates an about me section with a picture
export default function AboutMe(): JSX.Element {
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
          <div className="relative 3xl:w-[350px] lg:h-[400px] lg:w-[300px] md:h-[300px] md:w-[200px] h-[300px] w-[250px]">
            <Image
              className="rounded-xl object-cover"
              src="/headshot.png"
              alt="Portrait"
              fill
              sizes=""
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex flex-col lg:text-lg text-base gap-5">
            <p>
              My name is Nathan, and I am a software engineer from San Diego.
            </p>
            <p>
              I&apos;m passionate about harnessing the potential of technology
              and software to drive constructive change in our world. I have a
              particular interest in solutions within the realms of social
              impact, education, health, and green tech. However, I also
              recognize the potential for creating meaningful change across
              various sectors and am eager to contribute my skills wherever
              they&apos;re needed.
            </p>
            <p>
              Outside of engineering, I enjoy hiking, philosophy, meditation,
              manga, reading fiction, visiting the San Diego Zoo and Birch
              Aquarium, and learning to better understand the people and world
              around me.{" "}
            </p>
            <p>
              Some fun facts about me: <em>Avatar: The Last Airbender</em> is my
              favorite show, my favorite food is butter chicken, I play violin,
              and I wrote a novel called <em>The Cards That Are Dealt</em>.
            </p>
            <div className="flex sm:flex-row flex-col sm:items-center sm:gap-2" id={"contact"}>
              <TextGradient styles="font-bold sm:text-3xl text-2xl">
                Contact:{" "}
              </TextGradient>
              <div className="flex items-center gap-2">
                <p>peeljnathan@gmail.com</p>
                <EmailButton
                  showText={false}
                  styles="active:scale-110 transition-all ease-out flex flex-col text-xs justify-center items-center gap-1 opacity-30 active:opacity-100 hover:opacity-100">
                  <MdContentCopy className="w-5 h-5"/>
                  <p>copy</p>
                </EmailButton>
              </div>
            </div>
            <p>Please email me for my resume if you want it.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
