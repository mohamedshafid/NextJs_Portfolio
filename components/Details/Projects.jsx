import { Passive, ProjectCard } from "@/components";
import { projects } from "@/constants";
import Image from "next/image";
const Projects = () => {
 
  return (
    <section id="Projects" className="animate">
      <h1 className="text-4xl font-bold">Projects</h1>
      <Passive />
      <p>
        I focus on building innovative and impactful solutions using modern
        technologies, ensuring seamless integration and exceptional user
        experiences. My expertise lies in crafting scalable and efficient
        full-stack applications tailored to real-world needs
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        {projects.map((item, index) => (
          <a href={item.github} key={index}>
            <ProjectCard
              title={item.title}
              description={item.description}
              img={item.image}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
