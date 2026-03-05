'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useSiteLocale } from '@/components/SiteProvider';

type QAItem = {
  question: string;
  intro: string;
  details?: { label: string; text: string }[];
  ending?: string;
};

const faqAr: QAItem[] = [
  {
    question: '❶ هل جهاز أثير معقد ويتطلب تدريباً طويلاً؟',
    intro: 'لا على الإطلاق. صُمم أثير ليكون مستخدماً صديقاً منذ اللحظة الأولى.',
    details: [
      {
        label: 'التجربة',
        text: 'واجهة الجهاز تشبه استخدام الهاتف الذكي، وأي موظف في متجرك يمكنه تشغيله خلال أقل من 10 دقائق.'
      },
      {
        label: 'التدريب',
        text: 'نوفر دليلاً سريعاً (فيديو + كتيب) يشرح كل خطوة. والعميل يستطيع استخدام الجهاز بنفسه بسهولة.'
      }
    ]
  },
  {
    question: '❷ كيف يحمي بيانات عملائي؟ (الأمان والخصوصية)',
    intro: 'خصوصية عملائك هي خط أحمر بالنسبة لنا.',
    details: [
      {
        label: 'التشفير',
        text: 'كل بيانات التفاعل تُشفر فوراً ولا يمكن لأي طرف غير مصرح الوصول إليها.'
      },
      {
        label: 'الملكية',
        text: 'لوحة التحكم ملكك وحدك، ولا تُشارك البيانات مع أي جهة بدون إذنك.'
      },
      {
        label: 'الامتثال',
        text: 'نلتزم بأعلى معايير حماية البيانات المحلية والعالمية (GDPR readiness).'
      }
    ]
  },
  {
    question: '❸ ماذا لو أعطى الجهاز توصية خاطئة؟',
    intro: 'سؤال ذكي، وإجابته في آلية التعلم المستمر داخل أثير.',
    details: [
      {
        label: 'الذكاء التراكمي',
        text: 'أثير لا يعتمد على تخمين ثابت. مع كل تجربة جديدة يتعلم النظام ويحدث نفسه ليرفع الدقة.'
      },
      {
        label: 'التغذية الراجعة',
        text: 'يمكن تسجيل أي ملاحظة من العميل، فيحلل النظام النمط ويصحح المسار للتجارب القادمة.'
      },
      {
        label: 'الضمان',
        text: 'نسبة الدقة ترتفع مع الوقت لأن النظام يكتسب معرفة أدق من بيانات متجرك.'
      }
    ]
  },
  {
    question: '❹ هل يناسب الجهاز جميع أنواع العملاء؟ (كبار السن، أطفال، غير متقنين للتقنية)',
    intro: 'نعم، صمم ليشمل الجميع.',
    details: [
      {
        label: 'الواجهة',
        text: 'واجهة لمس واضحة وصور كبيرة مع خيار صوتي إرشادي.'
      },
      {
        label: 'التجربة',
        text: 'قصيرة وسهلة، ولا تتطلب كتابة أو خبرة تقنية.'
      }
    ]
  },
  {
    question: '❺ ماذا عن الصيانة والأعطال؟',
    intro: 'نقدم ضماناً شاملاً لمدة عام كامل.',
    details: [
      {
        label: 'الدعم الفني',
        text: 'فريقنا متاح عبر واتساب والبريد الإلكتروني لمعالجة أي مشكلة خلال 24 ساعة.'
      },
      {
        label: 'التحديثات',
        text: 'تحديثات البرامج والخوارزميات مستمرة، ليبقى جهازك مواكباً للتقنية.'
      }
    ]
  },
  {
    question: '❻ كم من الوقت يستغرق العميل حتى يحصل على توصيته؟',
    intro:
      'أقل من 3 دقائق. من بداية التفاعل حتى ظهور التوصية الدقيقة، لا يتجاوز الوقت 3 دقائق.',
    ending: 'هذا يتيح خدمة عدد أكبر من العملاء مع تجربة شخصية سريعة وواضحة.'
  },
  {
    question: '❼ هل يمكنني استخدام الجهاز لتسويق عطور جديدة أو موسمية؟',
    intro: 'نعم، وبذكاء.',
    details: [
      {
        label: 'اللوحة الذكية',
        text: 'يمكنك إدراج عطور جديدة أو عروض موسمية، ويقترحها أثير للعملاء الأعلى توافقاً معها.'
      }
    ],
    ending: 'تسويق ذكي بدون إزعاج، لأن الاقتراح يأتي ضمن التوصية الشخصية.'
  },
  {
    question: '❽ هل أحتاج إلى إنترنت قوي لتشغيله؟',
    intro: 'يكفي اتصال إنترنت عادي مثل استخدام واتساب.',
    details: [
      {
        label: 'آلية العمل',
        text: 'النظام يعمل داخلياً بشكل أساسي، والإنترنت يستخدم للمزامنة والتحديثات.'
      }
    ],
    ending: 'لا يتوقف التشغيل إذا ضعف الاتصال مؤقتاً.'
  },
  {
    question: '❾ ما الذي يميز أثير عن أي استبيان عادي في متجر آخر؟',
    intro: 'الفرق كالفرق بين الطقس والتوقعات الجوية.',
    details: [
      {
        label: 'الاستبيان التقليدي',
        text: 'يسأل العميل ماذا يريد، والعميل غالباً يخمن.'
      },
      {
        label: 'أثير',
        text: 'يقيس التفاعل الحقيقي ويقدم نتيجة مبنية على تحليل متقدم، لا على افتراضات.'
      }
    ],
    ending: 'إنها تجربة علمية تفاعلية، وليست مجرد ورقة أسئلة.'
  }
];

const faqEn: QAItem[] = [
  {
    question: 'Is Aatheer complex and hard to learn?',
    intro: 'Not at all. It is designed to be simple from day one.',
    details: [
      { label: 'Experience', text: 'The interface feels like a smartphone and can be operated quickly.' },
      { label: 'Training', text: 'A quick guide is provided and customers can use it smoothly.' }
    ]
  },
  {
    question: 'How is customer data protected?',
    intro: 'Data privacy is a strict priority.',
    details: [
      { label: 'Encryption', text: 'Interaction data is protected and access is restricted.' },
      { label: 'Ownership', text: 'Your store owns the dashboard and controls sharing permissions.' }
    ]
  },
  {
    question: 'What if a recommendation is not a fit?',
    intro: 'Aatheer improves over time with continuous learning and feedback loops.',
    details: [
      { label: 'Learning', text: 'Each new interaction helps refine recommendation precision.' },
      { label: 'Feedback', text: 'Store feedback can be logged to improve future matches.' }
    ]
  }
];

export default function FAQSection() {
  const { isArabic } = useSiteLocale();
  const items = isArabic ? faqAr : faqEn;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-3xl font-extrabold sm:text-4xl"
        >
          {isArabic ? 'لا تثق بكلامنا فقط... دع الأسئلة تتحدث.' : 'Do not trust claims only... let the questions speak.'}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-4xl text-center text-white/75"
        >
          {isArabic
            ? 'نحن نعلم أن قرار إضافة تقنية جديدة لمتجرك ليس سهلاً. لهذا جمعنا أكثر الأسئلة التي تهمك، وقدمنا إجابات شفافة ومباشرة. لأن ثقتك هي أساس شراكتنا.'
            : 'We know adopting new technology is a serious decision, so we gathered the most important questions with clear and direct answers.'}
        </motion.p>

        <div className="grid gap-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.article
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="glass overflow-hidden rounded-2xl"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
                >
                  <span className="flex items-center gap-3 text-lg font-bold text-white/95">
                    <MessageCircleQuestion className="h-5 w-5 shrink-0 text-cyan-300" />
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-cyan-200 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-white/10"
                    >
                      <div className="space-y-4 px-5 py-4">
                        <p className="leading-relaxed text-white/85">{item.intro}</p>
                        {item.details?.map((detail) => (
                          <p key={detail.label} className="leading-relaxed text-white/75">
                            <span className="font-bold text-cyan-200">{detail.label}: </span>
                            {detail.text}
                          </p>
                        ))}
                        {item.ending && <p className="font-semibold leading-relaxed text-cyan-100">{item.ending}</p>}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-cyan-300/25 bg-cyan-400/10 p-5 text-center">
          <p className="text-base text-cyan-100 sm:text-lg">
            {isArabic ? '💡 لم تجد سؤالك؟ تواصل معنا مباشرة، وسنكون سعداء بالإجابة.' : 'Did not find your question? Contact us directly and we will be happy to help.'}
            {' '}
            <Link href="#contact" className="font-extrabold underline underline-offset-4">
              {isArabic ? 'ابدأ من هنا' : 'Start here'}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
