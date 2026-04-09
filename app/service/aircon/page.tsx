import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'エアコン取付・取外し | 合同会社ライフチェンジ',
  description: '松戸市・流山市・柏市のエアコン取付・取外しは合同会社ライフチェンジへ。2.2kW以下¥18,480〜。第二種電気工事士による確実な施工。最短当日対応。',
}

const whyUs: { icon: string; title: string; body: React.ReactNode }[] = [
  {
    icon: 'verified',
    title: '有資格プロによる施工',
    body: <>第二種電気工事士・第一種冷媒フロン類取扱技術者が施工。<br />無資格業者に多い施工不良・ガス漏れのリスクがありません。</>,
  },
  {
    icon: 'speed',
    title: '最短当日対応',
    body: <>引越し当日のエアコン設置や急な故障にも対応。<br />松戸市大橋拠点から迅速に駆けつけます。</>,
  },
  {
    icon: 'recycling',
    title: '旧機撤去・処分もワンストップ',
    body: <>古いエアコンの取外しから処分まで一括対応。<br />フロン回収も適切に処理します。</>,
  },
]

const standardPrices = [
  {
    name: '2.2kW以下　エアコン標準取付',
    note: '本体取付・同一階設置・配管4m・穴あけ1箇所・テープ巻・真空引き・エアパージ',
    price: '18,480',
  },
  {
    name: '2.5〜3.6kW　エアコン標準取付',
    note: '本体取付・同一階設置・配管4m・穴あけ1箇所・テープ巻・真空引き・エアパージ',
    price: '18,480',
  },
  {
    name: '4.0kW以上　エアコン標準取付',
    note: '本体取付・同一階設置・配管4m・穴あけ1箇所・テープ巻・真空引き・エアパージ',
    price: '21,780',
  },
]

const outdoorPrices = [
  { name: '室外機　屋根置工事', note: '※雨雪時は工事不可', price: '14,300' },
  { name: '室外機　壁面工事', note: '※地上1.5mまで・ALC/サイディング壁は不可・壁面取付部分は運転時に騒音が発生する場合有り', price: '14,300' },
  { name: '室外機　天吊工事', note: '※埋め込みボルトがある場合のみ', price: '14,300' },
  { name: '室外機　二段置工事', note: '', price: '19,800' },
]

const faqs = [
  {
    q: '見積もりは無料ですか？',
    a: 'はい、現地調査およびお見積もりは無料で承っております。見積もり後にキャンセルされても費用は一切かかりません。お気軽にご相談ください。',
  },
  {
    q: '他店で購入したエアコンの取り付けも可能ですか？',
    a: '可能です。インターネット通販や量販店で購入された機器の持ち込み設置も喜んで承ります。型番をお知らせいただくとスムーズです。',
  },
  {
    q: '工事にはどのくらいの時間がかかりますか？',
    a: '標準工事であれば1台につき1.5〜2時間程度です。隠蔽配管・特殊設置場所・複数台の場合はさらにお時間をいただく場合がございます。',
  },
  {
    q: '雨の日でも工事はできますか？',
    a: '小雨程度であれば可能ですが、屋根上作業や真空引き作業に支障が出る場合は日程を調整させていただくことがございます。安全を最優先に判断します。',
  },
]

export default function AirconPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'エアコン取付・取外し工事',
            provider: {
              '@type': 'LocalBusiness',
              name: '合同会社ライフチェンジ',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '大橋1108番地4',
                addressLocality: '松戸市',
                addressRegion: '千葉県',
                postalCode: '270-2224',
                addressCountry: 'JP',
              },
              telephone: '050-5536-8619',
            },
            description: '第二種電気工事士によるエアコン取付・取外し工事。2.2kW以下¥18,480〜。松戸市・流山市・柏市対応。',
            areaServed: ['松戸市', '流山市', '柏市'],
            priceRange: '¥18,480〜',
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="relative h-[921px] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/aircon-hero.jpg"
            alt="合同会社ライフチェンジのスタッフがエアコンを取り付けている様子"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="font-label text-white text-sm font-bold tracking-[0.3em] block mb-4 uppercase">
              Service: Air Conditioner Installation
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-black font-headline leading-tight mb-8">
              空間を整える、<br />
              職人の技術。
            </h1>
            <p className="text-white/90 text-lg mb-10 max-w-lg leading-relaxed">
              合同会社ライフチェンジは、住環境の美観と機能を追求した<br />
              建築的視点でのエアコン設置をご提案します。<br />
              第二種電気工事士が責任を持って施工します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container px-10 py-5 font-bold font-label hover:brightness-110 transition-all"
              >
                無料見積もりを依頼する
              </Link>
              <a
                href="tel:050-5536-8619"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-10 py-5 font-bold font-label hover:bg-white/20 transition-all"
              >
                <span className="material-symbols-outlined text-sm">call</span>
                050-5536-8619
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <span className="font-label text-secondary-container text-sm font-bold tracking-widest block mb-2 uppercase">
              Pricing
            </span>
            <h2 className="text-4xl font-black font-headline">標準工事料金</h2>
            <p className="text-sm text-on-surface-variant mt-3">
              ※ 表示金額はすべて税込。現場状況により変動します。必ず事前に無料見積もりをご確認ください。
            </p>
          </div>

          <div className="space-y-px">
            {standardPrices.map((item, i) => (
              <div
                key={i}
                className="bg-surface-container-lowest p-8 grid md:grid-cols-[1fr_auto] items-center gap-6 group hover:bg-surface-container-low transition-colors"
              >
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">{item.name}</h3>
                  <p className="text-sm text-on-surface-variant">{item.note}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-headline text-4xl font-black text-primary">{item.price}</span>
                  <span className="text-sm font-bold ml-1 text-on-surface-variant">円〜</span>
                </div>
              </div>
            ))}

            <div className="pt-10 pb-4">
              <span className="font-label text-on-surface-variant text-xs tracking-widest font-bold uppercase">
                Outdoor Unit Special Installation
              </span>
              <div className="mt-2 h-px bg-outline-variant/30" />
            </div>

            {outdoorPrices.map((item, i) => (
              <div
                key={i}
                className="bg-surface-container-lowest p-8 grid md:grid-cols-[1fr_auto] items-center gap-6 hover:bg-surface-container-low transition-colors"
              >
                <div>
                  <h3 className="text-base font-bold text-primary mb-1">{item.name}</h3>
                  {item.note && (
                    <p className="text-xs text-on-surface-variant/70">{item.note}</p>
                  )}
                </div>
                <div className="text-right shrink-0">
                  <span className="font-headline text-3xl font-black text-primary">{item.price}</span>
                  <span className="text-sm font-bold ml-1 text-on-surface-variant">円〜</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies (Bento) ── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="font-label text-secondary-container text-sm font-bold tracking-widest block mb-2 uppercase">
                Case Studies
              </span>
              <h2 className="text-4xl font-black font-headline">施工事例</h2>
            </div>
            <Link
              href="/works"
              className="font-label text-sm font-bold border-b-2 border-primary pb-1 hover:text-secondary-container hover:border-secondary-container transition-all hidden md:block"
            >
              全ての施工実績を見る
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:h-[600px]">
            <div className="md:col-span-7 relative group overflow-hidden min-h-[320px]">
              <Image
                src="/images/aircon-case-01.jpg"
                alt="新築一戸建てのリビングと寝室へのマルチ型エアコン設置施工事例"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                <span className="text-white/60 text-xs mb-2 font-label tracking-widest uppercase">Residential</span>
                <h3 className="text-white text-2xl font-black font-headline leading-tight">
                  新築一戸建て：<br />リビング・寝室へのマルチ型設置
                </h3>
              </div>
            </div>

            <div className="md:col-span-5 relative group overflow-hidden min-h-[260px]">
              <Image
                src="/images/aircon-case-02.jpg"
                alt="マンションのエアコン室外機配置・個別温度制御対応の施工事例"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                <span className="text-white/60 text-xs mb-2 font-label tracking-widest uppercase">Apartment</span>
                <h3 className="text-white text-xl font-black font-headline leading-tight">
                  マンション：<br />室外機配置・個別温度制御対応
                </h3>
              </div>
            </div>

            <div className="md:col-span-12 relative group overflow-hidden h-[260px] md:h-auto">
              <Image
                src="/images/aircon-case-03.jpg"
                alt="旧エアコン撤去・省エネモデルへの機器入替施工事例"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                <span className="text-white/60 text-xs mb-2 font-label tracking-widest uppercase">Replacement</span>
                <h3 className="text-white text-2xl font-black font-headline">
                  機器入替：旧機撤去・省エネモデルへ交換
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <span className="font-label text-secondary-container text-sm font-bold tracking-widest block mb-2 uppercase">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-black font-headline">選ばれる理由</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20">
            {whyUs.map((item, i) => (
              <div key={i} className="bg-surface-container-lowest p-10">
                <span
                  className="material-symbols-outlined text-3xl text-secondary-container mb-6 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {item.icon}
                </span>
                <h3 className="font-bold text-primary text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="font-label text-secondary-container text-sm font-bold tracking-widest block mb-2 uppercase">
              FAQ
            </span>
            <h2 className="text-4xl font-black font-headline">よくあるご質問</h2>
          </div>
          <div className="space-y-px">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-surface-container-lowest group">
                <summary className="flex justify-between items-center cursor-pointer p-6 gap-4">
                  <span className="font-bold text-primary leading-snug">{faq.q}</span>
                  <span className="material-symbols-outlined text-primary shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="px-6 pb-6 text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/20 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-8">
          <span className="font-label text-secondary-container text-sm font-bold tracking-[0.4em] block mb-6 uppercase">
            Transform Your Environment
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-headline mb-4 leading-tight">
            快適な空間づくりを、<br />今すぐ始めましょう。
          </h2>
          <p className="text-on-primary-container leading-relaxed mb-10 max-w-lg mx-auto">
            現地調査・お見積もりは無料。松戸市・流山市・柏市対応。
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:050-5536-8619"
              className="inline-flex items-center justify-center gap-3 bg-white text-primary px-12 py-5 font-bold font-label hover:bg-surface-container-low transition-all"
            >
              <span className="material-symbols-outlined">call</span>
              050-5536-8619
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-secondary-container text-on-secondary-container px-12 py-5 font-bold font-label hover:brightness-110 transition-all"
            >
              <span className="material-symbols-outlined">mail</span>
              無料見積もりを依頼する
            </Link>
          </div>
        </div>
      </section>

      {/* ── Mobile sticky CTA ── */}
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
