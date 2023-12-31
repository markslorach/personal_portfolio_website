"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { RiSendPlaneFill } from "react-icons/ri";
import Link from "next/link";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tgtubji",
        "template_81vydfh",
        form.current,
        "44h51U632nK1tw_-X"
      )
      .then(
        (result) => {
          // console.log(result.text);
          alert("Thanks! I'll be in touch soon.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="flex flex-wrap sm:flex-nowrap gap-20 sm:gap-8">
      <aside className="w-full sm:w-1/2 dark-text-primary">
        <h1 className="text-3xl sm:text-4xl tracking-wide font-semibold">Let's chat!</h1>
        <br />
        <p className="tracking-wide font-light leading-normal text-[17px] dark-text-secondary">
          I'm always happy to chat so please feel free to fill in the contact
          form or reach out on{" "}
          <Link href={"https://www.linkedin.com/in/markslorach/"} target="_blank">
            <strong className="text-gradient text-gradient-hover font-semibold">
              LinkedIn
            </strong>
          </Link>
          .
        </p>
      </aside>

      <form
        className="flex flex-col gap-5 dark-text-primary w-full sm:w-1/2"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex flex-col gap-2">
          <label id="sender name" className="tracking-wide font-light leading-none">Name</label>
          <input
            className="w-full h-12 px-4 rounded-sm bg-white/10"
            type="text"
            name="user_name"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label id="sender email address" className="tracking-wide font-light leading-none">Email</label>
          <input
            className="w-full h-12 px-4 rounded-sm bg-white/10"
            type="email"
            name="user_email"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label id="sender message" className="tracking-wide font-light leading-none">
            Message
          </label>
          <textarea
            className="w-full h-36 p-4 rounded-sm bg-white/10"
            name="message"
            required
          />
        </div>
        <button aria-label="send email" className="flex gap-2 text-sm font-light leading-none items-center w-min p-2.5 bg-white/10 rounded-sm hover:bg-purple-200/20 transition-colors duration-500 ease-in-out ">
          <p className="btn-icon">
            <RiSendPlaneFill />
          </p>
          <input type="submit" value="Send" />
        </button>
      </form>
    </section>
  );
};
