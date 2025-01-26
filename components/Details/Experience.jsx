import { Passive } from "@/components";

const Experience = () => {
  return (
    <section id="Experience" className="animate">
      <h1 className="text-4xl font-bold">Experience</h1>
      <Passive />
      <div className="mt-5 flex flex-row items-center">
        <div className="bg-black w-40 h-[1px] rotate-90" />
        <div>
          <h1 className="text-2xl font-bold ml-10 text-black/60">
            Web Development Intern
          </h1>
          <p>Oneyes Infotech Solution | June 5 2024 - July 4 2024</p>
          <p className="font-mono text-[15px] text-justify">
            I completed an internship at OneYes Infotech Solution, Chennai,
            where I gained hands-on experience in web development. During the
            internship, I collaborated with the team to design responsive
            layouts and implement interactive features, enhancing my skills in
            web development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;