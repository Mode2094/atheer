'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { withBasePath } from '@/lib/with-base-path';

const stats = [
  { value: '95%', label: 'نسبة توافق مرتفعة بين التوصية النهائية وتفضيل العميل الفعلي' },
  { value: '77%', label: 'من العملاء يبحثون عن أثر عاطفي واضح عند اختيار العطر' },
  { value: '+50%', label: 'من الفئة العمرية 12-34 يختارون العطر بحسب المزاج' }
];

export default function InsightsSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-center text-3xl font-extrabold sm:text-4xl"
        >
          رؤى السوق وتجربة العطور الحديثة
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-4xl text-center text-lg text-white/75"
        >
          العلاقة بين الرائحة والعاطفة عميقة جداً، ولذلك أصبح التوجيه الذكي في المتجر عنصراً حاسماً في رفع رضا العميل وتسريع قرار الشراء. بدلاً من إرباك العميل بكثرة الخيارات، تُقدَّم له تجربة شخصية دقيقة ومباشرة.
        </motion.p>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((item, index) => (
            <motion.article
              key={item.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <p className="text-3xl font-extrabold text-cyan-300">{item.value}</p>
              <p className="mt-2 text-sm text-white/75">{item.label}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid items-center gap-4 lg:grid-cols-2">
          <div className="glass rounded-2xl p-5">
            <p className="text-white/80">
              تم اعتماد هذا النوع من التجارب في بيئات بيع فاخرة، مع نتائج قوية في جودة التوصية وثقة العميل. كما أثبت نجاحه في الفعاليات الكبرى ومساحات التجربة داخل المتاجر الرئيسية.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass relative h-40 overflow-hidden rounded-2xl">
              <Image
                src={withBasePath('/images/atheer-logo.jpg')}
                alt="شعار أثير"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="glass relative h-40 overflow-hidden rounded-2xl">
              <Image
                src={withBasePath('/images/perfume-luxury.png')}
                alt="تجربة عطور فاخرة"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
