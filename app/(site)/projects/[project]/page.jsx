import ImageSlider from "@/app/(site)/components/ImageSlider";
import { NavBar } from "@/app/(site)/components/NavBar";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Project({ params }) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <main>
      <div className="flex justify-center px-16">
        <div className="w-[680px] flex flex-col">
          <NavBar />
          <div className="flex justify-center flex-col">
            <div className="pt-20 pb-10">
              <ImageSlider image={project.image} />
            </div>
            <h1 className="text-2xl font-semibold mb-1 text-black/70 dark:text-white/80 tracking-wide">
              {project.title}
            </h1>
            <div className="py-5 text-base font-light tracking-wide leading-relaxed	text-white/80">
              <PortableText value={project.content} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
