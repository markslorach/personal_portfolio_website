import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { ProjectList } from "./components/ProjectList";

const Home = () => {
  return (
    <main>
      <div className="flex justify-center w-screen px-16">
        <div className="w-[650px] flex flex-col">
          <NavBar />  
          <Hero />
          <ProjectList />
        </div>
      </div>
    </main>
  );
};

export default Home;
