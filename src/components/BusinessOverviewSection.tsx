import { ArrowDownRight } from "lucide-react";
import { CateringIcon, ProductDevIcon, BusinessDevIcon } from "./BusinessIcons";

const businesses = [
  {
    num: "01",
    title: "ケータリング",
    tagline: "法人向けオードブル・各種ケータリング",
    icon: <CateringIcon size={64} />,
    points: ["社内レセプション・懇親会", "役員会・重要ゲスト向け特別席", "空間演出と出来立ての温もり"],
    href: "#catering",
  },
  {
    num: "02",
    title: "商品開発・製造",
    tagline: "オリジナル商品の企画・製造・冷凍食品開発",
    icon: <ProductDevIcon size={64} />,
    points: ["独自レシピの設計と試作検証", "急速冷凍技術を活用した品質保持", "PB／OEM製品の受託製造"],
    href: "#product",
  },
  {
    num: "03",
    title: "事業開発・支援",
    tagline: "新規事業の企画・仕組みづくり・支援",
    icon: <BusinessDevIcon size={64} />,
    points: ["食ビジネスのコンセプト設計", "厨房・調理オペレーション構築", "食を通じたコミュニティ支援"],
    href: "#business-dev",
  },
];

export function BusinessOverviewSection() {
  return (
    <section
      id="business"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAF8F3] border-t border-[#F0ECE1]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[12px] font-semibold tracking-[0.3em] text-[#EFA00B] uppercase">
            BUSINESS
          </span>
          <h2 className="font-mincho text-2xl sm:text-3xl lg:text-4xl text-ink mt-2 tracking-wider">
            3つの事業
          </h2>
          <p className="text-xs sm:text-sm text-[#707078] font-sans-jp mt-3">
            食の提供から、プロダクトの創出、ビジネスモデルの構築まで
          </p>
          <div className="w-8 h-[1.5px] bg-[#EFA00B] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 lg:divide-x lg:divide-[#E5DFD0]">
          {businesses.map((biz) => (
            <div
              key={biz.num}
              className="flex flex-col items-center text-center px-6 lg:px-10 py-6 sm:py-8 group transition-all duration-300"
            >
              <div className="text-xs font-mono font-bold text-[#EFA00B] tracking-widest mb-4">
                {biz.num}
              </div>
              <div className="h-20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                {biz.icon}
              </div>
              <h3 className="font-mincho text-xl sm:text-2xl text-ink font-semibold mb-2 tracking-wide">
                {biz.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#EFA00B] font-medium tracking-wide mb-6 font-sans-jp">
                {biz.tagline}
              </p>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#55555D] font-sans-jp leading-relaxed mb-8 flex-1">
                {biz.points.map((pt) => (
                  <li key={pt} className="flex items-center justify-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#EFA00B]" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <a
                href={biz.href}
                className="inline-flex items-center gap-1 text-xs font-medium text-ink group-hover:text-[#EFA00B] transition-colors border-b border-[#D8D2C4] pb-0.5"
              >
                <span>詳しく見る</span>
                <ArrowDownRight size={14} className="text-[#EFA00B]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
