'use client';

import { motion } from 'framer-motion';
import { AlertCircle, HelpCircle, SearchX, TimerOff } from 'lucide-react';
import { useSiteLocale } from '@/components/SiteProvider';

const icons = [HelpCircle, AlertCircle, SearchX, TimerOff];

export default function ProblemSection() {
  const { content } = useSiteLocale();

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-center text-3xl font-extrabold sm:text-4xl"
        >
          {content.problem.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center text-lg text-white/75"
        >
          {content.problem.subtitle}
        </motion.p>

        <div className="grid gap-4 sm:grid-cols-2">
          {content.problem.points.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article
                key={point}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-5 transition"
              >
                <div className="mb-3 inline-flex rounded-lg bg-rose-400/15 p-3 text-rose-200">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-semibold text-white/90">{point}</p>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-base font-semibold text-white/85">{content.problem.result}</p>
      </div>
    </section>
  );
}