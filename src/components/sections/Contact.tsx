'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const contactInfo = [
  { icon: '📍', title: 'Visit Us', content: 'Satna, Madhya Pradesh, India', subContent: 'PIN: 485001' },
  { icon: '📧', title: 'Email Us', content: 'hello@klmfoundation.org', subContent: 'We respond within 24 hours' },
  { icon: '📞', title: 'Call Us', content: '+91 XXXXX XXXXX', subContent: 'Mon-Sat, 10 AM - 6 PM IST' },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cream-50 to-transparent" />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-saffron-600 bg-saffron-100 rounded-full uppercase tracking-wider">Contact Us</span>
            <h2 className="heading-lg text-navy-700 mb-6">Let's Start a Conversation</h2>
            <p className="body-md mb-8">Have questions? Want to volunteer or partner? We'd love to hear from you.</p>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy-700 mb-2">Your Name</label>
                  <input type="text" id="name" placeholder="John Doe" className="w-full px-5 py-4 bg-cream-50 border-2 border-navy-100 rounded-xl text-navy-700 placeholder:text-navy-400 focus:outline-none focus:border-saffron-500 transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy-700 mb-2">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-cream-50 border-2 border-navy-100 rounded-xl text-navy-700 placeholder:text-navy-400 focus:outline-none focus:border-saffron-500 transition-colors" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-navy-700 mb-2">Subject</label>
                <select id="subject" className="w-full px-5 py-4 bg-cream-50 border-2 border-navy-100 rounded-xl text-navy-700 focus:outline-none focus:border-saffron-500 transition-colors">
                  <option value="">Select a topic</option>
                  <option value="donation">Donation Inquiry</option>
                  <option value="volunteer">Volunteer Opportunity</option>
                  <option value="partnership">Corporate Partnership</option>
                  <option value="general">General Question</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy-700 mb-2">Your Message</label>
                <textarea id="message" rows={5} placeholder="Tell us how you'd like to help..." className="w-full px-5 py-4 bg-cream-50 border-2 border-navy-100 rounded-xl text-navy-700 placeholder:text-navy-400 focus:outline-none focus:border-saffron-500 transition-colors resize-none" />
              </div>
              <Button variant="primary" size="lg" className="w-full sm:w-auto">Send Message <span className="ml-2">→</span></Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-5 bg-cream-50 rounded-2xl border border-navy-100 hover:border-saffron-300 transition-colors"
                >
                  <div className="w-12 h-12 bg-saffron-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-navy-700 mb-1">{info.title}</h4>
                    <p className="text-navy-600">{info.content}</p>
                    <p className="text-sm text-navy-500">{info.subContent}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative h-64 bg-gradient-to-br from-navy-100 to-navy-200 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-3">🗺️</div>
                  <p className="text-navy-500 font-medium">Satna, Madhya Pradesh</p>
                  <motion.a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} className="inline-block mt-3 text-sm text-saffron-600 font-semibold hover:text-saffron-700">View on Google Maps →</motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-2xl text-white"
            >
              <h4 className="font-display text-xl font-bold mb-2">Follow Our Journey</h4>
              <p className="text-white/80 text-sm mb-4">Stay connected and see your impact in real-time.</p>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <motion.a key={social} href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors">{social}</motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
