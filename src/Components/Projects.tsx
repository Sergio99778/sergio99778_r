import React from 'react';
import { motion } from 'framer-motion';

import './Projects.css';
import defaultImage from '../img/404.svg';

export interface ProjectItem {
  name: string;
  url: string;
  img?: string;
  desc: string;
}

interface ProjectsProps {
  data: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="projects" id="projects">
      <motion.h3 
        className="projects-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h3>
      <motion.div 
        className="main--projects-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {data.map((item, i) => (
          <motion.div key={i} className="project" variants={itemVariants}>
            <h3 className="project-title">⭐ {item.name} ⭐</h3>
            <a href={item.url} rel="noreferrer" target="_blank">
              <img className="project--image" src={item.img ? item.img : defaultImage} alt={item.desc} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
