import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ | 合同会社ライフチェンジ',
  description: 'エアコン・給湯器・コンロ取付のご相談・無料見積もりはこちら。電話：050-5536-8619（9:00〜17:00）',
}

export default function ContactPage() {
  return (
    <>
      {/* ── Hero Header ── */}
      <header className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="md:w-2/3">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container/10 text-secondary-container font-bold text-xs mb-4 tracking-widest uppercase font-label">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white font-headline leading-tight mb-6">
              お問い合わせ
            </h1>
            <p className="text-on-primary-container text-lg max-w-xl leading-relaxed">
              住まいのこと、リフォームのご相談、お見積もりのご依頼など、<br />
              どのようなことでもお気軽にご相談ください。<br />
              専門スタッフが丁寧にお答えいたします。
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none flex items-center justify-end">
          <span className="material-symbols-outlined text-[20rem] text-white">mail</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* ── Form ── */}
          <div className="lg:col-span-8">
            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl">
              {/* Netlify Forms: data-netlify="true" で自動的にフォーム受信 */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/contact/thanks"
                className="space-y-8"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" className="hidden" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary flex items-center gap-2" htmlFor="name">
                      お名前
                      <span className="text-xs px-2 py-0.5 bg-error-container text-on-error-container rounded">
                        必須
                      </span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="山田 太郎"
                      className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary flex items-center gap-2" htmlFor="email">
                      メールアドレス
                      <span className="text-xs px-2 py-0.5 bg-error-container text-on-error-container rounded">
                        必須
                      </span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="example@mail.com"
                      className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary flex items-center gap-2" htmlFor="phone">
                      お電話番号
                      <span className="text-xs px-2 py-0.5 bg-surface-container text-on-surface-variant rounded">
                        任意
                      </span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="090-0000-0000"
                      className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary flex items-center gap-2" htmlFor="address">
                      ご住所
                      <span className="text-xs px-2 py-0.5 bg-surface-container text-on-surface-variant rounded">
                        任意
                      </span>
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="千葉県松戸市..."
                      className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary flex items-center gap-2" htmlFor="message">
                    お問い合わせ内容
                    <span className="text-xs px-2 py-0.5 bg-error-container text-on-error-container rounded">
                      必須
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="お問い合わせ内容をご記入ください"
                    className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none"
                  />
                </div>

                <div className="flex items-start gap-3 p-4 bg-surface-container-low rounded-lg">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    className="h-5 w-5 mt-0.5 rounded border-outline accent-secondary-container"
                  />
                  <label className="text-sm text-on-surface-variant leading-relaxed" htmlFor="privacy">
                    <Link href="/privacy" className="text-primary font-bold underline decoration-secondary-container/40">
                      プライバシーポリシー
                    </Link>
                    に同意のうえ、送信してください。
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-secondary-container text-on-secondary-container rounded-xl font-black text-lg tracking-widest hover:brightness-110 active:scale-[0.99] transition-all shadow-lg"
                >
                  この内容で送信する
                </button>
              </form>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Company info */}
            <div className="bg-primary text-white p-8 rounded-xl relative overflow-hidden">
              <h3 className="text-2xl font-black mb-6 font-headline">会社情報</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary-container">location_on</span>
                  <div>
                    <p className="text-xs text-on-primary-container font-bold mb-1">所在地</p>
                    <p className="text-sm leading-relaxed">
                      〒270-2224
                      <br />
                      千葉県松戸市大橋1108番地4
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary-container">call</span>
                  <div>
                    <p className="text-xs text-on-primary-container font-bold mb-1">
                      お電話でのお問い合わせ
                    </p>
                    <a href="tel:050-5536-8619" className="text-xl font-bold tracking-tight">
                      050-5536-8619
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary-container">schedule</span>
                  <div>
                    <p className="text-xs text-on-primary-container font-bold mb-1">営業時間</p>
                    <p className="text-sm leading-relaxed">
                      9:00〜17:00
                      <br />
                      （定休日：日曜日）
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden bg-surface-container-lowest">
              <div className="p-4 bg-surface-container-high flex justify-between items-center">
                <span className="text-xs font-bold text-primary tracking-widest font-label">MAP</span>
                <a
                  href="https://maps.google.com/?q=千葉県松戸市大橋1108番地4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-sm text-primary">open_in_new</span>
                </a>
              </div>
              <div className="aspect-square relative grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src="/images/map-matsudo.jpg"
                  alt="松戸市の地図"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center shadow-xl ring-4 ring-white/20">
                    <span
                      className="material-symbols-outlined text-white"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      push_pin
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ link */}
            <div className="p-8 bg-surface-container-low rounded-xl">
              <h4 className="text-primary font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container">info</span>
                よくあるご質問
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                お急ぎの場合は、よくあるご質問ページも併せてご確認ください。
              </p>
              <Link
                href="/service/aircon#faq"
                className="inline-flex items-center text-primary font-bold text-sm group"
              >
                FAQを見る
                <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}
