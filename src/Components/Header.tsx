import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Header.css";

interface Title {
  name: string;
  to: string;
}

interface HeaderProps {
  titles: Title[];
  data: string;
}

interface TypewriterState {
  isDeleting: boolean;
  loopNum: number;
  text: string;
}

const Header: React.FC<HeaderProps> = ({ titles, data }) => {
  const [text, setText] = useState<string>("");
  
  const toRotate = useRef<string[]>(JSON.parse(data));
  const period = 2000;
  
  // Ref to track engine state across re-renders without triggering them
  const state = useRef<TypewriterState>({
    isDeleting: false,
    loopNum: 0,
    text: ""
  });

  useEffect(() => {
    let ticker: ReturnType<typeof setTimeout>;

    const tick = () => {
      let { isDeleting, loopNum, text: currentText } = state.current;
      let i = loopNum % toRotate.current.length;
      let fullTxt = toRotate.current[i];
      
      let updatedText = isDeleting
        ? fullTxt.substring(0, currentText.length - 1)
        : fullTxt.substring(0, currentText.length + 1);

      state.current.text = updatedText;
      setText(updatedText);

      let delta = 200 - Math.random() * 100;

      if (isDeleting) {
        delta /= 2;
      }

      if (!isDeleting && updatedText === fullTxt) {
        delta = period;
        state.current.isDeleting = true;
      } else if (isDeleting && updatedText === "") {
        state.current.isDeleting = false;
        state.current.loopNum = loopNum + 1;
        delta = 500;
      }

      ticker = setTimeout(tick, delta);
    };

    ticker = setTimeout(tick, 200 - Math.random() * 100);

    return () => clearTimeout(ticker);
  }, [period]);

  return (
    <motion.header 
      id="welcome-section"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="header--container-typewriter">
        <Link className="typewriter--text" to="/">
          <span className="typewrite">
            <span className="wrap">{text}</span>
          </span>
        </Link>
      </h1>
      <motion.nav 
        className="header--submenu" 
        id="navbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <a
          href="/sergio99778_r/cv.pdf"
          className="header--hover-underline-animation"
          download="Sergio_De_Lucio_CV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          CV
        </a>
        {titles.map((title, i) => (
          <Link
            key={i}
            className="header--hover-underline-animation"
            to={title.to}
          >
            {title.name}
          </Link>
        ))}
      </motion.nav>
    </motion.header>
  );
};

export default Header;
