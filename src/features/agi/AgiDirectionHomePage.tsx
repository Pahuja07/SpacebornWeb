import { AgiHero } from './components/AgiHero';

const content = {
  title: 'AGI Direction',
  introduction:
    'Artificial general intelligence (AGI) is DERYK’s long-term research direction. We explore the intelligence loop step by step and with evidence.',
  overview: {
    title: 'What guides the research',
    paragraphs: [
      'The question is whether increasingly general intelligence can emerge from systems that maintain an understanding of the world, remember, reason, predict, plan, act, evaluate, and continue learning across different environments. This question guides DERYK’s research agenda.',
      'DERYK investigates this direction step by step and with evidence. Its present work is organised around Physical AI, Platform AI, Neural AI, and Gaming AI, with each area exploring individual parts of the broader question.',
    ],
  },
};

export function AgiDirectionHomePage() {
  return (
    <>
      <AgiHero content={content} />
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
    </>
  );
}
