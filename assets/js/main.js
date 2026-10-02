/* Shatenka — language switcher, lazy Instagram embeds, reveal animations. No dependencies. */
(function () {
  'use strict';

  // Only a MANUAL choice (click on KZ/RU/EN) is stored. New key: values saved under the
  // old key 'shatenka-lang' are ignored (and removed) so detection reruns for those visitors.
  var STORAGE_KEY = 'shatenka-lang-manual';
  var LEGACY_KEYS = ['shatenka-lang'];
  var LANGS = ['kk', 'ru', 'en'];
  var WA_NUMBER = '77024092889';

  var I18N = {
    kk: {
      'name': 'Айгерім',
      'meta.title': 'Айгерім · Shatenka — UGC-креатор | Beauty, Fashion, Lifestyle | Астана',
      'meta.description': 'Айгерім — Астанадағы UGC-креатор. Брендтерге арналған эстетикалық әрі нативті бьюти, сән және лайфстайл контент: Reels, шолулар, анбоксинг, Stories және өнім фотолары.',
      'meta.locale': 'kk_KZ',
      'wa.message': 'Сәлеметсіз бе, Айгерім! Ынтымақтастықты талқылағымыз келеді',
      'a11y.skip': 'Мазмұнға өту',
      'img.hero': 'Айгерім — UGC-креатор, қолында косметикалық май',
      'img.about': 'Айгерім мәрмәр қабырға аясында',
      'nav.about': 'Мен туралы',
      'nav.portfolio': 'Портфолио',
      'nav.services': 'Қызметтер',
      'nav.brands': 'Брендтер',
      'nav.faq': 'Сұрақтар',
      'nav.contact': 'Байланыс',
      'hero.location': 'Астана, Қазақстан',
      'hero.role': 'UGC-креатор',
      'hero.lead': 'Брендтерге өнімін әдемі көрсетуге және сенім қалыптастыруға көмектесетін эстетикалық әрі нативті UGC-контент жасаймын.',
      'hero.sub': 'Эстетика мен шынайылықты бағалайтын брендтерге арналған бьюти, сән және лайфстайл контент.',
      'hero.cta': 'Ынтымақтастықты талқылау',
      'hero.secondary': 'Портфолионы көру',
      'about.kicker': 'Мен туралы',
      'about.title': 'Қысқаша мен туралы',
      'about.b1': 'UGC-креатор және инфлюенсер',
      'about.b2': 'Орыс және қазақ тілдерінде контент жасаймын',
      'about.b3': 'Бағыттарым: бьюти, сән, лайфстайл',
      'about.b4': 'Астанада тұрамын',
      'about.b5': 'Үш баланың бақытты анасымын',
      'about.b6': 'Қазақстандық және халықаралық брендтермен жұмыс істеймін',
      'portfolio.kicker': 'Портфолио',
      'portfolio.title': 'Менің жұмыстарым',
      'portfolio.note': 'Портфолиода коммерциялық жұмыстармен қатар үлгі (spec) контент те бар.',
      'portfolio.f.beauty': 'Бьюти',
      'portfolio.f.fashion': 'Сән',
      'portfolio.f.lifestyle': 'Лайфстайл',
      'portfolio.f.product': 'Өнім және анбоксинг',
      'portfolio.swipe': 'Жанға сырғытыңыз',
      'portfolio.loading': 'Жүктелуде…',
      'portfolio.open': 'Instagram-да ашу',
      'portfolio.all': 'Барлық жұмыстар Instagram-да',
      'create.kicker': 'Не жасаймын',
      'create.title': 'Контент форматтары',
      'create.c1': 'UGC Reels',
      'create.c2': 'Анбоксинг',
      'create.c3': 'Өнімге шолу',
      'create.c4': 'Бьюти-туториалдар',
      'create.c5': 'Сән контенті',
      'create.c6': 'Лайфстайл контент',
      'create.c7': 'Өнімді көрсету',
      'create.c8': 'Stories',
      'create.c9': 'Өнім фотолары',
      'why.kicker': 'Неліктен мен',
      'why.title': 'Кәдімгі жарнама емес — табиғи әрі шынайы контент.',
      'why.w1': 'Эстетикалық визуал',
      'why.w2': 'Өнімді нативті түрде көрсету',
      'why.w3': 'Әр детальға мұқияттылық',
      'why.w4': 'Reels, TikTok және Stories форматтарына бейімделген',
      'why.w5': 'Бренд бірден қолдана алатын дайын материал',
      'style.kicker': 'Менің стилім',
      'style.words': 'Жұмсақ • Әйелдік • Минимал • Эстетикалық • Табиғи',
      'svc.kicker': 'Қызметтер',
      'svc.title': 'Ынтымақтастық форматтары',
      'svc.h1': 'Формат',
      'svc.h2': 'Не кіреді',
      'svc.r1': 'UGC Reels', 'svc.r1d': '15–60 секунд',
      'svc.r2': 'Өнімге шолу', 'svc.r2d': 'Көрсетілім + жеке әсер',
      'svc.r3': 'Анбоксинг', 'svc.r3d': 'Қаптаманы ашу + алғашқы әсер',
      'svc.r4': 'Өнім фотолары', 'svc.r4d': 'Өнімнің эстетикалық фотолары',
      'svc.r5': 'Stories', 'svc.r5d': 'Нативті интеграция',
      'svc.r6': 'Пакет', 'svc.r6d': 'Reels + Stories + фото',
      'svc.price': 'Құны — сұраныс бойынша',
      'svc.cta': 'Бағасын сұрау',
      'brands.kicker': 'Ынтымақтастық',
      'brands.title': 'Маған сенім білдірген брендтер',
      'brands.horse': 'Лошадиная сила',
      'stats.followers': 'Instagram-дағы оқырман',
      'stats.city': 'Астана',
      'stats.country': 'Қазақстан',
      'stats.niches': 'бағыттар',
      'steps.kicker': 'Жұмыс барысы',
      'steps.title': 'Бес қарапайым қадам',
      'steps.s1.t': 'Бриф', 'steps.s1.d': 'Сіз бриф жіберіп, өнім туралы айтып бересіз.',
      'steps.s2.t': 'Идея', 'steps.s2.d': 'Идея мен форматты ұсынамын.',
      'steps.s3.t': 'Түсірілім', 'steps.s3.d': 'Түсіріп, монтаждаймын.',
      'steps.s4.t': 'Келісу', 'steps.s4.d': 'Дайын материалды бекітуге жіберемін.',
      'steps.s5.t': 'Тапсыру', 'steps.s5.d': 'Соңғы файлдарды тапсырамын.',
      'faq.kicker': 'Сұрақтар',
      'faq.title': 'Жиі қойылатын сұрақтар',
      'faq.q1': 'Қай қаладасыз?',
      'faq.a1': 'Астанада тұрамын, Қазақстан.',
      'faq.q2': 'Басқа елдердің брендтерімен жұмыс істейсіз бе?',
      'faq.a2': 'Иә, қашықтан жұмыс істеймін — өнімді маған Астанаға жіберсеңіз болғаны.',
      'faq.q3': 'Менің аккаунтымда жарияламай-ақ контентке тапсырыс беруге бола ма?',
      'faq.a3': 'Иә, UGC дегеніміз осы: мен контентті сіз үшін жасаймын, ал сіз оны брендтің парақшаларында және жарнамада қолданасыз.',
      'faq.q4': 'Контент дайындау қанша уақыт алады?',
      'faq.a4': 'Мерзім әр жоба бойынша жеке келісіледі және жұмыс көлеміне байланысты.',
      'faq.q5': 'Видеоларды жарнамада қолдануға бола ма?',
      'faq.a5': 'Иә. Пайдалану құқықтары мен мерзімі алдын ала келісіледі.',
      'faq.q6': 'Бриф бойынша жұмыс істейсіз бе?',
      'faq.a6': 'Иә. Егер бриф әлі дайын болмаса, оны бірге құрастыра аламыз.',
      'faq.q7': 'Бартер мүмкін бе?',
      'faq.a7': 'Бартер жеке талқыланады.',
      'faq.q8': 'Контент қай тілде болады?',
      'faq.a8': 'Орыс және қазақ тілдерінде. Ағылшынша мәтін немесе субтитр қосу — сұраныс бойынша, алдын ала келісіледі.',
      'contact.kicker': 'Байланыс',
      'contact.title': 'Бірге әдемі дүние жасайық.',
      'contact.sub': 'Ынтымақтастық туралы сөйлесейік — өзіңізге ыңғайлы арнаға жазыңыз.',
      'contact.telegram': 'Телеграм',
      'contact.email': 'Пошта',
      'contact.cta': 'Менімен жұмыс істеу',
      'footer.city': 'Астана, Қазақстан',
      'fab.label': 'WhatsApp-қа жазу'
    },
    ru: {
      'name': 'Айгерим',
      'meta.title': 'Айгерим · Shatenka — UGC-креатор | Beauty, Fashion, Lifestyle | Астана',
      'meta.description': 'Айгерим — UGC-креатор из Астаны. Эстетичный и нативный beauty, fashion и lifestyle контент для брендов: Reels, обзоры, распаковки, Stories и фото продуктов.',
      'meta.locale': 'ru_RU',
      'wa.message': 'Здравствуйте, Айгерим! Хотим обсудить сотрудничество',
      'a11y.skip': 'Перейти к содержимому',
      'img.hero': 'Айгерим — UGC-креатор с косметическим маслом в руках',
      'img.about': 'Айгерим на фоне мраморной стены',
      'nav.about': 'Обо мне',
      'nav.portfolio': 'Портфолио',
      'nav.services': 'Услуги',
      'nav.brands': 'Бренды',
      'nav.faq': 'Вопросы',
      'nav.contact': 'Контакты',
      'hero.location': 'Астана, Казахстан',
      'hero.role': 'UGC-креатор',
      'hero.lead': 'Создаю эстетичный и нативный UGC-контент, который помогает брендам красиво показывать продукт и вызывать доверие.',
      'hero.sub': 'Beauty, fashion и lifestyle контент для брендов, которые ценят эстетику и естественность.',
      'hero.cta': 'Обсудить сотрудничество',
      'hero.secondary': 'Посмотреть портфолио',
      'about.kicker': 'Обо мне',
      'about.title': 'Коротко обо мне',
      'about.b1': 'UGC-креатор и инфлюенсер',
      'about.b2': 'Создаю контент на русском и казахском языках',
      'about.b3': 'Направления: beauty, fashion, lifestyle',
      'about.b4': 'Живу в Астане',
      'about.b5': 'Счастливая мама троих детей',
      'about.b6': 'Работаю с локальными и международными брендами',
      'portfolio.kicker': 'Портфолио',
      'portfolio.title': 'Мои работы',
      'portfolio.note': 'Помимо коммерческих работ, в портфолио есть примеры (spec-контент).',
      'portfolio.f.beauty': 'Beauty',
      'portfolio.f.fashion': 'Fashion',
      'portfolio.f.lifestyle': 'Lifestyle',
      'portfolio.f.product': 'Продукт и распаковка',
      'portfolio.swipe': 'Листайте в сторону',
      'portfolio.loading': 'Загрузка…',
      'portfolio.open': 'Открыть в Instagram',
      'portfolio.all': 'Все работы в Instagram',
      'create.kicker': 'Что я создаю',
      'create.title': 'Форматы контента',
      'create.c1': 'UGC Reels',
      'create.c2': 'Распаковки',
      'create.c3': 'Обзоры продуктов',
      'create.c4': 'Beauty-туториалы',
      'create.c5': 'Fashion-контент',
      'create.c6': 'Lifestyle-контент',
      'create.c7': 'Демонстрация продукта',
      'create.c8': 'Stories',
      'create.c9': 'Предметная фотосъёмка',
      'why.kicker': 'Почему UGC со мной',
      'why.title': 'Контент, который выглядит естественно, а не как привычная реклама.',
      'why.w1': 'Эстетичный визуал',
      'why.w2': 'Нативная демонстрация продукта',
      'why.w3': 'Внимание к деталям',
      'why.w4': 'Адаптация под Reels, TikTok и Stories',
      'why.w5': 'Готовые материалы, которые бренд может сразу использовать',
      'style.kicker': 'Мой стиль',
      'style.words': 'Мягкий • Женственный • Минималистичный • Эстетичный • Естественный',
      'svc.kicker': 'Услуги',
      'svc.title': 'Форматы сотрудничества',
      'svc.h1': 'Формат',
      'svc.h2': 'Что входит',
      'svc.r1': 'UGC Reels', 'svc.r1d': '15–60 секунд',
      'svc.r2': 'Обзор продукта', 'svc.r2d': 'Демонстрация + личное впечатление',
      'svc.r3': 'Распаковка', 'svc.r3d': 'Распаковка + первые впечатления',
      'svc.r4': 'Фото продукта', 'svc.r4d': 'Эстетичные фото продукта',
      'svc.r5': 'Stories', 'svc.r5d': 'Нативная интеграция',
      'svc.r6': 'Пакет', 'svc.r6d': 'Reels + Stories + фото',
      'svc.price': 'Стоимость — по запросу',
      'svc.cta': 'Запросить стоимость',
      'brands.kicker': 'Коллаборации',
      'brands.title': 'Мне доверяют бренды',
      'brands.horse': 'Лошадиная сила',
      'stats.followers': 'подписчиков в Instagram',
      'stats.city': 'Астана',
      'stats.country': 'Казахстан',
      'stats.niches': 'направления',
      'steps.kicker': 'Как мы работаем',
      'steps.title': 'Пять простых шагов',
      'steps.s1.t': 'Бриф', 'steps.s1.d': 'Вы присылаете бриф и рассказываете о продукте.',
      'steps.s2.t': 'Концепция', 'steps.s2.d': 'Я предлагаю идею и формат.',
      'steps.s3.t': 'Создание', 'steps.s3.d': 'Снимаю и монтирую.',
      'steps.s4.t': 'Согласование', 'steps.s4.d': 'Вы получаете материал на согласование.',
      'steps.s5.t': 'Сдача', 'steps.s5.d': 'Передаю финальные файлы.',
      'faq.kicker': 'Вопросы',
      'faq.title': 'Частые вопросы',
      'faq.q1': 'Где вы находитесь?',
      'faq.a1': 'В Астане, Казахстан.',
      'faq.q2': 'Работаете ли вы с брендами из других стран?',
      'faq.a2': 'Да, работаю удалённо — достаточно отправить продукт мне в Астану.',
      'faq.q3': 'Можно ли заказать контент без публикации в вашем аккаунте?',
      'faq.a3': 'Да, в этом и суть UGC: я создаю контент для вас, а вы используете его на своих площадках и в рекламе.',
      'faq.q4': 'Сколько времени занимает создание контента?',
      'faq.a4': 'Сроки согласовываются под каждый проект и зависят от объёма работы.',
      'faq.q5': 'Можно ли использовать видео в рекламе?',
      'faq.a5': 'Да. Права на использование и их срок согласовываем заранее.',
      'faq.q6': 'Вы работаете по брифу?',
      'faq.a6': 'Да. Если брифа пока нет, можем составить его вместе.',
      'faq.q7': 'Возможен ли бартер?',
      'faq.a7': 'Бартер обсуждается индивидуально.',
      'faq.q8': 'На каком языке будет контент?',
      'faq.a8': 'На русском и казахском. Текст или субтитры на английском — по запросу, обсуждаем заранее.',
      'contact.kicker': 'Контакты',
      'contact.title': 'Давайте создадим что-то красивое вместе.',
      'contact.sub': 'Обсудим сотрудничество — напишите туда, где вам удобно.',
      'contact.telegram': 'Телеграм',
      'contact.email': 'Почта',
      'contact.cta': 'Работать со мной',
      'footer.city': 'Астана, Казахстан',
      'fab.label': 'Написать в WhatsApp'
    },
    en: {
      'name': 'Aigerim',
      'meta.title': 'Aigerim · Shatenka — UGC Creator | Beauty, Fashion, Lifestyle | Astana',
      'meta.description': 'Aigerim is a UGC creator based in Astana, Kazakhstan, creating aesthetic, native beauty, fashion and lifestyle content for brands: Reels, reviews, unboxings, Stories and product photos.',
      'meta.locale': 'en_US',
      'wa.message': "Hello, Aigerim! We'd like to discuss a collaboration",
      'a11y.skip': 'Skip to content',
      'img.hero': 'Aigerim, UGC creator, holding a cosmetic oil',
      'img.about': 'Aigerim against a marble wall',
      'nav.about': 'About',
      'nav.portfolio': 'Portfolio',
      'nav.services': 'Services',
      'nav.brands': 'Brands',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contact',
      'hero.location': 'Astana, Kazakhstan',
      'hero.role': 'UGC Creator',
      'hero.lead': 'I create aesthetic, native UGC content that helps brands showcase their products beautifully and build trust.',
      'hero.sub': 'Beauty, fashion & lifestyle content for brands that value aesthetics and authenticity.',
      'hero.cta': 'Discuss a collaboration',
      'hero.secondary': 'View portfolio',
      'about.kicker': 'About me',
      'about.title': 'A little about me',
      'about.b1': 'UGC creator & influencer',
      'about.b2': 'I create content in Russian and Kazakh',
      'about.b3': 'Focus: beauty, fashion, lifestyle',
      'about.b4': 'Based in Astana, Kazakhstan',
      'about.b5': 'Happy mom of three',
      'about.b6': 'I work with local and international brands',
      'portfolio.kicker': 'Portfolio',
      'portfolio.title': 'My work',
      'portfolio.note': 'Alongside commissioned work, the portfolio includes sample (spec) content.',
      'portfolio.f.beauty': 'Beauty',
      'portfolio.f.fashion': 'Fashion',
      'portfolio.f.lifestyle': 'Lifestyle',
      'portfolio.f.product': 'Product & Unboxing',
      'portfolio.swipe': 'Swipe to see more',
      'portfolio.loading': 'Loading…',
      'portfolio.open': 'Open on Instagram',
      'portfolio.all': 'All work on Instagram',
      'create.kicker': 'What I create',
      'create.title': 'Content formats',
      'create.c1': 'UGC Reels',
      'create.c2': 'Unboxing',
      'create.c3': 'Product reviews',
      'create.c4': 'Beauty tutorials',
      'create.c5': 'Fashion content',
      'create.c6': 'Lifestyle content',
      'create.c7': 'Product demos',
      'create.c8': 'Stories',
      'create.c9': 'Product photography',
      'why.kicker': 'Why UGC with me',
      'why.title': 'Content that feels natural, not like traditional advertising.',
      'why.w1': 'Aesthetic visuals',
      'why.w2': 'Native product demonstration',
      'why.w3': 'Attention to detail',
      'why.w4': 'Adapted for Reels, TikTok and Stories',
      'why.w5': 'Ready-to-use material for your brand',
      'style.kicker': 'My style',
      'style.words': 'Soft • Feminine • Minimal • Aesthetic • Natural',
      'svc.kicker': 'Services',
      'svc.title': 'Ways to work together',
      'svc.h1': 'Format',
      'svc.h2': "What's included",
      'svc.r1': 'UGC Reel', 'svc.r1d': '15–60 seconds',
      'svc.r2': 'Product review', 'svc.r2d': 'Demo + personal impression',
      'svc.r3': 'Unboxing', 'svc.r3d': 'Unboxing + first impressions',
      'svc.r4': 'Product photography', 'svc.r4d': 'Aesthetic product photos',
      'svc.r5': 'Stories', 'svc.r5d': 'Native integration',
      'svc.r6': 'Bundle', 'svc.r6d': 'Reel + Stories + photos',
      'svc.price': 'Pricing — on request',
      'svc.cta': 'Get a quote',
      'brands.kicker': 'Collaborations',
      'brands.title': 'Trusted by',
      'brands.horse': 'Horse Force',
      'stats.followers': 'Instagram followers',
      'stats.city': 'Astana',
      'stats.country': 'Kazakhstan',
      'stats.niches': 'focus',
      'steps.kicker': 'How it works',
      'steps.title': 'Five simple steps',
      'steps.s1.t': 'Brief', 'steps.s1.d': 'You send the brief and tell me about the product.',
      'steps.s2.t': 'Concept', 'steps.s2.d': 'I propose the idea and format.',
      'steps.s3.t': 'Creation', 'steps.s3.d': 'I film and edit.',
      'steps.s4.t': 'Approval', 'steps.s4.d': 'You receive the material for approval.',
      'steps.s5.t': 'Delivery', 'steps.s5.d': 'I hand over the final files.',
      'faq.kicker': 'FAQ',
      'faq.title': 'Frequently asked questions',
      'faq.q1': 'Where are you based?',
      'faq.a1': 'In Astana, Kazakhstan.',
      'faq.q2': 'Do you work with brands from other countries?',
      'faq.a2': 'Yes, I work remotely — you simply ship the product to me in Astana.',
      'faq.q3': 'Can I order content without it being posted on your account?',
      'faq.a3': "Yes — that's exactly what UGC is: I create content for you, and you use it on your own channels and in ads.",
      'faq.q4': 'How long does it take?',
      'faq.a4': 'Timing is agreed for each project and depends on the scope of work.',
      'faq.q5': 'Can the videos be used in ads?',
      'faq.a5': 'Yes. Usage rights and their duration are agreed in advance.',
      'faq.q6': 'Do you work from a brief?',
      'faq.a6': "Yes. If you don't have a brief yet, we can put one together.",
      'faq.q7': 'Is barter possible?',
      'faq.a7': 'Barter is discussed individually.',
      'faq.q8': 'What language is the content in?',
      'faq.a8': 'Russian and Kazakh. English on-screen text or subtitles can be added on request — we agree on this in advance.',
      'contact.kicker': 'Contact',
      'contact.title': "Let's create something beautiful together.",
      'contact.sub': "Let's talk about a collaboration — message me wherever is convenient for you.",
      'contact.telegram': 'Telegram',
      'contact.email': 'Email',
      'contact.cta': 'Work with me',
      'footer.city': 'Astana, Kazakhstan',
      'fab.label': 'Message on WhatsApp'
    }
  };

  var root = document.documentElement;

  function storageGet() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function storageSet(v) {
    try { localStorage.setItem(STORAGE_KEY, v); } catch (e) { /* private mode */ }
  }
  try { for (var lk = 0; lk < LEGACY_KEYS.length; lk++) localStorage.removeItem(LEGACY_KEYS[lk]); } catch (e) {}

  function urlLang() {
    try {
      var p = new URLSearchParams(location.search).get('lang');
      p = p && p.toLowerCase();
      if (p === 'kz') p = 'kk';
      return LANGS.indexOf(p) !== -1 ? p : null;
    } catch (e) { return null; }
  }

  // Map browser languages to kk / ru / en. First entry that matches a known group wins;
  // if the browser reports languages but none match, the visitor is international -> en.
  var RU_GROUP = ['ru', 'uk', 'be', 'uz', 'ky', 'tg', 'az', 'hy'];
  function browserLang() {
    var list = [];
    try {
      if (navigator.languages && navigator.languages.length) list = Array.prototype.slice.call(navigator.languages);
      else if (navigator.language) list = [navigator.language];
    } catch (e) {}
    list = list.filter(function (t) { return typeof t === 'string' && t.trim(); });
    if (!list.length) return null;
    for (var i = 0; i < list.length; i++) {
      var primary = list[i].trim().toLowerCase().split(/[-_]/)[0];
      if (primary === 'kk' || primary === 'kz') return 'kk';
      if (RU_GROUP.indexOf(primary) !== -1) return 'ru';
      if (primary === 'en') return 'en';
    }
    return 'en';
  }

  // Priority: 1) ?lang=  2) saved manual choice  3) browser languages  4) kk
  function initialLang() {
    var fromUrl = urlLang();
    if (fromUrl) return fromUrl;
    var saved = storageGet();
    if (saved && LANGS.indexOf(saved) !== -1) return saved;
    return browserLang() || 'kk';
  }

  function setMeta(selector, value) {
    var el = document.querySelector(selector);
    if (el) el.setAttribute('content', value);
  }

  function updateFaqLd(lang, dict) {
    var el = document.getElementById('faq-ld');
    if (!el) return;
    var items = [];
    for (var n = 1; dict['faq.q' + n]; n++) {
      items.push({ '@type': 'Question', name: dict['faq.q' + n], acceptedAnswer: { '@type': 'Answer', text: dict['faq.a' + n] } });
    }
    el.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: lang, mainEntity: items });
  }

  function applyLang(lang, persist) {
    var dict = I18N[lang] || I18N.kk;
    root.setAttribute('lang', lang);

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var v = dict[nodes[i].getAttribute('data-i18n')];
      if (v != null) nodes[i].textContent = v;
    }
    var altNodes = document.querySelectorAll('[data-i18n-alt]');
    for (var m = 0; m < altNodes.length; m++) {
      var alt = dict[altNodes[m].getAttribute('data-i18n-alt')];
      if (alt != null) altNodes[m].setAttribute('alt', alt);
    }
    var ariaNodes = document.querySelectorAll('[data-i18n-aria]');
    for (var j = 0; j < ariaNodes.length; j++) {
      var a = dict[ariaNodes[j].getAttribute('data-i18n-aria')];
      if (a != null) ariaNodes[j].setAttribute('aria-label', a);
    }

    document.title = dict['meta.title'];
    setMeta('meta[name="description"]', dict['meta.description']);
    setMeta('meta[property="og:title"]', dict['meta.title']);
    setMeta('meta[property="og:description"]', dict['meta.description']);
    setMeta('meta[property="og:locale"]', dict['meta.locale']);

    var waHref = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(dict['wa.message']);
    var wa = document.querySelectorAll('.js-wa');
    for (var k = 0; k < wa.length; k++) wa[k].setAttribute('href', waHref);

    var btns = document.querySelectorAll('.lang-switch button');
    for (var b = 0; b < btns.length; b++) {
      btns[b].setAttribute('aria-pressed', btns[b].getAttribute('data-lang') === lang ? 'true' : 'false');
    }
    updateFaqLd(lang, dict);
    if (persist) storageSet(lang);
  }

  // Language switcher
  var switcher = document.querySelector('.lang-switch');
  if (switcher) {
    switcher.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-lang]');
      if (!btn) return;
      var chosen = btn.getAttribute('data-lang');
      applyLang(chosen, true);
      // keep an explicit ?lang= in the address bar in sync with the manual choice
      try {
        if (urlLang() && window.history && history.replaceState) {
          var u = new URL(location.href);
          u.searchParams.set('lang', chosen);
          history.replaceState(null, '', u.toString());
        }
      } catch (err) {}
    });
  }
  applyLang(initialLang(), false);

  // Year
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Header shadow + floating button visibility
  var header = document.querySelector('.site-header');
  var fab = document.querySelector('.fab');
  var hero = document.querySelector('.hero');
  var contact = document.getElementById('contact');
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('is-scrolled', y > 8);
    if (fab && hero) {
      var pastHero = y > hero.offsetHeight * 0.8;
      var atContact = contact && contact.getBoundingClientRect().top < window.innerHeight * 0.85;
      fab.classList.toggle('is-visible', pastHero && !atContact);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduceMotion) {
    for (var r = 0; r < reveals.length; r++) reveals[r].classList.add('is-in');
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    for (var q = 0; q < reveals.length; q++) io.observe(reveals[q]);
  }

  // Portfolio filter tabs (tabs with no matching items are hidden automatically)
  var tabs = document.querySelectorAll('.tabs .tab');
  var reelItems = document.querySelectorAll('.reels .reel');
  var reelsWrap = document.querySelector('.reels');
  function countFor(f) {
    var c = 0;
    for (var i = 0; i < reelItems.length; i++) if ((' ' + reelItems[i].getAttribute('data-cat') + ' ').indexOf(' ' + f + ' ') !== -1) c++;
    return c;
  }
  function applyFilter(f) {
    for (var i = 0; i < reelItems.length; i++) {
      var match = (' ' + reelItems[i].getAttribute('data-cat') + ' ').indexOf(' ' + f + ' ') !== -1;
      reelItems[i].hidden = !match;
    }
    for (var t = 0; t < tabs.length; t++) tabs[t].setAttribute('aria-selected', tabs[t].getAttribute('data-filter') === f ? 'true' : 'false');
    if (reelsWrap) reelsWrap.scrollLeft = 0;
  }
  for (var ti = 0; ti < tabs.length; ti++) {
    if (countFor(tabs[ti].getAttribute('data-filter')) === 0) tabs[ti].hidden = true;
    tabs[ti].addEventListener('click', function () { applyFilter(this.getAttribute('data-filter')); });
  }

  // Lazy Instagram embeds (official embed.js), with fallback links
  var portfolio = document.getElementById('portfolio');
  var embedsRequested = false;
  function markFailed() {
    if (portfolio && !portfolio.querySelector('iframe')) portfolio.classList.add('embeds-failed');
  }
  function loadEmbeds() {
    if (embedsRequested) return;
    embedsRequested = true;
    if (window.instgrm && window.instgrm.Embeds) { window.instgrm.Embeds.process(); return; }
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.instagram.com/embed.js';
    s.onload = function () {
      if (window.instgrm && window.instgrm.Embeds) window.instgrm.Embeds.process();
    };
    s.onerror = markFailed;
    document.body.appendChild(s);
    setTimeout(markFailed, 12000);
  }
  if (portfolio) {
    if ('IntersectionObserver' in window) {
      var pio = new IntersectionObserver(function (entries) {
        if (entries.some(function (e) { return e.isIntersecting; })) {
          loadEmbeds();
          pio.disconnect();
        }
      }, { rootMargin: '800px 0px' });
      pio.observe(portfolio);
    } else {
      loadEmbeds();
    }
  }
})();
