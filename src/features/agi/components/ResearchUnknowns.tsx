import type { AgiContent } from '../content';

export function ResearchUnknowns({ unknowns }: { unknowns: AgiContent['unknowns'] }) {
  return (
    <section
      id="unknowns"
      className="page-container questions-section section-content"
      aria-labelledby="unknowns-title"
    >
      <div className="questions-heading">
        <h2 id="unknowns-title">{unknowns.title}</h2>
      </div>
      <ol className="questions-list">
        {unknowns.items.map((statement, index) => (
          <li key={statement} className="glass-card">
            <span aria-hidden="true">{index + 1}</span>
            <p>{statement}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
