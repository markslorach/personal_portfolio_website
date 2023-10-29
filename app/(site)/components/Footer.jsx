'use client'
import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { useRouter } from 'next/navigation'; // import useRouter

const Footer = () => {
  const router = useRouter(); // use useRouter to get the current route

  // Check if the current route is '/contact'
  const isContactRoute = router.pathname === '/contact';

  return (
    <div className={`flex justify-center ${isContactRoute ? 'absolute bottom-0' : ''}`}>
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
