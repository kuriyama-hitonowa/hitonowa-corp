import { site } from "@/config/site";

/**
 * Organization 構造化データ。会社情報は site.ts と同期。
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brand.legalName,
    alternateName: site.brand.legalNameLatin,
    url: site.seo.siteUrl,
    email: site.contact.email,
    telephone: site.contact.tel,
    description: site.seo.description,
    address: {
      "@type": "PostalAddress",
      addressRegion: "東京都",
      addressCountry: "JP",
    },
    founder: {
      "@type": "Person",
      name: site.representative.name,
    },
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
