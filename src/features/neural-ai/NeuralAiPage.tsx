import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import './neural-ai-v4.css';
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Database,
  GitCompareArrows,
  ScanLine,
  ShieldAlert,
  Waves,
} from 'lucide-react';

/* --------------------------------------------------------------------------
   DATA DEFINITIONS
   -------------------------------------------------------------------------- */

const pipelineStages = [
  {
    id: 'signals',
    number: '01',
    label: 'SIGNALS',
    shortTitle: 'Raw Ingestion',
    title: 'High-entropy measured data enters the research pipeline.',
    lead: 'Continuous physical inputs—telemetry, oscillations, and sensor arrays—are treated as structured observations rather than finished answers. We isolate signal noise without conflating raw measurement with model interpretation.',
    details: [
      'Topological waveform capture across non-stationary regimes',
      'Noise manifold filtering without destructive downsampling',
      'Strict observational boundary: no live production stream implied',
    ],
    metadata: {
      modality: 'Continuous Waveform / Telemetry',
      sampling: 'High-Fidelity Multi-Channel',
      boundary: 'Observational Layer Only',
      status: 'Active Pipeline Stage',
    },
    visualType: 'wave',
  },
  {
    id: 'representation',
    number: '02',
    label: 'REPRESENTATION',
    shortTitle: 'Latent Structuring',
    title: 'Signal structure translated into learned latent geometry.',
    lead: 'Raw physical signals are projected into inspectable latent manifolds. Research investigates whether geometric representations can preserve invariant features that standard discrete embeddings routinely miss.',
    details: [
      'Latent coordinate embedding for spatial and temporal dynamics',
      'Continuous feature preservation across transient shifts',
      'Inspectable tensor spaces for comparative baseline auditing',
    ],
    metadata: {
      space: '512-D Latent Manifold',
      topology: 'Differentiable Geometry',
      invariance: 'Rotational & Temporal',
      status: 'Hypothesis Formulation',
    },
    visualType: 'grid',
  },
  {
    id: 'inference',
    number: '03',
    label: 'SPECIALISED INFERENCE',
    shortTitle: 'Targeted Hypothesis',
    title: 'Narrow, domain-specific inductive biases under inquiry.',
    lead: 'Rather than querying a broad general-purpose foundation network, a specialized model tailored to physical signal laws is investigated for a narrowly defined scientific question.',
    details: [
      'Domain-restricted parameter attention mapped to signal topology',
      'Bounded inductive bias aligned with physical measurement constraints',
      'No claim of universal superiority: strictly an open research inquiry',
    ],
    metadata: {
      architecture: 'Signal-Tailored Graph Substrate',
      inductiveBias: 'Domain Conservation Laws',
      scope: 'Narrow Hypothesis Target',
      status: 'Experimental Inquiry',
    },
    visualType: 'path',
  },
  {
    id: 'evaluation',
    number: '04',
    label: 'EVALUATION',
    shortTitle: 'Baseline Validation',
    title: 'Rigorous comparative assessment against established baselines.',
    lead: 'Every hypothesis must undergo empirical verification against general-purpose foundation models and classical statistical baselines under identical null conditions.',
    details: [
      'Cross-baseline statistical divergence testing',
      'Quantified uncertainty bounds across edge regimes',
      'Zero invented metrics: findings published only when independently audited',
    ],
    metadata: {
      benchmark: 'Dual Null-Hypothesis Baseline',
      metricTarget: 'Representation Stability Index',
      validationGate: 'Peer-Grade Scientific Protocol',
      status: 'Comparative Framework',
    },
    visualType: 'compare',
  },
] as const;

const investigationAreas = [
  {
    code: 'CAP-01',
    status: 'ACTIVE EXPLORATION',
    title: 'Signal Analysis',
    subtitle: 'Waveform & Telemetry Deconstruction',
    copy: 'Examining measured signals for emergent structure and invariant characteristics without asserting premature claims of predictability.',
    details: 'Focuses on separating stochastic atmospheric noise from deterministic physical oscillations in multi-sensor telemetry streams.',
    visual: 'wave',
    icon: Waves,
  },
  {
    code: 'CAP-02',
    status: 'LATENT MAPPING',
    title: 'Representation Learning',
    subtitle: 'Continuous Geometric Embeddings',
    copy: 'Exploring how non-stationary physical measurements can be represented in learned manifolds for downstream scientific inspection.',
    details: 'Investigates differentiable topological projections that maintain temporal continuity across sensory occlusions.',
    visual: 'grid',
    icon: ScanLine,
  },
  {
    code: 'CAP-03',
    status: 'FOCUSED HYPOTHESIS',
    title: 'Specialised Inference',
    subtitle: 'Domain-Constrained Inductive Biases',
    copy: 'Investigating narrow, model-based architectures engineered specifically for target physical signal domains.',
    details: 'Evaluates whether tailoring neural priors to physics conservation principles improves sample efficiency over generalized transformers.',
    visual: 'path',
    icon: BrainCircuit,
  },
  {
    code: 'CAP-04',
    status: 'EMPIRICAL CONTROL',
    title: 'Comparative Evaluation',
    subtitle: 'Foundation & Statistical Baselines',
    copy: 'Assessing specialized approaches against state-of-the-art general-purpose models within controlled, evidence-first protocols.',
    details: 'Ensures no architecture claim is published without rigorous significance testing and reproducible baseline comparisons.',
    visual: 'compare',
    icon: GitCompareArrows,
  },
] as const;

const methodologySteps = [
  {
    num: '01',
    tag: 'INGESTION',
    title: 'Multi-Modal Signal Conditioning',
    copy: 'Raw time-series data is ingested without synthetic distortion, establishing a verifiable sensory baseline.',
  },
  {
    num: '02',
    tag: 'PROJECTION',
    title: 'Topological Latent Projection',
    copy: 'Continuous signal states are translated into high-dimensional geometric manifolds for representation analysis.',
  },
  {
    num: '03',
    tag: 'HYPOTHESIS',
    title: 'Bounded Model Inference',
    copy: 'Specialized inductive biases operate strictly within defined domain boundaries to test specific physical questions.',
  },
];

/* --------------------------------------------------------------------------
   CUSTOM SVG VISUAL COMPONENTS (Dark purple, violet, cyan illumination)
   -------------------------------------------------------------------------- */

function HeroNeuralVisual() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="neural-v4-hero-visual-card" role="region" aria-label="Measured signals flowing through a neural processing structure">
      <div className="neural-v4-hero-card-header">
        <div className="neural-v4-hero-card-title">
          <BrainCircuit size={15} />
          <span>SCHEMATIC / NEURAL-SIGNAL-FLOW-V4</span>
        </div>
        <div className="neural-v4-hero-card-status">
          <span className="live-dot" />
          <span>RESEARCH_SIMULATION</span>
        </div>
      </div>

      <div className="neural-v4-video-container">
        <video
          ref={videoRef}
          className="neural-v4-hero-video"
          src="/images/loop.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>

      <div className="neural-v4-hero-card-footer">
        <div className="neural-v4-footer-metric">
          <span className="metric-label">TELEMETRY REGIME</span>
          <span className="metric-val purple">CONTINUOUS WAVE</span>
        </div>
        <div className="neural-v4-footer-metric">
          <span className="metric-label">LATENT SPACE</span>
          <span className="metric-val purple">512-D TOPOLOGICAL</span>
        </div>
        <div className="neural-v4-footer-metric">
          <span className="metric-label">STATUS PROTOCOL</span>
          <span className="metric-val purple">INQUIRY / NON-COMMERCIAL</span>
        </div>
      </div>
    </div>
  );
}

function MiniVisual({ type }: { type: 'wave' | 'grid' | 'path' | 'compare' }) {
  if (type === 'wave') {
    return (
      <svg viewBox="0 0 160 60" fill="none" style={{ width: '100%', height: '100%' }}>
        <path
          d="M 10 30 C 25 10, 40 50, 60 30 S 90 10, 110 30 S 135 50, 150 30"
          stroke="#c084fc"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 10 30 C 25 10, 40 50, 60 30 S 90 10, 110 30 S 135 50, 150 30"
          stroke="rgba(192, 132, 252, 0.25)"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === 'grid') {
    return (
      <svg viewBox="0 0 160 60" fill="none" style={{ width: '100%', height: '100%' }}>
        {Array.from({ length: 12 }).map((_, i) => {
          const col = i % 6;
          const row = Math.floor(i / 6);
          const x = 20 + col * 22;
          const y = 14 + row * 20;
          const isHighlight = i === 2 || i === 8 || i === 9;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width="14"
              height="14"
              rx="2"
              fill={isHighlight ? 'rgba(168, 85, 247, 0.4)' : 'rgba(255, 255, 255, 0.05)'}
              stroke={isHighlight ? '#c084fc' : 'rgba(168, 85, 247, 0.2)'}
            />
          );
        })}
      </svg>
    );
  }
  if (type === 'path') {
    return (
      <svg viewBox="0 0 160 60" fill="none" style={{ width: '100%', height: '100%' }}>
        <path d="M 20 42 L 55 18 L 105 38 L 140 18" stroke="#a855f7" strokeWidth="2" />
        <circle cx="20" cy="42" r="4" fill="#a855f7" />
        <circle cx="55" cy="18" r="4" fill="#a855f7" />
        <circle cx="105" cy="38" r="4" fill="#a855f7" />
        <circle cx="140" cy="18" r="6" fill="#c084fc" stroke="#fff" strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 160 60" fill="none" style={{ width: '100%', height: '100%' }}>
      <line x1="20" y1="20" x2="140" y2="20" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
      <line x1="20" y1="40" x2="140" y2="40" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
      <circle cx="65" cy="20" r="5" fill="#e9d5ff" />
      <circle cx="105" cy="40" r="5" fill="#a855f7" />
      <line x1="65" y1="12" x2="65" y2="48" stroke="rgba(192, 132, 252, 0.4)" strokeDasharray="2 2" />
      <line x1="105" y1="12" x2="105" y2="48" stroke="rgba(168, 85, 247, 0.4)" strokeDasharray="2 2" />
    </svg>
  );
}

/* --------------------------------------------------------------------------
   MAIN PAGE COMPONENT
   -------------------------------------------------------------------------- */

export function NeuralAiPage() {
  const [activeStage, setActiveStage] = useState(0);
  const [expandedArea, setExpandedArea] = useState<number | null>(null);
  const [comparisonMode, setComparisonMode] = useState<'specialized' | 'general'>('specialized');
  const [methodologyLayer, setMethodologyLayer] = useState(0);
  const [activeNavSection, setActiveNavSection] = useState<'question' | 'pipeline' | 'investigation' | 'status'>('question');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['question', 'pipeline', 'investigation', 'status'] as const;
      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveNavSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDockClick = (sectionId: 'question' | 'pipeline' | 'investigation' | 'status') => {
    setActiveNavSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stage = pipelineStages[activeStage];

  const handleStageSelect = (idx: number) => {
    setActiveStage(idx);
  };

  const toggleAreaExpand = (idx: number) => {
    setExpandedArea(expandedArea === idx ? null : idx);
  };

  return (
    <div className="neural-v4-root" id="top">
      {/* Background Ambience */}
      <div className="neural-v4-atmosphere" />
      <div className="neural-v4-grid-overlay" />

      {/* Sticky Navigation */}
      <header className="neural-v4-nav">
        <div className="neural-v4-brand-group">
          <Link to="/deryk" className="neural-v4-logo" aria-label="DERYK">
            <img src="/images/deryk-wordmark.png" alt="DERYK" className="deryk-brand-mark" />
          </Link>
          <span className="neural-v4-status-badge">
            <span className="purple-dot" />
            NEURAL AI / RESEARCH
          </span>
        </div>

        <nav className="neural-v4-nav-links" aria-label="Neural AI sections">
          <a href="#question">Research Question</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#investigation">Investigation</a>
          <a href="#methodology">Methodology</a>
          <a href="#status">Status</a>
          <a href="#direction">Future Direction</a>
        </nav>

        <div className="neural-v4-nav-actions">
          <Link to="/deryk" className="neural-v4-btn-sm">
            DERYK Home <ArrowRight size={13} />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="neural-v4-hero" aria-labelledby="neural-hero-heading">
        <div className="neural-v4-hero-content">
          <div className="neural-v4-eyebrow">
            <span className="neural-v4-eyebrow-pip" />
            DERYK / RESEARCH &bull; NEURAL INTELLIGENCE
          </div>

          <h1 id="neural-hero-heading" className="neural-v4-title">
            Neural <span className="accent">AI</span>
          </h1>

          <p className="neural-v4-tagline">
            Understanding what signals reveal.
          </p>

          <p className="neural-v4-description">
            Exploring how specialised learned models can interpret measured signals and answer narrowly defined questions, bridging continuous physical observations with principled learned inference.
          </p>

          <div className="neural-v4-hero-actions">
            <a href="#question" className="neural-v4-btn-primary">
              Explore the Research <ArrowRight size={16} />
            </a>
            <a href="#pipeline" className="neural-v4-btn-secondary">
              Research Approach <ArrowDownRight size={16} />
            </a>
          </div>
        </div>

        <HeroNeuralVisual />
      </section>

      {/* SECTION 01: RESEARCH QUESTION */}
      <section className="neural-v4-section" id="question">
        <div className="neural-v4-section-header">
          <span className="neural-v4-section-kicker">01 / RESEARCH QUESTION</span>
          <h2 className="neural-v4-section-title">
            Can specialised models reveal more about a signal?
          </h2>
          <p className="neural-v4-section-lead">
            General-purpose models excel across broad distributions of unstructured human language and general imagery. Neural AI investigates whether models explicitly conditioned on physical signal dynamics can capture higher-fidelity structure when answering domain-critical questions.
          </p>
        </div>

        <div className="neural-v4-question-grid">
          <div className="neural-v4-question-explanation">
            <p>
              Measured physical signals—such as orbital telemetry, high-frequency oscillatory waveforms, and sensory time-series—exhibit non-stationary noise distributions, phase relationships, and physical conservation laws that general-purpose foundation models are not architected to prioritize.
            </p>
            <p>
              Our research tests whether narrow, inductive-biased learned architectures can isolate high-entropy physical features with greater sample efficiency and lower representation error.
            </p>
            <div className="neural-v4-question-callout">
              <strong>Open Research Inquiry:</strong> The comparative efficacy between general foundation networks and signal-specialized models is actively under investigation. We do not assert that a specialized model is proven superior; rather, we are constructing the formal empirical framework to evaluate the difference.
            </div>
          </div>

          <div className="neural-v4-comparison-panel">
            <div className="neural-v4-comparison-tabs">
              <button
                type="button"
                className={`neural-v4-comparison-tab ${comparisonMode === 'general' ? 'active' : ''}`}
                onClick={() => setComparisonMode('general')}
              >
                General Foundation Baseline
              </button>
              <button
                type="button"
                className={`neural-v4-comparison-tab ${comparisonMode === 'specialized' ? 'active' : ''}`}
                onClick={() => setComparisonMode('specialized')}
              >
                Specialised Research Approach
              </button>
            </div>

            <div className="neural-v4-comparison-diagram-box">
              <div
                className={`neural-v4-comp-card ${comparisonMode === 'general' ? 'highlighted' : ''}`}
                onClick={() => setComparisonMode('general')}
              >
                <span className="neural-v4-comp-tag">BASELINE 01 / GENERAL-PURPOSE</span>
                <h4>Broad General Model</h4>
                <p>Designed for universal coverage across extensive cross-domain distributions.</p>
                <div className="neural-v4-comp-metric-row">
                  <span>Inductive Bias</span>
                  <span className="val">Uniform / Generalized</span>
                </div>
                <div className="neural-v4-comp-metric-row">
                  <span>Continuous Telemetry</span>
                  <span className="val">Tokenized Discretization</span>
                </div>
                <div className="neural-v4-comp-metric-row">
                  <span>Physical Invariants</span>
                  <span className="val">Approximated / Unconstrained</span>
                </div>
              </div>

              <div
                className={`neural-v4-comp-card ${comparisonMode === 'specialized' ? 'highlighted' : ''}`}
                onClick={() => setComparisonMode('specialized')}
              >
                <span className="neural-v4-comp-tag">INQUIRY 02 / SPECIALISED MODEL</span>
                <h4>Domain-Specialised Prior</h4>
                <p>Engineered around narrow physical dynamics and continuous sensor manifold topology.</p>
                <div className="neural-v4-comp-metric-row">
                  <span>Inductive Bias</span>
                  <span className="val">Conservation & Phase Pinned</span>
                </div>
                <div className="neural-v4-comp-metric-row">
                  <span>Continuous Telemetry</span>
                  <span className="val">Differentiable Manifolds</span>
                </div>
                <div className="neural-v4-comp-metric-row">
                  <span>Physical Invariants</span>
                  <span className="val">Geometrically Bounded</span>
                </div>
              </div>
            </div>

            <div className="neural-v4-comp-status-footer">
              <div className="icon-wrap">
                <GitCompareArrows size={20} />
              </div>
              <div>
                <strong>Evaluation Hypothesis:</strong> Relative performance between both paradigms remains an active empirical research question under peer-grade baseline audit.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: RESEARCH PIPELINE */}
      <section className="neural-v4-section" id="pipeline">
        <div className="neural-v4-section-header">
          <span className="neural-v4-section-kicker">02 / RESEARCH PIPELINE</span>
          <h2 className="neural-v4-section-title">
            From measured signals to evaluated inference.
          </h2>
          <p className="neural-v4-section-lead">
            A transparent four-stage pipeline designed to explore sensory data without conflating observation with assertion. Click or navigate through each stage to inspect the technical architecture and evaluation boundaries.
          </p>
        </div>

        <div className="neural-v4-pipeline-canvas">
          <div className="neural-v4-pipeline-nav" role="tablist" aria-label="Pipeline Stages">
            {pipelineStages.map((stg, index) => {
              const isSelected = index === activeStage;
              return (
                <button
                  type="button"
                  key={stg.id}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls="neural-v4-stage-detail-panel"
                  className={`neural-v4-pipeline-stage-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => handleStageSelect(index)}
                  onFocus={() => handleStageSelect(index)}
                >
                  <div className="neural-v4-stage-top-meta">
                    <span>STAGE {stg.number}</span>
                    <span>{stg.shortTitle}</span>
                  </div>
                  <div className="neural-v4-stage-mini-visual">
                    <MiniVisual type={stg.visualType as 'wave' | 'grid' | 'path' | 'compare'} />
                  </div>
                  <div>
                    <h3 className="neural-v4-stage-name">{stg.label}</h3>
                    <p className="neural-v4-stage-sub">{stg.shortTitle}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic connecting beam indicator */}
          <div className="neural-v4-pipeline-beam-track">
            <div
              className="neural-v4-pipeline-beam-active"
              style={{
                left: `${(activeStage / 4) * 100}%`,
                width: '25%',
              }}
            />
          </div>

          {/* Stage Details Inspector */}
          <div className="neural-v4-pipeline-detail-card" id="neural-v4-stage-detail-panel" role="tabpanel">
            <div className="neural-v4-pipeline-detail-left">
              <span className="neural-v4-section-kicker" style={{ marginBottom: 6 }}>
                ACTIVE STAGE INSPECTOR &bull; {stage.number} / {stage.label}
              </span>
              <h3>{stage.title}</h3>
              <p className="lead">{stage.lead}</p>

              <div className="neural-v4-pipeline-checkpoints">
                {stage.details.map((item, i) => (
                  <div className="neural-v4-checkpoint-item" key={i}>
                    <CheckCircle2 size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="neural-v4-pipeline-detail-right">
              <div className="neural-v4-inspector-header">
                <span>STAGE PROTOCOL CONTRACT</span>
                <span>STATE: AUDITED</span>
              </div>
              {Object.entries(stage.metadata).map(([key, val]) => (
                <div className="neural-v4-inspector-row" key={key}>
                  <span style={{ textTransform: 'capitalize' }}>{key}</span>
                  <span className="val">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: AREAS OF INVESTIGATION */}
      <section className="neural-v4-section" id="investigation">
        <div className="neural-v4-section-header">
          <span className="neural-v4-section-kicker">03 / AREAS OF INVESTIGATION</span>
          <h2 className="neural-v4-section-title">
            Research across the signal-to-inference process.
          </h2>
          <p className="neural-v4-section-lead">
            Four specialized research tracks investigating whether inductive biases tailored to continuous physical signals can unlock cleaner representational geometry.
          </p>
        </div>

        <div className="neural-v4-areas-grid">
          {investigationAreas.map((area, index) => {
            const Icon = area.icon;
            const isExpanded = expandedArea === index;
            return (
              <article className="neural-v4-area-card" key={area.title}>
                <div>
                  <div className="neural-v4-area-meta">
                    <span>{area.code}</span>
                    <span style={{ color: 'var(--v4-purple-bright)', fontSize: 10 }}>{area.status}</span>
                  </div>

                  <div className="neural-v4-area-visual">
                    <MiniVisual type={area.visual as 'wave' | 'grid' | 'path' | 'compare'} />
                  </div>

                  <h3 className="neural-v4-area-title">{area.title}</h3>
                  <div style={{ color: 'var(--v4-purple-bright)', fontSize: 11, fontFamily: 'monospace', marginBottom: 12 }}>
                    {area.subtitle}
                  </div>
                  <p className="neural-v4-area-copy">{area.copy}</p>

                  {isExpanded && (
                    <div className="neural-v4-area-expanded-details">
                      <strong>Methodological Scope:</strong> {area.details}
                    </div>
                  )}
                </div>

                <div className="neural-v4-area-footer">
                  <button
                    type="button"
                    className="neural-v4-expand-btn"
                    onClick={() => toggleAreaExpand(index)}
                  >
                    {isExpanded ? 'Collapse Scope -' : 'Expand Scope +'}
                  </button>
                  <Icon size={16} style={{ color: 'var(--v4-purple-bright)', opacity: 0.8 }} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SECTION 04: METHODOLOGY & SIGNAL ANATOMY */}
      <section className="neural-v4-section" id="methodology">
        <div className="neural-v4-section-header">
          <span className="neural-v4-section-kicker">04 / METHODOLOGY & ANATOMY</span>
          <h2 className="neural-v4-section-title">
            Topological decomposition of continuous streams.
          </h2>
          <p className="neural-v4-section-lead">
            Unlike static computer vision or text tokens, physical signals demand continuous differential representations that preserve phase, momentum, and harmonic resonance.
          </p>
        </div>

        <div className="neural-v4-methodology-container">
          <div className="neural-v4-methodology-diagram">
            <svg viewBox="0 0 600 360" fill="none" style={{ width: '100%', height: '100%', display: 'block' }}>
              <defs>
                <linearGradient id="decompGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#d8b4fe" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#9333ea" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Wireframe Mesh Field */}
              <g stroke="rgba(168, 85, 247, 0.1)" strokeWidth="1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={`h-${i}`} x1="30" y1={40 + i * 35} x2="570" y2={40 + i * 35} />
                ))}
                {Array.from({ length: 14 }).map((_, i) => (
                  <line key={`v-${i}`} x1={40 + i * 40} y1="30" x2={40 + i * 40} y2="330" />
                ))}
              </g>

              {/* Dynamic Waveform Decomposition Paths */}
              <path
                d="M 40 180 C 100 80, 160 280, 240 180 S 340 90, 420 180 S 500 270, 560 180"
                stroke="url(#decompGrad)"
                strokeWidth="3"
                fill="none"
              />

              {/* Highlight points */}
              {[
                { cx: 78, cy: 151, label: 'HARMONIC_01' },
                { cx: 240, cy: 180, label: 'PHASE_NODE' },
                { cx: 420, cy: 180, label: 'LATENT_PROJECTION' },
                { cx: 500, cy: 247, label: 'BOUNDED_CONVERGENCE' },
              ].map((pt, i) => (
                <g key={i}>
                  <circle cx={pt.cx} cy={pt.cy} r="6" fill="#a855f7" stroke="#fff" strokeWidth="1.5" />
                  <text x={pt.cx - 20} y={pt.cy - 12} fill="rgba(248, 250, 252, 0.8)" fontSize="8" fontFamily="monospace">
                    {pt.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="neural-v4-methodology-copy">
            {methodologySteps.map((step, idx) => (
              <div
                key={step.num}
                className={`neural-v4-methodology-step ${methodologyLayer === idx ? 'active' : ''}`}
                onClick={() => setMethodologyLayer(idx)}
              >
                <div className="neural-v4-methodology-step-head">
                  <span className="num">LAYER {step.num} / {step.tag}</span>
                  <ChevronRight size={14} style={{ color: 'var(--v4-purple-bright)' }} />
                </div>
                <h4>{step.title}</h4>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: RESEARCH STATUS */}
      <section className="neural-v4-section" id="status">
        <div className="neural-v4-section-header">
          <span className="neural-v4-section-kicker">05 / RESEARCH STATUS</span>
          <h2 className="neural-v4-section-title">
            Clear about what we know — and what we don't.
          </h2>
          <p className="neural-v4-section-lead">
            Following Anthropic and xAI research communication standards, we separate active theoretical inquiries, validated empirical findings, and non-product boundaries.
          </p>
        </div>

        <div className="neural-v4-status-grid">
          <article className="neural-v4-status-card">
            <div className="neural-v4-status-header">
              <span className="neural-v4-status-badge-panel investigating">INQUIRY</span>
              <Activity size={16} style={{ color: 'var(--v4-purple-bright)' }} />
            </div>
            <h3>What We're Investigating</h3>
            <p>
              Neural AI explores whether specialized architectures can retain high-frequency signal invariants better than generalized foundation transformers when interpreting non-stationary physical telemetry.
            </p>
            <div className="neural-v4-status-note">
              FOCUS: Mathematical formulation of continuous topological latent spaces.
            </div>
          </article>

          <article className="neural-v4-status-card">
            <div className="neural-v4-status-header">
              <span className="neural-v4-status-badge-panel validated">EMPIRICAL STATUS</span>
              <ShieldAlert size={16} style={{ color: 'var(--v4-purple-bright)' }} />
            </div>
            <h3>What Has Been Validated</h3>
            <p>
              Validated findings have not yet been provided for this public page. Experimental results, benchmark parity, and empirical significance will be reported exclusively once peer-audited validation protocols conclude.
            </p>
            <div className="neural-v4-status-note">
              NO INVENTED BENCHMARKS: Accuracy claims and test scores are withheld.
            </div>
          </article>

          <article className="neural-v4-status-card">
            <div className="neural-v4-status-header">
              <span className="neural-v4-status-badge-panel boundary">GOVERNANCE</span>
              <Database size={16} style={{ color: '#f87171' }} />
            </div>
            <h3>What Is Not Yet a Product</h3>
            <p>
              This research is an exploratory scientific inquiry. It is not a commercial SaaS, downloadable model checkpoint, public REST API, software development kit, or enterprise mission product.
            </p>
            <div className="neural-v4-status-note">
              BOUNDARY: Strictly experimental research prototype.
            </div>
          </article>
        </div>
      </section>

      {/* SECTION 06: FUTURE DIRECTION */}
      <section className="neural-v4-section" id="direction">
        <div className="neural-v4-section-header">
          <span className="neural-v4-section-kicker">06 / FUTURE DIRECTION</span>
          <h2 className="neural-v4-section-title">
            Research today. Architectural possibilities tomorrow.
          </h2>
          <p className="neural-v4-section-lead">
            Mapping how foundational discoveries in signal-oriented neural models may eventually inform real-time autonomous systems.
          </p>
        </div>

        <div className="neural-v4-direction-box">
          <div className="neural-v4-direction-copy">
            <p>
              Neural AI operates as an upstream exploratory pillar within DERYK. Should our investigation validate that domain-specialized inductive biases offer measurable advantages, future initiatives may explore interfaces with broader execution substrates such as Platform AI.
            </p>
            <p style={{ marginTop: 16 }}>
              No production integration or API contract currently exists; this conceptual trajectory illustrates our research horizon.
            </p>
          </div>

          <div className="neural-v4-horizon-flow" aria-label="Research Horizon Roadmap">
            <div className="neural-v4-horizon-step">
              <span className="step-no">HORIZON 01</span>
              <h4>Neural AI Research</h4>
              <p>Theoretical inquiry & baseline evaluation</p>
            </div>
            <ArrowRight className="neural-v4-horizon-arrow" size={18} />
            <div className="neural-v4-horizon-step">
              <span className="step-no">HORIZON 02</span>
              <h4>Validated Discovery</h4>
              <p>Peer-audited capability & invariant proofs</p>
            </div>
            <ArrowRight className="neural-v4-horizon-arrow" size={18} />
            <div className="neural-v4-horizon-step">
              <span className="step-no">HORIZON 03</span>
              <h4>Platform AI Access</h4>
              <p>Potential substrate integration boundary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Closing Section */}
      <section className="neural-v4-closing">
        <span className="neural-v4-section-kicker">DERYK NEURAL RESEARCH IDENTITY</span>
        <h2>Better questions. More specialised research. Clearer evaluation.</h2>
        <p>
          Explore how Neural AI investigates the intricate relationship between measured signals, learned representations, and specialized inference.
        </p>
        <div className="neural-v4-closing-actions">
          <a href="#pipeline" className="neural-v4-btn-primary">
            Inspect the Pipeline <ArrowRight size={16} />
          </a>
          <Link to="/deryk" className="neural-v4-btn-secondary">
            Return to DERYK Overview <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* Floating Bottom Step Dock */}
      <div className="neural-v4-floating-dock" role="navigation" aria-label="Step Navigation">
        <div className="neural-v4-dock-links">
          <button
            type="button"
            className={`neural-v4-dock-link ${activeNavSection === 'question' ? 'active' : ''}`}
            onClick={() => handleDockClick('question')}
          >
            01 QUESTION &rarr;
          </button>
          <button
            type="button"
            className={`neural-v4-dock-link ${activeNavSection === 'pipeline' ? 'active' : ''}`}
            onClick={() => handleDockClick('pipeline')}
          >
            02 PIPELINE &rarr;
          </button>
          <button
            type="button"
            className={`neural-v4-dock-link ${activeNavSection === 'investigation' ? 'active' : ''}`}
            onClick={() => handleDockClick('investigation')}
          >
            03 INVESTIGATION &rarr;
          </button>
          <button
            type="button"
            className={`neural-v4-dock-link ${activeNavSection === 'status' ? 'active' : ''}`}
            onClick={() => handleDockClick('status')}
          >
            04 STATUS &rarr;
          </button>
        </div>
      </div>

      {/* DERYK Standard Footer */}
      <footer className="neural-v4-footer">
        <div className="neural-v4-footer-grid">
          <div className="neural-v4-footer-brand">
            <Link to="/deryk" className="neural-v4-logo" aria-label="DERYK">
              <img src="/images/deryk-wordmark.png" alt="DERYK" className="deryk-brand-mark" />
            </Link>
            <p>
              Autonomous mission intelligence substrate, multi-agent systems, and frontier cognitive compute architectures for planetary-scale engineering.
            </p>
            <div style={{ color: 'var(--v4-purple-bright)', fontFamily: 'monospace', fontSize: 11 }}>
              &bull; DERYK / RESEARCH &bull; NEURAL AI PROTOCOL
            </div>
          </div>

          <div className="neural-v4-footer-col">
            <h4>Research Pillars</h4>
            <ul>
              <li><Link to="/neural-ai">Neural AI</Link></li>
              <li><Link to="/deryk/research#platform">Platform AI</Link></li>
              <li><Link to="/physical-ai">Physical AI</Link></li>
              <li><a href="/gaming/DERYK_Gaming_AI.html">Gaming AI</a></li>
            </ul>
          </div>

          <div className="neural-v4-footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#question">Research Question</a></li>
              <li><a href="#pipeline">Research Pipeline</a></li>
              <li><a href="#investigation">Investigation Areas</a></li>
              <li><a href="#status">Scientific Status</a></li>
              <li><Link to="/deryk">Return to DERYK</Link></li>
            </ul>
          </div>
        </div>

        <div className="neural-v4-footer-bottom">
          <span>&copy; 2026 DERYK SYSTEMS INC. ALL RIGHTS RESERVED.</span>
          <span>RESEARCH PROTOTYPE &bull; NO COMMERCIAL PRODUCTS ASSERTED</span>
        </div>
      </footer>
    </div>
  );
}

export default NeuralAiPage;
