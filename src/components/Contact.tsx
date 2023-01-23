'use client';
import React, { useRef } from 'react';
import { Title } from './';
// import framer motion
import { motion } from 'framer-motion';
const Contact = () => {
  const form = useRef() as React.MutableRefObject<HTMLFormElement>;
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    window.open(
      `https://docs.google.com/forms/d/e/1FAIpQLSeib-wlsBLOkUgEssuteMkC0CY9aZ0Vb3Jz7D2jy9EtFFIUQg/viewform?usp=pp_url&entry.2005620554=${formData.get(
        'name'
      )}&entry.1045781291=${formData.get(
        'email'
      )}&entry.1562899086=${formData.get('message')}`
    );
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {
          x: 0,
          y: 50,
          opacity: 0,
        },
        show: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            tween: true,
            delay: 0.1,
            duration: 0.6,
          },
        },
      }}
      className="flex flex-col mb-10 mx-auto"
    >
      <div className="flex justify-center items-center">
        <form
          className="flex flex-col w-full md:w-7/12 gap-2 "
          ref={form}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Title id="Contact">Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2  rounded-md focus:outline-none border-slate-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none border-slate-300"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={10}
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none mb-4 border-slate-300"
          />
          <button
            type="submit"
            className="text-center inline-block	 px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-emerald-400 via-sky-500 to-violet-600 hover:scale-105 active:scale-95 transition-all drop-shadow-md hover:stroke-white"
          >
            Work With Me
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
