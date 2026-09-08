/**
 * ============================================================================
 *  SEO・構造化データ用の設定（画面に出る本文は各コンポーネント側が正）
 * ============================================================================
 *
 *  ページの見た目・文言は AI Studio で編集 → `scripts/sync-from-aistudio.sh` で取り込む。
 *  このファイルは <head> のメタ情報と JSON-LD だけを持つ。
 *  会社概要の本文（代表者・所在地・連絡先）は src/components/CompanySection.tsx。
 *  値がずれたら、確定情報に合わせて両方を更新する。
 */

export const site = {
  /** 本番ドメイン（Squarespace 管理・Google Workspace 稼働中） */
  siteUrl: "https://hitono-wa.com",

  legalName: "合同会社ひとのわ",
  legalNameLatin: "hitonowa LLC",

  seo: {
    title: "合同会社ひとのわ | hitonowa - 食を通じて、人と人をつなぐ。",
    description:
      "ひとのわは、食を起点に人と人がつながる場をつくり、新しい価値と未来を生み出す会社です。ケータリング、商品開発・製造、事業開発・支援を展開。",
    ogImage: "/images/og.jpg",
    keywords: [
      "ひとのわ",
      "hitonowa",
      "法人ケータリング",
      "オードブル",
      "冷凍食品開発",
      "OEM",
      "食の事業開発",
    ],
  },

  /** JSON-LD 用（CompanySection.tsx と揃える。★所在地・電話は確定待ち） */
  org: {
    representativeName: "小川 裕",
    email: "y.ogawa@hitono-wa.com",
    tel: "090-3515-3864",
    addressRegion: "東京都",
  },
} as const;
