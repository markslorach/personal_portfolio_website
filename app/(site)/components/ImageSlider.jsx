'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

export default function ImageSlider({ image }) {
  const [index, setIndex] = useState(0);

  const handleKeyPress = (e) => {
    if (e.key === "ArrowLeft" && index > 0) {
      setIndex(index - 1);
    } else if (e.key === "ArrowRight" && index + 1 < image.length) {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [index]);

  const animateImageIn = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (

      <motion.div
        className="relative overflow-hidden rounded-sm mb-3"
        initial="hidden"
        animate="show"
        variants={animateImageIn}
      >
        <img src={image} className="w-full" alt="Feature" />

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0, pointerEvents: "none" }}
          whileHover={{ opacity: 1 }}
          className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-sm bg-white/50"
          onClick={() => setIndex(index - 1)}
        >
          <RiArrowLeftSFill className="h-6 w-6 text-slate-800/70" />
        </motion.button>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0, pointerEvents: "none" }}
          whileHover={{ opacity: 1 }}
          className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-sm bg-white/50"
          onClick={() => setIndex(index + 1)}
        >
          <RiArrowRightSFill className="h-6 w-6 text-slate-800/70" />
        </motion.button>
      </motion.div>
  );
}
