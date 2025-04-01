"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BookOpen, BarChart, ItalicIcon as AlphabetLatin, BookText, Gamepad2, User, Music } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function DesktopNav() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "الرئيسية",
      href: "/",
      icon: Home,
    },
    {
      name: "الحروف",
      href: "/alphabet",
      icon: AlphabetLatin,
    },
    {
      name: "المقاطع",
      href: "/syllables",
      icon: Music,
    },
    {
      name: "الدروس",
      href: "/lessons",
      icon: BookOpen,
    },
    {
      name: "التمارين",
      href: "/exercises",
      icon: BookText,
    },
    {
      name: "الألعاب",
      href: "/games",
      icon: Gamepad2,
    },
    {
      name: "التقدم",
      href: "/dashboard",
      icon: BarChart,
    },
    {
      name: "حسابي",
      href: "/profile",
      icon: User,
    },
  ]

  return (
    <div className="hidden md:block border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">تعلم الفرنسية</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-center space-x-4 rtl:space-x-reverse">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <item.icon className="h-4 w-4 mr-2 rtl:ml-2 rtl:mr-0" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">تسجيل الدخول</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">إنشاء حساب</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

