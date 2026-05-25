/* global React */
const { useState: useStateS } = React;

function Capabilities() {
  const items = [
    { n: '01', t: 'Brand identity',  d: 'Logo, type system, motion principles, voice. The visual DNA the rest of your product reads from.' },
    { n: '02', t: 'Product UI',      d: 'Dashboards, mobile, complex flows. We design like engineers, build like designers.' },
    { n: '03', t: 'Marketing site',  d: 'High-converting landing pages and full marketing sites. Designed in Figma, shipped in Framer or code.' },
    { n: '04', t: 'Design systems',  d: 'Tokens, components, documentation. We hand off systems your team can actually maintain.' },
  ];
  return (
    <section className="cap" id="services">
      <div className="section-inner cap-head" data-reveal data-reveal-stagger>
        <span className="eyebrow">● Capabilities</span>
        <h2 className="section-h2">Four things.<br/>Done <em>properly.</em></h2>
        <p className="section-sub">We don&apos;t do everything. We do these four, and we do them better than the studio next door.</p>
      </div>

      <div className="cap-grid">
        {items.map((it, i) => (
          <div key={it.n} className="cap-card" data-reveal data-reveal-delay={i * 80}>
            <div className="cap-glow"></div>
            <span className="cap-n">{it.n}</span>
            <h3>{it.t}</h3>
            <p>{it.d}</p>
            <svg className="cap-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: 23,   suffix: '',  l: 'projects shipped' },
    { n: 6,    suffix: '',  l: 'awards & recognitions' },
    { n: 100,  suffix: 'M+', l: 'users reach designed UI' },
    { n: 94,   suffix: '%', l: 'client repeat rate' },
  ];
  return (
    <section className="stats-strip">
      <div className="section-inner stats-strip-grid" data-reveal data-reveal-stagger>
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <div className="stat-n" data-count={s.n} data-count-suffix={s.suffix} data-count-dur="1600"></div>
            <div className="stat-l">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Philosophy() {
  const tenets = [
    { n: '01', t: 'Less, but better.',     d: 'We ship fewer screens than the studio next door. The screens we do ship work harder.' },
    { n: '02', t: 'Dark is a default.',    d: 'Most of our work lives in dark mode because most of our users do. We design for the eyes that ship code at 2am.' },
    { n: '03', t: 'A page is a promise.',  d: 'A landing page promises what the product will feel like. We don\u2019t overpromise, and we don\u2019t underdeliver.' },
  ];
  return (
    <section className="phi">
      <div className="section-inner phi-head" data-reveal data-reveal-stagger>
        <span className="eyebrow">● Philosophy</span>
        <h2 className="section-h2">Three things we<br/><em>actually</em> believe.</h2>
      </div>
      <div className="phi-list">
        {tenets.map((t, i) => (
          <div className="phi-row" key={t.n} data-reveal data-reveal-delay={i * 100}>
            <span className="phi-n">{t.n}</span>
            <h3 className="phi-t">{t.t}</h3>
            <p className="phi-d">{t.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Awards() {
  const rows = [
    { yr: '2026', t: 'Awwwards Site of the Day',     for: 'Pulse Trading'  },
    { yr: '2025', t: 'FWA Site of the Day',          for: 'Vesper AI'      },
    { yr: '2025', t: 'Awwwards Site of the Day',     for: 'Voltage Wallet' },
    { yr: '2025', t: 'CSS Design Awards · Best UI',  for: 'Lumen Music'    },
    { yr: '2024', t: 'The Brand Identity feature',   for: 'Mirage Studio'  },
    { yr: '2024', t: 'Awwwards Honorable Mention',   for: 'Aria Hire'      },
  ];
  return (
    <section className="awards" id="awards">
      <div className="section-inner awards-head" data-reveal data-reveal-stagger>
        <span className="eyebrow">● Recognition</span>
        <h2 className="section-h2">Hung on the wall,<br/>and <em>that&apos;s</em> about it.</h2>
      </div>
      <div className="awards-list section-inner">
        {rows.map((r, i) => (
          <a key={i} className="award-row" data-reveal data-reveal-delay={i * 40}>
            <span className="award-yr">{r.yr}</span>
            <span className="award-t">{r.t}</span>
            <span className="award-for">for <em>{r.for}</em></span>
            <span className="award-ar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M9 7h8v8"/></svg>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-inner contact-inner" data-reveal data-reveal-stagger>
        <span className="eyebrow">● Let&apos;s talk</span>
        <h2 className="section-h2 contact-h2">Have a project<br/>worth <em>obsessing</em> over?</h2>
        <p className="section-sub">We take on six engagements a quarter. Tell us about yours — quick reply within a day.</p>
        <div className="contact-ctas">
          <a className="btn btn-accent magnetic-cta" href="mailto:hello@halo.studio" data-magnetic data-magnetic-strength="0.25">
            <span>hello@halo.studio</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a className="btn btn-ghost" href="#" data-magnetic data-magnetic-strength="0.2">Book a 20-min call</a>
        </div>

        <div className="contact-locs">
          <div><div className="contact-loc-l">Studio</div><div className="contact-loc-v">Paris, FR</div></div>
          <div><div className="contact-loc-l">Satellite</div><div className="contact-loc-v">San Francisco, US</div></div>
          <div><div className="contact-loc-l">Next opening</div><div className="contact-loc-v">August 2026</div></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer p-footer">
      <div className="p-footer-mega" data-reveal>
        <span>Halo</span><em>Studio</em>
      </div>
      <div className="p-footer-meta section-inner">
        <div>
          <div className="footer-h">Studio</div>
          <a href="#">About</a><a href="#">Capabilities</a><a href="#">Philosophy</a>
        </div>
        <div>
          <div className="footer-h">Work</div>
          <a href="#">Selected</a><a href="#">Archive</a><a href="#">Awards</a>
        </div>
        <div>
          <div className="footer-h">Connect</div>
          <a href="#">Twitter ↗</a><a href="#">Instagram ↗</a><a href="#">Are.na ↗</a><a href="#">LinkedIn ↗</a>
        </div>
        <div>
          <div className="footer-h">©2026</div>
          <a href="#">Imprint</a><a href="#">Colophon</a>
          <div className="p-footer-tag">/halo-006 · Paris &amp; SF</div>
        </div>
      </div>
    </footer>
  );
}

// Old SaaS section names kept as no-op aliases so anything previously
// importing them doesn't break. (Portfolio composes its own.)
function Logos()        { return null; }
function Features_legacy() { return null; }
function Process()      { return null; }
function Pricing()      { return null; }
function Testimonials() { return null; }
function FAQ()          { return null; }
function CTA()          { return null; }

Object.assign(window, { Capabilities, Stats, Philosophy, Awards, Contact, Footer, Logos, Process, Pricing, Testimonials, FAQ, CTA });
