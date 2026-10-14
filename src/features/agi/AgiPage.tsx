import { useAgiPageContent } from './AgiLayout';
import { AgiHero } from './components/AgiHero';

export function AgiPage() {
  const content = useAgiPageContent();

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
