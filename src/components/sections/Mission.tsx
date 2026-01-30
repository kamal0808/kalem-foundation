'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '@/components/ui/Container';

const values = [
  { icon: '🌟', title: 'Empowerment', description: 'Empowering children with knowledge and skills that last a lifetime.' },
  { icon: '🤲', title: 'Compassion', description: 'Every child is treated with love, dignity, and respect.' },
  { icon: '🌱', title: 'Growth', description: 'Nurturing academic excellence and holistic development.' },
  { icon: '🤝', title: 'Community', description: 'Working with families to create lasting change.' },
];

export function Mission() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-saffron-50 to-transparent" />
      <motion.div style={{ y }} className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-saffron-100 rounded-full blur-3xl opacity-50" />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-saffron-600 bg-saffron-100 rounded-full uppercase tracking-wider">Our Mission</span>
            <h2 className="heading-lg text-navy-700 mb-6">Illuminating Young Minds, One Child at a Time</h2>
            <div className="space-y-4 body-md">
              <p>
                Named after Lalita Mathur, a woman who dedicated her life to nurturing children, 
                the <strong className="text-navy-700">KLM Foundation</strong> carries forward her legacy.
              </p>
              <p>
                We provide free quality education, nutritious meals, school supplies, and 
                mentorship to underprivileged children — helping them break the cycle of poverty.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-6 bg-cream-100 rounded-2xl border-l-4 border-saffron-500"
            >
              <p className="italic text-navy-600 mb-3">
                "Education is the most powerful gift we can give a child. It's about giving them wings to dream."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-saffron-500 rounded-full flex items-center justify-center text-white font-bold">L</div>
                <div>
                  <div className="font-semibold text-navy-700">Lalita Mathur</div>
                  <div className="text-sm text-navy-500">Founding Inspiration</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 bg-white rounded-2xl shadow-lg shadow-navy-900/5 border border-navy-100 hover:border-saffron-300 hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 bg-saffron-100 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:bg-saffron-200 transition-colors"
                >
                  {value.icon}
                </motion.div>
                <h3 className="font-display text-xl font-bold text-navy-700 mb-2">{value.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
