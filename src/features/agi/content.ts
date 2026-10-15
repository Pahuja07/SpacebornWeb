// Local site content: no backend request is made.

export const agiContent = {
  title: 'AI for changing environments.',
  introduction:
    'Four areas of work across physical and digital environments. AGI remains a long-term research direction.',
  overview: {
    title: 'What guides the research',
    paragraphs: [
      'The question is whether increasingly general intelligence can emerge from systems that maintain an understanding of the world, remember, reason, predict, plan, act, evaluate, and continue learning across different environments. This question guides DERYK’s research agenda.',
      'DERYK investigates this direction step by step and with evidence. Its present work is organised around Physical AI, Platform AI, Neural AI, and Gaming AI, with each area exploring individual parts of the broader question.',
    ],
  },
  status: {
    label: 'Research direction',
    description:
      'AGI remains an open research question, not an achieved capability or a released product. DERYK does not state when or whether it will be achieved.',
  },
  approach: {
    title: 'A loop for learning',
    description:
      'Explore nine connected stages, from observing an environment to learning from the outcome.',
    paragraphs: [
      'The intelligence loop describes the questions behind DERYK’s longer-term direction. A system would need to take in observations, build and update a representation of its environment, and retain that understanding over time. It would also need to reason about what is happening, consider what might happen next, and weigh possible courses of action.',
      'The loop continues through action and evaluation. Acting through connected systems produces a result that can be observed and compared with what was predicted. Learning asks how the difference between prediction and outcome could improve the next cycle.',
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
    description:
      'Four areas bring different perspectives to understanding environments, sharing capabilities, studying signals, and testing ideas.',
    paragraphs: [
      'DERYK’s four work areas explore parts of the intelligence loop in different settings. Together, they explain the range of questions behind the research direction: understanding changing environments, making capabilities reusable, studying measured signals, and using interactive worlds for testing and world modelling.',
      'Each area offers a different setting for investigating the loop. Physical and simulated environments help frame questions about change, while reusable capabilities and measured signals bring distinct perspectives to the research.',
    ],
    items: [
      {
        id: 'physical',
        name: 'Physical AI',
        description:
          'Physical AI works on understanding and predicting changing physical or simulated environments. Its contribution to the wider direction concerns how an environment can be understood as it changes and how its possible future states can be considered.',
      },
      {
        id: 'platform',
        name: 'Platform AI',
        description:
          'Platform AI works on packaging and exposing capabilities so developers and other departments can reuse them. Its role in the direction concerns how capabilities can be made available for use across different parts of DERYK’s work.',
      },
      {
        id: 'neural',
        name: 'Neural AI',
        description:
          'Neural AI studies what measured signals can reveal when they are modelled well. This is a distinct signal domain within DERYK’s work and another setting for exploring part of the wider intelligence loop.',
      },
      {
        id: 'gaming',
        name: 'Gaming AI',
        description:
          'Gaming AI uses interactive virtual worlds as environments for testing and world modelling. These worlds provide a different setting in which DERYK explores questions about understanding an environment and its changes.',
      },
    ],
  },
  unknowns: {
    title: 'What remains unknown',
    description: 'Explore the questions guiding the next steps in DERYK’s research.',
    paragraphs: [
      'The central question is whether increasingly general intelligence can emerge from a loop of observation, understanding, action, and learning. Investigating that question means examining how the stages relate and what evidence their results provide.',
      'Current work explores individual parts of the loop across different environments. DERYK uses verified results to understand those parts and guide further investigation, with attention to both individual stages and their relationships.',
    ],
    items: [
      'Whether general intelligence can emerge from this loop remains an open research question.',
      'How could understanding be maintained and updated across different environments?',
      'How might the stages connect into a continuous cycle of action and learning?',
      'What verified evidence would help evaluate progress across the loop?',
    ],
  },
};

export type AgiContent = typeof agiContent;
