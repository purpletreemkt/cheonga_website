import Link from "next/link";

/** 로고에 표시할 브랜드명 (추후 실제 로고 이미지로 교체) */
const LOGO_TEXT = "청아씨푸드";

type LogoProps = {
  /** 텍스트 색상 등 추가 클래스 (배경에 따라 지정). 예: "text-white", "text-navy" */
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 text-lg font-bold ${className}`}
    >
      {/* TODO: 실제 로고 이미지로 교체 — next/image <Image src="/logo.svg" ... /> */}
      <svg
        aria-hidden="true"
        viewBox="0 0 26 24"
        className="h-5 w-6"
        fill="none"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* 색상 버전: 파랑 2 + 빨강 1 (추후 실제 로고 이미지로 교체) */}
        <path className="stroke-[#1A81E9]" d="M2 5l6 7-6 7" />
        <path className="stroke-[#1A81E9]" d="M9 5l6 7-6 7" />
        <path className="stroke-[#E11D2A]" d="M16 5l6 7-6 7" />
      </svg>
      <span>{LOGO_TEXT}</span>
    </Link>
  );
}
