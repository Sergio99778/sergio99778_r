import React from "react";
import { motion } from "framer-motion";

import "./Skills.css";

import team from "../img/Skills/work_in_team.png";
import creativity from "../img/Skills/creativity.png";
import enthusiasm from "../img/Skills/enthusiasm.png";
import resilience from "../img/Skills/resilience.png";
import english_b2 from "../img/Skills/english_b2.png";
import analytical from "../img/Skills/analytical.png";
import assertiveness from "../img/Skills/assertiveness.png";
import comunication from "../img/Skills/comunication.png";
import french_a2 from "../img/Skills/french_a2.png";

interface SkillItem {
  name: string;
  img: string;
}

const skillsData: SkillItem[] = [
  { name: "Work in team", img: team },
  { name: "Creativity", img: creativity },
  { name: "Enthusiasm", img: enthusiasm },
  { name: "Resilience", img: resilience },
  { name: "English B2", img: english_b2 },
  { name: "Analytical", img: analytical },
  { name: "Assertiveness", img: assertiveness },
  { name: "Communication", img: comunication },
  { name: "French A2", img: french_a2 },
];

const Skills: React.FC = () => {
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <section className="main--skills-section">
      <div className="skills-section">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h3>
        <motion.ul 
          className="skills-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => (
            <motion.li key={index} variants={itemVariants}>
              <p>{skill.name}</p>
              <img
                src={skill.img}
                alt={skill.name}
                className={`skills-list__icon ${skill.name
                  .toLowerCase()
                  .replace(/ /g, "_")}`}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Skills;
