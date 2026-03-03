import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import './globals.css';

const tajawal = Tajawal({
  subsets: ['arabic'],
  display: 'swap',
  weight: ['300', '400', '500', '700', '800']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://atheer.ai'),
  title: 'أثير | نظام توصية عطور ذكي لمتاجر المستقبل',
  description:
    'أثير منصة عربية متقدمة لتوصية العطور، تمنح متاجر العطور تجربة عميل أكثر دقة وفخامة وتعزز المبيعات والولاء.',
  keywords: [
    'أثير',
    'توصية عطور',
    'ذكاء اصطناعي',
    'متاجر العطور',
    'تقنية العطور'
  ],
  openGraph: {
    title: 'أثير | نظام توصية عطور ذكي',
    description:
      'تقنية متقدمة تساعد متاجر العطور على تقديم توصيات دقيقة وتجربة عميل استثنائية.',
    url: 'https://atheer.ai',
    siteName: 'أثير',
    locale: 'ar_SA',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'أثير | نظام توصية عطور ذكي',
    description:
      'حل عربي فاخر لمتاجر العطور يعتمد على ذكاء اصطناعي متقدم لتوصيات أكثر دقة.'
  },
  icons: {
    icon: '/icon.jpg',
    shortcut: '/icon.jpg',
    apple: '/apple-icon.jpg'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      {/* Global shell: Arabic RTL + unified typography and color context */}
      <body className={`${tajawal.className} bg-base text-white antialiased`}>{children}</body>
    </html>
  );
}
