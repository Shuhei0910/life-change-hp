import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ビフォーアフター施工事例 | 合同会社ライフチェンジ',
  description: '松戸市・流山市・柏市のエアコン・給湯器・コンロ取付のビフォーアフター施工事例。設置前後の変化をご覧ください。',
}

const cases = [
  {
    category: 'エアコン取付',
    title: '新築一戸建て リビング エアコン新規設置',
    location: '松戸市',
    before: {
      img: '/images/works-grid-01.jpg',
      caption: '設置前：エアコンなし、壁のみの状態',
    },
    after: {
      img: '/images/aircon-case-01.jpg',
      caption: '設置後：配管をテープ巻きで美しく仕上げ',
    },
    note: '穴あけ・配管・室外機設置まで標準工事。配管は壁に沿わせてスッキリ収めました。',
    tags: ['新規取付', '戸建て', '標準工事'],
  },
  {
    category: '給湯器交換',
    title: 'マンション 給湯器 突然故障 当日交換',
    location: '流山市',
    before: {
      img: '/images/works-grid-02.jpg',
      caption: '交換前：経年劣化による故障',
    },
    after: {
      img: '/images/works-bento-02.jpg',
      caption: '交換後：最新型エコジョーズへ',
    },
    note: '午前の問い合わせから午後には新機種で稼働。旧機器の撤去・処分も同日対応。',
    tags: ['緊急対応', '当日工事', 'マンション'],
  },
  {
    category: 'エアコン取付',
    title: '2階ロフト 難しい高所設置工事',
    location: '松戸市',
    before: {
      img: '/images/works-grid-03.jpg',
      caption: '設置前：ロフトに冷暖房なし',
    },
    after: {
      img: '/images/aircon-case-02.jpg',
      caption: '設置後：ロフト天井近くに据え付け完了',
    },
    note: 'ロフト特有の急勾配天井への設置。室外機は1階ベランダまで配管延長対応。',
    tags: ['難工事', '高所作業', '戸建て'],
  },
  {
    category: 'コンロ取付',
    title: 'ガスコンロ → IHクッキングヒーター 切替',
    location: '柏市',
    before: {
      img: '/images/works-bento-03.jpg',
      caption: '切替前：旧型ガスコンロ',
    },
    after: {
      img: '/images/aircon-case-03.jpg',
      caption: '切替後：フラットIHで清掃性も向上',
    },
    note: '200V専用回路の新設から機器設置まで電気工事士がワンストップで対応。',
    tags: ['IH', '電気工事', 'オール電化'],
  },
]

export default function BeforeAfterPage() {
  return (
    <>
      {/* Hero */}
      <header className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="md:w-2/3">
            <span className="inline-block px-4 py-1 bg-secondary-container/10 text-secondary-container font-bold text-xs mb-4 tracking-widest uppercase font-label">
              Before / After
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-headline leading-tight mb-6">
              ビフォーアフター<br />施工事例
            </h1>
            <p className="text-on-primary-container text-lg leading-relaxed max-w-xl">
              設置前・設置後を並べて見ることで、<br />
              工事のクオリティと変化がわかります。
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none flex items-center justify-end">
          <span className="material-symbols-outlined text-[20rem] text-white">compare</span>
        </div>
      </header>

      {/* 準備中バナー */}
      <div className="bg-secondary-container/10 border-b border-secondary-container/20 py-4 px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span
            className="material-symbols-outlined text-secondary-container text-sm shrink-0"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            info
          </span>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            <strong className="text-primary">現在、実際の施工写真に差し替え準備中です。</strong>
            掲載している写真はイメージです。実際の施工写真が揃い次第、順次更新いたします。
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-8 py-20 space-y-20">

        {cases.map((c, i) => (
          <section key={i} className="space-y-6">
            {/* Case header */}
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <span className="text-xs font-bold text-secondary-container font-label tracking-widest uppercase block mb-2">
                  {c.category}
                </span>
                <h2 className="text-2xl font-black text-primary font-headline">{c.title}</h2>
                <p className="text-sm text-on-surface-variant mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  {c.location}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {c.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-surface-container-high text-on-surface-variant px-3 py-1 font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Before / After grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20">
              <div className="bg-surface-container-lowest">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={c.before.img}
                    alt={`${c.title} - Before`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-on-surface/80 text-white text-xs font-black font-label tracking-widest px-4 py-2">
                    BEFORE
                  </div>
                </div>
                <div className="p-4 border-t border-outline-variant/20">
                  <p className="text-sm text-on-surface-variant">{c.before.caption}</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={c.after.img}
                    alt={`${c.title} - After`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-secondary-container text-on-secondary-container text-xs font-black font-label tracking-widest px-4 py-2">
                    AFTER
                  </div>
                </div>
                <div className="p-4 border-t border-outline-variant/20">
                  <p className="text-sm text-on-surface-variant">{c.after.caption}</p>
                </div>
              </div>
            </div>

            {/* Case note */}
            <div className="bg-surface-container-low px-6 py-4 flex items-start gap-3">
              <span
                className="material-symbols-outlined text-secondary-container text-sm shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                task_alt
              </span>
              <p className="text-sm text-on-surface-variant leading-relaxed">{c.note}</p>
            </div>
          </section>
        ))}

        {/* Photo request CTA */}
        <section className="bg-surface-container-low p-10 md:p-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <span
              className="material-symbols-outlined text-4xl text-secondary-container shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              add_photo_alternate
            </span>
            <div>
              <h2 className="text-2xl font-black text-primary font-headline mb-4">
                施工写真を随時更新中
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                実際の施工事例写真（ビフォーアフター）を収集中です。<br />
                掲載をご了承いただいたお客様の事例を順次追加してまいります。
              </p>
              <Link
                href="/works"
                className="inline-flex items-center gap-2 text-primary font-bold group text-sm"
              >
                施工実績一覧に戻る
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-white p-10 md:p-16 text-center">
          <h2 className="text-3xl font-black font-headline mb-4">
            あなたのお宅も<br className="sm:hidden" />お任せください
          </h2>
          <p className="text-on-primary-container mb-8 max-w-lg mx-auto leading-relaxed">
            現地調査・お見積もりは無料です。松戸市・流山市・柏市対応。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:050-5536-8619"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-10 py-4 font-bold hover:bg-surface-container-low transition-all"
            >
              <span className="material-symbols-outlined text-sm">call</span>
              050-5536-8619
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container px-10 py-4 font-bold hover:brightness-110 transition-all"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              無料見積もりを依頼する
            </Link>
          </div>
        </section>
      </main>

      {/* Mobile sticky CTA */}
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
