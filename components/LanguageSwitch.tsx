'use client';

import { Languages } from 'lucide-react';
import { useSiteLocale } from '@/components/SiteProvider';

export default function LanguageSwitch() {
  const { locale, toggleLocale } = useSiteLocale();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-2 text-xs font-bold text-white/90 transition hover:bg-white/10"
      aria-label="Toggle language"
    >
      <Languages className="h-4 w-4" />
      {locale === 'ar' ? 'EN' : 'AR'}
    </button>
  );
}