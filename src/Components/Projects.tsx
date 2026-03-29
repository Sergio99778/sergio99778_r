import React from 'react';
import { motion } from 'framer-motion';

import './Projects.css';
import defaultImage from '../img/404.svg';
import { staggerContainer, fadeInItem } from '../animations/variants';
import type { ProjectItem } from '../types';

interface ProjectsProps {
  data: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
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
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {data.map((item) => (
          <motion.div key={item.name} className="project" variants={fadeInItem}>
            <h3 className="project-title">⭐ {item.name} ⭐</h3>
            <a href={item.url} rel="noreferrer" target="_blank">
              <img className="project--image" src={item.img ? item.img : defaultImage} alt={item.desc} loading="lazy" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
