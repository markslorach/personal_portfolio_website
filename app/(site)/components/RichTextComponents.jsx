import SanityImage from "@/sanity/SanityImage";

export const RichTextComponents = {
    types: {
        image: ({ value }) => {
          return (
            <SanityImage {...value} width={600} height={0} />
          );
        },
      },
    block: {
        h1: ({children}) => <h1 className="text-2xl tracking-wider mb-4">{children}</h1>,
        h2: ({children}) => <h2 className="text-xl py-3">{children}</h2>,
        normal: ({children}) => <p className="text-base font-extralight tracking-wider leading-normal pb-3 dark-text-primary light-text primary">{children}</p>,

        blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
        
      },
      listItem: {
        bullet: ({children}) => <li className="list-disc ml-10 font-extralight dark-text-primary light-text-primary">{children}</li>,
      },
}
