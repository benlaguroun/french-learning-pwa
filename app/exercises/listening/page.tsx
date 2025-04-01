import { PageHeader } from "@/components/page-header"
import { ClientBoundary } from "@/lib/client-boundary"
import ListeningClientWrapper from "./client-wrapper"

export default function ListeningExercisePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PageHeader title="تمارين الاستماع" description="تحسين مهارات الاستماع والفهم باللغة الفرنسية" />

      <ClientBoundary>
        <ListeningClientWrapper />
      </ClientBoundary>
    </main>
  )
}

