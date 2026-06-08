"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** 순차 등장(stagger) 지연 시간(ms) */
  delay?: number;
  /** 트리거 임계값 (0~1) */
  threshold?: number;
};

/**
 * 스크롤로 뷰포트에 들어오면 fade-in + slide-up 으로 등장.
 * - IntersectionObserver 사용, 한 번만 트리거 후 observer 해제
 * - prefers-reduced-motion 설정 시 애니메이션 없이 즉시 표시
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [instant, setInstant] = useState(false); // 동작 줄이기 → 전환 없이 표시

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 접근성: 동작 줄이기 설정 시 즉시 표시
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInstant(true);
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target); // 한 번만 트리거
          }
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${instant ? "" : "transition-all duration-[650ms] ease-out"} ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
