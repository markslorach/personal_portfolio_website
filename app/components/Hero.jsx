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
      <div className="flex flex-col gap-4 py-20">
        <motion.div variants={animateHero} initial="hidden" animate="show">
          <Image
            src="/images/me.png"
            width={75}
            height={75}
            alt="Mark Slorach"
            className="rounded-3xl -ml-2"
          />
        </motion.div>
        <motion.h1 className="hero-title" variants={animateHero} initial="hidden" animate="show">
          Hello! I'm Mark, a design and user experience focused full-stack software developer based in <span className="text-blue-400"> Scotland</span>.
        </motion.h1>
      </div>
    </section>
  );
};
