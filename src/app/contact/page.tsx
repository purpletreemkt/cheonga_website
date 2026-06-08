import type { Metadata } from "next";
import SubHero from "@/components/SubHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "온라인문의 | 청아무역",
};

export default function ContactPage() {
  return (
    <>
      {/* 1. 서브 히어로 */}
      <SubHero
        title="문의"
        breadcrumbLabel="온라인 문의"
        bgImage="/image/문의하기_타이틀.jpg"
      />

      <section className="container-content py-20 md:py-28">
        {/* 2. 중앙 정렬 제목 */}
        <Reveal>
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              궁금하신 사항이 있으신가요?
            </h2>
          </div>
        </Reveal>

        {/* 3. 문의 폼 */}
        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
