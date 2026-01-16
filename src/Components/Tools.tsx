import React from "react";
import { motion } from "framer-motion";

import "./Tools.css";

interface ToolsProps {
  tools: string[];
}

const Tools: React.FC<ToolsProps> = ({ tools }) => {
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
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="main--tools-section">
      <div className="tools-section">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Tools
        </motion.h3>
        <motion.ul 
          className="tools-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tools.map((tool, index) => (
            <motion.li key={index} variants={itemVariants}>
              <p>{tool}</p>
              <span className={`logo ${tool.toLowerCase()}-logo`}></span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Tools;
