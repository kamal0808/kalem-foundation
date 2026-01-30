'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

const tiers = [
  { amount: 500, title: 'Friend', description: 'Provides notebooks and stationery for one child', popular: false },
  { amount: 2000, title: 'Champion', description: "Sponsors one child's education and meals for a month", popular: true },
  { amount: 5000, title: 'Hero', description: 'Supports multiple children with education and supplies', popular: false },
  { amount: 10000, title: 'Transformer', description: 'Funds a significant portion of our monthly costs', popular: false },
];

const otherWays = [
  { icon: '🙋', title: 'Volunteer', description: 'Share your skills and time with children who need guidance.', cta: 'Join as Volunteer' },
  { icon: '🤝', title: 'Partner', description: 'Corporate partnerships and CSR collaborations.', cta: 'Become a Partner' },
  { icon: '📢', title: 'Spread the Word', description: 'Share our mission with your network.', cta: 'Share Our Story' },
];

export function GetInvolved() {
  return (
    <section id="donate" className="relative py-24 md:py-32 bg-cream-100 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Get Involved"
          title="Be Part of Their Journey"
          description="Your contribution can change a child's life forever."
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 ${tier.popular ? 'ring-2 ring-saffron-500' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-saffron-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">Most Popular</div>
              )}
              <div className="text-center mb-6">
                <div className="inline-flex items-baseline">
                  <span className="text-lg text-navy-500">₹</span>
                  <span className="font-display text-4xl font-bold text-navy-700">{tier.amount.toLocaleString()}</span>
                </div>
                <div className="text-sm text-navy-500 mt-1">per month</div>
              </div>
              <h3 className="font-display text-xl font-bold text-center text-navy-700 mb-3">{tier.title}</h3>
              <p className="text-navy-500 text-sm text-center leading-relaxed mb-6">{tier.description}</p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${tier.popular ? 'bg-gradient-to-r from-saffron-500 to-saffron-600 text-white shadow-lg shadow-saffron-500/30' : 'bg-navy-100 text-navy-700 hover:bg-saffron-500 hover:text-white'}`}
              >
                Donate Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-lg mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-navy-700 mb-2">Custom Amount?</h3>
              <p className="text-navy-500">Every rupee counts. Donate any amount.</p>
            </div>
            <form className="flex gap-3 flex-col sm:flex-row">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-500 font-semibold">₹</span>
                <input type="number" placeholder="Enter amount" className="pl-10 pr-6 py-4 bg-cream-50 border-2 border-navy-100 rounded-full text-navy-700 placeholder:text-navy-400 focus:outline-none focus:border-saffron-500 transition-colors w-full sm:w-48" />
              </div>
              <Button variant="primary">Donate <span className="ml-1">→</span></Button>
            </form>
          </div>
        </motion.div>

        <div className="text-center mb-10">
          <h3 className="font-display text-2xl font-bold text-navy-700 mb-2">Other Ways to Help</h3>
          <p className="text-navy-500">Not just donations — there are many ways to make a difference</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {otherWays.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-16 h-16 bg-saffron-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:bg-saffron-200 transition-colors">{way.icon}</motion.div>
              <h4 className="font-display text-lg font-bold text-navy-700 mb-2">{way.title}</h4>
              <p className="text-navy-500 text-sm leading-relaxed mb-4">{way.description}</p>
              <motion.a href="#contact" whileHover={{ scale: 1.02 }} className="text-saffron-600 font-semibold text-sm hover:text-saffron-700 transition-colors">{way.cta} →</motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 border border-green-200 rounded-full text-green-700 text-sm">
            <span>🎁</span>
            <span><strong>Tax Benefits:</strong> All donations are eligible for tax exemption under Section 80G</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
