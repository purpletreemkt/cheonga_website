"use client";

import { useState } from "react";
import Image from "next/image";
import SectionLabel from "@/components/home/SectionLabel";

type Detail = { subtitle: string; desc: string };
type Step = { no: string; title: string; details: Detail[] };

// 단계별 우측 이미지 (01~05)
const STEP_IMAGES = [
  "/image/smart1.jpg",
  "/image/smart2.png",
  "/image/smart3.png",
  "/image/smart4.png",
  "/image/smart5.png",
];

const STEPS: Step[] = [
  {
    no: "01",
    title: "입고",
    details: [
      {
        subtitle: "데이터 기반 예측",
        desc: "실시간 데이터는 비효율성을 식별하고 운영을 간소화하는 데 도움이 됩니다.",
      },
      {
        subtitle: "최적화된 작업 흐름",
        desc: "자동화된 모니터링을 통해 일관된 생산 속도와 가동 중지 시간 감소를 보장합니다.",
      },
      {
        subtitle: "예측 분석",
        desc: "추세를 예측하여 재고를 최적화하고 고객 요구를 충족합니다.",
      },
    ],
  },
  {
    no: "02",
    title: "생산투입",
    details: [
      {
        subtitle: "원물 등급 분류",
        desc: "입고된 원물을 데이터 기반으로 등급을 분류하여 생산 라인에 최적 배분합니다.",
      },
      {
        subtitle: "자동 투입 관리",
        desc: "실시간 재고와 주문 정보를 연동해 필요한 물량만 정확히 투입합니다.",
      },
      {
        subtitle: "손실 최소화",
        desc: "투입 단계의 데이터를 추적하여 불필요한 손실과 과투입을 방지합니다.",
      },
    ],
  },
  {
    no: "03",
    title: "가공생산",
    details: [
      {
        subtitle: "공정 표준화",
        desc: "가공 전 과정을 표준 데이터로 관리하여 일관된 품질을 유지합니다.",
      },
      {
        subtitle: "실시간 공정 제어",
        desc: "온도·시간·중량 등 핵심 지표를 실시간으로 모니터링하고 제어합니다.",
      },
      {
        subtitle: "위생 관리",
        desc: "자동화 설비와 위생 데이터 기록으로 안전한 가공 환경을 보장합니다.",
      },
    ],
  },
  {
    no: "04",
    title: "포장",
    details: [
      {
        subtitle: "규격 자동 검수",
        desc: "중량과 규격을 자동으로 측정해 포장 기준의 적합성을 확인합니다.",
      },
      {
        subtitle: "신선도 유지",
        desc: "진공·냉장 포장 데이터를 관리하여 운송 중에도 최상의 신선도를 유지합니다.",
      },
      {
        subtitle: "라벨·이력 연동",
        desc: "제품별 생산·검사 이력을 라벨에 연동해 추적성을 확보합니다.",
      },
    ],
  },
  {
    no: "05",
    title: "출고",
    details: [
      {
        subtitle: "출고 최적화",
        desc: "주문과 재고 데이터를 연동해 정확하고 신속한 출고를 지원합니다.",
      },
      {
        subtitle: "콜드체인 관리",
        desc: "출고부터 배송까지 온도 데이터를 추적하여 품질을 끝까지 보장합니다.",
      },
      {
        subtitle: "납품 이력 관리",
        desc: "전 출고 내역을 데이터로 기록해 투명한 납품 이력을 제공합니다.",
      },
    ],
  },
];

export default function SmartDataSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 기본 01 입고 펼침

  return (
    <section className="bg-white">
      <div className="container-content py-20">
        {/* 상단: 라벨/제목 + 설명 */}
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <SectionLabel>Smart Data System</SectionLabel>
            <h2 className="mt-3 text-[44px] font-bold tracking-[-0.01em] leading-[1.5]">
              생산성 향상 및 모든 단계에서
              <br />
              최고의 품질 보장
            </h2>
          </div>
          <p className="text-text-muted leading-relaxed md:mt-10 md:text-right">
            스마트 데이터 처리는 생산의 모든 단계를 최적화하는
            <br />
            첨단 기술을 통합하여 전통적인 해산물 처리를 변화시킵니다.
            <br />
            실시간 분석 및 정밀 추적을 통해 기업이 더 높은 생산성을 달성하고
            <br />
            우수한 품질 표준을 유지할 수 있도록 지원합니다.
          </p>
        </div>

        {/* 하단: 아코디언 + 생선 사진 */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-stretch">
          {/* 아코디언 */}
          <div className="border-t border-gray-200">
            {STEPS.map((step, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={step.no} className="border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-brand-blue font-bold">{step.no}</span>
                      <span className="text-lg font-semibold">{step.title}</span>
                    </span>

                    {/* 토글 아이콘: 펼침(×, 검은 원) / 접힘(+, 테두리 원) */}
                    {isOpen ? (
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          aria-hidden="true"
                        >
                          <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                      </span>
                    ) : (
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-500">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          aria-hidden="true"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    )}
                  </button>

                  {/* 펼침 내용 (부드러운 높이 전환) */}
                  <div
                    className={`grid transition-all duration-[450ms] ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mb-5 space-y-4 rounded-lg bg-gray-100 p-6">
                        {step.details.map((d) => (
                          <div key={d.subtitle}>
                            <p className="font-bold">{d.subtitle}</p>
                            <p className="text-text-muted mt-1 text-sm leading-relaxed">
                              {d.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 우측 이미지 (열린 단계에 맞춰 변경, 데스크톱은 아코디언 높이에 맞춤) */}
          <div className="relative aspect-square w-full overflow-hidden rounded-lg md:aspect-auto md:h-full">
            <Image
              src={STEP_IMAGES[openIndex ?? 0]}
              alt={`${STEPS[openIndex ?? 0].title} 이미지`}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
