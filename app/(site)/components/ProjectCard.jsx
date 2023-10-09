"use client";
import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { RiArrowRightUpLine } from "react-icons/ri";
import Link from "next/link";


export const revalidate = 0;
export const dynamic = 'force-dynamic';

const ProjectCard = ({ slug, title, summary, github, image }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  if (!hasMounted) {
    return null;
  }
  
  return (
    <Link href={`/projects/${slug}`}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex gap-5 p-4 mt-6 bg-white/5 rounded-md hover:bg-blue-300/10 transition-colors duration-500 ease-in-out"
      >
        <img
          src={image}
          alt={title}
          className="w-1/2 rounded-md shadow-md"
        />
        <div className=" flex flex-col gap-4 tracking-wide text-black/70 dark:text-white/80">
          <h2 className="leading-none text-md font-medium flex gap-1 items-center">
            {title}
            <span
              className={`text-lg ${
                isHovered ? "translate-x-0.5 -translate-y-0.5" : ""
              } transition-transform duration-500 ease-in-out`}
            >
              <RiArrowRightUpLine />
            </span>
          </h2>
          <p className="text-sm font-light text-black/60 dark:text-white/50">
            {summary}
          </p>

          <div className="flex gap-3">
            <div className="group">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.open(`${github}`, "_blank");
                }}
                className="flex items-center gap-2 text-sm font-light leading-none p-2.5 bg-white/10 rounded-md hover:bg-purple-200/20 transition-colors duration-500 ease-in-out"
              >
                <span className="text-xl transform group-hover:rotate-12 transition-transform ease-in-out duration-500">
                  <FaGithub />
                </span>
                GitHub
              </button>
            </div>

            <div className="group">
              <button
                onClick={() => (window.location.href = "")}
                className="flex items-center gap-2 text-sm font-light leading-none p-2.5 bg-white/10 rounded-md hover:bg-purple-200/20 transition-colors duration-500 ease-in-out"
              >
                <span className="text-xl transform group-hover:rotate-12 transition-transform duration-500">
                  <BsFillLightningChargeFill />
                </span>
                Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      </Link>
  );
};

export default ProjectCard;
