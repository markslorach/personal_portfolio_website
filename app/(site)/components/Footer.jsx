import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[680px] flex justify-center py-10 gap-2 dark-text-secondary">
      <Link className="flex items-center hover:text-white/80 transition duration-300 ease-in-out" href={'https://github.com/mfslorach'}>
        <button className="text-3xl">
          <FaGithubSquare />
        </button>
        </Link>

        <Link className="flex items-center hover:text-white/80 transition duration-300 ease-in-out" href={'https://www.linkedin.com/in/mfslorach/'}>
        <button className="text-3xl">
          <FaLinkedin />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

// <p className="footer-text">
//   Made with<span> ❤︎ </span>using Next JS and Tailwind CSS.
// </p>
