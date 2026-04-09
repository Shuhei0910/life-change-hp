import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '施工実績 | 合同会社ライフチェンジ',
  description: '松戸市・流山市・柏市を中心に年間4,000台超の施工実績。エアコン・給湯器・コンロ取付の施工事例をご覧ください。',
}

const works = [
  {
    id: 1,
    category: 'エアコン取付',
    title: '戸建て2階リビング エアコン新規取付',
    location: '松戸市',
    img: '/images/works-grid-01.jpg',
    tags: ['新規取付', '戸建て', '隠蔽配管'],
  },
  {
    id: 2,
    category: 'エアコン取付',
    title: 'マンション寝室 エアコン入替工事',
    location: '流山市',
    img: '/images/works-grid-02.jpg',
    tags: ['入替', 'マンション', '当日対応'],
  },
  {
    id: 3,
    category: '給湯器交換',
    title: '給湯器 突然の故障 当日対応',
    location: '柏市',
    img: '/images/works-grid-03.jpg',
    tags: ['給湯器', '緊急対応', '当日工事'],
  },
  {
    id: 4,
    category: 'エアコン取付',
    title: '引越し当日 全室エアコン4台設置',
    location: '松戸市',
    img: '/images/works-bento-main.jpg',
    tags: ['新規取付', '複数台', '引越し'],
  },
  {
    id: 5,
    category: 'エアコン取付',
    title: '2階ベランダ側 室外機設置・配管延長',
    location: '流山市',
    img: '/images/works-bento-02.jpg',
    tags: ['配管延長', '難工事', '戸建て'],
  },
  {
    id: 6,
    category: 'コンロ取付',
    title: 'ガスコンロ → IHクッキングヒーター 切替',
    location: '柏市',
    img: '/images/works-bento-03.jpg',
    tags: ['IH', '電気工事', 'オール電化'],
  },
]

const categories = ['すべて', 'エアコン取付', '給湯器交換', 'コンロ取付']

export default function WorksPage() {
  return (
    <>
      {/* Hero */}
      <header className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="md:w-2/3">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container/10 text-secondary-container font-bold text-xs mb-4 tracking-widest uppercase font-label">
              Works
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white font-headline leading-tight mb-6">
              施工実績
            </h1>
            <p className="text-on-primary-container text-lg leading-relaxed max-w-xl">
              年間4,000台を超える施工実績の一部をご紹介します。<br />
              戸建て・マンション・緊急対応など、<br />
              さまざまな現場に対応してきました。
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none flex items-center justify-end">
          <span className="material-symbols-outlined text-[20rem] text-white">construction</span>
        </div>
      </header>

      {/* Stats */}
      <div className="bg-secondary-container/5 border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-3 gap-8 text-center">
          {[
            { num: '4,000+', label: '年間施工台数' },
            { num: '10年+', label: '地域での実績' },
            { num: '98%', label: 'リピート・紹介率' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-black text-primary font-headline">{stat.num}</div>
              <div className="text-xs text-on-surface-variant mt-1 font-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-8 py-20">
        {/* Filter tabs (visual only - static) */}
        <div className="flex gap-3 mb-12 flex-wrap">
          {categories.map((cat, i) => (
            <span
              key={i}
              className={`px-5 py-2 rounded-full text-sm font-bold cursor-default ${
                i === 0
                  ? 'bg-primary text-white'
                  : 'bg-surface-container-high text-on-surface-variant'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <article key={work.id} className="bg-surface-container-lowest rounded-xl overflow-hidden group">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={work.img}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {work.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-on-surface-variant mb-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  {work.location}
                </p>
                <h3 className="font-bold text-primary leading-snug mb-4">{work.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Before/After CTA */}
        <div className="mt-16 bg-surface-container-low p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-5">
            <span
              className="material-symbols-outlined text-3xl text-secondary-container shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              compare
            </span>
            <div>
              <h3 className="font-bold text-primary text-lg">ビフォーアフターで見る施工事例</h3>
              <p className="text-sm text-on-surface-variant mt-1">設置前・設置後を比較して、工事の仕上がりをご確認いただけます。</p>
            </div>
          </div>
          <Link
            href="/works/before-after"
            className="shrink-0 inline-flex items-center gap-2 bg-primary text-white px-8 py-3 font-bold hover:brightness-110 transition-all"
          >
            ビフォーアフターを見る
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-primary text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-black font-headline mb-4">
            あなたのお宅も<br className="sm:hidden" />お任せください
          </h2>
          <p className="text-on-primary-container mb-8 max-w-lg mx-auto leading-relaxed">
            現地調査・お見積もりは無料です。
            まずはお気軽にご相談ください。
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
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
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
