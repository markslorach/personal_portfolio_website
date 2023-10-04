'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const animateHero = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        <motion.div variants={animateHero} initial="hidden" animate="show">
          <Image
            src="/images/me.png"
            width={75}
            height={75}
            alt="Mark Slorach"
            className="hero-image"
          />
        </motion.div>
        <motion.h1 className="hero-title" variants={animateHero} initial="hidden" animate="show">
          Hello! I'm Mark, a design and user experience focused junior software developer based in <span className="text-gradient"> Scotland</span>.
        </motion.h1>
      <p className="tracking-wider font-light text-base text-white/80">I'm a recent graduate of a 16-week software development bootcamp. I love creating user-friendly applications with a focus on visual and system design. I'm currently seeking my first role in the tech industry to help build impactful products and continue to learn and grow as a developer. <span className="font-normal text-blue-400">View profile.</span></p>
      </div>
    </section>
  );
};
