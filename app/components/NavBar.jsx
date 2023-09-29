import Link from "next/link";
import React from "react";
import Image from "next/image";

export const NavBar = () => {
  return (
    <nav className="flex gap-10">
      <div className="avatar">
        <div className="w-14 rounded-full">
          <Image src="/images/me.png" width={100} height={100} />{" "}
        </div>
      </div>

      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};
