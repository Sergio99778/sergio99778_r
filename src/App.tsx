import './portfolio.css';
import { CRT, PixelCursor, Topbar, Footer } from './components/Chrome';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import ToolsSection from './components/Tools';
import Contact from './components/Contact';
import Konami from './components/Konami';
import PortfolioTweaks from './components/Tweaks';

function App() {
  return (
    <div className="app">
      <PixelCursor />
      <Topbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Timeline />
        <ToolsSection />
        <Contact />
      </main>
      <Footer />
      <Konami />
      <PortfolioTweaks />
      <CRT />
    </div>
  );
}

export default App;
