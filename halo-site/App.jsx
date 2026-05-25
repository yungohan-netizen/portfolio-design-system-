/* global React, Nav, Hero, Work, Capabilities, Stats, Philosophy, Awards, Contact, Footer */
const { createRoot } = ReactDOM;

function App() {
  return (
    <div className="site-scroll" data-screen-label="Halo Studio · Portfolio">
      <Nav/>
      <Hero/>
      <Work/>
      <Capabilities/>
      <Stats/>
      <Philosophy/>
      <Awards/>
      <Contact/>
      <Footer/>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App/>);
