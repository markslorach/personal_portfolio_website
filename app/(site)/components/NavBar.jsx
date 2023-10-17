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
                mark<span className="nav-logo-span">slorach</span>.
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
            <div className="flex gap-5 sm:flex-none">
              <Link className="nav-links hidden sm:inline" href="/profile">
                Profile
              </Link>
              <Link className="nav-links hidden sm:inline" href="/projects">
                Projects
              </Link>
              <Link className="nav-links hidden sm:inline" href="/contact">
                Contact
              </Link>
            </div>
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
              <div className="dark:bg-[#111827] h-auto w-full flex flex-col gap-3 pt-4 dark-text-primary">
                <Link className="nav-links" href="/profile" onClick={closeNav}>
                  Profile
                </Link>
                <Link className="nav-links" href="/projects" onClick={closeNav}>
                  Projects
                </Link>
                <Link className="nav-links" href="/contact" onClick={closeNav}>
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
