import React from 'react';
import { TimelineItem } from './';
import TimelineData from '../data/timeline.js';
import Title from './Title';
// import framer motion
import { motion } from 'framer-motion';

const Timeline = () => {
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
            duration: 0.4,
          },
        },
      }}
      className="flex flex-col md:flex-row justify-center my-20"
    >
      <div className="w-full md:w-7/12">
        <Title id="timeline">Timeline</Title>
        {TimelineData.map((item, key) => (
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            key={key}
            index={key}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;
