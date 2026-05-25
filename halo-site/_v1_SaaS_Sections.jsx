/* global React, Eyebrow, Arrow */
const { useState } = React;

function Pricing() {
  const [annual, setAnnual] = useState(true);
  const tiers = [
    { name: 'Starter', price: annual ? 980 : 1080, sub: 'Best for founders launching their first idea.',
      features: ['1 landing page', 'Up to 6 sections', 'Conversion copy pass', '5–7 day delivery', '1 round of revisions'] },
    { name: 'Pro', price: annual ? 2520 : 2800, sub: 'Best for startups ready to scale at velocity.', featured: true,
      features: ['Full marketing site', 'Up to 6 pages', 'Brand pass + system', '3–5 day delivery', 'Unlimited revisions'] },
    { name: 'Velocity+', price: annual ? 3640 : 4020, sub: 'For teams that need a partner, not a vendor.',
      features: ['Continuous design', 'Dedicated designer', 'Dashboards + product', '3 day priority', 'Weekly reviews'] },
  ];
  return (
    <section className="pricing" id="pricing">
      <div className="section-inner">
        <Eyebrow>● Pricing</Eyebrow>
        <h2 className="section-h2">Straightforward pricing that fits</h2>
        <p className="section-sub">Whether you're launching your first idea or scaling your startup, Halo has a plan that fits your pace.</p>

        <div className="price-toggle">
          <button className={annual ? '' : 'is-on'} onClick={() => setAnnual(false)}>Monthly</button>
          <button className={annual ? 'is-on' : ''} onClick={() => setAnnual(true)}>Annually <span className="save">−10%</span></button>
        </div>

        <div className="price-grid">
          {tiers.map((t) => (
            <div key={t.name} className={`price-card ${t.featured ? 'is-featured' : ''}`}>
              {t.featured && <div className="price-card-glow"></div>}
              {t.featured && <div className="price-badge">Most popular</div>}
              <div className="price-name">{t.name} Plan</div>
              <div className="price-amount">
                <span className="amt">${t.price.toLocaleString()}</span>
                <span className="per">USD/mo</span>
              </div>
              <p className="price-sub">{t.sub}</p>
              <button className={`btn ${t.featured ? 'btn-accent' : 'btn-primary'}`}>Choose this plan</button>
              <ul className="price-feat">
                {t.features.map((f) => (
                  <li key={f}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={t.featured ? '#ff7a1a' : '#a8a8a8'} strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: 'Michael R.', role: 'Growth Lead at Convex',  body: 'We hadn\'t over 120 signups in the first week using the page Halo designed.' },
    { name: 'Jason L.',   role: 'Founder of LaunchGrid',  body: 'Halo completely changed the game for us. We sent over a rough layout and they returned a stunning landing page that actually converted.', featured: true },
    { name: 'Emily B.',   role: 'Co-founder at LoopPop',  body: 'We used to overthink our site way too much. Halo helped us simplify everything into a clear message with a beautiful layout.' },
  ];
  return (
    <section className="testimonials">
      <div className="section-inner">
        <Eyebrow>● Testimonials</Eyebrow>
        <h2 className="section-h2">What founders are saying</h2>
        <p className="section-sub">Founders trust Halo because we don't just design pages — we help turn clarity into conversions.</p>
        <div className="quote-row">
          {items.map((q,i) => (
            <div key={i} className={`quote-card ${q.featured ? 'is-featured' : ''}`}>
              {q.featured && <div className="quote-glow"></div>}
              <div className="quote-head">
                <div className="quote-avatar" aria-hidden></div>
                <div>
                  <div className="quote-name">{q.name}</div>
                  <div className="quote-role">{q.role}</div>
                </div>
              </div>
              <p>{q.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: 'How long does it take to deliver my landing page?', a: 'We typically deliver your landing page within 5 to 7 business days, depending on the plan you choose. On Velocity+, you get priority delivery in just 3 days.' },
    { q: 'What if I don\'t like the design?', a: 'Every plan includes revisions. We refine until the design hits — and most clients only need one round.' },
    { q: 'Can I request revisions after delivery?', a: 'Yes — Starter includes one round, Pro and Velocity+ include unlimited within the engagement.' },
    { q: 'Do you help with copywriting too?', a: 'We do. Every page goes through a conversion-copy pass before delivery, and we can do a full rewrite if needed.' },
    { q: 'Is development included in the pricing?', a: 'On the Pro and Velocity+ plans, yes — we ship in Framer or hand off a clean codebase. Starter is design-only.' },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="faq" id="faq">
      <div className="section-inner section-narrow">
        <Eyebrow>● FAQ</Eyebrow>
        <h2 className="section-h2">Questions? We've got answers.</h2>
        <p className="section-sub">We've answered the most common ones below. If you still need help, just reach out to us.</p>
        <div className="faq-list">
          {items.map((it, i) => (
            <button key={i} className={`faq-item ${open===i ? 'is-open' : ''}`} onClick={() => setOpen(open === i ? -1 : i)}>
              <div className="faq-q">
                <span>{it.q}</span>
                <span className="faq-toggle">{open===i ? '−' : '+'}</span>
              </div>
              <div className="faq-a">{it.a}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta">
      <div className="cta-inner">
        <div className="cta-orb"></div>
        <h2 className="section-h2">Ready to launch something that <em>actually</em> works?</h2>
        <p className="section-sub">Let Halo design the landing page your idea deserves. Clean, strategic, and ready to grow.</p>
        <a className="btn btn-accent" href="#">Start a Project <Arrow/></a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-l">
          <div className="footer-logo">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="7" stroke="#f5f5f5" strokeWidth="1.6"/><circle cx="12" cy="12" r="1.8" fill="#f5f5f5"/></svg>
            <span>Halo Studio</span>
          </div>
          <p>Helping founders launch faster with high-converting landing pages and product UI.</p>
          <div className="footer-tag">Let's build something great. <span>©2026</span></div>
        </div>
        <div className="footer-cols">
          <div>
            <div className="footer-h">Menu</div>
            <a href="#">Home</a><a href="#">Work</a><a href="#">Process</a><a href="#">Pricing</a><a href="#">FAQs</a><a href="#">Contact</a>
          </div>
          <div>
            <div className="footer-h">Explore</div>
            <a href="#">Why Halo</a><a href="#">Case studies</a><a href="#">Process</a><a href="#">Testimonials</a><a href="#">Reel</a>
          </div>
          <div>
            <div className="footer-h">Connect</div>
            <a href="#">Twitter ↗</a><a href="#">Instagram ↗</a><a href="#">LinkedIn ↗</a><a href="#">Dribbble ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Pricing, Testimonials, FAQ, CTA, Footer });
