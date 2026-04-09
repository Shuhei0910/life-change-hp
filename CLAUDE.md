# ライフチェンジ HP リニューアル

## プロジェクト概要
合同会社ライフチェンジ（千葉県松戸市）のコーポレートサイトをゼロから新規制作。
完成後に `life-change2020.com` ドメインを切り替え。

## 技術スタック
- **フレームワーク**: Next.js（静的エクスポート / `output: "export"`）
- **スタイリング**: Tailwind CSS
- **ホスティング**: Netlify（無料プラン）
- **デザインツール**: Google Stitch
- **画像生成**: Nano Banana
- **リポジトリ**: GitHub（shuheiyoshida0910）

## ディレクトリ構成
```
app/
├── page.tsx              # トップ
├── service/
│   ├── page.tsx          # サービス一覧
│   ├── aircon/page.tsx   # エアコン取付
│   ├── kyutoki/page.tsx  # 給湯器取付
│   ├── conro/page.tsx    # コンロ取付
│   └── other/page.tsx    # その他工事
├── works/
│   ├── page.tsx
│   ├── aircon/page.tsx
│   ├── kyutoki/page.tsx
│   └── conro/page.tsx
├── area/
│   ├── page.tsx
│   ├── matsudo/page.tsx
│   ├── nagareyama/page.tsx
│   └── kashiwa/page.tsx
├── about/
│   ├── page.tsx
│   └── qualification/page.tsx
├── faq/page.tsx
├── recruit/page.tsx
├── camp/page.tsx
└── contact/page.tsx
components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
├── sections/             # トップページ各セクション
└── ui/                   # 共通UIコンポーネント
```

## クライアント情報
- **会社名**: 合同会社ライフチェンジ
- **代表**: 徳永弘之
- **所在地**: 〒270-2224 千葉県松戸市大橋1108番地4
- **TEL**: 050-5536-8619
- **営業時間**: 9:00〜17:00（日曜休）
- **対応エリア**: 松戸市・流山市・柏市
- **主力事業**: エアコン・給湯器・コンロ取付（年間4,000台超）
- **副業**: みんなの里山キャンプ場運営
- **Instagram**: @tokunaga10933333

## 開発ルール
- デザインはGoogle Stitchで作成 → デザインMD受け取り → コーディング
- 施工事例の写真はプレースホルダー（後日クライアントから実写真受け取り）
- `output: "export"` のため `useSearchParams` 等はSuspenseでラップ必須
- 画像は `next/image` + `unoptimized: true`
- Netlifyデプロイ: `bun run build` → `out/` を publish

## 環境変数
現状なし（静的サイトのため）

## Notionプロジェクトページ
https://www.notion.so/33daa962599881f9b9adc7435776d467

## 進捗状況
- [x] プロジェクト立ち上げ（Notion・ローカル）
- [ ] Google Stitchでデザイン作成
- [ ] コーディング
- [ ] Netlifyデプロイ・仮URL確認
- [ ] クライアント確認・修正
- [ ] ドメイン切り替え
