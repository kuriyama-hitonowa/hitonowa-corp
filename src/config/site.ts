/**
 * ============================================================================
 *  サイトの設定（SEO・構造化データ・会社概要）
 * ============================================================================
 *
 *  ページの「見た目・キャッチコピー・各セクションの本文」は AI Studio で編集し
 *  `scripts/sync-from-aistudio.sh` で取り込む。
 *
 *  一方この site.ts が「正」なのは:
 *   - <head> のメタ情報 / OGP（seo）
 *   - JSON-LD（org）
 *   - **会社概要セクションの表**（company）… CompanySection.tsx はこの値を描画するだけ
 *
 *  会社概要を直すときはここだけ触ればよい（AI Studio 同期でも上書きされない）。
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

  /** JSON-LD（Organization）用 */
  org: {
    email: "info@hitono-wa.com",
    addressRegion: "東京都",
  },

  /**
   * 会社概要セクションの表。
   * 開業準備中なので確定した事実だけを載せる方針。
   *  - `businessLines`: 事業内容の箇条書き（確定・正確）
   *  - 主要取引先などは実績が出るまで載せない
   *  - 所在地は 1号拠点が本契約になったら「東京都大田区…」へ更新
   */
  company: {
    legalLine: "合同会社ひとのわ（hitonowa LLC）",
    businessLines: [
      "法人向けケータリング及びオードブルの企画・調理・提供",
      "オリジナル食品・加工品・冷凍商品の企画開発・製造",
      "飲食及び食品関連の新規事業開発・業務設計・運営支援",
    ],
    location: "東京都",
    email: "info@hitono-wa.com",
  },
} as const;
