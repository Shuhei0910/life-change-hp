import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface pt-20">
      <div className="text-center px-8 py-20 max-w-lg">
        <div className="font-headline text-[10rem] font-black text-primary/8 leading-none select-none mb-0">
          404
        </div>
        <h1 className="text-3xl font-black text-primary font-headline mb-4 -mt-4">
          ページが見つかりません
        </h1>
        <p className="text-on-surface-variant leading-relaxed mb-10">
          お探しのページは移動または削除された可能性があります。<br />
          URLをご確認いただくか、トップページからお探しください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 font-bold hover:brightness-110 transition-all"
          >
            <span className="material-symbols-outlined text-sm">home</span>
            トップページへ
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-surface-container-lowest border border-outline-variant/30 text-primary px-8 py-3 font-bold hover:bg-surface-container-low transition-all"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            お問い合わせ
          </Link>
        </div>
        <p className="mt-12 text-sm text-on-surface-variant/50">
          お急ぎの場合はお電話ください：
          <a href="tel:050-5536-8619" className="text-primary font-bold ml-1">050-5536-8619</a>
        </p>
      </div>
    </div>
  )
}
