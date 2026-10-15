import type { AgiContent } from '../content';
import { Link } from 'react-router';
import { Arrow } from '../../../components/ui/Arrow';

export function AgiHero({ content }: { content: AgiContent }) {
  return (
    <section id="overview" className="hero-section page-container" aria-labelledby="agi-title">
      <div className="hero-copy">
        <h1 id="agi-title">{content.title}</h1>
        <p className="hero-description">{content.introduction}</p>
        <div className="hero-actions">
          <div className="download-placeholder">
            <button className="btn btn-primary hero-action" type="button" disabled>
              Download <Arrow down />
            </button>
            <span className="download-note">Currently unavailable</span>
          </div>
          <Link className="btn btn-outline hero-action outline-action" to="/deryk/approach">
            Explore our approach <Arrow diagonal />
          </Link>
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
  );
}
