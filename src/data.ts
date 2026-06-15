import { Master, PortfolioItem, PriceTier, Testimonial, FAQItem } from './types';

export const MASTERS: Master[] = [
  {
    id: 'alex',
    name: 'Олександр Крафт',
    nameEn: 'Alexander Kraft',
    specialization: 'Blackwork & Realism',
    specializationEn: 'Blackwork & Realism',
    experience: '8 років',
    photo: '/src/assets/images/master_alex_1780908128334.png',
    bio: 'Майстер тотального чорного та бездоганних тіней. Створює масштабні проєкти, поєднуючи анатомічні лінії тіла з глибоким чорним пігментом. Віддає перевагу похмурій естетиці та високій деталізації.',
    socials: {
      instagram: 'https://instagram.com/neon_tears_alex',
      telegram: 'https://t.me/neon_tears_alex'
    }
  },
  {
    id: 'mariya',
    name: 'Марія Вейл',
    nameEn: 'Maria Veil',
    specialization: 'Minimalism & Fine-Line',
    specializationEn: 'Minimalism & Fine-Line',
    experience: '5 років',
    photo: '/src/assets/images/master_mariya_1780908141838.png',
    bio: 'Ювелірна точність та найтонші контури. Спеціалізується на мікрореалізмі, делікатних написах, ботаніці та абстрактних сузір\'ях. Робить татуювання, які виглядають як невагомі прикраси.',
    socials: {
      instagram: 'https://instagram.com/neon_tears_mariya',
      telegram: 'https://t.me/neon_tears_mariya'
    }
  },
  {
    id: 'kirill',
    name: 'Кирило Саторі',
    nameEn: 'Kirill Satori',
    specialization: 'Neo Traditional & Color',
    specializationEn: 'Neo Traditional & Color',
    experience: '6 років',
    photo: '/src/assets/images/master_kirill_1780908157853.png',
    bio: 'Адепт яскравих кольорів та графічних контрастів. У його роботах оживають казкові сюжети, японські мотиви та авторська геометрія. Кожна робота — це вибух насиченого кольору з бездоганним прокрасом.',
    socials: {
      instagram: 'https://instagram.com/neon_tears_kirill',
      telegram: 'https://t.me/neon_tears_kirill'
    }
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Анатомічний блекворк',
    category: 'blackwork',
    image: '/src/assets/images/tattoo_blackwork_1780908175418.png',
    masterId: 'alex',
    masterName: 'Олександр Крафт'
  },
  {
    id: 'port-2',
    title: 'Гіперреалістичний тигр',
    category: 'realism',
    image: '/src/assets/images/tattoo_realism_1780908190625.png',
    masterId: 'alex',
    masterName: 'Олександр Крафт'
  },
  {
    id: 'port-3',
    title: 'Нео-традиційний вовк',
    category: 'neotraditional',
    image: '/src/assets/images/tattoo_neotraditional_1780908207290.png',
    masterId: 'kirill',
    masterName: 'Кирило Саторі'
  },
  {
    id: 'port-4',
    title: 'Тонкі лінії Космосу',
    category: 'minimalism',
    image: '/src/assets/images/tattoo_minimalism_1780908221035.png',
    masterId: 'mariya',
    masterName: 'Марія Вейл'
  },
  {
    id: 'port-5',
    title: 'Абстрактний акварельний сплеш',
    category: 'color',
    image: '/src/assets/images/tattoo_color_1780908234822.png',
    masterId: 'kirill',
    masterName: 'Кирило Саторі'
  }
];

export const PRICES: PriceTier[] = [
  {
    id: 'mini',
    title: 'Міні-тату',
    titleEn: 'Mini Tattoo',
    price: 'від 1 500 ₴',
    duration: 'до 1.5 годин',
    description: 'Витончені контурні роботи, написи, сузір\'я, символи чи геометрія невеликого масштабу.',
    descriptionEn: 'Elegant outline work, lettering, constellations, symbols, or small-scale geometry.',
    details: [
      'Розмір до 5х5 см',
      'Найтонші голки та деталізація',
      'Проробка індивідуального шрифту',
      'Повна стерильність обладнання',
      'Загоювальна плівка в комплекті'
    ],
    detailsEn: [
      'Size up to 5x5 cm',
      'Thin needles and sharp details',
      'Custom typography selection',
      'Completely sterile materials',
      'Aftercare healing patch included'
    ]
  },
  {
    id: 'medium',
    title: 'Середні проєкти',
    titleEn: 'Medium Projects',
    price: 'від 4 000 ₴',
    duration: 'від 2 до 4 годин',
    description: 'Деталізовані роботи на передпліччі, плечі, литках або лопатках.',
    descriptionEn: 'Detailed artworks on forearm, shoulder, calves, or shoulder blades.',
    details: [
      'Розмір до 15х10 см',
      'Розробка авторського концепту',
      'Щільний прокрас або м\'які тіні',
      'Преміальные пігменти (США)',
      'Індивідуальний підбір анестезії'
    ],
    detailsEn: [
      'Size up to 15x10 cm',
      'Original concept development',
      'Solid saturation or smooth gradients',
      'Premium US pigments',
      'Personal pain relief option'
    ]
  },
  {
    id: 'large',
    title: 'Великі проєкти',
    titleEn: 'Large Projects',
    price: 'від 8 000 ₴ / сеанс',
    duration: '5+ годин (сеанс)',
    description: 'Масштабні татуювання: повні «рукави», спини, масштабний блекворк та реалізм.',
    descriptionEn: 'Large-scale tattoos: full sleeves, backpieces, heavy blackwork, and realism.',
    details: [
      'Розробка персонального проєкту',
      'Комфортна VIP-зона для сеансу',
      'Безкоштовна корекція протягом року',
      'Поглиблена консультація з догляду',
      'Підтримувальні напої та снеки'
    ],
    detailsEn: [
      'Full body project concept design',
      'VIP lounge comfortable tattooing session',
      'Free touch-up within 1 year',
      'Deep, personalized aftercare routine',
      'Complimentary premium drinks and snacks'
    ]
  },
  {
    id: 'sketch',
    title: 'Індивідуальний ескіз',
    titleEn: 'Custom Design Sketch',
    price: 'безкоштовно при записі',
    duration: '1 - 3 дні',
    description: 'Створення унікального концепту на основі ваших ідей, референсів та анатомії тіла.',
    descriptionEn: 'Creation of a unique concept based on your ideas, references, and body anatomy.',
    details: [
      'Повна отрисовка в Procreate',
      'Примірка на 3D-моделі тіла',
      'Необмежена кількість правок',
      'Особиста зустріч-консультація з майстром',
      'Електронна копія готового ескізу'
    ],
    detailsEn: [
      'Digital drawing in Procreate/IPad',
      'Projection fit on 3D body layout',
      'Unlimited revisions and edits',
      'In-studio consultant meet with master',
      'High-resolution digital sketch file'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Владислав',
    rating: 5,
    text: 'Робив рукав у Олександра Крафта. Бездоганний блекворк! Лінії рівні, чорний колір глибокий, без прогалин. Атмосфера в студії просто нереальна, як музичний андеграундний клуб, але при цьому стерильність як в операційній. Рекомендую на всі 100%.',
    date: '15 травня 2026',
    tattooCategory: 'Blackwork Рукав'
  },
  {
    id: 't-2',
    name: 'Катерина',
    rating: 5,
    text: 'Марія — чарівниця із золотими руками. Моя мініатюрна гілочка лаванди виглядає настільки тонко та витончено, що всі знайомі запитують, де я робила. Сеанс пройшов абсолютно безболісно. Студія Neon Tears тепер назавжди в моєму серці.',
    date: '28 квітня 2026',
    tattooCategory: 'Minimalism на ключиці'
  },
  {
    id: 't-3',
    name: 'Артем',
    rating: 5,
    text: 'Кирило зробив приголомшливий барвистий арт у стилі нео-традішнл за моїм улюбленим аніме. Кольори просто горять під шкірою! Сподобалося ставлення майстрів — все розповіли, наклеїли круту плівку Suprasorb F, пояснили як доглядати. Сервіс преміум-класу.',
    date: '10 квітня 2026',
    tattooCategory: 'Neo Traditional на стегні'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Чи боляче робити татуювання і чи можна використовувати анестезію?',
    answer: 'Больові відчуття індивідуальні та залежать від місця нанесення та вашого порогу. Ми використовуємо топові спеціалізовані креми-анестетики (первинну та вторинну анестезію) для чутливих зон, щоб сеанс пройшов максимально комфортно для вас.',
    questionEn: 'Is it painful to get a tattoo, and can anesthetic be used?',
    answerEn: 'Pain levels are subjective and depend on the body area and your pain tolerance. We use state-of-the-art topical anesthetics (primary and secondary pain relief) for sensitive areas to ensure your session is as comfortable as possible.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'Як підготуватися до сеансу татуювання?',
    answer: 'За добу виключіть алкоголь та препарати, що розріджують кров (наприклад, аспирин). Добре виспіться перед сеансом, щільно поїжте та вдягніть зручний вільний одяг, який не буде щільно прилягати до місця нанесення татуювання.',
    questionEn: 'How should I prepare for my tattoo session?',
    answerEn: 'Avoid alcohol and blood-thinning medications (like aspirin) 24 hours prior. Get plenty of sleep, eat a hearty meal before arriving, and wear comfortable, loose clothing that allows easy access to the tattoo placement area.',
    category: 'prepare'
  },
  {
    id: 'faq-3',
    question: 'Як проходить процес загоєння та догляду?',
    answer: 'Після сеансу ми наклеюємо спеціальну дихаючу гіпоалергенну загоювальну плівку Suprasorb F. З нею ви ходите 4-5 днів, приймаєте душ як зазвичай (але без розпарювання). Потім знімаєте її, регулярно миєте тату милом без ароматизаторів та зволожуєте загоювальним кремом (наприклад, Tattoo Pharm). На 2-3 тижні виключіть лазні, сауни, басейни, спортзал та пряме сонце.',
    questionEn: 'What is the healing and aftercare process like?',
    answerEn: 'Post-session, we apply a professional self-healing breathable patch (like Suprasorb F). Keep it on for 4-5 days; you can shower with it (avoiding long soakings). After peeling, wash with unscented soap and moisturize with tattoo balm 3-4 times daily. Avoid gym, saunas, pools, and tanning for 2-3 weeks.',
    category: 'care'
  },
  {
    id: 'faq-4',
    question: 'Чи безпечно це? Яке обладнання використовується?',
    answer: 'Безпека клієнтів — наш абсолютний пріоритет. Усі витратні матеріали (голки-картриджі, ковпачки для фарби, бар\'єрний захист) суворо одноразові, відкриваються виключно при вас. Тримачі та металеві інструменти проходять триетапну очистку: ультразвук, дезінфекція розчинами та стерилізація в сухожаровій шафі медичного класу за стандартами ДСТУ.',
    questionEn: 'Is it safe? What equipment is used?',
    answerEn: 'Client protection is our primary concern. All consumables (needles, cartridges, ink cups, sheets) are strictly single-use and opened in front of you. Grip pieces undergo 3-stage cleaning: ultrasonic therapy, chemical disinfection, and medical autoclave sterilization conforming to national regulations.',
    category: 'general'
  }
];
