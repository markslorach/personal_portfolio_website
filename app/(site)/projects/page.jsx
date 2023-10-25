"use client";
import React from "react";
import ProjectList from "../components/ProjectList";
import Link from "next/link";

export const revalidate = 0;

const Projects = () => {
  return (
    <div className="flex justify-center my-28 mx-5">
      <div className="w-[680px] flex flex-col">
        <h2 className=" text-3xl sm:text-4xl mb-3 font-semibold light-text-primary dark-text-primary tracking-wide">
          Projects
        </h2>
        <p className="dark-text-secondary text-[16px] sm:text-[17px] tracking-wide leading-relaxed font-light ">Some of the recent projects I've worked on in my spare time and during my studies. Click on a project card to view more information about the project. If you have any questions please feel free to  <Link href={"/contact"}><span className="text-gradient font-semibold">get in touch</span></Link>.</p>
        <div className="mt-20">
        <ProjectList showAll />
        </div>
      </div>
    </div>
  );
};

export default Projects;
