const projects = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "summary",
      title: "Summary",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "github",
      title: "GitHub",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
        },
      ],
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
};



export default projects;

