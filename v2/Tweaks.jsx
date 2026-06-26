const { useEffect: tUseEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "green",
  "scanlines": true,
  "scanlineDensity": 3,
  "glow": 1,
  "rgbSplit": true,
  "vignette": true
}/*EDITMODE-END*/;

const ACCENTS = {
  green: { c: '#00ff88', dim: '#00b35e', glow: 'rgba(0, 255, 136, 0.45)', soft: 'rgba(0, 255, 136, 0.12)', line: 'rgba(0, 255, 136, 0.22)' },
  cyan:  { c: '#00e5ff', dim: '#0099b3', glow: 'rgba(0, 229, 255, 0.45)', soft: 'rgba(0, 229, 255, 0.12)', line: 'rgba(0, 229, 255, 0.22)' },
  amber: { c: '#ffb000', dim: '#cc8800', glow: 'rgba(255, 176, 0, 0.45)',  soft: 'rgba(255, 176, 0, 0.12)',  line: 'rgba(255, 176, 0, 0.22)' },
};

function PortfolioTweaks() {
  const [t, setT] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const root = document.documentElement;
    const a = ACCENTS[t.accent] || ACCENTS.green;
    root.style.setProperty('--accent', a.c);
    root.style.setProperty('--accent-dim', a.dim);
    root.style.setProperty('--accent-glow', a.glow);
    root.style.setProperty('--accent-soft', a.soft);
    root.style.setProperty('--accent-line', a.line);
    root.style.setProperty('--scanline-density', `${t.scanlineDensity}px`);
    root.style.setProperty('--scanline-opacity', t.scanlines ? '0.22' : '0');
    root.style.setProperty('--glow-intensity', String(t.glow));
    document.querySelector('.crt-rgb').style.opacity = t.rgbSplit ? '0.6' : '0';
    document.querySelector('.crt-vignette').style.opacity = t.vignette ? '1' : '0';
  }, [t]);

  return (
    <TweaksPanel title="TWEAKS">
      <TweakSection title="Accent">
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
      <TweakSection title="CRT">
        <TweakToggle label="Scanlines" value={t.scanlines} onChange={(v) => setT('scanlines', v)}/>
        <TweakSlider label="Scanline density" min={2} max={6} step={1} unit="px"
          value={t.scanlineDensity} onChange={(v) => setT('scanlineDensity', v)}/>
        <TweakSlider label="Glow intensity" min={0} max={1.5} step={0.1}
          value={t.glow} onChange={(v) => setT('glow', v)}/>
        <TweakToggle label="RGB chroma split" value={t.rgbSplit} onChange={(v) => setT('rgbSplit', v)}/>
        <TweakToggle label="Vignette" value={t.vignette} onChange={(v) => setT('vignette', v)}/>
      </TweakSection>
    </TweaksPanel>
  );
}

Object.assign(window, { PortfolioTweaks });
