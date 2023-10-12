"use client";
import React from "react";
import ProjectList from "../components/ProjectList";

export const revalidate = 0;

const Projects = () => {
  return (
    <div className="flex justify-center my-24 mx-5">
      <div className="w-[680px] flex flex-col">
        <h2 className=" text-xl sm:text-2xl font-semibold light-text-primary dark-text-primary tracking-wide">
          Projects
        </h2>
        <ProjectList showAll />
      </div>
    </div>
  );
};

export default Projects;
