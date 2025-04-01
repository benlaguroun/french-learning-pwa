import { PageHeader } from "@/components/page-header"
import { ClientBoundary } from "@/lib/client-boundary"
import ReadingClientWrapper from "./client-wrapper"

export default function ReadingExercisePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PageHeader title="تمارين القراءة" description="تحسين مهارات القراءة والفهم باللغة الفرنسية" />

      <ClientBoundary>
        <ReadingClientWrapper />
      </ClientBoundary>
    </main>
  )
}

