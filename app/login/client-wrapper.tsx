"use client"

import { ClientOnly } from "@/lib/client-utils"
import LoginForm from "./login-form"

export default function LoginClientWrapper() {
  return (
    <ClientOnly>
      <LoginForm />
    </ClientOnly>
  )
}

