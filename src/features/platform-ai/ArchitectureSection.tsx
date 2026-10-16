import { useEffect, useRef, useState } from "react";

interface PipelineStage {
    id: string;
    stepNumber: string;
    shortTag: string;
    title: string;
    desc: string;
}

const pipelineStages: PipelineStage[] = [
    {
        id: "STAGE 01 // INGRESS",
        stepNumber: "01",
        shortTag: "INGRESS",
        title: "Environment Interface",
        desc: "Explores how interfaces could connect simulated or physical environments to shared-memory data paths for exchanging observations and actions.",
    },
    {
        id: "STAGE 02 // KERNEL",
        stepNumber: "02",
        shortTag: "KERNEL",
        title: "Runtime Engine",
        desc: "Considers how state synchronization, tick coordination, rollback, and scheduling could support repeatable evaluations across different systems.",
    },
    {
        id: "STAGE 03 // INFERENCE",
        stepNumber: "03",
        shortTag: "INFERENCE",
        title: "AI Services Pool",
        desc: "Explores model orchestration, multimodal perception, and policy evaluation as components of a reusable AI services layer.",
    },
    {
        id: "STAGE 04 // EGRESS",
        stepNumber: "04",
        shortTag: "EGRESS",
        title: "Gateway & Registry",
        desc: "Examines how a gateway could validate schemas, apply policy rules, and record events before passing actions to downstream systems.",
    },
];

export default function ArchitectureSection() {
    const [activeStep, setActiveStep] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let animationFrameId: number;

        const particleCount = 42;
        const colors = [
            "rgba(192, 132, 252, ",
            "rgba(168, 85, 247, ",
            "rgba(216, 180, 254, ",
            "rgba(56, 189, 248, ",
        ];

        function resize() {
            if (!canvas || !canvas.parentElement) return;
            const rect = canvas.parentElement.getBoundingClientRect();
            width = canvas.width = rect.width;
            height = canvas.height = rect.height;
        }

        class Particle {
            x = 0;
            y = 0;
            vx = 0;
            vy = 0;
            radius = 0;
            baseAlpha = 0;
            alpha = 0;
            pulseSpeed = 0;
            pulseOffset = 0;
            color = "";

            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * (width || 1000);
                this.y = Math.random() * (height || 600);
                this.vx = (Math.random() - 0.5) * 0.45;
                this.vy = (Math.random() - 0.5) * 0.45;
                this.radius = Math.random() * 2.2 + 1;
                this.baseAlpha = Math.random() * 0.55 + 0.25;
                this.alpha = this.baseAlpha;
                this.pulseSpeed = Math.random() * 0.03 + 0.01;
                this.pulseOffset = Math.random() * Math.PI * 2;
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update(t: number) {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < -20) this.x = width + 20;
                else if (this.x > width + 20) this.x = -20;
                if (this.y < -20) this.y = height + 20;
                else if (this.y > height + 20) this.y = -20;

                this.alpha = this.baseAlpha + Math.sin(t * this.pulseSpeed + this.pulseOffset) * 0.2;
            }

            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color + Math.max(0.05, this.alpha) + ")";
                ctx.shadowBlur = this.radius * 5;
                ctx.shadowColor = this.color + "0.9)";
                ctx.fill();
                ctx.restore();
            }
        }

        resize();
        const particles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        let time = 0;
        function render() {
            time++;
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            const maxDistance = 140;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        const alpha = (1 - dist / maxDistance) * 0.25;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();

                        if ((i + j + Math.floor(time / 20)) % 18 === 0) {
                            const progress = (time * 0.02) % 1;
                            const px = particles[i].x + (particles[j].x - particles[i].x) * progress;
                            const py = particles[i].y + (particles[j].y - particles[i].y) * progress;
                            ctx.beginPath();
                            ctx.arc(px, py, 1.8, 0, Math.PI * 2);
                            ctx.fillStyle = "rgba(216, 180, 254, 0.9)";
                            ctx.shadowBlur = 8;
                            ctx.shadowColor = "rgba(192, 132, 252, 1)";
                            ctx.fill();
                        }
                    }
                }
            }

            for (let i = 0; i < particles.length; i++) {
                particles[i].update(time);
                particles[i].draw();
            }

            animationFrameId = requestAnimationFrame(render);
        }

        window.addEventListener("resize", resize);
        render();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const stage = pipelineStages[activeStep];

    return (
        <section className="w-full bg-[#07070a] py-24 relative overflow-hidden" id="architecture">
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.38)_0%,rgba(139,92,246,0.22)_45%,transparent_75%)] rounded-full blur-[90px] energy-surge"></div>
                <div className="absolute bottom-0 right-1/4 w-[750px] h-[500px] bg-purple-600/25 rounded-full blur-[110px] energy-surge" style={{ animationDelay: "2.5s" }}></div>
                <div className="absolute top-1/3 left-10 w-[550px] h-[450px] bg-violet-900/30 rounded-full blur-[100px]"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-70 mix-blend-screen overflow-hidden">
                    <div className="relative w-full h-full constellation-drift flex justify-center items-center">
                        <img
                            alt="Platform topology concept"
                            src="/images/topology-mesh.png"
                            className="w-full h-full object-cover object-center filter contrast-125 brightness-125 scale-105"
                        />
                    </div>
                </div>

                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-85 mix-blend-screen"></canvas>

                <div className="absolute inset-0 bg-[radial-gradient(rgba(168,85,247,0.18)_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-70 pointer-events-none topology-grid-drift"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#07070a] via-transparent to-[#07070a] pointer-events-none opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#07070a]/90 via-transparent to-[#07070a]/90 pointer-events-none"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-3 max-w-2xl">
                        <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-md">
                            Platform Architecture Flow
                        </h2>
                        <p className="font-body text-[#94a3b8] text-base leading-relaxed">
                        A conceptual four-stage view of how environments, runtime scheduling, and AI services could fit together.
                        </p>
                    </div>
                </div>

                <div className="w-full mb-10" id="pipeline-stepper">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {pipelineStages.map((p, idx) => {
                            const isActive = activeStep === idx;
                            return (
                                <button
                                    key={p.id}
                                    type="button"
                                    onClick={() => setActiveStep(idx)}
                                    aria-pressed={isActive}
                                    className={`step-btn group text-left p-4 rounded-xl transition-all flex flex-col justify-between cursor-pointer ${isActive
                                        ? "active border border-[#c084fc] bg-purple-950/40 shadow-[0_0_20px_rgba(168,85,247,0.25)] scale-[1.02]"
                                        : "border border-purple-900/40 bg-[#0e0e14]/60 hover:bg-purple-950/30 hover:border-purple-500/40"
                                        }`}
                                >
                                    <div className="flex items-center justify-between font-mono text-xs mb-2">
                                        <span className={`font-bold ${isActive ? "text-[#c084fc]" : "text-[#64748b]"}`}>
                                            {p.stepNumber}
                                        </span>
                                        <span className={`text-[10px] tracking-wider uppercase ${isActive ? "text-purple-300 font-semibold" : "text-[#64748b]"}`}>
                                            {p.shortTag}
                                        </span>
                                    </div>
                                    <div className={`font-sans text-sm md:text-base font-bold transition-colors ${isActive ? "text-white" : "text-[#cbd5e1] group-hover:text-white"}`}>
                                        {p.title}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    <div className="lg:col-span-7 flex flex-col">
                        <div className="h-full rounded-2xl bg-[#0c0d12]/90 border border-purple-500/30 p-6 md:p-8 backdrop-blur-xl relative overflow-hidden shadow-[0_16px_48px_-12px_rgba(0,0,0,0.95)] flex flex-col justify-between space-y-6">
                            <div className="absolute -top-16 -right-16 w-56 h-56 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>

                            <div className="space-y-5 relative z-10" aria-live="polite">
                                <div>
                                    <h3 className="font-sans text-2xl font-bold text-white tracking-tight mb-3" id="inspector-title">
                                        {stage.title}
                                    </h3>
                                    <p className="font-body text-sm text-[#cbd5e1] leading-relaxed" id="inspector-desc">
                                        {stage.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col space-y-3 justify-between">
                        <button
                            type="button"
                            onClick={() => setActiveStep(0)}
                            aria-pressed={activeStep === 0}
                            className={`w-full text-left p-4 rounded-xl bg-[#0c0d12]/85 border backdrop-blur-md flex items-center justify-between font-mono shadow-md transition-all cursor-pointer ${activeStep === 0
                                ? "border-[#c084fc] bg-purple-950/30"
                                : "border-purple-500/20 hover:border-purple-400/40"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <span className="w-7 h-7 rounded-lg bg-purple-950/50 border border-purple-800/40 text-[#c084fc] font-bold text-xs flex items-center justify-center">
                                    01
                                </span>
                                <div>
                                    <div className="text-white text-xs font-bold font-sans">
                                        Environment Interface
                                    </div>
                                    <div className="text-[11px] text-[#64748b]">Observations &amp; actions</div>
                                </div>
                            </div>
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveStep(1)}
                            aria-pressed={activeStep === 1}
                            className={`w-full text-left p-4 rounded-xl bg-[#0c0d12]/85 border backdrop-blur-md flex items-center justify-between font-mono shadow-md transition-all cursor-pointer ${activeStep === 1
                                ? "border-[#c084fc] bg-purple-950/30"
                                : "border-purple-500/20 hover:border-purple-400/40"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <span className="w-7 h-7 rounded-lg bg-purple-950/50 border border-purple-800/40 text-[#c084fc] font-bold text-xs flex items-center justify-center">
                                    02
                                </span>
                                <div>
                                    <div className="text-white text-xs font-bold font-sans">
                                        Runtime Coordination
                                    </div>
                                    <div className="text-[11px] text-[#64748b]">Scheduling &amp; state</div>
                                </div>
                            </div>
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveStep(2)}
                            aria-pressed={activeStep === 2}
                            className={`w-full text-left p-4 rounded-xl bg-[#0c0d12]/85 border backdrop-blur-md flex items-center justify-between font-mono shadow-md transition-all cursor-pointer ${activeStep === 2
                                ? "border-[#c084fc] bg-purple-950/30"
                                : "border-purple-500/20 hover:border-purple-400/40"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <span className="w-7 h-7 rounded-lg bg-purple-950/50 border border-purple-800/40 text-[#c084fc] font-bold text-xs flex items-center justify-center">
                                    03
                                </span>
                                <div>
                                    <div className="text-white text-xs font-bold font-sans">
                                        AI Services
                                    </div>
                                    <div className="text-[11px] text-[#64748b]">Models &amp; evaluation</div>
                                </div>
                            </div>
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveStep(3)}
                            aria-pressed={activeStep === 3}
                            className={`w-full text-left p-4 rounded-xl bg-[#0c0d12]/85 border backdrop-blur-md flex items-center justify-between font-mono shadow-md transition-all cursor-pointer ${activeStep === 3
                                ? "border-[#c084fc] bg-purple-950/30"
                                : "border-purple-500/20 hover:border-purple-400/40"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <span className="w-7 h-7 rounded-lg bg-purple-950/50 border border-purple-800/40 text-[#c084fc] font-bold text-xs flex items-center justify-center">
                                    04
                                </span>
                                <div>
                                    <div className="text-white text-xs font-bold font-sans">
                                        Gateway &amp; Policy
                                    </div>
                                    <div className="text-[11px] text-[#64748b]">Validation &amp; records</div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}