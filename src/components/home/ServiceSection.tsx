"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionLabel from "@/components/home/SectionLabel";

const SLIDE_MS = 3000; // 자동 슬라이드 간격

type ServiceCard = {
  no: string;
  title: string;
  /** 접힌 카드에서 줄바꿈해 표시할 제목 */
  titleLines: string[];
  desc: string;
  image: string;
};

const CARDS: ServiceCard[] = [
  {
    no: "01",
    title: "실시간 작업현황 체크",
    titleLines: ["실시간 작업현황", "체크"],
    desc: "실시간으로 작업진행 현황을 체크하세요",
    image: "/image/service1.png",
  },
  {
    no: "02",
    title: "스마트 공정 데이터 분석",
    titleLines: ["스마트 공정", "데이터 분석"],
    desc: "원자재에서 완제품까지, 실시간으로 공정을 확인하세요",
    image: "/image/service2.png",
  },
  {
    no: "03",
    title: "디테일 작업 분석",
    titleLines: ["디테일 작업 분석"],
    desc: "작업상황을 분석, 관리하며, 수익성을 극대화 합니다",
    image: "/image/service3.png",
  },
];

export default function ServiceSection() {
  const [active, setActive] = useState(0); // 기본 01 펼침
  const [reduced, setReduced] = useState(false); // 동작 줄이기

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // 자동 슬라이드 진행은 활성 프로그레스 바의 CSS 애니메이션 종료(onAnimationEnd)로 구동
  // → 별도 타이머 없이 막대 채워짐과 자동 동기화 (cleanup 불필요)
  const advance = () => setActive((a) => (a + 1) % CARDS.length);

  return (
    <section className="flex min-h-screen flex-col justify-center rounded-t-[36px] bg-white shadow-[0_-8px_28px_-8px_rgba(0,0,0,0.18)]">
      <div className="mx-auto w-full max-w-[1600px] px-6 pt-28 pb-20 lg:px-8">
        {/* 상단: 라벨/제목 + 설명/링크 */}
        <div className="grid gap-8 md:grid-cols-2 md:items-stretch">
          {/* 제목: 위쪽 정렬 유지 */}
          <div>
            <SectionLabel>Service</SectionLabel>
            <h2 className="mt-3 text-[44px] font-bold tracking-[-0.01em] leading-[1.5]">
              (주)청아 SP&amp;T는 수산가공 산업의
              <br />
              과제를 해결하는 전문 파트너입니다.
            </h2>
          </div>
          {/* View More: 세로 하단 + 오른쪽 정렬 */}
          <div className="flex flex-col justify-end">
            <Link
              href="/services"
              className="text-brand-blue hover:text-navy mt-4 self-end text-lg font-medium transition-colors"
            >
              View More →
            </Link>
          </div>
        </div>

        {/* 하단: 클릭 기반 가로 아코디언 카드 */}
        <div className="mt-14 flex h-[440px] w-full items-stretch gap-5 md:h-[560px]">
          {CARDS.map((card, i) => {
            const expanded = active === i;
            return (
              <div
                key={card.no}
                role="button"
                tabIndex={0}
                aria-expanded={expanded}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
                className={`relative cursor-pointer overflow-hidden rounded-lg border border-gray-200 ${
                  expanded ? "flex-[4]" : "flex-[1] min-w-[120px]"
                }`}
              >
                {expanded ? (
                  // 펼친 상태: 이미지 + 제목 + 설명
                  <div className="flex h-full flex-col p-8">
                    <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-md">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 60vw, 100vw"
                      />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold whitespace-nowrap">
                      {card.title}
                    </h3>
                    <p className="text-text-muted mt-2 text-lg whitespace-nowrap">
                      {card.desc}
                    </p>
                  </div>
                ) : (
                  // 접힌 상태: 번호(상단) + 제목(하단)
                  <div className="flex h-full flex-col justify-between p-8">
                    <span className="text-6xl font-bold text-gray-300">
                      {card.no}
                    </span>
                    <h3 className="text-xl font-semibold">
                      {card.titleLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </h3>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 프로그레스 바 인디케이터 (인스타 스토리 스타일) */}
        <div className="mt-8 flex w-full gap-2">
          {CARDS.map((card, i) => (
            <button
              key={card.no}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${card.title} 보기`}
              className="h-1 flex-1 overflow-hidden rounded-full bg-gray-200"
            >
              <span
                key={`${i}-${active}`}
                onAnimationEnd={
                  i === active && !reduced ? advance : undefined
                }
                className="bg-brand-blue block h-full rounded-full"
                style={
                  i < active
                    ? { width: "100%" }
                    : i === active
                      ? reduced
                        ? { width: "100%" }
                        : {
                            width: "0%",
                            animation: `service-bar-fill ${SLIDE_MS}ms linear forwards`,
                          }
                      : { width: "0%" }
                }
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
