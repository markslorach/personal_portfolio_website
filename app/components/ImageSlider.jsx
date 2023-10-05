import { useState, useEffect } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";


export default function ImageSlider({images}) {
  let [index, setIndex] = useState(0);

  const handleKeyPress = (e) => {
    if (e.key === "ArrowLeft" && index > 0) {
      setIndex(index - 1);
    } else if (e.key === "ArrowRight" && index + 1 < images.length) {
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
    <div className="mt-24">
      <MotionConfig
        transition={{
          type: "spring",
          damping: 18,
          stiffness: 130,
          duration: 0.4
        }}
      >
        <motion.div
          className="relative overflow-hidden rounded-md"
          initial="hidden"
          animate="show"
          variants={animateImageIn}
        >
          <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
            {images.map((image) => (
              <img
                key={image}
                src={image}
                className="aspect-[3/1.6] object-cover"
              />
            ))}
          </motion.div>

          <AnimatePresence initial={false}>
            {index > 0 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                whileHover={{ opacity: 1 }}
                className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/80"
                onClick={() => setIndex(index - 1)}
              >
                <RiArrowLeftSFill className="h-6 w-6 text-slate-800/80" />
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {index + 1 < images.length && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                whileHover={{ opacity: 1 }}
                className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/80"
                onClick={() => setIndex(index + 1)}
              >
                <RiArrowRightSFill className="h-6 w-6 text-slate-800/80" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </MotionConfig>
    </div>
  );
}
