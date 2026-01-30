'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const programs = [
  { icon: '📖', title: 'Quality Education', description: 'Interactive learning with trained teachers.', features: ['Small class sizes', 'Personalized attention', 'Life skills'], color: 'from-saffron-500 to-orange-500', bgColor: 'bg-saffron-50' },
  { icon: '🍎', title: 'Nutrition Program', description: 'Healthy meals so children can focus on learning.', features: ['Balanced meals', 'Fresh ingredients', 'Health monitoring'], color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50' },
  { icon: '📚', title: 'Learning Resources', description: 'Free textbooks, uniforms, and supplies.', features: ['Books & stationery', 'School uniforms', 'Digital resources'], color: 'from-blue-500 to-indigo-500', bgColor: 'bg-blue-50' },
  { icon: '🎨', title: 'Extracurricular', description: 'Sports, arts, music for creativity and wellbeing.', features: ['Sports & games', 'Art & craft', 'Cultural events'], color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-50' },
  { icon: '👩‍🏫', title: 'Mentorship', description: 'One-on-one guidance to discover potential.', features: ['Career guidance', 'Personal development', 'Life skills'], color: 'from-rose-500 to-red-500', bgColor: 'bg-rose-50' },
  { icon: '👨‍👩‍👧‍👦', title: 'Family Support', description: 'Working with families for supportive environments.', features: ['Parent workshops', 'Community building', 'Resource access'], color: 'from-amber-500 to-yellow-500', bgColor: 'bg-amber-50' },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-24 md:py-32 bg-cream-100 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />

      <Container className="relative">
        <SectionHeading
          eyebrow="What We Do"
          title="Programs That Transform Lives"
          description="Our comprehensive approach ensures every child receives the support they need."
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-navy-900/5 hover:shadow-2xl transition-all duration-500"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className={`w-16 h-16 ${program.bgColor} rounded-2xl flex items-center justify-center text-3xl mb-6`}
              >
                {program.icon}
              </motion.div>

              <h3 className="font-display text-xl font-bold text-navy-700 mb-3">{program.title}</h3>
              <p className="text-navy-500 mb-6 leading-relaxed">{program.description}</p>

              <ul className="space-y-2">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-navy-600">
                    <svg className="w-4 h-4 text-saffron-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${program.color} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
