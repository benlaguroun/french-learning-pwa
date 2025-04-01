import { PageHeader } from "@/components/page-header"
import { ClientBoundary } from "@/lib/client-boundary"
import WritingClientWrapper from "./client-wrapper"

export default function WritingExercisePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PageHeader title="تمارين الكتابة" description="تحسين مهارات الكتابة باللغة الفرنسية" />

      <ClientBoundary>
        <WritingClientWrapper />
      </ClientBoundary>
    </main>
  )
}

