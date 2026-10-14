export function PageIntro({
  title,
  description,
  paragraphs,
}: {
  title: string;
  description?: string;
  paragraphs: string[];
}) {
  return (
    <section className="page-container page-intro" aria-labelledby="page-title">
      <h1 id="page-title">{title}</h1>
      {description && <p className="page-description">{description}</p>}
      <div className="reading-copy">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
