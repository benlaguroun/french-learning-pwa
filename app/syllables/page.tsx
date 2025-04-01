import { PageHeader } from "@/components/page-header"
import { SyllablesDisplay } from "@/components/syllables/syllables-display"

export const metadata = {
  title: "المقاطع الصوتية | تعلم اللغة الفرنسية",
  description: "تعلم المقاطع الصوتية الفرنسية وكيفية نطقها",
}

export default function SyllablesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="المقاطع الصوتية" description="تعلم المقاطع الصوتية الفرنسية وكيفية نطقها" />

      <SyllablesDisplay />
    </div>
  )
}

