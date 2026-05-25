/* global React */
const { useState, useEffect } = React;

function Logo() {
  return (
    <a href="#" className="halo-logo" aria-label="Halo Studio">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="9" stroke="#f5f5f5" strokeWidth="1.6"/>
        <circle cx="16" cy="16" r="2.2" fill="#f5f5f5"/>
      </svg>
      <span className="halo-logo-name">Halo<em>Studio</em></span>
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const root = document.querySelector('.site-scroll');
    const onScroll = () => setScrolled((root?.scrollTop ?? 0) > 24);
    root?.addEventListener('scroll', onScroll);
    return () => root?.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`halo-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="halo-nav-inner">
        <Logo/>
        <div className="halo-nav-links">
          <a href="#work">Work</a>
          <a href="#services">Capabilities</a>
          <a href="#awards">Recognition</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="halo-nav-cta">
          <a className="btn btn-ghost" href="mailto:hello@halo.studio">hello@halo.studio</a>
          <a className="btn btn-primary" href="#contact" data-magnetic data-magnetic-strength="0.2">Start a Project <Arrow/></a>
        </div>
      </div>
    </nav>
  );
}

function Arrow({size=14}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  );
}

function Eyebrow({children}) {
  return <span className="eyebrow">{children}</span>;
}

Object.assign(window, { Nav, Logo, Arrow, Eyebrow });
