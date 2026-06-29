import { useEffect, useRef } from 'react';
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakColor,
  TweakToggle,
  TweakSlider,
} from './TweaksPanel';

export interface TweakValues {
  // Index signature: satisfies Record<string, unknown> for useTweaks generic constraint.
  // Named properties below still return their specific types when accessed directly.
  [key: string]: string | boolean | number;
  accent: string;
  scanlines: boolean;
  scanlineDensity: number;
  glow: number;
  rgbSplit: boolean;
  vignette: boolean;
}

const TWEAK_DEFAULTS: TweakValues = /*EDITMODE-BEGIN*/ {
  accent: 'green',
  scanlines: true,
  scanlineDensity: 3,
  glow: 1,
  rgbSplit: true,
  vignette: true,
} /*EDITMODE-END*/;

const ACCENTS: Record<string, { c: string; dim: string; glow: string; soft: string; line: string }> = {
  green: { c: '#00ff88', dim: '#00b35e', glow: 'rgba(0, 255, 136, 0.45)', soft: 'rgba(0, 255, 136, 0.12)', line: 'rgba(0, 255, 136, 0.22)' },
  cyan:  { c: '#00e5ff', dim: '#0099b3', glow: 'rgba(0, 229, 255, 0.45)', soft: 'rgba(0, 229, 255, 0.12)', line: 'rgba(0, 229, 255, 0.22)' },
  amber: { c: '#ffb000', dim: '#cc8800', glow: 'rgba(255, 176, 0, 0.45)',  soft: 'rgba(255, 176, 0, 0.12)',  line: 'rgba(255, 176, 0, 0.22)' },
};

function PortfolioTweaks() {
  const [t, setT] = useTweaks(TWEAK_DEFAULTS);

  // Apply TWEAK_DEFAULTS as CSS custom properties on first render, then keep
  // them in sync whenever any tweak value changes.
  useEffect(() => {
    const root = document.documentElement;
    const a = ACCENTS[t.accent] || ACCENTS['green'];
    root.style.setProperty('--accent', a.c);
    root.style.setProperty('--accent-dim', a.dim);
    root.style.setProperty('--accent-glow', a.glow);
    root.style.setProperty('--accent-soft', a.soft);
    root.style.setProperty('--accent-line', a.line);
    root.style.setProperty('--scanline-density', `${t.scanlineDensity}px`);
    root.style.setProperty('--scanline-opacity', t.scanlines ? '0.22' : '0');
    root.style.setProperty('--glow-intensity', String(t.glow));
    // querySelector null guards (strict TS): CRT is always mounted as a sibling,
    // so these elements exist in practice. Same behavior as v2 when they're present.
    const rgb = document.querySelector<HTMLElement>('.crt-rgb');
    const vig = document.querySelector<HTMLElement>('.crt-vignette');
    if (rgb) rgb.style.opacity = t.rgbSplit ? '0.6' : '0';
    if (vig) vig.style.opacity = t.vignette ? '1' : '0';
  }, [t]);

  // Alt+T: toggle the panel open/closed (decision #5 — panel was host-only in v2).
  // Tracks panel state via the same message bus TweaksPanel uses, so the ref
  // stays in sync even when the user closes via the X button.
  const isOpenRef = useRef(false);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      const type = e?.data?.type;
      if (type === '__activate_edit_mode') isOpenRef.current = true;
      if (type === '__deactivate_edit_mode') isOpenRef.current = false;
      // X-button dismiss: panel.parent.postMessage → goes to window in standalone
      if (type === '__edit_mode_dismissed') isOpenRef.current = false;
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === 't' || e.key === 'T')) {
        if (isOpenRef.current) {
          window.postMessage({ type: '__deactivate_edit_mode' }, '*');
        } else {
          window.postMessage({ type: '__activate_edit_mode' }, '*');
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <TweaksPanel title="TWEAKS">
      <TweakSection label="Accent">
        <TweakColor
          label="Phosphor"
          options={['#00ff88', '#00e5ff', '#ffb000']}
          value={ACCENTS[t.accent]?.c || '#00ff88'}
          onChange={(c) => {
            const k = Object.keys(ACCENTS).find((kk) => ACCENTS[kk].c === c) || 'green';
            setT('accent', k);
          }}
        />
      </TweakSection>
      <TweakSection label="CRT">
        <TweakToggle label="Scanlines" value={t.scanlines} onChange={(v) => setT('scanlines', v)} />
        <TweakSlider
          label="Scanline density"
          min={2}
          max={6}
          step={1}
          unit="px"
          value={t.scanlineDensity}
          onChange={(v) => setT('scanlineDensity', v)}
        />
        <TweakSlider
          label="Glow intensity"
          min={0}
          max={1.5}
          step={0.1}
          value={t.glow}
          onChange={(v) => setT('glow', v)}
        />
        <TweakToggle label="RGB chroma split" value={t.rgbSplit} onChange={(v) => setT('rgbSplit', v)} />
        <TweakToggle label="Vignette" value={t.vignette} onChange={(v) => setT('vignette', v)} />
      </TweakSection>
    </TweaksPanel>
  );
}

export default PortfolioTweaks;
