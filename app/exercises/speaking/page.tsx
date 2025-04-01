import type { Metadata } from "next"
import SpeakingExerciseContent from "./speaking-exercise-content"

export const metadata: Metadata = {
  title: "تمارين النطق | تعلم الفرنسية",
  description: "تمارين تفاعلية لتحسين نطق اللغة الفرنسية",
}

export default function SpeakingExercisePage() {
  return <SpeakingExerciseContent />
}

