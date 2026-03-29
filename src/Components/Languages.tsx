import React from "react";
import { motion } from "framer-motion";

import "./Languages.css";
import { staggerContainer, slideInLeft } from "../animations/variants";

interface LanguagesProps {
  languages: string[];
}

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  const res = /\+/;

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
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {languages.map((language) => (
            <motion.li key={language} variants={slideInLeft}>
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
