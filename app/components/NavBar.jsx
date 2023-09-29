import Link from "next/link";
import React from "react";
import ThemeButton from "./ThemeButton";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaLightbulb } from 'react-icons/fa';


export const NavBar = () => {
  return (
    <nav className="flex justify-center py-5 fixed top-0 min-w-full z-50">
      <div className="w-2/5 flex justify-between items-center">
            <h2 className="text-black/80 dark:text-white/80"><b>mark<span className="text-black/60 dark:text-white/60">slorach</span>.</b></h2>
       

        <div className="flex gap-7 text-black/80 items-center">
          <Link className="hover:text-black/50 dark:text-white/80 dark:hover:text-white/60 duration-300" href="/">home</Link>
          <Link className="hover:text-black/50 dark:text-white/80 dark:hover:text-white/60 duration-300" href="/about">about</Link>
          <Link className="hover:text-black/50 dark:text-white/80 dark:hover:text-white/60 duration-300"href="#projects">projects</Link>
          <Link className="hover:text-black/50 dark:text-white/80 dark:hover:text-white/60 duration-300"href="/contact">contact</Link>
          {/* <p><FaGithub/></p>
          <p><FaLinkedin/></p> */}
          <ThemeButton/>
        </div>
      </div>
    </nav>
  );
};
