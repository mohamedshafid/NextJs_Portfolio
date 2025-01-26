import { Passive } from "@/components";
import { aboueMe, details } from "@/constants";
const About = () => {
  return (
    <section id="About" className="animate">
      <h1 className="text-4xl font-bold">About Me</h1>
      <Passive />
      <p className="text-justify mt-5">{aboueMe}</p>

      <div className="mt-10 bg-primary text-white p-10 rounded-lg flex flex-col gap-5 shadow-lg shadow-slate-400">
        {Object.keys(details).map((key, index) => (
          <div key={index} className="flex flex-row items-center gap-3">
            <h2 className="text-2xl font-bold">{key}:</h2>
            <p className="text-justify">{details[key]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;