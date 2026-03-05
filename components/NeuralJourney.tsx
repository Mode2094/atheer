'use client';

import { motion } from 'framer-motion';
import { Cpu, Layers, Shield } from 'lucide-react';
import { useSiteLocale } from '@/components/SiteProvider';

type JourneyStep = {
  title: string;
  simple: string;
  technical: string;
  result: string;
  icon: typeof Layers;
};

const arSteps: JourneyStep[] = [
  {
    title: '❶ لحظة الشم: الإشارة تبدأ',
    simple: 'عندما يستنشق العميل العطر، تلتقط ملايين الخلايا الشمية في أنفه جزيئات الرائحة.',
    technical:
      'تتحول هذه الجزيئات فوراً إلى إشارات كهربائية تنتقل بسرعة كبيرة إلى مراكز العاطفة والذاكرة في الدماغ.',
    result: 'يولد الدماغ استجابة فورية لا إرادية: إما انجذاب أو ارتياب طفيف في التفاعل.',
    icon: Layers
  },
  {
    title: '❷ أثير يحلل: فك شفرة الاستجابة',
    simple: 'لا يعتمد أثير على سؤال العميل «ما رأيك؟»، بل يقيس التغيرات الدقيقة المصاحبة للتفاعل.',
    technical:
      'تستشعر الخوارزميات أنماط التفاعل مثل سرعة التوقف عند عطر معين وتغير وتيرة التنفس واستطالة وقت الشم.',
    result: 'ينشئ النظام «بصمة تفاعل عصبية» لحظية لكل عطر يتم تجربته.',
    icon: Cpu
  },
  {
    title: '❸ العطر المثالي: عندما يتطابق العقل مع الرائحة',
    simple:
      'تُقارن بصمة التفاعل التي تم قياسها مع الملف العطري الرقمي للعطور داخل قاعدة بيانات أثير.',
    technical:
      'محرك الذكاء الاصطناعي لا يبحث عن عطر «جميل» فقط، بل عن أعلى نسبة توافق بين الاستجابة العصبية وتركيبة العطر.',
    result: 'توصية بعطر يشعر العميل أنه امتداد له، لأنه متوافق معه على مستوى أعمق.',
    icon: Shield
  }
];

const enSteps: JourneyStep[] = [
  {
    title: '1) Scent Moment: Signal Starts',
    simple: 'When a customer smells a fragrance, sensory receptors capture scent molecules instantly.',
    technical:
      'Those molecules are translated into neural response patterns linked with emotion and memory centers.',
    result: 'An immediate implicit reaction appears: attraction or subtle rejection.',
    icon: Layers
  },
  {
    title: '2) Aatheer Analysis: Decode Response',
    simple: 'Aatheer does not rely only on verbal opinion, it reads interaction dynamics in real time.',
    technical:
      'Algorithms detect patterns such as pause duration, breathing rhythm changes, and scent engagement time.',
    result: 'The system builds a real-time interaction signature for each tested fragrance.',
    icon: Cpu
  },
  {
    title: '3) Ideal Match: Brain Meets Scent',
    simple: 'Measured interaction signature is matched against Aatheer fragrance intelligence profiles.',
    technical:
      'The AI engine searches for highest-fit compatibility rather than generic “nice smell” ranking.',
    result: 'A precise recommendation that feels naturally aligned with the customer.',
    icon: Shield
  }
];

export default function NeuralJourney() {
  const { isArabic } = useSiteLocale();
  const steps = isArabic ? arSteps : enSteps;

  return (
    <section id="brain-journey" className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-3xl font-extrabold sm:text-4xl"
        >
          {isArabic ? 'كيف يفهم أثير عقل عميلك؟' : 'How Does Aatheer Understand Your Customer Mind?'}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-3 max-w-4xl text-center text-lg font-bold text-white/90"
        >
          {isArabic
            ? 'ما لا تستطيع العين رؤيته... يلتقطه أثير بدقة.'
            : 'What the eye cannot see, Aatheer captures with precision.'}
        </motion.p>

        <p className="mx-auto mb-6 max-w-5xl text-center text-white/75">
          {isArabic
            ? 'الروائح لا تُختبر باللسان أو بالأذن، بل بالدماغ مباشرة. عندما يشم العميل عطراً، ينطلق في خلاياه العصبية حوار صامت يكشف حقيقة انجذابه أو رفضه، حتى قبل أن يفكر بالكلمات. نظام أثير صمم ليترجم هذا الحوار إلى توصيات دقيقة.'
            : 'Fragrance is processed through immediate brain response. Aatheer translates this silent interaction into precise recommendations.'}
        </p>

        <div className="glass mx-auto mb-10 max-w-5xl rounded-2xl p-5 text-white">
          <p className="text-center text-sm leading-relaxed !text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)] sm:text-base">
            {isArabic
              ? 'أول نظام في العالم يستخدم الذكاء العصبي لتحليل استجابة الدماغ واقتراح العطر المثالي بدقة علمية خلال ثوانٍ.'
              : 'The first system that uses neuro-intelligence to analyze brain response and recommend an ideal fragrance in seconds.'}
          </p>
          <p className="mt-2 text-center text-sm font-semibold leading-relaxed !text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)] sm:text-base">
            {isArabic
              ? 'وأول نظام في العالم يختار عطرك باستخدام إشارات دماغك.'
              : 'And the first system that selects your fragrance through your brain signals.'}
          </p>
        </div>

        <h3 className="mb-6 text-center text-2xl font-extrabold text-white/95 sm:text-3xl">
          {isArabic ? '🔬 رحلة العطر من الأنف إلى التوصية: 3 خطوات عصبية' : '🔬 Scent Journey: 3 Neural Steps'}
        </h3>

        <div className="grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="glass rounded-2xl p-6"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mb-3 text-xl font-extrabold text-white/95">{step.title}</h4>
                <p className="mb-3 text-white/80">{step.simple}</p>
                <p className="mb-3 text-sm text-cyan-100/80">{step.technical}</p>
                <p className="text-sm font-semibold text-white/90">{step.result}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
