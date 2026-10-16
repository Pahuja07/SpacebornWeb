interface Pillar {
    icon: string;
    title: string;
    description: string;
}

const pillars: Pillar[] = [
    {
        icon: "sports_esports",
        title: "Game AI & Virtual Worlds",
        description: "Powers next-generation NPCs, dynamic game agents, and rich simulated interactive environments with responsive tactical cognition.",
    },
    {
        icon: "precision_manufacturing",
        title: "Real-World Robotics & Simulation",
        description: "Bridging physics-accurate sim-to-real transfer, spatial sensor grounding, and multimodal perception for embodied agents.",
    },
    {
        icon: "memory",
        title: "Deterministic Runtime",
        description: "Zero-copy shared memory, tick-synchronized execution sandboxes, and bitwise reproducible evaluation across heterogeneous nodes.",
    },
];

export default function PillarsSection() {
    return (
        <section className="w-full bg-[#09080f] py-24 border-y border-purple-900/25 relative overflow-hidden" id="pillars">
            <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden flex items-center justify-center">
                <div className="absolute w-[1200px] h-[1200px] max-w-none flex items-center justify-center animate-telemetry-pulse">
                    <div className="relative w-full h-full animate-radar-sweep flex justify-center items-center">
                        <img
                            alt="Radar Telemetry Grid"
                            src="/images/radar-telemetry.png"
                            className="w-full h-full object-contain mix-blend-screen scale-125 filter drop-shadow-[0_0_60px_rgba(139,92,246,0.45)]"
                        />
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#09080f] via-transparent to-[#09080f]"></div>
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at center, transparent 20%, #09080f 78%)" }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-2xl mb-16 space-y-3">
                    <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-white">
                        Architected for Every Reality
                    </h2>
                    <p className="font-body text-[#94a3b8] text-base">
                        Unified intelligence primitives built to span synthetic game
                        engines, physical robotics, and high-frequency real-time inference.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, idx) => (
                        <div key={idx} className="violet-border-glow rounded-2xl bg-[#0e0e14]/85 backdrop-blur-md border border-[#8b5cf6]/25 shadow-[0_12px_36px_-8px_rgba(0,0,0,0.85)] p-8 flex flex-col justify-between space-y-8 group transition-all duration-300">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/35 flex items-center justify-center text-[#c084fc] shadow-[0_0_16px_rgba(168,85,247,0.25)] group-hover:scale-105 group-hover:border-purple-400 transition-transform">
                                        <span className="material-symbols-outlined text-[26px]">
                                            {pillar.icon}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="font-sans text-xl font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
                                    {pillar.title}
                                </h3>
                                <p className="font-body text-sm text-[#94a3b8] leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}