# 合同会社ひとのわ コーポレートサイト

「食を通じて、人と人をつなぐ。」— ひとのわ本体のコーポレートサイト。

- Next.js 16（App Router / `output: export` 静的サイト）/ Tailwind v4 / TypeScript
- Google AI Studio のプロトタイプを移植したもの
- 本番: **hitono-wa.com**（GitHub Pages で公開）

## 開発

```bash
npm install
npm run dev -- --port 3200   # http://localhost:3200
```

## ビルド

```bash
npm run build   # out/ に静的書き出し
```

## デプロイ

`main` に push すると GitHub Actions（`.github/workflows/deploy.yml`）が
ビルドして GitHub Pages に公開する。ドメイン設定・DNS は `AGENTS.md` を参照。

## よく編集するところ

`src/config/site.ts` … 屋号表記・代表者・連絡先・会社概要・ナビ・SEO の一元管理。
`src/components/*Section.tsx` … 各セクションの本文。
