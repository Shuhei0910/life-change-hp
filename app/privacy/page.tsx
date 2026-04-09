import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | 合同会社ライフチェンジ',
  description: '合同会社ライフチェンジのプライバシーポリシーです。',
}

const sections = [
  {
    title: '個人情報の収集について',
    body: '当社は、お問い合わせフォームや電話等を通じて、お名前・メールアドレス・電話番号・ご住所などの個人情報をお預かりする場合があります。',
  },
  {
    title: '個人情報の利用目的',
    body: 'お預かりした個人情報は、お問い合わせへの回答・工事の見積もり・施工スケジュールのご連絡・アフターサービスのご案内など、当社サービスの提供に必要な範囲でのみ利用いたします。',
  },
  {
    title: '第三者への提供',
    body: '当社は、法令に基づく場合を除き、お客様の同意なく第三者に個人情報を提供することはありません。',
  },
  {
    title: '個人情報の管理',
    body: '当社は、個人情報の漏洩・紛失・改ざん等を防止するため、適切なセキュリティ対策を実施します。',
  },
  {
    title: '個人情報の開示・訂正・削除',
    body: 'お客様ご自身の個人情報について、開示・訂正・削除をご希望の場合は、下記お問い合わせ先までご連絡ください。本人確認のうえ、合理的な期間内に対応いたします。',
  },
  {
    title: 'Cookieの使用',
    body: '当サイトでは、サービス向上のためCookieを使用する場合があります。ブラウザの設定によりCookieを無効にすることが可能ですが、一部機能が制限される場合があります。',
  },
  {
    title: 'プライバシーポリシーの変更',
    body: '本ポリシーは、必要に応じて改定することがあります。改定後のポリシーは当サイトに掲載した時点で効力を生じるものとします。',
  },
  {
    title: 'お問い合わせ',
    body: '個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。\n\n合同会社ライフチェンジ\n〒270-2224 千葉県松戸市大橋1108番地4\nTEL：050-5536-8619\n受付時間：9:00〜17:00（日曜休）',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <header className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-container">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-5xl font-black text-white font-headline mb-4">
            プライバシーポリシー
          </h1>
          <p className="text-on-primary-container">
            個人情報保護方針
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-8 py-20">
        <p className="text-on-surface-variant leading-relaxed mb-12">
          合同会社ライフチェンジ（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、
          以下のとおりプライバシーポリシーを定めます。
        </p>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-lg font-bold text-primary mb-3 flex items-center gap-3">
                <span className="w-7 h-7 bg-secondary-container/20 text-secondary-container rounded-full text-sm font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                {section.title}
              </h2>
              <p className="text-on-surface-variant leading-relaxed whitespace-pre-line pl-10">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-xs text-on-surface-variant">制定日：2024年1月1日</p>
      </main>
    </>
  )
}
