import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '松戸市のエアコン・給湯器・コンロ取付 | 合同会社ライフチェンジ',
  description: '松戸市のエアコン取付・給湯器交換・コンロ取付は地元の合同会社ライフチェンジへ。最短当日対応。050-5536-8619',
}

const services = [
  { href: '/service/aircon', icon: 'ac_unit', name: 'エアコン取付・取外し', price: '¥18,480〜' },
  { href: '/service/kyutoki', icon: 'water_heater', name: '給湯器取付・交換', price: '¥55,000〜' },
  { href: '/service/conro', icon: 'outdoor_grill', name: 'コンロ・IH取付', price: '¥13,200〜' },
  { href: '/service/other', icon: 'handyman', name: 'その他住宅設備工事', price: '要相談' },
]

const areas = [
  '松戸', '新松戸', '矢切', '横須賀', '馬橋', '五香', '八柱', '常盤平',
  '小金', '幸谷', '稔台', '西馬橋', '北小金', '南流山', '東松戸', '紙敷',
]

export default function MatsudoPage() {
  return (
    <>
      <header className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="md:w-2/3">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container/10 text-secondary-container font-bold text-xs mb-4 tracking-widest uppercase font-label">
              Service Area
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white font-headline leading-tight mb-6">
              松戸市の<br />住宅設備工事
            </h1>
            <p className="text-on-primary-container text-lg leading-relaxed mb-10 max-w-xl">
              松戸市大橋に拠点を置く地元の業者です。<br />
              地域密着だから、最短当日対応が可能。<br />
              エアコン・給湯器・コンロ取付をお任せください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all">
                <span className="material-symbols-outlined text-sm">mail</span>無料見積もりを依頼する
              </Link>
              <a href="tel:050-5536-8619" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                <span className="material-symbols-outlined text-sm">call</span>今すぐ電話する
              </a>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none flex items-center justify-end">
          <span className="material-symbols-outlined text-[20rem] text-white">location_on</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-20 space-y-20">

        {/* Why local */}
        <section className="bg-secondary-container/5 border border-secondary-container/20 rounded-2xl p-10 flex gap-8 items-start">
          <span className="material-symbols-outlined text-4xl text-secondary-container shrink-0 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>home_pin</span>
          <div>
            <h2 className="text-2xl font-black text-primary font-headline mb-3">拠点は松戸市大橋。だから早い。</h2>
            <p className="text-on-surface-variant leading-relaxed">
              当社は松戸市大橋に拠点があります。<br />
              松戸市内の現場へは最短で駆けつけられるため、<br />
              緊急の給湯器トラブルや引越し当日のエアコン取付にも<br className="md:hidden" />
              最短当日対応が可能です。<br />
              地域を熟知したスタッフが対応します。
            </p>
          </div>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-3xl font-black text-primary font-headline mb-8">松戸市での対応サービス</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="bg-surface-container-lowest p-6 rounded-xl flex items-center gap-4 group hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary-container/10 rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-primary">{s.name}</p>
                  <p className="text-sm text-on-surface-variant">{s.price}</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Coverage area */}
        <section>
          <h2 className="text-3xl font-black text-primary font-headline mb-4">松戸市内の対応エリア</h2>
          <p className="text-on-surface-variant mb-6">松戸市内の全エリアに対応しています。</p>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <span key={area} className="bg-surface-container-high text-on-surface-variant px-4 py-2 rounded-full text-sm">
                {area}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-black font-headline mb-4">松戸市のお客様、お気軽にどうぞ</h2>
          <p className="text-on-primary-container mb-8 leading-relaxed">現地調査・お見積もりは無料。最短当日対応します。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-bold hover:brightness-110 transition-all">
              <span className="material-symbols-outlined text-sm">mail</span>無料見積もりを依頼する
            </Link>
            <a href="tel:050-5536-8619" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
              <span className="material-symbols-outlined text-sm">call</span>050-5536-8619
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
