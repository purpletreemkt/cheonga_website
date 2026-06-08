import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO, FOOTER_MENU } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="from-white to-sky-bg bg-gradient-to-b">
      <div className="container-content py-10">
        {/* 상단: 로고 + 메뉴 */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link href="/" aria-label="청아씨푸드 홈" className="flex items-center">
            <Image
              src="/image/footer_logo.png"
              alt="청아씨푸드"
              width={138}
              height={25}
              className="h-6 w-auto"
            />
          </Link>

          <nav>
            <ul className="flex flex-wrap items-center text-sm font-medium">
              {FOOTER_MENU.map((item, i) => (
                <li
                  key={item.href}
                  className={i > 0 ? "ml-4 border-l border-gray-300 pl-4" : ""}
                >
                  <Link
                    href={item.href ?? "#"}
                    className="text-foreground transition-colors hover:text-brand-blue"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* 하단: 회사 정보 + 카피라이트 */}
        <div className="mt-8 flex flex-col gap-4 border-t border-black/5 pt-6 md:flex-row md:items-end md:justify-between">
          <div className="text-text-muted space-y-1 text-sm">
            <p>주소: {COMPANY_INFO.address}</p>
            <p>
              Tel: {COMPANY_INFO.tel}&nbsp;&nbsp;Fax: {COMPANY_INFO.fax}
              &nbsp;&nbsp;개인정보보호책임자: {COMPANY_INFO.privacyManager}(
              {COMPANY_INFO.privacyEmail})
            </p>
          </div>

          <p className="text-xs text-gray-400">
            COPYRIGHT ⓒ (주)청아 SP&amp;T. ALL RIGHT RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
