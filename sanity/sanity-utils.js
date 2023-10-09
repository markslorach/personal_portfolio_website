import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";


export async function getProjects() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        github,
        summary,
        "image": image.asset->url,
        content
    }`
  );
}

export async function getProject(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            github,
            summary,
            "image": image.asset->url,
            content
        }`,
    { slug }
  );
}
