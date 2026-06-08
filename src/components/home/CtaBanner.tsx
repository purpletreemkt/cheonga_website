import Link from "next/link";
import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="container-content py-16">
      <div className="relative overflow-hidden rounded-3xl">
        {/* 전체 배경 이미지 (배 사진) */}
        <Image
          src="/image/cta.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* 가독성용 그라데이션 오버레이 (왼쪽 진함 → 오른쪽 옅음) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-black/10" />

        {/* 콘텐츠: 왼쪽 텍스트 + 오른쪽 버튼 */}
        <div className="relative z-10 flex flex-col gap-8 px-8 py-16 text-white md:flex-row md:items-center md:justify-between md:px-12 md:py-20">
          <div className="max-w-xl">
            <h2 className="text-[44px] font-bold tracking-[-0.01em] leading-[1.5]">
              궁금하신 사항이 있으신가요?
            </h2>
            <p className="mt-4 text-white/85">
              {/* TODO: 첫 줄 실제 문구로 교체 */}
              CTA 설명 첫 줄 placeholder
              <br />
              솔루션 정보, 견적 또는 여러 궁금한 사항이 있다면 언제든지
              문의해주세요
            </p>
          </div>

          <Link
            href="/contact"
            className="text-teal inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-10 py-4 font-semibold transition-colors hover:bg-white/90 md:self-auto"
          >
            문의하기
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
