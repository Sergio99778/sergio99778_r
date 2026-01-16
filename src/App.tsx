import React from "react";
//Dependencies
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

//Pages
import Main from "./pages/Main";
import AboutMe from "./pages/AboutMe";

import "./App.css";

interface Title {
  name: string;
  to: string;
}

interface SocialLink {
  name: string;
  href: string;
}

const titles: Title[] = [
  { name: "About me", to: "/about_me" },
];

const App: React.FC = () => {
  const redes: SocialLink[] = [
    {
      name: "facebook",
      href: "https://www.facebook.com/sergio1729/",
    },
    {
      name: "twitter",
      href: "https://twitter.com/SergioDeLucio2",
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/sergio-de-lucio/",
    },
    {
      name: "github",
      href: "https://github.com/Sergio99778/",
    },
  ];

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="App">
        <Header
          titles={titles}
          data='[ "Creating software.", "Creating the future.", "I Love to code.", "I Love to Develop." ]'
        />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about_me" element={<AboutMe />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer redes={redes} />
      </div>
    </BrowserRouter>
  );
}

export default App;
