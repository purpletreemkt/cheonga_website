import type { Metadata } from "next";
import Image from "next/image";
import SubHero from "@/components/SubHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "회사소개 | 청아무역",
};

export default function AboutPage() {
  return (
    <>
      {/* 1. 서브 히어로 */}
      <SubHero title="회사소개" bgImage="/image/회사소개.jpg" />

      <section className="container-content py-20 md:py-28">
        {/* 2. 인사말 제목 (중앙 정렬) */}
        <Reveal>
          <div className="text-center">
            <h2 className="text-2xl leading-snug font-bold sm:text-3xl md:text-4xl">
              맑고 바르게, 그리고 투명하게 성장하는
              <br />
              <span className="text-brand-blue">글로벌 수산물 리딩기업</span>이
              되겠습니다.
            </h2>
          </div>
        </Reveal>

        {/* 3. 영상 영역 */}
        <Reveal delay={120}>
          <video
            className="mx-auto mt-12 aspect-video w-full max-w-5xl rounded-lg object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/회사소개.mp4" type="video/mp4" />
          </video>
        </Reveal>

        {/* 4. 대표이사 인사말 (2단 그리드) */}
        <Reveal
          delay={120}
          className="mt-20 grid gap-10 md:mt-28 md:grid-cols-2 md:gap-16"
        >
          {/* 왼쪽 칼럼: 제목 + 본문 */}
          <div>
            <h3 className="text-2xl leading-snug font-bold sm:text-3xl">
              안녕하십니까?
              <br />
              (주)청아 SP&amp;T 대표이사 하영룡입니다.
            </h3>
            <div className="text-foreground mt-8 space-y-5 leading-relaxed">
              <p>
                저희 청아 홈페이지를 방문해 주신 고객 여러분 진심으로 환영합니다.
                <br />
                (주)청아 SP&amp;T 대표이사 하영룡입니다.
              </p>
              <p className="text-text-muted">
                청아 SP&amp;T은 생산, 가공, 유통 소비자의 식탁까지 신선하면서 품질을
                <br />
                최우선 가치로 여기는 장어 가공 전문기업입니다.
                <br />
                최고의 품질로 청아(淸雅) 맑고 깨끗한 제품만을 취급하는 청아 경영으로
                <br />
                수산물의 품질을 최우선의 가치로 삼고 있으며, 고객님에게 투명하고 정직하게
                <br />
                신뢰받는 기업이 되고자 항상 노력하고 있습니다.
              </p>
              <p className="text-text-muted">
                저희 회사의 공정은 깨끗하고 자동화된 공정을 갖추고 있으며, 빅데이터를 기반으로 한
                <br />
                ICT를 적용하여 디지털 자동화 솔루션이 결합한 스마트팩토리 공정시스템으로
                <br />
                불필요한 유통비용을 절감하여 경쟁력 있는 식품을 생산합니다.
              </p>
            </div>
          </div>

          {/* 오른쪽 칼럼: 본문 + 하단 서명 */}
          <div className="flex flex-col">
            <div className="text-text-muted space-y-5 leading-relaxed">
              <p>
                안정화된 공급망과 최고의 생산성을 갖추고 있으며 현재 활어와 선어를 일본의
                <br />
                전국 중앙 수산시장과 중, 도매업자 약 80업체 및 국내 약 110업체에 유통하고 있습니다.
                <br />
                청정지역인 제주, 흑산도, 기장 안흥 연안에서 잡은 신선한 자연산 붕장어를
                <br />
                통영 물량장을 통하여 입출고하고 있습니다.
              </p>
              <p>
                현재 1977년부터 바다장어 가공 유통업체로 출범한 청아무역은 지난 40년동안
                <br />
                대한민국 수산물 발전과 함께 성장해 왔으며, 글로벌 수산물 기업으로의
                <br />
                또 다른 역사를 써내려가고 있습니다. 내 가족 내 이웃을 위해 안정성이 검증된
                <br />
                식품만을 제조한다는 목표로 끊임없는 연구개발을 하고 있으며, 고객님의
                <br />
                만족과 가치를 창출하는 기업으로써 최선을 다할 것입니다.
              </p>
              <p>
                우리 청아 가족과 홈페이지를 방문해 주신 여러분께
                <br />
                다시 한번 감사드리며 우리 모두 함께 합시다.
              </p>
              <p>감사합니다.</p>
            </div>

            <div className="mt-10 text-right md:mt-auto md:pt-10">
              <p className="text-foreground text-lg font-semibold">
                대표이사 하영룡
              </p>
              <Image
                src="/image/sign.png"
                alt="대표이사 하영룡 서명"
                width={99}
                height={47}
                className="mt-3 ml-auto h-12 w-auto"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
