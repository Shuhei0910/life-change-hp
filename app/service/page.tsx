import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'サービス一覧 | 合同会社ライフチェンジ',
  description: '松戸市・流山市・柏市の住宅設備工事なら合同会社ライフチェンジ。エアコン取付・給湯器交換・コンロ取付・その他電気設備工事に対応。年間4,000台以上の施工実績。',
}

const services = [
  {
    href: '/service/aircon',
    icon: 'ac_unit',
    en: 'Air Conditioner',
    title: 'エアコン取付・取外し',
    desc: '家庭用・業務用エアコンの新規設置・移設・撤去。第二種電気工事士による確実な施工。2.2kW以下¥18,480〜。',
    price: '18,480円〜',
    badge: '最も人気',
  },
  {
    href: '/service/kyutoki',
    icon: 'water_heater',
    en: 'Water Heater',
    title: '給湯器取付・交換',
    desc: 'リンナイ・ノーリツ・パロマ等、主要メーカー対応。突然の故障も最短当日対応。¥55,000〜。',
    price: '55,000円〜',
    badge: '当日対応可',
  },
  {
    href: '/service/conro',
    icon: 'cooking',
    en: 'Gas/IH Stove',
    title: 'コンロ取付・IH切替',
    desc: 'ガスコンロからIHへの切替、ビルトインコンロ交換。電気工事からワンストップ対応。¥13,200〜。',
    price: '13,200円〜',
    badge: null,
  },
  {
    href: '/service/other',
    icon: 'handyman',
    en: 'Other Work',
    title: 'その他住宅設備工事',
    desc: '換気扇交換・照明器具交換・コンセント増設・電気容量アップなど幅広く対応します。¥8,800〜。',
    price: '8,800円〜',
    badge: null,
  },
]

const points: { icon: string; title: string; body: React.ReactNode }[] = [
  { icon: 'verified', title: '有資格プロが施工', body: <>第二種電気工事士など<br />国家資格保有者が担当</> },
  { icon: 'speed', title: '最短当日対応', body: <>急なトラブルにも<br />松戸市拠点から迅速対応</> },
  { icon: 'receipt_long', title: '明朗会計', body: <>事前見積もり必須。<br />追加費用は必ずご確認後</> },
  { icon: 'recycling', title: '旧機器処分まで', body: <>取外し〜処分まで<br />ワンストップ対応</> },
]

export default function ServicePage() {
  return (
    <>
      {/* Hero */}
      <header className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="md:w-2/3">
            <span className="inline-block px-4 py-1 bg-secondary-container/10 text-secondary-container font-bold text-xs mb-4 tracking-widest uppercase font-label">
              Services
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white font-headline leading-tight mb-6">
              サービス一覧
            </h1>
            <p className="text-on-primary-container text-lg leading-relaxed max-w-xl">
              エアコン・給湯器・コンロの設置から、<br />
              その他住宅設備工事まで幅広く対応。<br />
              松戸市・流山市・柏市を中心に出張します。
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none flex items-center justify-end">
          <span className="material-symbols-outlined text-[20rem] text-white">home_repair_service</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-20 space-y-20">

        {/* Services */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-surface-container-lowest p-10 hover:bg-primary transition-all duration-300 relative"
              >
                {s.badge && (
                  <span className="absolute top-6 right-6 text-xs font-bold bg-secondary-container text-on-secondary-container px-3 py-1">
                    {s.badge}
                  </span>
                )}
                <span className="text-xs font-bold tracking-widest text-on-surface-variant/50 group-hover:text-white/40 uppercase font-label block mb-3">
                  {s.en}
                </span>
                <div className="flex items-start gap-5 mb-5">
                  <span
                    className="material-symbols-outlined text-3xl text-secondary-container group-hover:text-secondary-container shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {s.icon}
                  </span>
                  <h2 className="text-2xl font-black text-primary group-hover:text-white font-headline leading-tight">
                    {s.title}
                  </h2>
                </div>
                <p className="text-sm text-on-surface-variant group-hover:text-white/70 leading-relaxed mb-6">
                  {s.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-headline text-2xl font-black text-primary group-hover:text-white">
                    {s.price}
                  </span>
                  <span className="material-symbols-outlined text-primary group-hover:text-white group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why us */}
        <section>
          <div className="mb-12">
            <span className="text-secondary-container font-black tracking-widest text-sm uppercase block mb-3 font-label">Why Choose Us</span>
            <h2 className="text-4xl font-black text-primary font-headline">選ばれる理由</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant/20">
            {points.map((p, i) => (
              <div key={i} className="bg-surface-container-lowest p-8 text-center">
                <span
                  className="material-symbols-outlined text-3xl text-secondary-container mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {p.icon}
                </span>
                <h3 className="font-bold text-primary mb-2 text-sm">{p.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-white p-10 md:p-16 text-center">
          <h2 className="text-3xl font-black font-headline mb-4">まずはお気軽にご相談ください</h2>
          <p className="text-on-primary-container mb-8 max-w-lg mx-auto leading-relaxed">
            現地調査・お見積もりは無料。松戸市・流山市・柏市対応。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:050-5536-8619"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-10 py-4 font-bold hover:bg-surface-container-low transition-all"
            >
              <span className="material-symbols-outlined text-sm">call</span>
              050-5536-8619
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container px-10 py-4 font-bold hover:brightness-110 transition-all"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              無料見積もりを依頼する
            </Link>
          </div>
        </section>
      </main>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex">
        <a
          href="tel:050-5536-8619"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-primary text-white py-3 font-label font-bold text-sm"
        >
          <span className="material-symbols-outlined text-base">call</span>
          電話で相談
        </a>
        <Link
          href="/contact"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-secondary-container text-on-secondary-container py-3 font-label font-bold text-sm"
        >
          <span className="material-symbols-outlined text-base">mail</span>
          見積もり依頼
        </Link>
      </div>
    </>
  )
}
