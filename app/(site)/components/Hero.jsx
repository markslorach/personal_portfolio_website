"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        <figure>
          <Image
            src="/images/me.png"
            width={80}
            height={80}
            alt="Mark Slorach"
            className="hero-image"
          />
        </figure>
        <h1 className="hero-title">
          Hello!{" "}
          <strong className="text-gradient text-gradient-hover">
            <Link href={"/profile"}>I'm Mark</Link>
          </strong>
          , a design and user experience focused junior software developer based
          in Scotland.
        </h1>
      </div>
    </section>
  );
};
