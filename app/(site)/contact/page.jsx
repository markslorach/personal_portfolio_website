import React from 'react'
import { ContactForm } from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="flex justify-center my-24 mx-5">
    <div className="w-[680px] flex flex-col">
    <ContactForm/>
    </div>
  </div>
  )
}

export default ContactPage;