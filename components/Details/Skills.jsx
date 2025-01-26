import { Passive, ProgressBar } from "@/components";

const Skills = () => {
  return (
    <section id="Skills" className="animate">
      <h1 className="text-4xl font-bold">Skills</h1>
      <Passive />
      <div className="mt-5 font-mono flex flex-col gap-2">
        <div className="flex flex-col lg:flex-row  lg:items-center gap-2">
          <div className="flex-1">
            <p>React JS</p>
            <ProgressBar percent={95} />
          </div>
          <div className="flex-1">
            <p>Express JS</p>
            <ProgressBar percent={80} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  lg:items-center gap-2">
          <div className="flex-1">
            <p>React Native</p>
            <ProgressBar percent={75} />
          </div>
          <div className="flex-1">
            <p>Flutter</p>
            <ProgressBar percent={70} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  lg:items-center gap-2">
          <div className="flex-1">
            <p>Mongo DB</p>
            <ProgressBar percent={85} />
          </div>
          <div className="flex-1">
            <p>MySql</p>
            <ProgressBar percent={90} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
