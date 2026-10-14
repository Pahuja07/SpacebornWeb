import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { PreviewLink } from './components/PreviewLink';
import { content } from './content';

export function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section id="home" className="hero-section page-container" aria-labelledby="agi-title">
          <div className="hero-copy">
            <h1 id="agi-title">{content.title}</h1>
            <p className="hero-description">{content.introduction}</p>
            <div className="hero-actions">
              <div className="download-placeholder">
                <button className="btn btn-primary hero-action" type="button" disabled>
                  Download <i className="fa-solid fa-circle-arrow-down" aria-hidden="true" />
                </button>
                <span className="download-note">Currently unavailable</span>
              </div>
              <PreviewLink
                className="btn btn-outline hero-action outline-action"
                href="/agi/approach"
              >
                Explore our approach{' '}
                <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
              </PreviewLink>
            </div>
          </div>
          <figure className="hero-visual">
            <img
              src="/images/agi-research.png"
              alt="DERYK character with violet eyes, black armor, headphones, and a ring antenna"
              width="1278"
              height="1230"
              fetchPriority="high"
            />
          </figure>
        </section>
        <section
          className="page-container overview-content section-content"
          aria-labelledby="overview-explanation"
        >
          <h2 id="overview-explanation">{content.overview.title}</h2>
          <div className="reading-copy">
            {content.overview.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
