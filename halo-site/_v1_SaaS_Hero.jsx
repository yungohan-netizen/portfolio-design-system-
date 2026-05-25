/* global React, Eyebrow, Arrow */

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden>
        <div className="hero-glow"></div>
        <div className="hero-beam hero-beam-l"></div>
        <div className="hero-beam hero-beam-r"></div>
        <div className="hero-grid"></div>
      </div>
      <div className="hero-inner">
        <Eyebrow>● Onboarding 4 founders this week →</Eyebrow>
        <h1 className="hero-title">
          Launch faster.<br/>
          Convert <em>better.</em>
        </h1>
        <p className="hero-sub">
          Halo designs cinematic dark-mode product UI for founders shipping their first idea — or scaling toward their tenth.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-accent" href="#"><span>Start a Project</span> <Arrow/></a>
          <a className="btn" href="#">Watch reel</a>
        </div>
        <ProductShot/>
      </div>
    </section>
  );
}

function ProductShot() {
  return (
    <div className="product-shot">
      <div className="product-glow product-glow-l"></div>
      <div className="product-glow product-glow-r"></div>
      <div className="product-frame">
        <div className="ps-side">
          <div className="ps-search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
            <span>Search</span>
            <span className="ps-kbd">⌘S</span>
          </div>
          <div className="ps-side-label">MENU</div>
          <div className="ps-side-item is-active">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M3 12L12 3l9 9"/><path d="M5 10v10h14V10"/></svg>
            Dashboard
          </div>
          <div className="ps-side-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-7"/></svg>
            Analytics<span className="ps-count">3</span>
          </div>
          <div className="ps-side-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/></svg>
            Transactions
          </div>
          <div className="ps-side-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg>
            Files
          </div>
        </div>
        <div className="ps-main">
          <div className="ps-topbar">
            <div>
              <div className="ps-eyebrow">Dashboard</div>
              <div className="ps-greet">Welcome back, Talha</div>
            </div>
            <div className="ps-topbar-r">
              <span className="ps-chip">This week ▾</span>
              <span className="ps-mono ps-muted">Updated 10:22 AM</span>
            </div>
          </div>
          <div className="ps-stats">
            <Stat label="Total balance" value="$74,503" sub="+4.21% vs last month" tone="volt"/>
            <Stat label="Monthly deposit" value="$2,500" sub="next in 14 days"/>
            <Stat label="Invested" value="$59,963" sub="+$14,539 earned" tone="volt"/>
          </div>
          <div className="ps-chart">
            <div className="ps-chart-h">
              <span>Daily visitors</span>
              <span className="ps-mono ps-muted">12.1M views</span>
            </div>
            <Sparkline/>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({label, value, sub, tone}) {
  return (
    <div className="ps-stat">
      <div className="ps-stat-label">{label}</div>
      <div className="ps-stat-value">{value}</div>
      <div className={`ps-stat-sub ${tone==='volt'?'is-volt':''}`}>{sub}</div>
    </div>
  );
}

function Sparkline() {
  const pts = [12,16,14,22,28,24,32,38,30,42,46,40,56,52,60,68,62,72,80,74];
  const max = 88;
  return (
    <svg viewBox="0 0 320 80" preserveAspectRatio="none" className="ps-spark">
      <defs>
        <linearGradient id="spkfill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#22e07f" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#22e07f" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path
        d={`M0,${80 - pts[0]} ${pts.map((p,i)=>`L${(i*(320/(pts.length-1))).toFixed(1)},${(80-p).toFixed(1)}`).join(' ')} L320,80 L0,80 Z`}
        fill="url(#spkfill)"
      />
      <path
        d={`M0,${80 - pts[0]} ${pts.map((p,i)=>`L${(i*(320/(pts.length-1))).toFixed(1)},${(80-p).toFixed(1)}`).join(' ')}`}
        fill="none" stroke="#22e07f" strokeWidth="1.5"
      />
    </svg>
  );
}

Object.assign(window, { Hero, ProductShot });
