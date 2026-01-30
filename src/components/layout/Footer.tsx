'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

const footerLinks = {
  foundation: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Mission', href: '#mission' },
    { name: 'Programs', href: '#programs' },
    { name: 'Impact', href: '#impact' },
  ],
  getInvolved: [
    { name: 'Donate', href: '#donate' },
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'Partner', href: '#partner' },
  ],
  resources: [
    { name: 'Annual Reports', href: '#reports' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-700 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-400 via-saffron-500 to-saffron-400" />
      
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative w-14 h-14">
                    <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-saffron-500 rounded-xl rotate-3" />
                    <div className="absolute inset-0 bg-white rounded-xl flex items-center justify-center font-display text-2xl font-bold text-saffron-600">K</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold">KLM</div>
                    <div className="text-sm text-white/60">Foundation</div>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed">Illuminating young minds through quality education in Satna, Madhya Pradesh.</p>
              </motion.div>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold mb-6">Foundation</h4>
              <ul className="space-y-3">
                {footerLinks.foundation.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/70 hover:text-saffron-400 transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold mb-6">Get Involved</h4>
              <ul className="space-y-3">
                {footerLinks.getInvolved.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/70 hover:text-saffron-400 transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/70 hover:text-saffron-400 transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-2xl p-8 mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h4 className="font-display text-xl font-semibold mb-2">Stay Updated</h4>
                <p className="text-white/70">Get stories of impact delivered to your inbox.</p>
              </div>
              <form className="flex gap-3 flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:border-saffron-500 transition-colors w-full sm:w-72"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-saffron-500 hover:bg-saffron-600 text-white font-semibold rounded-full transition-colors"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} KLM Foundation. Made with ❤️ in India.</p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-white/50 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-white/50 hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
