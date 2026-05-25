/* global React, Eyebrow, Arrow */

function Logos() {
  return (
    <section className="logos">
      <div className="logos-inner">
        <div className="logos-label">Trusted by 100+ founders worldwide</div>
        <div className="logos-row">
          <span className="brand">Spotify</span>
          <span className="brand">.PromptPilot</span>
          <span className="brand">⟫ Screen</span>
          <span className="brand">⟁ EverMist</span>
          <span className="brand">▲ Taskly</span>
          <span className="brand">Coinbase</span>
          <span className="brand">Webflow</span>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      title: 'Implementation and tools',
      body: 'Streamlined process with the right tools to build fast and smart.',
      glyph: 'A',
    },
    {
      title: 'High-converting',
      body: 'Clear designs that convert. Built in Figma, powered by Framer.',
      glyph: 'B',
    },
    {
      title: 'Maximum Return on ROI',
      body: 'Real value, no fluff. Everything is done with purpose and profit in mind.',
      glyph: 'C',
    },
    {
      title: 'Clear steps and trust',
      body: 'You always know what is next. Simple, honest communication.',
      glyph: 'D',
    },
  ];
  return (
    <section className="features" id="work">
      <div className="section-inner">
        <Eyebrow>● Why Halo</Eyebrow>
        <h2 className="section-h2">Why clients stick with us</h2>
        <p className="section-sub">We combine clarity, trust, and high-performing design to deliver results that actually matter.</p>

        <div className="feature-grid">
          {items.map((it, i) => (
            <div key={i} className="feature-card">
              <div className="feature-card-glow"></div>
              <div className="feature-glyph">
                <div className="feature-glyph-inner">
                  <FeatureMark idx={i}/>
                </div>
              </div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureMark({idx}) {
  // Different visual treatments per card
  if (idx === 0) return (
    <svg viewBox="0 0 60 60" width="40" height="40" fill="none" stroke="#ff7a1a" strokeWidth="1.5">
      <path d="M30 8 L52 50 L8 50 Z"/>
      <circle cx="30" cy="36" r="3" fill="#ff7a1a"/>
    </svg>
  );
  if (idx === 1) return (
    <svg viewBox="0 0 60 60" width="40" height="40" fill="none" stroke="#ff7a1a" strokeWidth="1.5">
      <rect x="10" y="10" width="16" height="16" rx="3"/>
      <rect x="34" y="10" width="16" height="16" rx="3"/>
      <rect x="10" y="34" width="16" height="16" rx="3"/>
      <rect x="34" y="34" width="16" height="16" rx="3"/>
      <path d="M26 18 L34 18 M26 42 L34 42 M18 26 L18 34 M42 26 L42 34"/>
    </svg>
  );
  if (idx === 2) return (
    <svg viewBox="0 0 60 60" width="46" height="32" fill="none" stroke="#ff7a1a" strokeWidth="1.5">
      <path d="M6 44 L20 30 L30 38 L54 14"/>
      <path d="M44 14 L54 14 L54 24" strokeLinecap="round"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 60 60" width="40" height="40" fill="none" stroke="#ff7a1a" strokeWidth="1.5">
      <path d="M10 50 L26 36 L34 44 L50 28" strokeLinecap="round"/>
      <circle cx="50" cy="28" r="3" fill="#ff7a1a"/>
      <circle cx="26" cy="36" r="3" fill="#ff7a1a"/>
      <circle cx="10" cy="50" r="3" fill="#ff7a1a"/>
    </svg>
  );
}

function Process() {
  const steps = [
    {n: '01', t: 'Share your vision', d: 'Hop on a quick call or fill out a brief. We figure out the "what" and the "how".'},
    {n: '02', t: 'We design it', d: 'You get a clear, conversion-focused landing page tailored to your brand and goals.'},
    {n: '03', t: 'Ready to launch', d: 'We deliver everything ready to ship. Use it to validate, grow, or raise your round.'},
  ];
  return (
    <section className="process" id="process">
      <div className="section-inner">
        <Eyebrow>● Process</Eyebrow>
        <h2 className="section-h2">The process. Fast, clear, done.</h2>
        <p className="section-sub">No endless revisions. No messy handoffs. Just a process that works — and delivers fast.</p>
        <div className="process-grid">
          {steps.map((s) => (
            <div key={s.n} className="process-card">
              <div className="process-card-glow"></div>
              <div className="process-orb">
                <span>{s.n}</span>
              </div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Logos, Features, Process });
