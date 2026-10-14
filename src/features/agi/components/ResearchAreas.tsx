import type { AgiContent } from '../content';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

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
          </article>
        ))}
      </div>
    </section>
  );
}
