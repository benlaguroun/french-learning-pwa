import { ClientOnly } from "@/lib/client-utils"
import ResetPasswordForm from "./reset-password-form"

export default function ResetPasswordPage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Reset Password</h1>
      <ClientOnly>
        <ResetPasswordForm />
      </ClientOnly>
    </main>
  )
}

