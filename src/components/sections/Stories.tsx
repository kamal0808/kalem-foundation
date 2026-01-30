'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const stories = [
  { name: 'Priya Sharma', age: 12, quote: "Before joining KLM Foundation, I couldn't even write my name. Now I dream of becoming a teacher.", achievement: 'Class topper for 2 years', color: 'bg-saffron-500' },
  { name: 'Rahul Kumar', age: 14, quote: 'The foundation gave me books, food, and hope. My parents believe I can become an engineer.', achievement: 'District science winner', color: 'bg-blue-500' },
  { name: 'Meera Patel', age: 11, quote: 'I love coming to school because here I feel like I matter. The teachers are like family.', achievement: 'Outstanding artist', color: 'bg-purple-500' },
];

const testimonials = [
  { name: 'Rajesh Singh', role: 'Parent', quote: "My daughter has transformed. She's confident, speaks English, and helps others study.", avatar: 'R' },
  { name: 'Dr. Anita Verma', role: 'Education Expert', quote: "KLM Foundation's holistic approach is exactly what rural India needs.", avatar: 'A' },
  { name: 'Vikram Malhotra', role: 'Donor', quote: "KLM Foundation's transparency and direct impact on children's lives is remarkable.", avatar: 'V' },
];

export function Stories() {
  return (
    <section id="stories" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-saffron-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Success Stories"
          title="Lives We've Touched"
          description="Every child has a story of transformation."
          className="mb-16"
        />

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative bg-cream-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-64 bg-gradient-to-br from-saffron-100 to-saffron-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl opacity-30">👧</div>
                </div>
                <div className={`absolute top-4 right-4 px-3 py-1 ${story.color} text-white text-xs font-semibold rounded-full`}>Age {story.age}</div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream-50 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-navy-700 mb-2">{story.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-saffron-500">⭐</span>
                  <span className="text-sm text-navy-500">{story.achievement}</span>
                </div>
                <blockquote className="relative text-navy-600 italic leading-relaxed">
                  <span className="absolute -top-2 -left-2 text-4xl text-saffron-200">"</span>
                  <p className="pl-4">{story.quote}</p>
                </blockquote>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 ${story.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-navy-600 to-navy-700 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">What People Say</h3>
            <p className="text-white/70">Voices from our community of supporters</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-saffron-500 rounded-full flex items-center justify-center text-white font-bold">{t.avatar}</div>
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-sm text-white/60">{t.role}</div>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed text-sm">"{t.quote}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
