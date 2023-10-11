"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { GetInTouch } from "./components/GetInTouch";
import { Hero } from "./components/Hero";
import ProjectList from "./components/ProjectList";
import CodeBox from "./components/CodeBox";

export const revalidate = 0;

const Home = () => {
  const router = useRouter();
  const showAllProjects = router.pathname === "/projects";

  return (
    <main>
      <div className="flex justify-center my-24 mx-5">
        <div className="w-[680px] flex flex-col">
          <Hero />
          <CodeBox />
          <ProjectList showAll={showAllProjects} />
          <GetInTouch />
        </div>
      </div>
    </main>
  );
};

export default Home;
