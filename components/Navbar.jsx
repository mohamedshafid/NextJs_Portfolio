"use client";

import { navbar } from "@/constants";
import menu from "../public/icons/menu.png";
import cross from "../public/icons/cross.png";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState();
  const [link, setLink] = useState("About");
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24 py-5 z-50 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <h1 className="text-4xl font-bold flex-row gap-4">
        <span className="bg-primary rounded-full px-4 py-2 text-white">M</span>
        <span>E</span>
        <span>R</span>
        <span>N</span>
      </h1>
      <ul className="sm:flex items-center space-x-4 hidden">
        {navbar.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item}`}
              className={`text-base ${
                link === item && "font-bold text-xl"
              } navbar relative`}
              onClick={() => setLink(item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <Image
        src={menu}
        height={30}
        width={30}
        alt="Menu"
        className="object-fit flex sm:hidden cursor-pointer"
        onClick={() => setActiveMenu(!activeMenu)}
      />
      {activeMenu && (
        <div className="absolute top-0 right-0 z-50 h-screen bg-black/80 w-60 text-white transition-all duration-300">
          <Image
            src={cross}
            className="w-8 h-8 mt-4 ml-4 bg-white  rounded-full p-1 cursor-pointer"
            onClick={() => setActiveMenu(!activeMenu)}
            alt="Cross"
          />
          <div className="mt-32 flex flex-col gap-10 items-center">
            {navbar.map((item, index) => (
              <li key={index} className="list-none">
                <a
                  href={`#${item}`}
                  className={`font-ubuntuMono font-medium text-[18px] relative`}
                  onClick={() => {
                    setLink(item);
                    setActiveMenu(!activeMenu);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
