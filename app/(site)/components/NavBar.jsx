import Link from "next/link";
import React from "react";
import ThemeButton from "./ThemeButton";

export const NavBar = () => {

  return (
    <nav className="nav">
      <div className="nav-container">
      <div className="flex justify-between w-full items-center">
        <Link href="/">
          <h2 className="nav-logo">
            mark<span className="nav-logo-span">slorach</span>.
          </h2>
        </Link>
        <div className="sm:hidden flex">
        <ThemeButton />
        </div>
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
          <div className="hidden sm:inline">
          <div className="flex items-center">
          <ThemeButton />
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
