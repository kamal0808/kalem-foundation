
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
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
  title: 'Kalem Foundation | Kalinga Empowerment Foundation',
  description: 'Empowering rural communities through education, youth leadership, and grassroots development. From classrooms to careers, we transform lives across Odisha.',
  keywords: ['Kalem Foundation', 'Kalinga Empowerment Foundation', 'rural education', 'Odisha NGO', 'youth empowerment', 'community development', 'WhySchool', 'Ritik Prajjwal Sahu'],
  authors: [{ name: 'Kalem Foundation' }],
  openGraph: {
    title: 'Kalem Foundation | Transforming Lives Through Education',
    description: 'Grassroots education and community empowerment in Odisha. Rural schools, youth programs, and career clarity initiatives.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Kalem Foundation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalem Foundation | Kalinga Empowerment',
    description: 'Empowering rural communities through education in Odisha.',
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
      </body>
    </html>
  );
}
