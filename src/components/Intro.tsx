import React from 'react';
import { motion } from 'framer-motion';
const Intro = () => {
  return (
    <motion.div
      className="flex items-center justify-center flex-col text-center pt-20 pb-6"
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
            duration: 0.2,
          },
        },
      }}
    >
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Abhirath</h1>
      <p className="text-base md:text-xl mb-3 font-medium">Software Engineer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I&apos;m an full-stack developer building a small part of the digital
        world one step at a time. All of my coding projects are built from the
        ground up, from planning and designing all the way to solving real-life
        problems with code.
      </p>
    </motion.div>
  );
};

export default Intro;
