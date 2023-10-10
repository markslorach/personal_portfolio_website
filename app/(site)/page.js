import CodeBox from "./components/CodeBox";
import { GetInTouch } from "./components/GetInTouch";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import ProjectList from "./components/ProjectList";

export const revalidate = 0;

const Home = () => {
  return (
    <main>
      <div className="flex justify-center px-16">
        <div className="w-[680px] flex flex-col">
          <Hero />
          <CodeBox />
          <ProjectList />
          <GetInTouch />
        </div>
      </div>
    </main>
  );
};

export default Home;
