export const readingExercisesData = [
  {
    id: "beginner",
    title: "المستوى المبتدئ",
    description: "تمارين قراءة أساسية للمبتدئين",
    exercises: [
      {
        id: "basic-1",
        title: "التحيات",
        text: `Bonjour! Je m'appelle Marie. Comment allez-vous?
        Je suis étudiante à Paris. J'aime lire et voyager.
        Et vous?`,
        translation: `مرحباً! اسمي ماري. كيف حالكم؟
        أنا طالبة في باريس. أحب القراءة والسفر.
        وأنتم؟`,
        category: "التحيات",
        vocabulary: [
          { word: "Bonjour", meaning: "مرحباً" },
          { word: "Je m'appelle", meaning: "اسمي" },
          { word: "Comment allez-vous", meaning: "كيف حالكم" },
          { word: "étudiante", meaning: "طالبة" },
          { word: "J'aime", meaning: "أحب" },
          { word: "lire", meaning: "القراءة" },
          { word: "voyager", meaning: "السفر" },
        ],
        questions: [
          {
            id: "q1",
            question: "ما اسم المتحدثة؟",
            options: ["Marie", "Sophie", "Julie", "Claire"],
            correctAnswer: "Marie",
          },
          {
            id: "q2",
            question: "أين تسكن المتحدثة؟",
            options: ["Lyon", "Marseille", "Paris", "Nice"],
            correctAnswer: "Paris",
          },
        ],
      },
      {
        id: "basic-2",
        title: "في المقهى",
        text: `Un café, s'il vous plaît.
        Avec du lait?
        Oui, un peu de lait.
        Voilà.
        Merci.`,
        translation: `قهوة، من فضلك.
        مع الحليب؟
        نعم، قليل من الحليب.
        تفضل.
        شكراً.`,
        category: "الحياة اليومية",
        vocabulary: [
          { word: "Un café", meaning: "قهوة" },
          { word: "s'il vous plaît", meaning: "من فضلك" },
          { word: "Avec", meaning: "مع" },
          { word: "du lait", meaning: "حليب" },
          { word: "Voilà", meaning: "تفضل" },
          { word: "Merci", meaning: "شكراً" },
        ],
        questions: [
          {
            id: "q1",
            question: "ماذا طلب الشخص؟",
            options: ["Un thé", "Un café", "Un jus", "Une bière"],
            correctAnswer: "Un café",
          },
          {
            id: "q2",
            question: "هل طلب الشخص حليبًا؟",
            options: ["نعم", "لا"],
            correctAnswer: "نعم",
          },
        ],
      },
    ],
  },
  {
    id: "intermediate",
    title: "المستوى المتوسط",
    description: "تمارين قراءة متوسطة للمتعلمين",
    exercises: [
      {
        id: "intermediate-1",
        title: "رحلة إلى باريس",
        text: `J'ai visité Paris l'été dernier. C'était incroyable! J'ai vu la Tour Eiffel, le Louvre et Notre-Dame. J'ai mangé des croissants et bu du café tous les jours. Je recommande Paris à tout le monde!`,
        translation: `زرت باريس الصيف الماضي. كان الأمر لا يصدق! رأيت برج إيفل واللوفر ونوتردام. أكلت الكرواسون وشربت القهوة كل يوم. أوصي بباريس للجميع!`,
        category: "السفر",
        vocabulary: [
          { word: "visité", meaning: "زار" },
          { word: "incroyable", meaning: "لا يصدق" },
          { word: "la Tour Eiffel", meaning: "برج إيفل" },
          { word: "le Louvre", meaning: "اللوفر" },
          { word: "Notre-Dame", meaning: "نوتردام" },
          { word: "croissants", meaning: "كرواسون" },
          { word: "recommande", meaning: "أوصي" },
        ],
        questions: [
          {
            id: "q1",
            question: "متى زار الشخص باريس؟",
            options: ["الصيف الماضي", "الشتاء الماضي", "الربيع الماضي", "الخريف الماضي"],
            correctAnswer: "الصيف الماضي",
          },
          {
            id: "q2",
            question: "ماذا أكل الشخص في باريس؟",
            options: ["بيتزا", "كرواسون", "سوشي", "برجر"],
            correctAnswer: "كرواسون",
          },
        ],
      },
    ],
  },
  {
    id: "advanced",
    title: "المستوى المتقدم",
    description: "تمارين قراءة متقدمة للمتعلمين",
    exercises: [
      {
        id: "advanced-1",
        title: "تغير المناخ",
        text: `Le changement climatique est un problème mondial qui nous concerne tous. Les conséquences sont graves: augmentation des températures, fonte des glaces, montée du niveau de la mer. Il est urgent d'agir pour réduire nos émissions de gaz à effet de serre.`,
        translation: `تغير المناخ مشكلة عالمية تهمنا جميعًا. العواقب وخيمة: ارتفاع درجات الحرارة، ذوبان الجليد، ارتفاع مستوى سطح البحر. من الضروري التحرك لخفض انبعاثات الغازات الدفيئة.`,
        category: "البيئة",
        vocabulary: [
          { word: "changement climatique", meaning: "تغير المناخ" },
          { word: "mondial", meaning: "عالمي" },
          { word: "conséquences", meaning: "عواقب" },
          { word: "augmentation", meaning: "ارتفاع" },
          { word: "fonte des glaces", meaning: "ذوبان الجليد" },
          { word: "émissions", meaning: "انبعاثات" },
          { word: "gaz à effet de serre", meaning: "غازات دفيئة" },
        ],
        questions: [
          {
            id: "q1",
            question: "ما هي إحدى عواقب تغير المناخ؟",
            options: ["انخفاض درجات الحرارة", "ارتفاع مستوى سطح البحر", "زيادة الغابات", "انخفاض الأمطار"],
            correctAnswer: "ارتفاع مستوى سطح البحر",
          },
          {
            id: "q2",
            question: "ماذا يجب أن نفعل لتقليل تغير المناخ؟",
            options: ["زيادة الانبعاثات", "خفض الانبعاثات", "تجاهل المشكلة", "زيادة استخدام الوقود الأحفوري"],
            correctAnswer: "خفض الانبعاثات",
          },
        ],
      },
    ],
  },
]

