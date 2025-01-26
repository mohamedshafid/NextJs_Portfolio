import { Passive } from "@/components";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaPython,
  FaJava,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";

const Techonologies = () => {
  return (
    <section id="Technologies" className="animate">
      <h1 className="text-4xl font-bold">Technologies</h1>
      <Passive />
      <p>
        I work with a wide range of technologies, including React, Node.js,
        MongoDB, and more, to build dynamic, full-stack web applications. My
        expertise ensures seamless integration of frontend and backend for a
        smooth user experience.
      </p>
      <div className="flex flex-col items-center gap-10 mt-5 px-3">
        <div className="flex flex-row gap-3 flex-shrink flex-grow">
          <FaHtml5 size={40} className="icons" />
          <FaCss3 size={40} className="icons" />
          <IoLogoJavascript size={40} className="icons" />
          <FaReact size={40} className="icons" />
          <SiExpress size={40} className="icons" />
          <DiMongodb size={40} className="icons" />
          <RiNextjsFill size={40} className="icons" />
          <FaFlutter size={40} className="icons" />
          <SiMysql size={40} className="icons" />
        </div>
        <div className="flex flex-row gap-3">
          <FaPython size={40} className="icons" />
          <FaJava size={40} className="icons" />
          <FaDocker size={40} className="icons" />
          <BiLogoPostgresql size={40} className="icons" />
          <FaGithub size={40} className="icons" />
        </div>
      </div>
    </section>
  );
};

export default Techonologies;
