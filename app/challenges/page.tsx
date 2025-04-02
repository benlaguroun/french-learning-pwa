import Link from "next/link"
import { ArrowRight, Calendar, Clock, Trophy, Users } from "lucide-react"

export default function ChallengesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">
          <span className="block mb-1 text-right" lang="ar" dir="rtl">
            التحديات
          </span>
          <span className="block">Défis</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          <span className="block mb-2 text-right" lang="ar" dir="rtl">
            أكمل هذه التحديات لتحسين مهاراتك في اللغة الفرنسية والحصول على نقاط ومكافآت
          </span>
          <span className="block">
            Complétez ces défis pour améliorer vos compétences en français et gagner des points et des récompenses
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Daily Challenges */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="bg-blue-50 p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <Clock className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-blue-800">
                <span className="block text-right" lang="ar" dir="rtl">
                  التحديات اليومية
                </span>
                <span className="block">Défis Quotidiens</span>
              </h2>
            </div>
          </div>
          <div className="p-4">
            <ul className="space-y-4">
              <li>
                <Link href="/challenges/daily-1" className="block p-3 rounded-md hover:bg-blue-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        <span className="block text-right" lang="ar" dir="rtl">
                          النطق المثالي
                        </span>
                        <span className="block">Prononciation Parfaite</span>
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="block text-right" lang="ar" dir="rtl">
                          تدرب على نطق 10 كلمات فرنسية
                        </span>
                        <span className="block">Entraînez-vous à prononcer 10 mots français</span>
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-blue-500" />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/challenges/daily-2" className="block p-3 rounded-md hover:bg-blue-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        <span className="block text-right" lang="ar" dir="rtl">
                          تصريف الأفعال
                        </span>
                        <span className="block">Conjugaison des Verbes</span>
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="block text-right" lang="ar" dir="rtl">
                          تعلم تصريف 5 أفعال فرنسية
                        </span>
                        <span className="block">Apprenez à conjuguer 5 verbes français</span>
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-blue-500" />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/challenges/daily-3" className="block p-3 rounded-md hover:bg-blue-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        <span className="block text-right" lang="ar" dir="rtl">
                          المفردات الجديدة
                        </span>
                        <span className="block">Nouveau Vocabulaire</span>
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="block text-right" lang="ar" dir="rtl">
                          تعلم 15 كلمة جديدة في موضوع محدد
                        </span>
                        <span className="block">Apprenez 15 nouveaux mots sur un thème spécifique</span>
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-blue-500" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Weekly Challenges */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="bg-purple-50 p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <Calendar className="h-6 w-6 text-purple-600" />
              <h2 className="text-xl font-semibold text-purple-800">
                <span className="block text-right" lang="ar" dir="rtl">
                  التحديات الأسبوعية
                </span>
                <span className="block">Défis Hebdomadaires</span>
              </h2>
            </div>
          </div>
          <div className="p-4">
            <ul className="space-y-4">
              <li>
                <Link href="/challenges/weekly-1" className="block p-3 rounded-md hover:bg-purple-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        <span className="block text-right" lang="ar" dir="rtl">
                          التعبيرات الاصطلاحية
                        </span>
                        <span className="block">Expressions Idiomatiques</span>
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="block text-right" lang="ar" dir="rtl">
                          تعلم 7 تعبيرات فرنسية شائعة
                        </span>
                        <span className="block">Apprenez 7 expressions françaises courantes</span>
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-purple-500" />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/challenges/weekly-2" className="block p-3 rounded-md hover:bg-purple-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        <span className="block text-right" lang="ar" dir="rtl">
                          القراءة والفهم
                        </span>
                        <span className="block">Lecture et Compréhension</span>
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="block text-right" lang="ar" dir="rtl">
                          اقرأ نصًا قصيرًا وأجب عن الأسئلة
                        </span>
                        <span className="block">Lisez un court texte et répondez aux questions</span>
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-purple-500" />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/challenges/weekly-3" className="block p-3 rounded-md hover:bg-purple-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        <span className="block text-right" lang="ar" dir="rtl">
                          الاستماع المتقدم
                        </span>
                        <span className="block">Écoute Avancée</span>
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="block text-right" lang="ar" dir="rtl">
                          استمع إلى محادثة واكتشف المعلومات الرئيسية
                        </span>
                        <span className="block">Écoutez une conversation et identifiez les informations clés</span>
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-purple-500" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Community Challenges */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="bg-green-50 p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <Users className="h-6 w-6 text-green-600" />
              <h2 className="text-xl font-semibold text-green-800">
                <span className="block text-right" lang="ar" dir="rtl">
                  تحديات المجتمع
                </span>
                <span className="block">Défis Communautaires</span>
              </h2>
            </div>
          </div>
          <div className="p-4">
            <ul className="space-y-4">
              <li>
                <Link href="/challenges/community-1" className="block p-3 rounded-md hover:bg-green-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        <span className="block text-right" lang="ar" dir="rtl">
                          نادي الأفلام الفرنسية
                        </span>
                        <span className="block">Club de Cinéma Français</span>
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="block text-right" lang="ar" dir="rtl">
                          شاهد فيلمًا فرنسيًا وناقشه مع المجتمع
                        </span>
                        <span className="block">Regardez un film français et discutez-en avec la communauté</span>
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-green-500" />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/challenges/community-2" className="block p-3 rounded-md hover:bg-green-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        <span className="block text-right" lang="ar" dir="rtl">
                          مسابقة الكتابة
                        </span>
                        <span className="block">Concours d'Écriture</span>
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="block text-right" lang="ar" dir="rtl">
                          اكتب قصة قصيرة بالفرنسية وشاركها
                        </span>
                        <span className="block">Écrivez une courte histoire en français et partagez-la</span>
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-green-500" />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/challenges/community-3" className="block p-3 rounded-md hover:bg-green-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        <span className="block text-right" lang="ar" dir="rtl">
                          محادثة جماعية
                        </span>
                        <span className="block">Conversation de Groupe</span>
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="block text-right" lang="ar" dir="rtl">
                          انضم إلى محادثة جماعية حول موضوع محدد
                        </span>
                        <span className="block">Rejoignez une conversation de groupe sur un thème spécifique</span>
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-green-500" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Achievement Challenges */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="bg-amber-50 p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <Trophy className="h-6 w-6 text-amber-600" />
              <h2 className="text-xl font-semibold text-amber-800">
                <span className="block text-right" lang="ar" dir="rtl">
                  تحديات الإنجازات
                </span>
                <span className="block">Défis d'Accomplissement</span>
              </h2>
            </div>
          </div>
          <div className="p-4">
            <ul className="space-y-4">
              <li>
                <Link href="/challenges/achievement-1" className="block p-3 rounded-md hover:bg-amber-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        <span className="block text-right" lang="ar" dir="rtl">
                          إتقان المفردات
                        </span>
                        <span className="block">Maîtrise du Vocabulaire</span>
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="block text-right" lang="ar" dir="rtl">
                          تعلم 100 كلمة في فئة معينة
                        </span>
                        <span className="block">Apprenez 100 mots dans une catégorie spécifique</span>
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-amber-500" />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/challenges/achievement-2" className="block p-3 rounded-md hover:bg-amber-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        <span className="block text-right" lang="ar" dir="rtl">
                          سلسلة التعلم
                        </span>
                        <span className="block">Série d'Apprentissage</span>
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="block text-right" lang="ar" dir="rtl">
                          أكمل 30 يومًا متتاليًا من التعلم
                        </span>
                        <span className="block">Complétez 30 jours consécutifs d'apprentissage</span>
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-amber-500" />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/challenges/achievement-3" className="block p-3 rounded-md hover:bg-amber-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        <span className="block text-right" lang="ar" dir="rtl">
                          إتقان القواعد
                        </span>
                        <span className="block">Maîtrise de la Grammaire</span>
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="block text-right" lang="ar" dir="rtl">
                          أكمل جميع دروس القواعد بدقة 90٪
                        </span>
                        <span className="block">Complétez toutes les leçons de grammaire avec 90% de précision</span>
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-amber-500" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

