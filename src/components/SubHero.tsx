import Link from "next/link";
import Image from "next/image";

type SubHeroProps = {
  /** 페이지 제목 */
  title: string;
  /** breadcrumb 마지막 항목 (기본값: title) */
  breadcrumbLabel?: string;
  /** 배경 이미지 경로 (없으면 회색 placeholder) */
  bgImage?: string;
};

/** 하위 페이지 공통 서브 히어로 (배경 이미지 + 어두운 오버레이 + 제목 + breadcrumb) */
export default function SubHero({
  title,
  breadcrumbLabel,
  bgImage,
}: SubHeroProps) {
  const current = breadcrumbLabel ?? title;

  return (
    <section className="bg-navy relative h-[320px] overflow-hidden md:h-[420px]">
      {/* 배경 이미지 */}
      {bgImage ? (
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-gray-400" aria-hidden />
      )}
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      {/* 제목 (세로 가운데, 왼쪽) */}
      <div className="container-content relative z-10 flex h-full flex-col justify-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">{title}</h1>
      </div>

      {/* breadcrumb (하단 왼쪽) */}
      <div className="container-content absolute inset-x-0 bottom-6 z-10">
        <nav className="flex items-center gap-2 text-sm text-white/80">
          <Link
            href="/"
            aria-label="홈"
            className="transition-colors hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 10.5 12 3l9 7.5" />
              <path d="M5 9.5V21h14V9.5" />
            </svg>
          </Link>
          <span aria-hidden>›</span>
          <span className="text-white">{current}</span>
        </nav>
      </div>
    </section>
  );
}
