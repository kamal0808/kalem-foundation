import type { Metadata } from 'next';
import { Source_Serif_4, Inter } from 'next/font/google';
import './globals.css';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'WhySchool.academy | Stop Learning. Start Building.',
  description: 'The 6-day career clarity bootcamp for Indian students. Bridge the gap between classroom theory and real-world application. By Kalinga Empowerment Foundation (Kalem).',
  keywords: ['WhySchool', 'Kalem Foundation', 'Kalinga Empowerment', 'career clarity', 'education bootcamp', 'Odisha', 'student empowerment', 'hands-on learning', 'AI education'],
  authors: [{ name: 'Ritik Prajjwal Sahu' }],
  openGraph: {
    title: 'WhySchool.academy | Stop Learning. Start Building.',
    description: 'Six days to turn your curiosity into career clarity. The bootcamp that connects classroom theory to real-world confidence.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'WhySchool by Kalem Foundation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhySchool.academy | Stop Learning. Start Building.',
    description: 'Six days to turn your curiosity into career clarity.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
