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
  title: 'Kalem Foundation | Empowering Youth in Odisha',
  description: 'The Kalem Foundation (Kalinga Empowerment Foundation) works to empower youth through education, skill development, and community building in Odisha, India.',
  keywords: ['Kalem Foundation', 'Kalinga Empowerment', 'Odisha', 'youth empowerment', 'education', 'rural development'],
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
