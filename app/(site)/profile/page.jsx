import React from "react";
import { Hero } from "../components/Hero";

const ProfilePage = () => {
  return (
    <div className="flex justify-center my-24 mx-5">
      <div className="w-[680px] flex flex-col">
      <Hero/>
        <section className="mt-20">
          {/* <div className="flex gap-14 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-wide pb-20 dark-text-primary">
                Hello! <span>👋🏻</span> I'm Mark. <span className="text-blue-400">A recent graduate and full-stack software developer. </span>I love creating user-friendly applications with a focus on visual and
          system design.
              </h2>
            </div>
         
          </div> */}
          <h2 className="text-2xl tracking tracking-wide font-semibold text-blue-400">
            Who am I?
          </h2>
          <p className="tracking-wide text-base font-light leading-relaxed">
            I am a full stack software developer who loves to create beautiful
            and functional web applications. I have a passion for design and
            user experience, and I enjoy solving challenging problems with code.
            I am always eager to learn new technologies and improve my skills.
          </p>
          <h2 className="text-2xl tracking tracking-wide font-semibold dark-text-secondary py-4">
            How did I become a developer?
          </h2>
          <p className="tracking-wide text-base font-light leading-relaxed">
            I started my journey as a developer by joining CodeClan, a 16 week
            intensive software development bootcamp. There, I learnt the
            fundamentals of programming, web development, and software
            engineering. I gained experience in using various languages and
            frameworks, such as Python, Flask, Javascript, React, PostgreSQL,
            MongoDB, and Java. I also learnt how to work in an agile
            environment, write tests, debug errors, and deploy applications.
          </p>
          <h2 className="text-2xl tracking tracking-wide font-semibold dark-text-secondary py-4">
            What am I working on now?
          </h2>
          <p className="tracking-wide text-base font-light leading-relaxed">
            Currently, I am exploring the latest features of Next.js 13, a React
            framework that enables fast and easy web development. I am also
            learning how to use tailwind, a utility-first CSS framework that
            helps me create stunning designs with minimal code. Additionally, I
            am experimenting with different CMS systems, such as Contentful and
            Sanity, to manage and deliver content for my web projects.
          </p>
          <h2 className="text-2xl tracking tracking-wide font-semibold dark-text-secondary py-4">
            What did I do before becoming a developer?
          </h2>
          <p className="tracking-wide text-base font-light leading-relaxed">
            Before I decided to pursue a career in software development, I
            worked as a freelance videographer and drone operator for six years.
            I had the opportunity to work with various clients and create
            content for their brands and businesses. This was a creative role
            that required me to think outside the box and overcome technical
            difficulties.
          </p>
          <h2 className="text-2xl tracking tracking-wide font-semibold dark-text-secondary py-4">
            What am I looking for now?
          </h2>
          <p className="tracking-wide text-base font-light leading-relaxed">
            Now that I have completed my bootcamp and built a portfolio of web
            projects, I am looking for my first role in the tech industry. I am
            interested in joining a team of passionate developers who share my
            enthusiasm for creating amazing web applications. I am open to
            learning new technologies and taking on new challenges.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;

   {/* <div className="avatar">
              <div className="w-28 rounded-full">
                <img src="/images/ProfileImage.png" />
              </div> */}
            {/* </div> */}