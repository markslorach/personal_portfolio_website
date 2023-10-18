"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { GetInTouch } from "./components/GetInTouch";
import { Hero } from "./components/Hero";
import ProjectList from "./components/ProjectList";
import CodeBox from "./components/CodeBox";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";

export const revalidate = 0;

const Home = () => {
  const router = useRouter();
  const showAllProjects = router.pathname === "/projects";

  return (
    <main>
      <div className="flex justify-center py-20 sm:py-24 mx-5">
        <div className="w-[680px] flex flex-col">
          <Hero />
          <CodeBox />
          <h2 className=" text-xl sm:text-2xl font-semibold dark-text-primary tracking-wide">
            Recent projects
          </h2>
          <ProjectList showAll={showAllProjects} />
          <div className="flex gap-1 items-center mt-6 w-48 dark-text-secondary hover:text-white/90 transition duration-300 ease-in-out ">
            <Link
              href="/projects"
              className=" text-base font-medium leading-none tracking-wide"
            >
              View all projects
            </Link>
            <p className="text-base font-bold">
              <RiArrowRightLine />
            </p>
          </div>
          <GetInTouch />
        </div>
      </div>
    </main>
  );
};

export default Home;
