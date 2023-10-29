import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {

  
  return (
    <div className="flex justify-center ">
      <div className="w-[680px] flex justify-center py-10 gap-2 dark-text-secondary">
      <div className="flex justify-between items-center w-full px-5 sm:px-0">
      <p className="dark-text-secondary text-sm leading-none">© Mark Slorach 2023</p>
      <div className="flex gap-2">
      <Link className="flex items-center hover:text-white/90 transition duration-300 ease-in-out" href={'https://github.com/mfslorach'}>
        <button className="text-2xl">
          <FaGithubSquare />
        </button>
        </Link>

        <Link className="flex items-center hover:text-white/90 transition duration-300 ease-in-out" href={'https://www.linkedin.com/in/mfslorach/'}>
        <button className="text-2xl">
          <FaLinkedin />
        </button>
        </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
