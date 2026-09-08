import { site } from "@/config/site";

/** Organization 構造化データ。会社情報は site.ts / CompanySection.tsx と揃える。 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.legalNameLatin,
    url: site.siteUrl,
    email: site.org.email,
    description: site.seo.description,
    address: {
      "@type": "PostalAddress",
      addressRegion: site.org.addressRegion,
      addressCountry: "JP",
    },
    founder: { "@type": "Person", name: site.org.representativeName },
    knowsAbout: [
      "法人ケータリング",
      "オードブル",
      "冷凍食品開発",
      "OEM製造",
      "食の新規事業開発",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
