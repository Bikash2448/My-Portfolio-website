import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex md:flex-row justify-around bg-[#343435] text-white p-4 pb-8 md:p-6 items-center gap-4"
    >
      <div className="p-4 text-center md:text-left">
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free to Reach Out!
        </h3>
      </div>

      <ul className="text-sm ml-8 md:text-xl flex flex-col  justify-center gap-4">
        <li className="flex gap-1 items-center transition-all duration-300 hover:text-[#f39c12] hover:scale-105">
          <MdOutlineEmail size={20} />
          <span className="ml-2">bikashcse12448@gmail.com</span>
        </li>
        <li className="flex gap-1 items-center transition-all duration-300 hover:text-[#f39c12] hover:scale-105">
          <CiLinkedin size={20} />
          <a
            className="ml-2 underline"
            href="https://www.linkedin.com/in/bikash-mal-470978301/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
        </li>
        <li className="flex gap-1 items-center transition-all duration-300 hover:text-[#f39c12] hover:scale-105">
          <FaGithub size={20} />
          <a
            className="ml-2 underline"
            href="https://github.com/Bikash2448"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;