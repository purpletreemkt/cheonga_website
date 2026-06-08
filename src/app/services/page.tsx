import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import SubHero from "@/components/SubHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "스마트 생산관리 시스템 | 청아무역",
};

type ServiceItem = {
  no: string;
  title: string;
  desc: ReactNode;
  image: string;
};

const ITEMS: ServiceItem[] = [
  {
    no: "01",
    title: "자동 공수 산출",
    desc: "정확한 데이터 기반으로 작업공수를 산출하여 생산계획과 원가관리를 최적화합니다.",
    image: "/image/스마트1.jpg",
  },
  {
    no: "02",
    title: "실시간 공정 모니터링",
    desc: (
      <>
        생산 현황과 설비 데이터를 실시간으로 수집·관리하여{" "}
        <span className="text-brand-blue">신속한 의사결정을 지원</span>합니다.
      </>
    ),
    image: "/image/스마트2.jpg",
  },
  {
    no: "03",
    title: "AI 데이터 분석 및 이력관리",
    desc: "생산 데이터를 분석하여 품질 향상과 생산성 개선을 지원하며, 작업 이력 추적으로 공정의 투명성과 추적성을 확보합니다.",
    image: "/image/스마트3.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* 1. 서브 히어로 */}
      <SubHero title="스마트 생산관리 시스템" bgImage="/image/스마트_타이틀.jpg" />

      <section className="container-content py-20 md:py-28">
        {/* 2. 중앙 정렬 제목 */}
        <Reveal>
          <div className="text-center">
            <h2 className="text-2xl leading-snug font-bold sm:text-3xl md:text-4xl">
              작업공수 산출부터 생산현황 모니터링, AI 기반 데이터 분석까지
              <br />
              생산 전 과정을 디지털화하여 생산성과 품질을 향상시키고
              <br />
              체계적인 이력관리를 지원합니다.
            </h2>
          </div>
        </Reveal>

        {/* 3. 01/02/03 지그재그 배치 */}
        <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
          {ITEMS.map((item, i) => {
            const imageRight = i % 2 === 1; // 02 → 이미지 오른쪽
            return (
              <Reveal
                key={item.no}
                delay={i * 100}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                {/* 이미지 */}
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden rounded-lg ${imageRight ? "md:order-2" : ""}`}
                >
                  <Image
                    src={item.image}
                    alt={typeof item.title === "string" ? item.title : ""}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>

                {/* 텍스트 블록 */}
                <div className={imageRight ? "md:order-1" : ""}>
                  <span className="text-7xl font-bold text-gray-200">
                    {item.no}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-text-muted mt-4 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
