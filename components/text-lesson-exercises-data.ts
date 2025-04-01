import type { QuizQuestion, CompletionQuestion, AudioQuestion } from "@/lib/types"

// Text lesson 1: Introduction and Greetings
export const introductionExercises = {
  lesson1: {
    title: "التعارف",
    description: "تمارين على التعارف والتحية",
    quiz: [
      {
        id: "intro_quiz_1",
        question: "Comment s'appelle la fille dans le dialogue ? (ما اسم الفتاة في الحوار؟)",
        options: ["Marie", "Sophie", "Anne", "Fatima"],
        correctAnswer: "Marie",
        points: 10,
      },
      {
        id: "intro_quiz_2",
        question: "D'où vient Ahmed ? (من أين أحمد؟)",
        options: ["France", "Maroc", "Algérie", "Tunisie"],
        correctAnswer: "Maroc",
        explanation: "في الحوار، يقول أحمد: 'Je suis du Maroc' (أنا من المغرب)",
        points: 10,
      },
      {
        id: "intro_quiz_3",
        question: "Où habite Marie ? (أين تسكن ماري؟)",
        options: ["Lyon", "Marseille", "Paris", "Bordeaux"],
        correctAnswer: "Paris",
        explanation: "في الحوار، تقول ماري: 'Je suis française, de Paris' (أنا فرنسية، من باريس)",
        points: 10,
      },
      {
        id: "intro_quiz_4",
        question: "Depuis combien de temps Ahmed étudie le français ? (منذ متى يدرس أحمد اللغة الفرنسية؟)",
        options: ["Un an", "Deux ans", "Trois ans", "Six mois"],
        correctAnswer: "Deux ans",
        explanation: "في الحوار، يقول أحمد: 'J'étudie le français depuis deux ans' (أدرس الفرنسية منذ سنتين)",
        points: 15,
      },
      {
        id: "intro_quiz_5",
        question: "Pourquoi Ahmed est à Paris ? (لماذا أحمد في باريس؟)",
        options: ["Pour travailler", "Pour étudier", "Pour les vacances", "Pour visiter sa famille"],
        correctAnswer: "Pour les vacances",
        explanation: "في الحوار، يقول أحمد: 'je suis à Paris pour les vacances' (أنا في باريس للعطلة)",
        points: 15,
      },
      {
        id: "intro_quiz_6",
        question: "Qu'est-ce qu'Ahmed pense de Paris ? (ماذا يظن أحمد عن باريس؟)",
        options: ["Il n'aime pas Paris", "Il adore Paris", "Il préfère Rabat", "Il trouve Paris trop cher"],
        correctAnswer: "Il adore Paris",
        explanation:
          "في الحوار، يقول أحمد: 'j'adore Paris ! C'est une très belle ville' (أحب باريس! إنها مدينة جميلة جدًا)",
        points: 10,
      },
    ] as QuizQuestion[],
    completion: [
      {
        id: "intro_comp_1",
        text: "Je {{1}} Ahmed. (اسمي أحمد)",
        blanks: [
          {
            id: "blank_1",
            correctAnswer: "m'appelle",
            points: 15,
          },
        ],
      },
      {
        id: "intro_comp_2",
        text: "Marie habite dans le {{1}}. (تسكن ماري في وسط المدينة)",
        blanks: [
          {
            id: "blank_1",
            correctAnswer: "centre-ville",
            points: 15,
          },
        ],
      },
      {
        id: "intro_comp_3",
        text: "{{1}} parles bien français ! (أنت تتحدث الفرنسية جيدًا!)",
        blanks: [
          {
            id: "blank_1",
            correctAnswer: "Tu",
            points: 10,
          },
        ],
      },
      {
        id: "intro_comp_4",
        text: "{{1}} à Rabat, mais {{2}} à Paris pour les vacances. (أسكن في الرباط، لكنني في باريس للعطلة)",
        blanks: [
          {
            id: "blank_1",
            correctAnswer: "J'habite",
            points: 15,
          },
          {
            id: "blank_2",
            correctAnswer: "je suis",
            points: 15,
          },
        ],
      },
    ] as CompletionQuestion[],
    audio: [
      {
        id: "intro_audio_1",
        audioUrl: "/audio/vocabulary/bonjour.mp3",
        question: "ما معنى الكلمة التي استمعت إليها؟",
        options: ["مساء الخير", "مرحبًا", "إلى اللقاء", "شكرًا"],
        correctAnswer: "مرحبًا",
        points: 10,
      },
      {
        id: "intro_audio_2",
        audioUrl: "/audio/vocabulary/enchante.mp3",
        question: "ما معنى الكلمة التي استمعت إليها؟",
        options: ["اسمي", "من أين أنت؟", "تشرفت بمعرفتك", "كيف حالك؟"],
        correctAnswer: "تشرفت بمعرفتك",
        points: 10,
      },
      {
        id: "intro_audio_3",
        audioUrl: "/audio/vocabulary/comment-ca-va.mp3",
        question: "ما معنى العبارة التي استمعت إليها؟",
        options: ["ما اسمك؟", "من أين أنت؟", "كيف حالك؟", "أين تسكن؟"],
        correctAnswer: "كيف حالك؟",
        points: 10,
      },
    ] as AudioQuestion[],
  },
}

// Export more text lessons exercises here
// export const otherTextLessonsExercises = { ... }

