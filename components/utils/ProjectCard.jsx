import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectCard = ({title,description,img}) => {
  return (
    <div className="bg-primary px-10 py-4 rounded-lg flex flex-col items-center justify-center relative gap-3">
      <Image
        src={img}
        alt={title}
        width={100}
        height={100}
        className="rounded-lg bg-white p-2"
      />
      <h1 className="font-bold text-2xl text-white">{title}</h1>
      <p className="text-gray-400 text-center">{description}</p>
      <FaArrowUpRightFromSquare className="absolute right-2 bottom-2 text-white hover:text-blue-400 cursor-pointer"  size={20} />
    </div>
  );
}

export default ProjectCard;