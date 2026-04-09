import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '会社概要 | 合同会社ライフチェンジ',
  description: '松戸市に拠点を置く住宅設備工事の専門会社。エアコン・給湯器・コンロ取付で年間4,000台以上の施工実績。',
}

const companyInfo = [
  { label: '会社名', value: '合同会社ライフチェンジ' },
  { label: '代表者', value: '徳永 弘之' },
  { label: '所在地', value: '〒270-2224\n千葉県松戸市大橋1108番地4' },
  { label: '電話番号', value: '050-5536-8619' },
  { label: '営業時間', value: '9:00〜17:00（定休日：日曜日）' },
  { label: '事業内容', value: 'エアコン取付・取外し\n給湯器交換・取付\nガスコンロ・IH取付\nその他住宅設備工事全般' },
  { label: '対応エリア', value: '松戸市・流山市・柏市を中心とした千葉県全域・東京都一部' },
  { label: '年間施工実績', value: '4,000台以上' },
]

const strengths: { icon: string; title: string; body: React.ReactNode }[] = [
  {
    icon: 'verified',
    title: '有資格のプロが施工',
    body: <>第二種電気工事士・給水装置工事主任技術者など<br />国家資格保有者が責任を持って施工します。<br />無資格業者に多い施工不良・事故のリスクがありません。</>,
  },
  {
    icon: 'schedule',
    title: '最短当日対応',
    body: <>ご連絡いただいてから最短当日の施工が可能です。<br />引越し当日のエアコン設置や、給湯器の突然の故障にも<br className="md:hidden" />素早く対応します。</>,
  },
  {
    icon: 'receipt_long',
    title: '明朗会計',
    body: <>施工前に明確なお見積もりをご提示します。<br />追加費用が発生する場合は必ず事前にご説明し、<br className="md:hidden" />ご了承いただいてから作業を進めます。</>,
  },
  {
    icon: 'recycling',
    title: '旧機器の処分もワンストップ',
    body: <>古いエアコン・給湯器の取外しから処分まで<br />一括対応します。<br />処分業者への手配など余計な手間がかかりません。</>,
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <header className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="md:w-2/3">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container/10 text-secondary-container font-bold text-xs mb-4 tracking-widest uppercase font-label">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white font-headline leading-tight mb-6">
              会社概要
            </h1>
            <p className="text-on-primary-container text-lg leading-relaxed max-w-xl">
              千葉県松戸市を拠点に、エアコン・給湯器・コンロの<br />
              住宅設備工事を専門とする会社です。<br />
              年間4,000台を超える施工実績と、有資格プロによる<br className="md:hidden" />
              確かな技術でご家庭の快適を支えます。
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none flex items-center justify-end">
          <span className="material-symbols-outlined text-[20rem] text-white">apartment</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-20 space-y-24">

        {/* Company Table */}
        <section>
          <h2 className="text-3xl font-black text-primary font-headline mb-10">会社情報</h2>
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30">
            {companyInfo.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-4 gap-0 ${i !== companyInfo.length - 1 ? 'border-b border-outline-variant/20' : ''}`}
              >
                <div className="bg-surface-container-low px-6 py-5 flex items-start">
                  <span className="text-sm font-bold text-primary">{row.label}</span>
                </div>
                <div className="md:col-span-3 px-6 py-5">
                  <p className="text-on-surface leading-relaxed whitespace-pre-line">{row.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Strengths */}
        <section>
          <div className="mb-12">
            <span className="text-secondary-container font-black tracking-widest text-sm uppercase block mb-3 font-label">
              Our Strengths
            </span>
            <h2 className="text-4xl font-black text-primary font-headline">
              選ばれる4つの理由
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((item, i) => (
              <div key={i} className="bg-surface-container-lowest p-8 rounded-xl flex gap-6">
                <div className="w-12 h-12 bg-secondary-container/10 rounded-xl flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-secondary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Qualifications CTA */}
        <section className="bg-primary text-white rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black font-headline mb-3">保有資格・許可</h2>
            <p className="text-on-primary-container leading-relaxed max-w-lg">
              当社スタッフが保有する国家資格・許認可の一覧を<br />
              ご確認いただけます。<br />
              安心してお任せいただける根拠をご覧ください。
            </p>
          </div>
          <Link
            href="/about/qualification"
            className="shrink-0 inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all"
          >
            資格一覧を見る
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-8">
          <p className="text-on-surface-variant mb-6">お見積もり・ご相談は無料です。お気軽にお声がけください。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-bold hover:brightness-110 transition-all"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              無料見積もりを依頼する
            </Link>
            <a
              href="tel:050-5536-8619"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-4 rounded-xl font-bold hover:brightness-110 transition-all"
            >
              <span className="material-symbols-outlined text-sm">call</span>
              050-5536-8619
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
