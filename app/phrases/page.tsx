import { PageHeader } from "@/components/page-header"
import { PhrasesList } from "@/components/phrases/phrases-list"
import { PhrasesFilter } from "@/components/phrases/phrases-filter"

export const metadata = {
  title: "العبارات الشائعة | تعلم اللغة الفرنسية",
  description: "تعلم العبارات والجمل الشائعة في اللغة الفرنسية",
}

export default function PhrasesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="العبارات الشائعة" description="تعلم العبارات والجمل الشائعة في اللغة الفرنسية" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <aside className="md:col-span-1">
          <PhrasesFilter />
        </aside>
        <main className="md:col-span-3">
          <PhrasesList />
        </main>
      </div>
    </div>
  )
}

