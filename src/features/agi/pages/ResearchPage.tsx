import { useAgiPageContent } from '../AgiLayout';
import { PageIntro } from '../components/PageIntro';
import { ResearchAreas } from '../components/ResearchAreas';

export function ResearchPage() {
  const { areas } = useAgiPageContent();
  return (
    <>
      <PageIntro
        title="Research areas"
        description={areas.description}
        paragraphs={areas.paragraphs}
      />
      <ResearchAreas areas={areas} />
    </>
  );
}
