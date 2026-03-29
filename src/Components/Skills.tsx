import React from "react";
import { motion } from "framer-motion";

import "./Skills.css";
import { staggerContainer, scaleInItem } from "../animations/variants";
import type { SkillItem } from "../types";

import team from "../img/Skills/work_in_team.png";
import creativity from "../img/Skills/creativity.png";
import enthusiasm from "../img/Skills/enthusiasm.png";
import resilience from "../img/Skills/resilience.png";
import english_b2 from "../img/Skills/english_b2.png";
import analytical from "../img/Skills/analytical.png";
import assertiveness from "../img/Skills/assertiveness.png";
import comunication from "../img/Skills/comunication.png";
import french_a2 from "../img/Skills/french_a2.png";

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
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skill) => (
            <motion.li key={skill.name} variants={scaleInItem}>
              <p>{skill.name}</p>
              <img
                src={skill.img}
                alt={skill.name}
                className={`skills-list__icon ${skill.name
                  .toLowerCase()
                  .replace(/ /g, "_")}`}
                loading="lazy"
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Skills;
