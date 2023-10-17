"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const animateHero = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        <motion.div variants={animateHero} initial="hidden" animate="show">
          <Image
            src="/images/me.png"
            width={80}
            height={80}
            alt="Mark Slorach"
            className="hero-image"
          />
        </motion.div>
        <motion.h1
          className="hero-title"
          variants={animateHero}
          initial="hidden"
          animate="show"
        >
          Hello!{" "}
          <span className="text-gradient text-gradient-hover">
            <Link href={"/profile"}>I'm Mark</Link>
          </span>
          , a design and user experience focused junior software developer based
          in Scotland.
        </motion.h1>
        {/* <p className="leading-relaxed tracking-wider font-extralight text-lg dark-text-secondary">I love creating user-friendly applications with a focus on visual and
          system design. I'm seeking my first role in the tech industry to help
          build impactful products and continue to learn and grow as a
          developer.</p> */}
      </div>
    </section>
  );
};
