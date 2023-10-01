import Link from "next/link";
import React from "react";
import ThemeButton from "./ThemeButton";
import Image from "next/image";

export const NavBar = () => {
  return (
    <header>
      <div className="nav-container">
      <Link href="/">
            <h2 className="nav-logo">mark<span className="nav-logo-span">slorach</span>.</h2>
            </Link>
       

        <div className="nav-links-container">
          <Link className="nav-links" href="/about">About</Link>
          <Link className="nav-links" href="#projects">Projects</Link>
          <Link className="nav-links" href="/contact">Contact</Link>
          <ThemeButton/>
        </div>
      </div>
    </header>
  );
};
