import SanityImage from "@/sanity/SanityImage";

export const RichTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="py-5">
          <SanityImage {...value} width={600} height={0} />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-2xl tracking-wider">{children}</h1>
    ),
    h2: ({ children }) => <h2 className="text-4xl">{children}</h2>,
    normal: ({ children }) => (
      <p className="dark-text-primary text-[16px] sm:text-[18px] font-light tracking-wide leading-relaxed mb-2">
        {children}
      </p>
    ),

    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-400">{children}</blockquote>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="list-disc ml-10 font-light text-[16px] sm:text-[18px] tracking-wide leading-relaxed dark-text-primary">
        {children}
      </li>
    ),
  },
};
