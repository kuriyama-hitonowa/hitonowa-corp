#!/usr/bin/env bash
# ==========================================================================
#  AI Studio（Vite + React）のエクスポートを、この Next.js リポジトリへ取り込む。
#
#  使い方:
#    1. AI Studio で Download → zip を展開
#    2. bash scripts/sync-from-aistudio.sh <展開したフォルダのパス>
#    3. git diff で確認 → npm run build → 問題なければ commit / push
#
#  やること:
#   - src/components/*.tsx を丸ごと置き換え（AI Studio が設計の正）
#   - 全コンポーネント先頭に "use client"（静的サイトなので無害・確実）
#   - DiningTableIllustration だけ next/image 版パッチに差し替え
#   - ヒーロー画像を src/assets/hero-illustration.jpg に固定名でコピー
#   - src/App.tsx → src/app/page.tsx（import パスと関数名を調整）
#   - src/index.css → src/app/globals.css（フォントは next/font 版の雛形を使用）
#
#  触らないもの: next.config.ts / layout.tsx / config/site.ts / .github / public
# ==========================================================================
set -euo pipefail

SRC="${1:?使い方: bash scripts/sync-from-aistudio.sh <AI Studio 展開フォルダ>}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

[ -d "$SRC/src/components" ] || { echo "エラー: $SRC/src/components が見つかりません"; exit 1; }

echo "▶ コンポーネントをコピー"
rm -f "$ROOT"/src/components/*.tsx
cp "$SRC"/src/components/*.tsx "$ROOT"/src/components/

echo "▶ 全コンポーネントに \"use client\" を付与"
for f in "$ROOT"/src/components/*.tsx; do
  head -1 "$f" | grep -q 'use client' || { printf '"use client";\n\n%s' "$(cat "$f")" > "$f"; }
done

echo "▶ ヒーロー画像を固定名でコピー"
img_rel="$(grep -oE "\.\./assets/images/[A-Za-z0-9_.-]+" "$SRC/src/components/DiningTableIllustration.tsx" | head -1 | sed 's#\.\./assets/images/##')"
if [ -n "${img_rel:-}" ] && [ -f "$SRC/src/assets/images/$img_rel" ]; then
  cp "$SRC/src/assets/images/$img_rel" "$ROOT/src/assets/hero-illustration.jpg"
  echo "   $img_rel -> src/assets/hero-illustration.jpg"
else
  echo "   ⚠ ヒーロー画像を特定できませんでした。src/assets/hero-illustration.jpg を手動確認"
fi
# OG 用にもう一枚（あれば）
[ -f "$SRC/src/assets/images/hitonowa_dining_scene_1787299553443.jpg" ] && \
  cp "$SRC/src/assets/images/hitonowa_dining_scene_1787299553443.jpg" "$ROOT/public/images/og.jpg" || true

echo "▶ ローカル管理のコンポーネントを patch 版で上書き"
#   DiningTableIllustration … next/image 版（basePath 対応）
#   CompanySection          … 表の中身は src/config/site.ts が正
cp "$ROOT/scripts/patches/DiningTableIllustration.tsx" "$ROOT/src/components/DiningTableIllustration.tsx"
cp "$ROOT/scripts/patches/CompanySection.tsx" "$ROOT/src/components/CompanySection.tsx"

echo "▶ App.tsx -> src/app/page.tsx"
{
  echo '"use client";'
  echo
  sed -e "s#from '\./components/#from '@/components/#g" \
      -e 's#export default function App#export default function Home#' \
      "$SRC/src/App.tsx"
} > "$ROOT/src/app/page.tsx"

echo "▶ index.css -> src/app/globals.css"
cp "$ROOT/scripts/patches/globals.css" "$ROOT/src/app/globals.css"

echo "▶ AI Studio 側が古い値のままの箇所を確定値へ置換（保険・正しければ no-op）"
#   Philosophy 署名・Contact 完了メッセージなど、まだ AI Studio 管理のファイル向け。
#   会社概要（CompanySection）は上で patch 上書き済みなので対象外。
sed -i \
  -e 's/小川 裕/栗山 元貴/g' \
  -e 's/Yutaka Ogawa/Motoki Kuriyama/g' \
  -e 's/y\.ogawa@hitono-wa\.com/info@hitono-wa.com/g' \
  -e 's/担当の小川より/担当より/g' \
  "$ROOT"/src/components/*.tsx
sed -i '/お急ぎの場合はお電話（090-3515-3864）でも承っております。/d' "$ROOT/src/components/ContactSection.tsx"

echo
echo "✅ 完了。次に:"
echo "   git diff --stat"
echo "   npm run build"
echo "   （背景色など globals.css / DiningTableIllustration の見た目は AI Studio 追従で手調整）"
