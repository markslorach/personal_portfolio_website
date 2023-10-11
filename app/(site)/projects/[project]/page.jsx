import ImageSlider from "@/app/(site)/components/ImageSlider";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../components/RichTextComponents";

export const revalidate = 0;

export default async function Project({ params }) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <main>
      <div className="flex justify-center">
        <div className="w-[680px] flex flex-col">
          <div className="flex justify-center flex-col">
            <div className="pt-10">
              <ImageSlider image={project.image} />

              <h1 className="text-2xl font-semibold dark-text-primary light-text-primary tracking-wide mb-4">
                {project.title}
              </h1>
              <PortableText
                value={project.content}
                components={RichTextComponents}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
