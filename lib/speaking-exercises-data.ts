// This file contains the data for the speaking exercises

export const speakingExercisesData = [
  {
    id: "beginner",
    title: "المستوى المبتدئ",
    description: "تمارين نطق أساسية للمبتدئين",
    exercises: [
      {
        id: "basic-greetings",
        title: "التحيات والمجاملات",
        description: "تدرب على نطق التحيات والمجاملات الأساسية",
        category: "المحادثات اليومية",
        phrases: [
          {
            text: "Bonjour",
            translation: "مرحباً / صباح الخير",
            audioUrl: "/audio/bonjour.mp3",
            context: "تستخدم للتحية في النهار",
          },
          {
            text: "Bonsoir",
            translation: "مساء الخير",
            audioUrl: "/audio/bonsoir.mp3",
            context: "تستخدم للتحية في المساء",
          },
          {
            text: "Comment ça va?",
            translation: "كيف حالك؟",
            audioUrl: "/audio/comment-ca-va.mp3",
            context: "سؤال عن الحال",
          },
          {
            text: "Merci beaucoup",
            translation: "شكراً جزيلاً",
            audioUrl: "/audio/merci.mp3",
            context: "للتعبير عن الشكر",
          },
          {
            text: "Au revoir",
            translation: "مع السلامة",
            audioUrl: "/audio/au-revoir.mp3",
            context: "للوداع",
          },
        ],
      },
      {
        id: "self-introduction",
        title: "التقديم الشخصي",
        description: "تدرب على تقديم نفسك باللغة الفرنسية",
        category: "المحادثات اليومية",
        phrases: [
          {
            text: "Je m'appelle...",
            translation: "اسمي...",
            audioUrl: "/audio/je-mappelle.mp3",
            context: "للتعريف بالاسم",
          },
          {
            text: "J'ai ... ans",
            translation: "عمري ... سنة",
            audioUrl: "/audio/jai-ans.mp3",
            context: "للتعريف بالعمر",
          },
          {
            text: "Je suis étudiant/étudiante",
            translation: "أنا طالب/طالبة",
            audioUrl: "/audio/je-suis-etudiant.mp3",
            context: "للتعريف بالمهنة",
          },
          {
            text: "J'habite à...",
            translation: "أنا أسكن في...",
            audioUrl: "/audio/jhabite.mp3",
            context: "للتعريف بمكان السكن",
          },
          {
            text: "Je viens de...",
            translation: "أنا من...",
            audioUrl: "/audio/je-viens-de.mp3",
            context: "للتعريف ببلد المنشأ",
          },
        ],
      },
      {
        id: "basic-questions",
        title: "الأسئلة الأساسية",
        description: "تدرب على نطق الأسئلة الأساسية",
        category: "الاستفسارات",
        phrases: [
          {
            text: "Où est...?",
            translation: "أين...؟",
            audioUrl: "/audio/ou-est.mp3",
            context: "للسؤال عن المكان",
          },
          {
            text: "Quelle heure est-il?",
            translation: "كم الساعة؟",
            audioUrl: "/audio/quelle-heure.mp3",
            context: "للسؤال عن الوقت",
          },
          {
            text: "Comment allez-vous?",
            translation: "كيف حالك؟ (رسمي)",
            audioUrl: "/audio/comment-allez-vous.mp3",
            context: "للسؤال عن الحال بشكل رسمي",
          },
          {
            text: "Combien ça coûte?",
            translation: "كم يكلف هذا؟",
            audioUrl: "/audio/combien-coute.mp3",
            context: "للسؤال عن السعر",
          },
          {
            text: "Parlez-vous anglais?",
            translation: "هل تتحدث الإنجليزية؟",
            audioUrl: "/audio/parlez-vous-anglais.mp3",
            context: "للسؤال عن اللغة",
          },
        ],
      },
      {
        id: "numbers-basic",
        title: "الأرقام الأساسية",
        description: "تدرب على نطق الأرقام من 1 إلى 10",
        category: "الأرقام والعد",
        phrases: [
          {
            text: "Un",
            translation: "واحد",
            audioUrl: "/audio/un.mp3",
            context: "الرقم 1",
          },
          {
            text: "Deux",
            translation: "اثنان",
            audioUrl: "/audio/deux.mp3",
            context: "الرقم 2",
          },
          {
            text: "Trois",
            translation: "ثلاثة",
            audioUrl: "/audio/trois.mp3",
            context: "الرقم 3",
          },
          {
            text: "Quatre",
            translation: "أربعة",
            audioUrl: "/audio/quatre.mp3",
            context: "الرقم 4",
          },
          {
            text: "Cinq",
            translation: "خمسة",
            audioUrl: "/audio/cinq.mp3",
            context: "الرقم 5",
          },
          {
            text: "Six",
            translation: "ستة",
            audioUrl: "/audio/six.mp3",
            context: "الرقم 6",
          },
          {
            text: "Sept",
            translation: "سبعة",
            audioUrl: "/audio/sept.mp3",
            context: "الرقم 7",
          },
          {
            text: "Huit",
            translation: "ثمانية",
            audioUrl: "/audio/huit.mp3",
            context: "الرقم 8",
          },
          {
            text: "Neuf",
            translation: "تسعة",
            audioUrl: "/audio/neuf.mp3",
            context: "الرقم 9",
          },
          {
            text: "Dix",
            translation: "عشرة",
            audioUrl: "/audio/dix.mp3",
            context: "الرقم 10",
          },
        ],
      },
      {
        id: "days-week",
        title: "أيام الأسبوع",
        description: "تدرب على نطق أيام الأسبوع",
        category: "الزمن والتاريخ",
        phrases: [
          {
            text: "Lundi",
            translation: "الاثنين",
            audioUrl: "/audio/lundi.mp3",
            context: "اليوم الأول من الأسبوع في فرنسا",
          },
          {
            text: "Mardi",
            translation: "الثلاثاء",
            audioUrl: "/audio/mardi.mp3",
            context: "اليوم الثاني من الأسبوع",
          },
          {
            text: "Mercredi",
            translation: "الأربعاء",
            audioUrl: "/audio/mercredi.mp3",
            context: "اليوم الثالث من الأسبوع",
          },
          {
            text: "Jeudi",
            translation: "الخميس",
            audioUrl: "/audio/jeudi.mp3",
            context: "اليوم الرابع من الأسبوع",
          },
          {
            text: "Vendredi",
            translation: "الجمعة",
            audioUrl: "/audio/vendredi.mp3",
            context: "اليوم الخامس من الأسبوع",
          },
          {
            text: "Samedi",
            translation: "السبت",
            audioUrl: "/audio/samedi.mp3",
            context: "اليوم السادس من الأسبوع",
          },
          {
            text: "Dimanche",
            translation: "الأحد",
            audioUrl: "/audio/dimanche.mp3",
            context: "اليوم السابع من الأسبوع",
          },
        ],
      },
      // Add 15 more beginner exercises to reach 20 total
      {
        id: "months-year",
        title: "شهور السنة",
        description: "تدرب على نطق شهور السنة",
        category: "الزمن والتاريخ",
        phrases: [
          {
            text: "Janvier",
            translation: "يناير",
            audioUrl: "/audio/janvier.mp3",
            context: "الشهر الأول من السنة",
          },
          {
            text: "Février",
            translation: "فبراير",
            audioUrl: "/audio/fevrier.mp3",
            context: "الشهر الثاني من السنة",
          },
          {
            text: "Mars",
            translation: "مارس",
            audioUrl: "/audio/mars.mp3",
            context: "الشهر الثالث من السنة",
          },
          {
            text: "Avril",
            translation: "أبريل",
            audioUrl: "/audio/avril.mp3",
            context: "الشهر الرابع من السنة",
          },
          {
            text: "Mai",
            translation: "مايو",
            audioUrl: "/audio/mai.mp3",
            context: "الشهر الخامس من السنة",
          },
          {
            text: "Juin",
            translation: "يونيو",
            audioUrl: "/audio/juin.mp3",
            context: "الشهر السادس من السنة",
          },
          {
            text: "Juillet",
            translation: "يوليو",
            audioUrl: "/audio/juillet.mp3",
            context: "الشهر السابع من السنة",
          },
          {
            text: "Août",
            translation: "أغسطس",
            audioUrl: "/audio/aout.mp3",
            context: "الشهر الثامن من السنة",
          },
          {
            text: "Septembre",
            translation: "سبتمبر",
            audioUrl: "/audio/septembre.mp3",
            context: "الشهر التاسع من السنة",
          },
          {
            text: "Octobre",
            translation: "أكتوبر",
            audioUrl: "/audio/octobre.mp3",
            context: "الشهر العاشر من السنة",
          },
          {
            text: "Novembre",
            translation: "نوفمبر",
            audioUrl: "/audio/novembre.mp3",
            context: "الشهر الحادي عشر من السنة",
          },
          {
            text: "Décembre",
            translation: "ديسمبر",
            audioUrl: "/audio/decembre.mp3",
            context: "الشهر الثاني عشر من السنة",
          },
        ],
      },
      // Continue with more beginner exercises...
      // Add 30 more exercises to reach 100 total for all levels
    ],
  },
  {
    id: "intermediate",
    title: "المستوى المتوسط",
    description: "تمارين نطق متوسطة المستوى",
    exercises: [
      {
        id: "restaurant-conversation",
        title: "في المطعم",
        description: "تدرب على المحادثة في المطعم",
        category: "المطاعم والطعام",
        phrases: [
          {
            text: "Je voudrais réserver une table",
            translation: "أود حجز طاولة",
            audioUrl: "/audio/reserver-table.mp3",
            context: "لحجز طاولة في مطعم",
          },
          {
            text: "Qu'est-ce que vous recommandez?",
            translation: "ماذا توصي؟",
            audioUrl: "/audio/que-recommandez.mp3",
            context: "لطلب توصية من النادل",
          },
          {
            text: "L'addition, s'il vous plaît",
            translation: "الحساب من فضلك",
            audioUrl: "/audio/addition.mp3",
            context: "لطلب الحساب",
          },
          {
            text: "C'était délicieux",
            translation: "كان لذيذاً",
            audioUrl: "/audio/delicieux.mp3",
            context: "للتعبير عن الإعجاب بالطعام",
          },
          {
            text: "Je suis allergique à...",
            translation: "أنا أعاني من حساسية تجاه...",
            audioUrl: "/audio/allergique.mp3",
            context: "للإخبار عن الحساسية الغذائية",
          },
        ],
      },
      // Add more intermediate exercises...
      // Add 30 more exercises to reach 100 total for all levels
    ],
  },
  {
    id: "advanced",
    title: "المستوى المتقدم",
    description: "تمارين نطق متقدمة",
    exercises: [
      {
        id: "expressing-opinions",
        title: "التعبير عن الرأي",
        description: "تدرب على التعبير عن رأيك بطلاقة",
        category: "المناقشات",
        phrases: [
          {
            text: "À mon avis, c'est une bonne idée",
            translation: "في رأيي، هذه فكرة جيدة",
            audioUrl: "/audio/a-mon-avis.mp3",
            context: "للتعبير عن الرأي",
          },
          {
            text: "Je ne suis pas d'accord parce que...",
            translation: "أنا لا أوافق لأن...",
            audioUrl: "/audio/pas-daccord.mp3",
            context: "للتعبير عن عدم الموافقة",
          },
          {
            text: "D'une part... d'autre part...",
            translation: "من ناحية... من ناحية أخرى...",
            audioUrl: "/audio/dune-part.mp3",
            context: "لتقديم وجهات نظر مختلفة",
          },
          {
            text: "En conclusion, je pense que...",
            translation: "في الختام، أعتقد أن...",
            audioUrl: "/audio/en-conclusion.mp3",
            context: "لتلخيص الرأي",
          },
        ],
      },
      // Add more advanced exercises...
      // Add 40 more exercises to reach 100 total for all levels
    ],
  },
]

