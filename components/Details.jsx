import {About, Contacts, Experience, Footer, Projects, Services, Skills, Techonologies} from "@/components";

const Details =async () => {

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <About />
      <hr className="mb-10 mt-10" />
      <Skills />
      <hr className="mb-10 mt-10" />
      <Techonologies />
      <hr className="mb-10 mt-10" />
      <Experience />
      <hr className="mb-10 mt-10" />
      <Services />
      <hr className="mb-10 mt-10" />
      <Projects />
      <hr className="mb-10 mt-10" />

      <Contacts />
      <hr className="mb-10 mt-10" />
      <Footer />
    </div>
  );
}

export default Details;