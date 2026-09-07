/**
 * ============================================================================
 *  サイト全体の設定ファイル（ここ1箇所を編集すれば全ページに反映されます）
 * ============================================================================
 *
 *  合同会社ひとのわ（hitonowa LLC）のコーポレートサイト。
 *  食を通じて、人と人をつなぐ。ケータリング／商品開発・製造／事業開発・支援。
 *
 *  ★ isPlaceholder: true が付いた値は「一部ダミー・後で差し替え」の暫定値です。
 *    確定したら値を書き換え、isPlaceholder を false にしてください。
 *    （代表者名・メール・電話番号・所在地などが該当）
 */

export interface Placeholder {
  /** 暫定値なら true */
  isPlaceholder: boolean;
}

export const site = {
  /* ---------------------------------------------------------------------- */
  /*  ブランド                                                               */
  /* ---------------------------------------------------------------------- */
  brand: {
    /** 欧文ロゴ表記（前半 + 後半でゴールドの塗り分け） */
    logoLead: "hitono",
    logoTail: "wa",
    /** 正式名称 */
    legalName: "合同会社ひとのわ",
    legalNameLatin: "hitonowa LLC",
    /** タグライン（1要素＝1行） */
    tagline: ["食を通じて、", "人と人をつなぐ。"],
    /** 会社紹介文（Hero・About 共通） */
    description:
      "ひとのわは、食を起点に人と人がつながる場をつくり、新しい価値と未来を生み出す会社です。",
  },

  /* ---------------------------------------------------------------------- */
  /*  代表者（★一部ダミー・後で差し替え）                                    */
  /* ---------------------------------------------------------------------- */
  representative: {
    title: "代表社員",
    name: "小川 裕",
    nameLatin: "Yutaka Ogawa",
    isPlaceholder: true,
  } as { title: string; name: string; nameLatin: string } & Placeholder,

  /* ---------------------------------------------------------------------- */
  /*  連絡先（★一部ダミー・後で差し替え）                                    */
  /* ---------------------------------------------------------------------- */
  contact: {
    email: "y.ogawa@hitono-wa.com",
    tel: "090-3515-3864",
    /** お問い合わせフォームの送信先。未設定（空文字）の間は送信ボタンが無効。 */
    formEndpoint: "",
    /** 返信目安 */
    replyWithin: "2営業日以内",
    isPlaceholder: true,
  } as {
    email: string;
    tel: string;
    formEndpoint: string;
    replyWithin: string;
  } & Placeholder,

  /* ---------------------------------------------------------------------- */
  /*  会社概要（★一部ダミー・後で差し替え）                                  */
  /* ---------------------------------------------------------------------- */
  company: {
    location: "東京都（キッチンアトリエ・オフィス）",
    clients:
      "事業会社、IT企業、イベントプロデュース会社、食品メーカー ほか",
    businessLines: [
      "法人向けケータリング及びオードブルの企画・調理・提供",
      "オリジナル食品・加工品・冷凍商品の企画開発・製造",
      "飲食及び食品関連の新規事業開発・業務設計・運営支援",
    ],
    isPlaceholder: true,
  } as {
    location: string;
    clients: string;
    businessLines: string[];
  } & Placeholder,

  /* ---------------------------------------------------------------------- */
  /*  ナビゲーション（ヘッダー／フッター共通）                                */
  /* ---------------------------------------------------------------------- */
  nav: [
    { label: "ABOUT", href: "#about", sub: "ひとのわについて" },
    { label: "BUSINESS", href: "#business", sub: "3つの事業" },
    { label: "CATERING", href: "#catering", sub: "ケータリング" },
    { label: "PRODUCT", href: "#product", sub: "商品開発・製造" },
    { label: "BUSINESS DEV", href: "#business-dev", sub: "事業開発・支援" },
    { label: "PHILOSOPHY", href: "#philosophy", sub: "想い・価値観" },
    { label: "COMPANY", href: "#company", sub: "会社概要" },
  ],

  /* ---------------------------------------------------------------------- */
  /*  SEO                                                                    */
  /* ---------------------------------------------------------------------- */
  seo: {
    // 本番ドメイン（Squarespace 管理・Google Workspace 稼働中）
    siteUrl: "https://hitono-wa.com",
    title: "合同会社ひとのわ | hitonowa - 食を通じて、人と人をつなぐ。",
    description:
      "ひとのわは、食を起点に人と人がつながる場をつくり、新しい価値と未来を生み出す会社です。ケータリング、商品開発・製造、事業開発・支援を展開。",
    ogImage: "/images/dining-scene.jpg",
    keywords: [
      "ひとのわ",
      "hitonowa",
      "法人ケータリング",
      "オードブル",
      "冷凍食品開発",
      "OEM",
      "食の事業開発",
    ],
    isPlaceholder: true,
  },
} as const;

export type Site = typeof site;
