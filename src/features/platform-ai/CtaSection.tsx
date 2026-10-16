export default function CtaSection() {
    return (
        <section className="w-full py-20 relative overflow-hidden" id="cta">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/30 to-black pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-b from-[#110e1e] to-[#07070a] p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden shadow-[0_0_80px_-20px_rgba(168,85,247,0.4)]">
                    <div className="relative w-40 h-40 mb-2 flex items-center justify-center">
                        <img
                            alt="DERYK Cybernetic Vision"
                            src="/images/cybernetic-vision.png"
                            className="w-full h-full object-contain filter drop-shadow-[0_0_24px_rgba(168,85,247,0.9)]"
                        />
                    </div>

                    <h2 className="font-sans text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Start Building with DERYK
                    </h2>

                    <div className="font-mono text-xs sm:text-[13px] tracking-[0.2em] text-purple-300/80 mt-5 mb-8 uppercase">
                        Real Intelligence. Real World.
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <a
                            className="btn-violet-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-[15px] tracking-wide"
                            href="#contact"
                        >
                            <span>Contact DERYK</span>
                            <span className="text-lg">→</span>
                        </a>
                    </div>

                    <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.15em] text-[#64748b] mt-8 uppercase">
                        Early SDK Access &bull; Private Cluster Sandbox
                    </div>
                </div>
            </div>
        </section>
    );
}