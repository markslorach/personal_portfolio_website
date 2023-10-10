import ImageSlider from "@/app/(site)/components/ImageSlider";
import { NavBar } from "@/app/(site)/components/NavBar";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export const revalidate = 0;

export default async function Project({ params }) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <main>
      <div className="flex justify-center">
        <div className="w-[680px] flex flex-col">
          <NavBar />
          <div className="flex justify-center flex-col">
            <div className="pt-20">
            <h1 className="text-3xl font-semibold dark-text-primary light-text-primary tracking-wide">
              {project.title}
            </h1>
              <ImageSlider image={project.image} />
            </div>
            <div className="text-base font-light tracking-wide leading-relaxedtext-white/80">
              <PortableText value={project.content} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
