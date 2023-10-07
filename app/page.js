import CodeBox from "./components/CodeBox";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { ProjectList } from "./components/ProjectList";


const Home = () => {
  return (
    <main >
      <div className="flex justify-center px-16">
        <div className="w-[680px] flex flex-col">
          <NavBar/>
          <Hero />
          <CodeBox/>
          <ProjectList />
          <p className="text-2xl font-semibold tracking-wide light-text-primary dark-text-primary pt-20">I'm always happy to chat so please feel free to get in touch at <span className="text-gradient">hello@markslorach.com</span> or <span className="text-gradient">LinkedIn</span>.</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
