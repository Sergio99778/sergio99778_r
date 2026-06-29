/* Hero: pixel headline + typewriter + animated terminal */
const { useEffect: heroUseEffect, useState: heroUseState, useRef: heroUseRef } = React;

const HERO_PHRASES = [
  "ship software.",
  "wire backends.",
  "bend pipelines.",
  "train models.",
  "love the craft.",
];

function HeroTypewriter() {
  const [text, setText] = heroUseState('');
  const idx = heroUseRef(0);
  const ch = heroUseRef(0);
  const dir = heroUseRef(1); // 1=typing, -1=deleting
  useEffect(() => {
    let raf;
    let last = 0;
    const tick = (t) => {
      const word = HERO_PHRASES[idx.current];
      const speed = dir.current > 0 ? 75 : 40;
      if (t - last > speed) {
        last = t;
        ch.current += dir.current;
        if (ch.current > word.length) {
          dir.current = -1; ch.current = word.length;
          last = t + 900; // pause before delete
        } else if (ch.current < 0) {
          dir.current = 1; ch.current = 0;
          idx.current = (idx.current + 1) % HERO_PHRASES.length;
        }
        setText(word.slice(0, ch.current));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <span>I {text}<span className="caret"></span></span>;
}

/* ---------- Animated terminal ---------- */
const TERM_SCRIPT = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'sergio · software engineer · backend & ai · méxico' },
  { type: 'cmd', text: 'cat stack.json' },
  { type: 'out', text: '{\n  "ai":        ["RAG systems", "LLMs · OpenAI · Gemini · Llama"],\n  "backend":   ["Node", "NestJS", "Express", "PostgreSQL", "MongoDB"],\n  "frontend":  ["React", "TypeScript", "Redux", "GraphQL"],\n  "devops":    ["Docker", "Firebase", "ETL pipelines"],\n  "languages": ["TS", "JS", "Python", "C++", "Java", "PHP"]\n}' },
  { type: 'cmd', text: 'echo $FOCUS' },
  { type: 'out', text: 'production RAG systems · LLM integrations · APIs that hold up at 3am' },
  { type: 'cmd', text: 'sudo make coffee' },
  { type: 'out', text: '<span class="warn">[warn]</span> coffee.machine: out of beans\n<span class="ok">[ok]</span>   tea.kettle: ready' },
  { type: 'cmd', text: 'echo "say hi →"' },
  { type: 'out', text: 'sergio99778@gmail.com' },
];

function HeroTerminal() {
  const [lines, setLines] = heroUseState([]); // {kind:'cmd'|'out', text, done}
  const cancelled = heroUseRef(false);
  useEffect(() => {
    cancelled.current = false;
    const wait = (ms) => new Promise(r => setTimeout(r, ms));
    async function run() {
      // restart loop
      while (!cancelled.current) {
        setLines([]);
        for (const step of TERM_SCRIPT) {
          if (cancelled.current) return;
          if (step.type === 'cmd') {
            // type char by char
            for (let i = 1; i <= step.text.length; i++) {
              if (cancelled.current) return;
              setLines((prev) => {
                const last = prev[prev.length - 1];
                if (last && last.kind === 'cmd' && !last.done) {
                  return [...prev.slice(0, -1), { ...last, text: step.text.slice(0, i) }];
                }
                return [...prev, { kind: 'cmd', text: step.text.slice(0, i), done: false }];
              });
              await wait(45 + Math.random() * 60);
            }
            setLines((prev) => {
              const last = prev[prev.length - 1];
              return [...prev.slice(0, -1), { ...last, done: true }];
            });
            await wait(280);
          } else {
            setLines((prev) => [...prev, { kind: 'out', text: step.text, done: true }]);
            await wait(700);
          }
        }
        await wait(2200);
      }
    }
    run();
    return () => { cancelled.current = true; };
  }, []);

  return (
    <div className="term">
      <div className="term-bar">
        <span className="term-dot r"></span>
        <span className="term-dot y"></span>
        <span className="term-dot g"></span>
        <span className="path">~/sergio/portfolio</span>
        <span className="right">zsh · 80×24</span>
      </div>
      <div className="term-body">
        <div className="line dim">{`Last login: Sat May  9 09:42 on ttys001`}</div>
        <div className="line dim">{`Welcome back, sergio. Coffee level: ▓▓▓░░ (3/5)`}</div>
        <div className="line">&nbsp;</div>
        {lines.map((l, i) => {
          const isLast = i === lines.length - 1;
          if (l.kind === 'cmd') {
            return (
              <div className="line" key={i}>
                <span className="prompt">sergio@dev </span>
                <span className="dim">~ $ </span>
                <span className="you" dangerouslySetInnerHTML={{ __html: l.text }}/>
                {isLast && !l.done ? <span className="term-cursor"></span> : null}
              </div>
            );
          }
          return (
            <div className="line out" key={i} dangerouslySetInnerHTML={{ __html: l.text }}/>
          );
        })}
        {(() => {
          const last = lines[lines.length - 1];
          if (last && last.kind === 'out') {
            return <div className="line"><span className="prompt">sergio@dev </span><span className="dim">~ $ </span><span className="term-cursor"></span></div>;
          }
          return null;
        })()}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="role-tag">
              <span className="arrow">▶</span>
              <span>SOFTWARE ENGINEER · MÉXICO 🇲🇽</span>
            </div>
            <h1>SERGIO<br/><span className="accent">DE LUCIO</span></h1>
            <div className="typed"><HeroTypewriter/></div>
            <p className="lede">
              I build backends and AI systems that hold up in production — RAG
              pipelines, LLM integrations (OpenAI · Gemini · Llama), plus the REST
              APIs and ETL plumbing behind them. Gym-progress tracker on the side 💪
            </p>
            <div className="cta-row">
              <a className="btn btn--solid" href="#projects">▶ PLAY PROJECTS</a>
              <a className="btn" href="#contact">PRESS START · HIRE ME</a>
              <a className="btn btn--ghost" href="https://drive.google.com/file/d/1107DfG0CiDCDL4uuUTs6dgmDctWDOje1/view?usp=sharing" target="_blank" rel="noreferrer">↓ CV.PDF</a>
            </div>
            <div className="stats">
              <div className="stat"><div className="v">5+ YRS</div><div className="k">Shipping</div></div>
              <div className="stat"><div className="v">80+</div><div className="k">Repos</div></div>
              <div className="stat"><div className="v">∞</div><div className="k">Refactors</div></div>
            </div>
          </div>
          <div><HeroTerminal/></div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
