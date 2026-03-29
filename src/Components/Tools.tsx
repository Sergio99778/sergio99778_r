import React from "react";
import { motion } from "framer-motion";

import "./Tools.css";
import { staggerContainer, slideInRight } from "../animations/variants";

interface ToolsProps {
  tools: string[];
}

const Tools: React.FC<ToolsProps> = ({ tools }) => {
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
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tools.map((tool) => (
            <motion.li key={tool} variants={slideInRight}>
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
