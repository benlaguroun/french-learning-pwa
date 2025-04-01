"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { User, Settings, HelpCircle, LogOut, Bell, BookMarked, Award, Heart } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserNav() {
  const [notifications, setNotifications] = useState(3)
  const [userName, setUserName] = useState("مستخدم")
  const [userEmail, setUserEmail] = useState("user@example.com")
  const [userAvatar, setUserAvatar] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Simulate getting user data from localStorage or API
    const user = {
      name: localStorage.getItem("userName") || "مستخدم",
      email: localStorage.getItem("userEmail") || "user@example.com",
      avatar: localStorage.getItem("userAvatar") || "",
    }

    setUserName(user.name)
    setUserEmail(user.email)
    setUserAvatar(user.avatar)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userName")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userAvatar")
    window.location.href = "/"
  }

  if (!mounted) return null

  return (
    <div className="flex items-center gap-2">
      {/* Notifications */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            {notifications > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                {notifications}
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>الإشعارات</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer">
              <BookMarked className="ml-2 h-4 w-4" />
              <span>درس جديد متاح</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Award className="ml-2 h-4 w-4" />
              <span>أكملت 5 دروس متتالية!</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Heart className="ml-2 h-4 w-4" />
              <span>تم تحديث ملفك الشخصي</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild className="cursor-pointer justify-center font-medium text-primary">
            <Link href="/notifications">عرض جميع الإشعارات</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* User Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src={userAvatar || "/placeholder.svg?height=32&width=32"} alt={userName} />
              <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{userName}</p>
              <p className="text-xs leading-none text-muted-foreground">{userEmail}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href="/profile">
                <User className="ml-2 h-4 w-4" />
                <span>الملف الشخصي</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href="/dashboard">
                <Award className="ml-2 h-4 w-4" />
                <span>التقدم والإنجازات</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href="/settings">
                <Settings className="ml-2 h-4 w-4" />
                <span>الإعدادات</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href="/help">
                <HelpCircle className="ml-2 h-4 w-4" />
                <span>المساعدة والدعم</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive" onClick={handleLogout}>
            <LogOut className="ml-2 h-4 w-4" />
            <span>تسجيل الخروج</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

