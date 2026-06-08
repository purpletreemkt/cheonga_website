export default function Hero() {
  return (
    // 영상 로드 전·재생 불가 환경 대비 navy 배경
    <section className="bg-navy relative h-[100dvh] min-h-[600px] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        {/* public/videos/hero.mp4 에 영상 파일을 넣으면 재생됩니다 */}
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
