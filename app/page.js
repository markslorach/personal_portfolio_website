import { Hero } from "./components/Hero";
import { ProjectList } from "./components/ProjectList";

const Home = () => {
  return (
    <main className="flex justify-center">
      <div className="w-2/5 flex justify-center flex-col">
      <Hero />
      <ProjectList />
      </div>
    </main>
  );
};

export default Home;
