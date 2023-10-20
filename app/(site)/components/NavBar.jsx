"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <div className="flex justify-between w-full items-center">
            <Link onClick={closeNav} href="/">
              <h2 className="nav-logo">
                mark<strong className="nav-logo-span">slorach</strong>.
              </h2>
            </Link>

            {!isOpen ? (
              <motion.button
                onClick={() => setIsOpen(true)}
                className="dark-text-primary text-3xl sm:hidden"
                whileTap={{ scale: 0.8 }}
              >
                <TbMenu2 />
              </motion.button>
            ) : (
              <motion.button
                onClick={() => setIsOpen(false)}
                className="dark-text-primary text-3xl sm:hidden"
                whileTap={{ scale: 0.8 }}
              >
                <IoClose />
              </motion.button>
            )}
          </div>

          <div className="nav-links-container">
            <ul className="flex gap-5 sm:flex-none">
              <li>
                <Link className="nav-links hidden sm:inline" href="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="nav-links hidden sm:inline" href="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="nav-links hidden sm:inline" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: isOpen ? "auto" : "0px" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex justify-center overflow-hidden"
          >
            <div className="w-[680px] flex flex-col px-5">
              <ul className="h-auto w-full flex flex-col gap-3 pt-4 dark-text-primary">
                <li>
                  <Link className="nav-links" href="/profile" onClick={closeNav}>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="nav-links" href="/projects" onClick={closeNav}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className="nav-links" href="/contact" onClick={closeNav}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
