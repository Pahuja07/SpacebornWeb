import HeroSection from "./HeroSection";
import PillarsSection from "./PillarsSection";
import ArchitectureSection from "./ArchitectureSection";
import TelemetryTopologySection from "./TelemetryTopologySection";

export function PlatformAIPage() {
    return (
        <div className="platform-ai-page w-full min-h-screen bg-[#07070a] text-white">
            <HeroSection />
            <PillarsSection />
            <ArchitectureSection />
            <TelemetryTopologySection />
        </div>
    );
}