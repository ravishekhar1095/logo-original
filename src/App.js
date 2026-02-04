import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="site">
      <header className="nav">
        <div className="nav__brand">
          <div className="brand-mark">
            <img src="/new%20logo.png" alt="Logo Original logo" />
          </div>
          <div>
            <p className="brand-name">Logo Original</p>
            <p className="brand-tag">Idea Into Identity</p>
          </div>
        </div>
        <nav className="nav__links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/process">Process</Link>
          <Link to="/work">Work</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/faq">FAQ</Link>
        </nav>
        <button className="btn btn--ghost">Book a Call</button>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/new%20logo.png" alt="Logo Original logo" />
            </div>
            <div>
              <h3>Logo Original</h3>
              <p>Idea Into Identity for ambitious brands worldwide.</p>
              <div className="footer__badge">Average launch: 12 days</div>
            </div>
          </div>
          <div className="footer__col">
            <h4>Studio</h4>
            <div className="footer__links">
              <Link to="/services">Services</Link>
              <Link to="/process">Process</Link>
              <Link to="/work">Work</Link>
              <Link to="/pricing">Pricing</Link>
            </div>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <div className="footer__links">
              <a href="mailto:hello@logo-original.info">hello@logo-original.info</a>
              <span>New York • San Diego • Remote</span>
              <span>Mon–Fri, 10am–6pm EST</span>
            </div>
          </div>
          <div className="footer__col">
            <h4>Get updates</h4>
            <p>Monthly inspiration, logo tips, and availability.</p>
            <div className="footer__signup">
              <input type="email" placeholder="Your email" />
              <button className="btn btn--primary">Join</button>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2026 Logo Original. All rights reserved.</p>
          <div className="footer__links">
            <Link to="/faq">FAQ</Link>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Built for founders, studios, and new brands</p>
          <h1>
            Logos that turn ideas into recognizable, memorable marks.
          </h1>
          <p className="lead">
            Logo Original designs logo systems that feel timeless on day one and
            scale with your brand. Strategy, typography, and symbol work in one
            focused sprint.
          </p>
          <div className="hero__actions">
            <button className="btn btn--primary">Start a Project</button>
            <Link className="btn btn--light" to="/pricing">
              View Packages
            </Link>
          </div>
          <div className="hero__stats">
            <div>
              <h3>120+</h3>
              <p>brands launched</p>
            </div>
            <div>
              <h3>12 days</h3>
              <p>average delivery</p>
            </div>
            <div>
              <h3>4.9/5</h3>
              <p>client rating</p>
            </div>
          </div>
        </div>
        <div className="hero__visual">
          <div className="logo-card">
            <span className="logo-card__badge">Logo Original Sprint</span>
            <div className="logo-grid">
              <div className="logo-sample">AUR</div>
              <div className="logo-sample logo-sample--outline">KITE</div>
              <div className="logo-sample logo-sample--mono">NOX</div>
              <div className="logo-sample logo-sample--soft">SOL</div>
            </div>
            <div className="logo-card__footer">
              <p>Custom marks + typography pairs</p>
              <button className="btn btn--dark">Download Sample</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>Logo design services</h2>
          <p>
            Every engagement includes discovery, sketching, and a versatile
            logo system. Choose the level of support you need.
          </p>
        </div>
        <div className="cards">
          <article className="card">
            <h3>Logo Strategy</h3>
            <p>
              Brand positioning, competitor review, and creative direction to
              align the mark with your business goals.
            </p>
            <ul>
              <li>Audience & market insights</li>
              <li>Visual positioning board</li>
              <li>Messaging tone guide</li>
            </ul>
          </article>
          <article className="card">
            <h3>Identity Design</h3>
            <p>
              Primary logo, alternate lockups, and typography system that work
              across web, print, and product.
            </p>
            <ul>
              <li>3 concept directions</li>
              <li>Refinement + iterations</li>
              <li>Brand color palette</li>
            </ul>
          </article>
          <article className="card">
            <h3>Launch Assets</h3>
            <p>
              Everything needed to launch: favicon, social assets, and
              implementation files.
            </p>
            <ul>
              <li>SVG, PDF, PNG exports</li>
              <li>Social kit + patterns</li>
              <li>Mini brand guide</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>Ready for a logo that lasts?</h2>
          <p>
            Tell us about your brand and we will send back a custom
            direction board within 48 hours.
          </p>
        </div>
        <button className="btn btn--dark">Request a Proposal</button>
      </section>
    </>
  );
}

function ServicesPage() {
  return (
    <section className="page">
      <div className="page__hero">
        <p className="eyebrow">Services</p>
        <h1>Choose the right logo design engagement.</h1>
        <p className="lead">
          From strategy to full delivery, we tailor each logo system to your
          market and audience.
        </p>
      </div>
      <div className="cards">
        <article className="card">
          <h3>Logo Strategy Sprint</h3>
          <p>One-week roadmap to define the direction before design.</p>
          <ul>
            <li>Brand questionnaire + workshop</li>
            <li>Competitor analysis</li>
            <li>Creative positioning board</li>
          </ul>
        </article>
        <article className="card">
          <h3>Identity System</h3>
          <p>Full logo system with lockups and usage guidance.</p>
          <ul>
            <li>3 visual routes</li>
            <li>Typography pairing</li>
            <li>Color exploration</li>
          </ul>
        </article>
        <article className="card">
          <h3>Launch Kit</h3>
          <p>Everything needed for launch across web, product, and social.</p>
          <ul>
            <li>Export suite + favicon</li>
            <li>Social templates</li>
            <li>Mini brand guide</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function ProcessPage() {
  return (
    <section className="page">
      <div className="page__hero">
        <p className="eyebrow">Process</p>
        <h1>Clear milestones, fast momentum.</h1>
        <p className="lead">
          A four-step process designed to move quickly without sacrificing craft.
        </p>
      </div>
      <div className="process">
        <div className="process__step">
          <span>01</span>
          <div>
            <h4>Discovery</h4>
            <p>Clarify goals, audience, and desired brand perception.</p>
          </div>
        </div>
        <div className="process__step">
          <span>02</span>
          <div>
            <h4>Concepting</h4>
            <p>Sketches, symbols, and typography routes for feedback.</p>
          </div>
        </div>
        <div className="process__step">
          <span>03</span>
          <div>
            <h4>Refinement</h4>
            <p>Iterate on the strongest direction and build lockups.</p>
          </div>
        </div>
        <div className="process__step">
          <span>04</span>
          <div>
            <h4>Delivery</h4>
            <p>Export files, guidelines, and launch checklist.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkPage() {
  return (
    <section className="page">
      <div className="page__hero">
        <p className="eyebrow">Work</p>
        <h1>Recent logo systems.</h1>
        <p className="lead">Flexible marks created for modern, growing brands.</p>
      </div>
      <div className="work-grid">
        <article className="work-card">
          <div className="work-card__logo">LYRA</div>
          <p>Fintech platform, geometric monogram, bold typography.</p>
        </article>
        <article className="work-card">
          <div className="work-card__logo work-card__logo--soft">PINE</div>
          <p>Eco marketplace, organic icon system, warm palette.</p>
        </article>
        <article className="work-card">
          <div className="work-card__logo work-card__logo--outline">NIMB</div>
          <p>SaaS analytics, clean wordmark, high-contrast layout.</p>
        </article>
        <article className="work-card">
          <div className="work-card__logo work-card__logo--mono">RUNE</div>
          <p>Creative studio, serif + symbol lockups, flexible use.</p>
        </article>
      </div>
    </section>
  );
}

function PricingPage() {
  return (
    <section className="page">
      <div className="page__hero">
        <p className="eyebrow">Pricing</p>
        <h1>Packages that match your launch timeline.</h1>
        <p className="lead">Clear pricing for every stage of growth.</p>
      </div>
      <div className="pricing">
        <article className="price-card">
          <h3>Essentials</h3>
          <p className="price">$1,200</p>
          <p className="price-note">Ideal for new businesses</p>
          <ul>
            <li>2 logo concepts</li>
            <li>1 revision round</li>
            <li>Primary logo files</li>
          </ul>
          <button className="btn btn--light">Choose Essentials</button>
        </article>
        <article className="price-card price-card--featured">
          <h3>Studio Sprint</h3>
          <p className="price">$2,400</p>
          <p className="price-note">Most popular</p>
          <ul>
            <li>3 logo concepts</li>
            <li>3 revision rounds</li>
            <li>Brand palette + type</li>
            <li>Full export suite</li>
          </ul>
          <button className="btn btn--primary">Choose Studio</button>
        </article>
        <article className="price-card">
          <h3>Launch Partner</h3>
          <p className="price">$3,800</p>
          <p className="price-note">For teams + agencies</p>
          <ul>
            <li>4 concepts + workshops</li>
            <li>Extended brand guide</li>
            <li>Marketing asset kit</li>
          </ul>
          <button className="btn btn--light">Choose Partner</button>
        </article>
      </div>
    </section>
  );
}

function FaqPage() {
  return (
    <section className="page">
      <div className="page__hero">
        <p className="eyebrow">FAQ</p>
        <h1>Questions, answered.</h1>
        <p className="lead">Everything you need to know before we start.</p>
      </div>
      <div className="faq-grid">
        <div className="faq-item">
          <h4>How fast can we start?</h4>
          <p>Projects usually begin within 3-5 business days.</p>
        </div>
        <div className="faq-item">
          <h4>Do you offer naming?</h4>
          <p>Yes. Add-on naming and tagline support are available.</p>
        </div>
        <div className="faq-item">
          <h4>What file formats are included?</h4>
          <p>We provide SVG, PDF, and PNG files in light and dark versions.</p>
        </div>
        <div className="faq-item">
          <h4>Can you refresh an existing logo?</h4>
          <p>Absolutely. We can modernize or expand an existing system.</p>
        </div>
      </div>
    </section>
  );
}
