export type NavItem = {
  label: string;
  /** 상위 메뉴(드롭다운 부모)는 href 없이 children만 가질 수 있음 */
  href?: string;
  children?: NavItem[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "회사소개", href: "/about" },
  { label: "품질관리", href: "/quality" },
  { label: "스마트 생산관리 시스템", href: "/services" },
  {
    label: "문의하기",
    children: [
      { label: "고객 지원", href: "/support" },
      { label: "전화문의", href: "/phone" },
      { label: "온라인문의", href: "/contact" },
    ],
  },
];

/** 푸터 전용 메뉴 (헤더 메뉴와 구성이 다름) */
export const FOOTER_MENU: NavItem[] = [
  { label: "회사소개", href: "/about" },
  { label: "스마트 데이터 수산물 가공 시스템", href: "/services" },
  { label: "문의/상담하기", href: "/contact" },
];

export const SITE_NAME = "청아무역";

/** 회사 정보 (추후 실제 값으로 미세 조정) */
export const COMPANY_INFO = {
  address: "부산광역시 서구 원양로 1 수산가공선진화단지 B동 608호 (암남동)",
  tel: "1544-3519",
  fax: "070-8230-3395",
  privacyManager: "임창규",
  privacyEmail: "cheongaseafood@naver.com",
};
