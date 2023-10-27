import React from 'react'

const CodeBox = () => {
  return (
    <section>
      <div className="w-full rounded-t-md rounded-b-sm bg-purple-950/5 dark:bg-white/5 mb-20 shadow-sm">
        <div className="flex items-center w-full h-7 bg-purple-950/5 dark:bg-white/5 rounded-t-md px-2 gap-1.5">
          <div className="w-3 h-3 rounded-full  bg-red-400/90"></div>
          <div className="w-3 h-3 rounded-full  bg-yellow-400/90"></div>
          <div className="w-3 h-3 rounded-full  bg-green-400/90"></div>
        </div>
        <div className="flex flex-col gap-5 w-full h-full p-5 font-mono text-xs text-black/70 dark:text-white/80">
          <div className="flex flex-col gap-2 ">
            <p>{`> Mark.contactInfo`}</p>
            <p><span>{`[`}</span>"<span className="code-box-link">{`hello@markslorach.com`}</span>", "<span className="code-box-link">{`LinkedIn`}</span>", "<span className="code-box-link">{`GitHub`}</span>"<span>{`]`}</span> </p>
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