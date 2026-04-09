import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    icon: 'ac_unit',
    title: 'エアコン取付',
    desc: '家庭用・業務用の各種エアコンの新規設置、移設、撤去を承ります。',
    href: '/service/aircon',
  },
  {
    icon: 'hot_tub',
    title: '給湯器取付',
    desc: 'ガス・電気給湯器の交換・新設。エコジョーズ等の最新機種もお任せください。',
    href: '/service/kyutoki',
  },
  {
    icon: 'cooking',
    title: 'コンロ取付',
    desc: 'ビルトインガスコンロ、IHクッキングヒーターの安全な交換工事を行います。',
    href: '/service/conro',
  },
  {
    icon: 'construction',
    title: 'その他工事',
    desc: '換気扇交換やアンテナ工事、小規模な電気工事まで幅広く対応可能です。',
    href: '/service/other',
  },
]

const works = [
  { src: '/images/works-grid-01.jpg', alt: 'エアコン取付施工事例', city: '松戸市', label: 'エアコン取付' },
  { src: '/images/works-grid-02.jpg', alt: '給湯器交換施工事例', city: '流山市', label: '給湯器交換' },
  { src: '/images/works-grid-03.jpg', alt: 'コンロ取付施工事例', city: '柏市', label: 'コンロ取付' },
]

const areas = [
  { city: '松戸市', en: 'Matsudo City' },
  { city: '流山市', en: 'Nagareyama City' },
  { city: '柏市', en: 'Kashiwa City' },
]

const reviews = [
  {
    service: 'エアコン取付',
    text: '引越し当日にエアコン取付をお願いしました。他社に「当日は無理」と断られ焦っていたところ、すぐに対応してもらえて本当に助かりました。1時間半ほどで完了し、配管の仕上げも壁に沿って綺麗にまとめてくれました。',
    name: 'S様',
    profile: '30代・女性・松戸市',
  },
  {
    service: '給湯器交換',
    text: '冬の朝にお湯が出なくなり、慌てて連絡しました。午後には新しい給湯器に交換されていて、夜には普通に使えました。事前の見積もりも明確で、追加費用は一切ありませんでした。対応の速さと丁寧さに感謝しています。',
    name: 'T様',
    profile: '50代・男性・松戸市',
  },
  {
    service: 'コンロ交換',
    text: 'ビルトインコンロの交換を依頼しました。問い合わせから3日で工事完了。当日は養生もしっかりしてくれて、コンロ周りを傷つけることなく交換してもらいました。使い方の説明まで丁寧にしてもらい、とても安心できる業者さんです。',
    name: 'S様',
    profile: '40代・女性・柏市',
  },
  {
    service: 'エアコン3台取付',
    text: 'リビング・寝室・ロフトと3台まとめて取り付けをお願いしました。ロフトへの設置は「難しい」と言われることもあるのですが、段取りよく綺麗に仕上げてくれました。料金も相場より良心的で、次の機会もぜひお願いしたいと思っています。',
    name: 'S様',
    profile: '40代・男性・流山市',
  },
  {
    service: '換気扇・エアコン撤去',
    text: '換気扇の交換と古いエアコンの取外し・処分をセットでお願いしました。処分まで一括でやってもらえるので、自分で粗大ゴミの手続きをしなくて済み楽でした。作業後はゴミ一つ残さず片付けてくれて、対応全体に好感が持てました。',
    name: 'D様',
    profile: '30代・女性・松戸市',
  },
  {
    service: '給湯器号数アップ',
    text: '家族が増えてお湯が足りなくなり、号数アップの相談をしました。現場を確認したうえで配管状況や費用をわかりやすく説明してもらい、納得したうえで工事を進めてもらえました。正直ベースで話してくれる業者さんで信頼できます。',
    name: 'Y様',
    profile: '40代・男性・流山市',
  },
]

const faqs = [
  {
    q: '見積もりは無料ですか？',
    a: 'はい、現地調査およびお見積もりは完全に無料で承っております。お気軽にお問い合わせください。',
  },
  {
    q: '工事の保証はありますか？',
    a: 'はい、施工内容に応じて独自の工事保証を設けております。万が一の際も責任を持って対応いたします。',
  },
  {
    q: 'ネットで購入した製品の取り付けも可能ですか？',
    a: 'はい、承っております。製品の型番や設置場所の詳細をお伺いできればお見積もりいたします。',
  },
  {
    q: '土日祝日も対応していますか？',
    a: 'はい、土日祝日も営業しております。ただし、予約状況によりご希望に添えない場合がございますのでお早めにご相談ください。',
  },
  {
    q: '支払方法は何がありますか？',
    a: '現金、各種クレジットカード、銀行振込に対応しております。',
  },
]

const instagramImages = [
  { src: '/images/instagram-01.jpg', alt: 'エアコン施工事例1' },
  { src: '/images/instagram-02.jpg', alt: 'エアコン施工事例2' },
  { src: '/images/instagram-03.jpg', alt: 'コンロ施工事例' },
  { src: '/images/instagram-04.jpg', alt: '配管施工事例' },
  { src: '/images/instagram-05.jpg', alt: '施工事例5' },
  { src: '/images/instagram-06.jpg', alt: '給湯器施工事例' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[820px] md:h-[921px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-top.jpg"
            alt="エアコン工事中の日本人技術者"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 font-headline text-shadow-premium">
              エアコン・給湯器取付は、
              <br />
              <span className="text-secondary-container">ライフチェンジ</span>
              にお任せ。
            </h1>
            <p className="text-lg md:text-xl text-white font-bold mb-3 font-headline leading-snug">
              あなたの家に来るのは、<br className="sm:hidden" />
              電気工事士の資格を持つ職人です。
            </p>
            <p className="text-sm text-white/60 mb-10 font-label tracking-wide">
              松戸市・流山市・柏市対応 ｜ 年間4,000台以上の施工実績
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold text-center text-lg hover:brightness-110 transition-all shadow-xl"
              >
                無料で見積もり依頼
              </Link>
              <a
                href="tel:050-5536-8619"
                className="bg-primary-container text-on-primary px-8 py-4 rounded-xl font-bold text-center text-lg hover:bg-opacity-90 transition-all border border-white/10 backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">call</span>
                050-5536-8619
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-primary border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { label: '年間施工台数', value: '4,000台', unit: '以上' },
            { label: '対応エリア', value: '松戸 / 流山 / 柏', unit: '' },
            { label: '創業', value: '2020年', unit: '' },
            { label: '第二種電気工事士', value: '有資格', unit: '施工' },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center border-r border-white/10 last:border-r-0 py-6 px-4"
            >
              <div className="text-xs text-white/40 mb-2 font-label tracking-widest uppercase">
                {stat.label}
              </div>
              <div className="text-2xl md:text-3xl font-black text-white font-headline">
                {stat.value}
                {stat.unit && (
                  <span className="text-sm font-bold ml-1 text-secondary-container">
                    {stat.unit}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-secondary-container font-black tracking-widest text-sm uppercase block mb-4 font-label">
            OUR SERVICES
          </span>
          <h2 className="text-4xl font-black text-primary font-headline mb-4 leading-tight">
            暮らしを支える、確かな技術。
          </h2>
          <p className="text-on-surface-variant leading-relaxed max-w-xl">
            私たちはエアコンや給湯器の設置を通じて、お客様の快適な暮らしをサポートします。
            技術力とスピードに自信があります。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-surface-container-lowest p-8 rounded-xl hover:bg-primary transition-all duration-500 hover:shadow-2xl"
            >
              <div className="w-14 h-14 bg-surface-container-low rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-on-secondary-container">
                  {s.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary group-hover:text-white mb-4">
                {s.title}
              </h3>
              <p className="text-on-surface-variant group-hover:text-white/80 text-sm mb-8 leading-relaxed">
                {s.desc}
              </p>
              <Link
                href={s.href}
                className="inline-flex items-center text-secondary-container font-bold group-hover:text-white transition-colors"
              >
                詳しく見る
                <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3つのお約束 ── */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="text-center mb-12">
            <span className="font-label text-secondary-container text-sm font-bold tracking-widest block mb-3 uppercase">
              Our Promise
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white font-headline">
              ライフチェンジの3つのお約束
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                icon: 'cancel',
                num: '01',
                title: '見積もり後のキャンセル、無料',
                body: '現地調査・お見積もりは完全無料。金額を見てからキャンセルしても、一切費用はかかりません。',
              },
              {
                icon: 'receipt_long',
                num: '02',
                title: '追加費用は必ず事前に説明',
                body: '作業中に追加費用が生じる場合は、必ず一度手を止めてご説明し、ご了承いただいてから進めます。',
              },
              {
                icon: 'shield',
                num: '03',
                title: '施工後1年間の工事保証',
                body: '当社の施工に起因する不具合は、工事完了後1年以内であれば無償で対応いたします。',
              },
            ].map((p, i) => (
              <div key={i} className="bg-primary-container p-10">
                <div className="flex items-start gap-5">
                  <span className="font-headline text-5xl font-black text-secondary-container/30 leading-none shrink-0">
                    {p.num}
                  </span>
                  <div>
                    <span
                      className="material-symbols-outlined text-secondary-container mb-4 block"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {p.icon}
                    </span>
                    <h3 className="font-bold text-white text-lg mb-3 leading-snug">{p.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Works Grid ── */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black text-primary font-headline mb-12 text-center">
            最新の施工事例
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {works.map((w) => (
              <div key={w.label} className="aspect-square relative group overflow-hidden rounded-xl">
                <Image
                  src={w.src}
                  alt={w.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold">
                    {w.label}（{w.city}）
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/works"
              className="bg-white text-primary border border-primary/10 px-8 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all inline-block"
            >
              すべての施工実績を見る
            </Link>
          </div>
        </div>
      </section>

      {/* ── Area ── */}
      <section className="py-24 px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black text-primary font-headline mb-4">対応エリア</h2>
        <p className="text-on-surface-variant mb-16">
          千葉県北西部を中心に、地域密着でスピーディーに対応いたします。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((a) => (
            <div key={a.city} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{a.city}</h3>
              <p className="text-sm text-on-surface-variant">{a.en}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="font-label text-secondary-container text-sm font-bold tracking-widest block mb-3 uppercase">
              Customer Reviews
            </span>
            <h2 className="text-4xl font-black font-headline">
              お客様の声
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {reviews.map((r, i) => (
              <div key={i} className="bg-primary p-8 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-secondary-container font-label tracking-widest uppercase">
                    {r.service}
                  </span>
                  <div className="flex text-secondary-container">
                    {[...Array(5)].map((_, j) => (
                      <span
                        key={j}
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed flex-1">
                  {r.text}
                </p>
                <div className="border-t border-white/10 pt-5 flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-sm text-white/50">person</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">{r.name}</p>
                    <p className="text-xs text-white/40">{r.profile}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-8 max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-primary font-headline mb-12 text-center">
          よくあるご質問
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group bg-surface-container-low rounded-xl">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold list-none text-primary">
                {faq.q}
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform flex-shrink-0">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── Instagram ── */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black text-primary font-headline">Instagram</h2>
            <a
              href="https://www.instagram.com/tokunaga10933333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-container font-bold flex items-center gap-1"
            >
              @tokunaga10933333
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            {instagramImages.map((img) => (
              <div key={img.src} className="aspect-square overflow-hidden rounded-lg relative">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-primary text-white py-24 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black font-headline mb-6">
            お困りごとは今すぐ解決。
          </h2>
          <p className="text-xl text-white/80 mb-12">
            お見積もりから施工まで、スピーディーに対応いたします。
          </p>
          <div className="bg-primary-container p-10 rounded-xl border border-white/5 shadow-2xl mb-12">
            <div className="mb-4 text-secondary-container font-bold text-sm">
              お電話でのご相談はこちら
            </div>
            <a
              href="tel:050-5536-8619"
              className="block text-4xl md:text-6xl font-black font-headline mb-4 tracking-tighter hover:text-secondary-container transition-colors"
            >
              050-5536-8619
            </a>
            <div className="text-white/60 text-sm">受付時間 9:00〜17:00（日曜休）</div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-secondary-container text-on-secondary-container px-12 py-5 rounded-xl font-black text-xl hover:brightness-110 transition-all shadow-lg"
          >
            <span className="material-symbols-outlined">mail</span>
            メールで問い合わせる
          </Link>
        </div>
      </section>
    </>
  )
}
