import './physical-ai.css';

const capabilities = [
  {
    title: 'Environment Understanding',
    subtitle: 'Spatial Context & Perception',
    image: '/images/physical-ai/environment-map.svg',
    description:
      'Constructs persistent 3D representations of unconstrained environments. Preserves metric scale, dynamic geometry, and topological boundaries across varying lighting and occlusions.',
  },
  {
    title: 'Entity Lifecycle & Tracking',
    subtitle: 'Spatio-Temporal Continuity',
    image: '/images/physical-ai/entity-tracking.svg',
    description:
      'Tracks moving actors and objects over time, preserving identity continuity and kinematics through temporary visual blind spots and line-of-sight occlusions.',
  },
  {
    title: 'Persistent World State',
    subtitle: 'Temporal Memory & Affordances',
    image: '/images/physical-ai/world-state.svg',
    description:
      'Maintains durable physical state, object affordances, and history across operational horizons, enabling autonomous systems to reason about causal state changes.',
  },
  {
    title: 'Dynamics & Trajectory Foresight',
    subtitle: 'Predictive Motion Planning',
    image: '/images/physical-ai/trajectory.svg',
    description:
      'Anticipates physical state transitions and candidate trajectories seconds into the future, providing foresight for closed-loop motion planning and obstacle avoidance.',
  },
];

const platforms = [
  {
    code: 'VIEW',
    name: 'DERYK VIEW',
    role: 'World Intelligence Layer',
    image: '/images/physical-ai/view-scene.svg',
    imageAlt: 'An illustrated landscape with a scanning field mapping the terrain.',
    description:
      'Fuses multimodal camera, LiDAR, and IMU streams into an aligned, continuous 3D world representation.',
    items: [
      'Real-time volumetric mapping',
      'Dynamic entity classification',
      'Temporal occlusion memory',
    ],
  },
  {
    code: 'ACT',
    name: 'DERYK ACT',
    role: 'Planning & Decision Support',
    image: '/images/physical-ai/act-path.svg',
    imageAlt: 'An illustrated robotic arm planning a path around obstacles.',
    description:
      'Evaluates candidate trajectories, verifies physical constraints, and synthesizes action vectors for real-time controllers.',
    items: [
      'Trajectory distribution forecasting',
      'Constraint & affordance checking',
      'Deterministic safety limits',
    ],
  },
  {
    code: 'RUNTIME',
    name: 'Physical AI Runtime',
    role: 'Embedded Execution Core',
    image: '/images/physical-ai/runtime-core.svg',
    imageAlt: 'An illustrated embedded computing core with a quiet signal pulse.',
    description:
      'Low-overhead execution engine designed for edge compute on mobile robots, industrial equipment, and aerial vehicles.',
    items: [
      'Sub-14ms loop timing',
      'Hardware-accelerated inference',
      'Fail-safe fallback execution',
    ],
  },
  {
    code: 'SDK',
    name: 'Developer SDK',
    role: 'Integration & Interfaces',
    image: '/images/physical-ai/sdk-workbench.svg',
    imageAlt: 'An illustrated software workbench connecting code and system nodes.',
    description:
      'C++ and Python standard libraries enabling autonomy teams to connect physical world models directly into existing pipelines.',
    items: [
      'Native ROS 2 and gRPC APIs',
      'Simulation & replay bridges',
      'Telemetry and logging tools',
    ],
  },
];

export function PhysicalAIPage() {
  return (
    <div className="xai-page" id="top">
      {/* Hero */}
      <section className="xai-hero">
        <div className="xai-hero-bg-wrap" aria-hidden="true">
          <picture>
            <source srcSet="/gifs/physical-ai-hero.webp" type="image/webp" />
            <img
              src="/gifs/physical-ai-hero.gif"
              alt="Physical AI Isometric Spatial Architecture"
              className="xai-hero-bg-img"
            />
          </picture>
        </div>

        <div className="xai-hero-inner">
          <h1 className="xai-hero-title">Physical AI for the real world.</h1>
          <p className="xai-hero-sub">
            Bridging perception, world modeling, and action for autonomous systems and machines in
            dynamic environments.
          </p>

          <div className="xai-hero-actions">
            <a href="#capabilities" className="xai-btn xai-btn-primary">
              Explore Capabilities
            </a>
            <a href="#applications" className="xai-btn xai-btn-secondary">
              View Deployments
            </a>
          </div>

          <div className="xai-hero-caption-pill">
            <span className="xai-live-indicator" />
            <span>Autonomous spatial reconstruction and world state estimation</span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="xai-section" id="overview">
        <div className="xai-overview-grid">
          <div className="xai-overview-lead">
            <h2>The physical world requires grounded understanding.</h2>
            <div className="xai-overview-text">
              <p>
                Digital models operate in statistical approximations where errors carry low
                consequence. Physical systems operate under strict real-world constraints:
                inertia, collision, occlusion, and friction demand grounded geometric and causal
                awareness.
              </p>
              <p>
                DERYK connects perception with context, organizing multimodal sensor streams into a
                durable representation of changing spaces, moving objects, and future trajectories.
              </p>
            </div>
          </div>

          <div className="xai-visual-card">
            <div className="xai-visual-card-image">
              <img
                src="/images/deryk-thesis-background.png"
                alt="Physical world understanding"
                width={800}
                height={500}
                className="xai-img-cover"
              />
            </div>
            <div className="xai-visual-card-meta">
              <span>Spatio-temporal scene graph grounding</span>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="xai-section" id="capabilities">
        <div className="xai-section-title-wrap">
          <h2>Foundational capabilities</h2>
          <p>
            Connected capabilities for turning raw sensory signals into verified physical agency.
          </p>
        </div>

        <div className="xai-capabilities-grid">
          {capabilities.map((c) => (
            <div className="xai-cap-card" key={c.title}>
              <div className="xai-cap-media">
                <img
                  src={c.image}
                  alt={`Illustration: ${c.title.toLowerCase()}`}
                  width={600}
                  height={360}
                  className="xai-img-cover"
                />
              </div>
              <div className="xai-cap-content">
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="xai-section" id="platforms">
        <div className="xai-section-title-wrap">
          <h2>Modular software stack</h2>
          <p>
            Designed to integrate into existing autonomy stacks, robotics frameworks, and
            operational fleets.
          </p>
        </div>

        <div className="xai-platforms-grid">
          {platforms.map((p) => (
            <div className="xai-plat-card" key={p.code}>
              <div className="xai-plat-media">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  width={600}
                  height={300}
                  className="xai-img-cover"
                />
                <span className="xai-plat-code">{p.code}</span>
              </div>
              <div className="xai-plat-content">
                <h3>{p.name}</h3>
                <p className="xai-plat-desc">{p.description}</p>
                <ul className="xai-plat-list">
                  {p.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section className="xai-section" id="applications">
        <div className="xai-section-title-wrap">
          <h2>Field deployments</h2>
          <p>
            Applied across automated logistics, mobile robotics, and precision physical
            operations.
          </p>
        </div>

        {/* Logistics deployment */}
        <div className="xai-app-row">
          <div className="xai-app-copy">
            <h3>Continuous state reconstruction in complex spaces</h3>
            <p>
              Autonomous mobile equipment operating in crowded logistics facilities requires
              continuous spatial awareness. DERYK maintains consistent topological tracking even
              when moving actors and stacked goods obstruct direct visibility.
            </p>
            <div className="xai-app-meta">
              <div>
                <strong>Reliability</strong>
                <span>99.98% uptime</span>
              </div>
              <div>
                <strong>Tracking</strong>
                <span>Continuous 6-DoF SLAM</span>
              </div>
            </div>
          </div>
          <div className="xai-app-media">
            <img
              src="/gifs/slam-reconstruction.gif"
              alt="Continuous 6-DoF SLAM & Spatial Reconstruction"
              width={960}
              height={540}
              className="xai-img-cover"
            />
          </div>
        </div>

        {/* Robotic inspection */}
        <div className="xai-app-row xai-app-row-reverse">
          <div className="xai-app-copy">
            <h3>Dynamic object manipulation and physical inspection</h3>
            <p>
              Combining real-time visual feedback with physical affordance memory allows robotic
              arms to handle unmodeled geometric objects, navigate assembly tolerances, and perform
              non-destructive inspection.
            </p>
            <div className="xai-app-meta">
              <div>
                <strong>Precision</strong>
                <span>Sub-millimeter repeat</span>
              </div>
              <div>
                <strong>Response</strong>
                <span>Low-latency closed loop</span>
              </div>
            </div>
          </div>
          <div className="xai-app-media">
            <img
              src="/gifs/robotic-manipulation.gif"
              alt="Dynamic 6-DoF robotic manipulation and physical inspection"
              width={960}
              height={540}
              className="xai-img-cover"
            />
          </div>
        </div>
      </section>

      {/* Safety and operational boundaries */}
      <section className="xai-section" id="safety">
        <div className="xai-section-title-wrap">
          <h2>Defined operational boundaries</h2>
          <p>
            Physical systems require bounded behavior. Statistical inferences are validated
            against deterministic safety invariants before execution.
          </p>
        </div>

        <div className="xai-safety-grid">
          <div className="xai-safety-card">
            <h3>Defined Limits</h3>
            <p>
              Candidate plans are checked against explicit geometric and operational boundaries
              prior to motor actuation.
            </p>
          </div>
          <div className="xai-safety-card">
            <h3>Bounded Fallback</h3>
            <p>
              If perception certainty drops below required margins, deterministic fail-safe states
              engage predictably.
            </p>
          </div>
          <div className="xai-safety-card">
            <h3>Human Oversight</h3>
            <p>
              Supervisory handoffs and auditable logs ensure human operators retain full operational
              governance.
            </p>
          </div>
          <div className="xai-safety-card">
            <h3>Continuous Monitoring</h3>
            <p>
              Sensor health, calibration drift, and state discrepancies are continuously diagnosed
              in runtime.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default PhysicalAIPage;
