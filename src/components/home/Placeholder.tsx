type PlaceholderProps = {
  /** 박스 안에 표시할 안내 텍스트 (실제 이미지 교체 전까지) */
  label?: string;
  className?: string;
  /** 어두운 배경 위에 올릴 때 (회색 대신 반투명 처리) */
  dark?: boolean;
  children?: React.ReactNode;
};

/** 실제 이미지/영상 들어가기 전 자리를 잡는 회색 placeholder 박스 */
export default function Placeholder({
  label,
  className = "",
  dark = false,
  children,
}: PlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg ${
        dark ? "bg-white/10 text-white/50" : "bg-gray-200 text-gray-400"
      } ${className}`}
    >
      {children ?? (label ? <span className="text-sm">{label}</span> : null)}
    </div>
  );
}
