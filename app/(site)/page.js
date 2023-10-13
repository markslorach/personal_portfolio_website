"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { GetInTouch } from "./components/GetInTouch";
import { Hero } from "./components/Hero";
import ProjectList from "./components/ProjectList";
import CodeBox from "./components/CodeBox";
import Footer from "./components/Footer";

export const revalidate = 0;

const Home = () => {
  const router = useRouter();
  const showAllProjects = router.pathname === "/projects";

  return (
    <main>
      <div className="flex justify-center py-24 mx-5">
        <div className="w-[680px] flex flex-col">
          <Hero />
          <CodeBox />
          <h2 className=" text-xl sm:text-2xl font-semibold light-text-primary dark-text-primary tracking-wide">
            Recent projects
          </h2>
          <ProjectList showAll={showAllProjects} />
          <GetInTouch />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
