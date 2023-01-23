import React from 'react';
interface Props {
  title: string;
  imgUrl: any;
  stack: any;
  link: string;
  index: number;
}
// import framer motion
import { motion } from 'framer-motion';

const PortfolioItem: React.FC<Props> = ({
  title,
  imgUrl,
  stack,
  link,
  index,
}) => {
  return (
    <motion.a 
    href={link}
    target="_blank"
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
            delay: index * 0.1,
            duration: 1,
            ease: 'easeOut',
          },
        },
      }}
      className="border-2 border-slate-900 dark:border-slate-300 rounded-md overflow-hidden"
    >
      <p>
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
      </p>
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item: any, key: any) => (
            <span
              key={key}
              className="inline-block px-2 py-1 font-semibold border-2 border-slate-900 dark:border-slate-300 hover:bg-slate-900 hover:text-white hover:dark:bg-slate-100 hover:dark:text-slate-900 rounded-md transition-all"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </motion.a>
  );
};

export default PortfolioItem;
