import React from "react";
import { motion } from "framer-motion";

import SectionContainer from "../Components/SectionContainer";
import Projects from "../Components/Projects";
import Timeline from "../Components/Timeline";
import Languages from "../Components/Languages";
import Tools from "../Components/Tools";
import Skills from "../Components/Skills";

import { staggerContainer, fadeInItem } from "../animations/variants";
import type { ProjectItem } from "../types";

import clandestino from "../img/projects/clandestino.jpg";
import landing from "../img/projects/landing-page.jpg";
import places from "../img/projects/places.jpg";
import tribute from "../img/projects/tribute.jpg";

const data: ProjectItem[] = [
  {
    name: "Clandestino",
    url: "https://github.com/Sergio99778/clandestino",
    img: clandestino,
    desc: "Clandestino project",
  },
  {
    name: "Places react",
    url: "https://github.com/Sergio99778/places-react",
    img: places,
    desc: "Places project",
  },
  {
    name: "Landing page",
    url: "https://github.com/Sergio99778/responsive-freeCodeCamp",
    img: landing,
    desc: "Landing page project",
  },
  {
    name: "Tribute page",
    url: "https://sergio99778.github.io/responsive-freeCodeCamp/Build-a-Tribute-Page/index.html",
    img: tribute,
    desc: "Tribute project",
  },
];

const Main: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <SectionContainer>
        <motion.section className="main--introduction-section" variants={fadeInItem}>
          <div className="introduction-container">
            <h3>Welcome to my website ❤️</h3>
            <ul className="introduction-list">
              <li>
                <span>✨</span> I'm a passionate programmer who wants to make a
                better world by tipping the keys of a laptop and developing new
                software which will become essential in the community.
              </li>
              <li>
                <span>✨</span> I love to make code and work with teams on
                challenging projects
              </li>
            </ul>
          </div>
        </motion.section>
      </SectionContainer>
      
      <SectionContainer>
        <motion.div variants={fadeInItem}>
          <Projects data={data} />
        </motion.div>
      </SectionContainer>

      <SectionContainer>
        <motion.div variants={fadeInItem}>
          <Timeline />
        </motion.div>
      </SectionContainer>

      <SectionContainer>
        <motion.div className="media" variants={fadeInItem}>
          <Languages languages={["Python", "C++", "C", "Web", "Java", "PHP"]} />
          <Tools
            tools={[
              "Github",
              "Gnuplot",
              "Codestream",
              "MySQL",
              "React",
              "Redux",
              "GraphQL",
              "MongoDB",
              "PostgreSQL",
              "Express",
              "Firebase",
              "TypeScript",
            ]}
          />
        </motion.div>
      </SectionContainer>
      
      <SectionContainer>
        <motion.div variants={fadeInItem}>
          <Skills />
        </motion.div>
      </SectionContainer>
    </motion.div>
  );
};

export default Main;
