import Link from "next/link";
import React from "react";
import ThemeButton from "./ThemeButton";

export const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link href="/">
          <h2 className="nav-logo">
            mark<span className="nav-logo-span">slorach</span>.
          </h2>
        </Link>

        <div className="nav-links-container">
        <div className="flex gap-5 md:flex-none">
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
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};
