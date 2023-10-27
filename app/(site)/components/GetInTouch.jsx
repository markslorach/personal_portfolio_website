import Link from "next/link";

export const GetInTouch = () => {
  return (
    <section>
      <p className="text-2xl sm:text-2xl font-semibold tracking-wide dark-text-primary mt-20">
        I'm always happy to chat so please feel free to{" "}
        <Link href={"/contact"}>
        <span className="text-gradient text-gradient-hover">get in touch </span>
        </Link>

        or reach out on
        <Link href={"https://www.linkedin.com/in/mfslorach/"} target="_blank">
          <span className="text-gradient text-gradient-hover"> LinkedIn</span>
        </Link>
        .
      </p>
    </section>
  );
};
