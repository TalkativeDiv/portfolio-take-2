import React from 'react';
interface Props {
  year: string;
  title: string;
  duration: string;
  details: string;
  index: number;
}
// import framer motion
import { motion } from 'framer-motion';
const TimelineItem: React.FC<Props> = ({
  year,
  title,
  duration,
  details,
  index,
}) => {
  return (
    <motion.ol
      initial="hidden"
      animate="show"
      variants={{
        hidden: {
          x: 0,
          y: 50,
          opacity: 1,
        },
        show: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            spring: true,
            delay: index * 0.2,
            duration: 1,
            ease: 'easeOut',
          },
        },
      }}
      className="flex flex-col md:flex-row relative border-l border-slate-200 dark:border-slate-700"
    >
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-slate-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-slate-900 dark:bg-slate-700" />
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white dark:text-slate-900 bg-slate-900 dark:bg-slate-300 rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">
            {duration}
          </div>
        </div>
        <p className="my-2 text-base font-normal text-slate-500 dark:text-slate-400">
          {details}
        </p>
      </li>
    </motion.ol>
  );
};

export default TimelineItem;
