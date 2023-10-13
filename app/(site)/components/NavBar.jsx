"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ThemeButton from "./ThemeButton";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <div>
      <nav className="nav">
        <div className="nav-container">
          <div className="flex justify-between w-full items-center">
            <Link href="/">
              <h2 className="nav-logo">
                mark<span className="nav-logo-span">slorach</span>.
              </h2>
            </Link>
          </div>

          <div className="nav-links-container">
            <div className="flex gap-5 sm:flex-none">
              <Link className="nav-links" href="/profile">
                Profile
              </Link>
              <Link className="nav-links" href="/projects">
                Projects
              </Link>
              <Link className="nav-links" href="/contact">
                Contact
              </Link>
            </div>

            <div className="flex items-center">
              <ThemeButton />
            </div>

            <button
              onClick={handleClickOpen}
              className="dark-text-primary text-2xl sm:hidden "
            >
              <TbMenu2 />
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="flex top-0 fixed w-full h-full bg-[#111827] pt-10 px-5 z-10">
          <div className="flex w-full h-min">
            <Link href="/">
              <h2 className="nav-logo">
                mark<span className="nav-logo-span">slorach</span>.
              </h2>
            </Link>
            <button
              onClick={handleClickOpen}
              className="dark-text-primary text-3xl absolute right-0 mr-4 h-min z-10"
            >
              <IoClose />
            </button>
          </div>
          <div className="h-screen top-0 w-screen absolute left-0 px-5 flex justify-center items-center">
            <div className="flex flex-col gap-5 items-center text-2xl">
              <Link
                className="tracking-wide hover:text-black/80 light-text-secondary dark-text-secondary dark:hover:text-white/90 transition duration-200 ease-in"
                href="/profile"
              >
                Profile
              </Link>
              <Link
                className="tracking-wide hover:text-black/80 light-text-secondary dark-text-secondary dark:hover:text-white/90 transition duration-200 ease-in"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className="tracking-wide hover:text-black/80 light-text-secondary dark-text-secondary dark:hover:text-white/90 transition duration-200 ease-in"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
