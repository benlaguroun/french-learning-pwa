import { ClientBoundary } from "@/lib/client-boundary"
import ForgotPasswordForm from "./forgot-password-form"

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">استعادة كلمة المرور</h1>
          <p className="mt-2 text-gray-600">أدخل بريدك الإلكتروني وسنرسل لك رابطًا لإعادة تعيين كلمة المرور</p>
        </div>

        <ClientBoundary>
          <ForgotPasswordForm />
        </ClientBoundary>
      </div>
    </main>
  )
}

