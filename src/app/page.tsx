import Reveal from "@/components/Reveal";
import Hero from "@/components/home/Hero";
import ServiceSection from "@/components/home/ServiceSection";
import TechnologySection from "@/components/home/TechnologySection";
import SmartDataSection from "@/components/home/SmartDataSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      {/* 히어로 → Service 스크롤 덮기 (CSS sticky 기반)
          히어로가 상단에 고정되고, 그 위로 Service가 슬라이드 오버.
          prefers-reduced-motion 시 sticky 해제 → 일반 스크롤 */}
      <div className="relative">
        <div className="sticky top-0 z-0 motion-reduce:static">
          <Hero />
        </div>
        <div className="relative z-10">
          <ServiceSection />
        </div>
      </div>
      <Reveal>
        <TechnologySection />
      </Reveal>
      <Reveal>
        <SmartDataSection />
      </Reveal>
      <Reveal>
        <CtaBanner />
      </Reveal>
    </>
  );
}
