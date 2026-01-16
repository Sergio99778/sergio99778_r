import React from "react";
import { motion } from "framer-motion";

import "./Languages.css";

interface LanguagesProps {
  languages: string[];
}

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  const res = /\+/g;

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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="main--language-section">
      <div className="language-section">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Languages
        </motion.h3>
        <motion.ul 
          className="languages-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {languages.map((language, index) => (
            <motion.li key={index} variants={itemVariants}>
              <p>{language}</p>
              <span
                className={
                  res.test(language)
                    ? `logo ${language.replace(/\+/g, "plus")}-logo`
                    : `logo ${language}-logo`
                }
              ></span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Languages;
