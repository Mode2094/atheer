'use client';

import { motion } from 'framer-motion';
import { useSiteLocale } from '@/components/SiteProvider';

export default function SolutionSection() {
  const { content } = useSiteLocale();

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 sm:p-12"
        >
          <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">{content.solution.title}</h2>
          <p className="mb-5 max-w-4xl text-lg text-white/80">{content.solution.intro}</p>
          <p className="mb-4 text-2xl font-extrabold text-cyan-200 sm:text-3xl">{content.solution.core}</p>
          <p className="text-white/75">{content.solution.support}</p>
        </motion.div>
      </div>
    </section>
  );
}