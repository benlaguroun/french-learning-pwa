"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real app, you would call your API here
      // const response = await fetch('/api/reset-password', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });

      // if (!response.ok) throw new Error('Failed to send reset email');

      setIsSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "حدث خطأ ما")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="rounded-lg border p-6 shadow-sm">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-green-600">تم إرسال البريد الإلكتروني!</h2>
          <p className="mt-2">لقد أرسلنا بريدًا إلكترونيًا إلى {email} مع تعليمات لإعادة تعيين كلمة المرور.</p>
          <Button className="mt-4 w-full" onClick={() => router.push("/login")}>
            العودة إلى تسجيل الدخول
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border p-6 shadow-sm">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">البريد الإلكتروني</Label>
          <Input
            id="email"
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>

        {error && <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">{error}</div>}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "جاري الإرسال..." : "إرسال رابط إعادة التعيين"}
        </Button>

        <div className="text-center text-sm">
          <Link href="/login" className="text-blue-600 hover:underline">
            العودة إلى تسجيل الدخول
          </Link>
        </div>
      </div>
    </form>
  )
}

