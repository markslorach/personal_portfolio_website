import React from 'react'
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";


export const Hero = () => {
  return (
    <section className='py-20 flex flex-col gap-4'>
    <Image src="/images/me.png" width={75} height={75} alt="Mark Slorach" className="rounded-3xl -ml-2"/>
        <h1 className='hero-title'> Hello!
       I'm Mark, a software developer based in <span className='text-blue-400'>Scotland</span>. </h1> 
        <p className='text-base tracking-wide font-normal leading-relaxed text-black/70 dark:text-white/80'>I’m a full-stack developer with a passion for design and user experience. I’m currently enjoying creating full-stack applications with React and Next.js as well as exploring Tailwind CSS and UI component libraries. As a recent graduate I am excited to seek out my first role in the tech industry. I’m always happy to chat so feel free to <span className='text-blue-400 font-medium'>get in touch</span>.</p>
        <div className='flex items-center'>
        <p className='text-base font-normal text-black/70 dark:text-white/80 tracking-wide'>More about me</p>
        <p className='text-lg -mb-0.5 text-black/70 dark:text-white/80'><RiArrowRightSLine/></p>
        </div>

    </section>
  )
}


{/* <span className='wave'>👋</span> */}