import React from "react";
import { Hero } from "../components/Hero";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <main className="flex justify-center py-20 sm:py-24 mx-5">
      <article className="w-[680px] flex flex-col">
        <Hero />
        <section className="mt-20 dark-text-primary text-[16px] sm:text-[18px] font-light tracking-wide leading-relaxed">
          <p className="mb-5">
            I am a recent graduate of a 16 week software development bootcamp at
            CodeClan, where I built a solid understanding of the fundamentals of
            programming through Python,{" "}
            <strong className="font-bold">JavaScript</strong>, and Java, as well
            as working with Test Driven Development,{" "}
            <strong className="font-bold">Frameworks</strong>, and{" "}
            <strong className="font-bold">Databases.</strong>
          </p>
          <p className="mb-5">
            During my studies, I was drawn to the visual and system design
            aspect of building user-friendly applications. The pace of the
            course allowed me to pick up skills quickly and demonstrate my
            understanding through creating{" "}
            <strong className="font-bold text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out">
              <Link href={"/projects"}>full-stack projects</Link>
            </strong>
            .
          </p>
          <p className="mb-5">
            Currently, I am enjoying working with and learning about{" "}
            <strong className="font-bold">Next.js 13</strong>,{" "}
            <strong className="font-bold">Tailwind CSS</strong>, and how to
            incorporate{" "}
            <strong className="font-bold">Content Management Systems</strong> to
            create dynamic content. I love the speed, modularity and flexibility
            frameworks provide.
          </p>
          <p className="mb-5">
            Before my career change, I worked as a{" "}
            <strong className="font-bold">
              freelance videographer and drone operator
            </strong>{" "}
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
            <strong className="font-bold">enthusiasm and creativity</strong> and
            continue to learn and grow as a developer. I'm eager to work with a
            team who are building{" "}
            <strong className="font-bold">
              {" "}
              innovative and user-friendly applications
            </strong>
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
      </article>
    </main>
  );
};

export default ProfilePage;
