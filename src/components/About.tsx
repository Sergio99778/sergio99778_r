import { SectionHead } from './Chrome';

function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionHead num="01" title="ABOUT_ME.TXT" badge="// who is this guy?"/>
        <div className="about-grid">
          <div className="about-card">
            <div className="badge"><span>PLAYER · 1</span><span>LV.27</span></div>
            <div className="stats">
              <div className="row"><span className="k">CLASS</span><span className="v">BACKEND · AI</span></div>
              <div className="row"><span className="k">RANK</span><span className="v">SR. ENG</span></div>
              <div className="row"><span className="k">REGION</span><span className="v">MX</span></div>
              <div className="row"><span className="k">YEARS</span><span className="v">5+</span></div>
            </div>
            <div className="full-row"><span className="k">SPECIALTY</span><span className="v">NODE · AI</span></div>
            <div className="full-row"><span className="k">SECONDARY</span><span className="v">DEVOPS</span></div>
            <div className="full-row"><span className="k">SUB-CLASS</span><span className="v">ANDROID</span></div>
            <div className="full-row"><span className="k">SIDE QUEST</span><span className="v">GYM-PROGRESS</span></div>
            <div className="full-row"><span className="k">FAVE STAT</span><span className="v">HP +∞ · MP +∞</span></div>
            <div className="full-row" style={{ borderBottom: 'none' }}><span className="k">EQUIPPED</span><span className="v">VS·CODE</span></div>
          </div>
          <div className="about-text">
            <h3>// hello, world</h3>
            <p>
              I'm <strong>Sergio</strong> — a software engineer who spent the last
              five years moving fluently up and down the stack. I cut my teeth on
              <strong> React</strong> and modern frontend, then went deep on
              <strong> Node, Express &amp; SQL</strong> when the APIs around me kept
              breaking — and more recently on <strong>AI: production RAG systems
              and LLM integrations</strong>. Now I'm the person who can ship the
              feature, the database migration, <em>and</em> the Docker config that
              puts it in prod.
            </p>
            <p>
              Lately I've been building <strong>gym-progress</strong> — a tracker
              for the kind of nerd who wants their PR history graphed properly.
              Started as a React webapp, became a real Android app in Kotlin
              because phones are where you actually use it. That's where the
              <strong> mobile</strong> chapter began.
            </p>
            <p>
              Outside the editor: nightcore on loop, cheap mechanical keyboards,
              old JRPGs, and squat day. I think the best software feels like a
              well-designed game — clear feedback, no busywork, satisfying loop.
            </p>
            <div className="quote">
              "Make it work, make it right, make it fast — and make the
              terminal look cool while you're at it." 🎮
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
