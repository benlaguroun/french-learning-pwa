import { ExercisesGrid } from "@/components/exercises/exercises-grid"

export default function ExercisesPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6 text-right">تمارين اللغة الفرنسية</h1>
      <p className="text-muted-foreground mb-8 text-right">
        اختر من مجموعة متنوعة من التمارين لتحسين مهاراتك في اللغة الفرنسية
      </p>
      <ExercisesGrid />
    </div>
  )
}

