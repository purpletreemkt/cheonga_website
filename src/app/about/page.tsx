import type { Metadata } from "next";
import Image from "next/image";
import SubHero from "@/components/SubHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "대표인사말 | 청아무역",
};

const DIRECTIONS = [
  "수산물 공급 불균형을 조절할 수 있는 통합 가공 플랫폼 구축",
  "AI 기반 원료 분석을 통한 가공 결과 예측 및 시뮬레이션",
  "스마트 가공 시스템을 활용한 효율적이고 유연한 생산 공정 운영",
  "MES(생산관리시스템)를 통한 최적의 생산성과 품질 관리 실현",
];

export default function AboutPage() {
  return (
    <>
      {/* 1. 서브 히어로 */}
      <SubHero title="대표인사말" bgImage="/image/회사소개.jpg" />

      {/* 2. 대표이사 인사말 (1단 세로 흐름) */}
      <section className="container-content py-20 md:py-28">
        <Reveal className="mx-auto max-w-3xl">
          {/* 서두 인사 */}
          <h2 className="text-2xl leading-snug font-bold sm:text-3xl">
            안녕하십니까.
            <br />
            (주)청아 SP&amp;T 대표이사 하영룡입니다.
          </h2>

          {/* 도입 강조 문단 */}
          <p className="text-foreground mt-10 text-lg leading-relaxed font-semibold sm:text-xl">
            저는 지난 38년간 수산물 유통과 수산물 1차 가공 분야에 종사하며,
            수산업이 안고 있는 구조적인 문제들을 끊임없이 고민해 왔습니다.
          </p>

          {/* 본문 문단 1~2 */}
          <div className="text-text-muted mt-8 space-y-6 leading-relaxed">
            <p>
              수산물은 생산량의 변동이 크고, 공급 과잉 시에는 신속한 처리와 가공이
              필수적입니다. 이를 위해서는 대규모 시설과 전문 인력을 상시 유지해야
              하지만, 원료 공급 감소나 비수기에는 공장 가동률 저하로 인한 막대한
              비용 부담이 발생합니다.
            </p>
            <p>
              또한 원료 수산물의 품질과 규격이 일정하지 않아 수요에 적합한 원료를
              확보하기 어렵고, 가공 이후에는 필요한 제품이 부족하거나 반대로 과잉
              생산되는 문제가 반복되어 왔습니다. 여기에 소비자 요구의 다양화로 생산
              공정은 더욱 복잡해지고 있으며, 가공 기술 자체는 쉽게 모방될 수 있어
              투입된 비용과 노력에 비해 정당한 가치를 인정받기 어려운 현실도
              존재합니다.
            </p>
          </div>

          {/* 소제목 */}
          <h3 className="mt-14 text-xl leading-snug font-bold sm:text-2xl">
            이러한 문제를 해결하기 위해 저는 오랜 시간 다음과 같은 방향을 구상해
            왔습니다.
          </h3>

          {/* 4개 방향 항목 (강조 카드 + 번호) */}
          <ol className="mt-8 space-y-4">
            {DIRECTIONS.map((text, i) => (
              <li
                key={i}
                className="bg-sky-bg flex items-start gap-4 rounded-xl p-5 md:p-6"
              >
                <span className="bg-brand-blue flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-foreground pt-1 leading-relaxed font-medium">
                  {text}
                </p>
              </li>
            ))}
          </ol>

          {/* 본문 문단 3~6 */}
          <div className="text-text-muted mt-14 space-y-6 leading-relaxed">
            <p>
              하지만 이러한 시스템을 단일 기업이 구축하고 운영하기에는 과도한 투자와
              부담이 따를 수밖에 없었습니다.
            </p>
            <p>
              그래서 저는 화장품 산업의 콜마(Kolmar), 코스맥스(COSMAX)와 같은 전문
              OEM·ODM 기업 모델에 주목하였고, 이를 수산업에 접목한{" "}
              <span className="text-brand-blue font-semibold">
                &lsquo;수산 전문 OEM·ODM 위탁가공 플랫폼&rsquo;
              </span>
              을 구축하고자 5년 전부터 생산기술과 운영 시스템에 대한 연구·개발을
              지속해 왔습니다.
            </p>
            <p>
              그동안 끊임없는 연구개발과 생산 시스템 고도화를 통해 현재는 다양한
              고객사의 요구에 대응할 수 있는 전문 생산기술과 운영 시스템을 갖추게
              되었습니다.
            </p>
            <p>
              <span className="text-foreground font-semibold">(주)청아 SP&amp;T</span>
              는 수산물 유통업체는 물론, 새로운 수산 가공제품을 개발하고자 하는 기업,
              프랜차이즈 및 전문 외식업체, 그리고 수산식품 사업을 시작하려는 모든
              분들께 최적의 OEM·ODM 서비스를 제공하고 있습니다.
            </p>
          </div>

          {/* 핵심 메시지 (임팩트 강조) */}
          <p className="border-brand-blue text-foreground mt-14 border-l-4 pl-6 text-xl leading-relaxed font-bold sm:text-2xl">
            소량 주문부터 대규모 생산까지, 고객의 규모와 관계없이 최고의 품질과
            서비스로 함께 성장하는 파트너가 되겠습니다.
          </p>

          {/* 마무리 문단 */}
          <div className="text-text-muted mt-12 space-y-6 leading-relaxed">
            <p>
              앞으로도 수산 가공 산업의 새로운 기준을 만들어가며 고객 여러분의 성공을
              위해 최선을 다하겠습니다.
            </p>
            <p>감사합니다.</p>
          </div>

          {/* 서명 (오른쪽 정렬) */}
          <div className="mt-14 text-right">
            <p className="text-foreground text-lg font-semibold">
              (주)청아 SP&amp;T 대표이사 하영룡
            </p>
            <Image
              src="/image/sign.png"
              alt="대표이사 하영룡 서명"
              width={99}
              height={47}
              className="mt-3 ml-auto h-12 w-auto"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
