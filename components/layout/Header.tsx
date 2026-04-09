'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/service', label: 'サービス一覧' },
  { href: '/works', label: '施工実績' },
  { href: '/about', label: '会社概要' },
  { href: '/contact', label: 'お問い合わせ' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-none">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-xl font-black text-primary tracking-tighter font-headline"
        >
          合同会社ライフチェンジ
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-headline font-bold tracking-tight text-primary/70 hover:text-secondary-container transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="tel:050-5536-8619"
          className="hidden lg:flex items-center gap-2 bg-secondary-container text-on-secondary-container px-6 py-2.5 font-bold hover:brightness-110 transition-all"
        >
          <span className="material-symbols-outlined text-sm">call</span>
          電話でお問い合わせ
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          <span className="material-symbols-outlined">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl px-8 py-6 space-y-4 border-t border-outline-variant/20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block font-bold text-primary py-2 hover:text-secondary-container transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/camp"
            className="block font-bold text-primary/60 py-2 hover:text-secondary-container transition-colors text-sm"
            onClick={() => setIsOpen(false)}
          >
            みんなの里山キャンプ場
          </Link>
          <a
            href="tel:050-5536-8619"
            className="flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container px-6 py-3 font-bold"
          >
            <span className="material-symbols-outlined text-sm">call</span>
            050-5536-8619
          </a>
        </div>
      )}
    </nav>
  )
}
