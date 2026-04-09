import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '送信完了 | 合同会社ライフチェンジ',
  description: 'お問い合わせを受け付けました。',
}

export default function ThanksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-surface px-8">
      <div className="max-w-lg w-full text-center py-24">
        <div className="w-20 h-20 bg-secondary-container/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <span
            className="material-symbols-outlined text-4xl text-secondary-container"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
        </div>

        <h1 className="text-4xl font-black text-primary font-headline mb-4">
          送信完了
        </h1>
        <p className="text-on-surface-variant leading-relaxed mb-2">
          お問い合わせありがとうございます。
        </p>
        <p className="text-on-surface-variant leading-relaxed mb-10">
          内容を確認のうえ、担当者より2営業日以内にご連絡いたします。<br />
          お急ぎの場合はお電話にてお問い合わせください。
        </p>

        <a
          href="tel:050-5536-8619"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold mb-4 hover:brightness-110 transition-all"
        >
          <span className="material-symbols-outlined text-sm">call</span>
          050-5536-8619
        </a>
        <p className="text-xs text-on-surface-variant mb-10">営業時間 9:00〜17:00（日曜休）</p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary font-bold group"
        >
          <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
          トップページへ戻る
        </Link>
      </div>
    </main>
  )
}
