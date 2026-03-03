'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useSiteLocale } from '@/components/SiteProvider';

export default function WhyAther() {
  const { content } = useSiteLocale();

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-3xl font-extrabold sm:text-4xl"
        >
          {content.why.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center text-lg text-white/75"
        >
          {content.why.intro}
        </motion.p>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {content.why.points.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass flex items-start gap-4 rounded-xl p-5"
            >
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/20">
                <Check className="h-4 w-4 text-cyan-300" />
              </span>
              <span className="text-base font-medium leading-relaxed text-white/90">{point}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-white/60">{content.why.creditsLabel}</p>
          <p className="text-xl font-extrabold text-cyan-200">{content.why.creditsName}</p>
        </div>
      </div>
    </section>
  );
}
