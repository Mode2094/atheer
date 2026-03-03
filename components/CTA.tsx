'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSiteLocale } from '@/components/SiteProvider';

export default function CTA() {
  const { content } = useSiteLocale();

  return (
    <section id="cta" className="pb-20 pt-8 sm:pb-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-l from-blue-600/30 via-blue-500/20 to-cyan-400/20 p-8 text-center sm:p-12"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_50%)]" />
          <h2 className="mb-3 text-3xl font-extrabold sm:text-4xl">{content.cta.title}</h2>
          <p className="mx-auto max-w-2xl text-white/80">{content.cta.text}</p>
          <div className="mt-6">
            <Link
              href="#contact"
              className="inline-flex rounded-full bg-white px-8 py-3 font-extrabold text-base text-slate-900 transition hover:scale-105"
            >
              {content.cta.button}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}