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
  title: 'Kalem Foundation | Kalinga Empowerment Foundation',
  description: 'Empowering rural communities through education, youth leadership, and grassroots development. From classrooms to careers, we transform lives across Odisha, India.',
  keywords: [
    'Kalem Foundation',
    'Kalinga Empowerment Foundation',
    'rural education India',
    'Odisha NGO',
    'youth empowerment',
    'community development',
    'WhySchool',
    'Ritik Prajjwal Sahu',
    'education nonprofit',
    'rural schools India'
  ],
  authors: [{ name: 'Kalem Foundation', url: 'https://kalemfoundation.org' }],
  creator: 'Kalem Foundation',
  publisher: 'Kalem Foundation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Kalem Foundation | Transforming Lives Through Education',
    description: 'Grassroots education and community empowerment in Odisha. Rural schools, youth programs, and career clarity initiatives.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Kalem Foundation',
    images: [
      {
        url: '/images/kalem-08.jpg',
        width: 1200,
        height: 630,
        alt: 'Kalem Foundation - Empowering rural communities through education',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalem Foundation | Kalinga Empowerment',
    description: 'Empowering rural communities through education in Odisha.',
    images: ['/images/kalem-08.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {/* Grain overlay for texture */}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
