import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'KLM Foundation | Illuminating Young Minds Through Education',
  description: 'The Kamal Lalita Mathur Foundation is dedicated to providing quality education to underprivileged children in Satna, Madhya Pradesh.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth scrollbar-thin`}>
      <body className="font-body antialiased bg-cream-100 text-navy-600 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
