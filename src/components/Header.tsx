"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "@/lib/navigation";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition-transform ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setOpenMobileSub(null);
    setOpenDropdown(null);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      {/* 플로팅 바 */}
      <div
        className={`mx-auto flex h-14 max-w-[1480px] items-center justify-between rounded-2xl px-4 shadow-lg ring-1 ring-white/10 transition-all duration-300 sm:px-6 ${
          scrolled ? "bg-navy/90 backdrop-blur-md" : "bg-navy/60 backdrop-blur"
        }`}
      >
        <Link href="/" aria-label="청아씨푸드 홈" className="flex items-center">
          <Image
            src="/image/logo_main.png"
            alt="청아씨푸드"
            width={138}
            height={25}
            priority
            className="h-6 w-auto"
          />
        </Link>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    aria-expanded={openDropdown === item.label}
                    onClick={() =>
                      setOpenDropdown((cur) =>
                        cur === item.label ? null : item.label,
                      )
                    }
                    className="flex items-center gap-1 text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                    <Chevron
                      className={openDropdown === item.label ? "rotate-180" : ""}
                    />
                  </button>

                  {/* 드롭다운 패널 */}
                  <ul
                    className={`absolute top-full left-0 z-50 mt-2 min-w-[200px] overflow-hidden rounded-xl bg-navy/95 py-2 shadow-lg ring-1 ring-white/10 backdrop-blur-md transition ${
                      openDropdown === item.label
                        ? "visible translate-y-0 opacity-100"
                        : "pointer-events-none invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href ?? "#"}
                          className="block px-4 py-3 text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href ?? "#"}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          type="button"
          className="text-white md:hidden"
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 패널 (플로팅 카드) */}
      {mobileOpen && (
        <nav className="bg-navy/95 mx-auto mt-2 max-w-[1480px] overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/10 backdrop-blur-md md:hidden">
          <ul className="flex flex-col p-2 text-sm font-medium">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <button
                    type="button"
                    aria-expanded={openMobileSub === item.label}
                    onClick={() =>
                      setOpenMobileSub((cur) =>
                        cur === item.label ? null : item.label,
                      )
                    }
                    className="flex w-full items-center justify-between px-3 py-3 text-white/80 transition-colors hover:text-white"
                  >
                    <span>{item.label}</span>
                    <Chevron
                      className={
                        openMobileSub === item.label ? "rotate-180" : ""
                      }
                    />
                  </button>
                  {openMobileSub === item.label && (
                    <ul className="border-l border-white/10 pb-2 pl-5">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href ?? "#"}
                            className="block py-2 text-white/70 transition-colors hover:text-white"
                            onClick={closeAll}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href ?? "#"}
                    className="block px-3 py-3 text-white/80 transition-colors hover:text-white"
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
