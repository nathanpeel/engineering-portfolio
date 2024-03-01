import EmailButton from "./Email";
import Link from "next/link";

export default function SubHero() {
  return (
    <section>
      <div className="flex flex-col px-16 sm:px-48 min-h-[40dvh] items-start gap-5">
        <p className="sm:text-5xl text-xl font-medium">
          I am a full-stack software engineer, philosophy enthusiast, optimist,
          and a citizen of the world. I am passionate about contributing to
          determined teams that solve problems to help people and the Earth. I
          am a co-founder and engineer for{" "}
          <Link href="https://www.next-nav.com/" className="underline">Next.Nav</Link>
        </p>
        <EmailButton styles="rounded-full bg-lgreen text-white text-3xl py-2 px-5 font-medium">
          Let&apos;s Talk
        </EmailButton>
      </div>
      <div className="h-[30dvh] w-dvw bg-gradient-to-b from-white to-lgreen"></div>
    </section>
  );
}
