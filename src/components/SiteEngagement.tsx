import { useLocation } from 'react-router';
import './site-engagement.css';

type EngagementContent = {
  subject: string;
  title: string;
  description: string;
};

const defaultContent: EngagementContent = {
  subject: 'DERYK enquiry',
  title: 'Explore what intelligence could make possible.',
  description:
    'Connect with our team to learn more about DERYK’s research and the questions guiding our work.',
};

const contentByPage: Record<string, EngagementContent> = {
  '/deryk': {
    subject: 'DERYK research enquiry',
    title: 'Explore the questions shaping intelligence.',
    description:
      'Connect with our team to learn about DERYK’s research direction and the areas exploring it.',
  },
  '/agi-direction': {
    subject: 'AGI Direction enquiry',
    title: 'Explore the direction behind the research.',
    description:
      'Talk with our team about DERYK’s long-term research direction and the questions it raises.',
  },
  '/deryk/approach': {
    subject: 'DERYK approach enquiry',
    title: 'See how the intelligence loop connects.',
    description:
      'Connect with our team to discuss the stages DERYK uses to frame its research.',
  },
  '/deryk/research': {
    subject: 'DERYK research areas enquiry',
    title: 'Find the research area that fits your questions.',
    description:
      'Talk with our team about Physical AI, Platform AI, Neural AI, Gaming AI, and how their research differs.',
  },
  '/deryk/unknowns': {
    subject: 'DERYK open questions enquiry',
    title: 'Good research starts with open questions.',
    description:
      'Connect with our team to discuss what remains unknown and how evidence can guide further research.',
  },
  '/physical-ai': {
    subject: 'DERYK Physical AI enquiry',
    title: 'Bring intelligence closer to the physical world.',
    description:
      'Connect with our engineering team to explore how physical AI fits into your operational environment.',
  },
  '/platform-ai': {
    subject: 'DERYK Platform AI enquiry',
    title: 'Explore reusable AI capabilities.',
    description:
      'Connect with our team to discuss Platform AI research across applications, simulations, and workflows.',
  },
  '/neural-ai': {
    subject: 'DERYK Neural AI enquiry',
    title: 'Bring intelligence closer to complex signals.',
    description:
      'Connect with our team to explore how Neural AI studies measured signals, representations, and inference.',
  },
  '/deryk/neural-ai-v4': {
    subject: 'DERYK Neural AI enquiry',
    title: 'Bring intelligence closer to complex signals.',
    description:
      'Connect with our team to explore how Neural AI studies measured signals, representations, and inference.',
  },
  '/gaming-ai': {
    subject: 'DERYK Gaming AI enquiry',
    title: 'Bring smarter agents into your game.',
    description:
      'Talk with our team about how DERYK’s Gaming AI research relates to your game, engine, and design goals.',
  },
  '/gaming/DERYK_Gaming_AI.html': {
    subject: 'DERYK Gaming AI enquiry',
    title: 'Bring smarter agents into your game.',
    description:
      'Talk with our team about how DERYK’s Gaming AI research relates to your game, engine, and design goals.',
  },
};

export function SiteEngagement() {
  const { pathname } = useLocation();
  const content = contentByPage[pathname] ?? defaultContent;

  return (
    <section className="site-engagement" aria-labelledby="site-engagement-title">
      <div className="site-engagement-inner">
        <img
          className="site-engagement-mascot"
          src="/images/deryk-mascot-chibi-clean.png"
          alt=""
          width="240"
          height="327"
          loading="lazy"
        />
        <span className="site-engagement-kicker">Engage</span>
        <h2 id="site-engagement-title">{content.title}</h2>
        <p>{content.description}</p>
        <a
          className="site-engagement-button"
          href={`mailto:contact@deryk.ai?subject=${encodeURIComponent(content.subject)}`}
        >
          Contact DERYK
        </a>
      </div>
    </section>
  );
}
