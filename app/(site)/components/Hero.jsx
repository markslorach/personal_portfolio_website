"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        <div>
          <Image
            src="/images/me.png"
            width={80}
            height={80}
            alt="Mark Slorach"
            className="hero-image"
          />
        </div>
        <h1 className="hero-title">
          Hello!{" "}
          <span className="text-gradient text-gradient-hover">
            <Link href={"/profile"}>I'm Mark</Link>
          </span>
          , a design and user experience focused junior software developer based
          in Scotland.
        </h1>
        {/* <p className="leading-relaxed tracking-wider font-extralight text-lg dark-text-secondary">I love creating user-friendly applications with a focus on visual and
          system design. I am currently seeking my first role in the tech industry to help
          build impactful products while continuing to learn and grow as a
          developer.</p> */}
      </div>
    </section>
  );
};
