import Link from "next/link";
import TextGradient from "@/components/TextGradient";
import Hero from "@/components/Hero";
import SubHero from "@/components/SubHero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import FeatureBlog from "@/components/FeatureBlog";

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
        <Projects />
        <FeatureBlog />
      </div>
    </div>
  );
}
