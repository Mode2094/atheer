'use client';

import { motion } from 'framer-motion';
import { useSiteLocale } from '@/components/SiteProvider';

export default function CustomerExperience() {
  const { content } = useSiteLocale();

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 text-center sm:p-12"
        >
          <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">{content.experience.title}</h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/75">{content.experience.text}</p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {content.experience.pills.map((pill) => (
              <span key={pill} className="rounded-full border border-white/15 bg-white/5 px-5 py-2 font-bold">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}