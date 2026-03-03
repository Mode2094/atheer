'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useSiteLocale } from '@/components/SiteProvider';

export default function ResultsSection() {
  const { content } = useSiteLocale();

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-3xl font-extrabold sm:text-4xl"
        >
          {content.results.title}
        </motion.h2>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {content.results.items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              className="glass flex items-center gap-3 rounded-xl p-4 transition"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
              <span className="font-medium text-white/90">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}