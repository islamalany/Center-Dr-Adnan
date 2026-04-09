/* Dr. Adnan Center — Language Toggle (EN / AR) */
(function () {
  const T = {
    en: {
      /* ── Nav ── */
      'nav.brand':           'Dr. Adnan Center',
      'nav.treatments':      'Treatments',
      'nav.ivf':             'IVF Journey',
      'nav.clinic':          'Our Clinic',
      'nav.stories':         'Success Stories',
      'nav.contact':         'Contact',
      'nav.book':            'Book Appointment',
      'nav.lang':            'العربية',

      /* ── Home › Hero ── */
      'hero.badge':          "Doha's Leading IVF Specialists",
      'hero.h1a':            'Your Journey to Parenthood',
      'hero.h1b':            'Starts Here',
      'hero.body':           'At Dr. Adnan Center, we combine world-class medical expertise with compassionate, personalized care to help your dreams of building a family come true.',
      'hero.btn1':           'Book Appointment',
      'hero.btn2':           'WhatsApp Support',
      'hero.stat':           '92% Success Rate',
      'hero.stat.sub':       'Exceptional clinical outcomes for IVF treatments in 2023.',

      /* ── Home › Stats bar ── */
      'stats.ivf':           'IVF Success Rate',
      'stats.years':         'Years Experience',
      'stats.babies':        'Babies Born',
      'stats.rating':        'Patient Rating',

      /* ── Home › Services ── */
      'svc.title':           'Comprehensive Fertility Care',
      'svc.desc':            'We offer a full spectrum of advanced reproductive technologies and personalized clinical support.',
      'svc.ivf':             'IVF Treatments',
      'svc.ivf.d':           'State-of-the-art In Vitro Fertilization procedures tailored to your unique biological profile.',
      'svc.male':            'Male Infertility',
      'svc.male.d':          'Comprehensive diagnostics and treatments for male factor infertility, including micro-TESE.',
      'svc.female':          'Female Infertility',
      'svc.female.d':        'Expert care for PCOS, endometriosis, and ovarian reserve challenges using advanced protocols.',
      'svc.us':              '3D/4D Ultrasound',
      'svc.us.d':            "High-definition imaging to monitor your baby's development with crystal clarity and clinical precision.",
      'svc.preg':            'Pregnancy Care',
      'svc.preg.d':          'Personalized obstetric care from conception through delivery, ensuring the health of both mother and child.',
      'svc.gen':             'Genetic Testing',
      'svc.gen.d':           'Advanced PGT-A and PGT-M screening to ensure the highest chances of a healthy pregnancy.',
      'svc.learn':           'Learn more',

      /* ── Home › Why us ── */
      'why.title':           'Why Doha Trusts Dr. Adnan Center',
      'why.exp':             'Decades of Experience',
      'why.exp.d':           'Led by Dr. Adnan, our medical team brings over 25 years of international expertise in reproductive medicine.',
      'why.tech':            'Cutting-Edge Technology',
      'why.tech.d':          'We utilize the latest RI Witness systems and AI-assisted embryo selection for the best outcomes.',
      'why.care':            'Compassionate Environment',
      'why.care.d':          'Every patient is a person, not a protocol. We provide emotional support alongside medical excellence.',

      /* ── Home › Quote ── */
      'quote':               '"We don\'t just treat… we help you build a family."',

      /* ── Home › Testimonials ── */
      'test.title':          'Stories of Hope',
      'test.desc':           'Real experiences from families who started their journey with us.',

      /* ── Home › Final CTA ── */
      'cta.title':           'Take the first step today.',
      'cta.desc':            'Your consultation is confidential. Our experts are ready to listen and guide you through your journey.',
      'cta.btn1':            'Book Your Appointment',
      'cta.btn2':            'Contact Support',

      /* ── Footer ── */
      'footer.about':        'A premier fertility boutique center in the heart of Doha, dedicated to providing world-class IVF and reproductive care.',
      'footer.quick':        'Quick Links',
      'footer.legal':        'Legal',
      'footer.visit':        'Visit Us',
      'footer.privacy':      'Privacy Policy',
      'footer.rights':       'Patient Rights',
      'footer.careers':      'Careers',
      'footer.trt':          'Treatments',
      'footer.success':      'Success Stories',
      'footer.book':         'Book Appointment',
      'footer.licensed':     'Licensed by Ministry of Public Health, Qatar',
      'footer.newsletter':   'Newsletter',
      'footer.email.ph':     'Email',

      /* ── Services page ── */
      'pg.svc.h1':           'Our Services',
      'pg.svc.sub':          'Empowering your journey to parenthood with advanced reproductive science and compassionate, personalized care.',
      'pg.svc.ivf.badge':    'Fertility Excellence',
      'pg.svc.ivf.h2':       'In Vitro Fertilization (IVF)',
      'pg.svc.ivf.p':        'Our IVF program is designed to provide the highest success rates through personalized protocols. We blend cutting-edge technology with a nurturing environment to support you at every stage.',
      'pg.svc.ivf.btn':      'Book IVF Consultation',
      'pg.svc.4d.h3':        '4D Ultrasound',
      'pg.svc.4d.p':         'Experience the first glimpses of your baby with high-resolution imaging that captures life in stunning detail.',
      'pg.svc.preg.h3':      'Pregnancy Care',
      'pg.svc.preg.p':       'Comprehensive prenatal support from conception to delivery, ensuring the health and well-being of both mother and child.',
      'pg.svc.gen.h3':       'Genetic Screening (PGT)',
      'pg.svc.gen.p':        'Advanced PGT testing to screen for genetic conditions, increasing the likelihood of a healthy pregnancy and baby.',
      'pg.svc.male.h3':      'Male Infertility',
      'pg.svc.male.p':       'Comprehensive diagnostics and micro-surgical treatments including micro-TESE for the most complex male factor cases.',
      'pg.svc.female.h3':    'Female Infertility',
      'pg.svc.female.p':     'Expert care for PCOS, endometriosis, diminished ovarian reserve, and other reproductive challenges.',

      /* ── IVF Journey ── */
      'journey.title':       'The IVF Journey',
      'journey.sub':         'A simple, guided path to your growing family.',
      'journey.s1':          '1. Egg Retrieval',
      'journey.s1.d':        'A simple, minimally invasive procedure to collect mature eggs under light sedation.',
      'journey.s2':          '2. Fertilization',
      'journey.s2.d':        'Expert embryologists combine eggs and sperm in our state-of-the-art lab to create embryos.',
      'journey.s3':          '3. Embryo Transfer',
      'journey.s3.d':        'The healthiest embryo is gently placed in the uterus to begin your pregnancy journey.',

      /* ── Services CTA ── */
      'svc.cta.title':       'Your story starts with a conversation.',
      'svc.cta.desc':        'Book a consultation with Dr. Adnan and our team of experts today. We are here to listen, support, and guide you.',
      'svc.cta.btn1':        'Schedule a Consultation',
      'svc.cta.btn2':        'View Success Stories',

      /* ── Book page ── */
      'book.h1':             'Your Journey to Parenthood Starts Here',
      'book.sub':            "Request a confidential consultation with Qatar's leading fertility specialists. We are committed to providing you with the highest standard of personalized care.",
      'book.name':           'Full Name *',
      'book.phone':          'Phone Number *',
      'book.email':          'Email Address *',
      'book.service':        'Service Type',
      'book.date':           'Preferred Date',
      'book.msg':            'Additional Message (optional)',
      'book.submit':         'Request Appointment',
      'book.privacy':        "Your privacy is our priority. All information shared is encrypted and handled with the utmost medical confidentiality under Qatar's health regulations.",
      'book.ok.title':       'Request Received!',
      'book.ok.desc':        'Our team will contact you within 24 hours to confirm your appointment. Thank you!',
      'book.wa.title':       'Instant Support',
      'book.wa.desc':        'Prefer a quick chat? Our patient care team is available 24/7 on WhatsApp for inquiries.',
      'book.wa.btn':         'Start Chat',
      'book.clinic.title':   'Visit Our Clinic',
      'book.hours':          'Sat – Thu: 8:00 AM – 8:00 PM | Friday: Closed',
      'book.trust.title':    'Accredited & Trusted',
      'book.trust.1':        'Ministry of Public Health, Qatar',
      'book.trust.2':        'Joint Commission International (JCI)',
      'book.trust.3':        '92% IVF Success Rate (2023)',

      /* ── Shared ── */
      'wa.tooltip.title':    'Dr. Adnan WhatsApp',
      'wa.tooltip.sub':      'Fertility Support 24/7',
      'footer.copy':         '© 2024 Dr. Adnan Center Doha. All Rights Reserved.',
    },

    ar: {
      /* ── Nav ── */
      'nav.brand':           'مركز د. عدنان',
      'nav.treatments':      'العلاجات',
      'nav.ivf':             'رحلة أطفال الأنابيب',
      'nav.clinic':          'عيادتنا',
      'nav.stories':         'قصص النجاح',
      'nav.contact':         'اتصل بنا',
      'nav.book':            'احجز موعداً',
      'nav.lang':            'English',

      /* ── Home › Hero ── */
      'hero.badge':          'رواد أطفال الأنابيب في الدوحة',
      'hero.h1a':            'رحلتك نحو الأبوة',
      'hero.h1b':            'تبدأ هنا',
      'hero.body':           'في مركز د. عدنان، نجمع بين الخبرة الطبية العالمية والرعاية الشخصية الرحيمة لمساعدتك على تحقيق حلمك ببناء أسرة.',
      'hero.btn1':           'احجز موعداً',
      'hero.btn2':           'دعم واتساب',
      'hero.stat':           'نسبة نجاح 92%',
      'hero.stat.sub':       'نتائج سريرية استثنائية لعلاجات أطفال الأنابيب في 2023.',

      /* ── Home › Stats bar ── */
      'stats.ivf':           'نسبة نجاح أطفال الأنابيب',
      'stats.years':         'سنوات خبرة',
      'stats.babies':        'طفل وُلد',
      'stats.rating':        'تقييم المريض',

      /* ── Home › Services ── */
      'svc.title':           'رعاية شاملة للخصوبة',
      'svc.desc':            'نقدم طيفاً كاملاً من تقنيات الإنجاب المتقدمة والدعم السريري الشخصي.',
      'svc.ivf':             'علاجات أطفال الأنابيب',
      'svc.ivf.d':           'إجراءات أطفال الأنابيب المتطورة المصممة خصيصاً لملفك البيولوجي الفريد.',
      'svc.male':            'العقم عند الرجال',
      'svc.male.d':          'تشخيص وعلاج شامل لعوامل العقم عند الرجال، بما في ذلك micro-TESE.',
      'svc.female':          'العقم عند النساء',
      'svc.female.d':        'رعاية متخصصة لمتلازمة تكيس المبايض والانتباذ الرحمي وتحديات الاحتياطي المبيضي.',
      'svc.us':              'الموجات فوق الصوتية ثلاثية/رباعية الأبعاد',
      'svc.us.d':            'تصوير عالي الدقة لمتابعة نمو طفلك بوضوح كامل ودقة سريرية.',
      'svc.preg':            'رعاية الحمل',
      'svc.preg.d':          'رعاية توليدية شخصية من الحمل حتى الولادة، لضمان صحة الأم والطفل.',
      'svc.gen':             'الفحص الجيني',
      'svc.gen.d':           'فحص PGT-A وPGT-M المتقدم لضمان أعلى فرص للحمل الصحي.',
      'svc.learn':           'اعرف المزيد',

      /* ── Home › Why us ── */
      'why.title':           'لماذا تثق الدوحة بمركز د. عدنان',
      'why.exp':             'عقود من الخبرة',
      'why.exp.d':           'بقيادة د. عدنان، يمتلك فريقنا الطبي أكثر من 25 عاماً من الخبرة الدولية في طب الإنجاب.',
      'why.tech':            'أحدث التقنيات',
      'why.tech.d':          'نستخدم أنظمة RI Witness الأحدث واختيار الأجنة بمساعدة الذكاء الاصطناعي لأفضل النتائج.',
      'why.care':            'بيئة رحيمة',
      'why.care.d':          'كل مريض شخص وليس بروتوكولاً. نقدم الدعم العاطفي جنباً إلى جنب مع التميز الطبي.',

      /* ── Home › Quote ── */
      'quote':               '"نحن لا نعالج فقط... بل نساعدك في بناء عائلتك."',

      /* ── Home › Testimonials ── */
      'test.title':          'قصص الأمل',
      'test.desc':           'تجارب حقيقية من عائلات بدأت رحلتها معنا.',

      /* ── Home › Final CTA ── */
      'cta.title':           'اتخذ الخطوة الأولى اليوم.',
      'cta.desc':            'استشارتك سرية تماماً. خبراؤنا مستعدون للاستماع إليك وإرشادك في رحلتك.',
      'cta.btn1':            'احجز موعدك',
      'cta.btn2':            'تواصل مع الدعم',

      /* ── Footer ── */
      'footer.about':        'مركز خصوبة متميز في قلب الدوحة، مكرس لتقديم رعاية أطفال الأنابيب والإنجاب على مستوى عالمي.',
      'footer.quick':        'روابط سريعة',
      'footer.legal':        'قانوني',
      'footer.visit':        'زورنا',
      'footer.privacy':      'سياسة الخصوصية',
      'footer.rights':       'حقوق المريض',
      'footer.careers':      'الوظائف',
      'footer.trt':          'العلاجات',
      'footer.success':      'قصص النجاح',
      'footer.book':         'احجز موعداً',
      'footer.licensed':     'مرخص من وزارة الصحة العامة، قطر',
      'footer.newsletter':   'النشرة الإخبارية',
      'footer.email.ph':     'البريد الإلكتروني',

      /* ── Services page ── */
      'pg.svc.h1':           'خدماتنا',
      'pg.svc.sub':          'نمكّن رحلتك نحو الأبوة بعلم الإنجاب المتقدم والرعاية الشخصية الرحيمة.',
      'pg.svc.ivf.badge':    'تميز في الخصوبة',
      'pg.svc.ivf.h2':       'أطفال الأنابيب (IVF)',
      'pg.svc.ivf.p':        'برنامجنا لأطفال الأنابيب مصمم لتوفير أعلى معدلات النجاح من خلال بروتوكولات شخصية. نمزج بين أحدث التقنيات وبيئة داعمة لمساندتك في كل مرحلة.',
      'pg.svc.ivf.btn':      'احجز استشارة أطفال الأنابيب',
      'pg.svc.4d.h3':        'الموجات فوق الصوتية رباعية الأبعاد',
      'pg.svc.4d.p':         'شاهد لمحاتك الأولى من طفلك بتصوير عالي الدقة يلتقط الحياة بتفاصيل مذهلة.',
      'pg.svc.preg.h3':      'رعاية الحمل',
      'pg.svc.preg.p':       'دعم شامل لما قبل الولادة من الحمل حتى الوضع، لضمان صحة الأم والطفل.',
      'pg.svc.gen.h3':       'الفحص الجيني (PGT)',
      'pg.svc.gen.p':        'فحص PGT المتقدم للكشف عن الحالات الجينية وزيادة احتمالية الحمل الصحي.',
      'pg.svc.male.h3':      'العقم عند الرجال',
      'pg.svc.male.p':       'تشخيص وعلاج جراحي دقيق بما في ذلك micro-TESE لأعقد حالات العقم عند الرجال.',
      'pg.svc.female.h3':    'العقم عند النساء',
      'pg.svc.female.p':     'رعاية متخصصة لمتلازمة تكيس المبايض والانتباذ الرحمي وضعف الاحتياطي المبيضي وغيرها.',

      /* ── IVF Journey ── */
      'journey.title':       'رحلة أطفال الأنابيب',
      'journey.sub':         'مسار بسيط وموجَّه نحو أسرتك المتنامية.',
      'journey.s1':          '١. استخراج البويضات',
      'journey.s1.d':        'إجراء بسيط وأقل توغلاً لجمع البويضات الناضجة تحت تخدير خفيف.',
      'journey.s2':          '٢. التلقيح',
      'journey.s2.d':        'يقوم علماء الأجنة المتخصصون بدمج البويضات والحيوانات المنوية في مختبرنا المتطور لإنشاء الأجنة.',
      'journey.s3':          '٣. نقل الجنين',
      'journey.s3.d':        'يُزرع الجنين الأكثر صحة بلطف في الرحم لبدء رحلة الحمل.',

      /* ── Services CTA ── */
      'svc.cta.title':       'قصتك تبدأ بمحادثة.',
      'svc.cta.desc':        'احجز استشارة مع د. عدنان وفريقنا من الخبراء اليوم. نحن هنا للاستماع والدعم والإرشاد.',
      'svc.cta.btn1':        'جدول استشارة',
      'svc.cta.btn2':        'عرض قصص النجاح',

      /* ── Book page ── */
      'book.h1':             'رحلتك نحو الأبوة تبدأ هنا',
      'book.sub':            'اطلب استشارة سرية مع أفضل متخصصي الخصوبة في قطر. نلتزم بتقديم أعلى مستويات الرعاية الشخصية.',
      'book.name':           'الاسم الكامل *',
      'book.phone':          'رقم الهاتف *',
      'book.email':          'البريد الإلكتروني *',
      'book.service':        'نوع الخدمة',
      'book.date':           'التاريخ المفضل',
      'book.msg':            'رسالة إضافية (اختياري)',
      'book.submit':         'طلب موعد',
      'book.privacy':        'خصوصيتك أولويتنا. جميع المعلومات المشتركة مشفرة وتُتعامل معها بسرية طبية تامة وفق أنظمة الصحة في قطر.',
      'book.ok.title':       'تم استلام طلبك!',
      'book.ok.desc':        'سيتواصل فريقنا معك خلال 24 ساعة لتأكيد موعدك. شكراً لك!',
      'book.wa.title':       'دعم فوري',
      'book.wa.desc':        'تفضل المحادثة السريعة؟ فريق رعاية المرضى لدينا متاح على مدار الساعة عبر واتساب.',
      'book.wa.btn':         'ابدأ محادثة',
      'book.clinic.title':   'زيارة عيادتنا',
      'book.hours':          'السبت – الخميس: 8:00 ص – 8:00 م | الجمعة: مغلق',
      'book.trust.title':    'معتمد وموثوق',
      'book.trust.1':        'وزارة الصحة العامة، قطر',
      'book.trust.2':        'اللجنة المشتركة الدولية (JCI)',
      'book.trust.3':        'نسبة نجاح أطفال الأنابيب 92% (2023)',

      /* ── Shared ── */
      'wa.tooltip.title':    'واتساب مركز د. عدنان',
      'wa.tooltip.sub':      'دعم الخصوبة على مدار الساعة',
      'footer.copy':         '© 2024 مركز د. عدنان الدوحة. جميع الحقوق محفوظة.',
    }
  };

  function applyLang(lang) {
    const t = T[lang];
    const html = document.documentElement;
    html.lang = lang;
    html.dir  = lang === 'ar' ? 'rtl' : 'ltr';

    /* textContent nodes */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = t[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });

    /* placeholder attributes */
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const v = t[el.dataset.i18nPh];
      if (v !== undefined) el.placeholder = v;
    });

    /* lang-only visibility */
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.style.display = el.dataset.lang === lang ? '' : 'none';
    });

    /* adjust text-alignment for body paragraphs in RTL */
    document.body.style.textAlign = lang === 'ar' ? 'right' : '';

    localStorage.setItem('drac-lang', lang);
  }

  window.toggleLang = function () {
    const cur = localStorage.getItem('drac-lang') || 'en';
    applyLang(cur === 'en' ? 'ar' : 'en');
  };

  /* Apply saved language as soon as DOM is ready */
  document.addEventListener('DOMContentLoaded', function () {
    const saved = localStorage.getItem('drac-lang') || 'en';
    if (saved === 'ar') applyLang('ar');
  });
})();
