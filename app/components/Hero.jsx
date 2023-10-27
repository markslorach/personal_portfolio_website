import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section>
    <div className="flex flex-col gap-4 py-20">
      <Image
        src="/images/me.png"
        width={65}
        height={65}
        alt="Mark Slorach"
        className="rounded-3xl -ml-2"
      />
      <h1 className="hero-title">
        Hello! I'm Mark, a design and user experience focused full-stack software developer based in <span className="text-blue-400"> Scotland</span>.
      </h1>
      </div>

      {/* <p className='text-lg tracking-wide font-light leading-relaxed text-black/70 dark:text-white/80'>I’m a full-stack developer with a passion for design and user experience. I’m currently enjoying creating full-stack applications with React and Next.js as well as exploring Tailwind CSS and UI component libraries. As a recent graduate I am excited to seek out my first role in the tech industry.</p> */}
     
    </section>
  );
};
