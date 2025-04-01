"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Sparkles, BookOpen, Languages, Award } from "lucide-react"

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Sample greetings in different languages
  const words = ["مرحباً", "Bonjour", "Hello", "Salut", "Bonsoir"]

  // Rotate through greetings
  useEffect(() => {
    setMounted(true)

    const token = localStorage.getItem("userToken")
    setIsLoggedIn(!!token)

    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return <div className="h-[600px]"></div>
  }

  return (
    <div className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-1/4 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge variant="outline" className="mb-4 inline-flex items-center">
                <Sparkles className="ml-1 h-3 w-3" />
                <span>الطريقة الأفضل لتعلم الفرنسية</span>
              </Badge>

              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                <span className="block text-primary mb-2 animate-fade-in">{words[currentWordIndex]}!</span>
                تعلّم اللغة الفرنسية <br />
                <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  بطريقة تفاعلية وممتعة
                </span>
              </h1>

              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                اكتشف الطريقة الأكثر فعالية لتعلم اللغة الفرنسية من الصفر إلى الاحتراف من خلال منصتنا التفاعلية المصممة
                خصيصًا لتناسب أسلوب تعلمك.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              {isLoggedIn ? (
                <>
                  <Link href="/lessons">
                    <Button size="lg" className="gap-1 group">
                      استكمل تعلمك
                      <ArrowRight className="h-4 w-4 mr-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button variant="outline" size="lg">
                      عرض تقدمك
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/register">
                    <Button size="lg" className="gap-1 group">
                      ابدأ الآن مجاناً
                      <ArrowRight className="h-4 w-4 mr-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" size="lg">
                      تعرف علينا
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex items-start space-x-2 space-x-reverse">
                <div className="mt-1 rounded-full bg-primary/10 p-1">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">دروس تفاعلية</h3>
                  <p className="text-sm text-muted-foreground">محتوى تعليمي مصمم بعناية</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 space-x-reverse">
                <div className="mt-1 rounded-full bg-blue-500/10 p-1">
                  <Languages className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-medium">تمارين متنوعة</h3>
                  <p className="text-sm text-muted-foreground">تطبيق عملي للمهارات اللغوية</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 space-x-reverse">
                <div className="mt-1 rounded-full bg-green-500/10 p-1">
                  <Award className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-medium">شهادات معتمدة</h3>
                  <p className="text-sm text-muted-foreground">توثيق لمستواك اللغوي</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse pt-6">
              <div className="flex -space-x-4 space-x-reverse rtl:space-x-reverse">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <img
                      alt={`User ${i}`}
                      className="h-full w-full object-cover"
                      height={40}
                      src={`/placeholder.svg?height=40&width=40&text=${i}`}
                      width={40}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="text-sm font-medium">5,000+ متعلم</div>
                <div className="text-xs text-muted-foreground">انضم إلى مجتمعنا</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/30 blur-xl animate-pulse"></div>
              <div
                className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-blue-500/30 blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* France map shape with cards */}
              <div className="relative h-[400px] w-[400px] bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-md p-2 border shadow-lg">
                {/* French words floating around */}
                <div className="absolute top-10 right-8 text-primary font-bold p-2 rounded-md bg-white/80 shadow-md transform hover:-translate-y-1 transition-transform">
                  Bonjour
                </div>

                <div className="absolute top-24 left-12 text-blue-600 font-bold p-2 rounded-md bg-white/80 shadow-md transform hover:-translate-y-1 transition-transform">
                  Merci
                </div>

                <div className="absolute top-40 right-12 text-indigo-600 font-bold p-2 rounded-md bg-white/80 shadow-md transform hover:-translate-y-1 transition-transform">
                  Au revoir
                </div>

                <div className="absolute bottom-20 left-16 text-red-600 font-bold p-2 rounded-md bg-white/80 shadow-md transform hover:-translate-y-1 transition-transform">
                  Comment ça va?
                </div>

                <div className="absolute bottom-10 right-20 text-green-600 font-bold p-2 rounded-md bg-white/80 shadow-md transform hover:-translate-y-1 transition-transform">
                  Je m'appelle
                </div>

                {/* France outline shape */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48 opacity-20">
                    <svg viewBox="0 0 512 512" fill="currentColor" className="text-primary">
                      <path
                        d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M418.275,146.146
                        l-33.587,27.171c-19.303-9.089-40.219-14.103-61.188-14.817v-35.744C357.666,123.992,390.664,130.578,418.275,146.146z
                          M234.024,122.725v35.788c-20.968,0.717-41.884,5.735-61.188,14.828l-33.587-27.171
                        C166.66,130.602,199.658,124.014,234.024,122.725z M123.506,159.875l27.171,33.587c-14.371,16.298-24.724,35.84-30.106,57.02
                        H83.826C89.95,215.41,103.586,184.387,123.506,159.875z M83.815,316.518h36.768c5.382,21.183,15.736,40.725,30.11,57.023
                        l-27.171,33.588C103.601,382.618,89.962,351.591,83.815,316.518z M139.249,420.852l33.588-27.171
                        c19.304,9.093,40.22,14.11,61.188,14.828v35.766C199.691,443.01,166.705,436.425,139.249,420.852z M323.5,444.258v-35.75
                        c20.968-0.717,41.885-5.735,61.188-14.828l33.587,27.171C391.032,436.407,358.006,442.985,323.5,444.258z M407.127,407.128
                        l-27.171-33.587c14.366-16.295,24.717-35.834,30.099-57.013h36.744C440.674,351.596,427.036,382.619,407.127,407.128z
                          M446.8,250.518H410.04c-5.382-21.173-15.723-40.706-30.084-56.996l27.171-33.588
                        C427.036,184.446,440.674,215.465,446.8,250.518z M323.5,67.742C358.006,69.015,391.032,75.593,418.275,91.149l-33.587,27.171
                        c-19.303-9.089-40.22-14.103-61.188-14.817V67.742z M234.024,67.742
                        C199.691,69.01,166.705,75.592,139.249,91.163l33.588,27.171c19.304,9.093,40.22,14.11,61.188,14.817V67.742z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

