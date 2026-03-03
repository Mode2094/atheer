'use client';

import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';
import { useSiteLocale } from '@/components/SiteProvider';

export default function Footer() {
  const { content } = useSiteLocale();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell space-y-4">
        <div className="flex justify-center">
          <BrandLogo href="#home" size="md" />
        </div>

        <p className="text-center text-base text-white/75">{content.footer.tagline}</p>

        <ul className="flex flex-wrap items-center justify-center gap-5 pt-2">
          {content.nav.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-white/75 transition hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}