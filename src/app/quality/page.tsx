import type { Metadata } from "next";
import Image from "next/image";
import SubHero from "@/components/SubHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "품질관리 | 청아무역",
};

type QualityItem = {
  no: string;
  title: string;
  desc: string;
  image: string;
};

const ITEMS: QualityItem[] = [
  {
    no: "01",
    title: "입고 품질검증",
    desc: "원료 및 부자재의 규격과 품질 적합성을 검증하여 생산 품질의 기준을 확보합니다.",
    image: "/image/품질관리1.jpg",
  },
  {
    no: "02",
    title: "공정 품질검사",
    desc: "생산 공정의 품질 데이터를 지속적으로 점검하고 정기적인 미생물 검사를 통해 제품의 안전성과 품질 안정성을 확보합니다.",
    image: "/image/품질관리2.jpg",
  },
  {
    no: "03",
    title: "완제품 검사 및 이력관리",
    desc: "출하 전 최종 품질검사와 생산·검사 이력 관리를 통해 제품의 신뢰성과 추적성을 제공합니다.",
    image: "/image/품질관리3.jpg",
  },
];

export default function QualityPage() {
  return (
    <>
      {/* 1. 서브 히어로 */}
      <SubHero title="품질관리" bgImage="/image/품질관리_타이틀.jpg" />

      <section className="container-content py-20 md:py-28">
        {/* 2. 중앙 정렬 제목 */}
        <Reveal>
          <div className="text-center">
            <h2 className="text-2xl leading-snug font-bold sm:text-3xl md:text-4xl">
              입고부터 생산, 출하까지 전 과정의 품질 데이터를 체계적으로
              <br />
              관리하여 안정적인 품질과 고객 신뢰를 제공합니다.
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
                    alt={item.title}
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
