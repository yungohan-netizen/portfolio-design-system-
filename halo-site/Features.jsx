/* global React */
const { useState: useStateW, useEffect: useEffectW } = React;

const PROJECTS = [
  { id: '01', slug: 'pulse',   title: 'Pulse',    client: 'Pulse Trading',  year: '2026', services: ['Identity', 'Product UI', 'Web'],     img: 'assets/projects/pulse.jpg',   tagline: 'A trading terminal for the next ten thousand traders.' },
  { id: '02', slug: 'vesper',  title: 'Vesper',   client: 'Vesper AI',      year: '2025', services: ['Design system', 'Product UI'],       img: 'assets/projects/vesper.jpg',  tagline: 'An assistant that thinks in dark mode.' },
  { id: '03', slug: 'voltage', title: 'Voltage',  client: 'Voltage Wallet', year: '2025', services: ['Brand', 'Mobile', 'Web'],            img: 'assets/projects/voltage.jpg', tagline: 'A self-custody wallet that doesn\u2019t look like a tax form.' },
  { id: '04', slug: 'lumen',   title: 'Lumen',    client: 'Lumen Music',    year: '2025', services: ['Product UI', 'Web', 'Motion'],       img: 'assets/projects/lumen.jpg',   tagline: 'A streaming dashboard for independent labels.' },
  { id: '05', slug: 'aria',    title: 'Aria',     client: 'Aria Hire',      year: '2024', services: ['Brand', 'Marketing site'],           img: 'assets/projects/aria.jpg',    tagline: 'Hiring software that finally feels human.' },
  { id: '06', slug: 'mirage',  title: 'Mirage',   client: 'Mirage Studio',  year: '2024', services: ['Identity', 'Marketing site'],       img: 'assets/projects/mirage.jpg',  tagline: 'A 3D editor designed for one-take videos.' },
];

function Work() {
  return (
    <section className="work" id="work">
      <div className="work-head section-inner" data-reveal data-reveal-stagger>
        <span className="eyebrow">● Selected work · 2024 — 2026</span>
        <h2 className="section-h2 work-h2">A small body of work,<br/><em>obsessed</em> over.</h2>
        <div className="work-meta">
          <span>23 projects shipped</span>
          <span className="work-dot">●</span>
          <span>6 awards</span>
          <span className="work-dot">●</span>
          <span>4 founders. 6 people.</span>
        </div>
      </div>

      <div className="work-grid">
        {PROJECTS.map((p, i) => (
          <WorkTile key={p.id} project={p} index={i}/>
        ))}
      </div>

      <div className="work-foot" data-reveal>
        <a className="btn btn-ghost" href="#" data-magnetic data-magnetic-strength="0.2">
          <span>Browse the full archive</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M7 17L17 7M9 7h8v8"/></svg>
        </a>
      </div>
    </section>
  );
}

function WorkTile({ project, index }) {
  const wide = index === 0 || index === 3;
  return (
    <article className={`work-tile ${wide ? 'is-wide' : ''}`} data-reveal data-reveal-delay={index * 80}>
      <div className="work-img" style={{backgroundImage: `url(${project.img})`}}>
        <div className="work-img-tint"></div>
        <div className="work-img-glow"></div>
      </div>

      <div className="work-meta-row">
        <span className="work-idx">{project.id}</span>
        <span className="work-year">{project.year}</span>
      </div>

      <div className="work-body">
        <h3 className="work-title">
          <span className="work-title-l">{project.title}</span>
          <span className="work-title-r">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M9 7h8v8"/></svg>
          </span>
        </h3>
        <p className="work-tag">{project.tagline}</p>
        <div className="work-services">
          {project.services.map((s) => (<span key={s} className="work-svc">{s}</span>))}
        </div>
      </div>
    </article>
  );
}

Object.assign(window, { Work, PROJECTS });
