/* global React, Eyebrow */
const { useEffect } = React;

function Hero() {
  return (
    <section className="hero p-hero">
      <div className="hero-bg" aria-hidden>
        <div className="hero-glow" data-parallax="0.15"></div>
        <div className="hero-beam hero-beam-l" data-parallax="0.1"></div>
        <div className="hero-beam hero-beam-r" data-parallax="0.1"></div>
        <div className="hero-grid" data-parallax="0.05"></div>
      </div>
      <div className="hero-inner">
        <div data-reveal data-reveal-stagger className="p-hero-meta">
          <span className="eyebrow">● Halo Studio · Now booking Q3 2026</span>
        </div>

        <h1 className="p-hero-title" data-reveal data-reveal-stagger>
          <span className="p-line">Interfaces</span>
          <span className="p-line">that look like</span>
          <span className="p-line"><em>tomorrow.</em></span>
        </h1>

        <p className="p-hero-sub" data-reveal data-reveal-delay="400">
          A six-person studio shipping cinematic dark-mode product UI for founders, fintechs, and AI labs from Paris to San Francisco.
        </p>

        <div className="p-hero-row" data-reveal data-reveal-delay="600">
          <a className="btn btn-accent magnetic-cta" href="#work" data-magnetic data-magnetic-strength="0.25">
            <span>See Selected Work</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a className="p-play" href="#" data-magnetic data-magnetic-strength="0.2">
            <span className="p-play-ring">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#f5f5f5"><polygon points="6 4 20 12 6 20 6 4"/></svg>
            </span>
            <span>Watch the 2025 reel <em>2&apos;14&quot;</em></span>
          </a>
        </div>

        <div className="p-marquee" aria-hidden>
          <div className="p-marquee-track">
            {Array(2).fill(0).map((_, k) => (
              <div className="p-marquee-row" key={k}>
                <span>FWA Site of the Day</span><span>●</span>
                <span>Awwwards SOTD ×4</span><span>●</span>
                <span>CSS Design Awards</span><span>●</span>
                <span>The Brand Identity</span><span>●</span>
                <span>It&apos;s Nice That</span><span>●</span>
                <span>Mindsparkle Mag</span><span>●</span>
              </div>
            ))}
          </div>
        </div>

        <a className="p-scrollcue" href="#work" aria-label="Scroll to work">
          <span className="p-scrollcue-l">Scroll</span>
          <span className="p-scrollcue-bar"><i></i></span>
          <span className="p-scrollcue-r">01 / 06</span>
        </a>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
