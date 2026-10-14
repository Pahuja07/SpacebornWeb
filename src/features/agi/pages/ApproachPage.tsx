import { useAgiPageContent } from '../AgiLayout';
import { PageIntro } from '../components/PageIntro';
import { ResearchApproach } from '../components/ResearchApproach';

export function ApproachPage() {
  const { approach } = useAgiPageContent();
  return (
    <>
      <PageIntro title="Our approach" paragraphs={approach.paragraphs} />
      <ResearchApproach approach={approach} />
    </>
  );
}
