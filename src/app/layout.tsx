import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kalemfoundation.org'),
  title: 'Kalem Foundation | Kalinga Empowerment',
  description: 'Transforming rural education in Odisha, India. We don\'t teach—we ignite. From village classrooms to youth empowerment, building futures one community at a time.',
  keywords: [
    'Kalem Foundation',
    'Kalinga Empowerment',
    'Odisha education',
    'rural education India',
    'WhySchool',
    'Ritik Prajjwal Sahu',
  ],
  openGraph: {
    title: 'Kalem Foundation | We don\'t teach. We ignite.',
    description: 'Transforming rural education in Odisha. Building futures one village at a time.',
    type: 'website',
    images: [{ url: '/images/kalem-08.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalem Foundation',
    description: 'Transforming rural education in Odisha.',
    images: ['/images/kalem-08.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
