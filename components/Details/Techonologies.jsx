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
      <div className="flex flex-col items-center gap-10 mt-5 lg:px-3 px-1">
        <div className="flex flex-row gap-1 lg:gap-4 flex-grow">
          <FaHtml5 className="icons" />
          <FaCss3 className="icons" />
          <IoLogoJavascript className="icons" />
          <FaReact className="icons" />
          <SiExpress className="icons" />
          <DiMongodb className="icons" />
          <RiNextjsFill className="icons" />
          <FaFlutter className="icons" />
          <SiMysql className="icons" />
        </div>
        <div className="flex flex-row gap-1 lg:gap-4">
          <FaPython className="icons" />
          <FaJava className="icons" />
          <FaDocker className="icons" />
          <BiLogoPostgresql className="icons" />
          <FaGithub className="icons" />
        </div>
      </div>
    </section>
  );
};

export default Techonologies;
