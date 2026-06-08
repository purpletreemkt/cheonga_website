type SectionLabelProps = {
  children: React.ReactNode;
  /** 정렬/색상 등 추가 클래스 */
  className?: string;
};

/** 섹션 상단의 파란 라벨 (예: "Service", "Technology & Solutions") */
export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <p
      className={`font-pretendard text-lg font-bold tracking-wide text-[#1A81E9] ${className}`}
    >
      {children}
    </p>
  );
}
