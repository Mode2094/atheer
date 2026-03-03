'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useSiteLocale } from '@/components/SiteProvider';

type BrandLogoProps = {
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
};

const sizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-14 w-14'
};

export default function BrandLogo({
  href = '#home',
  className = '',
  size = 'md',
  showText = true
}: BrandLogoProps) {
  const { content } = useSiteLocale();
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={href} className={`inline-flex items-center gap-2 ${className}`.trim()}>
      {!imageError && (
        <span className={`relative overflow-hidden rounded-xl border border-white/20 bg-white/5 ${sizeClasses[size]}`}>
          <Image
            src="/images/atheer-logo.jpg"
            alt={content.brand}
            fill
            sizes="56px"
            className="object-cover"
            onError={() => setImageError(true)}
            priority={size !== 'sm'}
          />
        </span>
      )}
      {showText && <span className="text-xl font-extrabold tracking-[0.2em]">{content.brand}</span>}
    </Link>
  );
}