export default function TelemetryTopologySection() {
    return (
        <section
            className="w-full bg-[#07070a] py-20 relative overflow-hidden border-t border-purple-900/30"
            id="telemetry-topology"
        >
            {/* Cybernetic Grid & Crosshair Markings in Background */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(168,85,247,0.12)_1px,transparent_1px)] [background-size:32px_32px] opacity-50 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#07070a] via-transparent to-[#07070a] pointer-events-none"></div>
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-700/15 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Header & Pipeline Health Status */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 font-mono text-xs text-purple-300 uppercase tracking-widest pb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            <span>Platform Architecture Concept</span>
                        </div>
                        <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight">
                            How It Fits Together
                        </h2>
                        <p className="text-[#a1a1aa] text-sm md:text-base max-w-2xl font-body leading-relaxed">
                            An illustration of how environment interfaces, runtime scheduling,
                            and AI services could exchange information.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs text-[#a1a1aa]">
                        <span className="px-3 py-1 rounded-md bg-[#0c0d12] border border-purple-900/40 text-purple-300">
                            CONCEPT // DATA ROUTE
                        </span>
                    </div>
                </div>

                {/* Telemetry & Network Visual Display Panel */}
                <div className="w-full rounded-3xl bg-[#0c0d12]/90 border border-purple-500/30 backdrop-blur-xl relative overflow-hidden shadow-[0_16px_48px_-12px_rgba(0,0,0,0.95)] p-6 md:p-10 flex items-center justify-center min-h-[260px] md:min-h-[290px]">
                    {/* Inner Aperture Glow Borders & Gradient Vignettes */}
                    <div className="absolute inset-0 rounded-3xl border border-purple-400/20 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12)_0%,transparent_70%)] pointer-events-none"></div>

                    {/* Coordinate Grid & Reticle Crosshairs */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-40">
                        {/* Center Concentric Radar Circles anchored on EXEC router */}
                        <div className="relative flex items-center justify-center w-[460px] h-[460px]">
                            <div className="absolute w-[460px] h-[460px] rounded-full border border-purple-500/25"></div>
                            <div className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-purple-400/35"></div>
                            <div className="absolute w-[180px] h-[180px] rounded-full border border-purple-500/30"></div>
                            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
                            <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>
                            {/* Spinning radar line */}
                            <div className="absolute inset-0 rounded-full radar-rotator pointer-events-none">
                                <div className="w-1/2 h-[1px] bg-gradient-to-l from-purple-400/70 to-transparent absolute top-1/2 left-0 origin-right"></div>
                            </div>
                        </div>
                    </div>

                    {/* Coordinate Axis / Scale Markers (-80, -40, 40, 80) */}
                    <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between font-mono text-[11px] text-purple-400/50 pointer-events-none select-none px-6 md:px-12">
                        <span className="-translate-y-3">-80</span>
                        <span className="-translate-y-3">-40</span>
                        <span className="-translate-y-3">40</span>
                        <span className="-translate-y-3">80</span>
                    </div>

                    {/* SVG Circuit & Branching Pulse Path */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none select-none"
                        preserveAspectRatio="none"
                        viewBox="0 0 1000 240"
                    >
                        <defs>
                            <filter
                                height="140%"
                                id="glow-vector-line"
                                width="140%"
                                x="-20%"
                                y="-20%"
                            >
                                <feGaussianBlur
                                    result="blur"
                                    stdDeviation="4"
                                ></feGaussianBlur>
                                <feMerge>
                                    <feMergeNode in="blur"></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                            <linearGradient id="vector-grad" x1="0%" x2="100%" y1="0%" y2="0%">
                                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4"></stop>
                                <stop offset="50%" stopColor="#c084fc" stopOpacity="0.95"></stop>
                                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4"></stop>
                            </linearGradient>
                        </defs>
                        {/* Static Guide Lines */}
                        <path
                            d="M 60 120 L 450 120"
                            fill="none"
                            stroke="rgba(168, 85, 247, 0.25)"
                            strokeWidth="1.5"
                        ></path>
                        <path
                            d="M 550 120 L 620 120 Q 660 120 720 75 L 940 48"
                            fill="none"
                            stroke="rgba(168, 85, 247, 0.25)"
                            strokeWidth="1.5"
                        ></path>
                        <path
                            d="M 550 120 L 620 120 Q 660 120 720 165 L 940 192"
                            fill="none"
                            stroke="rgba(168, 85, 247, 0.25)"
                            strokeWidth="1.5"
                        ></path>
                        {/* Aperture Funnel Lines extending rightwards */}
                        <path
                            d="M 600 115 L 850 56"
                            fill="none"
                            stroke="rgba(192, 132, 252, 0.45)"
                            strokeDasharray="4 4"
                            strokeWidth="2"
                        ></path>
                        <path
                            d="M 600 125 L 850 184"
                            fill="none"
                            stroke="rgba(192, 132, 252, 0.45)"
                            strokeDasharray="4 4"
                            strokeWidth="2"
                        ></path>
                        {/* Dynamic Glowing Neon Pulse Beams */}
                        <path
                            className="flow-line-pulse"
                            d="M 60 120 L 450 120"
                            fill="none"
                            filter="url(#glow-vector-line)"
                            stroke="url(#vector-grad)"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                        ></path>
                        <path
                            className="flow-line-pulse-split-top"
                            d="M 550 120 L 620 120 Q 660 120 720 75 L 940 48"
                            fill="none"
                            filter="url(#glow-vector-line)"
                            stroke="url(#vector-grad)"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                        ></path>
                        <path
                            className="flow-line-pulse-split-bottom"
                            d="M 550 120 L 620 120 Q 660 120 720 165 L 940 192"
                            fill="none"
                            filter="url(#glow-vector-line)"
                            stroke="url(#vector-grad)"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                        ></path>
                    </svg>

                    {/* Interactive / Telemetry Nodes */}
                    <div className="w-full flex items-center justify-between relative z-10 px-2 sm:px-10">
                        {/* Left Node: IN: ENGINE_STEP_TICK */}
                        <div className="interactive-node font-mono text-xs md:text-sm text-[#cbd5e1] font-bold bg-[#07070a]/90 px-4 py-2.5 rounded-lg border border-purple-500/40 shadow-lg backdrop-blur-md flex items-center gap-2">
                            <span className="text-purple-400 font-normal">IN:</span>
                            <span className="text-white tracking-wider">ENGINE_STEP_TICK</span>
                        </div>

                        {/* Center Node: EXEC: INFERENCE_ROUTER with radial glow */}
                        <div className="exec-glow-box interactive-node font-mono text-xs md:text-sm text-white font-bold bg-[#111018]/95 border-2 border-[#c084fc] px-5 py-3 rounded-lg backdrop-blur-md flex items-center gap-2 relative">
                            <div className="absolute -inset-4 bg-purple-500/20 blur-xl rounded-full -z-10 pointer-events-none"></div>
                            <span className="text-purple-300 font-semibold">EXEC:</span>
                            <span className="tracking-wider text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
                                INFERENCE_ROUTER
                            </span>
                        </div>

                        {/* Right Node: OUT: ACTION_VECTOR */}
                        <div className="interactive-node font-mono text-xs md:text-sm text-purple-300 font-bold bg-[#07070a]/90 px-4 py-2.5 rounded-lg border border-purple-500/40 shadow-lg backdrop-blur-md flex items-center gap-2">
                            <span className="text-purple-400 font-normal">OUT:</span>
                            <span className="text-white tracking-wider">ACTION_VECTOR</span>
                        </div>
                    </div>
                </div>

                {/* 4 Subsystem Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-6">
                    <div className="violet-border-glow rounded-xl bg-[#0c0d12]/85 backdrop-blur-md border border-purple-500/20 p-6 flex flex-col justify-between space-y-5 shadow-[0_8px_24px_rgba(0,0,0,0.6)] group hover:border-purple-400/50 transition-all">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between font-mono text-xs text-[#a1a1aa] pb-2 border-b border-purple-900/40">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#c084fc] font-bold">01</span>
                                    <span className="text-purple-300 font-semibold tracking-wider">
                                        INGRESS
                                    </span>
                                </div>
                            </div>
                            <h4 className="font-sans text-lg font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
                                Environment Interface
                            </h4>
                            <p className="font-body text-xs text-[#94a3b8] leading-relaxed">
                                Research explores how simulated environments could connect to
                                AI systems through environment interfaces.
                            </p>
                        </div>
                    </div>

                    <div className="violet-border-glow rounded-xl bg-[#0c0d12]/85 backdrop-blur-md border border-purple-500/20 p-6 flex flex-col justify-between space-y-5 shadow-[0_8px_24px_rgba(0,0,0,0.6)] group hover:border-purple-400/50 transition-all">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between font-mono text-xs text-[#a1a1aa] pb-2 border-b border-purple-900/40">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#c084fc] font-bold">02</span>
                                    <span className="text-purple-300 font-semibold tracking-wider">
                                        KERNEL
                                    </span>
                                </div>
                            </div>
                            <h4 className="font-sans text-lg font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
                                Runtime Engine
                            </h4>
                            <p className="font-body text-xs text-[#94a3b8] leading-relaxed">
                                Investigates how state updates, scheduling, and repeatable
                                evaluation could be coordinated.
                            </p>
                        </div>
                    </div>

                    <div className="violet-border-glow rounded-xl bg-[#0c0d12]/85 backdrop-blur-md border border-purple-500/20 p-6 flex flex-col justify-between space-y-5 shadow-[0_8px_24px_rgba(0,0,0,0.6)] group hover:border-purple-400/50 transition-all">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between font-mono text-xs text-[#a1a1aa] pb-2 border-b border-purple-900/40">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#c084fc] font-bold">03</span>
                                    <span className="text-purple-300 font-semibold tracking-wider">
                                        INFERENCE
                                    </span>
                                </div>
                            </div>
                            <h4 className="font-sans text-lg font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
                                AI Services Pool
                            </h4>
                            <p className="font-body text-xs text-[#94a3b8] leading-relaxed">
                                Studies model orchestration, multimodal perception, and policy
                                evaluation as parts of a reusable services layer.
                            </p>
                        </div>
                    </div>

                    <div className="violet-border-glow rounded-xl bg-[#0c0d12]/85 backdrop-blur-md border border-purple-500/20 p-6 flex flex-col justify-between space-y-5 shadow-[0_8px_24px_rgba(0,0,0,0.6)] group hover:border-purple-400/50 transition-all">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between font-mono text-xs text-[#a1a1aa] pb-2 border-b border-purple-900/40">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#c084fc] font-bold">04</span>
                                    <span className="text-purple-300 font-semibold tracking-wider">
                                        EGRESS
                                    </span>
                                </div>
                            </div>
                            <h4 className="font-sans text-lg font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
                                Gateway &amp; Registry
                            </h4>
                            <p className="font-body text-xs text-[#94a3b8] leading-relaxed">
                                Explores validation, policy, and audit considerations when
                                passing actions to downstream systems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}