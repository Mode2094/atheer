'use client';

import { motion } from 'framer-motion';
import { useSiteLocale } from '@/components/SiteProvider';

export default function HowItWorks() {
  const { content } = useSiteLocale();

  return (
    <section id="how-it-works" className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-3xl font-extrabold sm:text-4xl"
        >
          {content.how.title}
        </motion.h2>

        <div className="grid gap-4 lg:grid-cols-2">
          {content.how.steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass relative overflow-hidden rounded-2xl p-6 transition"
            >
              <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-l from-blue-500 to-cyan-400 text-sm font-extrabold">
                {index + 1}
              </span>
              <h3 className="mb-3 text-xl font-extrabold text-white/95">{step.title}</h3>
              <p className="mb-3 text-white/80">{step.description}</p>
              <p className="mb-3 text-sm text-cyan-100/80">{step.support}</p>
              <p className="text-sm font-bold text-white/90">{step.result}</p>
              <div className="pointer-events-none absolute -inset-x-8 -bottom-10 h-20 bg-blue-400/10 blur-2xl" />
            </motion.article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <h3 className="mb-2 text-xl font-extrabold">{content.how.whyTitle}</h3>
          <p className="text-white/80">{content.how.whyText}</p>
        </div>
      </div>
    </section>
  );
}