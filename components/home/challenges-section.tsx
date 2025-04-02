import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, Trophy } from "lucide-react";

export function ChallengesSection() {
  const challenges = [
    {
      id: "daily-1",
      title: {
        ar: "النطق المثالي",
        fr: "Prononciation Parfaite",
      },
      description: {
        ar: "تدرب على نطق الكلمات الفرنسية بشكل صحيح",
        fr: "Entraînez-vous à prononcer correctement les mots français",
      },
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      type: {
        ar: "يومي",
        fr: "Quotidien",
      },
      difficulty: "1",
      timeEstimate: {
        ar: "5 دقائق",
        fr: "5 minutes",
      },
    },
    {
      id: "daily-2",
      title: {
        ar: "تصريف الأفعال",
        fr: "Conjugaison des Verbes",
      },
      description: {
        ar: "تعلم كيفية تصريف الأفعال الفرنسية في أزمنة مختلفة",
        fr: "Apprenez à conjuguer les verbes français à différents temps",
      },
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      type: {
        ar: "يومي",
        fr: "Quotidien",
      },
      difficulty: "2",
      timeEstimate: {
        ar: "10 دقائق",
        fr: "10 minutes",
      },
    },
    {
      id: "daily-3",
      title: {
        ar: "مفردات المطعم",
        fr: "Vocabulaire du Restaurant",
      },
      description: {
        ar: "تعلم المفردات الأساسية للتحدث في المطعم",
        fr: "Apprenez le vocabulaire essentiel pour parler au restaurant",
      },
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      type: {
        ar: "يومي",
        fr: "Quotidien",
      },
      difficulty: "1",
      timeEstimate: {
        ar: "7 دقائق",
        fr: "7 minutes",
      },
    },
    {
      id: "weekly-1",
      title: {
        ar: "التعبيرات الاصطلاحية",
        fr: "Expressions Idiomatiques",
      },
      description: {
        ar: "اكتشف التعبيرات الفرنسية الشائعة ومعانيها",
        fr: "Découvrez les expressions françaises courantes et leurs significations",
      },
      icon: <CalendarDays className="h-6 w-6 text-purple-500" />,
      type: {
        ar: "أسبوعي",
        fr: "Hebdomadaire",
      },
      difficulty: "3",
      timeEstimate: {
        ar: "15 دقيقة",
        fr: "15 minutes",
      },
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="block" dir="rtl">
                التحديات اليومية والأسبوعية
              </span>
              <span className="block">Défis Quotidiens et Hebdomadaires</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              <span className="block" dir="rtl">
                حسّن مهاراتك في اللغة الفرنسية من خلال تحديات منتظمة مصممة
                لتعزيز تعلمك
              </span>
              <span className="block">
                Améliorez vos compétences en français grâce à des défis
                réguliers conçus pour renforcer votre apprentissage
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex justify-between items-start">
                  {challenge.icon}
                  <Badge
                    variant={
                      challenge.type.fr === "Quotidien"
                        ? "default"
                        : "secondary"
                    }
                  >
                    <span dir="rtl">{challenge.type.ar}</span> |{" "}
                    {challenge.type.fr}
                  </Badge>
                </div>
                <CardTitle className="mt-4">
                  <span className="block" dir="rtl">
                    {challenge.title.ar}
                  </span>
                  <span className="block">{challenge.title.fr}</span>
                </CardTitle>
                <CardDescription>
                  <span className="block" dir="rtl">
                    {challenge.description.ar}
                  </span>
                  <span className="block">{challenge.description.fr}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Trophy className="mr-1 h-4 w-4" />
                    <span>
                      <span dir="rtl">صعوبة: {challenge.difficulty}/5</span> |
                      <span> Difficulté: {challenge.difficulty}/5</span>
                    </span>
                  </div>
                  <div>
                    <span dir="rtl">{challenge.timeEstimate.ar}</span> |{" "}
                    {challenge.timeEstimate.fr}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/challenges/${challenge.id}`}>
                    <span dir="rtl">ابدأ التحدي</span> | Commencer le défi
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button asChild size="lg" variant="outline">
            <Link href="/challenges">
              <span dir="rtl">عرض جميع التحديات</span> | Voir tous les défis
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
