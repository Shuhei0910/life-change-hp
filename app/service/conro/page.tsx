import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'コンロ取付・IH取付 | 合同会社ライフチェンジ',
  description: '松戸市・流山市・柏市のガスコンロ・IHクッキングヒーター取付は合同会社ライフチェンジへ。¥13,200〜。電気工事士による安全施工。',
}

const features: { icon: string; title: string; body: React.ReactNode }[] = [
  {
    icon: 'electrical_services',
    title: '電気工事士による安全施工',
    body: <>IHクッキングヒーターの設置には専用200V回路が必要です。<br />第二種電気工事士がワンストップで対応します。</>,
  },
  {
    icon: 'local_gas_station',
    title: 'ガス・IH両方に対応',
    body: <>ガスコンロの交換はもちろん、ガス→IH、IH→ガスの<br />きり替え工事も承ります。</>,
  },
  {
    icon: 'clean_hands',
    title: 'ビルトインも据置きも',
    body: <>システムキッチンへのビルトインコンロ交換から、<br />据置き型ガステーブルの設置まで対応します。</>,
  },
]

const priceItems = [
  { name: 'ガスコンロ交換（標準）', price: '¥13,200〜', note: '同サイズへの交換' },
  { name: 'ビルトインコンロ交換', price: '¥16,500〜', note: '60cm/75cmに対応' },
  { name: 'IHクッキングヒーター設置', price: '¥22,000〜', note: '200V回路新設込み' },
  { name: 'ガス→IH切替工事', price: '¥33,000〜', note: '電気工事・ガス閉栓手配込み' },
  { name: '機器本体（別途）', price: '要お見積もり', note: 'ご希望のメーカー・機種に対応' },
]

const faqs = [
  {
    q: 'ガスコンロをIHに替えたいのですが、工事が必要ですか？',
    a: 'はい、IHクッキングヒーターは専用の200V電源回路が必要です。既存のコンセントでは使用できません。当社では電気工事からIH設置まで一括対応しています。',
  },
  {
    q: 'ビルトインコンロは自分で交換できますか？',
    a: 'ガスコンロの取り外し・接続はガス可とう管の作業が伴うため、資格保有者による施工が必要です。安全のため専門業者にお任せください。',
  },
  {
    q: '古いコンロの処分はお願いできますか？',
    a: 'はい、旧機器の撤去・処分もお任せください（別途費用）。お見積もり時にご相談ください。',
  },
  {
    q: '当日施工は可能ですか？',
    a: 'コンロ交換は比較的短時間の工事です。スケジュールに空きがあれば当日対応も可能です。まずはお電話でご確認ください。',
  },
]

export default function ConroPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'ガスコンロ・IHクッキングヒーター取付工事',
            provider: {
              '@type': 'LocalBusiness',
              name: '合同会社ライフチェンジ',
              telephone: '050-5536-8619',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '大橋1108番地4',
                addressLocality: '松戸市',
                addressRegion: '千葉県',
                postalCode: '270-2224',
                addressCountry: 'JP',
              },
            },
            description: '松戸市・流山市・柏市のガスコンロ・IH取付。電気工事士によるワンストップ対応。¥13,200〜。',
            areaServed: ['松戸市', '流山市', '柏市'],
            priceRange: '¥13,200〜',
          }),
        }}
      />

      {/* Hero */}
      <header className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="md:w-2/3">
            <span className="inline-block py-1 px-4 bg-secondary-container text-on-secondary-container rounded-full text-sm font-bold mb-6 tracking-widest font-label">
              コンロ取付
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-black text-white leading-tight mb-8 text-shadow-premium">
              コンロ・IH<br className="md:hidden" />取付工事
            </h1>
            <p className="text-on-primary-container text-lg leading-relaxed mb-10 max-w-lg">
              ガスコンロからIHへの切替も、<br />
              電気工事からコンロ設置まで<br />
              ワンストップで対応します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                無料見積もりを依頼する
              </Link>
              <a
                href="tel:050-5536-8619"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                <span className="material-symbols-outlined text-sm">call</span>
                今すぐ電話する
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-20 space-y-24">

        {/* Features */}
        <section>
          <div className="mb-12">
            <span className="text-secondary-container font-black tracking-widest text-sm uppercase block mb-3 font-label">Why Choose Us</span>
            <h2 className="text-4xl font-headline font-black text-primary">選ばれる理由</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-surface-container-lowest p-8 rounded-xl">
                <div className="w-12 h-12 bg-secondary-container/10 rounded-xl flex items-center justify-center mb-6">
                  <span
                    className="material-symbols-outlined text-secondary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {f.icon}
                  </span>
                </div>
                <h3 className="font-bold text-primary text-lg mb-3">{f.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section>
          <div className="mb-10">
            <span className="text-secondary-container font-black tracking-widest text-sm uppercase block mb-3 font-label">Pricing</span>
            <h2 className="text-4xl font-headline font-black text-primary mb-3">料金の目安</h2>
            <p className="text-on-surface-variant text-sm">
              ※ 現場状況により変動します。必ず事前に無料見積もりをご確認ください。
            </p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30">
            <div className="grid grid-cols-3 bg-primary text-white text-sm font-bold px-6 py-3">
              <span>工事内容</span>
              <span className="text-center">目安金額（税込）</span>
              <span className="text-right">備考</span>
            </div>
            {priceItems.map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 px-6 py-4 items-center ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'} ${i !== priceItems.length - 1 ? 'border-b border-outline-variant/20' : ''}`}
              >
                <span className="font-medium text-on-surface">{item.name}</span>
                <span className="text-center font-black text-primary text-lg">{item.price}</span>
                <span className="text-right text-sm text-on-surface-variant">{item.note}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Works */}
        <section>
          <div className="mb-10">
            <span className="text-secondary-container font-black tracking-widest text-sm uppercase block mb-3 font-label">Works</span>
            <h2 className="text-4xl font-headline font-black text-primary">施工実績</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['/images/works-bento-03.jpg', '/images/works-grid-01.jpg', '/images/works-grid-02.jpg'].map((src, i) => (
              <div key={i} className={`relative rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 aspect-[2/1]' : 'aspect-square'}`}>
                <Image src={src} alt={`コンロ施工事例 ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="mb-10">
            <span className="text-secondary-container font-black tracking-widest text-sm uppercase block mb-3 font-label">FAQ</span>
            <h2 className="text-4xl font-headline font-black text-primary">よくあるご質問</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-surface-container-lowest rounded-xl group">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <span className="font-bold text-primary pr-4">{faq.q}</span>
                  <span className="material-symbols-outlined text-secondary-container shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-white rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-black font-headline mb-4">まずはお気軽にご相談ください。</h2>
          <p className="text-on-primary-container mb-8 leading-relaxed">
            現地調査・お見積もりは無料です。
          </p>
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
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
            >
              <span className="material-symbols-outlined text-sm">call</span>
              050-5536-8619
            </a>
          </div>
        </section>
      </main>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex">
        <a
          href="tel:050-5536-8619"
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-4 font-bold"
        >
          <span className="material-symbols-outlined text-sm">call</span>
          電話で相談
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container py-4 font-bold"
        >
          <span className="material-symbols-outlined text-sm">mail</span>
          見積もり依頼
        </Link>
      </div>
    </>
  )
}
