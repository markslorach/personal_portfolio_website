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
  marks: {
    strong: ({children}) => <strong className="font-normal dark-text-primary">{children}</strong>},

  block: {
    h1: ({ children }) => (
      <h1 className="text-lg font-semibold tracking-wide dark-text-primary mt-6 mb-3">{children}</h1>
    ),
    h2: ({ children }) => <h2 className="text-lg font-semibold tracking-wide dark-text-primary mt-5 mb-3">{children}</h2>,
   
    normal: ({ children }) => (
      <p className="text-white/70 text-[16px] sm:text-[17px] font-light tracking-wide leading-relaxed">
        {children}
      </p>
    ),

    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-400">{children}</blockquote>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
  
      <li className="list-disc ml-8 mb-1 font-light text-[16px] sm:text-[17px] tracking-wide leading-relaxed text-white/70">
        {children}
      </li>
    ),
  },
};
