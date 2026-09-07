import { site } from "@/config/site";

export function CompanySection() {
  const companyInfo: { label: string; value: React.ReactNode }[] = [
    { label: "会社名", value: `${site.brand.legalName}（${site.brand.legalNameLatin}）` },
    {
      label: "代表者",
      value: `${site.representative.title}　${site.representative.name}（${site.representative.nameLatin}）`,
    },
    {
      label: "事業内容",
      value: (
        <ul className="space-y-1.5 list-none">
          {site.company.businessLines.map((line, i) => (
            <li key={line}>
              {i + 1}. {line}
            </li>
          ))}
        </ul>
      ),
    },
    { label: "所在地", value: site.company.location },
    { label: "主要取引先", value: site.company.clients },
    {
      label: "連絡先",
      value: (
        <div className="space-y-1">
          <div>Email: {site.contact.email}</div>
          <div>Tel: {site.contact.tel}</div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="company"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-canvas border-t border-[#F2EEE6]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[12px] font-semibold tracking-[0.3em] text-[#EFA00B] uppercase">
            COMPANY
          </span>
          <h2 className="font-mincho text-2xl sm:text-3xl lg:text-4xl text-ink mt-2 tracking-wider">
            会社概要
          </h2>
          <div className="w-8 h-[1.5px] bg-[#EFA00B] mx-auto mt-4" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-6 sm:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.015)]">
            <dl className="divide-y divide-[#F2EDE4]">
              {companyInfo.map((item) => (
                <div
                  key={item.label}
                  className="py-4.5 sm:py-5 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4"
                >
                  <dt className="text-xs font-semibold text-[#8A8A92] font-sans-jp tracking-wider">
                    {item.label}
                  </dt>
                  <dd className="sm:col-span-2 text-xs sm:text-sm text-[#2C2C30] font-sans-jp leading-relaxed">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          {site.company.isPlaceholder && (
            <p className="text-[11px] text-[#A8A29A] font-sans-jp mt-3 text-center">
              ※ 一部の情報は準備中の暫定表記です。
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
