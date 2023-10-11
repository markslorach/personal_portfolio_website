"use client";
import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { RiArrowRightUpLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Link from "next/link";

export const revalidate = 0;
export const dynamic = "force-dynamic";

const motionSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

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
      <motion.div
        {...motionSettings}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="card-container"
      >
        <div className="img-container">
          <img src={image} alt={title} className="card-img" />
        </div>
        <div className="project-info-container">
          <h2 className="project-title">
            {title}
            <span
              className={`text-lg ${
                isHovered ? "translate-x-0.5 -translate-y-0.5" : ""
              } transition-transform duration-500 ease-in-out`}
            >
              <RiArrowRightUpLine />
            </span>
          </h2>
          <p className="project-summary">{summary}</p>

          <div className="flex gap-3">
            <div className="group">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.open(`${github}`, "_blank");
                }}
                className="project-card-btn"
              >
                <span className="btn-icon">
                  <FaGithub />
                </span>
                GitHub
              </button>
            </div>

            <div className="group">
              <button
                onClick={() => (window.location.href = "")}
                className="project-card-btn"
              >
                <span className="btn-icon">
                  <BsFillLightningChargeFill />
                </span>
                Demo
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
