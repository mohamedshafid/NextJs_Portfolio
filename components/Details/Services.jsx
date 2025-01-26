import { Passive } from "@/components";
import { services } from "@/constants";
import Image from "next/image";

const Services = () => {
  return (
    <div id="Services" className="animate">
      <h1 className="text-4xl font-bold">Services</h1>
      <Passive />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {services.map((item, index) => (
          <div
            className="flex flex-col gap-2 items-center bg-black/10 p-3 rounded-lg"
            key={item.label}
          >
            <Image src={item.icon} className="w-10 h-10" alt={item.label} />
            <h1 className="font-ubuntuMono text-3xl text-center font-bold">
              {item.label}
            </h1>
            <p className="font-mono text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
