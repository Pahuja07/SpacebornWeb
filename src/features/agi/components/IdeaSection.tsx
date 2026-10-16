import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup';
import { faBrain } from '@fortawesome/free-solid-svg-icons/faBrain';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons/faCodeBranch';
import { faRoute } from '@fortawesome/free-solid-svg-icons/faRoute';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons/faArrowsRotate';
import type { AgiIdea } from '../directionContent';

const ideaIcons = [faGlobe, faLayerGroup, faBrain, faCodeBranch, faRoute, faArrowsRotate];

export function IdeaSection({ idea }: { idea: AgiIdea }) {
  return (
    <section id="the-idea" className="page-container agi-direction-section agi-idea-section" aria-labelledby="idea-title">
      <h2 id="idea-title">{idea.title}</h2>
      <div className="agi-idea-introduction">
        <p className="agi-idea-question">{idea.question}</p>
      </div>
      <ul className="agi-idea-topics">
        {idea.topics.map((topic, index) => (
          <li key={topic.id} className="card card-border glass agi-idea-topic">
            <div className="card-body">
              <span className="badge badge-soft badge-primary agi-idea-icon" aria-hidden="true">
                <FontAwesomeIcon icon={ideaIcons[index]} />
              </span>
              <h3 className="card-title">{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
