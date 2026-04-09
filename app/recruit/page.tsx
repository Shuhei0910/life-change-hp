import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '採用情報 | 合同会社ライフチェンジ',
  description: '合同会社ライフチェンジでは仲間を募集しています。エアコン・給湯器・コンロ取付の施工スタッフ・未経験歓迎。千葉県松戸市。',
}

const benefits = [
  {
    icon: 'school',
    title: '未経験・資格なしでも歓迎',
    body: '入社後に資格取得を支援します。第二種電気工事士などの資格取得費用は会社が全額負担します。',
  },
  {
    icon: 'schedule',
    title: '週休2日制・残業少なめ',
    body: '基本は8:00〜17:00。定休日は日曜日。繁忙期以外は残業はほとんどありません。メリハリをつけて働けます。',
  },
  {
    icon: 'directions_car',
    title: '社用車・工具完備',
    body: '社用車・工具一式は会社が用意します。マイカー通勤も可能です（駐車場あり）。',
  },
  {
    icon: 'trending_up',
    title: '腕一本で稼げる仕事',
    body: '施工実績に応じたインセンティブ制度あり。技術を磨けば磨くほど収入に直結します。',
  },
]

const requirements = [
  { label: '職種', value: '住宅設備工事スタッフ（エアコン・給湯器・コンロ取付）' },
  { label: '雇用形態', value: '正社員・契約社員・業務委託（応相談）' },
  { label: '勤務地', value: '千葉県松戸市大橋1108番地4（現場は松戸市・流山市・柏市周辺）' },
  { label: '勤務時間', value: '8:00〜17:00（定休日：日曜日）' },
  { label: '給与', value: '月給25万円〜（経験・資格・能力による）\nインセンティブ別途支給' },
  { label: '求める人材', value: '・体力に自信のある方\n・コツコツと技術を磨ける方\n・未経験歓迎（電気・設備工事の経験者尚可）\n・普通自動車免許（AT限定不可）' },
  { label: '待遇・福利厚生', value: '社会保険完備・資格取得支援（全額負担）・社用車貸与・制服支給' },
]

export default function RecruitPage() {
  return (
    <>
      {/* Hero */}
      <header className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="md:w-2/3">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container/10 text-secondary-container font-bold text-xs mb-4 tracking-widest uppercase font-label">
              Recruit
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white font-headline leading-tight mb-6">
              採用情報
            </h1>
            <p className="text-on-primary-container text-xl leading-relaxed max-w-xl font-headline">
              腕一本で稼ぎ、地域の暮らしを支える仕事。<br />
              ライフチェンジで一緒に働きませんか。
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none flex items-center justify-end">
          <span className="material-symbols-outlined text-[20rem] text-white">engineering</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-20 space-y-24">

        {/* Message */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary-container font-black tracking-widest text-sm uppercase block mb-4 font-label">Message</span>
            <h2 className="text-4xl font-black text-primary font-headline mb-6 leading-tight">
              技術を磨いて、<br />地域に必要とされる職人へ
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                エアコン・給湯器・コンロの取付は、「あって当たり前」の設備をお届けする仕事です。
                夏に涼しく、冬に暖かく、毎日快適に過ごせる生活を支える——そんな仕事にやりがいを感じる方を求めています。
              </p>
              <p>
                未経験からでも、丁寧に技術を教えます。資格取得も全面サポート。
                松戸市・流山市・柏市を中心に、地域に根ざした会社で長く働いてほしいと思っています。
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="bg-surface-container-lowest p-6 rounded-xl">
                <span
                  className="material-symbols-outlined text-secondary-container mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {b.icon}
                </span>
                <h3 className="font-bold text-primary text-sm mb-2">{b.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section>
          <h2 className="text-3xl font-black text-primary font-headline mb-10">募集要項</h2>
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30">
            {requirements.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-4 ${i !== requirements.length - 1 ? 'border-b border-outline-variant/20' : ''}`}
              >
                <div className="bg-surface-container-low px-6 py-5 flex items-start">
                  <span className="text-sm font-bold text-primary">{row.label}</span>
                </div>
                <div className="md:col-span-3 px-6 py-5">
                  <p className="text-on-surface leading-relaxed whitespace-pre-line text-sm">{row.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application CTA */}
        <section className="bg-primary text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-black font-headline mb-4">まずはお気軽にご連絡ください</h2>
          <p className="text-on-primary-container leading-relaxed mb-8 max-w-lg mx-auto">
            選考の流れや待遇についての詳細は、お電話またはお問い合わせフォームにてお気軽にご確認ください。
            書類選考なし・まずは面談からでも構いません。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-bold hover:brightness-110 transition-all"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              応募・問い合わせフォーム
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
    </>
  )
}
