/* CRT overlay, pixel cursor, topbar, footer, section heading */
import { useEffect, useRef, useState } from 'react';

function CRT() {
  return (
    <div className="crt-frame" aria-hidden="true">
      <div className="crt-rgb"></div>
      <div className="crt-scanlines"></div>
      <div className="crt-flicker"></div>
      <div className="crt-vignette"></div>
    </div>
  );
}

function PixelCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [click, setClick] = useState(false);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 2}px)`;
    };
    const down = () => setClick(true);
    const up = () => setClick(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, []);
  return (
    <div ref={ref} className={`pix-cursor ${click ? 'click' : ''}`} aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        {/* 8-bit arrow */}
        <path d="M3 2 L3 18 L7 14 L9 19 L12 18 L10 13 L15 13 Z"
              fill="var(--accent)" stroke="#000" strokeWidth="1.2" shapeRendering="crispEdges"/>
      </svg>
    </div>
  );
}

function Topbar() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const pad = (n: number) => String(n).padStart(2, '0');
      setTime(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="brand">SERGIO_99<span className="blink">█</span></div>
        <nav>
          <a href="#about">about</a>
          <a href="#stack">stack</a>
          <a href="#projects">projects</a>
          <a href="#timeline">journey</a>
          <a href="#tools">tools</a>
          <a href="#contact">contact</a>
        </nav>
        <div className="status">
          <span className="led"></span>
          <span>ONLINE · {time}</span>
        </div>
      </div>
    </header>
  );
}

interface SectionHeadProps {
  num: string;
  title: string;
  badge?: string;
}

function SectionHead({ num, title, badge }: SectionHeadProps) {
  return (
    <div className="section-head">
      <span className="num">{num}</span>
      <span className="title">{title}</span>
      <span className="rule"></span>
      {badge ? <span className="badge">{badge}</span> : null}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="left">
        <span>© 2026 SERGIO_99</span>
        <span style={{ color: 'var(--accent)' }}>·</span>
        <span>BUILT WITH REACT &amp; CAFFEINE</span>
      </div>
      <div className="konami">↑ ↑ ↓ ↓ ← → ← → B A · TRY IT</div>
    </footer>
  );
}

export { CRT, PixelCursor, Topbar, SectionHead, Footer };
