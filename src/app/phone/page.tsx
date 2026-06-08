import type { Metadata } from "next";
import SubHero from "@/components/SubHero";

export const metadata: Metadata = {
  title: "전화문의 | 청아무역",
};

export default function PhonePage() {
  return (
    <>
      <SubHero title="전화문의" />
      <section className="container-content py-20 md:py-28">
        {/* TODO: 전화문의 내용 */}
        <p className="text-text-muted text-center">페이지 준비 중입니다.</p>
      </section>
    </>
  );
}
