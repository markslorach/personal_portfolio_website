import Link from "next/link";
import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";

export const ProjectCard = ({ project }) => {
  return (
    <article>
    <div className="flex gap-5 pt-6 pb-4">
      <img src={project.image} alt={project.name} className="w-1/2 rounded-md shadow-md" />
      <div className="flex flex-col justify-between tracking-wide text-black/70 dark:text-white/80 pb-3">
      <h2 className="leading-none text-lg font-medium">{project.name}</h2>
      <p className="text-base font-light text-black/60 dark:text-white/50">{project.description}</p>
          
      <Link className="flex items-center gap-2 font-light leading-none hover:text-white/60" href={`/projects/${project.id}`}>
        <p>View project</p>
        <span><FaArrowRightLong/></span>
      </Link>
      {/* <Link href={`/projects/${project.id}`}>
        <button className="flex items-center gap-2 text-sm font-light leading-none p-2.5 bg-white/10 rounded-md"><span className='text-xl'><FaGithub/></span></button>
      </Link> */}
      </div>
    </div>
    </article>
  );
};
