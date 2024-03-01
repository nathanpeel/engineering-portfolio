import Image from "next/image";
const skillsArray = [
  "React",
  "Next.js",
  "Redux/RTK",
  "React Native",
  "HTML",
  "CSS",
  "Tailwindcss",
  "TypeScript",
  "JavaScript",
  "Python",
  "Java",
  "Node",
  "Express",
  "MongoDB",
  "PostgreSQL",
];

export default function SkillsList() {
  const lineOne = skillsArray.slice(0, Math.floor(skillsArray.length / 2));
  const lineTwo = skillsArray.slice(Math.floor(skillsArray.length / 2));

  return (
    <section
      className="min-h-[50dvh] bg-lgreen text-white flex flex-col justify-center text-6xl font-semibold"
      id="container">
      <div id="list-wrapper">
        <div className="flex gap-14 top" id="top">
          {lineOne.map((el) => {
            return (
              <div
                key={crypto.randomUUID()}
                className="flex items-center gap-3">
                <div className="w-14 h-14 relative">
                  <Image
                    className="object-fill"
                    src={`/${el
                      .toLowerCase()
                      .replace("/", "-")
                      .replace(".", "-")}.svg`}
                    alt={`${el} logo`}
                    fill
                    sizes=""
                  />
                </div>
                <p className="whitespace-nowrap">{el}</p>
              </div>
            );
          })}
        </div>
        <div className="flex gap-14 bottom" id="bottom">
          {lineTwo.map((el) => {
            return (
              <div
                key={crypto.randomUUID()}
                className="flex items-center gap-3">
                <div className="w-14 h-14 relative">
                  <Image
                    className="object-fill"
                    src={`/${el
                      .toLowerCase()
                      .replace("/", "-")
                      .replace(".", "-")}.svg`}
                    alt={`${el} logo`}
                    fill
                    sizes=""
                  />
                </div>
                <p className="whitespace-nowrap">{el}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
