"use client"

import { ChallengeHeader } from "@/components/challenges/layout/challenge-header"
import { VocabularyChallenge } from "@/components/challenges/daily/vocabulary-challenge"

// Vocabulary data with Arabic translations
const vocabularyData = [
  {
    french: "le restaurant",
    arabic: "المطعم",
    example: "Nous allons dîner au restaurant ce soir.",
    arabicExample: "سنتناول العشاء في المطعم هذا المساء.",
    category: "Lieux / الأماكن",
  },
  {
    french: "le café",
    arabic: "المقهى",
    example: "J'aime prendre un café au café du coin.",
    arabicExample: "أحب تناول القهوة في المقهى المجاور.",
    category: "Lieux / الأماكن",
  },
  {
    french: "la boulangerie",
    arabic: "المخبز",
    example: "La boulangerie vend du pain frais tous les matins.",
    arabicExample: "يبيع المخبز الخبز الطازج كل صباح.",
    category: "Lieux / الأماكن",
  },
  {
    french: "commander",
    arabic: "يطلب",
    example: "Je voudrais commander un plat végétarien.",
    arabicExample: "أود أن أطلب طبقًا نباتيًا.",
    category: "Verbes / الأفعال",
  },
  {
    french: "goûter",
    arabic: "يتذوق",
    example: "Voulez-vous goûter cette soupe?",
    arabicExample: "هل تريد تذوق هذا الحساء؟",
    category: "Verbes / الأفعال",
  },
  {
    french: "l'addition",
    arabic: "الفاتورة",
    example: "Pourrions-nous avoir l'addition, s'il vous plaît?",
    arabicExample: "هل يمكننا الحصول على الفاتورة من فضلك؟",
    category: "Expressions / التعبيرات",
  },
  {
    french: "le menu",
    arabic: "قائمة الطعام",
    example: "Le serveur nous a apporté les menus.",
    arabicExample: "أحضر لنا النادل قوائم الطعام.",
    category: "Nourriture / الطعام",
  },
  {
    french: "l'entrée",
    arabic: "المقبلات",
    example: "Comme entrée, je prendrai une salade.",
    arabicExample: "كمقبلات، سأتناول السلطة.",
    category: "Nourriture / الطعام",
  },
  {
    french: "le plat principal",
    arabic: "الطبق الرئيسي",
    example: "Le plat principal était délicieux.",
    arabicExample: "كان الطبق الرئيسي لذيذًا.",
    category: "Nourriture / الطعام",
  },
  {
    french: "le dessert",
    arabic: "الحلوى",
    example: "Pour le dessert, je voudrais une crème brûlée.",
    arabicExample: "للحلوى، أود كريم بروليه.",
    category: "Nourriture / الطعام",
  },
  {
    french: "la boisson",
    arabic: "المشروب",
    example: "Quelle boisson désirez-vous avec votre repas?",
    arabicExample: "أي مشروب ترغب مع وجبتك؟",
    category: "Nourriture / الطعام",
  },
  {
    french: "délicieux",
    arabic: "لذيذ",
    example: "Ce gâteau est vraiment délicieux!",
    arabicExample: "هذه الكعكة لذيذة حقًا!",
    category: "Adjectifs / الصفات",
  },
  {
    french: "épicé",
    arabic: "حار",
    example: "Je préfère les plats épicés.",
    arabicExample: "أفضل الأطباق الحارة.",
    category: "Adjectifs / الصفات",
  },
  {
    french: "sucré",
    arabic: "حلو",
    example: "J'aime les desserts sucrés.",
    arabicExample: "أحب الحلويات الحلوة.",
    category: "Adjectifs / الصفات",
  },
  {
    french: "salé",
    arabic: "مالح",
    example: "Cette soupe est trop salée pour moi.",
    arabicExample: "هذا الحساء مالح جدًا بالنسبة لي.",
    category: "Adjectifs / الصفات",
  },
]

export default function DailyChallenge3() {
  return (
    <div className="container mx-auto py-8 px-4">
      <ChallengeHeader
        arabicTitle="المفردات الجديدة: المطعم"
        frenchTitle="Nouveau Vocabulaire: Au Restaurant"
        arabicDescription="تعلم 15 كلمة ومصطلحًا فرنسيًا مفيدًا عند زيارة المطعم. استمع إلى النطق وتدرب على استخدامها في جمل."
        frenchDescription="Apprenez 15 mots et expressions français utiles lors d'une visite au restaurant. Écoutez la prononciation et pratiquez leur utilisation dans des phrases."
      />

      <VocabularyChallenge vocabularyData={vocabularyData} />
    </div>
  )
}

