import type { QuizQuestion, CompletionQuestion } from "@/lib/types"

// Grammar lesson 1: Personal pronouns
export const personalPronounsExercises = {
  lesson1: {
    title: "الضمائر الشخصية",
    description: "تمارين على استخدام الضمائر الشخصية في اللغة الفرنسية",
    quiz: [
      {
        id: "pp_quiz_1",
        question: "_____ suis médecin. (أنا طبيب)",
        options: ["Je", "Tu", "Il", "Elle"],
        correctAnswer: "Je",
        explanation: "نستخدم 'Je' للإشارة إلى المتكلم المفرد 'أنا'.",
        points: 10,
      },
      {
        id: "pp_quiz_2",
        question: "_____ êtes français. (أنتم فرنسيون)",
        options: ["Nous", "Vous", "Ils", "Elles"],
        correctAnswer: "Vous",
        explanation: "نستخدم 'Vous' للإشارة إلى المخاطب الجمع 'أنتم' أو المخاطب المفرد في صيغة الاحترام.",
        points: 10,
      },
      {
        id: "pp_quiz_3",
        question: "_____ parlent arabe. (هم يتحدثون العربية)",
        options: ["Nous", "Vous", "Ils", "Elles"],
        correctAnswer: "Ils",
        explanation: "نستخدم 'Ils' للإشارة إلى الغائب الجمع المذكر 'هم'.",
        points: 10,
      },
      {
        id: "pp_quiz_4",
        question: "_____ a un livre. (هي لديها كتاب)",
        options: ["Il", "Je", "Tu", "Elle"],
        correctAnswer: "Elle",
        explanation: "نستخدم 'Elle' للإشارة إلى الغائب المفرد المؤنث 'هي'.",
        points: 10,
      },
      {
        id: "pp_quiz_5",
        question: "_____ avons une voiture. (نحن لدينا سيارة)",
        options: ["Je", "Nous", "Vous", "Ils"],
        correctAnswer: "Nous",
        explanation: "نستخدم 'Nous' للإشارة إلى المتكلم الجمع 'نحن'.",
        points: 10,
      },
      {
        id: "pp_quiz_6",
        question: "ما هو الضمير المستخدم للتحدث بشكل رسمي مع شخص واحد؟",
        options: ["Tu", "Vous", "Il", "Je"],
        correctAnswer: "Vous",
        explanation:
          "في اللغة الفرنسية، نستخدم 'Vous' للتحدث بشكل رسمي مع شخص واحد، وأيضًا للتحدث مع مجموعة من الأشخاص.",
        points: 15,
      },
      {
        id: "pp_quiz_7",
        question: "ما هو الضمير المناسب للمخاطب المفرد غير الرسمي؟",
        options: ["Je", "Tu", "Il", "Nous"],
        correctAnswer: "Tu",
        explanation: "نستخدم 'Tu' للتحدث بشكل غير رسمي مع شخص واحد.",
        points: 15,
      },
      {
        id: "pp_quiz_8",
        question: "أي من الضمائر التالية يستخدم للإشارة إلى مجموعة من الإناث فقط؟",
        options: ["Ils", "Nous", "Vous", "Elles"],
        correctAnswer: "Elles",
        explanation: "نستخدم 'Elles' فقط عندما تكون المجموعة بأكملها من الإناث.",
        points: 20,
      },
    ] as QuizQuestion[],
    completion: [
      {
        id: "pp_comp_1",
        text: "{{1}} mange une pomme. (أنت تأكل تفاحة)",
        blanks: [
          {
            id: "blank_1",
            correctAnswer: "Tu",
            points: 15,
          },
        ],
      },
      {
        id: "pp_comp_2",
        text: "{{1}} habitons à Paris. (نحن نسكن في باريس)",
        blanks: [
          {
            id: "blank_1",
            correctAnswer: "Nous",
            points: 15,
          },
        ],
      },
      {
        id: "pp_comp_3",
        text: "{{1}} travaille dans un hôpital. (هي تعمل في مستشفى)",
        blanks: [
          {
            id: "blank_1",
            correctAnswer: "Elle",
            points: 15,
          },
        ],
      },
      {
        id: "pp_comp_4",
        text: "{{1}} parlons français. (نحن نتحدث الفرنسية)",
        blanks: [
          {
            id: "blank_1",
            correctAnswer: "Nous",
            points: 15,
          },
        ],
      },
      {
        id: "pp_comp_5",
        text: "{{1}} écoutez de la musique. (أنتم تستمعون إلى الموسيقى)",
        blanks: [
          {
            id: "blank_1",
            correctAnswer: "Vous",
            points: 15,
          },
        ],
      },
    ] as CompletionQuestion[],
  },

  // Grammar lesson 2: Masculine and Feminine
  lesson2: {
    title: "المذكر والمؤنث",
    description: "تمارين على استخدام المذكر والمؤنث في اللغة الفرنسية",
    quiz: [
      {
        id: "mf_quiz_1",
        question: "ما هي الصيغة المؤنثة لكلمة 'un étudiant'؟",
        options: ["un étudiante", "une étudiante", "une étudiant", "un étudiant"],
        correctAnswer: "une étudiante",
        explanation: "نضيف حرف 'e' في نهاية الكلمة للتحويل إلى المؤنث، كما نغير أداة التعريف من 'un' إلى 'une'.",
        points: 10,
      },
      {
        id: "mf_quiz_2",
        question: "ما هي أداة التعريف المناسبة لكلمة 'table'؟",
        options: ["le", "la", "un", "les"],
        correctAnswer: "la",
        explanation: "كلمة 'table' مؤنثة في اللغة الفرنسية، لذلك نستخدم 'la' كأداة تعريف.",
        points: 10,
      },
      {
        id: "mf_quiz_3",
        question: "ما هي الصيغة المؤنثة لكلمة 'un acteur'؟",
        options: ["une acteure", "une acteuse", "une actrice", "une acteur"],
        correctAnswer: "une actrice",
        explanation: "نحول النهاية 'teur' إلى 'trice' عند التحويل إلى المؤنث.",
        points: 15,
      },
      {
        id: "mf_quiz_4",
        question: "ما هي الصيغة المؤنثة لكلمة 'un ami'؟",
        options: ["un amie", "une ami", "une amie", "un amis"],
        correctAnswer: "une amie",
        explanation: "نضيف حرف 'e' في نهاية الكلمة للتحويل إلى المؤنث، كما نغير أداة التعريف من 'un' إلى 'une'.",
        points: 10,
      },
      {
        id: "mf_quiz_5",
        question: "ما هي الصيغة المؤنثة لكلمة 'un vendeur'؟",
        options: ["une vendeure", "une vendeuse", "une vendrice", "une vendeur"],
        correctAnswer: "une vendeuse",
        explanation: "نحول النهاية 'eur' إلى 'euse' عند التحويل إلى المؤنث.",
        points: 15,
      },
      {
        id: "mf_quiz_6",
        question: "ما هي أداة التعريف المناسبة لكلمة 'livre'؟",
        options: ["le", "la", "les", "un"],
        correctAnswer: "le",
        explanation: "كلمة 'livre' مذكرة في اللغة الفرنسية، لذلك نستخدم 'le' كأداة تعريف.",
        points: 10,
      },
      {
        id: "mf_quiz_7",
        question: "ما هي الصيغة المؤنثة لكلمة 'un professeur'؟",
        options: ["une professeure", "une professoresse", "une professeur", "une professrice"],
        correctAnswer: "une professeure",
        explanation: "في الفرنسية الحديثة، نضيف حرف 'e' في نهاية كلمة 'professeur' للتحويل إلى المؤنث.",
        points: 15,
      },
      {
        id: "mf_quiz_8",
        question: "ما هي الصيغة المؤنثة لكلمة 'un directeur'؟",
        options: ["une directeuse", "une directrice", "une directeure", "une directeur"],
        correctAnswer: "une directrice",
        explanation: "نحول النهاية 'teur' إلى 'trice' عند التحويل إلى المؤنث.",
        points: 15,
      },
    ] as QuizQuestion[],
    completion: [
      {
        id: "mf_comp_1",
        text: "{{1}} maison est grande. (المنزل كبير)",
        blanks: [
          {
            id: "blank_1",
            correctAnswer: "La",
            points: 10,
          },
        ],
      },
      {
        id: "mf_comp_2",
        text: "{{1}} est {{2}}. (الأستاذة جديدة)",
        blanks: [
          {
            id: "blank_1",
            correctAnswer: "La professeure",
            points: 15,
          },
          {
            id: "blank_2",
            correctAnswer: "nouvelle",
            points: 15,
          },
        ],
      },
      {
        id: "mf_comp_3",
        text: "{{1}} est {{2}}. (البائع سعيد)",
        blanks: [
          {
            id: "blank_1",
            correctAnswer: "Le vendeur",
            points: 15,
          },
          {
            id: "blank_2",
            correctAnswer: "content",
            points: 15,
          },
        ],
      },
      {
        id: "mf_comp_4",
        text: "{{1}} mange {{2}} pomme. (الفتاة تأكل تفاحة)",
        blanks: [
          {
            id: "blank_1",
            correctAnswer: "La fille",
            points: 15,
          },
          {
            id: "blank_2",
            correctAnswer: "une",
            points: 10,
          },
        ],
      },
      {
        id: "mf_comp_5",
        text: "{{1}} étudiants et {{2}} étudiantes sont à l'école. (الطلاب والطالبات في المدرسة)",
        blanks: [
          {
            id: "blank_1",
            correctAnswer: "Les",
            points: 10,
          },
          {
            id: "blank_2",
            correctAnswer: "les",
            points: 10,
          },
        ],
      },
    ] as CompletionQuestion[],
  },
}

// Export more grammar lessons exercises here
// export const otherGrammarLessonsExercises = { ... }

