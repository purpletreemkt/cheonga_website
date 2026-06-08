import type { Metadata } from "next";
import SubHero from "@/components/SubHero";

export const metadata: Metadata = {
  title: "고객 지원 | 청아무역",
};

export default function SupportPage() {
  return (
    <>
      <SubHero title="고객 지원" />
      <section className="container-content py-20 md:py-28">
        {/* TODO: 고객 지원 내용 */}
        <p className="text-text-muted text-center">페이지 준비 중입니다.</p>
      </section>
    </>
  );
}
