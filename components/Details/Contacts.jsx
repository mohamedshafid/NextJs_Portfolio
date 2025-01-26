import { Passive } from "@/components";
import Forms from "../utils/Forms";

const Contacts = () => {
  return (
    <section className="animate" id="Contacts">
      <h1 className="text-4xl font-bold">Contacts</h1>
      <Passive />
      <p className="font-mono text-gray-500 mt-5 mb-5">
        Feel free to reach out for collaborations, projects, or any inquiries.
        I'm always excited to connect and bring ideas to life!
      </p>
      <Forms />
    </section>
  );
};

export default Contacts;
