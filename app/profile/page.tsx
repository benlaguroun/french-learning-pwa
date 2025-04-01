import { PageHeader } from "@/components/page-header"
import { ClientBoundary } from "@/lib/client-boundary"
import ProfileClientWrapper from "./client-wrapper"

export default function ProfilePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PageHeader title="الملف الشخصي" description="إدارة حسابك ومتابعة تقدمك" />

      <ClientBoundary>
        <ProfileClientWrapper />
      </ClientBoundary>
    </main>
  )
}

