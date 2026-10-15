import type { AgiContent } from '../content';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Arrow } from '../../../components/ui/Arrow';

export function ResearchAreas({ areas }: { areas: AgiContent['areas'] }) {
  const { hash } = useLocation();
  useEffect(() => {
    const id = hash.slice(1);
    if (!areas.items.some((area) => area.id === id)) return;
    const frame = requestAnimationFrame(() =>
      document.getElementById(id)?.scrollIntoView({ block: 'start' }),
    );
    return () => cancelAnimationFrame(frame);
  }, [hash, areas.items]);
  return (
    <section
      id="research"
      className="page-container research-section section-content"
      aria-labelledby="research-title"
    >
      <div className="section-heading">
        <h2 id="research-title">{areas.title}</h2>
        <p>{areas.description}</p>
      </div>
      <div className="research-areas">
        {areas.items.map((area) => (
          <article key={area.id} id={area.id} className="research-area glass-card">
            <h3>{area.name}</h3>
            <p>{area.description}</p>
            {area.id === 'neural' && (
              <p style={{ marginTop: '0.85rem' }}>
                <Link
                  to="/neural-ai"
                  className="outline-action"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.875rem',
                    color: 'var(--color-primary, #a855f7)',
                    textDecoration: 'none',
                  }}
                >
                  Explore Neural AI research <Arrow />
                </Link>
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
