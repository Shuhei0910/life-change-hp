import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'よくあるご質問 | 合同会社ライフチェンジ',
  description: 'エアコン・給湯器・コンロ取付に関するよくある質問をまとめました。',
}

const faqCategories = [
  {
    category: 'エアコン取付',
    icon: 'ac_unit',
    faqs: [
      {
        q: 'エアコンの取付工事にはどのくらい時間がかかりますか？',
        a: '標準的な取付工事は2〜3時間が目安です。室外機の設置場所や配管の状況によって変わります。事前に現地確認させていただく場合もあります。',
      },
      {
        q: '購入したエアコンの取付だけお願いできますか？',
        a: 'はい、量販店・ネット通販などでご購入された機器の取付のみも承っております。機器の型番・取付場所をお知らせいただくとスムーズにご対応できます。',
      },
      {
        q: '古いエアコンの取外し・処分もお願いできますか？',
        a: 'はい、旧エアコンの取外しと処分もワンストップで対応します。別途費用がかかりますが、お見積もり時にご確認ください。',
      },
      {
        q: '配管穴がない場合は工事できますか？',
        a: 'はい、配管穴の新規開口も対応しています。壁の素材（木造・コンクリートなど）によって料金が変わります。',
      },
    ],
  },
  {
    category: '給湯器',
    icon: 'water_heater',
    faqs: [
      {
        q: '給湯器が壊れて今すぐお湯が使えない状態です。',
        a: '緊急対応しています。まずはお電話（050-5536-8619）でご連絡ください。在庫状況によっては当日対応も可能です。',
      },
      {
        q: '給湯器の寿命はどのくらいですか？',
        a: '一般的に給湯器の寿命は10〜15年といわれています。年数が経つと部品の入手が難しくなるため、10年を超えたら交換を検討されることをお勧めします。',
      },
      {
        q: '給湯器のメーカー・機種は自分で選べますか？',
        a: 'はい、リンナイ・ノーリツ・パロマなど主要メーカーに対応しています。ご希望のメーカーや機能（エコジョーズ等）をお聞かせください。',
      },
    ],
  },
  {
    category: 'コンロ・IH',
    icon: 'outdoor_grill',
    faqs: [
      {
        q: 'ガスコンロをIHに変えたいのですが、電気工事は必要ですか？',
        a: 'はい、IHクッキングヒーターは専用の200V回路が必要です。コンセントの新設を含む電気工事が必要ですが、当社では一括で対応しています。',
      },
      {
        q: 'ビルトインコンロのサイズが合うか心配です。',
        a: '国内メーカーのビルトインコンロは幅60cmと75cmの2種類が主流です。現地調査の際に確認しますので、まずはご相談ください。',
      },
    ],
  },
  {
    category: '料金・支払い',
    icon: 'payments',
    faqs: [
      {
        q: '見積もりは無料ですか？',
        a: 'はい、現地調査・お見積もりは完全無料です。見積もり後にキャンセルされても費用は一切かかりません。',
      },
      {
        q: '追加費用が発生することはありますか？',
        a: '現場状況により追加工事が必要になる場合がありますが、必ず施工前にご説明・ご了承をいただいてから作業を進めます。後から請求が増えることはありません。',
      },
      {
        q: '支払い方法を教えてください。',
        a: '現金・振込に対応しています。詳細はお問い合わせの際にご確認ください。',
      },
    ],
  },
  {
    category: '対応エリア',
    icon: 'location_on',
    faqs: [
      {
        q: '対応エリアを教えてください。',
        a: '千葉県松戸市・流山市・柏市を中心に、千葉県全域・東京都の一部に対応しています。エリア外の場合も出張費が変わる場合がありますのでご相談ください。',
      },
      {
        q: '離島や山間部でも対応できますか？',
        a: '現在は千葉県・東京都内のみの対応となっております。ご了承ください。',
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <>
      <header className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="md:w-2/3">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container/10 text-secondary-container font-bold text-xs mb-4 tracking-widest uppercase font-label">
              FAQ
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white font-headline leading-tight mb-6">
              よくあるご質問
            </h1>
            <p className="text-on-primary-container text-lg leading-relaxed">
              エアコン・給湯器・コンロ工事に関してよくいただくご質問をまとめました。
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none flex items-center justify-end">
          <span className="material-symbols-outlined text-[20rem] text-white">help</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-20 space-y-16">
        {faqCategories.map((category, ci) => (
          <section key={ci}>
            <h2 className="flex items-center gap-3 text-2xl font-black text-primary font-headline mb-6">
              <span
                className="material-symbols-outlined text-secondary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {category.icon}
              </span>
              {category.category}
            </h2>
            <div className="space-y-3">
              {category.faqs.map((faq, fi) => (
                <details key={fi} className="bg-surface-container-lowest rounded-xl group">
                  <summary className="flex items-start justify-between p-6 cursor-pointer gap-4">
                    <span className="font-bold text-primary leading-snug">{faq.q}</span>
                    <span className="material-symbols-outlined text-secondary-container shrink-0 mt-0.5 group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-on-surface-variant leading-relaxed text-sm border-t border-outline-variant/20 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <div className="bg-surface-container-low rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-black text-primary font-headline mb-4">
            解決しない場合はご相談ください
          </h3>
          <p className="text-on-surface-variant leading-relaxed mb-8">
            掲載されていない質問や、詳しい内容のご確認はお気軽にどうぞ。
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
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-4 rounded-xl font-bold hover:brightness-110 transition-all"
            >
              <span className="material-symbols-outlined text-sm">call</span>
              050-5536-8619
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
