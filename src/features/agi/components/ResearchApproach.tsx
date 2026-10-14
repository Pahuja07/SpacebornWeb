import type { AgiContent } from '../content';

const stepIcons: Record<string, string> = {
  observe: 'eye',
  model: 'cubes',
  remember: 'database',
  reason: 'brain',
  predict: 'chart-line',
  plan: 'list-check',
  act: 'bolt',
  evaluate: 'check-double',
  learn: 'seedling',
};

export function ResearchApproach({ approach }: { approach: AgiContent['approach'] }) {
  return (
    <section id="approach" className="approach-section" aria-labelledby="approach-title">
      <div className="page-container section-content">
        <div className="section-heading">
          <h2 id="approach-title">{approach.title}</h2>
        </div>
        <ol className="research-loop">
          {approach.steps.map((step, index) => (
            <li key={step.id} className="loop-step glass-card">
              <div className="step-heading">
                <span className="step-number" aria-hidden="true">
                  {index + 1}
                </span>
                <h3>{step.label}</h3>
                <i
                  className={`fa-solid fa-${stepIcons[step.id] ?? 'circle-nodes'} card-icon`}
                  aria-hidden="true"
                />
              </div>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
