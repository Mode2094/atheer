'use client';

import { motion } from 'framer-motion';
import { useSiteLocale } from '@/components/SiteProvider';

export default function TrustSection() {
  const { content } = useSiteLocale();

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-cyan-300/20 bg-cyan-500/10 p-8 text-center sm:p-10"
        >
          <h2 className="mb-3 text-3xl font-extrabold sm:text-4xl">{content.trust.title}</h2>
          <p className="mx-auto max-w-3xl text-white/80">{content.trust.text}</p>
        </motion.div>
      </div>
    </section>
  );
}