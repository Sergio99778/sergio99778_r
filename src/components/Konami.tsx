import { useEffect, useState } from 'react';

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

function Konami() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let buf: string[] = [];
    const onKey = (e: KeyboardEvent) => {
      const k = e.key;
      buf.push(k);
      if (buf.length > KONAMI.length) buf = buf.slice(-KONAMI.length);
      const match = buf.length === KONAMI.length &&
        buf.every((x, i) => x.toLowerCase() === KONAMI[i].toLowerCase());
      if (match) setOpen(true);
      if (k === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  if (!open) return null;
  return (
    <div className="konami-modal" onClick={() => setOpen(false)}>
      <div className="panel" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={() => setOpen(false)}>[X]</button>
        <h2>★ CHEAT CODE<br/>UNLOCKED ★</h2>
        <p>+30 LIVES · +9999 GOLD</p>
        <p>Infinite coffee mode enabled.</p>
        <p>Hidden stat: <span style={{ color: 'var(--accent)' }}>writes tests before code</span></p>
        <p className="small">(↑↑↓↓←→←→BA — you found it. P.S. I'm open to new roles — say "konami" if you got this far 👀)</p>
        <p className="small">[ESC or click outside to close]</p>
      </div>
    </div>
  );
}

export default Konami;
