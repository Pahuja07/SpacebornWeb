import { useId, useState } from 'react';
import { Link } from 'react-router';
import { Arrow } from '../../components/ui/Arrow';
import { IntelligenceLoop } from './components/IntelligenceLoop';
import { IdeaSection } from './components/IdeaSection';
import { agiDirectionContent as content } from './directionContent';
import './agi-direction.css';

export function AgiDirectionHomePage() {
  const questionsId = useId();
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  return (
    <div className="agi-direction-page">
      <section className="hero-section page-container agi-direction-hero" aria-labelledby="direction-title">
        <div className="hero-copy">
          <h1 id="direction-title">{content.title}</h1>
          <p className="hero-description">{content.introduction}</p>
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

      <IdeaSection idea={content.idea} />

      <div className="page-container agi-direction-content">
        <section id="intelligence-loop" className="agi-direction-section" aria-labelledby="loop-title">
          <div className="agi-direction-section-intro">
            <h2 id="loop-title">The intelligence loop</h2>
          </div>
          <IntelligenceLoop steps={content.steps} />
        </section>
      </div>

        <section id="current-work" className="page-container agi-direction-section" aria-labelledby="contributions-title">
          <div className="agi-direction-editorial">
            <h2 id="contributions-title">What current work contributes</h2>
          </div>
          <div className="agi-direction-contributions">
            {content.areas.map((area) => (
              <article key={area.id} id={`direction-${area.id}`} className="card card-border glass agi-direction-contribution">
                <div className="card-body">
                  <h3 className="card-title">
                    <Link className="link link-hover" to={area.href}>
                      {area.name} <Arrow diagonal />
                    </Link>
                  </h3>
                  <p>{area.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="open-questions" className="page-container agi-direction-section agi-direction-editorial agi-direction-wide-questions" aria-labelledby="questions-title">
          <div className="agi-direction-question-intro">
            <h2 id="questions-title">What remains unknown</h2>
          </div>
          <div className="agi-direction-questions">
            {content.questions.map((question, index) => (
              <div key={question.title} className="collapse glass">
                <input
                  type="checkbox"
                  name={`${questionsId}-accordion`}
                  checked={openQuestion === index}
                  onChange={(event) => setOpenQuestion(event.currentTarget.checked ? index : null)}
                  aria-labelledby={`${questionsId}-title-${index}`}
                  aria-controls={`${questionsId}-answer-${index}`}
                />
                <div className="collapse-title font-semibold" id={`${questionsId}-title-${index}`}>
                  <span>{question.title}</span>
                </div>
                <div
                  className="collapse-content"
                  id={`${questionsId}-answer-${index}`}
                  role="region"
                  aria-labelledby={`${questionsId}-title-${index}`}
                ><p>{question.answer}</p></div>
              </div>
            ))}
          </div>
        </section>
    </div>
  );
}
