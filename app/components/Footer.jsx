import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='flex justify-center gap-5 py-10'>
        <p className='text-2xl'><FaGithub/></p>
        <p className='text-2xl'><FaLinkedin/></p>
    </footer>
  )
}

export default Footer