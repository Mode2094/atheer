'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from '@/components/BrandLogo';
import LanguageSwitch from '@/components/LanguageSwitch';
import { useSiteLocale } from '@/components/SiteProvider';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { content } = useSiteLocale();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="section-shell mt-4">
        <div className="glass rounded-2xl px-4 py-3 shadow-glow">
          <div className="flex items-center justify-between gap-3">
            <BrandLogo href="#home" size="sm" />

            <ul className="hidden items-center gap-6 md:flex">
              {content.nav.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-2 md:flex">
              <LanguageSwitch />
              <Link
                href="#contact"
                className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-2 text-sm font-bold text-white transition hover:scale-105"
              >
                {content.nav.cta}
              </Link>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <LanguageSwitch />
              <button
                type="button"
                className="rounded-lg border border-white/20 p-2 text-white"
                onClick={() => setOpen((value) => !value)}
                aria-label="menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden md:hidden"
              >
                <ul className="mt-3 space-y-2 border-t border-white/10 pt-3">
                  {content.nav.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-2 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}