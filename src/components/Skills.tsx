import ParallaxText from "./ParallaxText";

const skillsArray: string[] = [
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

/* Utilizes the .top and .bottom classes to create two lines of oppositely sliding lists of skills. There are two maps, one for each collection of skills and a nested map for each skill inside the list.  */
export default function SkillsList(): JSX.Element {
  const lineOne = skillsArray.slice(0, Math.floor(skillsArray.length / 2));
  const lineTwo = skillsArray.slice(Math.floor(skillsArray.length / 2));
  const lineArray: [string[], string[]] = [lineOne, lineTwo];

  /** This function gets the baseVelocity of the line based on the index and ensures that both lines go the same speed **/
  function getBaseVelocity(index: number): number {
    const lineOneLength = lineOne.toString().length;
    let top = 2;
    const lineTwoLength = lineTwo.toString().length;
    let bottom = 2;
    if (Math.abs(lineOneLength - lineTwoLength) > 3) {
      if (lineOneLength > lineTwoLength) {
        bottom = bottom * (lineOneLength / lineTwoLength);
      }
      if (lineOneLength < lineTwoLength) {
        top = top * (lineTwoLength / lineOneLength);
      }
    }
    return index == 0 ? -top : bottom;
  }

  return (
    <section
      className="min-h-[50dvh] bg-lgreen text-white flex flex-col justify-center sm:text-6xl text-4xl font-semibold"
      id="container">
      <div id="list-wrapper" className="flex flex-col sm:gap-10 gap-4">
        {lineArray.map((line, index) => {

          return (
            <ParallaxText baseVelocity={getBaseVelocity(index)} key={crypto.randomUUID()}>
              <div className="flex sm:gap-14 gap-8" key={crypto.randomUUID()}>
                {line.map((el) => {
                  return (
                    <div
                      key={crypto.randomUUID()}
                      className="flex items-center justify-center gap-3">
                      <div className="sm:w-14 sm:h-14 w-10 h-10 relative flex items-center">
                        {/* uses normal img tags instead of Next Image components due to loading issues on mobile devices. Linter rule for Next Image components is turned off. See .eslintrc.json to change this. */}
                        <img
                          src={`/${el
                            //ensures that the strings matches the filename
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
            </ParallaxText>
          );
        })}
      </div>
    </section>
  );
}
