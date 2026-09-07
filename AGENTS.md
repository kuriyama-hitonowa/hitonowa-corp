<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 合同会社ひとのわ コーポレートサイト（hitonowa-corp）

ひとのわ**本体**の恒久コーポレートサイト。信用獲得が目的。
「食を通じて、人と人をつなぐ。」ケータリング／商品開発・製造／事業開発・支援の3事業を束ねる。

※ `hitonowa-app\corporate-site`（法人向けオードブル配達の**屋号サイト**）とは別プロジェクト・別リポジトリ。
   屋号サイトは使い捨て前提のテンプレ、こちらは会社本体で恒久。混同しない。

## 構成
- Next.js 16 App Router / `output: "export"`（静的サイト） / Tailwind v4 / TypeScript / Turbopack
- Google AI Studio で作成したプロトタイプ（Vite + React）を移植したもの
- 1ページ（LP）構成。`src/app/page.tsx` が全セクションを組み立てる
- `src/config/site.ts` … **差し替え前提の値の唯一の設定元**。屋号表記・代表者・連絡先・
  会社概要・ナビ・SEO をここで一元管理。`isPlaceholder: true` は「一部ダミー・後で差し替え」の暫定値。
- アニメーションは `motion`（旧 framer-motion）、アイコンは `lucide-react` と自作SVG（`BusinessIcons.tsx`）
- フォント: `next/font/google` で Shippori Mincho（見出し明朝）／ Noto Sans JP ／ Plus Jakarta Sans
- 配色トークンは `src/app/globals.css` の `@theme`（`--color-canvas` 温白 / `--color-ink` 墨 / gold #EFA00B）

## セクション（`src/components/*Section.tsx`）
Hero → About（4つの柱）→ BusinessOverview（3事業）→ Catering（シーン切替タブ・client）→
ProductDev（4ステップ）→ BusinessDev → Philosophy → Company（会社概要）→ Contact（フォーム）

## お問い合わせフォーム
`src/config/site.ts` の `contact.formEndpoint` が空の間は送信ボタン無効・「準備中」表示。
メール／電話の直リンクは常時表示。エンドポイント（例: Formspree 等）を設定すると
JSON を POST して送信する。サーバーコードは無い（静的サイト）。

## 開発
```
npm run dev -- --port 3200   # 3000 は company-app-v1 と衝突するため別ポート
npm run build                # out/ に静的書き出し
npx eslint .
```
セッションの primary CWD が company-app-v1 の場合、preview_start の name 解決が
そちらを見るため、dev サーバーは手動起動 →`preview_start({url})` で開く。

## デプロイ
- GitHub Pages（`.github/workflows/deploy.yml`）。main への push で `npm run build` →
  `out/` を Pages に公開。`public/CNAME`（hitono-wa.com）と `public/.nojekyll` 同梱。
- 本番ドメイン **hitono-wa.com**（Squarespace がドメイン管理＝DNS ホスト、Google Workspace 稼働中）。
  ネームサーバーは移さず、Squarespace の DNS で Web レコードだけ GitHub Pages に向ける。
  **MX（smtp.google.com）・SPF/DKIM/DMARC の TXT は絶対に触らない**（メール停止事故）。
  - 置き換え: `A @` 4件（Squarespace IP）→ 185.199.108-111.153 / `CNAME www` → `<user>.github.io`
  - 削除: `HTTPS @`（Squarespace 用）

## 残タスク
- 代表者情報のうち**所在地・電話番号**の確定（代表者名「小川 裕」と Email は確定済み）
- OG画像を用意（現状 `public/images/dining-scene.jpg` を流用）
- お問い合わせフォームの送信先 `site.contact.formEndpoint` を設定
- favicon / ロゴ画像（現状は文字ロゴのみ）
- 必要なら `robots.ts` / `sitemap.ts` を追加
