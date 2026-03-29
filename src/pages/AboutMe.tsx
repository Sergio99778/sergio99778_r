import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "../Components/SectionContainer";
import "./styles/AboutMe.css";
import { staggerContainer, fadeInItem } from "../animations/variants";

const AboutMe: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <SectionContainer>
        <section className="main--introduction-section">
          <div className="introduction-container">
            <motion.h3 variants={fadeInItem}>Welcome to my About Me ❤️</motion.h3>
            <motion.h2 variants={fadeInItem}> &gt; What I am like?</motion.h2>
            <motion.ul className="introduction-list" variants={fadeInItem}>
              <li>
                <span> ✨ </span> Mexican forever 🇲🇽
              </li>
              <li>
                <span> ✨ </span> Open to opinions 👀
              </li>
              <li>
                <span>✨</span> Learning 24/7 ⌛
              </li>
              <li>
                <span>✨</span> Love nightcore music 🎶
              </li>
            </motion.ul>
            <motion.h2 variants={fadeInItem}> &gt; Formation</motion.h2>
            <motion.ul className="introduction-list" variants={fadeInItem}>
              <li>
                <span>✨</span> Mathematics at UnADM 📖
              </li>
              <li>
                <span>✨</span> Two years learning at Platzi 💚
              </li>
              <li>
                <span>✨</span> FreeCodeCamp Frontend developer 👍
              </li>
              <li>
                <span>✨</span> Student at Udemy 💡
              </li>
            </motion.ul>
            <motion.h2 variants={fadeInItem}> &gt; Hobbies</motion.h2>
            <motion.ul className="introduction-list" variants={fadeInItem}>
              <li>
                <span>✨</span> Play with my cat 🐈
              </li>
              <li>
                <span>✨</span> Learn different things 🧠
              </li>
              <li>
                <span>✨</span> Networking 🫂
              </li>
              <li>
                <span>✨</span> Videogames 🎮
              </li>
            </motion.ul>
          </div>
        </section>
      </SectionContainer>
    </motion.div>
  );
};

export default AboutMe;
