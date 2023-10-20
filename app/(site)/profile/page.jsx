import React from "react";
import { Hero } from "../components/Hero";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <div className="flex justify-center my-24 mx-5">
      <div className="w-[680px] flex flex-col">
        <Hero />
        <section className="mt-20 dark-text-primary text-[16px] sm:text-[18px] font-light tracking-wide leading-relaxed">
          <p className="mb-5">
            I am a recent graduate of a 16 week software development bootcamp at
            CodeClan, where I built a solid understanding of the
            fundamentals of programming through Python,{" "}
            <span className="font-bold">JavaScript</span>, and Java, as well
            as working with Test Driven Development,{" "}
            <span className="font-bold">Frameworks</span>, and{" "}
            <span className="font-bold">Databases.</span>
          </p>
          <p className="mb-5">
            During my studies, I was drawn to the visual and system design
            aspect of building user-friendly applications. The pace of the
            course allowed me to pick up skills quickly and demonstrate my
            understanding through creating{" "}
            <span className="font-bold text-blue-400">
              <Link href={"/projects"}>full-stack projects</Link>
            </span>
            .
          </p>
          <p className="mb-5">
            Currently, I am enjoying working with and learning about{" "}
            <span className="font-bold">Next.js 13</span>,{" "}
            <span className="font-bold">Tailwind CSS</span>, and how to
            incorporate{" "}
            <span className="font-bold">Content Management Systems</span> to
            create dynamic content. I love the speed, modularity and flexibility
            frameworks provide.
          </p>
          <p className="mb-5">
            Before my career change, I worked as a{" "}
            <span className="font-bold">
              freelance videographer and drone operator
            </span>{" "}
            for 6 years. In this role, I worked closely with clients to deliver
            creative content for brands and businesses all around Europe.
          </p>
          <p className="mb-5">
            In my spare time, you’ll usually find me travelling around the
            incredible parts of Scotland with my drone and camera. I’ll never
            get tired of visiting Glencoe!
          </p>
          <p>
            I'm now looking for my first role in the tech industry where I can
            bring my{" "}
            <span className="font-bold">enthusiasm and creativity</span> and
            continue to learn and grow as a developer. I'm eager to work with a
            team who are building{" "}
            <span className="font-bold">
              {" "}
              innovative and user-friendly applications
            </span>
            .
          </p>
          <p className="mt-20 text-2xl font-semibold">
            If you have a project in mind or a role you think I’d be suited for
            I’d love to{" "}
            <span className=" text-gradient text-gradient-hover">
              <Link href={"/contact"}>hear from you</Link>
            </span>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
