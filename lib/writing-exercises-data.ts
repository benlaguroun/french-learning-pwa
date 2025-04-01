// This file contains the data for the writing exercises

export const writingExercisesData = [
  {
    id: "beginner",
    title: "المستوى المبتدئ",
    description: "تمارين كتابة أساسية للمبتدئين",
    exercises: [
      {
        id: "basic-1",
        title: "تقديم النفس",
        description: "اكتب فقرة قصيرة تقدم فيها نفسك باللغة الفرنسية",
        category: "التقديم الشخصي",
        prompt: "اكتب فقرة قصيرة (3-5 جمل) تقدم فيها نفسك. تحدث عن اسمك وعمرك ومكان سكنك وهواياتك.",
        example:
          "Je m'appelle Thomas. J'ai 25 ans. J'habite à Lyon en France. J'aime lire des livres et jouer au football. Je suis étudiant en informatique.",
        translation:
          "اسمي توماس. عمري 25 عاماً. أعيش في ليون في فرنسا. أحب قراءة الكتب ولعب كرة القدم. أنا طالب في علوم الكمبيوتر.",
        keyPhrases: ["Je m'appelle", "J'ai", "ans", "J'habite", "J'aime", "Je suis"],
        tips: [
          "استخدم الفعل s'appeler للتعريف بالاسم",
          "استخدم الفعل avoir للتعبير عن العمر",
          "استخدم الفعل habiter للتعبير عن مكان السكن",
          "استخدم الفعل aimer للتعبير عن الهوايات",
          "استخدم الفعل être للتعبير عن المهنة أو الدراسة",
        ],
      },
      {
        id: "basic-2",
        title: "وصف يومك",
        description: "اكتب فقرة قصيرة تصف فيها روتينك اليومي",
        category: "الحياة اليومية",
        prompt: "اكتب فقرة قصيرة (3-5 جمل) تصف فيها روتينك اليومي. تحدث عن وقت استيقاظك وماذا تفعل في الصباح والمساء.",
        example:
          "Je me réveille à 7 heures du matin. Je prends mon petit-déjeuner à 7h30. Je travaille de 9 heures à 17 heures. Le soir, je dîne à 19 heures et je regarde la télévision. Je me couche à 23 heures.",
        translation:
          "أستيقظ في الساعة 7 صباحاً. أتناول فطوري في الساعة 7:30. أعمل من الساعة 9 حتى الساعة 5 مساءً. في المساء، أتناول العشاء في الساعة 7 مساءً وأشاهد التلفزيون. أنام في الساعة 11 مساءً.",
        keyPhrases: ["Je me réveille", "Je prends", "petit-déjeuner", "Je travaille", "Le soir", "Je me couche"],
        tips: [
          "استخدم الأفعال المنعكسة مثل se réveiller (يستيقظ) و se coucher (ينام)",
          "استخدم التعبيرات الزمنية مثل le matin (في الصباح) و le soir (في المساء)",
          "استخدم الساعات للتعبير عن الوقت",
          "استخدم الفعل prendre للتعبير عن تناول الطعام",
        ],
      },
      {
        id: "basic-3",
        title: "وصف عائلتك",
        description: "اكتب فقرة قصيرة تصف فيها عائلتك",
        category: "العائلة والأصدقاء",
        prompt: "اكتب فقرة قصيرة (3-5 جمل) تصف فيها عائلتك. تحدث عن أفراد عائلتك وأعمارهم ومهنهم.",
        example:
          "Ma famille est petite. J'ai un frère et une sœur. Mon frère s'appelle Pierre, il a 20 ans et il est étudiant. Ma sœur s'appelle Marie, elle a 30 ans et elle est médecin. Mes parents sont professeurs.",
        translation:
          "عائلتي صغيرة. لدي أخ وأخت. أخي اسمه بيير، عمره 20 عاماً وهو طالب. أختي اسمها ماري، عمرها 30 عاماً وهي طبيبة. والداي مدرسان.",
        keyPhrases: ["Ma famille", "J'ai", "Mon frère", "Ma sœur", "il a", "elle a", "Mes parents"],
        tips: [
          "استخدم الصفات الملكية مثل mon (أخي) و ma (أختي) و mes (والداي)",
          "استخدم الضمائر الشخصية مثل il (هو) و elle (هي)",
          "استخدم الفعل être للتعبير عن المهنة",
          "استخدم الفعل avoir للتعبير عن العمر",
        ],
      },
      // Add more beginner exercises...
      // Add 30 more exercises to reach 100 total for all levels
    ],
  },
  {
    id: "intermediate",
    title: "المستوى المتوسط",
    description: "تمارين كتابة متوسطة المستوى",
    exercises: [
      {
        id: "intermediate-1",
        title: "وصف مدينتك",
        description: "اكتب فقرة تصف فيها مدينتك أو بلدك",
        category: "الأماكن والسفر",
        prompt: "اكتب فقرة (5-7 جمل) تصف فيها مدينتك أو بلدك. تحدث عن الموقع والمناخ والمعالم السياحية والثقافة.",
        example:
          "J'habite à Marseille, une grande ville située dans le sud de la France. Marseille est une ville portuaire sur la mer Méditerranée. Le climat est chaud en été et doux en hiver. Il y a beaucoup de monuments historiques comme le Vieux-Port et la Basilique Notre-Dame de la Garde. La cuisine marseillaise est célèbre pour la bouillabaisse, une soupe de poisson traditionnelle. Les habitants sont accueillants et la ville est très animée.",
        translation:
          "أعيش في مرسيليا، وهي مدينة كبيرة تقع في جنوب فرنسا. مرسيليا هي مدينة ميناء على البحر المتوسط. المناخ حار في الصيف ومعتدل في الشتاء. هناك العديد من المعالم التاريخية مثل الميناء القديم وكاتدرائية نوتردام دو لا غارد. المطبخ المرسيلي مشهور بحساء البوياباس، وهو حساء سمك تقليدي. السكان ودودون والمدينة نابضة بالحياة.",
        keyPhrases: ["située", "climat", "monuments historiques", "cuisine", "habitants", "animée"],
        tips: [
          "استخدم الصفات لوصف المدينة والمناخ",
          "استخدم التعبير il y a للإشارة إلى وجود شيء ما",
          "استخدم الصفات للتعبير عن رأيك في المدينة",
          "استخدم الروابط مثل et و mais و car لربط الجمل",
        ],
      },
      // Add more intermediate exercises...
      // Add 30 more exercises to reach 100 total for all levels
    ],
  },
  {
    id: "advanced",
    title: "المستوى المتقدم",
    description: "تمارين كتابة متقدمة",
    exercises: [
      {
        id: "advanced-1",
        title: "رأيك في موضوع اجتماعي",
        description: "اكتب مقالاً قصيراً تعبر فيه عن رأيك في موضوع اجتماعي",
        category: "المقالات والآراء",
        prompt:
          "اكتب مقالاً قصيراً (8-10 جمل) تعبر فيه عن رأيك في أهمية تعلم اللغات الأجنبية في عالمنا اليوم. قدم حججاً مؤيدة لوجهة نظرك.",
        example:
          "De nos jours, l'apprentissage des langues étrangères est devenu essentiel dans notre monde globalisé. Tout d'abord, parler plusieurs langues offre de meilleures opportunités professionnelles car les entreprises recherchent des employés capables de communiquer à l'international. Ensuite, les langues étrangères nous permettent de découvrir d'autres cultures et d'élargir nos horizons. Par exemple, lire un livre dans sa langue originale nous donne accès à des nuances que la traduction ne peut pas toujours transmettre. De plus, des études scientifiques ont démontré que le bilinguisme améliore les capacités cognitives et peut même retarder l'apparition de maladies comme Alzheimer. Enfin, voyager devient beaucoup plus enrichissant lorsqu'on peut communiquer avec les habitants locaux. En conclusion, apprendre des langues étrangères n'est pas seulement un atout professionnel, mais aussi un enrichissement personnel et culturel.",
        translation:
          "في أيامنا هذه، أصبح تعلم اللغات الأجنبية أمراً ضرورياً في عالمنا المعولم. أولاً، يوفر التحدث بعدة لغات فرصاً مهنية أفضل لأن الشركات تبحث عن موظفين قادرين على التواصل دولياً. ثانياً، تتيح لنا اللغات الأجنبية اكتشاف ثقافات أخرى وتوسيع آفاقنا. على سبيل المثال، قراءة كتاب بلغته الأصلية تمنحنا الوصول إلى فروق دقيقة لا تستطيع الترجمة نقلها دائماً. علاوة على ذلك، أظهرت الدراسات العلمية أن ثنائية اللغة تحسن القدرات المعرفية ويمكن أن تؤخر ظهور أمراض مثل الزهايمر. أخيراً، يصبح السفر أكثر إثراءً عندما نتمكن من التواصل مع السكان المحليين. في الختام، لا يعد تعلم اللغات الأجنبية ميزة مهنية فحسب، بل هو أيضاً إثراء شخصي وثقافي.",
        keyPhrases: ["De nos jours", "Tout d'abord", "Ensuite", "Par exemple", "De plus", "Enfin", "En conclusion"],
        tips: [
          "استخدم تعبيرات الربط المنطقي مثل tout d'abord و ensuite و de plus و enfin",
          "قدم أمثلة لدعم حججك",
          "استخدم الصيغة المبنية للمجهول عند الحاجة",
          "استخدم الأزمنة المختلفة بشكل صحيح",
          "اختم مقالك بخلاصة تلخص وجهة نظرك",
        ],
      },
      // Add more advanced exercises...
      // Add 40 more exercises to reach 100 total for all levels
    ],
  },
]

