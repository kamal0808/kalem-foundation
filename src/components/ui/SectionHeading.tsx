'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  alignment = 'center',
  className,
}: SectionHeadingProps) {
  const alignments = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('max-w-3xl', alignments[alignment], className)}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-saffron-600 bg-saffron-100 rounded-full uppercase tracking-wider"
        >
          {eyebrow}
        </motion.span>
      )}
      <h2 className="heading-lg text-navy-700 mb-6">{title}</h2>
      {description && (
        <p className="body-lg max-w-2xl mx-auto">{description}</p>
      )}
    </motion.div>
  );
}
