import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'みんなの里山キャンプ場 | 合同会社ライフチェンジ',
  description: '合同会社ライフチェンジが運営する「みんなの里山キャンプ場」。千葉県松戸市近郊。自然の中でゆったりとした時間を。',
}

const features = [
  {
    icon: 'forest',
    title: '里山の豊かな自然',
    body: '都市近郊とは思えない緑豊かな里山環境。木々に囲まれた静かなキャンプ場です。',
  },
  {
    icon: 'family_restroom',
    title: 'ファミリーに優しい設計',
    body: '初めてのキャンプでも安心。スタッフが丁寧にサポートします。お子様連れでも楽しめます。',
  },
  {
    icon: 'fire_extinguisher',
    title: 'BBQ・焚き火OK',
    body: 'バーベキューや焚き火も楽しめます。薪・炭の販売もあり（一部エリア）。',
  },
  {
    icon: 'water',
    title: '水道・トイレ完備',
    body: '清潔な水道・トイレを整備しています。初心者の方も快適にご利用いただけます。',
  },
]

export default function CampPage() {
  return (
    <>
      {/* Hero */}
      <header className="pt-32 pb-0 bg-gradient-to-br from-[#1a3a1a] to-[#2d5a2d] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 pb-20 relative z-10">
          <div className="md:w-2/3">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white/80 font-bold text-xs mb-4 tracking-widest uppercase font-label">
              Camp
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white font-headline leading-tight mb-6">
              みんなの里山<br />キャンプ場
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
              合同会社ライフチェンジが運営するキャンプ場です。<br />
              都市近郊の里山で、ゆったりとした自然体験を。<br />
              ファミリーから本格キャンパーまで歓迎します。
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
              <span className="text-sm">詳細・ご予約は下記よりお問い合わせください</span>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none flex items-center justify-end">
          <span className="material-symbols-outlined text-[20rem] text-white">forest</span>
        </div>
        {/* Nature strip */}
        <div className="h-16 bg-gradient-to-b from-transparent to-surface mt-8" />
      </header>

      <main className="max-w-7xl mx-auto px-8 py-16 space-y-20">

        {/* Image grid placeholder */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              '/images/works-grid-01.jpg',
              '/images/works-grid-02.jpg',
              '/images/works-grid-03.jpg',
              '/images/works-bento-02.jpg',
              '/images/works-bento-03.jpg',
              '/images/hero-top.jpg',
            ].map((src, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto md:h-80' : 'aspect-square'}`}
              >
                <Image src={src} alt={`キャンプ場 ${i + 1}`} fill className="object-cover" />
                {i === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <p className="text-white text-xs font-bold tracking-widest opacity-60">
                      ※ 写真は施設イメージです。実際の施設写真は準備中です。
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section>
          <div className="mb-12">
            <span className="text-secondary-container font-black tracking-widest text-sm uppercase block mb-3 font-label">Features</span>
            <h2 className="text-4xl font-black text-primary font-headline">キャンプ場の特徴</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-surface-container-lowest p-8 rounded-xl flex gap-6">
                <div className="w-12 h-12 bg-[#2d5a2d]/10 rounded-xl flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-[#2d5a2d]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {f.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">{f.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Info note */}
        <section className="bg-surface-container-low rounded-2xl p-10 md:p-16">
          <div className="flex gap-6 items-start">
            <span
              className="material-symbols-outlined text-4xl text-secondary-container shrink-0 mt-1"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              construction
            </span>
            <div>
              <h2 className="text-2xl font-black text-primary font-headline mb-4">
                詳細ページ・ご予約システムは準備中です
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                みんなの里山キャンプ場の詳細情報（アクセス・料金・設備・予約方法）は現在ページ整備中です。
                ご利用をご検討の方は、お電話またはお問い合わせフォームにてお気軽にお問い合わせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container px-8 py-3 rounded-xl font-bold hover:brightness-110 transition-all"
                >
                  <span className="material-symbols-outlined text-sm">mail</span>
                  お問い合わせフォーム
                </Link>
                <a
                  href="tel:050-5536-8619"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-bold hover:brightness-110 transition-all"
                >
                  <span className="material-symbols-outlined text-sm">call</span>
                  050-5536-8619
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Company link */}
        <section className="text-center py-4">
          <p className="text-on-surface-variant text-sm mb-4">
            キャンプ場は合同会社ライフチェンジが運営しています
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary font-bold group text-sm"
          >
            会社概要を見る
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </section>
      </main>
    </>
  )
}
