import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white w-full pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 max-w-7xl mx-auto text-sm leading-relaxed">
        <div className="space-y-6">
          <div className="text-lg font-bold text-secondary-container font-headline">
            合同会社ライフチェンジ
          </div>
          <p className="text-white/70">
            千葉県松戸市・流山市・柏市を中心に活動する住宅設備工事の専門会社です。
            エアコン、給湯器、コンロの設置ならお任せください。
          </p>
          <a
            href="https://www.instagram.com/tokunaga10933333"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-10 h-10 bg-white/10 rounded-full items-center justify-center hover:bg-secondary-container transition-colors"
            aria-label="Instagram"
          >
            <span className="material-symbols-outlined text-sm">photo_camera</span>
          </a>
        </div>

        <div>
          <div className="font-bold text-xs text-white/40 uppercase tracking-widest mb-6">
            SERVICES
          </div>
          <ul className="space-y-4">
            {[
              { href: '/service/aircon', label: 'エアコン取付・取外' },
              { href: '/service/kyutoki', label: '給湯器取付' },
              { href: '/service/conro', label: 'コンロ取付' },
              { href: '/service/other', label: 'その他工事' },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/70 hover:text-white underline decoration-secondary-container/40 transition-all"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-bold text-xs text-white/40 uppercase tracking-widest mb-6">
            CONTACT
          </div>
          <div className="space-y-3 text-white/70">
            <p>
              〒270-2224
              <br />
              千葉県松戸市大橋1108番地4
            </p>
            <p>
              <a
                href="tel:050-5536-8619"
                className="text-secondary-container font-bold text-lg"
              >
                050-5536-8619
              </a>
            </p>
            <p>営業時間：9:00〜17:00（日曜休）</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-white/10 text-center text-white/30 text-xs">
        © 2024 合同会社ライフチェンジ All Rights Reserved.
      </div>
    </footer>
  )
}
