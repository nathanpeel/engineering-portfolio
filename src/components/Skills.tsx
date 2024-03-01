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
  const lineArray = [lineOne, lineTwo];

  return (
    <section
      className="min-h-[50dvh] bg-lgreen text-white flex flex-col justify-center sm:text-6xl text-4xl font-semibold"
      id="container">
      <div id="list-wrapper" className="flex flex-col sm:gap-10 gap-4">
        {lineArray.map((line, index) => {
          const animator = index == 0 ? "top" : "bottom";
          return (
            <div className={`flex sm:gap-14 gap-8 ${animator}`} key={crypto.randomUUID()}>
              {line.map((el) => {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className="flex items-center justify-center gap-3">
                    <div className="sm:w-14 sm:h-14 w-10 h-10 relative flex items-center">
                      <img
                        src={`/${el
                          .toLowerCase()
                          .replace("/", "")
                          .replace(".", "")
                          .replace(" ", "")}.svg`}
                        alt={`${el} logo`}
                      />
                    </div>
                    <p className="whitespace-nowrap">{el}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
