import { PageHeader } from "@/components/page-header"
import { SafeClientComponent } from "@/lib/client-utils"
import SignupForm from "./signup-form"

export default function SignupPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PageHeader title="إنشاء حساب جديد" description="انضم إلينا لتعلم اللغة الفرنسية بطريقة ممتعة وفعالة" />

      <div className="max-w-md mx-auto mt-8">
        <SafeClientComponent fallback={<div className="p-8 text-center">جاري التحميل...</div>}>
          <SignupForm />
        </SafeClientComponent>
      </div>
    </main>
  )
}

