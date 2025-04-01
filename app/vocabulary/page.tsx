import { PageHeader } from "@/components/page-header"
import { VocabularyCategories } from "@/components/vocabulary/vocabulary-categories"

export const metadata = {
  title: "المفردات | تعلم اللغة الفرنسية",
  description: "تعلم مفردات اللغة الفرنسية الأساسية مصنفة حسب المواضيع",
}

export default function VocabularyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="المفردات" description="تعلم مفردات اللغة الفرنسية الأساسية مصنفة حسب المواضيع" />

      <VocabularyCategories />
    </div>
  )
}

