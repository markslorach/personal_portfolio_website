import ImageSlider from "@/app/(site)/components/ImageSlider";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../components/RichTextComponents";
import { FaGithub } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";

export const revalidate = 0;

export default async function Project({ params }) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <main>
      <div className="flex justify-center my-28 mx-5">
        <div className="w-[680px] flex flex-col">
          <ImageSlider images={project.images} />
          <section className="mb-20">
            <div className="flex gap-3">
              <button className="project-card-btn">
                <span className="btn-icon">
                  <FaGithub />
                </span>
                <span>GitHub</span>
              </button>

              {project.demo && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(`${project.demo}`, "_blank");
                  }}
                  className="project-card-btn"
                >
                  <span className="btn-icon">
                    <BsFillLightningChargeFill />
                  </span>
                  Demo
                </button>
              )}
            </div>
          </section>
          <h1 className="text-xl sm:text-3xl mb-5 font-semibold dark-text-primary light-text-primary tracking-wide">
            {project.title}
          </h1>

          <PortableText
            value={project.content}
            components={RichTextComponents}
          />
        </div>
      </div>
    </main>
  );
}

{
  /* 
          <section>
            <h1 className="tracking-wide font-semibold mb-2 dark-text-primary">Tech Stack</h1>
            <div className="flex gap-3 justify-center sm:justify-start items-start mb-8">
              {project.techStack.map((stack) => (
                <div
                  className="p-2.5 bg-white/5 h-min rounded-sm font-mono text-[10px] sm:text-xs dark-text-primary"
                  key={stack}
                >
                  {stack}
                </div>
              ))}
            </div>
          </section> */
}
