import { site } from "@/config/site";

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-32 sm:py-44 px-6 sm:px-8 lg:px-12 bg-[#F6F4ED] border-t border-[#EAE3D4] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#EFA00B_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-[12px] font-semibold tracking-[0.35em] text-[#EFA00B] uppercase mb-8 block">
          PHILOSOPHY
        </span>

        <h2 className="font-mincho text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] text-ink tracking-[0.12em] leading-[1.5] sm:leading-[1.45] font-normal mb-10">
          「<span className="text-[#EFA00B]">食</span>を通じて、
          <br className="sm:hidden" />
          人と人を<span className="text-[#EFA00B]">つなぐ</span>。」
        </h2>

        <div className="w-12 h-[2px] bg-[#EFA00B] mx-auto mb-12 sm:mb-16" />

        <div className="space-y-6 max-w-2xl mx-auto text-[#4A4A52] font-mincho text-sm sm:text-base md:text-lg leading-[2.2] tracking-wider font-light">
          <p>
            人は太古から、火を囲み、同じ食卓で料理を分かち合うことで、
            心を通わせ、信頼を育み、共同体を築いてきました。
          </p>
          <p>
            どんなに社会やテクノロジーが進化しても、
            美味しい料理を前にしたときに生まれる笑顔や、
            偶発的に交わされる温かな対話の価値は変わりません。
          </p>
          <p>
            ひとのわは、食を単なる消費物としてではなく、
            人と人、企業と人、現在と未来を結ぶ
            かけがえのない起点として大切にし続けます。
          </p>
        </div>

        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#E2DBD0] inline-block text-center">
          <div className="text-xs text-[#8A8A92] font-sans-jp tracking-widest uppercase mb-1">
            {site.brand.legalName} {site.representative.title}
          </div>
          <div className="font-mincho text-lg sm:text-xl text-ink tracking-widest font-normal">
            {site.representative.name}
          </div>
          <div className="text-[11px] text-[#9A9AA2] tracking-widest mt-0.5">
            {site.representative.nameLatin}
          </div>
        </div>
      </div>
    </section>
  );
}
