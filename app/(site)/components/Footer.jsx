import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[680px] flex justify-center py-10 gap-2 dark-text-primary">
      <Link className="flex items-center" href={'https://github.com/mfslorach'}>
        <button className="text-2xl">
          <FaGithubSquare />
        </button>
        </Link>

        <Link className="flex items-center" href={'https://www.linkedin.com/in/mfslorach/'}>
        <button className="text-2xl">
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
