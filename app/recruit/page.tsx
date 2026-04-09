import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '採用情報 | 合同会社ライフチェンジ',
  description: '合同会社ライフチェンジの採用情報ページです。千葉県松戸市・流山市・柏市を中心に住宅設備工事を行っています。',
}

export default function RecruitPage() {
  return (
    <>
      {/* Hero */}
      <header className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="md:w-2/3">
            <span className="inline-block px-4 py-1 bg-secondary-container/10 text-secondary-container font-bold text-xs mb-4 tracking-widest uppercase font-label">
              Recruit
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white font-headline leading-tight mb-6">
              採用情報
            </h1>
            <p className="text-on-primary-container text-xl leading-relaxed max-w-xl font-headline">
              合同会社ライフチェンジの採用について
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none flex items-center justify-end">
          <span className="material-symbols-outlined text-[20rem] text-white">engineering</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-20">
        <section className="max-w-2xl mx-auto text-center py-16">
          <span
            className="material-symbols-outlined text-5xl text-on-surface-variant/40 mb-8 block"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            work_off
          </span>
          <h2 className="text-3xl font-black text-primary font-headline mb-6">
            只今募集は行っておりません
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-10">
            現在、新規スタッフの募集は行っておりません。<br />
            募集再開の際はこのページにてお知らせいたします。
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-bold group"
          >
            <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
            トップページへ戻る
          </Link>
        </section>
      </main>
    </>
  )
}
