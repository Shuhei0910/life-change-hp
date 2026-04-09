import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '保有資格・許可 | 合同会社ライフチェンジ',
  description: '当社スタッフの保有資格・許認可一覧。第二種電気工事士・給水装置工事主任技術者など。',
}

const qualifications = [
  {
    category: '電気工事',
    icon: 'bolt',
    items: [
      { name: '第二種電気工事士', note: 'エアコン工事・電気配線に必須の国家資格' },
      { name: '第一種電気工事士', note: '高圧電気設備の工事が可能な上位資格' },
    ],
  },
  {
    category: '給水・ガス工事',
    icon: 'water_drop',
    items: [
      { name: '給水装置工事主任技術者', note: '給湯器・水道工事に必要な国家資格' },
      { name: 'ガス可とう管接続工事監督者', note: 'ガスコンロ・給湯器接続に必要な資格' },
      { name: 'LPガス設備士', note: 'プロパンガス設備工事の資格' },
    ],
  },
  {
    category: '冷媒・空調',
    icon: 'ac_unit',
    items: [
      { name: '第一種冷媒フロン類取扱技術者', note: 'フロン類の回収・充填が可能' },
      { name: '第二種冷媒フロン類取扱技術者', note: '小型空調機器のフロン取扱資格' },
    ],
  },
  {
    category: '建設業許可',
    icon: 'domain',
    items: [
      { name: '建設業許可（電気工事業）', note: '千葉県知事許可' },
    ],
  },
]

export default function QualificationPage() {
  return (
    <>
      <header className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-container">
        <div className="max-w-7xl mx-auto px-8">
          <Link
            href="/about"
            className="inline-flex items-center gap-1 text-on-primary-container text-sm mb-6 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            会社概要に戻る
          </Link>
          <span className="inline-block px-4 py-1 rounded-full bg-secondary-container/10 text-secondary-container font-bold text-xs mb-4 tracking-widest uppercase font-label">
            Qualifications
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white font-headline leading-tight mb-4">
            保有資格・許可
          </h1>
          <p className="text-on-primary-container max-w-xl leading-relaxed">
            有資格のプロが責任を持って施工するから安心です。
            当社スタッフの保有資格・許認可をご確認ください。
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-20 space-y-12">
        {qualifications.map((group, i) => (
          <section key={i}>
            <h2 className="flex items-center gap-3 text-2xl font-black text-primary font-headline mb-6">
              <span
                className="material-symbols-outlined text-secondary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {group.icon}
              </span>
              {group.category}
            </h2>
            <div className="space-y-3">
              {group.items.map((item, j) => (
                <div key={j} className="bg-surface-container-lowest p-6 rounded-xl flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-secondary-container mt-0.5 shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <div>
                    <p className="font-bold text-primary">{item.name}</p>
                    <p className="text-sm text-on-surface-variant mt-1">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="bg-surface-container-low rounded-xl p-8 text-center">
          <p className="text-on-surface-variant text-sm leading-relaxed">
            資格証明書の提示や詳細についてのご質問は、お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 bg-secondary-container text-on-secondary-container px-8 py-3 rounded-xl font-bold hover:brightness-110 transition-all"
          >
            お問い合わせ
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </main>
    </>
  )
}
