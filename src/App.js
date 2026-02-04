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
          <Link to="/history">History</Link>
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
          <Route path="/history" element={<HistoryPage />} />
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
              <Link to="/history">History</Link>
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
            <Link to="/history">History</Link>
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
          <div className="future-panel">
            <div className="future-panel__top">
              <span className="future-chip">AI Identity Engine</span>
              <span className="future-status">Live · 2026</span>
            </div>
            <div className="future-core">
              <div className="future-core__ring"></div>
              <div className="future-core__ring future-core__ring--mid"></div>
              <div className="future-core__ring future-core__ring--inner"></div>
              <div className="future-core__mark">
                <span>LO</span>
                <span>AI</span>
              </div>
            </div>
            <div className="future-wave">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="future-grid">
              <div>
                <p className="future-label">Signal</p>
                <h4>Concept to icon</h4>
              </div>
              <div>
                <p className="future-label">System</p>
                <h4>Logo + lockups</h4>
              </div>
              <div>
                <p className="future-label">Output</p>
                <h4>SVG · PNG · PDF</h4>
              </div>
              <div>
                <p className="future-label">Speed</p>
                <h4>7–12 days</h4>
              </div>
            </div>
            <div className="future-panel__footer">
              <p>Futuristic identity with human direction.</p>
              <button className="btn btn--dark">Explore AI Flow</button>
            </div>
          </div>
          <div className="hero__orb"></div>
        </div>
      </section>

      <section className="strip">
        <div className="strip__item">
          <p>Trusted by product teams and founders</p>
          <h3>120+ launches worldwide</h3>
        </div>
        <div className="strip__item">
          <p>Clarity-first identity sprints</p>
          <h3>12 days average delivery</h3>
        </div>
        <div className="strip__item">
          <p>Consistency across touchpoints</p>
          <h3>Full logo system + guides</h3>
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

      <section className="section section--split">
        <div>
          <h2>Designed to scale from day one</h2>
          <p>
            We balance expressive symbolism with functional rules so your logo
            works on app icons, storefronts, and investor decks.
          </p>
          <div className="proof-grid">
            <div className="proof-card">
              <h4>Market fit</h4>
              <p>Every concept is benchmarked against your category.</p>
            </div>
            <div className="proof-card">
              <h4>Versatility</h4>
              <p>Lockups, wordmarks, and icon-ready marks included.</p>
            </div>
            <div className="proof-card">
              <h4>Launch ready</h4>
              <p>We deliver files for web, print, and product teams.</p>
            </div>
          </div>
        </div>
        <div className="proof-panel">
          <h3>What clients receive</h3>
          <ul>
            <li>Primary and secondary logo lockups</li>
            <li>Symbol mark + logotype</li>
            <li>Color palette with usage guidance</li>
            <li>Typography pairing recommendations</li>
            <li>Spacing and clear-space rules</li>
          </ul>
          <button className="btn btn--primary">View Deliverables</button>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>Client results</h2>
          <p>Brands that moved from generic to iconic with Logo Original.</p>
        </div>
        <div className="testimonial-grid">
          <article className="testimonial-card">
            <p>
              “They turned our scattered ideas into a clean identity system we
              could scale across product and marketing.”
            </p>
            <div className="testimonial-meta">
              <span>Amrita Rao</span>
              <span>Founder, Brightly</span>
            </div>
          </article>
          <article className="testimonial-card">
            <p>
              “Fast, thoughtful, and highly collaborative. The new logo made our
              launch feel premium instantly.”
            </p>
            <div className="testimonial-meta">
              <span>Jordan Lee</span>
              <span>Head of Design, Northlane</span>
            </div>
          </article>
          <article className="testimonial-card">
            <p>
              “Every file was organized and ready for product teams. We had
              zero friction rolling out the new identity.”
            </p>
            <div className="testimonial-meta">
              <span>Marina Souza</span>
              <span>Brand Lead, EchoWorks</span>
            </div>
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
      <div className="page__info">
        <div>
          <h3>Who it is for</h3>
          <p>
            New ventures, scale-ups, and established brands that need a
            distinct identity across product, marketing, and physical touchpoints.
          </p>
        </div>
        <div>
          <h3>Typical timeline</h3>
          <p>
            Strategy + concepting in week one, refinement in week two, and final
            delivery by week three.
          </p>
        </div>
        <div>
          <h3>Collaboration</h3>
          <p>
            You get structured checkpoints, async reviews, and live feedback
            sessions to keep momentum.
          </p>
        </div>
      </div>
      <div className="cards">
        <article className="card">
          <h3>Logo Strategy Sprint</h3>
          <p>One-week roadmap to define the direction before design.</p>
          <ul>
            <li>Brand questionnaire + workshop</li>
            <li>Competitor analysis</li>
            <li>Creative positioning board</li>
            <li>Verbal + visual tone recommendations</li>
          </ul>
        </article>
        <article className="card">
          <h3>Identity System</h3>
          <p>Full logo system with lockups and usage guidance.</p>
          <ul>
            <li>3 visual routes</li>
            <li>Typography pairing</li>
            <li>Color exploration</li>
            <li>Grid + spacing logic</li>
          </ul>
        </article>
        <article className="card">
          <h3>Launch Kit</h3>
          <p>Everything needed for launch across web, product, and social.</p>
          <ul>
            <li>Export suite + favicon</li>
            <li>Social templates</li>
            <li>Mini brand guide</li>
            <li>Launch checklist + file naming</li>
          </ul>
        </article>
      </div>
      <div className="page__callout">
        <h3>Need a custom scope?</h3>
        <p>
          We can add brand strategy, naming support, or a full identity rollout
          across packaging and product UI.
        </p>
        <button className="btn btn--dark">Request a Custom Scope</button>
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
      <div className="page__info">
        <div>
          <h3>Weekly touchpoints</h3>
          <p>
            We send progress updates every 2-3 days, with clear next steps and
            a running decision log.
          </p>
        </div>
        <div>
          <h3>Revision approach</h3>
          <p>
            Feedback is captured in one place, then distilled into targeted
            iteration rounds.
          </p>
        </div>
        <div>
          <h3>Delivery package</h3>
          <p>
            Final delivery includes files organized for web, print, and product
            teams with usage notes.
          </p>
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
          <span className="work-card__tag">Fintech</span>
        </article>
        <article className="work-card">
          <div className="work-card__logo work-card__logo--soft">PINE</div>
          <p>Eco marketplace, organic icon system, warm palette.</p>
          <span className="work-card__tag">Eco</span>
        </article>
        <article className="work-card">
          <div className="work-card__logo work-card__logo--outline">NIMB</div>
          <p>SaaS analytics, clean wordmark, high-contrast layout.</p>
          <span className="work-card__tag">SaaS</span>
        </article>
        <article className="work-card">
          <div className="work-card__logo work-card__logo--mono">RUNE</div>
          <p>Creative studio, serif + symbol lockups, flexible use.</p>
          <span className="work-card__tag">Studio</span>
        </article>
      </div>
      <div className="page__callout">
        <h3>Want to see a full case study?</h3>
        <p>
          We can share process decks, research summaries, and the before/after
          logo system for deeper review.
        </p>
        <button className="btn btn--primary">Request Case Studies</button>
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
          <p className="price">$99</p>
          <p className="price-note">Ideal for new businesses</p>
          <ul>
            <li>2 logo concepts</li>
            <li>1 revision round</li>
            <li>Primary logo files</li>
            <li>48-hour response time</li>
          </ul>
          <button className="btn btn--light">Choose Essentials</button>
        </article>
        <article className="price-card price-card--featured">
          <h3>Studio Sprint</h3>
          <p className="price">$199</p>
          <p className="price-note">Most popular</p>
          <ul>
            <li>3 logo concepts</li>
            <li>3 revision rounds</li>
            <li>Brand palette + type</li>
            <li>Full export suite</li>
            <li>Launch-ready brand guide</li>
          </ul>
          <button className="btn btn--primary">Choose Studio</button>
        </article>
        <article className="price-card">
          <h3>Launch Partner</h3>
          <p className="price">$300</p>
          <p className="price-note">For teams + agencies</p>
          <ul>
            <li>4 concepts + workshops</li>
            <li>Extended brand guide</li>
            <li>Marketing asset kit</li>
            <li>Hands-on implementation support</li>
          </ul>
          <button className="btn btn--light">Choose Partner</button>
        </article>
      </div>
      <div className="page__info">
        <div>
          <h3>Payment schedule</h3>
          <p>50% deposit to begin, 50% on final delivery.</p>
        </div>
        <div>
          <h3>Guarantee</h3>
          <p>We keep refining until your team signs off on the final direction.</p>
        </div>
        <div>
          <h3>Add-ons</h3>
          <p>Brand naming, messaging kits, and social launch packs.</p>
        </div>
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
        <div className="faq-item">
          <h4>How many revisions are included?</h4>
          <p>Each package includes revision rounds tailored to the scope.</p>
        </div>
        <div className="faq-item">
          <h4>Do you work with global teams?</h4>
          <p>Yes, we collaborate across time zones with async check-ins.</p>
        </div>
      </div>
    </section>
  );
}

function HistoryPage() {
  return (
    <section className="page">
      <div className="page__hero">
        <p className="eyebrow">History</p>
        <h1>Logo history, evolution, and meaning.</h1>
        <p className="lead">
          A living archive of iconic identity changes and the design decisions
          behind them.
        </p>
      </div>

      <div className="history-grid">
        <article className="history-card">
          <div className="history-card__head">
            <h3>Apple</h3>
            <span>1976 → today</span>
          </div>
          <p>
            From a complex illustrated seal to the simplified bitten apple, the
            brand moved toward immediate recognition and scalability across
            digital products.
          </p>
          <div className="history-card__meta">
            <span>Meaning</span>
            <p>Innovation, curiosity, and approachability.</p>
          </div>
        </article>

        <article className="history-card">
          <div className="history-card__head">
            <h3>Toyota</h3>
            <span>1989 → today</span>
          </div>
          <p>
            The overlapping ovals symbolize the relationship between customer
            and company, with a unified form that reads as a “T.”
          </p>
          <div className="history-card__meta">
            <span>Meaning</span>
            <p>Trust, craftsmanship, and global reliability.</p>
          </div>
        </article>

        <article className="history-card">
          <div className="history-card__head">
            <h3>Pepsi</h3>
            <span>1898 → today</span>
          </div>
          <p>
            The globe mark evolved from a vintage wordmark to a dynamic symbol
            built for digital motion and shelf impact.
          </p>
          <div className="history-card__meta">
            <span>Meaning</span>
            <p>Energy, youth, and movement.</p>
          </div>
        </article>

        <article className="history-card">
          <div className="history-card__head">
            <h3>BMW</h3>
            <span>1917 → today</span>
          </div>
          <p>
            The roundel retains heritage while simplifying line weight and
            color for modern applications.
          </p>
          <div className="history-card__meta">
            <span>Meaning</span>
            <p>Precision engineering and performance.</p>
          </div>
        </article>

        <article className="history-card">
          <div className="history-card__head">
            <h3>Google</h3>
            <span>1999 → today</span>
          </div>
          <p>
            A clean geometric wordmark replaced the serif logo, reinforcing
            clarity and accessibility across products.
          </p>
          <div className="history-card__meta">
            <span>Meaning</span>
            <p>Simplicity, openness, and speed.</p>
          </div>
        </article>

        <article className="history-card">
          <div className="history-card__head">
            <h3>Mastercard</h3>
            <span>2016 → today</span>
          </div>
          <p>
            The interlocking circles were preserved while the wordmark
            simplified for modern readability.
          </p>
          <div className="history-card__meta">
            <span>Meaning</span>
            <p>Connection, trust, and global commerce.</p>
          </div>
        </article>
      </div>

      <div className="history-news">
        <h3>More articles</h3>
        <div className="history-news__list">
          <div>
            <p className="history-news__title">Why tech brands keep flattening their logos</p>
            <p>
              A quick look at how responsive design and app icons shaped modern
              logo decisions.
            </p>
          </div>
          <div>
            <p className="history-news__title">The return of retro wordmarks</p>
            <p>
              Serif and vintage-inspired marks are back as brands chase warmth
              and authenticity.
            </p>
          </div>
          <div>
            <p className="history-news__title">Symbol vs. wordmark: choosing the right direction</p>
            <p>
              How to decide which approach helps recognition and recall in your
              market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
