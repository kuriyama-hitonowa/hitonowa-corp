const values = [
  {
    num: "01",
    title: "場をつくる",
    en: "Gathering Space",
    desc: "食卓を囲むひとときが、堅苦しい垣根を取り払い、自然な対話と信頼を生み出します。",
  },
  {
    num: "02",
    title: "商品を生み出す",
    en: "Product Creation",
    desc: "企画から調理・冷凍技術まで、確かな味と持続可能な品質で新しい食の価値を具現化します。",
  },
  {
    num: "03",
    title: "人をつなぐ",
    en: "Human Connection",
    desc: "食べる人、つくる人、事業を育てる人が有機的につながる循環の輪を広げます。",
  },
  {
    num: "04",
    title: "事業を支援する",
    en: "Business Synergy",
    desc: "食の現場感と仕組み化の知見を掛け合わせ、実効性のある新しい食ビジネスを伴走します。",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-canvas border-t border-[#F2EEE6]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[12px] font-semibold tracking-[0.3em] text-[#EFA00B] uppercase">
            ABOUT
          </span>
          <h2 className="font-mincho text-2xl sm:text-3xl lg:text-4xl text-ink mt-2 tracking-wider">
            ひとのわについて
          </h2>
          <div className="w-8 h-[1.5px] bg-[#EFA00B] mx-auto mt-4" />
        </div>

        <div className="bg-[#FAF8F2] border border-[#ECE5D8] rounded-2xl p-8 sm:p-12 lg:p-14 text-center max-w-4xl mx-auto shadow-[0_4px_24px_rgba(0,0,0,0.015)]">
          <p className="font-mincho text-xl sm:text-2xl md:text-[1.75rem] text-ink leading-[1.6] sm:leading-[1.65] font-medium tracking-wide">
            ひとのわは、食を起点に
            <br className="hidden sm:inline" />
            人と人がつながる場をつくり、
            <br />
            新しい価値と未来を生み出す会社です。
          </p>

          <div className="w-12 h-[1px] bg-[#D8D2C4] mx-auto my-8" />

          <p className="text-[#55555C] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans-jp font-light">
            私たちは、単なる食品の調理・配送にとどまる会社ではありません。
            <br className="hidden sm:inline" />
            食をひとつの豊かな「メディア（媒介）」と捉え、企業内のコミュニケーション創出、
            独自の冷凍・加工技術を活かしたオリジナル商品開発、そして食領域の新規事業支援まで、
            人・企業・社会を温かく結びつけていきます。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-20">
          {values.map((v) => (
            <div
              key={v.num}
              className="p-6 bg-white border border-[#EFEBE1] rounded-xl hover:border-[#EFA00B]/60 transition-all duration-300 group"
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#EFA00B] tracking-wider">
                  {v.num}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#9E9EA6]">
                  {v.en}
                </span>
              </div>
              <h3 className="font-mincho text-lg text-ink font-semibold mb-2">{v.title}</h3>
              <p className="text-xs sm:text-[13px] text-[#63636B] leading-relaxed font-sans-jp">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
