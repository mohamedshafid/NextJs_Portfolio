import { Passive } from "@/components";
import github from "@/public/icons/github.png";
import linkedin from "@/public/icons/linkedin.png";
import instagram from "@/public/icons/instagram.png";
import twitter from "@/public/icons/twitter.png";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="w-full p-10  bg-black/10 animate">
      <div className="flex flex-col  items-center justify-center w-full h-full">
        <div className="flex items-center justify-center gap-4">
          <a href="https://github.com/mohamedshafid">
            <Image
              src={github}
              className="w-10 h-10 bg-white p-3 rounded-full"
              alt="github"
            />
          </a>
          <a href="https://www.linkedin.com/in/mohamed-hafid-8b2bab344/">
            <Image
              src={linkedin}
              className="w-10 h-10 bg-white p-3 rounded-full"
              alt="linkedin"
            />
          </a>
          <a href="https://www.instagram.com/mohamed.shafid_025/">
            <Image
              src={instagram}
              className="w-10 h-10 bg-white p-3 rounded-full"
              alt="instagram"
            />
          </a>
          <a href="https://x.com/mohameds_hafid">
            <Image
              src={twitter}
              className="w-10 h-10 bg-white p-3 rounded-full"
              alt="twitter"
            />
          </a>
        </div>
        <div className="font-mono flex flex-row gap-3 mt-5">
          <span>Privacy </span>
          <span>|</span>
          <span>Terms</span>
          <span>|</span>
          <span>FAQ</span>
          <span>|</span>
          <span>Help</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
