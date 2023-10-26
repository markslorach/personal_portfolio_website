"use client";
import React from "react";
import ProjectList from "../components/ProjectList";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 0;

const Projects = () => {
  return (
    <div className="flex justify-center my-28 mx-5">
      <div className="w-[680px] flex flex-col">
      <div className="flex flex-col gap-3">
      <figure>
          <Image
            src="/images/me_macbook.png"
            width={70}
            height={70}
            alt="Mark Slorach"
            className="hero-image -ml-1.5"
          />
        </figure>
        <h2 className="text-2xl sm:text-3xl font-semibold light-text-primary dark-text-primary tracking-wide">
          Projects
        </h2>
        <p className="dark-text-secondary text-[16px] sm:text-[17px] mt-3 tracking-wide leading-relaxed font-light ">Some of the recent projects I've worked on in my spare time and during my studies. Click on a project card to view more information about the project. If you have any questions please feel free to  <Link href={"/contact"}><strong className="text-gradient text-gradient-hover font-semibold">get in touch</strong></Link>.</p>
        <div className="mt-16">
        </div>
        <ProjectList showAll />
        </div>
      </div>
    </div>
  );
};

export default Projects;
