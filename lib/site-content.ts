export type Locale = 'ar' | 'en';

type NavLink = {
  label: string;
  href: string;
};

type HowStep = {
  title: string;
  description: string;
  support: string;
  result: string;
};

type FeatureItem = {
  title: string;
};

type BenefitItem = {
  title: string;
  description: string;
};

type SiteContent = {
  brand: string;
  nav: {
    links: NavLink[];
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    support: string;
    trust: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  problem: {
    title: string;
    subtitle: string;
    points: string[];
    result: string;
  };
  solution: {
    title: string;
    intro: string;
    core: string;
    support: string;
  };
  how: {
    title: string;
    steps: HowStep[];
    whyTitle: string;
    whyText: string;
  };
  benefits: {
    title: string;
    items: BenefitItem[];
  };
  experience: {
    title: string;
    text: string;
    pills: string[];
  };
  results: {
    title: string;
    items: string[];
  };
  features: {
    title: string;
    items: FeatureItem[];
  };
  why: {
    title: string;
    intro: string;
    points: string[];
    creditsLabel: string;
    creditsName: string;
  };
  trust: {
    title: string;
    text: string;
  };
  cta: {
    title: string;
    text: string;
    button: string;
  };
  contact: {
    title: string;
    text: string;
    placeholders: {
      name: string;
      store: string;
      email: string;
      phone: string;
    };
    submit: string;
  };
  footer: {
    tagline: string;
  };
};

export const siteContent: Record<Locale, SiteContent> = {
  ar: {
    brand: 'أثير',
    nav: {
      links: [
        { label: 'الرئيسية', href: '#home' },
        { label: 'المميزات', href: '#features' },
        { label: 'الفوائد', href: '#benefits' },
        { label: 'كيف يعمل', href: '#how-it-works' },
        { label: 'تواصل', href: '#contact' }
      ],
      cta: 'اطلب عرض تجريبي'
    },
    hero: {
      title: 'نحن لا نسأل العميل ماذا يحب…\nنحن نقيس استجابته لنكتشف ذلك بدقة.',
      subtitle:
        'أثير هو نظام ذكي يعيد تعريف تجربة اختيار العطور، ويمكّن متاجر العطور من فهم عملائها على مستوى غير مسبوق وتقديم توصيات أكثر دقة.',
      support:
        'حوّل تجربة شراء العطر من تجربة عشوائية إلى تجربة دقيقة، شخصية، ومبنية على فهم عميق لكل عميل.',
      trust: 'تقنية متقدمة تستخدمها متاجر العطور الرائدة لتقديم تجربة استثنائية لعملائها.',
      ctaPrimary: 'اطلب عرض تجريبي',
      ctaSecondary: 'اكتشف كيف يعمل'
    },
    problem: {
      title: 'المشكلة التي تواجه جميع متاجر العطور',
      subtitle:
        'أكثر من 70٪ من العملاء لا يعرفون ما هو العطر المناسب لهم. يقضون وقتاً طويلاً في التجربة، ويغادر الكثير منهم بدون شراء.',
      points: [
        'العميل متردد وغير واثق من اختياره',
        'تجربة تقليدية لا توفر فهماً حقيقياً للعميل',
        'خسارة فرص بيع بسبب عدم دقة التوصيات',
        'اعتماد كامل على التخمين وليس الفهم الحقيقي'
      ],
      result: 'النتيجة: تجربة غير فعالة، ومبيعات أقل مما يمكن تحقيقه.'
    },
    solution: {
      title: 'أثير يقدّم الحل',
      intro:
        'أثير يمكّن متجرك من فهم كل عميل بشكل فريد، وتحويل هذا الفهم إلى توصية دقيقة ومخصصة بالكامل.',
      core: 'نحن لا نعتمد على ما يقوله العميل… نحن نعتمد على استجابته الحقيقية.',
      support:
        'هذا يسمح بتقديم توصيات دقيقة بشكل غير مسبوق، مما يحوّل تجربة العميل إلى تجربة شخصية بالكامل.'
    },
    how: {
      title: 'كيف يعمل نظام أثير - التجربة التي تغيّر مفهوم اختيار العطور',
      steps: [
        {
          title: 'تحليل الشخصية - بداية الفهم الحقيقي',
          description:
            'تبدأ التجربة بتحليل سريع عبر أسئلة ذكية ومدروسة لفهم نمط الشخصية، أسلوب الحياة، والطابع العام للعميل.',
          support: 'الهدف ليس ما يعتقد العميل أنه يحبه، بل بناء نموذج دقيق لما ينسجم معه فعلياً.',
          result: 'النتيجة: إنشاء بصمة شخصية رقمية فريدة لكل عميل.'
        },
        {
          title: 'إنشاء البصمة العطرية الرقمية',
          description:
            'يحوّل النظام بيانات الشخصية إلى ملف عطري رقمي متكامل يمثل التوافق الحقيقي بين العميل وأنماط الروائح المختلفة.',
          support: 'كل عميل يحصل على هوية عطرية خاصة به، لا تعتمد على التخمين بل على تحليل واقعي.',
          result: 'النتيجة: تقليص آلاف الخيارات إلى مجموعة دقيقة متوافقة مع العميل.'
        },
        {
          title: 'تحليل التفاعل الحقيقي فورياً',
          description:
            'يقوم النظام بتحليل التفاعل الفعلي أثناء التجربة، مما يكشف الانجذاب الحقيقي بعيداً عن الانطباع الظاهري.',
          support: 'التفاعل الحقيقي يكشف ما ينسجم مع العميل بشكل طبيعي وسريع.',
          result: 'النتيجة: فهم أدق لتفضيلات العميل.'
        },
        {
          title: 'الذكاء الاصطناعي يحدد العطر المثالي',
          description:
            'يتم دمج تحليل الشخصية وملف التفضيلات مع نماذج ذكاء اصطناعي متقدمة لتحديد العطر الأكثر توافقاً.',
          support: 'ليست توصية عشوائية، بل نتيجة محسوبة ومبنية على بيانات حقيقية.',
          result: 'النتيجة: توصية مخصصة بالكامل لكل عميل.'
        },
        {
          title: 'اكتشاف العطر الذي يمثل العميل فعلاً',
          description:
            'عند تجربة العطر المقترح يشعر العميل باختيار مختلف لأنه يتوافق معه بعمق، لا لأنه خيار عابر.',
          support: 'هذا هو الفرق بين التخمين والدقة.',
          result: 'النتيجة: تجربة شخصية لا تُنسى واحتمالية شراء أعلى.'
        },
        {
          title: 'رحلة تجربة العميل المثالية',
          description:
            'يصحب النظام العميل في تجربة سلسة وممتعة من البداية إلى النهاية، حيث يشعر بالثقة والراحة في اختيار عطره المثالي، دون ضياع وقت أو ارتباك.',
          support: 'رحلة متكاملة تضع العميل في المركز وتمنحه قراراً أكثر وضوحاً وثقة.',
          result:
            'النتيجة: تجربة شاملة ومتكاملة تعزز ولاء العميل، تزيد من احتمالية العودة، وترسّخ المتجر كوجهة مفضلة للعطور.'
        }
      ],
      whyTitle: 'لماذا هذه التجربة تغيّر قواعد اللعبة؟',
      whyText:
        'لأن الطرق التقليدية تعتمد على السؤال، أما أثير فيعتمد على الفهم. العميل غالباً لا يعرف ماذا يريد بدقة، لكن تفاعله الحقيقي يكشف ذلك.'
    },
    benefits: {
      title: 'فوائد مباشرة لمتجرك',
      items: [
        {
          title: 'زيادة المبيعات بنسبة تصل إلى 65٪',
          description: 'عندما يحصل العميل على توصية دقيقة، تزداد احتمالية الشراء بشكل كبير.'
        },
        {
          title: 'فهم أعمق لعملائك',
          description: 'اكتشف تفضيلات عملائك الحقيقية، وليس فقط ما يقولونه.'
        },
        {
          title: 'تحسين تجربة العميل',
          description: 'قدّم تجربة حديثة، ذكية، ومميزة تجعل العملاء يتذكرون متجرك.'
        },
        {
          title: 'زيادة ثقة العميل',
          description: 'عندما يشعر العميل أن التوصية دقيقة، تزداد ثقته بمتجرك.'
        },
        {
          title: 'تمييز متجرك عن المنافسين',
          description: 'اجعل متجرك في طليعة الابتكار في عالم العطور.'
        },
        {
          title: 'زيادة ولاء العملاء',
          description: 'العملاء يعودون عندما يحصلون على تجربة مميزة.'
        }
      ]
    },
    experience: {
      title: 'تجربة جديدة بالكامل للعميل',
      text:
        'لم يعد العميل بحاجة إلى تجربة عشرات العطور. يمكنه الآن اكتشاف عطره المثالي خلال ثوانٍ، في تجربة تختصر الوقت وتبني ارتباطاً عاطفياً أعمق.',
      pills: ['تجربة ذكية', 'نتائج دقيقة', 'رضا كامل']
    },
    results: {
      title: 'نتائج حقيقية',
      items: [
        'زيادة معدل الشراء',
        'زيادة رضا العملاء',
        'تقليل وقت القرار',
        'تحسين أداء المتجر',
        'زيادة قيمة الطلب',
        'رفع مستوى تجربة العميل وتحفيزه على العودة مجدداً'
      ]
    },
    features: {
      title: 'تقنية مصممة للمستقبل',
      items: [
        { title: 'تحليل ذكي وفوري' },
        { title: 'تجربة تفاعلية متقدمة' },
        { title: 'نتائج دقيقة وموثوقة' },
        { title: 'تصميم فاخر وسهل الاستخدام' },
        { title: 'توافق مع أحدث الابتكارات في عالم العطور' },
        { title: 'دعم كامل لتجربة العميل الشخصية والفريدة' }
      ]
    },
    why: {
      title: 'لماذا أثير؟',
      intro: 'أثير ليس مجرد أداة، إنه شريك ذكي يخلق تجربة اختيار عطر لا تُنسى لكل عميل.',
      points: [
        'ذكاء يسبق توقعات العملاء - يحلل تفضيلات كل عميل بدقة غير مسبوقة.',
        'تصميم يجمع بين الفخامة والراحة - واجهة أنيقة وسهلة الاستخدام تجعل التجربة ممتعة ومبهرة.',
        'قرارات دقيقة مبنية على بيانات حقيقية - لا تخمين، كل توصية مدعومة بتحليل دقيق للتفاعل الشخصي.',
        'تجربة شخصية وفريدة لكل عميل - عطر لكل بصمة رقمية، لتعزيز الولاء والثقة.'
      ],
      creditsLabel: 'فكرة وتنفيذ المهندس',
      creditsName: 'محمد روحي'
    },
    trust: {
      title: 'مصمم لمتاجر العطور الحديثة',
      text:
        'تم تصميم أثير ليتكامل بسلاسة مع تجربة المتجر، ويوفر نتائج موثوقة ومستقرة. التجربة لا تكتفي باقتراح عطر، بل تبني رحلة تمنح العميل ثقة أعلى وقراراً أسرع.'
    },
    cta: {
      title: 'انقل متجرك إلى المستوى التالي',
      text: 'امنح عملاءك تجربة لا تُنسى، وزد من مبيعاتك بثقة.',
      button: 'اطلب عرض تجريبي الآن'
    },
    contact: {
      title: 'ابدأ الآن',
      text: 'تواصل معنا لمعرفة كيف يمكن لأثير تطوير متجرك.',
      placeholders: {
        name: 'الاسم',
        store: 'اسم المتجر',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف'
      },
      submit: 'إرسال البيانات'
    },
    footer: {
      tagline: 'إعادة تعريف تجربة اختيار العطور'
    }
  },
  en: {
    brand: 'ATHEER',
    nav: {
      links: [
        { label: 'Home', href: '#home' },
        { label: 'Features', href: '#features' },
        { label: 'Benefits', href: '#benefits' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Contact', href: '#contact' }
      ],
      cta: 'Request Demo'
    },
    hero: {
      title: 'We do not ask customers what they like... We measure their response to discover it with precision.',
      subtitle:
        'Aatheer is an intelligent fragrance recommendation system that redefines in-store discovery through deeper customer understanding and precise matching.',
      support:
        'Turn fragrance shopping from random trial-and-error into a precise, personal, insight-driven experience.',
      trust: 'Advanced technology used by leading fragrance stores to deliver exceptional customer journeys.',
      ctaPrimary: 'Request Demo',
      ctaSecondary: 'Discover How It Works'
    },
    problem: {
      title: 'The Core Problem in Fragrance Retail',
      subtitle:
        'More than 70% of customers are unsure which fragrance fits them. Many spend too long sampling and leave without buying.',
      points: [
        'Customers are hesitant and uncertain',
        'Traditional journeys lack real preference understanding',
        'Missed sales opportunities due to inaccurate suggestions',
        'Recommendations often depend on guesswork'
      ],
      result: 'Result: inefficient shopping experience and lower-than-possible sales.'
    },
    solution: {
      title: 'Aatheer Provides the Solution',
      intro:
        'Aatheer helps your store understand each customer uniquely and transform that understanding into accurate, fully personalized fragrance recommendations.',
      core: 'We do not rely on what the customer says... we rely on real response patterns.',
      support:
        'This delivers unprecedented recommendation precision and transforms the shopping journey into a truly personal experience.'
    },
    how: {
      title: 'How Aatheer Works - The Experience That Redefines Fragrance Selection',
      steps: [
        {
          title: 'Personality Mapping - Smart Start',
          description:
            'The journey begins with a fast, structured set of smart questions to understand personality style, lifestyle, and personal profile.',
          support: 'The goal is not what customers think they like, but what truly fits them.',
          result: 'Outcome: a unique digital profile for every customer.'
        },
        {
          title: 'Digital Fragrance Signature',
          description:
            'The system translates profile data into a digital scent signature aligned with real compatibility across fragrance families.',
          support: 'Every customer receives a unique fragrance identity based on insight, not assumptions.',
          result: 'Outcome: thousands of options narrowed into a precise shortlist.'
        },
        {
          title: 'Real-Time Response Interpretation',
          description:
            'During the sampling journey, the system interprets real interaction signals to identify authentic attraction patterns.',
          support: 'Real response reveals natural compatibility quickly and clearly.',
          result: 'Outcome: deeper preference clarity for each customer.'
        },
        {
          title: 'AI Determines the Best Match',
          description:
            'Personality analysis and preference profile are combined with advanced AI models to identify the strongest fragrance match.',
          support: 'Not random suggestions, but data-grounded precision.',
          result: 'Outcome: fully personalized recommendations.'
        },
        {
          title: 'Final Outcome - A True Fragrance Match',
          description:
            'When customers smell the suggested fragrance, the experience feels immediately aligned and personal.',
          support: 'That is the difference between guessing and precision.',
          result: 'Outcome: memorable experience and higher purchase intent.'
        },
        {
          title: 'The Ideal Customer Journey',
          description:
            'The system guides each customer through a smooth, enjoyable end-to-end experience, creating confidence and comfort in selecting their ideal fragrance without wasted time or confusion.',
          support: 'A complete journey keeps the customer at the center and makes decisions clearer and easier.',
          result:
            'Outcome: a comprehensive experience that strengthens loyalty, increases return likelihood, and positions the store as a preferred fragrance destination.'
        }
      ],
      whyTitle: 'Why does this change the game?',
      whyText:
        'Traditional methods ask. Aatheer understands. Customers often cannot articulate what they want, but authentic interaction reveals it.'
    },
    benefits: {
      title: 'Direct Benefits for Your Store',
      items: [
        {
          title: 'Up to 65% Sales Increase',
          description: 'Accurate recommendations significantly boost purchase likelihood.'
        },
        {
          title: 'Deeper Customer Understanding',
          description: 'Learn true customer preferences, beyond verbal responses.'
        },
        {
          title: 'Better Customer Experience',
          description: 'Deliver a modern, smart journey customers remember.'
        },
        {
          title: 'Higher Customer Confidence',
          description: 'Precision recommendations increase trust in your store.'
        },
        {
          title: 'Strong Competitive Differentiation',
          description: 'Position your store at the forefront of fragrance innovation.'
        },
        {
          title: 'Improved Customer Loyalty',
          description: 'Customers return when the experience feels uniquely right.'
        }
      ]
    },
    experience: {
      title: 'A Completely New Customer Experience',
      text:
        'Customers no longer need to test dozens of fragrances. They can discover their ideal scent in seconds with a faster and more emotional journey.',
      pills: ['Smart Experience', 'Accurate Results', 'Complete Satisfaction']
    },
    results: {
      title: 'Real Results',
      items: [
        'Higher purchase rate',
        'Higher customer satisfaction',
        'Faster decision time',
        'Improved store performance',
        'Higher average order value',
        'Elevated customer experience that encourages repeat visits'
      ]
    },
    features: {
      title: 'Technology Designed for the Future',
      items: [
        { title: 'Instant Intelligent Analysis' },
        { title: 'Advanced Interactive Experience' },
        { title: 'Accurate and Reliable Results' },
        { title: 'Premium, Easy-to-Use Design' },
        { title: 'Compatible with the latest fragrance innovations' },
        { title: 'Full support for a personal and unique customer journey' }
      ]
    },
    why: {
      title: 'Why Aatheer?',
      intro: 'Aatheer is not just a tool. It is an intelligent partner creating an unforgettable fragrance journey for every customer.',
      points: [
        'Intelligence ahead of customer expectations - analyzes each preference with exceptional precision.',
        'A design that blends luxury and comfort - an elegant, easy interface that makes the journey delightful.',
        'Precise decisions built on real data - no guesswork, every recommendation is analysis-backed.',
        'A personal, unique journey for every customer - one scent profile for each digital identity to boost trust and loyalty.'
      ],
      creditsLabel: 'Concept & Execution by Engineer',
      creditsName: 'Mohammad Rohi'
    },
    trust: {
      title: 'Designed for Modern Fragrance Stores',
      text:
        'Aatheer is built to integrate smoothly with in-store journeys and deliver stable, trustworthy outcomes that improve confidence and speed up buying decisions.'
    },
    cta: {
      title: 'Take Your Store to the Next Level',
      text: 'Deliver unforgettable customer experiences and grow revenue with confidence.',
      button: 'Request Demo Now'
    },
    contact: {
      title: 'Get Started',
      text: 'Contact us to explore how Aatheer can upgrade your store.',
      placeholders: {
        name: 'Name',
        store: 'Store Name',
        email: 'Email',
        phone: 'Phone Number'
      },
      submit: 'Send Details'
    },
    footer: {
      tagline: 'Redefining Fragrance Selection Experience'
    }
  }
};
