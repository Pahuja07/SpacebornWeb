import { useAgiPageContent } from '../AgiLayout';
import { PageIntro } from '../components/PageIntro';
import { ResearchUnknowns } from '../components/ResearchUnknowns';

export function UnknownsPage() {
  const { unknowns } = useAgiPageContent();
  return (
    <>
      <PageIntro
        title="Open questions"
        description={unknowns.description}
        paragraphs={unknowns.paragraphs}
      />
      <ResearchUnknowns unknowns={unknowns} />
    </>
  );
}
