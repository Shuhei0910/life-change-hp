import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '給湯器取付・交換 | 合同会社ライフチェンジ',
  description: '松戸市・流山市・柏市の給湯器交換・取付は合同会社ライフチェンジへ。最短当日対応。給水装置工事主任技術者による確実な施工。¥55,000〜',
}

const features = [
  {
    icon: 'speed',
    title: '最短当日対応',
    body: '突然のお湯が出ない・給湯器の故障も最短当日に対応します。緊急時もお気軽にご連絡ください。',
  },
  {
    icon: 'verified_user',
    title: '資格保有スタッフによる施工',
    body: '給水装置工事主任技術者・ガス可とう管接続工事監督者が正確・安全に施工します。',
  },
  {
    icon: 'handshake',
    title: 'メーカー取引実績多数',
    body: 'リンナイ・ノーリツ・パロマなど主要メーカーの機器を適切な価格で手配・設置します。',
  },
]

const priceItems = [
  { name: '給湯器交換工事（標準）', price: '¥55,000〜', note: '壁掛け型・同じ号数での交換' },
  { name: '給湯器新規設置工事', price: '¥60,000〜', note: '配管新設が必要な場合' },
  { name: '号数アップ（16号→20号等）', price: '¥8,800〜', note: '配管延長・加工が必要な場合' },
  { name: '機器本体（別途）', price: '要お見積もり', note: 'ご希望のメーカー・機種に対応' },
  { name: '旧機器撤去・処分', price: '¥5,500〜', note: '処分費込み' },
]

const steps = [
  { title: 'お問い合わせ', body: 'お電話またはフォームでご連絡ください。現在の給湯器の型番や症状をお知らせいただくとスムーズです。' },
  { title: '現地調査・お見積もり', body: '実際に現場を確認し、最適な機器と費用をご提案します。見積もりは無料です。' },
  { title: '機器の手配', body: 'ご了承後、機器を手配します。在庫状況により最短当日〜数日でご対応します。' },
  { title: '施工・動作確認', body: '旧機器の撤去・新機器の設置・ガス・水道・電気の接続まで一括対応。動作確認後にお引き渡しします。' },
]

const faqs = [
  {
    q: '給湯器が壊れました。今日中に対応してもらえますか？',
    a: '在庫状況にもよりますが、最短当日対応が可能です。まずはお電話（050-5536-8619）でご連絡ください。',
  },
  {
    q: 'どのメーカーに対応していますか？',
    a: 'リンナイ・ノーリツ・パロマ・パーパスなど主要メーカーすべてに対応しています。現在お使いのメーカーとは異なるメーカーへの交換も可能です。',
  },
  {
    q: '号数（容量）の選び方がわかりません。',
    a: '一般的には2〜3人世帯で16号、4人以上の世帯では20〜24号が目安です。現地調査の際にご家族の人数や使用状況をお聞きして最適な号数をご提案します。',
  },
  {
    q: '工事中はお湯が使えなくなりますか？',
    a: '工事中（2〜4時間程度）はお湯の使用が難しくなります。日程はご都合に合わせてご調整いたします。',
  },
]

export default function KyutokiPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: '給湯器取付・交換工事',
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
            description: '松戸市・流山市・柏市の給湯器交換・取付。最短当日対応。¥55,000〜。給水装置工事主任技術者による確実な施工。',
            areaServed: ['松戸市', '流山市', '柏市'],
            priceRange: '¥55,000〜',
          }),
        }}
      />

      {/* Hero */}
      <header className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="md:w-2/3">
            <span className="inline-block py-1 px-4 bg-secondary-container text-on-secondary-container rounded-full text-sm font-bold mb-6 tracking-widest font-label">
              給湯器取付・交換
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-black text-white leading-tight mb-8 text-shadow-premium">
              給湯器交換・<br className="md:hidden" />取付工事
            </h1>
            <p className="text-on-primary-container text-lg leading-relaxed mb-10 max-w-lg">
              突然のお湯トラブルにも最短当日対応。<br />
              資格保有スタッフによる確実な施工で、<br />
              快適なお湯環境をお届けします。
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

        {/* Flow */}
        <section>
          <div className="mb-12">
            <span className="text-secondary-container font-black tracking-widest text-sm uppercase block mb-3 font-label">Flow</span>
            <h2 className="text-4xl font-headline font-black text-primary">施工の流れ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-surface-container-lowest p-6 rounded-xl h-full">
                  <div className="text-5xl font-black text-secondary-container/20 font-headline mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{step.body}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 z-10 w-6 h-6 bg-secondary-container rounded-full items-center justify-center">
                    <span className="material-symbols-outlined text-white text-sm">arrow_forward</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Bento work images */}
        <section>
          <div className="mb-10">
            <span className="text-secondary-container font-black tracking-widest text-sm uppercase block mb-3 font-label">Works</span>
            <h2 className="text-4xl font-headline font-black text-primary">施工実績</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['/images/works-bento-main.jpg', '/images/works-bento-02.jpg', '/images/works-bento-03.jpg'].map((src, i) => (
              <div key={i} className={`relative rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 aspect-[2/1]' : 'aspect-square'}`}>
                <Image src={src} alt={`給湯器施工事例 ${i + 1}`} fill className="object-cover" />
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
            現地調査・お見積もりは無料。突然のお湯トラブルも最短当日対応します。
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
