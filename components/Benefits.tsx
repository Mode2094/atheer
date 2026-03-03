'use client';

import { motion } from 'framer-motion';
import {
  BarChart3,
  Gem,
  Handshake,
  ShieldCheck,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { useSiteLocale } from '@/components/SiteProvider';

const icons = [TrendingUp, BarChart3, Sparkles, ShieldCheck, Gem, Handshake];

export default function Benefits() {
  const { content } = useSiteLocale();

  return (
    <section id="benefits" className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-3xl font-extrabold sm:text-4xl"
        >
          {content.benefits.title}
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.benefits.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -7, scale: 1.01 }}
                className="glass group rounded-2xl p-5 transition"
              >
                <div className="mb-4 inline-flex rounded-xl bg-blue-400/15 p-3 text-blue-200 transition group-hover:bg-blue-400/25">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white/95">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}