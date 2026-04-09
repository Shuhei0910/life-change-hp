import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'その他工事 | 合同会社ライフチェンジ',
  description: '松戸市・流山市・柏市の住宅設備工事全般に対応。照明交換・コンセント増設・換気扇交換・浴室乾燥機など。電話：050-5536-8619',
}

const services = [
  {
    icon: 'lightbulb',
    title: '照明器具の交換・新設',
    body: 'シーリングライト・ダウンライト・スポットライトなどの照明器具交換・新設に対応します。LED化工事もお任せください。',
    price: '¥8,800〜',
  },
  {
    icon: 'power',
    title: 'コンセント・スイッチ増設',
    body: 'コンセントの増設・移設や、スイッチの交換・追加工事を行います。タコ足配線の解消にもご活用ください。',
    price: '¥11,000〜',
  },
  {
    icon: 'air',
    title: '換気扇・レンジフード交換',
    body: 'キッチンのレンジフードや浴室・トイレの換気扇の交換に対応します。臭い・音の改善につながります。',
    price: '¥13,200〜',
  },
  {
    icon: 'dry',
    title: '浴室乾燥機の取付',
    body: '浴室暖房乾燥機の新規取付・交換工事です。電気式・ガス式どちらにも対応しています。',
    price: '¥22,000〜',
  },
  {
    icon: 'water_heater',
    title: '洗面台・水栓の交換',
    body: '洗面化粧台の入替や水栓金具の交換工事を行います。水漏れ・老朽化にも迅速対応します。',
    price: '¥16,500〜',
  },
  {
    icon: 'electric_meter',
    title: '電気容量アップ・分電盤交換',
    body: '古い分電盤の交換やアンペアアップ工事に対応します。IH導入時の電気容量増設もお任せください。',
    price: '¥33,000〜',
  },
]

export default function OtherPage() {
  return (
    <>
      {/* Hero */}
      <header className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="md:w-2/3">
            <span className="inline-block py-1 px-4 bg-secondary-container text-on-secondary-container rounded-full text-sm font-bold mb-6 tracking-widest font-label">
              その他工事
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-black text-white leading-tight mb-8 text-shadow-premium">
              その他<br className="md:hidden" />住宅設備工事
            </h1>
            <p className="text-on-primary-container text-lg leading-relaxed mb-10 max-w-lg">
              照明・換気扇・コンセント増設など、<br />
              住まいの電気・設備工事を幅広く承ります。<br />
              まずはお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                無料相談・見積もり
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
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none flex items-center justify-end">
          <span className="material-symbols-outlined text-[20rem] text-white">handyman</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-20 space-y-20">

        {/* Services Grid */}
        <section>
          <div className="mb-12">
            <span className="text-secondary-container font-black tracking-widest text-sm uppercase block mb-3 font-label">Services</span>
            <h2 className="text-4xl font-headline font-black text-primary">対応工事一覧</h2>
            <p className="text-on-surface-variant mt-3">
              記載以外の工事もお気軽にご相談ください。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-surface-container-lowest p-8 rounded-xl">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-secondary-container/10 rounded-xl flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-secondary-container"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {service.icon}
                    </span>
                  </div>
                  <span className="text-sm font-black text-primary bg-surface-container-low px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                <h3 className="font-bold text-primary text-lg mb-3">{service.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{service.body}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-on-surface-variant mt-6 text-center">
            ※ 金額は標準工事の目安です。現場状況により変動します。必ず事前見積もりをご確認ください。
          </p>
        </section>

        {/* Note */}
        <section className="bg-surface-container-low rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 bg-secondary-container/10 rounded-2xl flex items-center justify-center shrink-0">
            <span
              className="material-symbols-outlined text-3xl text-secondary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              info
            </span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">記載以外の工事もお気軽に</h3>
            <p className="text-on-surface-variant leading-relaxed">
              ここに掲載していない工事についても対応できる場合があります。
              「こんなこと頼めるの？」と思ったことでも、まずはお電話またはお問い合わせフォームでご相談ください。
              対応可否のご確認だけでも構いません。
            </p>
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
