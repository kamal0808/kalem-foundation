'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Mission } from '@/components/sections/Mission';
import { Programs } from '@/components/sections/Programs';
import { Impact } from '@/components/sections/Impact';
import { Stories } from '@/components/sections/Stories';
import { GetInvolved } from '@/components/sections/GetInvolved';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Mission />
      <Programs />
      <Impact />
      <Stories />
      <GetInvolved />
      <Contact />
      <Footer />
    </main>
  );
}
