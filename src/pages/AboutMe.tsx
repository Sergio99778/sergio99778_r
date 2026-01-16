import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "../Components/SectionContainer";
import "./styles/AboutMe.css";

const AboutMe: React.FC = () => {
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SectionContainer>
        <section className="main--introduction-section">
          <div className="introduction-container">
            <motion.h3 variants={itemVariants}>Welcome to my About Me ❤️</motion.h3>
            <motion.h2 variants={itemVariants}> &gt; What I am like?</motion.h2>
            <motion.ul className="introduction-list" variants={itemVariants}>
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
            <motion.h2 variants={itemVariants}> &gt; Formation</motion.h2>
            <motion.ul className="introduction-list" variants={itemVariants}>
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
            <motion.h2 variants={itemVariants}> &gt; Hobbies</motion.h2>
            <motion.ul className="introduction-list" variants={itemVariants}>
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
