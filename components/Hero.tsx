'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useSiteLocale } from '@/components/SiteProvider';
import { withBasePath } from '@/lib/with-base-path';

export default function Hero() {
  const { content, isArabic } = useSiteLocale();
  const [imageSrc, setImageSrc] = useState(withBasePath('/images/hero-luxury.jpg'));
  const trustLines = content.hero.trust
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <section id="home" className="relative pt-32 sm:pt-40">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-1 text-xs text-cyan-200">
              {isArabic ? 'تجربة ذكية ثنائية اللغة' : 'Interactive bilingual experience'}
            </span>

            <h1 className="whitespace-pre-line text-[20px] font-extrabold leading-tight text-white sm:text-[28px] lg:text-[32px]">
              {content.hero.title}
            </h1>

            <p className="max-w-2xl text-lg text-white/80">{content.hero.subtitle}</p>
            <p className="max-w-2xl text-base text-white/70">{content.hero.support}</p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className="rounded-full bg-gradient-to-l from-cyan-400 to-blue-500 px-6 py-3 font-bold text-white transition hover:scale-105"
              >
                {content.hero.ctaPrimary}
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white/90 transition hover:bg-white/10"
              >
                {content.hero.ctaSecondary}
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>

            <div className="glass rounded-2xl p-4">
              <ul className="space-y-2 text-sm text-cyan-100/85">
                {trustLines.map((line) => (
                  <li key={line} className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -14, 0], rotate: [0, 1.5, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="absolute -inset-8 -z-10 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="absolute inset-0 -z-10 rounded-3xl ring-1 ring-white/15" />
              <Image
                src={imageSrc}
                alt={content.brand}
                width={800}
                height={1200}
                priority
                onError={() => setImageSrc(withBasePath('/images/brain-abstract.png'))}
                className="h-[30rem] w-full rounded-3xl border border-white/10 object-cover object-center shadow-glow sm:h-[34rem]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
