"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "default" | "hover" | "text";

export default function CustomCursor() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<Variant>("default");

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
      // 동작 줄이기: 트레일 없이 즉시 따라옴
      if (reduced) {
        place(ringRef.current, mouseX, mouseY);
        place(glowRef.current, mouseX, mouseY);
      }
    };

    const tick = () => {
      // 큰 원은 lerp로 부드럽게, 글로우는 더 느리게 따라옴
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      glowX += (mouseX - glowX) * 0.1;
      glowY += (mouseY - glowY) * 0.1;
      place(ringRef.current, ringX, ringY);
      place(glowRef.current, glowX, glowY);
      raf = requestAnimationFrame(tick);
    };
    if (!reduced) raf = requestAnimationFrame(tick);

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (!t) return;
      if (t.closest("input, textarea, select, [contenteditable='true']")) {
        setVariant("text");
      } else if (t.closest("a, button, [role='button'], label")) {
        setVariant("hover");
      } else {
        setVariant("default");
      }
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

  const hidden = variant === "text";

  return (
    <>
      {/* 방사형 글로우 (가장 아래 레이어) */}
      <div
        ref={glowRef}
        aria-hidden
        className={`pointer-events-none fixed top-0 left-0 z-[9998] h-[340px] w-[340px] rounded-full transition-opacity duration-300 ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(80,130,235,0.45) 0%, rgba(124,92,236,0.22) 38%, rgba(43,108,176,0) 70%)",
          filter: "blur(24px)",
          mixBlendMode: "screen",
        }}
      />
      {/* 중심 점 */}
      <div
        ref={dotRef}
        aria-hidden
        className={`bg-brand-blue pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 rounded-full transition-opacity duration-200 ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* 따라오는 큰 원 */}
      <div
        ref={ringRef}
        aria-hidden
        className={`border-brand-blue/50 pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border transition-[width,height,background-color,opacity] duration-300 ease-out ${
          hidden ? "opacity-0" : "opacity-100"
        } ${variant === "hover" ? "bg-brand-blue/10 h-12 w-12" : "h-8 w-8"}`}
      />
    </>
  );
}
