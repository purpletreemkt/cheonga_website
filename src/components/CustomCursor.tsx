"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], label, input, textarea, select, summary";

export default function CustomCursor() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false); // 클릭 가능 요소 위 강조 상태

  useEffect(() => {
    // 마우스(정밀 포인터)가 있는 기기에서만 활성화 — 터치 기기는 기본 동작 유지
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setEnabled(true);
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    document.documentElement.classList.add("custom-cursor-active");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let glowX = mouseX;
    let glowY = mouseY;
    let raf = 0;

    const place = (el: HTMLElement | null, x: number, y: number) => {
      if (el)
        el.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      place(dotRef.current, mouseX, mouseY);
      if (reduced) {
        place(ringRef.current, mouseX, mouseY);
        place(glowRef.current, mouseX, mouseY);
      }
    };

    const tick = () => {
      // 큰 원은 lerp로 부드럽게, 글로우는 더 느리게 따라옴
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      glowX += (mouseX - glowX) * 0.1;
      glowY += (mouseY - glowY) * 0.1;
      place(ringRef.current, ringX, ringY);
      place(glowRef.current, glowX, glowY);
      raf = requestAnimationFrame(tick);
    };
    if (!reduced) raf = requestAnimationFrame(tick);

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      setActive(!!t && !!t.closest(INTERACTIVE_SELECTOR));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* 방사형 글로우 (가장 아래 레이어, 본체를 가리지 않게 뒤에) */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-[300px] w-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(80,150,250,0.40) 0%, rgba(80,150,250,0) 70%)",
          filter: "blur(28px)",
          mixBlendMode: "screen",
        }}
      />

      {/* 따라오는 큰 원 (클릭 가능 시 커지고 또렷해짐) — blend 없이 선명 */}
      <div
        ref={ringRef}
        aria-hidden
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border-2 transition-[width,height,background-color,border-color] duration-300 ease-out ${
          active
            ? "h-14 w-14 border-[#1A81E9] bg-[#1A81E9]/20"
            : "h-9 w-9 border-[#1A81E9]/80"
        }`}
        style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.35)" }}
      />

      {/* 중심 점 (듀얼톤: 파란 코어 + 흰 외곽선 → 밝은/어두운 배경 모두 선명) */}
      <div
        ref={dotRef}
        aria-hidden
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-[#1A81E9] ring-2 ring-white/90 transition-[width,height] duration-200 ${
          active ? "h-2 w-2" : "h-2.5 w-2.5"
        }`}
      />
    </>
  );
}
