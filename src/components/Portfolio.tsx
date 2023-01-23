import React from 'react';
import { PortfolioItem } from './';
import PortfolioData from '../data/portfolio.js';
// import framer motion
import { motion } from 'framer-motion';
const Portfolio = () => {
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
            duration: 0.3,
          },
        },
      }}
      className="flex flex-col md:flex-row items-center justify-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PortfolioData.map((project, index) => (
          <PortfolioItem
            key={index}
            index={index + 1}
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
