'use client';

import { motion } from 'framer-motion';
import { Cpu, Layers, Shield, WandSparkles } from 'lucide-react';
import Image from 'next/image';
import { useSiteLocale } from '@/components/SiteProvider';
import { withBasePath } from '@/lib/with-base-path';

const icons = [Cpu, Layers, Shield, WandSparkles];

export default function Features() {
  const { content } = useSiteLocale();

  return (
    <section id="features" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-wave bg-cover bg-center opacity-35" />
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-3xl font-extrabold sm:text-4xl"
        >
          {content.features.title}
        </motion.h2>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,430px)] xl:grid-cols-[minmax(0,1fr)_minmax(360px,460px)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[28rem]"
          >
            <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-cyan-400/20 blur-3xl" />
            <Image
              src={withBasePath('/images/features-brain-bottle.jpg')}
              alt={content.features.title}
              width={800}
              height={1280}
              loading="lazy"
              className="h-auto w-full rounded-3xl border border-white/10 bg-black/70 object-contain p-2"
            />
          </motion.div>

          <div className="grid gap-4">
            {content.features.items.map((feature, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="glass flex min-h-[6.5rem] items-center gap-5 rounded-2xl px-5 py-4 transition"
                >
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold leading-relaxed text-white/95">{feature.title}</h3>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
