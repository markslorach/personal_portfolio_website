import Link from "next/link";

export const GetInTouch = () => {
  return (
    <section>
      <p className="text-xl md:text-2xl font-semibold tracking-wide light-text-primary dark-text-primary pt-20">
        I'm always happy to chat so please feel free to get in touch at{" "}
        <span className="text-gradient">hello@markslorach.com</span> or{" "}
        <Link href={"https://www.linkedin.com/in/mfslorach/"} target="_blank">
          <span className="text-gradient text-gradient-hover">LinkedIn</span>
        </Link>
        .
      </p>
    </section>
  );
};