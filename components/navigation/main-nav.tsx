"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, BookOpen, Home, User, Gamepad2, Trophy, BarChart3, BookText } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check if user is logged in
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("userToken")
      setIsLoggedIn(!!token)
    }
  }, [])

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "الرئيسية", icon: <Home className="h-5 w-5 ml-2" /> },
    { href: "/lessons", label: "الدروس", icon: <BookOpen className="h-5 w-5 ml-2" /> },
    { href: "/exercises", label: "التمارين", icon: <BookText className="h-5 w-5 ml-2" /> },
    { href: "/games", label: "الألعاب", icon: <Gamepad2 className="h-5 w-5 ml-2" /> },
    { href: "/challenges", label: "التحديات", icon: <Trophy className="h-5 w-5 ml-2" /> },
    { href: "/dashboard", label: "لوحة التحكم", icon: <BarChart3 className="h-5 w-5 ml-2" /> },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <span className="text-2xl font-bold text-primary">تعلم الفرنسية</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <ThemeToggle />

            {/* Desktop auth buttons */}
            <div className="hidden md:flex items-center space-x-2 space-x-reverse">
              {isLoggedIn ? (
                <Link href="/profile">
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <User className="h-4 w-4 ml-2" />
                    الملف الشخصي
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="ghost" size="sm">
                      تسجيل الدخول
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button size="sm">إنشاء حساب</Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="القائمة">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px] pt-10">
                <div className="flex flex-col h-full">
                  <div className="flex justify-end mb-6">
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-6 w-6" />
                    </Button>
                  </div>

                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center py-2 px-3 rounded-md text-base font-medium transition-colors hover:bg-muted ${
                          pathname === item.href ? "bg-muted text-primary" : "text-foreground"
                        }`}
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-auto pt-6 border-t">
                    {isLoggedIn ? (
                      <Link href="/profile" onClick={() => setIsOpen(false)}>
                        <Button className="w-full" variant="outline">
                          <User className="h-4 w-4 ml-2" />
                          الملف الشخصي
                        </Button>
                      </Link>
                    ) : (
                      <div className="flex flex-col space-y-2">
                        <Link href="/login" onClick={() => setIsOpen(false)}>
                          <Button className="w-full" variant="outline">
                            تسجيل الدخول
                          </Button>
                        </Link>
                        <Link href="/register" onClick={() => setIsOpen(false)}>
                          <Button className="w-full">إنشاء حساب</Button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

