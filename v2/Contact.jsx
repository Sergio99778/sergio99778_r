function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <SectionHead num="06" title="CONTACT.EXE" badge="// say hi"/>
        <div className="contact-card">
          <div>
            <h2>READY <span className="accent">PLAYER</span><br/>ONE?</h2>
            <p>
              I'm open to new software roles — backend, AI/ML, or full-stack.
              Full-time or long-arc contracts. If you're building something
              that needs solid APIs or production AI, drop me a line.
            </p>
            <div className="cta-row">
              <a className="btn btn--solid" href="mailto:sergio99778@gmail.com">▶ SEND MESSAGE</a>
              <a id="cv" className="btn" href="https://drive.google.com/file/d/1107DfG0CiDCDL4uuUTs6dgmDctWDOje1/view?usp=sharing" target="_blank" rel="noreferrer">↓ DOWNLOAD CV.PDF</a>
            </div>
          </div>
          <div className="links">
            <a href="mailto:sergio99778@gmail.com">
              <span className="ico">@</span>
              <span className="lab">sergio99778@gmail.com</span>
              <span className="arr">→</span>
            </a>
            <a href="https://github.com/Sergio99778" target="_blank" rel="noreferrer">
              <span className="ico">GH</span>
              <span className="lab">github.com/Sergio99778</span>
              <span className="arr">→</span>
            </a>
            <a href="https://www.linkedin.com/in/sergio-de-lucio/" target="_blank" rel="noreferrer">
              <span className="ico">IN</span>
              <span className="lab">linkedin.com/in/sergio-de-lucio</span>
              <span className="arr">→</span>
            </a>
            <a href="https://twitter.com/SergioDeLucio2" target="_blank" rel="noreferrer">
              <span className="ico">X</span>
              <span className="lab">@SergioDeLucio2</span>
              <span className="arr">→</span>
            </a>
            <a href="https://www.facebook.com/sergio1729/" target="_blank" rel="noreferrer">
              <span className="ico">FB</span>
              <span className="lab">facebook.com/sergio1729</span>
              <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Contact });
