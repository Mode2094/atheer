'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Locale } from '@/lib/site-content';
import { siteContent } from '@/lib/site-content';
import AnimatedBackdrop from '@/components/AnimatedBackdrop';

type SiteContextValue = {
  locale: Locale;
  isArabic: boolean;
  content: (typeof siteContent)[Locale];
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

function SiteProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ar');

  useEffect(() => {
    const saved = localStorage.getItem('atheer_locale');
    if (saved === 'ar' || saved === 'en') {
      setLocaleState(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('atheer_locale', locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  const value = useMemo<SiteContextValue>(
    () => ({
      locale,
      isArabic: locale === 'ar',
      content: siteContent[locale],
      setLocale: setLocaleState,
      toggleLocale: () => setLocaleState((prev) => (prev === 'ar' ? 'en' : 'ar'))
    }),
    [locale]
  );

  return (
    <SiteContext.Provider value={value}>
      <AnimatedBackdrop />
      <div dir={value.isArabic ? 'rtl' : 'ltr'} className="relative z-10 transition-all duration-500">
        {children}
      </div>
    </SiteContext.Provider>
  );
}

export function useSiteLocale() {
  const ctx = useContext(SiteContext);
  if (!ctx) {
    throw new Error('useSiteLocale must be used within SiteProvider');
  }

  return ctx;
}

export default SiteProvider;