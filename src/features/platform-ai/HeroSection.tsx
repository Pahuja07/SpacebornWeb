export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[820px] lg:min-h-[890px] flex items-center overflow-hidden py-16 bg-[#07070a]">
            {/* Ambient Purple Light Field & Subtle Blueprint Grid Background */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(168,85,247,0.1)_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none"></div>
            <div className="absolute -top-32 right-1/4 w-[650px] h-[650px] bg-gradient-to-tr from-purple-700/25 via-fuchsia-600/15 to-transparent rounded-full blur-[140px] ambient-glow pointer-events-none"></div>
            <div className="absolute bottom-6 left-10 w-[480px] h-[480px] bg-violet-900/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none ambient-glow"></div>

            {/* 3D Isometric Layered Blueprint Visual & Backdrop */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-end">
                {/* Vignette & Edge Shadow Gradients */}
                <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                        background:
                            "radial-gradient(circle at 74% 50%, transparent 20%, rgba(7, 7, 10, 0.45) 55%, rgba(7, 7, 10, 0.94) 80%, #07070a 100%), linear-gradient(to right, #07070a 28%, rgba(7, 7, 10, 0.65) 52%, transparent 85%), linear-gradient(to bottom, #07070a 0%, transparent 12%, transparent 88%, #07070a 100%)",
                    }}
                ></div>

                {/* Animated Container for Layered Isometric Blueprint */}
                <div className="relative right-0 lg:-right-6 w-full lg:w-[62%] h-[640px] lg:h-[780px] max-w-[1080px] flex items-center justify-center pointer-events-none select-none z-0">
                    <div className="relative w-full h-full flex items-center justify-center animate-isometric-float">
                        <div className="relative w-full h-full flex justify-center items-center">
                            <img
                                alt="DERYK 3D Isometric Layered Blueprint Architecture"
                                src="/images/hero-isometric.png"
                                className="w-[85%] h-auto max-h-[600px] object-contain object-center scale-105 lg:scale-110 drop-shadow-[0_0_55px_rgba(168,85,247,0.55)]"
                            />
                        </div>

                        {/* Scanning beam line animation over isometric layers */}
                        <div
                            className="absolute inset-x-8 top-0 h-32 bg-gradient-to-b from-transparent via-purple-400/25 to-transparent pointer-events-none animate-scan-beam-vertical mix-blend-screen"
                            style={{
                                maskImage:
                                    "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                                WebkitMaskImage:
                                    "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                            }}
                        ></div>

                        {/* Concentric Holographic Target Rings */}
                        <div className="absolute w-[440px] h-[440px] rounded-full border border-purple-500/15 pointer-events-none pulse-glow"></div>
                        <div className="absolute w-[580px] h-[580px] rounded-full border border-dashed border-purple-400/10 pointer-events-none"></div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Typography & CTAs */}
                    <div className="lg:col-span-8 flex flex-col items-start space-y-7 relative z-10">
                        <h1 className="font-sans text-4xl sm:text-5xl lg:text-[62px] font-bold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                            Reusable intelligence for every environment.
                        </h1>
                        <p className="font-body text-base sm:text-lg text-[#cbd5e1] max-w-xl leading-relaxed drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
                            Research into reusable AI capabilities for simulated and physical
                            environments.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <a
                                className="btn-violet-gradient inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-[14px] tracking-wide shadow-[0_4px_20px_rgba(168,85,247,0.45)]"
                                href="#pillars"
                            >
                                <span>Explore Platform</span>
                                <span className="text-base">→</span>
                            </a>
                            <a
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-purple-200 text-[14px] bg-[#111018]/90 hover:bg-purple-950/50 border border-purple-500/25 hover:border-purple-400/50 transition-all duration-200 backdrop-blur-md shadow-lg"
                                href="#architecture"
                            >
                                <span>Architecture</span>
                                <span className="material-symbols-outlined text-[18px]">
                                    account_tree
                                </span>
                            </a>
                        </div>
                    </div>
                    {/* Right Column Spacer */}
                    <div className="hidden lg:block lg:col-span-4"></div>
                </div>
            </div>
        </section>
    );
}