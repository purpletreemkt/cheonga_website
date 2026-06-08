type VideoPlaceholderProps = {
  /** 어두운 배경 위에 올릴 때 (회색 대신 반투명 처리) */
  dark?: boolean;
  className?: string;
};

/** 16:9 영상 placeholder (가운데 재생 버튼) — 추후 실제 영상으로 교체 */
export default function VideoPlaceholder({
  dark = false,
  className = "",
}: VideoPlaceholderProps) {
  return (
    <div
      className={`flex aspect-video w-full items-center justify-center rounded-lg ${
        dark ? "bg-white/10" : "bg-gray-200"
      } ${className}`}
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90">
        <svg
          viewBox="0 0 24 24"
          className="text-navy ml-1 h-7 w-7"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </div>
  );
}
