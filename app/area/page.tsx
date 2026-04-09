import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '対応エリア | 合同会社ライフチェンジ',
  description: '松戸市・流山市・柏市を中心に千葉県全域でエアコン・給湯器・コンロ取付に対応。地元密着の合同会社ライフチェンジ。',
}

const areas = [
  {
    city: '松戸市',
    href: '/area/matsudo',
    icon: 'home_pin',
    desc: '本社所在地。最短当日対応が可能なメインエリアです。',
    towns: '松戸・新松戸・馬橋・五香・常盤平・北小金 ほか',
    badge: '拠点',
  },
  {
    city: '流山市',
    href: '/area/nagareyama',
    icon: 'location_on',
    desc: '松戸市からほど近く、おおたかの森・南流山など新興住宅地への対応実績多数。',
    towns: '流山・南流山・流山おおたかの森・初石・豊四季 ほか',
    badge: null,
  },
  {
    city: '柏市',
    href: '/area/kashiwa',
    icon: 'location_on',
    desc: '柏駅周辺から増尾・逆井など郊外エリアまで対応しています。',
    towns: '柏・南柏・北柏・新柏・増尾・逆井・高柳 ほか',
    badge: null,
  },
]

export default function AreaPage() {
  return (
    <>
      <header className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="md:w-2/3">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container/10 text-secondary-container font-bold text-xs mb-4 tracking-widest uppercase font-label">
              Service Area
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white font-headline leading-tight mb-6">
              対応エリア
            </h1>
            <p className="text-on-primary-container text-lg leading-relaxed max-w-xl">
              松戸市・流山市・柏市を中心に、千葉県全域・東京都一部に対応しています。<br />
              エリア外の場合もまずはご相談ください。
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none flex items-center justify-end">
          <span className="material-symbols-outlined text-[20rem] text-white">map</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-20 space-y-20">

        {/* Main 3 areas */}
        <section>
          <div className="mb-10">
            <span className="text-secondary-container font-black tracking-widest text-sm uppercase block mb-3 font-label">Primary Areas</span>
            <h2 className="text-4xl font-black text-primary font-headline">主要対応エリア</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="bg-surface-container-lowest p-8 rounded-xl group hover:shadow-lg transition-shadow relative overflow-hidden"
              >
                {area.badge && (
                  <span className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container text-xs font-bold px-3 py-1 rounded-full">
                    {area.badge}
                  </span>
                )}
                <span
                  className="material-symbols-outlined text-3xl text-secondary-container mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {area.icon}
                </span>
                <h3 className="text-2xl font-black text-primary font-headline mb-3">{area.city}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{area.desc}</p>
                <p className="text-xs text-on-surface-variant/70 mb-6">{area.towns}</p>
                <span className="inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-2 transition-all">
                  詳しく見る
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Wider area note */}
        <section className="bg-surface-container-low rounded-2xl p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-primary font-headline mb-4">千葉県全域・東京都一部にも対応</h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                上記3市以外のエリアも対応できる場合があります。
                出張費が異なる場合がありますが、まずはお電話またはお問い合わせフォームでご確認ください。
              </p>
              <div className="space-y-3">
                {['市川市', '船橋市', '鎌ヶ谷市', '我孫子市', '野田市', '東京都北東部エリア'].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {city}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-8 text-center">
              <p className="text-sm text-on-surface-variant mb-4">エリアの確認・ご相談はこちら</p>
              <a
                href="tel:050-5536-8619"
                className="text-3xl font-black text-primary font-headline block mb-2 hover:text-secondary-container transition-colors"
              >
                050-5536-8619
              </a>
              <p className="text-xs text-on-surface-variant mb-6">9:00〜17:00（日曜休）</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-6 py-3 rounded-xl font-bold hover:brightness-110 transition-all text-sm"
              >
                メールで問い合わせる
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-black font-headline mb-4">対応エリアかどうか、まずお聞きください</h2>
          <p className="text-on-primary-container mb-8 leading-relaxed">
            掲載以外のエリアも対応できる場合があります。お気軽にご連絡ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-bold hover:brightness-110 transition-all"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              お問い合わせフォーム
            </Link>
            <a
              href="tel:050-5536-8619"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
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
