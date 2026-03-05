'use client';

import { motion } from 'framer-motion';
import { useSiteLocale } from '@/components/SiteProvider';

type ComparisonRow = {
  area: string;
  before: string;
  after: string;
  difference: string;
};

const arRows: ComparisonRow[] = [
  {
    area: 'العميل في المتجر',
    before: 'تائه، يحتار بين 50 عطراً، يطلب مساعدة البائع بشكل متكرر.',
    after: 'واثق، يخوض تجربة تفاعلية قصيرة، ويحصل على توصيته خلال دقائق.',
    difference: 'تحوّل كامل في شعور العميل وثقته.'
  },
  {
    area: 'دقة التوصية',
    before: 'تعتمد على خبرة البائع وحدسه، أو على سؤال العميل (الذي لا يعرف أصلاً).',
    after: 'تعتمد على تحليل الشخصية + التفاعل الحقيقي، وتخرج بتوصية محسوبة بدقة.',
    difference: 'من تخمين إلى علم.'
  },
  {
    area: 'معدل الشراء',
    before: '70% من العملاء يغادرون بدون شراء.',
    after: 'ترتفع احتمالية الشراء لتصل إلى 65%+ لأن التوصية دقيقة.',
    difference: 'زيادة ملموسة في المبيعات.'
  },
  {
    area: 'مخزون العطور',
    before: 'العطور بطيئة الحركة تتراكم، والعطور الرائجة تنفد بسرعة بدون تخطيط.',
    after: 'لوحة التحكم تكشف أي العطور الأكثر توافقاً مع العملاء، مما يساعد في طلب الكميات المناسبة.',
    difference: 'إدارة مخزون ذكية وخفض التالف.'
  },
  {
    area: 'بيانات العملاء',
    before: 'لا توجد بيانات حقيقية. فقط أرقام مبيعات.',
    after: 'لدى المتجر بصمة عطرية رقمية لكل عميل، وتقرير دقيق عن تفضيلات السوق.',
    difference: 'أصول بيانات قيّمة يمكن استخدامها للتسويق.'
  },
  {
    area: 'وقت التجربة',
    before: 'العميل قد يقضي ساعة كاملة في التجربة والتردد.',
    after: 'تجربة سريعة لا تتجاوز بضع دقائق، من التحليل إلى التوصية.',
    difference: 'توفير وقت العميل واستقبال المزيد من الزبائن.'
  },
  {
    area: 'كفاءة الموظفين',
    before: 'البائع يقضي وقته في الشرح والتخمين ومحاولة إقناع العميل.',
    after: 'البائع يوجه العميل لجهاز أثير، ثم يتسلمه وهو واثق من خياره.',
    difference: 'توفير جهد البائعين وتوجيههم للإغلاق والخدمة.'
  },
  {
    area: 'تجربة ما بعد البيع',
    before: 'تنتهي العلاقة بمجرد خروج العميل من المتجر.',
    after: 'يمكن استخدام بيانات العميل لاقتراح عطور جديدة أو إبلاغه بوصول ما يناسبه.',
    difference: 'بناء ولاء طويل الأمد وتكرار الزيارة.'
  },
  {
    area: 'الميزة التنافسية',
    before: 'متجرك كأي متجر آخر، يعتمد على الرفوف والروائح التقليدية.',
    after: 'متجرك هو الوحيد في السوق الذي يقدم تجربة علمية وتفاعلية بهذا المستوى.',
    difference: 'تميّز مطلق عن المنافسين.'
  }
];

const enRows: ComparisonRow[] = [
  {
    area: 'Customer in Store',
    before: 'Confused among many scents and repeatedly asks the salesperson for help.',
    after: 'Confident, goes through a short interactive journey, and gets a recommendation in minutes.',
    difference: 'A full shift in confidence and buying comfort.'
  },
  {
    area: 'Recommendation Accuracy',
    before: 'Based mostly on salesperson intuition or customer guesses.',
    after: 'Based on personality analysis plus real interaction insights, with precise recommendation matching.',
    difference: 'From guessing to precision.'
  },
  {
    area: 'Purchase Rate',
    before: 'Many customers leave without buying.',
    after: 'Purchase probability increases significantly thanks to accurate recommendations.',
    difference: 'Visible sales uplift.'
  },
  {
    area: 'Fragrance Inventory',
    before: 'Slow-moving products pile up while popular ones run out unexpectedly.',
    after: 'A smart dashboard highlights best-fit fragrances to improve replenishment planning.',
    difference: 'Smarter stock management and less waste.'
  },
  {
    area: 'Customer Data',
    before: 'No actionable data beyond sales numbers.',
    after: 'Each customer has a digital fragrance profile and clear market preference insights.',
    difference: 'Valuable data assets for targeted marketing.'
  },
  {
    area: 'Experience Time',
    before: 'The customer may spend a long time testing and hesitating.',
    after: 'A fast journey from analysis to recommendation in just minutes.',
    difference: 'Time saved and higher store throughput.'
  },
  {
    area: 'Team Efficiency',
    before: 'Staff spend time explaining, guessing, and trying to persuade.',
    after: 'Staff guide customers into Aatheer and continue from a stronger close position.',
    difference: 'Better team productivity and service quality.'
  },
  {
    area: 'Post-Sale Journey',
    before: 'Relationship ends when the customer leaves the store.',
    after: 'Customer profile can be used to suggest new fragrances and personalized updates.',
    difference: 'Long-term loyalty and repeat visits.'
  },
  {
    area: 'Competitive Edge',
    before: 'Store experience is similar to traditional competitors.',
    after: 'A differentiated, high-tech interactive fragrance journey.',
    difference: 'Clear market differentiation.'
  }
];

export default function ComparisonTable() {
  const { isArabic } = useSiteLocale();
  const rows = isArabic ? arRows : enRows;

  return (
    <section id="comparison" className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-3xl font-extrabold sm:text-4xl"
        >
          {isArabic ? '📊 جدول المقارنة: قبل وبعد استخدام نظام أثير' : '📊 Comparison Table: Before vs After Aatheer'}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 max-w-4xl text-center text-white/75"
        >
          {isArabic
            ? 'مقارنة مباشرة توضح أثر أثير على تجربة العميل، كفاءة الفريق، والمبيعات داخل المتجر.'
            : 'A direct side-by-side view of how Aatheer transforms customer journey, team efficiency, and sales outcomes.'}
        </motion.p>

        <div className="glass overflow-hidden rounded-3xl">
          <div className="overflow-x-auto">
            <table className="min-w-[980px] w-full border-collapse text-sm">
              <thead>
                <tr className="bg-white/10 text-white">
                  <th className="px-4 py-4 text-start font-extrabold">
                    {isArabic ? 'المجال' : 'Area'}
                  </th>
                  <th className="px-4 py-4 text-start font-extrabold">
                    {isArabic ? 'قبل أثير (التجربة التقليدية)' : 'Before Aatheer (Traditional)'}
                  </th>
                  <th className="px-4 py-4 text-start font-extrabold">
                    {isArabic ? 'بعد أثير (التجربة الذكية)' : 'After Aatheer (Smart)'}
                  </th>
                  <th className="px-4 py-4 text-start font-extrabold">
                    {isArabic ? 'الفرق الملموس' : 'Tangible Difference'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.area}
                    className={index % 2 === 0 ? 'bg-white/[0.04]' : 'bg-white/[0.02]'}
                  >
                    <td className="px-4 py-4 font-bold text-cyan-100">{row.area}</td>
                    <td className="px-4 py-4 text-white/75 leading-relaxed">{row.before}</td>
                    <td className="px-4 py-4 text-white/85 leading-relaxed">{row.after}</td>
                    <td className="px-4 py-4 font-semibold text-cyan-200 leading-relaxed">{row.difference}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
