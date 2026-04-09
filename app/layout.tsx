import type { Metadata } from 'next'
import { Barlow_Condensed, IBM_Plex_Sans, Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const siteUrl = 'https://life-change2020.com'
const siteName = '合同会社ライフチェンジ'
const siteDescription = '松戸市・流山市・柏市対応。年間4,000台以上の施工実績。エアコン取付・給湯器交換・コンロ取付を丁寧・迅速・明朗会計でお届けします。'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | 松戸市・流山市・柏市のエアコン・給湯器・コンロ取付`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName,
    title: `${siteName} | 松戸市・流山市・柏市のエアコン・給湯器・コンロ取付`,
    description: siteDescription,
    images: [
      {
        url: '/images/hero-top.jpg',
        width: 1200,
        height: 630,
        alt: '合同会社ライフチェンジ — 松戸市の住宅設備工事',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | 松戸市・流山市・柏市のエアコン・給湯器・コンロ取付`,
    description: siteDescription,
    images: ['/images/hero-top.jpg'],
  },
  alternates: {
    canonical: siteUrl,
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: '合同会社ライフチェンジ',
  url: siteUrl,
  logo: `${siteUrl}/images/hero-top.jpg`,
  image: `${siteUrl}/images/hero-top.jpg`,
  description: siteDescription,
  telephone: '050-5536-8619',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '大橋1108番地4',
    addressLocality: '松戸市',
    addressRegion: '千葉県',
    postalCode: '270-2224',
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.7938,
    longitude: 139.9027,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: '松戸市' },
    { '@type': 'City', name: '流山市' },
    { '@type': 'City', name: '柏市' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '住宅設備工事',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'エアコン取付・取外し工事' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '給湯器取付・交換工事' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ガスコンロ・IH取付工事' } },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
      className={`${barlowCondensed.variable} ${ibmPlexSans.variable} ${notoSansJP.variable} ${notoSerifJP.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="bg-surface text-on-surface font-body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
