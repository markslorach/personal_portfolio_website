import React from 'react'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer-container'>
    <div className='flex gap-2 text-2xl'>
{/* <p><FaLinkedin/></p>       
<p><FaGithubSquare/></p>  */}
</div>
<p className='footer-text'>Made with<span> ❤︎ </span>using Next JS and Tailwind CSS.</p>
    </footer>
  )
}

export default Footer