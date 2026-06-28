import React, { useRef } from 'react';
import { SectionHead } from './Chrome';

interface ProjectStat {
  k: string;
  v: string;
}

interface Project {
  name: string;
  sub: string;
  lvl: string;
  status: string;
  img: string;
  desc: string;
  stats: ProjectStat[];
  tags: string[];
  code: string;
  live: string | null;
}

const PROJECTS: Project[] = [
  {
    name: 'CLANDESTINO',
    sub: '// php · javascript · css',
    lvl: '2021',
    status: 'WEB',
    img: '/assets/projects/clandestino.jpg',
    desc: 'An early hand-rolled web build — vanilla PHP, JavaScript, HTML and CSS, no framework. Where I learned to ship without a safety net.',
    stats: [
      { k: 'STACK', v: 'PHP · JS · CSS' },
      { k: 'YEAR', v: '2021' },
      { k: 'TYPE', v: 'WEB' },
    ],
    tags: ['PHP', 'JavaScript', 'CSS', 'HTML'],
    code: 'https://github.com/Sergio99778/clandestino',
    live: null,
  },
  {
    name: 'PLACES',
    sub: '// react · spa',
    lvl: '2021',
    status: 'REACT',
    img: '/assets/projects/places.jpg',
    desc: 'A places app built with React — my early dive into component-driven UIs and state management.',
    stats: [
      { k: 'STACK', v: 'REACT · JS' },
      { k: 'YEAR', v: '2021' },
      { k: 'TYPE', v: 'SPA' },
    ],
    tags: ['React', 'JavaScript', 'CSS'],
    code: 'https://github.com/Sergio99778/places-react',
    live: null,
  },
  {
    name: 'LANDING PAGE',
    sub: '// responsive · freecodecamp',
    lvl: '2021',
    status: 'FCC',
    img: '/assets/projects/landing-page.jpg',
    desc: 'A responsive product landing page from the freeCodeCamp Responsive Web Design track. Pure HTML and CSS, mobile-first.',
    stats: [
      { k: 'STACK', v: 'HTML · CSS' },
      { k: 'YEAR', v: '2021' },
      { k: 'TYPE', v: 'RESPONSIVE' },
    ],
    tags: ['HTML', 'CSS', 'Responsive'],
    code: 'https://github.com/Sergio99778/responsive-freeCodeCamp',
    live: null,
  },
  {
    name: 'TRIBUTE PAGE',
    sub: '// responsive · freecodecamp',
    lvl: '2021',
    status: 'FCC',
    img: '/assets/projects/tribute.jpg',
    desc: 'A tribute page from the freeCodeCamp Responsive Web Design track — semantic HTML and responsive CSS, deployed on GitHub Pages.',
    stats: [
      { k: 'STACK', v: 'HTML · CSS' },
      { k: 'YEAR', v: '2021' },
      { k: 'TYPE', v: 'RESPONSIVE' },
    ],
    tags: ['HTML', 'CSS'],
    code: 'https://github.com/Sergio99778/responsive-freeCodeCamp',
    live: 'https://sergio99778.github.io/responsive-freeCodeCamp/Build-a-Tribute-Page/index.html',
  },
];

interface ProjectCardProps {
  p: Project;
}

function ProjectCard({ p }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const rx = (0.5 - y) * 8;
    const ry = (x - 0.5) * 10;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = '';
  };
  return (
    <div className="proj" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="proj-cover">
        <img src={p.img} alt={p.name}/>
        <div className="lvl">{p.lvl}</div>
        <div className="status">{p.status}</div>
      </div>
      <div className="proj-body">
        <h3>{p.name}</h3>
        <div className="sub">{p.sub}</div>
        <p className="desc">{p.desc}</p>
        <div className="proj-stats">
          {p.stats.map((s) => (
            <div className="ps" key={s.k}>
              <span className="v">{s.v}</span>
              <span className="k">{s.k}</span>
            </div>
          ))}
        </div>
        <div className="proj-tags">
          {p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
        </div>
        <div className="proj-actions">
          {p.live ? <a className="ico-btn ico-btn--primary" href={p.live} target="_blank" rel="noreferrer">↗ LIVE</a> : null}
          <a className="ico-btn" href={p.code} target="_blank" rel="noreferrer">{`<>`} CODE</a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionHead num="03" title="PROJECTS.ROM" badge="// 4 cartridges"/>
        <div className="projects-grid">
          {PROJECTS.map((p) => <ProjectCard p={p} key={p.name}/>)}
        </div>
      </div>
    </section>
  );
}

export default Projects;
