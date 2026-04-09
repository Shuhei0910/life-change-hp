import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'エアコン取付工事 | 合同会社ライフチェンジ',
  description: '松戸市・流山市・柏市のエアコン取付はライフチェンジにお任せ。年間1,000件以上の施工実績。丁寧・迅速・明朗会計でお届けします。無料見積もり受付中。',
}

const reasons = [
  {
    num: '01',
    title: '地域密着のスピード対応',
    desc: '松戸・流山エリアなら最短即日訪問。急な故障や引越し時の取付も柔軟に対応します。',
  },
  {
    num: '02',
    title: '完全自社施工の高品質',
    desc: '下請けに丸投げせず、熟練の自社スタッフが施工。見えない配管裏まで美しく仕上げます。',
  },
  {
    num: '03',
    title: '安心の長期工事保証',
    desc: '施工後も安心してお使いいただけるよう、独自の工事保証をすべての案件に付帯。',
  },
]

const steps = [
  { icon: 'mail', step: '01', title: 'お問い合わせ', desc: 'お電話またはWebフォームよりご相談ください。' },
  { icon: 'search', step: '02', title: '現地確認', desc: '専門スタッフが訪問し、設置環境を確認します。' },
  { icon: 'build', step: '03', title: '工事', desc: 'ご希望の日時に合わせ、丁寧に施工いたします。', accent: true },
  { icon: 'sentiment_satisfied', step: '04', title: '完了', desc: '動作確認後、お引渡し。アフターフォローもお任せ！' },
]

const faqs = [
  {
    q: '見積もりだけでも無料ですか？',
    a: 'はい、現地調査およびお見積もりは完全に無料で承っております。お見積もり後にキャンセルいただいても費用は発生いたしませんので、お気軽にご相談ください。',
  },
  {
    q: 'ネットで購入したエアコンも取り付けてもらえますか？',
    a: 'もちろんです。通販サイト等で購入されたエアコンの持ち込み設置も大歓迎です。機種名をお知らせいただければ、よりスムーズにお見積もりが可能です。',
  },
  {
    q: '工事の時間はどれくらいかかりますか？',
    a: '標準的な取付工事であれば、1台あたり1.5時間〜2時間程度です。取り外し工事や化粧カバーの設置、特殊な壁面への穴あけ等がある場合はプラス30分〜1時間ほどお時間をいただく場合がございます。',
  },
]

export default function AirconPage() {
  return (
    <>
      {/* ── Hero ── */}
      <header className="relative min-h-[700px] md:min-h-[819px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-aircon.jpg"
            alt="日本人技術者によるエアコン取付工事"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-4 bg-secondary-container text-on-secondary-container rounded-full text-sm font-bold mb-6 tracking-widest font-label">
              AIR CONDITIONING SERVICE
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-black text-white leading-tight mb-8 text-shadow-premium">
              快適な空気を、
              <br />
              確かな技術で。
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-10 font-medium">
              松戸市・流山市を中心に、年間1,000件以上の施工実績。
              <br />
              ライフチェンジは「丁寧・迅速・明朗会計」を約束します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">calendar_today</span>
                無料見積もりを依頼する
              </Link>
              <a
                href="tel:050-5536-8619"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">call</span>
                050-5536-8619
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── Overview ── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            {/* 3 reasons */}
            <div className="relative">
              <div className="relative bg-surface-container-lowest p-8 rounded-2xl border-l-8 border-secondary-container">
                <h2 className="text-3xl font-headline font-extrabold text-primary mb-6">
                  選ばれる3つの理由
                </h2>
                <ul className="space-y-8">
                  {reasons.map((r) => (
                    <li key={r.num} className="flex gap-4">
                      <span className="flex-shrink-0 w-10 h-10 bg-primary-container text-white rounded-lg flex items-center justify-center font-black text-sm">
                        {r.num}
                      </span>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{r.title}</h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed">{r.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <span className="text-sm font-bold text-secondary-container tracking-widest uppercase font-label">
                Service Overview
              </span>
              <h3 className="text-4xl font-headline font-black text-primary leading-snug">
                プロの技術で、
                <br />
                冷暖房効率を最大化。
              </h3>
              <p className="text-on-surface-variant leading-loose">
                エアコンの寿命や効きは、取り付けの精度で大きく変わります。ライフチェンジでは、真空引き作業の徹底はもちろん、お部屋の美観を損なわない化粧カバーの提案など、お客様一人ひとりの住環境に合わせた最適な施工プランをご提案いたします。
              </p>
              <div className="bg-surface-container-low p-6 rounded-xl flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-secondary-container">
                  <span
                    className="material-symbols-outlined text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                </div>
                <div>
                  <p className="font-bold text-primary">第二種電気工事士 在籍店</p>
                  <p className="text-xs text-on-surface-variant">
                    法令に基づいた安全な電気工事を実施いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-black text-primary mb-4">料金プラン</h2>
            <div className="w-20 h-1 bg-secondary-container mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 基本工事 */}
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden">
              <div className="bg-primary text-white px-8 py-6">
                <h3 className="text-xl font-bold">基本工事費</h3>
                <p className="text-sm opacity-70">標準的な取付作業一式が含まれます</p>
              </div>
              <div className="p-8">
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-black text-primary">¥18,480</span>
                  <span className="text-on-surface-variant text-sm font-bold">（税込）〜</span>
                </div>
                <ul className="space-y-4">
                  {[
                    '室内機・室外機の設置',
                    '配管類（4mまで）',
                    '配管穴あけ（1箇所）',
                    '真空引き作業一式',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary-container text-xl">
                        check_circle
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 追加工事 */}
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/30">
              <div className="bg-surface-container-high px-8 py-6">
                <h3 className="text-xl font-bold text-primary">追加工事費</h3>
                <p className="text-sm text-on-surface-variant">設置状況に応じたオプション</p>
              </div>
              <div className="p-8">
                <dl className="space-y-4">
                  {[
                    { label: '屋根置工事', price: '¥14,300〜' },
                    { label: '壁面工事', price: '¥14,300〜' },
                    { label: '天吊工事', price: '¥14,300〜' },
                    { label: '二段置工事', price: '¥19,800〜' },
                    { label: '既存機取り外し', price: '¥4,400〜' },
                    { label: '屋外化粧カバー（2m）', price: '¥5,500〜' },
                  ].map((opt) => (
                    <div
                      key={opt.label}
                      className="flex justify-between items-center py-2 border-b border-surface-container-high"
                    >
                      <dt className="font-medium">{opt.label}</dt>
                      <dd className="font-bold text-primary">{opt.price}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-xs text-on-surface-variant">
                  ※現場の状況により価格が変動する場合がございます。正確な費用は現地調査後に確定いたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Flow ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-headline font-black text-primary text-center mb-16">
            施工までの流れ
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-surface-container-high z-0" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {steps.map((s) => (
                <div key={s.step} className="text-center group">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 ${
                      s.accent ? 'bg-secondary-container text-white' : 'bg-primary text-white'
                    }`}
                  >
                    <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-primary">
                    {s.step}. {s.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Studies (Bento) ── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-headline font-black text-primary">施工実績</h2>
              <p className="text-on-surface-variant mt-2">松戸・流山エリアでの施工例をご紹介します</p>
            </div>
            <Link
              href="/works"
              className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-secondary-container transition-colors"
            >
              実績一覧を見る
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[600px]">
            {/* Main image */}
            <div className="md:col-span-8 relative rounded-2xl overflow-hidden group h-64 md:h-auto">
              <Image
                src="/images/works-bento-main.jpg"
                alt="マンションへのエアコン設置施工事例"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                <span className="text-secondary-container font-bold text-sm">松戸市 T様邸</span>
                <h4 className="text-white text-xl font-bold">新築戸建てへのマルチエアコン設置</h4>
              </div>
            </div>
            {/* Side images */}
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              {[
                {
                  src: '/images/works-bento-02.jpg',
                  alt: 'マンションベランダへのエアコン室外機設置',
                  city: '流山市 S様邸',
                  label: 'マンション・ベランダ設置',
                },
                {
                  src: '/images/works-bento-03.jpg',
                  alt: '業務用エアコン入替工事',
                  city: '松戸市 K様邸',
                  label: '業務用エアコン入替工事',
                },
              ].map((img) => (
                <div key={img.src} className="relative rounded-2xl overflow-hidden group h-48 md:h-auto">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                    <span className="text-secondary-container font-bold text-xs">{img.city}</span>
                    <h4 className="text-white text-lg font-bold">{img.label}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-headline font-black text-primary text-center mb-16">
            よくあるご質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-surface-container-low rounded-xl overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-primary group-open:bg-primary group-open:text-white transition-colors list-none">
                  {faq.q}
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180 flex-shrink-0">
                    expand_more
                  </span>
                </summary>
                <div className="p-6 text-on-surface-variant leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-primary text-white py-20 px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black font-headline mb-4">まずはお気軽にご相談ください。</h2>
          <p className="text-white/70 mb-10">無料見積もり・現地調査、お電話にてお気軽にどうぞ。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:050-5536-8619"
              className="flex items-center justify-center gap-2 bg-white text-primary px-10 py-4 rounded-xl font-black text-lg hover:bg-surface-container-low transition-all"
            >
              <span className="material-symbols-outlined">call</span>
              050-5536-8619
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all"
            >
              <span className="material-symbols-outlined">mail</span>
              無料見積もりを依頼する
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sticky Mobile CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur-lg p-4 grid grid-cols-2 gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <a
          href="tel:050-5536-8619"
          className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold"
        >
          <span className="material-symbols-outlined">call</span>
          電話で相談
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container py-3 rounded-xl font-bold"
        >
          <span className="material-symbols-outlined">mail</span>
          無料見積り
        </Link>
      </div>
    </>
  )
}
