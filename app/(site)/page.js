import CodeBox from "./components/CodeBox";
import { GetInTouch } from "./components/GetInTouch";
import { Hero } from "./components/Hero";
import ProjectList from "./components/ProjectList";

export const revalidate = 0;

const Home = () => {
  return (
    <main>
      <div className="flex justify-center px-16">
        <div className="md:w-[680px] sm:w-[90%] flex flex-col">
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
