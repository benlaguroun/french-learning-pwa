"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { NavItem } from "@/components/nav-item"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { UserNav } from "@/components/user-nav"
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu"
import {
  Home,
  BookOpen,
  PenTool,
  MessageSquare,
  Music,
  BarChart2,
  BookMarked,
  AlignLeft,
  VolumeX,
  Volume2,
  Crown,
  Brain,
  Gamepad2,
} from "lucide-react"

const navItems = [
  {
    title: "الرئيسية",
    href: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "التعلم",
    href: "/learn",
    icon: <BookOpen className="h-4 w-4" />,
    subItems: [
      {
        title: "الدروس",
        href: "/lessons",
        icon: <BookMarked className="h-4 w-4" />,
        description: "تعلم أساسيات اللغة الفرنسية من خلال دروس منظمة",
      },
      {
        title: "الألفبائية",
        href: "/alphabet",
        icon: <AlignLeft className="h-4 w-4" />,
        description: "تعلم الأحرف الفرنسية والنطق الصحيح لها",
      },
      {
        title: "المقاطع الصوتية",
        href: "/syllables",
        icon: <VolumeX className="h-4 w-4" />,
        description: "تعلم المقاطع الصوتية الفرنسية وكيفية نطقها",
      },
      {
        title: "المفردات",
        href: "/vocabulary",
        icon: <BookOpen className="h-4 w-4" />,
        description: "تعلم مفردات اللغة الفرنسية الأساسية مصنفة حسب المواضيع",
      },
      {
        title: "العبارات الشائعة",
        href: "/phrases",
        icon: <MessageSquare className="h-4 w-4" />,
        description: "تعلم العبارات والجمل الشائعة في اللغة الفرنسية",
      },
      {
        title: "الاستماع",
        href: "/listening",
        icon: <Volume2 className="h-4 w-4" />,
        description: "تدرب على فهم اللغة الفرنسية المنطوقة",
      },
    ],
  },
  {
    title: "التمارين",
    href: "/exercises",
    icon: <PenTool className="h-4 w-4" />,
    subItems: [
      {
        title: "تمارين القراءة",
        href: "/exercises/reading",
        icon: <BookOpen className="h-4 w-4" />,
        description: "تدرب على فهم النصوص الفرنسية المكتوبة",
      },
      {
        title: "تمارين الاستماع",
        href: "/exercises/listening",
        icon: <Music className="h-4 w-4" />,
        description: "تدرب على فهم اللغة الفرنسية المنطوقة",
      },
      {
        title: "تمارين الكتابة",
        href: "/exercises/writing",
        icon: <PenTool className="h-4 w-4" />,
        description: "تدرب على كتابة الجمل والنصوص باللغة الفرنسية",
      },
      {
        title: "تمارين التحدث",
        href: "/exercises/speaking",
        icon: <MessageSquare className="h-4 w-4" />,
        description: "تدرب على التحدث باللغة الفرنسية",
      },
      {
        title: "اختبارات",
        href: "/exercises/quizzes",
        icon: <Brain className="h-4 w-4" />,
        description: "اختبر مستواك في مختلف جوانب اللغة الفرنسية",
      },
    ],
  },
  {
    title: "الألعاب",
    href: "/games",
    icon: <Gamepad2 className="h-4 w-4" />,
    description: "تعلم اللغة الفرنسية من خلال ألعاب تفاعلية وممتعة",
  },
  {
    title: "التحديات",
    href: "/challenges",
    icon: <Crown className="h-4 w-4" />,
    description: "واجه تحديات يومية وأسبوعية لتحسين مهاراتك",
  },
  {
    title: "المحادثة",
    href: "/conversation",
    icon: <MessageSquare className="h-4 w-4" />,
    description: "تدرب على المحادثة باللغة الفرنسية",
  },
  {
    title: "التقدم",
    href: "/dashboard",
    icon: <BarChart2 className="h-4 w-4" />,
    description: "تابع تقدمك وإنجازاتك في تعلم اللغة الفرنسية",
  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    // Check if user is logged in
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)

    // Handle scroll for nav styling
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same height to prevent layout shift
    return (
      <header className="h-16 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container h-full flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold">تعلم الفرنسية</span>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-200",
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-background",
      )}
    >
      <div className="container h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="flex items-center space-x-1 space-x-reverse">
              <div className="h-6 w-1.5 rounded accent-blue"></div>
              <div className="h-6 w-1.5 rounded accent-white"></div>
              <div className="h-6 w-1.5 rounded accent-red"></div>
            </div>
            <span className="text-xl font-bold hidden sm:inline-block">
              تعلم <span className="text-primary">الفرنسية</span>
            </span>
            <span className="text-xl font-bold sm:hidden">
              <span className="text-primary">F</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 space-x-reverse">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavItem key={item.href} item={item} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-3 space-x-reverse">
          <ThemeToggle />
          <LanguageToggle />

          {isLoggedIn ? (
            <UserNav />
          ) : (
            <div className="hidden sm:flex space-x-2 space-x-reverse">
              <Button asChild variant="outline" size="sm">
                <Link href="/login">تسجيل الدخول</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/register">إنشاء حساب</Link>
              </Button>
            </div>
          )}

          {/* Mobile Navigation */}
          <MobileNav items={navItems}>
            {!isLoggedIn && (
              <div className="flex flex-col gap-2 mt-6 px-3">
                <Button asChild>
                  <Link href="/register">إنشاء حساب</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/login">تسجيل الدخول</Link>
                </Button>
              </div>
            )}
          </MobileNav>
        </div>
      </div>
    </header>
  )
}

