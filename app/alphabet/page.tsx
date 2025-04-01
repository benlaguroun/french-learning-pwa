import { PageHeader } from "@/components/page-header"
import { AlphabetDisplay } from "@/components/alphabet/alphabet-display"

export const metadata = {
  title: "الأبجدية الفرنسية | تعلم اللغة الفرنسية",
  description: "تعلم الأحرف الفرنسية والنطق الصحيح لها",
}

export default function AlphabetPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="الأبجدية الفرنسية" description="تعلم الأحرف الفرنسية والنطق الصحيح لها" />

      <AlphabetDisplay />
    </div>
  )
}

