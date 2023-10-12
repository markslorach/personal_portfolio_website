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
      <div className="flex justify-center mt-24 mx-5">
        <div className="w-[680px] flex flex-col">
          <div className="flex justify-center flex-col">
            <ImageSlider image={project.image} />
            <div className="flex flex-wrap gap-4 sm:gap-0 justify-between">
              <div className="flex gap-3 justify-center sm:justify-start">
                {project.techStack.map((stack) => (
                  <p
                    className="p-3 bg-white/5 flex items-center leading-none rounded-sm font-mono text-[9px] sm:text-xs dark-text-primary light-text-primary"
                    key={stack}
                  >
                    {stack}
                  </p>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="project-card-btn">
                  <span className="btn-icon">
                    <FaGithub />
                  </span>
                  <span className="hidden sm:inline">GitHub</span>
                </button>

                <button className="project-card-btn">
                  <span className="btn-icon">
                    <BsFillLightningChargeFill />
                  </span>
                  <span className="hidden sm:inline">Demo</span>
                </button>
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl my-10 font-semibold dark-text-primary light-text-primary tracking-wide mb-4">
              {project.title}
            </h1>

            <PortableText
              value={project.content}
              components={RichTextComponents}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
