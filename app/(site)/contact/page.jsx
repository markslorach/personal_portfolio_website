import React from 'react'
import { ContactForm } from '../components/ContactForm';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="flex justify-center my-28 mx-5 ">
    <div className="w-[680px] flex flex-col">
    <ContactForm/>
    </div>
  </div>
  )
}

export default ContactPage;