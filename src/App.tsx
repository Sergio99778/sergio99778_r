import React, { lazy, Suspense } from "react";
//Dependencies
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ErrorBoundary from "./Components/ErrorBoundary";
import SkipToContent from "./Components/SkipToContent";

import "./App.css";
import type { Title, SocialLink } from "./types";

//Pages (lazy-loaded for code splitting)
const Main = lazy(() => import("./pages/Main"));
const AboutMe = lazy(() => import("./pages/AboutMe"));

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
        <SkipToContent />
        <Header
          titles={titles}
          data={["Creating software.", "Creating the future.", "I Love to code.", "I Love to Develop."]}
        />
        <main id="main-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<ErrorBoundary><Main /></ErrorBoundary>} />
              <Route path="/about_me" element={<ErrorBoundary><AboutMe /></ErrorBoundary>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer redes={redes} />
      </div>
    </BrowserRouter>
  );
}

export default App;
