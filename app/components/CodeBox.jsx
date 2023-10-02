import Link from 'next/link';
import React from 'react'

const CodeBox = () => {
  return (
    <section>
      <div className="w-full rounded-t-md rounded-b-sm bg-purple-950/5 dark:bg-white/5 mb-20 shadow-sm">
        <div className="flex items-center w-full h-8 bg-purple-950/5 dark:bg-white/10 rounded-t-md px-2.5 gap-1.5">
          <div className="w-3 h-3 rounded-full  bg-red-500"></div>
          <div className="w-3 h-3 rounded-full  bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full  bg-green-500"></div>
        </div>
        <div className="flex flex-col gap-5 w-full h-full p-5 font-mono text-sm text-black/70 dark:text-white/80">
          <div className="flex flex-col gap-2 ">
            <p>{`> Mark.contactInfo`}</p>
            <p><span>{`[`}</span>"<span className="code-box-link">{`hello@markslorach.com`}</span>", "<span className="code-box-link"><Link className='hover:text-blue-200' target='_blank' href={"https://www.linkedin.com/in/mfslorach/"}>{`LinkedIn`}</Link></span>", "<span className="code-box-link"><Link className='hover:text-blue-200' target='_blank' href={"https://github.com/mfslorach"}>{`GitHub`}</Link></span>"<span>{`]`}</span> </p>
          </div>
          <div className="flex flex-col gap-2 ">
            <p>{`> Mark.resume`}</p>
            <p>"<span className="text-blue-400">markslorach.pdf</span>"</p>
          </div>
          <div className="flex flex-col gap-2 ">
            <p>{`> Mark.skills`}</p>
            <p>{`["JavaScript", "React", "Java", "PostgreSQL", "MongoDB"]`}</p>
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