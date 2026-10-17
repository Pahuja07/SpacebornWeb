export default function CtaSection() {
    return (
        <section
            className="w-full py-28 relative overflow-hidden bg-gradient-to-b from-[#07070a] via-[#0b0a12] to-[#07070a] border-t border-purple-900/40"
            id="cta"
        >
            {/* Ambient Background Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12)_0%,transparent_65%)] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Physical AI Style Mascot with Smooth Hover Lift & Purple Glow */}
                <div className="mascot-hover-wrap">
                    <img
                        alt="DERYK Mascot"
                        src="/images/deryk-mascot-chibi-clean.png"
                        className="mascot-hover-img"
                    />
                </div>

                {/* Main Heading */}
                <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 max-w-3xl leading-[1.12]">
                    The infrastructure behind<br className="hidden sm:block" /> intelligent applications.
                </h2>

                {/* Description Matched from Platform AI Document */}
                <p className="font-body text-[#94a3b8] text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
                    DERYK Platform AI provides reusable software capabilities and execution infrastructure for integrating AI into applications, simulations, and mission workflows.
                </p>

                {/* Solid White CTA Button */}
                <a
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-black bg-white hover:bg-gray-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-200 text-[15px]"
                    href="#contact"
                >
                    Contact DERYK
                </a>

            </div>
        </section>
    );
}