// AGI-only copy drawn from the supplied AGI Direction PDF and handbook §14.6.
// Source wording is a draft; this implementation does not assert publication approval.
// Keep this separate from content.ts, which also supplies the company homepage.
export const agiDirectionContent = {
  title: 'AGI Direction',
  introduction:
    'Artificial general intelligence (AGI) is DERYK’s long-term research direction. An open question, explored step by step and with evidence.',
  idea: {
    title: 'The idea',
    question: 'What would it take for a system to understand a changing environment, keep that understanding over time, and reason about what is happening and what may happen next?',
    topics: [
      {
        id: 'world',
        title: 'A model of the world',
        description: 'How can observations become an understanding of what exists, how things relate, and what changes? A world model connects individual observations into a representation of an environment.',
      },
      {
        id: 'memory',
        title: 'Memory over time',
        description: 'How can that understanding persist beyond a single moment? Memory connects earlier observations with new information, making it possible to consider what has changed over time.',
      },
      {
        id: 'reasoning',
        title: 'Reasoning with context',
        description: 'How can a system work out what is happening and why? This question brings observations and memory together to reason about the current situation.',
      },
      {
        id: 'prediction',
        title: 'Possible futures',
        description: 'What may happen next, and what else could happen? Prediction explores possible futures and alternatives, rather than treating a single forecast as the only outcome.',
      },
      {
        id: 'action',
        title: 'From planning to action',
        description: 'How can a system weigh different courses of action? Planning connects predictions with choices that could be carried out through connected systems.',
      },
      {
        id: 'learning',
        title: 'Learning from outcomes',
        description: 'What changes when a result differs from a prediction? Comparing expectations with outcomes provides a starting point for improving the next cycle.',
      },
    ],
  },
  steps: [
    { id: 'observe', label: 'Observe', description: 'Gather observations from an environment to understand what is present and what is changing.' },
    { id: 'model', label: 'Model', description: 'Build and update a representation of the world, connecting observations into an understanding of the environment and how it changes.' },
    { id: 'remember', label: 'Remember', description: 'Retain observations and context over time so that new information can be understood alongside what came before.' },
    { id: 'reason', label: 'Reason', description: 'Use observations, memory, and the current world model to work out what is happening and why.' },
    { id: 'predict', label: 'Predict', description: 'Estimate what may happen next by considering several possible outcomes and the conditions that could lead to each one.' },
    { id: 'plan', label: 'Plan', description: 'Compare possible actions and their expected outcomes to weigh different courses of action before making a choice.' },
    { id: 'act', label: 'Act', description: 'Carry a chosen course of action into the environment through connected systems.' },
    { id: 'evaluate', label: 'Evaluate', description: 'Observe the outcome of an action and compare it with the prediction to understand where expectations matched or differed.' },
    { id: 'learn', label: 'Learn', description: 'Use differences between predictions and outcomes to update understanding and improve decisions in the next cycle.' },
  ],
  areas: [
    { id: 'physical', name: 'Physical AI', href: '/physical-ai', description: 'Understanding and predicting changing physical or simulated environments.' },
    { id: 'platform', name: 'Platform AI', href: '/platform-ai', description: 'Packaging and exposing capabilities so developers and other departments can reuse them.' },
    { id: 'neural', name: 'Neural AI', href: '/neural-ai', description: 'Studying what measured signals can reveal when modelled well, in a distinct signal domain.' },
    { id: 'gaming', name: 'Gaming AI', href: '/gaming-ai', description: 'Using interactive virtual worlds as environments for testing and world modelling.' },
  ],
  questions: [
    {
      title: 'Could this loop lead to general intelligence?',
      answer: 'This remains an open research question. DERYK investigates it through world modelling, memory, reasoning, action, and learning.',
    },
    {
      title: 'Has AGI been achieved?',
      answer: 'No. AGI remains a long-term research direction at DERYK.',
    },
    {
      title: 'What can current work tell us?',
      answer: 'Current work explores individual stages of the intelligence loop across physical environments, reusable capabilities, measured signals, and virtual worlds.',
    },
    {
      title: 'Is there a timeline?',
      answer: 'There is no announced timeline.',
    },
  ],
};

export type IntelligenceStep = (typeof agiDirectionContent.steps)[number];
export type AgiIdea = typeof agiDirectionContent.idea;
