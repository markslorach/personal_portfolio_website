import Link from 'next/link';
import React from 'react'

const CodeBox = () => {
  return (
    <section>
      <div className="w-full rounded-t-md rounded-b-sm bg-blue-950/10 dark:bg-white/5 my-24 shadow-sm">
        <div className="flex items-center w-full h-8 bg-blue-950/10 dark:bg-white/10 rounded-t-md px-2.5 gap-1.5">
          <div className="w-3 h-3 rounded-full  bg-red-500"></div>
          <div className="w-3 h-3 rounded-full  bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full  bg-green-500"></div>
        </div>
        <div className="flex flex-col gap-5 w-full h-full p-5 font-mono text-xs sm:text-sm leading-relaxed sm:leading-normal tracking-wide dark-text-primary">
          <div className="flex flex-col gap-2 ">
            <p>{`> Mark.contact`}</p>
            <p><span>{`[`}</span>"<span className="code-box-links"><Link href={"/contact"}>{`hello@markslorach.com`}</Link></span>", "<span className="code-box-links"><Link  target='_blank' href={"https://www.linkedin.com/in/markslorach/"}>{`LinkedIn`}</Link></span>", "<span className="code-box-links"><Link target='_blank' href={"https://github.com/markslorach"}>{`GitHub`}</Link></span>"<span>{`]`}</span> </p>
          </div>
          <div className="flex flex-col gap-2 ">
            <p>{`> Mark.resume`}</p>
            <p>"<span className="text-blue-400">markslorach.pdf</span>"</p>
          </div>
          <div className="flex flex-col gap-2 ">
            <p>{`> Mark.skills`}</p>
            <p>{`["JavaScript", "React", "Java", "PostgreSQL", "MongoDB", "CMS"]`}</p>
          </div>
          <div className="flex flex-col gap-2 ">
            <p>{`>`} <span className="blink">|</span></p>
          </div>
        </div>
      </div>
      </section>
  )
}

export default CodeBox;