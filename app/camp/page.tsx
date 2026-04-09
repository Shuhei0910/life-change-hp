import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'みんなの里山キャンプ場 | 合同会社ライフチェンジ',
  description: '千葉市若葉区にある「みんなの里山キャンプ場」。大焚き火・窯・オーナー手作りアスレチック・ドッグラン完備。ペットと過ごす癒しの空間。なっぷから予約受付中。',
}

const features = [
  {
    icon: 'local_fire_department',
    title: '大焚き火',
    body: '思いきり燃やせる大きな焚き火スペース。薪の販売もあり、夜まで炎を囲んで楽しめます。',
  },
  {
    icon: 'outdoor_grill',
    title: '窯（ピザ焼き）',
    body: 'オーナー自慢の窯でピザ焼き体験ができます。手作りの温かみが感じられる特別な体験を。',
  },
  {
    icon: 'park',
    title: 'オーナー手作りアスレチック',
    body: '愛情込めて手作りされたアスレチック。お子様が思いきり体を動かして遊べます。',
  },
  {
    icon: 'pets',
    title: 'ドッグラン（整備中）',
    body: '愛犬と一緒に楽しめるドッグランを整備中です。ペットと過ごす癒しの空間をご用意しています。',
  },
  {
    icon: 'hot_tub',
    title: 'サウナ＆プール（イベント時）',
    body: '特定イベント時にはサウナ＆プールもオープン。詳しくはInstagramをご確認ください。',
  },
  {
    icon: 'electrical_services',
    title: 'オートサイト（電源付き）',
    body: '電源付きオートサイトは20A・30Aに対応。電気毛布や家電も使えて快適に過ごせます。',
  },
]

const accessItems = [
  { icon: 'directions_car', label: '都内から', value: '約40分' },
  { icon: 'add_road', label: '千葉市貝塚ICから', value: '約10分' },
  { icon: 'directions_bus', label: '千葉駅からバス', value: '約20分＋徒歩5分' },
]

export default function CampPage() {
  return (
    <>
      {/* Hero */}
      <header className="pt-32 pb-0 bg-gradient-to-br from-[#1a3a1a] to-[#2d5a2d] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 pb-20 relative z-10">
          <div className="md:w-2/3">
            <span className="inline-block px-4 py-1 bg-white/10 text-white/80 font-bold text-xs mb-4 tracking-widest uppercase font-label">
              Camp
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white font-headline leading-tight mb-4">
              みんなの里山<br />キャンプ場
            </h1>
            <p className="text-white/60 text-sm font-bold tracking-widest mb-6 font-label uppercase">
              Minna no Satoyama Campsite
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-xl">
              ペットと過ごす癒しの空間。<br />
              千葉市若葉区の里山で、大焚き火・窯・手作りアスレチック。<br />
              都内から40分、土・日・祝日営業。
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white px-6 py-3">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                event_available
              </span>
              <span className="text-sm font-bold">なっぷより予約受付中</span>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none flex items-center justify-end">
          <span className="material-symbols-outlined text-[20rem] text-white">forest</span>
        </div>
        <div className="h-16 bg-gradient-to-b from-transparent to-surface mt-8" />
      </header>

      <main className="max-w-7xl mx-auto px-8 py-16 space-y-20">

        {/* Basic Info */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="text-[#2d5a2d] font-black tracking-widest text-sm uppercase block mb-3 font-label">About</span>
            <h2 className="text-4xl font-black text-primary font-headline mb-6">キャンプ場について</h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                合同会社ライフチェンジが運営する「みんなの里山キャンプ場」は、
                千葉市若葉区にある自然豊かなキャンプ場です。
              </p>
              <p>
                オーナーが手作りした焚き火台・窯・アスレチックなど、
                どこにもない体験が揃っています。
                愛犬と一緒に楽しめる環境も整備中。
                家族・カップル・ペット連れ、どなたでも歓迎します。
              </p>
              <p>
                予約は「なっぷ」サイトから承っています。
                最新情報はInstagramでもご確認ください。
              </p>
            </div>
          </div>

          {/* Basic info table */}
          <div className="bg-surface-container-lowest">
            <div className="p-8 space-y-0">
              {[
                { label: '住所', value: '〒264-0016\n千葉県千葉市若葉区大宮町2921-1' },
                { label: '営業日', value: '土・日・祝日のみ' },
                { label: '予約', value: '「なっぷ」サイトより受付' },
                { label: 'Instagram', value: '@tokunaga10933333' },
              ].map((row, i, arr) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 gap-4 py-5 ${i !== arr.length - 1 ? 'border-b border-outline-variant/20' : ''}`}
                >
                  <span className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest font-label">{row.label}</span>
                  <p className="col-span-2 text-sm text-on-surface leading-relaxed whitespace-pre-line font-bold">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section>
          <div className="mb-12">
            <span className="text-[#2d5a2d] font-black tracking-widest text-sm uppercase block mb-3 font-label">Features</span>
            <h2 className="text-4xl font-black text-primary font-headline">キャンプ場の設備・特徴</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant/20">
            {features.map((f, i) => (
              <div key={i} className="bg-surface-container-lowest p-8 flex gap-5">
                <div className="w-10 h-10 bg-[#2d5a2d]/10 flex items-center justify-center shrink-0">
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

        {/* Access */}
        <section className="bg-surface-container-low p-10 md:p-16">
          <div className="mb-10">
            <span className="text-[#2d5a2d] font-black tracking-widest text-sm uppercase block mb-3 font-label">Access</span>
            <h2 className="text-3xl font-black text-primary font-headline">アクセス</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {accessItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#2d5a2d]/10 flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-[#2d5a2d]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant/60 font-bold tracking-widest uppercase font-label">{item.label}</p>
                  <p className="font-bold text-primary mt-1">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-surface-container-lowest p-6">
            <p className="text-sm font-bold text-primary mb-1">
              <span className="material-symbols-outlined text-sm align-middle mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              〒264-0016 千葉県千葉市若葉区大宮町2921-1
            </p>
            <p className="text-xs text-on-surface-variant">※ カーナビ・Googleマップでの案内は「みんなの里山キャンプ場」で検索</p>
          </div>
        </section>

        {/* Reservation CTA */}
        <section className="bg-[#1a3a1a] text-white p-10 md:p-16">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div>
              <h2 className="text-3xl font-black font-headline mb-3">ご予約・お問い合わせ</h2>
              <p className="text-white/70 leading-relaxed">
                ご予約は「なっぷ」サイトより受け付けています。<br />
                詳細・ご不明点はお電話またはInstagramのDMにてお気軽にご連絡ください。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="https://www.instagram.com/tokunaga10933333"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-3 font-bold hover:bg-white/20 transition-all"
              >
                <span className="material-symbols-outlined text-sm">photo_camera</span>
                Instagram
              </a>
              <a
                href="tel:050-5536-8619"
                className="inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container px-8 py-3 font-bold hover:brightness-110 transition-all"
              >
                <span className="material-symbols-outlined text-sm">call</span>
                050-5536-8619
              </a>
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
