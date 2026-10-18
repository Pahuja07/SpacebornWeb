import './physical-ai.css';

const capabilities = [
  {
    num: '01',
    title: 'Environment Understanding',
    subtitle: 'Spatial Context & Perception',
    image: '/images/deryk-sense.jpeg',
    description:
      'Constructs persistent 3D representations of unconstrained environments. Preserves metric scale, dynamic geometry, and topological boundaries across varying lighting and occlusions.',
  },
  {
    num: '02',
    title: 'Entity Lifecycle & Tracking',
    subtitle: 'Spatio-Temporal Continuity',
    image: '/images/deryk-understand.jpeg',
    description:
      'Tracks moving actors and objects over time, preserving identity continuity and kinematics through temporary visual blind spots and line-of-sight occlusions.',
  },
  {
    num: '03',
    title: 'Persistent World State',
    subtitle: 'Temporal Memory & Affordances',
    image: '/images/deryk-predict.jpeg',
    description:
      'Maintains durable physical state, object affordances, and history across operational horizons, enabling autonomous systems to reason about causal state changes.',
  },
  {
    num: '04',
    title: 'Dynamics & Trajectory Foresight',
    subtitle: 'Predictive Motion Planning',
    image: '/images/deryk-decide.jpeg',
    description:
      'Anticipates physical state transitions and candidate trajectories seconds into the future, providing foresight for closed-loop motion planning and obstacle avoidance.',
  },
];

const platforms = [
  {
    code: 'VIEW',
    name: 'DERYK VIEW',
    role: 'World Intelligence Layer',
    image: '/images/deryk-physical-world.png',
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
    image: '/images/deryk-architecture-background.png',
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
    image: '/images/deryk-careers-environment.png',
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
    image: '/images/deryk-platform.jpeg',
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
      {/* HERO SECTION WITH CINEMATIC AMBIENT VIDEO BACKGROUND */}
      <section className="xai-hero">
        <div className="xai-hero-bg-video-wrap" aria-hidden="true">
          <video
            key="hero-bg-video-player"
            autoPlay
            loop
            muted
            playsInline
            className="xai-hero-bg-video"
            poster="/images/deryk-hero-world.png"
          >
            <source src="/videos/hero-custom.mp4" type="video/mp4" />
            <source src="/images/deryk-areas-background.mp4" type="video/mp4" />
          </video>
          <div className="xai-hero-bg-overlay" />
        </div>

        <div className="xai-hero-inner">
          <p className="xai-hero-kicker">Physical Intelligence</p>
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

      {/* OVERVIEW / CORE THESIS WITH VISUAL PLATE */}
      <section className="xai-section" id="overview">
        <div className="xai-overview-grid">
          <div className="xai-overview-lead">
            <span className="xai-section-tag">01 / Overview</span>
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

      {/* CORE CAPABILITIES */}
      <section className="xai-section" id="capabilities">
        <div className="xai-section-title-wrap">
          <span className="xai-section-tag">02 / Capabilities</span>
          <h2>Foundational capabilities</h2>
          <p>
            Connected capabilities for turning raw sensory signals into verified physical agency.
          </p>
        </div>

        <div className="xai-capabilities-grid">
          {capabilities.map((c) => (
            <div className="xai-cap-card" key={c.num}>
              <div className="xai-cap-media">
                <img
                  src={c.image}
                  alt={c.title}
                  width={600}
                  height={360}
                  className="xai-img-cover"
                />
                <span className="xai-cap-num">{c.num}</span>
              </div>
              <div className="xai-cap-content">
                <span className="xai-cap-sub">{c.subtitle}</span>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="xai-section" id="platforms">
        <div className="xai-section-title-wrap">
          <span className="xai-section-tag">03 / Platforms</span>
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
                  alt={p.name}
                  width={600}
                  height={300}
                  className="xai-img-cover"
                />
                <span className="xai-plat-code">{p.code}</span>
              </div>
              <div className="xai-plat-content">
                <p className="xai-plat-role">{p.role}</p>
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

      {/* APPLICATIONS / DEPLOYMENTS */}
      <section className="xai-section" id="applications">
        <div className="xai-section-title-wrap">
          <span className="xai-section-tag">04 / Applications</span>
          <h2>Field deployments</h2>
          <p>
            Applied across automated logistics, mobile robotics, and precision physical
            operations.
          </p>
        </div>

        {/* APPLICATION 01 */}
        <div className="xai-app-row">
          <div className="xai-app-copy">
            <span className="xai-app-num">DEPLOYMENT // 01</span>
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

        {/* APPLICATION 02 */}
        <div className="xai-app-row xai-app-row-reverse">
          <div className="xai-app-copy">
            <span className="xai-app-num">DEPLOYMENT // 02</span>
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

      {/* SAFETY & OPERATIONAL BOUNDARIES */}
      <section className="xai-section" id="safety">
        <div className="xai-section-title-wrap">
          <span className="xai-section-tag">05 / Safety</span>
          <h2>Defined operational boundaries</h2>
          <p>
            Physical systems require bounded behavior. Statistical inferences are validated
            against deterministic safety invariants before execution.
          </p>
        </div>

        <div className="xai-safety-grid">
          <div className="xai-safety-card">
            <span className="xai-card-num">01</span>
            <h3>Defined Limits</h3>
            <p>
              Candidate plans are checked against explicit geometric and operational boundaries
              prior to motor actuation.
            </p>
          </div>
          <div className="xai-safety-card">
            <span className="xai-card-num">02</span>
            <h3>Bounded Fallback</h3>
            <p>
              If perception certainty drops below required margins, deterministic fail-safe states
              engage predictably.
            </p>
          </div>
          <div className="xai-safety-card">
            <span className="xai-card-num">03</span>
            <h3>Human Oversight</h3>
            <p>
              Supervisory handoffs and auditable logs ensure human operators retain full operational
              governance.
            </p>
          </div>
          <div className="xai-safety-card">
            <span className="xai-card-num">04</span>
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
