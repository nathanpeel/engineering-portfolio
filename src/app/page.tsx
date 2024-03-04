import Hero from "@/components/Hero";
import SubHero from "@/components/SubHero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import FeatureBlog from "@/components/FeatureBlog";
import AboutMe from "@/components/AboutMe";

/** This component wraps all the other sections of the home page, stored in the components folder **/
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
        <AboutMe/>
      </div>
    </div>
  );
}
