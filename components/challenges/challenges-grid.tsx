import { Calendar, Clock, Trophy, Users, type LucideIcon } from "lucide-react"
import { ChallengeCard } from "./ui/challenge-card"

interface ChallengeCategory {
  title: {
    arabic: string
    french: string
  }
  icon: LucideIcon
  iconColorClass: string
  bgColorClass: string
  challenges: {
    href: string
    title: {
      arabic: string
      french: string
    }
    description: {
      arabic: string
      french: string
    }
  }[]
}

export function ChallengesGrid() {
  const challengeCategories: ChallengeCategory[] = [
    {
      title: {
        arabic: "التحديات اليومية",
        french: "Défis Quotidiens",
      },
      icon: Clock,
      iconColorClass: "text-blue-600",
      bgColorClass: "bg-blue-50",
      challenges: [
        {
          href: "/challenges/daily-1",
          title: {
            arabic: "النطق المثالي",
            french: "Prononciation Parfaite",
          },
          description: {
            arabic: "تدرب على نطق 10 كلمات فرنسية",
            french: "Entraînez-vous à prononcer 10 mots français",
          },
        },
        {
          href: "/challenges/daily-2",
          title: {
            arabic: "تصريف الأفعال",
            french: "Conjugaison des Verbes",
          },
          description: {
            arabic: "تعلم تصريف 5 أفعال فرنسية",
            french: "Apprenez à conjuguer 5 verbes français",
          },
        },
        {
          href: "/challenges/daily-3",
          title: {
            arabic: "المفردات الجديدة",
            french: "Nouveau Vocabulaire",
          },
          description: {
            arabic: "تعلم 15 كلمة جديدة في موضوع محدد",
            french: "Apprenez 15 nouveaux mots sur un thème spécifique",
          },
        },
      ],
    },
    {
      title: {
        arabic: "التحديات الأسبوعية",
        french: "Défis Hebdomadaires",
      },
      icon: Calendar,
      iconColorClass: "text-purple-600",
      bgColorClass: "bg-purple-50",
      challenges: [
        {
          href: "/challenges/weekly-1",
          title: {
            arabic: "التعبيرات الاصطلاحية",
            french: "Expressions Idiomatiques",
          },
          description: {
            arabic: "تعلم 7 تعبيرات فرنسية شائعة",
            french: "Apprenez 7 expressions françaises courantes",
          },
        },
        {
          href: "/challenges/weekly-2",
          title: {
            arabic: "القراءة والفهم",
            french: "Lecture et Compréhension",
          },
          description: {
            arabic: "اقرأ نصًا قصيرًا وأجب عن الأسئلة",
            french: "Lisez un court texte et répondez aux questions",
          },
        },
        {
          href: "/challenges/weekly-3",
          title: {
            arabic: "الاستماع المتقدم",
            french: "Écoute Avancée",
          },
          description: {
            arabic: "استمع إلى محادثة واكتشف المعلومات الرئيسية",
            french: "Écoutez une conversation et identifiez les informations clés",
          },
        },
      ],
    },
    {
      title: {
        arabic: "تحديات المجتمع",
        french: "Défis Communautaires",
      },
      icon: Users,
      iconColorClass: "text-green-600",
      bgColorClass: "bg-green-50",
      challenges: [
        {
          href: "/challenges/community-1",
          title: {
            arabic: "نادي الأفلام الفرنسية",
            french: "Club de Cinéma Français",
          },
          description: {
            arabic: "شاهد فيلمًا فرنسيًا وناقشه مع المجتمع",
            french: "Regardez un film français et discutez-en avec la communauté",
          },
        },
        {
          href: "/challenges/community-2",
          title: {
            arabic: "مسابقة الكتابة",
            french: "Concours d'Écriture",
          },
          description: {
            arabic: "اكتب قصة قصيرة بالفرنسية وشاركها",
            french: "Écrivez une courte histoire en français et partagez-la",
          },
        },
        {
          href: "/challenges/community-3",
          title: {
            arabic: "محادثة جماعية",
            french: "Conversation de Groupe",
          },
          description: {
            arabic: "انضم إلى محادثة جماعية حول موضوع محدد",
            french: "Rejoignez une conversation de groupe sur un thème spécifique",
          },
        },
      ],
    },
    {
      title: {
        arabic: "تحديات الإنجازات",
        french: "Défis d'Accomplissement",
      },
      icon: Trophy,
      iconColorClass: "text-amber-600",
      bgColorClass: "bg-amber-50",
      challenges: [
        {
          href: "/challenges/achievement-1",
          title: {
            arabic: "إتقان المفردات",
            french: "Maîtrise du Vocabulaire",
          },
          description: {
            arabic: "تعلم 100 كلمة في فئة معينة",
            french: "Apprenez 100 mots dans une catégorie spécifique",
          },
        },
        {
          href: "/challenges/achievement-2",
          title: {
            arabic: "سلسلة التعلم",
            french: "Série d'Apprentissage",
          },
          description: {
            arabic: "أكمل 30 يومًا متتاليًا من التعلم",
            french: "Complétez 30 jours consécutifs d'apprentissage",
          },
        },
        {
          href: "/challenges/achievement-3",
          title: {
            arabic: "إتقان القواعد",
            french: "Maîtrise de la Grammaire",
          },
          description: {
            arabic: "أكمل جميع دروس القواعد بدقة 90٪",
            french: "Complétez toutes les leçons de grammaire avec 90% de précision",
          },
        },
      ],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {challengeCategories.map((category, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className={`${category.bgColorClass} p-4 border-b border-gray-200`}>
            <div className="flex items-center justify-between">
              <category.icon className={`h-6 w-6 ${category.iconColorClass}`} />
              <h2 className="text-xl font-semibold text-gray-800">
                <span className="block text-right" lang="ar" dir="rtl">
                  {category.title.arabic}
                </span>
                <span className="block">{category.title.french}</span>
              </h2>
            </div>
          </div>
          <div className="p-4">
            <ul className="space-y-4">
              {category.challenges.map((challenge, idx) => (
                <li key={idx}>
                  <ChallengeCard
                    href={challenge.href}
                    icon={category.icon}
                    iconColorClass={category.iconColorClass}
                    bgColorClass={category.bgColorClass}
                    arabicTitle={challenge.title.arabic}
                    frenchTitle={challenge.title.french}
                    arabicDescription={challenge.description.arabic}
                    frenchDescription={challenge.description.french}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

