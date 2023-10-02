import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='flex justify-center gap-5 py-20'>
        <p className='text-xl'><FaGithub/></p>
        <p className='text-xl'><FaLinkedin/></p>
        <p className='text-xs'>Made with ❤︎ using Next JS and Tailwind CSS</p>
    </footer>
  )
}

export default Footer