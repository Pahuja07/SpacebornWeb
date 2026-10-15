// Local site content: no backend request is made.

export const agiContent = {
  title: 'AI that can understand, act, and learn.',
  introduction:
    'DERYK explores how AI could understand changing environments, make decisions, and learn from outcomes. It is research toward general intelligence, not a released product.',
  overview: {
    title: 'What is DERYK?',
    paragraphs: [
      'DERYK is a research direction focused on a central challenge: how might an AI system build an understanding of its surroundings, use that understanding to choose what to do, and improve after seeing the result?',
      'The work is explored through four areas—Physical AI, Platform AI, Neural AI, and Gaming AI. Each looks at a different part of the challenge, from changing environments to reusable capabilities, measured signals, and interactive virtual worlds.',
    ],
  },
  status: {
    label: 'Research direction',
    description:
      'General intelligence remains an open research question. DERYK is not a finished AGI system or a downloadable product, and no timeline or outcome is promised.',
  },
  approach: {
    title: 'A cycle for learning',
    description: 'See the nine questions in the cycle, from observation to learning.',
    paragraphs: [
      'DERYK uses a nine-stage cycle to frame its research: observe an environment, build a model of it, remember what matters, and reason about what is happening. From there, a system could consider what may happen next and plan a possible response.',
      'The cycle then asks what happens when a system acts. By evaluating the result against its expectations, researchers can ask what was learned and how that might inform the next cycle. This is a framework for research—not a claim that DERYK already performs every stage.',
    ],
    steps: [
      {
        id: 'observe',
        label: 'Observe',
        description: 'Take in observations from an environment.',
      },
      {
        id: 'model',
        label: 'Model',
        description: 'Build and update a representation of the world.',
      },
      {
        id: 'remember',
        label: 'Remember',
        description: 'Keep that understanding over time.',
      },
      {
        id: 'reason',
        label: 'Reason',
        description: 'Work out what is happening and why.',
      },
      {
        id: 'predict',
        label: 'Predict',
        description: 'Estimate what may happen next and consider alternatives.',
      },
      { id: 'plan', label: 'Plan', description: 'Weigh possible courses of action.' },
      { id: 'act', label: 'Act', description: 'Act through connected systems.' },
      {
        id: 'evaluate',
        label: 'Evaluate',
        description: 'Observe the result and compare it with what was predicted.',
      },
      {
        id: 'learn',
        label: 'Learn',
        description: 'Use the difference to improve the next cycle.',
      },
    ],
  },
  areas: {
    title: 'Four areas of exploration',
    description: 'Each area explores a different part of DERYK’s broader research direction.',
    paragraphs: [
      'DERYK’s research is organised into four areas. Physical AI explores changing environments; Platform AI looks at making capabilities reusable; Neural AI studies measured signals; and Gaming AI uses interactive worlds to investigate and test ideas.',
      'These are complementary areas of research, not four finished products. Together, they help break a broad question—how AI might understand, act, and learn—into topics that can be explored and evaluated.',
    ],
    items: [
      {
        id: 'physical',
        name: 'Physical AI',
        description:
          'Physical AI explores how an AI system can interpret a physical or simulated environment as it changes, and reason about what may happen next.',
      },
      {
        id: 'platform',
        name: 'Platform AI',
        description:
          'Platform AI focuses on packaging and exposing capabilities so developers and teams can reuse them across different parts of DERYK’s work.',
      },
      {
        id: 'neural',
        name: 'Neural AI',
        description:
          'Neural AI studies how patterns in measured signals can be represented and interpreted, offering another domain for exploring questions in the wider research direction.',
      },
      {
        id: 'gaming',
        name: 'Gaming AI',
        description:
          'Gaming AI uses interactive virtual worlds as settings for testing ideas and exploring how an AI system might model an environment and its changes.',
      },
    ],
  },
  unknowns: {
    title: 'What remains unknown',
    description: 'These are open research questions, not promised capabilities or outcomes.',
    paragraphs: [
      'No one knows whether a system built around observation, understanding, action, and learning can lead to general intelligence. Answering that requires studying each part of the cycle and how the parts work together.',
      'DERYK explores pieces of this challenge across different settings. Evidence from that work can help clarify what is possible, what is not yet understood, and which questions are worth investigating next.',
    ],
    items: [
      'Can a cycle of observation, reasoning, action, and learning support increasingly general intelligence?',
      'How can an AI system maintain and update its understanding as an environment changes?',
      'How should the stages connect so that outcomes can inform future decisions?',
      'What evidence would reliably show that a system is improving?',
    ],
  },
};

export type AgiContent = typeof agiContent;
