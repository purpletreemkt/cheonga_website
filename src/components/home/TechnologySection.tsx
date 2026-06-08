import Image from "next/image";
import SectionLabel from "@/components/home/SectionLabel";

export default function TechnologySection() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      {/* 배경 이미지 */}
      <Image
        src="/image/tech.jpg"
        alt=""
        fill
        className="-z-20 object-cover"
        sizes="100vw"
      />
      {/* 딥블루 그라데이션 (상단 진함 → 하단으로 갈수록 옅어져 배경이 도드라짐) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26,27,75,0.96) 0%, rgba(26,27,75,0.7) 45%, rgba(26,27,75,0.25) 100%)",
        }}
      />

      <div className="container-content py-24 text-center md:py-36">
        <SectionLabel>Technology &amp; Solutions</SectionLabel>
        <h2 className="mt-3 text-[44px] font-bold tracking-[-0.01em] leading-[1.5]">
          청아무역의 기술력으로
          <br />
          수산물 가공의 새로운 길을 열다
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          첨단 기술을 활용해 수산물 가공 운영을 혁신하세요.
          <br />
          스마트 데이터화부터 정밀 모니터링까지, 효율성과 혁신을 제공합니다.
        </p>

        {/* 기술 소개 영상 */}
        <video
          className="mx-auto mt-10 aspect-video w-full max-w-4xl rounded-lg object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/tech.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
