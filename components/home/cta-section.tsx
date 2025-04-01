"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, LightbulbIcon } from "lucide-react"

export function CTASection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  }, [])

  if (mounted && isLoggedIn) return null
  if (!mounted) return null

  return (
    <section className="bg-gradient-to-r from-primary/20 to-primary/5 py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-block rounded-full bg-primary/10 p-3">
            <LightbulbIcon className="h-6 w-6 text-primary" />
          </div>

          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ابدأ رحلتك في تعلم اللغة الفرنسية اليوم
          </h2>

          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            سجل حسابًا مجانيًا واحصل على وصول كامل إلى جميع الدروس والتمارين والميزات
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-1">
              <Link href="/register">
                إنشاء حساب مجاني
                <ArrowRight className="h-4 w-4 mr-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/login">تسجيل الدخول</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

