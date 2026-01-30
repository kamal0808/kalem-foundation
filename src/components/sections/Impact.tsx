'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';

const stats = [
  { number: 500, suffix: '+', label: 'Children Educated', icon: '👧' },
  { number: 15000, suffix: '+', label: 'Meals Served', icon: '🍽️' },
  { number: 6, suffix: '', label: 'Years of Impact', icon: '📅' },
  { number: 98, suffix: '%', label: 'Attendance Rate', icon: '✅' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setDisplayValue(Math.floor(easeOutQuart * value));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue.toLocaleString()}{suffix}</span>;
}

export function Impact() {
  return (
    <section id="impact" className="relative py-24 md:py-32 bg-navy-700 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-500 via-orange-500 to-saffron-500" />
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-saffron-500/10 rounded-full blur-3xl"
      />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-saffron-400 bg-saffron-500/20 rounded-full uppercase tracking-wider">Our Impact</span>
          <h2 className="heading-lg text-white mb-6">Numbers That Tell Our Story</h2>
          <p className="body-lg text-white/70 max-w-2xl mx-auto">Every number represents a life touched, a dream nurtured.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-300">
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="text-4xl mb-4">{stat.icon}</motion.div>
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-saffron-400 to-orange-400 mb-2">
                  <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                </div>
                <div className="font-semibold text-white">{stat.label}</div>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-saffron-500/20 to-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-white/80 text-lg mb-4">With your support, we can reach even more children.</p>
          <motion.a
            href="#donate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-saffron-500 to-orange-500 text-white font-semibold rounded-full shadow-lg shadow-saffron-500/30"
          >
            <span>❤️</span> Help Us Grow
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
